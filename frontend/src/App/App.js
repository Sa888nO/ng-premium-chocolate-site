import Content from "@components/Content";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Wrapper from "@components/Wrapper";
import MainPage from "@pages/MainPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Content>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/shop"
              element={<div>SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</div>}
            />
            <Route
              path="/corporate-orders"
              element={<div>corporate-orders</div>}
            />
            <Route
              path="/delivery-and-payment"
              element={<div>delivery-and-payment</div>}
            />
            <Route path="/about-author" element={<div>about-author</div>} />
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
