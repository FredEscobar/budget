import { handleError, handleResponse } from "./apiUtils";
import {
  DynamoDBClient,
  QueryCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const baseUrl = process.env.REACT_APP_API_URL + "/budgets/";
const region = process.env.REACT_APP_AWS_REGION;

const ddbCllient = new DynamoDBClient({
  region,
  credentials: fromCognitoIdentityPool({
    clientConfig: { region },
    identityPoolId: "us-east-1:66a15271-acff-4436-9aa9-c9a00bc0dbcd",
  }),
});

function handleDynamoDBResponse(response) {
  if (response.$metadata.httpStatusCode === 200) {
    return response.Items;
  }
  return [];
}

export async function getBudgets() {
  try {
    const params = {
      TableName: "Budget",
    };

    const data = await ddbCllient.send(new ScanCommand(params));
    return handleDynamoDBResponse(data);
  } catch (e) {
    handleError(e);
  }
}

export async function getBudgetById(id) {
  try {
    const params = {
      TableName: "Budget",
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: { ":id": { S: id } },
      ConsistentRead: true,
    };
    const item = await ddbCllient.send(new QueryCommand(params));
    return handleDynamoDBResponse(item);
  } catch (e) {
    handleError(e);
  }
}

export function saveBudget(budget) {
  return fetch(baseUrl + (budget.id || ""), {
    method: budget.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(budget),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function removeExpectedExpense(removeRequest) {
  const url =
    "https://wjlcdvyruk45n4cu75rvsylgve0fyrhy.lambda-url.us-east-1.on.aws/";

  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(removeRequest),
  })
    .then((response) => response.status)
    .catch(handleError);
}

export function addExpectedExpense(expectedExpenseRequest) {
  const url =
    "https://ggckistj4csocnlisytvqhoi440ndbjz.lambda-url.us-east-1.on.aws/";

  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(expectedExpenseRequest),
  })
    .then((response) => response.status)
    .catch(handleError);
}

export function addIncurredExpense(incurredExpenseRequest) {
  const url =
    "https://cgkcoxi2hrohusvcxzmxounkvi0bexuv.lambda-url.us-east-1.on.aws/";
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(incurredExpenseRequest),
  })
    .then((response) => response.status)
    .catch(handleError);
}

export function removeIncurredExpense(removeIncurredExpenseRequest) {
  const url =
    "https://rxm6vaarbr5rertbeewzxztvr40urgam.lambda-url.us-east-1.on.aws/";

  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(removeIncurredExpenseRequest),
  })
    .then((response) => response.status)
    .catch(handleError);
}

export function cloneBudget(cloneBudgetRequest) {
  const url =
    "https://lziebn7hmbnxbti7x3zxroqtnu0wkvfb.lambda-url.us-east-1.on.aws/";

  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(cloneBudgetRequest),
  })
    .then((response) => response.status)
    .catch(handleError);
}

export function removeBudget(removeBudgetRequest) {
  const url =
    "https://yniwa224gt65w3mpypv6uxa3sm0mjsdd.lambda-url.us-east-1.on.aws/";

  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(removeBudgetRequest),
  })
    .then((response) => response.status)
    .catch(handleError);
}

export function updatePeriodExchangeRate(exchangeRateRequest) {
  const url =
    "https://kc6my4lfoophs2erlvwcca3dg40ojjwt.lambda-url.us-east-1.on.aws/";

  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(exchangeRateRequest),
  })
    .then((response) => response.status)
    .catch(handleError);
}
