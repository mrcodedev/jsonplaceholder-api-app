export const myFetch = ({ url, endpoint, method = "GET", data = {} }) => {
  return fetch(`${url}${endpoint}`, {
    method,
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: method !== "GET" ? JSON.stringify(data) : null,
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch((error) => {
      console.error("[Fetch Status]: ", error);
    });
};
