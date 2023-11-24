import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmailNews from "./components/EmailNews";
import Footer from "./components/Footer";
import FormContact from "./components/FormContact";
import Header from "./components/Header";
import SectionInfo from "./components/SectionInfo";
import CartProvider from "./context";
import Account from "./pages/Account";
import CartPage from "./pages/Cart";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Purchase from "./pages/Purchase";
import SectionText from "./pages/SectionText";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:product" element={<Purchase />} />
          <Route path="/account/:requirement" element={<Account />} />
          <Route path="/politics/:politic" element={<SectionText />} />
          <Route path="/category/:category" element={<Categories />} />
          <Route path="/sub-category/:category" element={<Categories />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/contact/" element={<FormContact />} />
        </Routes>
        <EmailNews />
        <SectionInfo />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
