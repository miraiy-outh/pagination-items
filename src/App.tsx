import { ThemeProvider } from "@mui/material"
import { ProductList } from "./components/product-list/product-list"
import theme from "./theme/theme"
import { Provider } from "react-redux"
import { store } from "./services/store"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ProductList></ProductList>
      </ThemeProvider>
    </Provider>
  )
}

export default App
