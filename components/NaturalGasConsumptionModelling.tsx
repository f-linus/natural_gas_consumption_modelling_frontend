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
        {
          "Germany's dependence on natural gas is undeniable, with consumption of this fossil fuel rising steadily over the past decades. Even amidst the shift towards renewable energy sources, natural gas continues to play a crucial role, primarily as a transition fuel, enabling organisations and policymakers to meet short-term CO2 reduction targets. It's also critical for heat-intensive industrial processes and residential heating, areas that have traditionally been difficult to transition to clean energy sources. Given the unique position of natural gas within our economic system, understanding and forecasting its demand is of paramount importance, particularly in times of supply disruption, such as during the Ukrainian war. Proper planning and procurement of natural gas supplies is essential to prevent severe shortages that could drastically affect a country's gross domestic product."
        }
      </p>
      <br />
      <p>
        {
          "Attempts to forecast natural gas consumption have a long history, with early models focusing on statistical approaches that took into account aspects such as household income, GDP and ambient temperature. The advent of advanced computing resources led to the application of more sophisticated models, including Artificial Neural Networks (ANNs), Support Vector Regression (SVR) and deep learning models such as Long Short-Term Memory (LSTM) models. While these forecasting techniques have led to unprecedented advances, much of the previous work on natural gas consumption modelling lacks reproducibility due to limited access to the underlying data or exact model parameters. This is often due to licensing restrictions imposed on authors."
        }
      </p>
      <br />
      <p>
        {
          "This project aims to bridge this gap by providing an open source and publicly available platform for natural gas consumption forecasting in Germany. The focus is on ensuring that critical data on the dependent variable and potential independent variables are publicly available, that forecasts are implemented in a time-efficient manner using state-of-the-art models and frameworks, and that these forecasts are continuously published and productized. The aim is to make energy-related scientific issues, which have a significant impact on everyday life, more accessible to the general public."
        }
      </p>

      <h3 className="text-3xl mt-14 text-right">Potential regressors</h3>
      <RegressorPlot />

      <p>
        {
          "Finding the right data for a model can be challenging. Dependent variables for the model have been established in literature. Recent works offer an overview of factors influencing natural gas consumption in today's energy market. A study of literature surveys and discussions was conducted to identify consumption indicators."
        }
      </p>
      <br />
      <p>
        {
          "Special challenges are faced in this work. All datasets used must be open-source and programmatically accessible for the model."
        }
      </p>
      <br />
      <p>{"The potential regressors considered for the model are:"}</p>
      <ul>
        <li>
          {
            "Temperature: The relationship between natural gas consumption and temperature is well-established in literature."
          }
        </li>
        <li>
          {
            'Natural gas prices: The influence of pricing on consumption is well-studied, described through "price elasticity."'
          }
        </li>
        <li>
          {
            "Crude oil prices: Prices of other energy commodities can impact natural gas consumption due to substitution effects."
          }
        </li>
        <li>
          {
            "Coal prices: Wholesale prices of coal can also affect natural gas consumption."
          }
        </li>
        <li>
          {
            "Electricity prices: Electricity is an energy commodity that can substitute natural gas to some extent."
          }
        </li>
        <li>
          {
            "Auction prices of European Emission Allowances (EUAs): The European Emission Trading System caps natural gas consumption, but the relationship can be both positive and negative."
          }
        </li>
        <li>
          {
            "Natural gas storage levels: Storage levels of natural gas can serve as an indicator of demand and consumption."
          }
        </li>
      </ul>
      <br />
      <p>
        {
          "To obtain the necessary data, various sources are used. Consumption data for natural gas in Germany is provided by Trading Hub Europe GmbH. Temperature data is sourced from the atmospheric reanalysis model ERA-5 and real-time weather information from Open-meteo. Natural gas prices are obtained from Trading Hub Europe GmbH. Brent crude oil prices are available from the U.S. Energy Information Administration. Electricity prices data is provided by Ember. Auction prices of European Emission Allowances (EUAs) are obtained from the European Energy Exchange AG (EEX). Natural gas storage levels data is sourced from Engie."
        }
      </p>
      <br />
      <p>
        {
          "The data analysis reveals seasonal patterns in natural gas consumption and the importance of temperature as a factor. The historic data of consumption, temperature, and other variables are examined in the figures provided."
        }
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
        {
          "After understanding the dynamics of natural gas consumption, a model was designed, trained, and evaluated to forecast Germany's natural gas consumption. Previous models, such as a simple seasonal model and a piecewise-linear temperature model, showed promising results, but more sophisticated models are now established in literature. Several models are discussed, including multiple linear regression, Autoregressive Exogenous Model (ARX), Seasonal Autoregressive Integrated Moving Average Model with exogenous regressors (SARIMAX), XGBoost, and NeuralProphet."
        }
      </p>
      <br />
      <p>
        {
          "The performance of these models is compared using metrics like Mean Absolute Percentage Error (MAPE). The temperature-only versions of ARX and NeuralProphet are also evaluated to create a fully automated forecasting system. The NeuralProphet model performs well in both short-term and long-term forecasts. A hybrid approach is proposed for temperature forecasting, combining short-term forecasts from weather services with a mid-term model trained on historic data. The combined temperature forecasts, along with the temperature-only NeuralProphet model, enable the forecasting of natural gas consumption for the next 365 days."
        }
      </p>
      <br />
      <p>
        {
          "This approach strikes a balance between predictive performance and deployability, making it suitable for practical applications."
        }
      </p>

      <h3 className="text-3xl mt-14 text-right">Long-term forecast</h3>
      <ForecastPlot data={data} daysHistoric={7} height={500} />

      <p>
        {
          "The primary aim of this project was to develop and deploy a public-facing natural gas forecasting model, which re-trains and updates predictions daily. The resultant data needs to be stored and served to the public in a straightforward manner. In terms of architecture, the design leans towards simplicity and efficiency. Both temperature and natural gas consumption prediction models are encapsulated in a Docker container as Python code. The results are saved using a storage service that channels forecasts via a backend to be accessed by a frontend. This entire backend operation is hosted on Google Cloud Platform."
        }
      </p>
      <br />
      <p>
        {
          "A scheduling service is set up to activate daily model re-training and run the model at a certain time. The new forecasts are stored in Google Cloud Storage, from where they can be accessed by users through the frontend. The frontend comprises a web application built with TypeScript and the Next.js framework, with Tailwind CSS aiding in styling. The app's primary function is to visualize data retrieved from the storage endpoint on Google Cloud Storage, avoiding the need for implementing any additional logic."
        }
      </p>
      <br />
      <p>
        {
          "While the model re-training and runs take place on the Docker container hosted on Google Cloud Platform, the frontend is also hosted on a fully managed platform, Vercel, to reduce costs and administrative tasks. Vercel, which offers free service for non-commercial use, links to a Git repository of a web application built with one of many approved frameworks, managing the deployment and serving of the web application. Though utilizing fully-managed infrastructure solutions may not be a necessity or suit everyone's unique requirements, in this instance, it helps to keep the solution simple and easily reproducible."
        }
      </p>
      <br />
      <p>
        The entire work presented is fully reproducible. Both backend (
        <a
          className="underline hover:text-gray-400"
          href="https://github.com/f-linus/natural_gas_consumption_modelling"
        >
          GitHub
        </a>
        ) and frontend (
        <a
          className="underline hover:text-gray-400"
          href="https://github.com/f-linus/natural_gas_consumption_modelling_frontend"
        >
          GitHub
        </a>
        ) code is available on GitHub, together with detailed instructions on
        how to run the code.
      </p>

      <h3 className="text-3xl mt-14 text-right">Acknowledgements</h3>

      <p>
        {
          "This work was only possible due to the large number of already existing works in the realm of data science, energy forecasting and time series modelling."
        }
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
            <a className="underline hover:text-gray-400" href=""></a>
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
            XGBoost: A Scalable Tree Boosting System by Chen, Tianqi and
            Guestrin, Carlos in Proceedings of the 22nd ACM SIGKDD International
            Conference on Knowledge Discovery and Data Mining (2016)
          </p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://doi.org/10.1145/2939672.2939785"
            >
              https://doi.org/10.1145/2939672.2939785
            </a>
          </p>
          <br />
          <p>pandas-dev/pandas: Pandas by The pandas development team (2020)</p>
          <p>
            <a
              className="underline hover:text-gray-400"
              href="https://pandas.pydata.org/"
            >
              https://pandas.pydata.org/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
