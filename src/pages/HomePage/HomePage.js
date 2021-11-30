import React from 'react';
// import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import Hero from "../../components/Hero/Hero";
import Spots from "../../components/Spots/Spots";
import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid";
// import GamesGrid from "../../components/GamesGrid/GamesGrid";

const HomePage = () => {

    // const [products, setProducts] = useState([]);

    // const [games, setGames] = useState([]);

    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/pages/home")
            .then(resp => resp.json())
            .then(data => setPageData(data));
    }, []);

    // useEffect(() => {
    //     fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    //             "x-rapidapi-key": "ad2d1bd7b1msh630ecaffad0e099p149032jsn9e5968f30a69"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(gams => setGames(gams));
    // }, []);

    return pageData && (
        <div>
            <Hero {...pageData.hero} />
            <Spots{...pageData} />
            <ProductCardGrid {...pageData} />
        </div>
    )
};

export default HomePage;