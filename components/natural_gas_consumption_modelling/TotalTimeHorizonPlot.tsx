import React from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

export const TotalTimeHorizonPlot = (props: any) => {

  const { data } = props;

  // Calculate how long the last model run is ago (in hours)
  const last_model_run_ago = React.useMemo(() => {
    if (Object.keys(data).length === 0) return;

    // data.last_consumption_forecast is a tz un-aware date string and should be treated as UTC
    const last_model_run = new Date(data.last_consumption_forecast);

    // Calculate the timezone offset
    const offset = last_model_run.getTimezoneOffset() * 60 * 1000;

    // Calculate the difference in hours
    const hours = Math.round(
      (new Date().getTime() - last_model_run.getTime() + offset) /
        (1000 * 60 * 60)
    );

    return hours;
  }, [data]);

  // Draw chart once data is loaded
  const chartRef = React.useRef<any>(null);
  React.useEffect(() => {
    if (Object.keys(data).length === 0) return;

    // Turn dict of data {date: value} into array of values [{x: date, y: value}, {x: date, y: value}, ...]
    const historicConsumptionData = Object.entries(
      data.historic_consumption_data
    ).map(([date, value]) => ({ x: date, y: value }));

    const historicTemperatureData = Object.entries(
      data.historic_temperature_data
    ).map(([date, value]) => ({ x: date, y: value }));

    const forecastConsumptionData = Object.entries(
      data.natural_gas_consumption_forecast
    ).map(([date, value]) => ({ x: date, y: value }));

    const ctx = document.getElementById("total-time-horizon-natural-gas-chart") as HTMLCanvasElement;

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Historic Natural Gas Consumption",
            data: historicConsumptionData,
            fill: false,
            borderColor: "rgba(230, 230, 230, 0.4)",
            borderWidth: 1,
            tension: 0.1,
            yAxisID: "consumptionScale",
          },
          {
            label: "Natural Gas Consumption Forecast",
            data: forecastConsumptionData,
            fill: false,
            borderColor: "rgba(230, 230, 230, 1.0)",
            borderWidth: 1,
            tension: 0.1,
            yAxisID: "consumptionScale",
          },
          {
            label: "Historic Temperatures",
            data: historicTemperatureData,
            fill: false,
            borderColor: "rgba(255, 99, 132, 0.4)",
            borderWidth: 1,
            tension: 0.1,
            yAxisID: "temperatureScale",
            hidden: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            min: historicConsumptionData[0].x,
          },
          consumptionScale: {
            type: "linear",
            display: true,
            position: "left",
            beginAtZero: true,
          },
          temperatureScale: {
            type: "linear",
            display: true,
            position: "right",
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  // Make canvas full width but keep aspect ratio
  return (
    <div  className="mb-14">
      <canvas id="total-time-horizon-natural-gas-chart" ref={chartRef} className="w-full" />
      <p className="text-right text-gray-300">
        last model run {last_model_run_ago} hours ago
      </p>
    </div>
  );
};
