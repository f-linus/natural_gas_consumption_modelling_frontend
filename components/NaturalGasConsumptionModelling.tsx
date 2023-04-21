import React from "react";
import Chart from "chart.js/auto";

export const NaturalGasConsumptionModelling = () => {
  // Get the data from the Google Cloud Storage backend
  // at https://storage.googleapis.com/natural_gas_consumption_modelling/db

  const [data, setData] = React.useState<any>({});
  React.useEffect(() => {
    fetch(
      `https://storage.googleapis.com/natural_gas_consumption_modelling/db`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // Draw chart once data is loaded
  const chartRef = React.useRef<any>(null);
  React.useEffect(() => {
    if (Object.keys(data).length === 0) return;

    const historicConsumptionData = Object.values(
      data.historic_consumption_data
    );
    const historicTemperatureData = Object.values(
      data.historic_temperature_data
    );

    const forecastConsumptionData = Object.values(
      data.natural_gas_consumption_forecast
    );

    const timeline = [
      ...Object.keys(data.historic_consumption_data),
      ...Object.keys(data.natural_gas_consumption_forecast),
    ];

    const ctx = document.getElementById("chart") as HTMLCanvasElement;

    // Make sure canvas is not in use
    // if (ctx) ctx.remove();

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: timeline,
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
            label: "Historic Temperatures",
            data: historicTemperatureData,
            fill: false,
            borderColor: "rgba(255, 99, 132, 1.0)",
            borderWidth: 1,
            tension: 0.1,
            yAxisID: "temperatureScale",
          },
          {
            label: "Natural Gas Consumption Forecast",
            data: [
              ...Array(historicConsumptionData.length).fill(null),
              ...forecastConsumptionData,
            ],
            fill: false,
            borderColor: "rgba(230, 230, 230, 1.0)",
            borderWidth: 1,
            tension: 0.1,
            yAxisID: "consumptionScale",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
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
          }
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  // Make canvas full width but keep aspect ratio
  return <canvas id="chart" ref={chartRef} className="w-full" />;
};
