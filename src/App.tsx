import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./app/page";
import AboutPage from "./app/about/page";
import ProductsPage from "./app/products/page";
import "./index.css";
import ContactPage from "./app/contact/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
