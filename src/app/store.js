import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/productSlice'
import variablesReducer from '../features/variableSlice'


export default configureStore({
  reducer: {
    product: productReducer,
    variables: variablesReducer
  },
})
