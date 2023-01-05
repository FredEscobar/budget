import React from "react";

const ExpensesList = () => {
  return (
    <table className="table mt-6">
      <thead>
        <tr>
          <th>Descripcion</th>
          <th>U$</th>
          <th>C$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Liquidacion</td>
          <td>200.00</td>
          <td></td>
        </tr>
        <tr>
          <td>Vacaciones</td>
          <td>200.00</td>
          <td></td>
        </tr>
        <tr>
          <td>Aguinaldo</td>
          <td>200.00</td>
          <td></td>
        </tr>
        <tr>
          <td>Seguridad/Mantenimiento residencial</td>
          <td>50.00</td>
          <td></td>
        </tr>
        <tr>
          <td>Mama</td>
          <td>250.00</td>
          <td></td>
        </tr>
        <tr>
          <td>Inss</td>
          <td>43.87</td>
          <td></td>
        </tr>
        <tr>
          <td>Ahorro seguro de vida</td>
          <td>150.00</td>
          <td></td>
        </tr>
        <tr>
          <td>Ahorro seguro de salud</td>
          <td>150.00</td>
          <td></td>
        </tr>
        <tr>
          <td>Ahorro extraordinario casa</td>
          <td>700.00</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpensesList;
