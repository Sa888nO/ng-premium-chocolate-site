import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="/shop" element={<div>shop</div>} />
        <Route path="/corporate-orders" element={<div>corporate-orders</div>} />
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
    </BrowserRouter>
  );
}

export default App;
