import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "./components/Container/Container";
import { Main } from "./pages/Main/Main";
import { Cart } from "./pages/Cart/Cart";
import { Page404 } from "./pages/Page404/Page404";
import { Header } from "./components/Header/Header";

function App() {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
