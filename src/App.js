import { Routes, Route } from "react-router-dom";
import React from 'react';
import HomePage from "./pages/HomePage/HomePage"
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
// import GamesDetailsPage from "./pages/GamesDetailPage/GamesDetailPage";
import { useEffect, useState } from 'react';
import MainMeny from "./components/MainMeny/MainMeny";
import FormPage from "./pages/FormPage/FormPage";

const App = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/pages/home")
            .then(resp => resp.json())
            .then(data => setPageData(data));
    }, []);

    return pageData && (
        <main>
            <MainMeny {...pageData} />
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/products/:urlSlug" element={<ProductDetailsPage />} />
                <Route index path="/search" element={<SearchResultsPage />} />
                <Route index path="/shopping-cart-checkout" element={<FormPage />} />
            </Routes>
        </main>
    )
};


export default App;