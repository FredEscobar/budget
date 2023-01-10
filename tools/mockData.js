const budgets = [
  {
    id: "a5041b9b-ef30-4f46-ae78-433af51d3d61",
    month: 1,
    year: 2023,
    periods: [
      {
        description: "Primer Quincena",
        exchangeRate: 35.72,
        bankTransfer: {
          total: 2115,
          detail: [
            { bankName: "BAC", amount: 1515 },
            { bankName: "BDF", amount: 1515 },
            { bankName: "LAFISE", amount: 1515 },
          ],
        },
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
      {
        description: "Segunda Quincena",
        exchangeRate: 35.8,
        incomeSummary: {
          salary: 2350,
          ir: 235,
          available: 2115,
          expenses: 1943.87,
          balance: 171.13,
        },
        expectedExpenses: [
          {
            description: "Préstamo casa",
            valueUSD: 280,
            valueCS: 0,
          },
          {
            description: "Plan Celular Claro",
            valueUSD: 26.37,
            valueCS: 0,
          },
          {
            description: "Frenillos",
            valueUSD: 50,
            valueCS: 0,
          },
          {
            description: "Gastos varios",
            valueUSD: 220,
            valueCS: 0,
          },
          {
            description: "Combustible",
            valueUSD: 100,
            valueCS: 0,
          },
          {
            description: "Supermercado",
            valueUSD: 450,
            valueCS: 0,
          },
          {
            description: "Comida Delivery",
            valueUSD: 100,
            valueCS: 0,
          },
          {
            description: "Comida fuera casa",
            valueUSD: 197.07,
            valueCS: 0,
          },
          {
            description: "Disney+",
            valueUSD: 5.99,
            valueCS: 0,
          },
          {
            description: "HBO Max",
            valueUSD: 3.05,
            valueCS: 0,
          },
          {
            description: "Spotify",
            valueUSD: 9.99,
            valueCS: 0,
          },
          {
            description: "Pago Limpieza Casa",
            valueUSD: 118.72,
            valueCS: 0,
          },
          {
            description: "Seguro Vehiculo",
            valueUSD: 32.72,
            valueCS: 0,
          },
          {
            description: "Netflix",
            valueUSD: 7.99,
            valueCS: 0,
          },
          {
            description: "Ahorro extraordinario casa",
            valueUSD: 300,
            valueCS: 0,
          },
          {
            description: "Electricidad",
            valueUSD: 50,
            valueCS: 0,
          },
          {
            description: "Paramount+",
            valueUSD: 4.16,
            valueCS: 0,
          },
          {
            description: "Inss Facultativo",
            valueUSD: 43.51,
            valueCS: 0,
          },
        ],
        bankTransfer: {
          total: 2098,
          detail: [{ bankName: "BAC", amount: 2098 }],
        },
      },
    ],
  },
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  budgets,
};
