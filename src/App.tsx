import { ThemeProvider } from "@mui/material"
import { ProductList } from "./components/product-list/product-list"
import theme from "./theme/theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ProductList></ProductList>
    </ThemeProvider>

  )
}

export default App
