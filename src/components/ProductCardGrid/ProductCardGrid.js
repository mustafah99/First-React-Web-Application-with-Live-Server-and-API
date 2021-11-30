import React from 'react';
import { Link } from "react-router-dom";

const ProductCardGrid = ({ products }) => (
    <section className="section-products" >
        <div className="container">
            {/* Title */}
            <div className="row justify-content-center text-center">
                <div className="col-md-8 col-lg-6">
                    <div style={{ fontFamily: "sans-serif" }} className="header">
                        <h3 style={{ color: "black" }}>Featured Products</h3>
                        <h2>Popular Products</h2>
                    </div>
                </div>
            </div>
            {/* Products Grid */}

            <div id="product-1" className="single-product">¨
                <div style={{ display: "flex", justifyContent: "space-evenly" }} className="part-2">
                    {/* Card */}
                    {products.map(product => (
                        <div key={product.id} className="productApple" >
                            <Link to={`/products/${product.urlSlug}`}>
                                <img style={{ width: "200px" }} src={product.imageUrl} alt={product.imageUrl} />
                                <h3 className="product-title">{product.name}</h3>
                                <h4 className="product-price">{product.price}</h4>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>



        </div>
    </section >

);

export default ProductCardGrid;