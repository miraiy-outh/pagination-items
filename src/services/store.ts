import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/products-reducer";
import { filterButtonsReducer } from "./reducers/filter-buttons-reducer";

const rootReducer = combineReducers({
    productsData: productsReducer,
    buttonsData: filterButtonsReducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [],
        preloadedState
    })

    return store
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];