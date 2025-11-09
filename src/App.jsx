import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />  {/* Catches all undefined routes/pages */}
        </Routes>
      </BrowserRouter>       
    </>
  )
}

export default App
