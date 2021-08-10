import React from "react";
import { getReloadInstance } from "../../../Actions/Instances";

export default function Reload() {
  async function getReload() {
    try {
      const resp = await getReloadInstance();
      console.log(resp);
    } catch (err) {
      console.log("erro");
    }
  }

  return (
    <div>
      <h2>Reconectar instância</h2>
      <button onClick={getReload}>Reconectar instância</button>
    </div>
  );
}
