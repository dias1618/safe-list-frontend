export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000',
  axiosConfig: { headers: {
      common: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          "Content-Type": "application/json",
          Accept: "application/json",
      },
  }} 
};
