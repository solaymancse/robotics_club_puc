import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// define a service user a base url

const appApi = createApi({
    reducerPath:"appApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:5000/api/",
    }),
    endpoints:(builder)=>({
        // create new event

        createEvent: builder.mutation({
            query:(user)=>({
                url:"/events",
                method:"POST",
                body: user,
            })
        })
    })
})

export const { useEventMutation} = appApi;

export default appApi;