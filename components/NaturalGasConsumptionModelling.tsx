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
      <ForecastPlot data={data} forecastedTemperaturesEnabled={false} />

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

      <h3 className="text-3xl mt-14 text-right">Potential regressors</h3>
      <RegressorPlot />

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

      <h3 className="text-3xl mt-14 text-right">Short-term forecast</h3>
      <ForecastPlot
        data={data}
        daysHistoric={7}
        daysForecasted={14}
        borderWidth={2.5}
        height={600}
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

      <h3 className="text-3xl mt-14 text-right">Long-term forecast</h3>
      <ForecastPlot data={data} daysHistoric={7} height={500} />

      <p>
        Technical implementation and conclusion ......... Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae
        aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl
        nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl
        vel tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl
        et nisl. Sed euismod, nisl vel tincidunt lacinia, Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae
        aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl
        nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl
        vel tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl
        et nisl. Sed euismod, nisl vel tincidunt lacinia, Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae
        aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl
        nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl
        vel tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl
        et nisl. Sed euismod, nisl vel tincidunt lacinia,
      </p>

      <h3 className="text-3xl mt-14 text-right">Acknowledgements</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl
        nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet
        nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel
      </p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <h4 className="text-3xl mt-14 mb-6">Data</h4>

          <h5 className="font-bold text-lg mb-2 mt-6">Weather</h5>
          <p>
            Copernicus Climate Change Service (2020): Climate and energy
            indicators for Europe from 1979 to present derived from reanalysis.
            Copernicus Climate Change Service (C3S) Climate Data Store (CDS).
            10.24381/cds.4bd77450 (Accessed on 02-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/sis-energy-derived-reanalysis"
            >
              https://cds.climate.copernicus.eu/cdsapp#!/dataset/sis-energy-derived-reanalysis
            </a>
          </p>
          <br />
          <p>Open-Meteo: Historical Weather API</p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://open-meteo.com/"
            >
              https://open-meteo.com/
            </a>
          </p>
          <p>
            License:{" "}
            <a
              className="underline hover:text-gray-400"
              href="https://open-meteo.com/en/features#terms"
            >
              https://open-meteo.com/en/features#terms
            </a>
          </p>
          <br />
          <p>Open-Meteo: Free Weather API</p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://open-meteo.com/"
            >
              https://open-meteo.com/
            </a>
          </p>
          <p>
            License:{" "}
            <a
              className="underline hover:text-gray-400"
              href="https://open-meteo.com/en/features#terms"
            >
              https://open-meteo.com/en/features#terms
            </a>
          </p>
          <h5 className="font-bold text-lg mb-2 mt-6">Natural gas prices</h5>
          <p>
            Trading Hub Europe GmbH (2023): Imbalance prices. Format: CSV
            (Accessed on 03-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://www.tradinghub.eu/en-gb/Publications/Prices/Imbalance-Prices"
            >
              https://www.tradinghub.eu/en-gb/Publications/Prices/Imbalance-Prices
            </a>
            .
          </p>
          <br />
          <p>
            Trading Hub Europe GmbH (2023): Archive of publications for the
            former GASPOOL market area. Prices for compensation energy. Format:
            CSV (Accessed on 03-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://www.tradinghub.eu/en-gb/Download/Archive-GASPOOL#1301100-prices-fees-and-charges"
            >
              https://www.tradinghub.eu/en-gb/Download/Archive-GASPOOL#1301100-prices-fees-and-charges
            </a>
          </p>
          <br />
          <p>
            Trading Hub Europe GmbH (2023): Archive of publications for the
            former NCG market area. Imbalance prices according to GaBi Gas 2.0.
            Format: XML (Accessed on 03-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://www.tradinghub.eu/en-gb/Download/Archive-NetConnect-Germany#1306111-conversion"
            >
              https://www.tradinghub.eu/en-gb/Download/Archive-NetConnect-Germany#1306111-conversion
            </a>
          </p>
          <h5 className="font-bold text-lg mb-2 mt-6">Crude oil prices</h5>
          <p>
            U.S. Energy Information Administration, Crude Oil Prices: Brent -
            Europe [DCOILBRENTEU], retrieved from FRED, Federal Reserve Bank of
            St. Louis; March 1, 2023.
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://fred.stlouisfed.org/series/DCOILBRENTEU"
            >
              https://fred.stlouisfed.org/series/DCOILBRENTEU
            </a>
          </p>
          <h5 className="font-bold text-lg mb-2 mt-6">
            European wholesale electricity prices
          </h5>
          <p>
            Ember (2023): European wholesale electricity price data. Wholesale
            day-ahead electricity price data for European countries, sources
            from ENTSO-e and cleaned. Format: CSV (Accessed 03-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://ember-climate.org/data-catalogue/european-wholesale-electricity-price-data/"
            >
              https://ember-climate.org/data-catalogue/european-wholesale-electricity-price-data/
            </a>
          </p>
          <h5 className="font-bold text-lg mb-2 mt-6">
            Emission Allowances auction prices
          </h5>
          <p>
            European Energy Exchange AG (2023): EUA Emission Spot Primary Market
            Auction Report - History. Format: XLS/XLSX (Accessed 04-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://www.eex.com/en/market-data/environmental-markets/eua-primary-auction-spot-download"
            >
              https://www.eex.com/en/market-data/environmental-markets/eua-primary-auction-spot-download
            </a>
          </p>
          <h5 className="font-bold text-lg mb-2 mt-6">
            Natural gas storage levels
          </h5>
          <p>
            GIE (Gas Infrastructure Europe): GIE AISBL 2022. Aggregated Gas
            Storage Inventory (AGSI): Germany. Format: CSV (Accessed
            03-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://agsi.gie.eu/data-overview/DE"
            >
              https://agsi.gie.eu/data-overview/DE
            </a>
          </p>
          <h5 className="font-bold text-lg mb-2 mt-6">
            Natural gas consumption
          </h5>
          <p>
            Trading Hub Europe GmbH (2023): Publication of the aggregate
            consumption data: Aggregated consumption data. Format: CSV (Accessed
            on 04-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://www.tradinghub.eu/en-gb/Publications/Transparency/Aggregated-consumption-data"
            >
              https://www.tradinghub.eu/en-gb/Publications/Transparency/Aggregated-consumption-data
            </a>
          </p>
          <br />
          <p>
            Trading Hub Europe GmbH (2023): Archive of publications for the
            former GASPOOL market area. Other: Aggregated Consumption Date
            Market Area GASPOOL (CSV File). Format: CSV (Accessed on
            04-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://www.tradinghub.eu/en-gb/Download/Archive-GASPOOL#1301161-other"
            >
              https://www.tradinghub.eu/en-gb/Download/Archive-GASPOOL#1301161-other
            </a>
          </p>
          <br />
          <p>
            Trading Hub Europe GmbH (2023): Archive of publications for the
            former NCG market area. Other: Aggregated consumption data (CSV
            File). Format: CSV (Accessed on 04-Mar-2023)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://www.tradinghub.eu/en-gb/Download/Archive-NetConnect-Germany#1306157-other"
            >
              https://www.tradinghub.eu/en-gb/Download/Archive-NetConnect-Germany#1306157-other
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-3xl mt-14 mb-6">Models & libraries</h4>
          <p>
            NeuralProphet: Explainable Forecasting at Scale by Oskar Triebe and
            Hansika Hewamalage and Polina Pilyugina and Nikolay Laptev and
            Christoph Bergmeir and Ram Rajagopal. (2021)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href=""
              ></a>
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://neuralprophet.com/"
            >
              https://neuralprophet.com/
            </a>
          </p>
          <br />
          <p>
            statsmodels: Econometric and statistical modeling with python by
            Seabold, Skipper and Perktold, Josef in 9th Python in Science
            Conference (2010)
          </p>
          <p>
            Used models: Multiple Linear Regression, Autoregressive model with
            exegenous regressor (AR-X) and SARIMAX
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://www.statsmodels.org/"
            >
              https://www.statsmodels.org/
            </a>
          </p>
          <br />
          <p>
            XGBoost: A Scalable Tree Boosting System by Chen, Tianqi and Guestrin,
            Carlos in Proceedings of the 22nd ACM SIGKDD International Conference
            on Knowledge Discovery and Data Mining (2016)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://doi.org/10.1145/2939672.2939785"
              >https://doi.org/10.1145/2939672.2939785</a>
          </p>
          <br />
          <p>
            pandas-dev/pandas: Pandas by The pandas development team (2020)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://pandas.pydata.org/">
              https://pandas.pydata.org/
              </a>
          </p>
        </div>
      </div>
    </div>
  );
};
