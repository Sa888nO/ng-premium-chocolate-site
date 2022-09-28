import Content from "@components/Content";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Wrapper from "@components/Wrapper";
import MainPage from "@pages/MainPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CorporateOrders from "./pages/CorporateOrders";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Content>
          <Header />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/corporate-orders" element={<CorporateOrders />} />
            <Route
              path="/delivery-and-payment"
              element={<div>delivery-and-payment</div>}
            />
            <Route path="/about-author" element={<div>about-author</div>} />
            <Route path="/about-candy" element={<div>about-candy</div>} />
            <Route
              path="/composition-and-storage"
              element={<div>composition-and-storage</div>}
            />
            <Route path={"/contacts"} element={<div>contacts</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Content>

        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
