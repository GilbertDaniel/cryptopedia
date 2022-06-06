import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '0d5eb77314msh4a89796e2dfdbccp1f4cb8jsn82582a40c448',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCoryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//       'X-RapidAPI-Key': '0d5eb77314msh4a89796e2dfdbccp1f4cb8jsn82582a40c448'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });