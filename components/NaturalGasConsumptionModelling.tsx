import React from "react";
import { ForecastPlot } from "./natural_gas_consumption_modelling/ForecastPlot";
import { RegressorPlot } from "./natural_gas_consumption_modelling/RegressorPlot";

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

  return (
    <div>
      <ForecastPlot
        data={data}
        forecastedTemperaturesEnabled={false}
      />

      <p>
        Context and goal setting, basically the short-version of the BA
        introduction ........ Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl,
        vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae
        aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl
        nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet
        nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae
        aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl
        aliquet
      </p>

      <h3 className="text-3xl mt-14 text-right">Short-term forecast</h3>
      <ForecastPlot
        data={data}
        daysHistoric={7}
        daysForecasted={14}
        borderWidth={2.5}
        height={600}
      />

      <p>
        Potential regressor, hypotheses and their result ........ Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel
        tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et
        nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl,
        vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae
        aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt lacinia,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl
        nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet
        nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae
        aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt lacinia,
      </p>

      <h3 className="text-3xl mt-14 text-right">Long-term forecast</h3>
      <ForecastPlot
        data={data}
        daysHistoric={7}
        height={500}
      />

      <p>
        Modelling ......... Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl,
        vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae
        aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl
        nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl
        vel tincidunt lacinia, Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl
        aliquet nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel
        tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et
        nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl,
        vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia,
        nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed euismod,
        nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl
        nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet
        nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia,
      </p>

      <h3 className="text-3xl mt-14 text-right">Potential regressors</h3>
      <RegressorPlot />

      <h3 className="text-3xl mt-14 text-right">Acknowledgements</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl
        nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet
        nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-3xl mt-14">Data</h4>

          <h3 id="weather">Weather</h3>
          <h4 id="historic-daily-mean-temperature-in-germany">
            Historic daily mean temperature in Germany
          </h4>
          <p>
            Copernicus Climate Change Service (2020): Climate and energy
            indicators for Europe from 1979 to present derived from reanalysis.
            Copernicus Climate Change Service (C3S) Climate Data Store (CDS).
            10.24381/cds.4bd77450 (Accessed on 02-Mar-2023)
          </p>
          <p>
            <a href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/sis-energy-derived-reanalysis">
              https://cds.climate.copernicus.eu/cdsapp#!/dataset/sis-energy-derived-reanalysis
            </a>
          </p>
          <p>Open-Meteo: Historical Weather API</p>
          <p>
            <a href="https://open-meteo.com/">https://open-meteo.com/</a>
          </p>
          <p>
            License:{" "}
            <a href="https://open-meteo.com/en/features#terms">
              https://open-meteo.com/en/features#terms
            </a>
          </p>
          <h4 id="current-weather-and-current-weather-forecasts">
            Current weather and current weather forecasts
          </h4>
          <p>Open-Meteo: Free Weather API</p>
          <p>
            <a href="https://open-meteo.com/">https://open-meteo.com/</a>
          </p>
          <p>
            License:{" "}
            <a href="https://open-meteo.com/en/features#terms">
              https://open-meteo.com/en/features#terms
            </a>
          </p>
          <h3 id="energy-commodity-prices">Energy commodity prices</h3>
          <h4 id="natural-gas">Natural gas</h4>
          <h5 id="imbalance-prices-for-the-trading-hub-europe-market-area">
            Imbalance prices for the Trading Hub Europe market area
          </h5>
          <p>
            Trading Hub Europe GmbH (2023): Imbalance prices. Format: CSV
            (Accessed on 03-Mar-2023)
          </p>
          <p>
            <a href="https://www.tradinghub.eu/en-gb/Publications/Prices/Imbalance-Prices">
              https://www.tradinghub.eu/en-gb/Publications/Prices/Imbalance-Prices
            </a>
            .
          </p>
          <h5 id="imbalance-prices-for-the-historic-gaspool-market-area">
            Imbalance prices for the historic GASPOOL market area
          </h5>
          <p>
            Trading Hub Europe GmbH (2023): Archive of publications for the
            former GASPOOL market area. Prices for compensation energy. Format:
            CSV (Accessed on 03-Mar-2023)
          </p>
          <p>
            <a href="https://www.tradinghub.eu/en-gb/Download/Archive-GASPOOL#1301100-prices-fees-and-charges">
              https://www.tradinghub.eu/en-gb/Download/Archive-GASPOOL#1301100-prices-fees-and-charges
            </a>
          </p>
          <h5 id="imbalance-prices-for-the-historic-netconnect-germany-market-area">
            Imbalance prices for the historic NetConnect Germany market area
          </h5>
          <p>
            Trading Hub Europe GmbH (2023): Archive of publications for the
            former NCG market area. Imbalance prices according to GaBi Gas 2.0.
            Format: XML (Accessed on 03-Mar-2023)
          </p>
          <p>
            <a href="https://www.tradinghub.eu/en-gb/Download/Archive-NetConnect-Germany#1306111-conversion">
              https://www.tradinghub.eu/en-gb/Download/Archive-NetConnect-Germany#1306111-conversion
            </a>
          </p>
          <h4 id="crude-oil">Crude oil</h4>
          <p>
            U.S. Energy Information Administration, Crude Oil Prices: Brent -
            Europe [DCOILBRENTEU], retrieved from FRED, Federal Reserve Bank of
            St. Louis; March 1, 2023.
          </p>
          <p>
            <a href="https://fred.stlouisfed.org/series/DCOILBRENTEU">
              https://fred.stlouisfed.org/series/DCOILBRENTEU
            </a>
          </p>
          <h4 id="electricity">Electricity</h4>
          <p>
            Ember (2023): European wholesale electricity price data. Wholesale
            day-ahead electricity price data for European countries, sources
            from ENTSO-e and cleaned. Format: CSV (Accessed 03-Mar-2023)
          </p>
          <p>
            <a href="https://ember-climate.org/data-catalogue/european-wholesale-electricity-price-data/">
              https://ember-climate.org/data-catalogue/european-wholesale-electricity-price-data/
            </a>
          </p>
          <h3 id="emission-allowance-prices">Emission allowance prices</h3>
          <h4 id="auction-results-for-european-emission-allowances-euas-at-the-european-energy-exchange-eex-">
            Auction results for European Emission Allowances (EUAs) at the
            European Energy Exchange (EEX)
          </h4>
          <p>
            European Energy Exchange AG (2023): EUA Emission Spot Primary Market
            Auction Report - History. Format: XLS/XLSX (Accessed 04-Mar-2023)
          </p>
          <p>
            <a href="https://www.eex.com/en/market-data/environmental-markets/eua-primary-auction-spot-download">
              https://www.eex.com/en/market-data/environmental-markets/eua-primary-auction-spot-download
            </a>
          </p>
          <h3 id="natural-gas-storage-levels-in-germany">
            Natural gas storage levels in Germany
          </h3>
          <p>
            GIE (Gas Infrastructure Europe): GIE AISBL 2022. Aggregated Gas
            Storage Inventory (AGSI): Germany. Format: CSV (Accessed
            03-Mar-2023)
          </p>
          <p>
            <a href="https://agsi.gie.eu/data-overview/DE">
              https://agsi.gie.eu/data-overview/DE
            </a>
          </p>
          <h3 id="natural-gas-consumption-in-germany">
            Natural gas consumption in Germany
          </h3>
          <h4 id="daily-natural-gas-consumption-in-the-trading-hub-europe-market-area">
            Daily natural gas consumption in the Trading Hub Europe market area
          </h4>
          <p>
            Trading Hub Europe GmbH (2023): Publication of the aggregate
            consumption data: Aggregated consumption data. Format: CSV (Accessed
            on 04-Mar-2023)
          </p>
          <p>
            <a href="https://www.tradinghub.eu/en-gb/Publications/Transparency/Aggregated-consumption-data">
              https://www.tradinghub.eu/en-gb/Publications/Transparency/Aggregated-consumption-data
            </a>
          </p>
          <h4 id="daily-natural-gas-consumption-in-the-historic-gaspool-market-area">
            Daily natural gas consumption in the historic GASPOOL market area
          </h4>
          <p>
            Trading Hub Europe GmbH (2023): Archive of publications for the
            former GASPOOL market area. Other: Aggregated Consumption Date
            Market Area GASPOOL (CSV File). Format: CSV (Accessed on
            04-Mar-2023)
          </p>
          <p>
            <a href="https://www.tradinghub.eu/en-gb/Download/Archive-GASPOOL#1301161-other">
              https://www.tradinghub.eu/en-gb/Download/Archive-GASPOOL#1301161-other
            </a>
          </p>
          <h4 id="daily-natural-gas-consumption-in-the-historic-netconnect-germany-market-area">
            Daily natural gas consumption in the historic NetConnect Germany
            market area
          </h4>
          <p>
            Trading Hub Europe GmbH (2023): Archive of publications for the
            former NCG market area. Other: Aggregated consumption data (CSV
            File). Format: CSV (Accessed on 04-Mar-2023)
          </p>
          <p>
            <a href="https://www.tradinghub.eu/en-gb/Download/Archive-NetConnect-Germany#1306157-other">
              https://www.tradinghub.eu/en-gb/Download/Archive-NetConnect-Germany#1306157-other
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-3xl mt-14">Models & algorithms</h4>
        </div>
      </div>
    </div>
  );
};
