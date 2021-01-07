export const environment = {
  production: false,
  baseUrl: 'https://dias1618.host/api/safelist',
  axiosConfig: { headers: {
      common: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          "Content-Type": "application/json",
          Accept: "application/json",
      },
  }} 
};
