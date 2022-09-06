import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Key': '1ae68dde8dmsh03c781fa5aa5643p1b8f2djsn0bdd83ce3807',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url, headers: cryptoApiHeaders})
export const cryptoApi=createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query: (coinId)=>createRequest(`/coin/${coinId}`)
        }),
        
      
    })
})

export const{
    useGetCryptosQuery, useGetCryptoDetailsQuery
}=cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'X-RapidAPI-Key': '1ae68dde8dmsh03c781fa5aa5643p1b8f2djsn0bdd83ce3807',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };