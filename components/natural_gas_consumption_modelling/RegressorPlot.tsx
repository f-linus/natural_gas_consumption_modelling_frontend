import React from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

export const RegressorPlot = () => {

  // Get data from API
  const [data, setData] = React.useState<any>({});
  React.useEffect(() => {
    fetch(
      `https://storage.googleapis.com/natural_gas_consumption_modelling/regressors_combined_extract.json`,
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

    // Iterate through array of dicts and extract data
    // [{index: "2020-01-01", consumption: 1, temperature: 2}, ...] -> labels = ["2020-01-01", ...], consumptionData = [1, ...], temperatureData = [2, ...] ...

    const labels = data.map((d: any) => d.index);
    const consumptionData = data.map((d: any) => d.consumption);
    const temperatureData = data.map((d: any) => d.temperature);
    const gasPriceData = data.map((d: any) => d.imbalance_prices);
    const electricityPriceData = data.map((d: any) => d.electricity_price);
    const oilPriceData = data.map((d: any) => d.crude_oil_price);
    const euaPriceData = data.map((d: any) => d.eua_price);
    const storageData = data.map((d: any) => d.storage_levels);

    // Chart
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Consumption",
            data: consumptionData,
            fill: false,
            borderColor: "rgb(230, 230, 230)",
            borderWidth: 1.5,
            tension: 0.1,
            pointRadius: 0,
            yAxisID: "consumptionScale",
          },
          {
            label: "Temperature",
            data: temperatureData,
            fill: false,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            tension: 0.1,
            pointRadius: 0,
            yAxisID: "temperatureScale",
            hidden: true,
          },
          {
            label: "Gas price",
            data: gasPriceData,
            fill: false,
            borderColor: "rgb(255, 159, 64)",
            borderWidth: 1,
            tension: 0.1,
            pointRadius: 0,
            yAxisID: "gasPriceScale",
            hidden: true,
          },
          {
            label: "Oil price",
            data: oilPriceData,
            fill: false,
            borderColor: "rgb(255, 205, 86)",
            borderWidth: 1,
            tension: 0.1,
            pointRadius: 0,
            yAxisID: "oilePriceScale",
            hidden: true,
          },
          {
            label: "Electricity price",
            data: electricityPriceData,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 1,
            tension: 0.1,
            pointRadius: 0,
            yAxisID: "electricityPriceScale",
            hidden: true,
          },
          {
            label: "EUAs price",
            data: euaPriceData,
            fill: false,
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
            tension: 0.1,
            pointRadius: 0,
            yAxisID: "euaPriceScale",
          },
          {
            label: "Storage levels",
            data: storageData,
            fill: false,
            borderColor: "rgb(153, 102, 255)",
            borderWidth: 1,
            tension: 0.1,
            pointRadius: 0,
            yAxisID: "storageScale",
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
                day: "d. MMM yy",
              },
            },
          },
          consumptionScale: {
            type: "linear",
            title: {
              display: true,
              text: "Consumption (MWh)",
            },
            display: "auto",
            position: "right",
            beginAtZero: true,
          },
          temperatureScale: {
            type: "linear",
            title: {
              display: true,
              text: "Temperature (°C)",
            },
            position: "right",
            display: "auto",
          },
          gasPriceScale: {
            type: "linear",
            title: {
              display: true,
              text: "Gas price (€/MWh)",
            },
            position: "right",
            display: "auto",
          },
          oilePriceScale: {
            type: "linear",
            title: {
              display: true,
              text: "Oil price (USD/bbl)",
            },
            position: "right",
            display: "auto",
          },
          electricityPriceScale: {
            type: "linear",
            title: {
              display: true,
              text: "Electricity price (€/MWhe)",
            },
            position: "right",
            display: "auto",
          },
          euaPriceScale: {
            type: "linear",
            title: {
              display: true,
              text: "EUAs price (€/tCO2e)",
            },
            position: "right",
            display: "auto",
          },
          storageScale: {
            type: "linear",
            title: {
              display: true,
              text: "Storage levels (TWh)",
            },
            position: "right",
            display: "auto",
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
    <div className="mb-14" style={{height: 750}}>
      <canvas ref={chartRef} className="w-full" />
    </div>
  );
};
