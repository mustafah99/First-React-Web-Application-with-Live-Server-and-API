import React from 'react';

const Spots = ({ spots }) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
        {spots.map(x => (
            <a key={x.spotLink} href={x.spotLink}>
                <div className="card" style={{ width: "100%" }}>
                    <h2 className="centered" style={{ zIndex: "1", fontFamily: "sans-serif" }}>{x.title}</h2>
                    <img className="card-img-top applespot" src={x.imageUrl} alt={x.imageUrl} />
                </div>
            </a>
        ))}
    </div>
)

export default Spots;