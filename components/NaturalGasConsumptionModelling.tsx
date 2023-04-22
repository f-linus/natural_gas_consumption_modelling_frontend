import React from "react";
import { TotalTimeHorizonPlot } from "./natural_gas_consumption_modelling/TotalTimeHorizonPlot";
import { NearTermTimeHorizonPlot } from "./natural_gas_consumption_modelling/NearTermTimeHorizonPlot";

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
      <TotalTimeHorizonPlot data={data} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl vel tincidunt lacinia, nisl nisl aliquet nisl, vitae aliquam nisl
        nisl et nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet
        nisl, vitae aliquam nisl nisl et nisl. Sed euismod, nisl vel tincidunt
        lacinia, nisl nisl aliquet nisl, vitae aliquam nisl nisl et nisl. Sed
        euismod, nisl vel tincidunt lacinia, nisl nisl aliquet
      </p>

      <NearTermTimeHorizonPlot data={data} />
    </div>
  );
};
