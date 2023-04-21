import React from "react";

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
  return <p>{JSON.stringify(data)}</p>;
};
