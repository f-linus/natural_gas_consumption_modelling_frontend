import React from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

export const NaturalGasConsumptionForecastPlot = (props: any) => {
  const {
    data,
    historicConsumptionEnabled = true,
    historicTemperaturesEnabled = true,
    forecastedConsumptionEnabled = true,
    forecastedTemperaturesEnabled = true,
    borderWidth = 1,
    height = 750,
    daysHistoric,
    daysForecasted,
  } = props;

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
    ).map(([date, value]) => ({ x: new Date(date), y: value }));

    const historicTemperatureData = Object.entries(
      data.historic_temperature_data
    ).map(([date, value]) => ({ x: new Date(date), y: value }));

    const forecastConsumptionData = Object.entries(
      data.natural_gas_consumption_forecast
    ).map(([date, value]) => ({ x: new Date(date), y: value }));

    const forecastedTemperatureData = Object.entries(
      data.temperature_forecast
    ).map(([date, value]: any) => ({
      x: new Date(date),
      y: value.temperature,
    }));

    // If daysHistoric is set, cut down historic consumption data
    var historicConsumptionDataCropped;
    if (daysHistoric) {
      historicConsumptionDataCropped = historicConsumptionData.slice(
        -daysHistoric
      );
    } else {
      historicConsumptionDataCropped = historicConsumptionData;
    }

    // If daysForecasted is set, cut down forecasted consumption data
    var forecastConsumptionDataCropped;
    if (daysForecasted) {
      forecastConsumptionDataCropped = forecastConsumptionData.slice(
        0,
        daysForecasted
      );
    } else {
      forecastConsumptionDataCropped = forecastConsumptionData;
    }

    // Cut historic temperature data to the time period of the historic consumption data
    const historicConsumptionDataStartDate =
      historicConsumptionDataCropped[0].x;
    const historicConsumptionDataEndDate =
      historicConsumptionDataCropped[historicConsumptionDataCropped.length - 1].x;
    const historicTemperatureDataCropped = historicTemperatureData.filter(
      (d: any) =>
        d.x >= historicConsumptionDataStartDate &&
        d.x <= historicConsumptionDataEndDate
    );

    // Cut forecasted temperature data to the time period of the forecasted consumption data
    const forecastConsumptionDataStartDate =
      forecastConsumptionDataCropped[0].x;
    const forecastConsumptionDataEndDate =
      forecastConsumptionDataCropped[forecastConsumptionDataCropped.length - 1].x;
    const forecastedTemperatureDataCropped = forecastedTemperatureData.filter(
      (d: any) =>
        d.x >= forecastConsumptionDataStartDate &&
        d.x <= forecastConsumptionDataEndDate
    );

    // Chart
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Historic Consumption",
            data: historicConsumptionDataCropped,
            fill: false,
            borderColor: "rgba(230, 230, 230, 0.4)",
            borderWidth: borderWidth,
            tension: 0.1,
            yAxisID: "consumptionScale",
            hidden: !historicConsumptionEnabled,
          },
          {
            label: "Consumption Forecast",
            data: forecastConsumptionDataCropped,
            fill: false,
            borderColor: "rgba(230, 230, 230, 1.0)",
            borderWidth: borderWidth,
            tension: 0.1,
            yAxisID: "consumptionScale",
            hidden: !forecastedConsumptionEnabled,
          },
          {
            label: "Historic Temperatures",
            data: historicTemperatureDataCropped,
            fill: false,
            borderColor: "rgba(255, 99, 132, 0.4)",
            borderWidth: borderWidth,
            tension: 0.1,
            yAxisID: "temperatureScale",
            hidden: !historicTemperaturesEnabled,
          },
          {
            label: "Temperature Forecast",
            data: forecastedTemperatureDataCropped,
            fill: false,
            borderColor: "rgba(255, 99, 132, 1.0)",
            borderWidth: borderWidth,
            tension: 0.1,
            yAxisID: "temperatureScale",
            hidden: !forecastedTemperaturesEnabled,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
              displayFormats: {
                // e.g Jan 99
                day: "d. MMM yy",
              },
            },
          },
          consumptionScale: {
            type: "linear",
            display: "auto",
            position: "right",
            beginAtZero: true,
            // MWh scale
            ticks: {
              callback: function (value: any) {
                // Add thousands separator
                return (
                  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                  " MWh"
                );
              },
            },
          },
          temperatureScale: {
            type: "linear",
            position: "left",
            display: "auto",
            // Celsisus scale
            ticks: {
              callback: function (value: any) {
                return value + " °C";
              },
            },
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
    <div className="mb-14" style={{height: height}}>
      <canvas ref={chartRef} className="w-full" />
      <p className="text-right text-gray-300">
        last model run {last_model_run_ago} hours ago
      </p>
    </div>
  );
};
