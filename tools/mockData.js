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
            id: "bd007d82-043e-46f3-9bc7-f6a86cadfb1a",
            description: "Liquidacion",
            valueUSD: 200,
            valueCS: 0,
          },
          {
            id: "3644f666-8b5f-4974-9cd1-8ff521420f6a",
            description: "Vacaciones",
            valueUSD: 200,
            valueCS: 0,
          },
          {
            id: "f1883391-5ea6-4eaf-900f-1e18db262bd7",
            description: "Aguinaldo",
            valueUSD: 200,
            valueCS: 0,
          },
          {
            id: "c9008ef8-f6fa-4180-bc10-007e345d6e5b",
            description: "Seguridad/Mantenimiento residencial",
            valueUSD: 50,
            valueCS: 0,
          },
          {
            id: "1d0029e3-7496-4e0e-8bcd-68d8683276dd",
            description: "Mama",
            valueUSD: 250,
            valueCS: 0,
          },
          {
            id: "0f20198d-c3b6-4aa6-8034-0e033bdd45ba",
            description: "Inss",
            valueUSD: 43.87,
            valueCS: 0,
          },
          {
            id: "bc37b235-dfc6-44f1-80f6-b2792fb780e3",
            description: "Ahorro seguro de vida",
            valueUSD: 150,
            valueCS: 0,
          },
          {
            id: "35b71f29-b625-4345-98bf-c28ce7057c4d",
            description: "Ahorro seguro de salud",
            valueUSD: 150,
            valueCS: 0,
          },
          {
            id: "7e97390f-e55d-4671-bb22-ba3adabc6e11",
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
            id: "cf14d43e-7274-41ba-8110-81502d105a44",
            description: "Préstamo casa",
            valueUSD: 280,
            valueCS: 0,
          },
          {
            id: "5fb0ad21-7e7a-4d56-99b6-75a29c4752fa",
            description: "Plan Celular Claro",
            valueUSD: 26.37,
            valueCS: 0,
          },
          {
            id: "905f9d87-04b9-4de8-98ce-5aa311b55a26",
            description: "Frenillos",
            valueUSD: 50,
            valueCS: 0,
          },
          {
            id: "9a1c7eb7-eb9d-4d94-8f44-084de9eb5f3f",
            description: "Gastos varios",
            valueUSD: 220,
            valueCS: 0,
          },
          {
            id: "d2e2d3f0-da1b-451d-84d4-a0251083fa3b",
            description: "Combustible",
            valueUSD: 100,
            valueCS: 0,
          },
          {
            id: "d095f749-da1f-4ce0-84d0-de09fd10b518",
            description: "Supermercado",
            valueUSD: 450,
            valueCS: 0,
          },
          {
            id: "6ca5ff0e-986c-476d-bd96-18713a1cba68",
            description: "Comida Delivery",
            valueUSD: 100,
            valueCS: 0,
          },
          {
            id: "c5e55a4d-b198-4c4f-b634-c4e3e9c1e512",
            description: "Comida fuera casa",
            valueUSD: 197.07,
            valueCS: 0,
          },
          {
            id: "0443c428-ce39-4ecf-b294-2d22420e50a5",
            description: "Disney+",
            valueUSD: 5.99,
            valueCS: 0,
          },
          {
            id: "0c4405f0-316c-45c5-b886-fc4a429d9a68",
            description: "HBO Max",
            valueUSD: 3.05,
            valueCS: 0,
          },
          {
            id: "dac2e5ea-452a-4338-8e68-a1f8bb4b8256",
            description: "Spotify",
            valueUSD: 9.99,
            valueCS: 0,
          },
          {
            id: "86dd25ea-7821-45ca-9f82-9a89998040e4",
            description: "Pago Limpieza Casa",
            valueUSD: 118.72,
            valueCS: 0,
          },
          {
            id: "e0ec8fa4-cb6a-4d86-be0a-a6675f2d70ed",
            description: "Seguro Vehiculo",
            valueUSD: 32.72,
            valueCS: 0,
          },
          {
            id: "5e3faf3e-bc0a-474e-a3e8-5fa3990dfcdf",
            description: "Netflix",
            valueUSD: 7.99,
            valueCS: 0,
          },
          {
            id: "9b70ef75-c59f-48b9-8d12-035fc307624b",
            description: "Ahorro extraordinario casa",
            valueUSD: 300,
            valueCS: 0,
          },
          {
            id: "20961920-3ed0-43f5-b0ec-78423ddb31ba",
            description: "Electricidad",
            valueUSD: 50,
            valueCS: 0,
          },
          {
            id: "a503e671-ad98-455e-84ae-85c3e64798a3",
            description: "Paramount+",
            valueUSD: 4.16,
            valueCS: 0,
          },
          {
            id: "ac5de65c-c4b9-41dc-aded-1edefe4ff2df",
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
    incurredExpenses: {
      totalUSD: 0,
      totalCS: 721.12,
      items: [
        {
          id: "d779ea4e-0d7f-49ed-b87b-2848614e7fcf",
          description: "Pedidos Ya Propina - CR",
          category: "c889f9ae-268c-4667-aca5-999a68f4b22e",
          creditCard: "e0eca7da-ac01-449b-8d6e-99ebd33037a1",
          amountCS: 35.44,
          amountUSD: 0,
        },
        {
          id: "4a822880-d785-4222-b618-026f34aedcaa",
          description: "Max X Menos Cervezas",
          category: "c889f9ae-268c-4667-aca5-999a68f4b22e",
          creditCard: "e0eca7da-ac01-449b-8d6e-99ebd33037a1",
          amountCS: 650.84,
          amountUSD: 0,
        },
        {
          id: "13200bef-32d7-439f-808a-d6fd7607cea3",
          description: "Pedidos Ya CR",
          category: "c889f9ae-268c-4667-aca5-999a68f4b22e",
          creditCard: "e0eca7da-ac01-449b-8d6e-99ebd33037a1",
          amountCS: 35.44,
          amountUSD: 0,
        },
      ],
    },
  },
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  budgets,
};
