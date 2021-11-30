import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const SearchResultsPage = () => {

    let [urlSearchParams] = useSearchParams();

    const q = urlSearchParams.get("q");

    const [searchResult, setSearchResult] = useState(null);

    // const [pageData, setPageData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/search?q=${q}`)
            .then(resp => resp.json())
            .then(searchResult => setSearchResult(searchResult));
    }, [q]);

    return searchResult && (
        <div>
            <div style={{ padding: "10px 0", fontFamily: "sans-serif" }} className="container">
                <div style={{ padding: "20px 0" }}>
                    <h3>{searchResult.count} Search Results for "{q}"</h3>
                </div>
                <div className="container">
                    {searchResult.result.map((x) => (
                        <div style={{
                            paddingBottom: "20px"
                        }} key={searchResult.id} className="productApple" >
                            <Link to={`/products/${x.urlSlug}`}>
                                <img style={{ width: "200px" }} src={x.imageUrl} alt={x.imageUrl} />
                                <h3 className="product-title">{x.name}</h3>
                                <h4 className="product-price">{x.price}</h4>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchResultsPage;
