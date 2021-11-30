import React from 'react';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const MainMeny = ({ mainmenu }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?q=${searchTerm}`);

        setSearchTerm("");
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid" style={{ padding: "0 50px" }}>
                <Link to={`/`}>
                    <span className="navbar-brand" style={{ fontFamily: "sans-serif" }}>FreakyApple</span>
                </Link>
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ display: "flex", flexDirection: "row", fontFamily: "sans-serif" }}>
                    {mainmenu.map(x => (
                        <li key={x.menuname} className="nav-item" style={{ padding: "0 10px" }}>
                            <a href={x.link} className="nav-link">{x.menuname}</a>
                        </li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit} className="d-flex">
                    <input style={{ borderRadius: "15px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="q" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button style={{ borderRadius: "15px", color: "#0d6efd", borderColor: "#0d6efd" }} className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default MainMeny;