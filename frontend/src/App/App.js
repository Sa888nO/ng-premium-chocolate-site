import Content from "@components/Content";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Wrapper from "@components/Wrapper";
import MainPage from "@pages/MainPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AboutCandyPage from "./pages/AboutCandyPage";
import ContactsPage from "./pages/ContactsPage";
import CorporateOrders from "./pages/CorporateOrders";
import DelivaryAndPaymentPage from "./pages/DelivaryAndPaymentPage";
import KeepingPage from "./pages/KeepingPage";
import ShopPage from "./pages/ShopPage";
import TastesPage from "./pages/TastesPage";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Content>
          <Header />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/shop">
              <Route path=":id" element={<ShopPage />} />
            </Route>
            <Route path="/tastes">
              <Route path=":id" element={<TastesPage />} />
            </Route>
            <Route path="/corporate-orders" element={<CorporateOrders />} />
            <Route
              path="/delivery-and-payment"
              element={<DelivaryAndPaymentPage />}
            />

            <Route path="/about-candy" element={<AboutCandyPage />} />
            <Route path="/storage" element={<KeepingPage />} />
            <Route path={"/contacts"} element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Content>

        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
