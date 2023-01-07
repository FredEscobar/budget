const budgets = [
  {
    id: "a5041b9b-ef30-4f46-ae78-433af51d3d61",
    month: 1,
    year: 2023,
    periods: [
      {
        description: "Primer Quincena",
        exchangRate: 35.72,
        incomeSummary: {
          salary: 2350,
          ir: 235,
          available: 2115,
          expenses: 1943.87,
          balance: 171.13,
        },
        expectedExpenses: [
          {
            description: "Liquidacion",
            valueUSD: 200,
            valueCS: 0,
          },
          {
            description: "Vacaciones",
            valueUSD: 200,
            valueCS: 0,
          },
          {
            description: "Aguinaldo",
            valueUSD: 200,
            valueCS: 0,
          },
          {
            description: "Seguridad/Mantenimiento residencial",
            valueUSD: 50,
            valueCS: 0,
          },
          {
            description: "Mama",
            valueUSD: 250,
            valueCS: 0,
          },
          {
            description: "Inss",
            valueUSD: 43.87,
            valueCS: 0,
          },
          {
            description: "Ahorro seguro de vida",
            valueUSD: 150,
            valueCS: 0,
          },
          {
            description: "Ahorro seguro de salud",
            valueUSD: 150,
            valueCS: 0,
          },
          {
            description: "Ahorro abono extraordinario casa",
            valueUSD: 700,
            valueCS: 0,
          },
        ],
      },
    ],
  },
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  budgets,
};