export const environment = {
  production: false,
  baseUrl: 'https://www.dias1618.host/safelist/api/',
  axiosConfig: { headers: {
      common: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          "Content-Type": "application/json",
          Accept: "application/json",
      },
  }} 
};
