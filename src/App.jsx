import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./RootLayout";
import HomePage from "./HomePage";
import Prodotti from "./Prodotti";
import ChiSiamo from "./ChiSiamo";
import DettaglioProdotto from "./components/DettaglioProdotto";
import Error from "./Error";
import { BudgetProvider } from "./Contexts/BudgetContext";

function App() {

  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/prodotti" element={<Prodotti/>}/>
            <Route path="/chi-siamo" element={<ChiSiamo/>}/>
            <Route path="/prodotto/:id" element={<DettaglioProdotto/>}/>
          </Route>
          <Route path="/error" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  )
}

export default App
