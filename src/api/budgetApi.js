import { handleError, handleResponse } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL + "/budgets";

export function getBudgets() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getBudgetById(id) {
  return fetch(baseUrl + `/${id}`)
    .then(handleResponse)
    .catch(handleError);
}
