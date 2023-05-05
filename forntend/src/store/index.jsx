import { getDefaultMiddleware,configureStore} from "@reduxjs/toolkit"

import { TodoApi } from "./api_slicer/Apislicer"
import { reducerPath , Reducer } from "./api_slicer/Apislicer"




export const store = configureStore({
    reducer:{

        // api reducers
        [reducerPath]: Reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(TodoApi.middleware)
})