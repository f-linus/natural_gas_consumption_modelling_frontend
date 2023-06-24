# Natural Gas Consumption Modelling Frontend

Germany's dependency on natural gas highlights the need for precise forecasting methods. Despite advancements, many traditional forecasting models lack reproducibility due to restricted data access. This project addresses this gap by providing open-source, publicly available forecasts for Germany's natural gas consumption. Our focus is on utilizing publicly accessible data, leveraging state-of-the-art models for time-efficient forecast implementation, and ensuring continuous publication and productization of these forecasts.

This repository is dedicated to the frontend of this project. It accesses the forecasting results
through the public Google Cloud Storage Bucket filled by the [backend](https://github.com/f-linus/natural_gas_consumption_modelling).

The frontend is built with [Next.js](https://nextjs.org/), a React framework for server-side rendering. It is deployed on [Vercel](https://vercel.com/).

## Run the frontend locally

The frontend requires data in the Google Cloud Storage bucket as discussed in the backend repository
mentioned above.

To run the frontend locally, clone the repository and install `npm`.

Install the dependencies with

```bash
npm install
```

Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
