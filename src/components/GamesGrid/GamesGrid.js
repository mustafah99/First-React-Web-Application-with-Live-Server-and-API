// import React from 'react';
// import { Link } from "react-router-dom";

// const GamesGrid = ({ games }) => (
//     <section className="section-products" >
//         <div className="container">
//             {/* Title */}
//             <div className="row justify-content-center text-center">
//                 <div className="col-md-8 col-lg-6">
//                     <div style={{ fontFamily: "sans-serif" }} className="header">
//                         <h3 style={{ color: "black" }}>Featured Free-to-Play Games</h3>
//                         <h2>Popular Titles</h2>
//                     </div>
//                 </div>
//             </div>
//             {/* Products Grid */}

//             <div id="product-1" className="single-product">¨
//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gridGap: "10px" }} className="part-2">
//                     {/* Card */}
//                     {games.map(game => (
//                         <Link to={`/games/${game.id}`}>
//                             <div key={game.id} className="productApple" >
//                                 <img style={{ width: "400px" }} src={game.thumbnail} />
//                             </div>
//                         </Link>
//                     ))}

//                 </div>
//             </div>



//         </div>
//     </section >

// );

// export default GamesGrid;