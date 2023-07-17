import { configureStore } from '@reduxjs/toolkit'
import suggestionReducer from './suggestionsSlice'

const store = configureStore({
    
  reducer: {
    request:suggestionReducer
},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch