import {createApi,BaseQueryFn} from "@reduxjs/toolkit/query/react";
import axios, {AxiosError, AxiosRequestConfig} from "axios";

type Fn = BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      headers?: AxiosRequestConfig['headers']
      params?: AxiosRequestConfig['params']
      fullResult?: boolean
    }
    >

const baseQuery: Fn = async ({ url, method, data, headers, params, fullResult=false,...moreParams }) => {
  try {
    const result = await axios({ url: import.meta.env.REACT_APP_BASE_URL + url, method, data, params,headers,...moreParams })
    return { data: fullResult?result:result.data }
  }
  catch (axiosError) {
    const err = axiosError as AxiosError
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    }
  }
}


export const baseApi = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQuery,
  tagTypes: ['sampleTag'],
  endpoints: () => ({}),
})
