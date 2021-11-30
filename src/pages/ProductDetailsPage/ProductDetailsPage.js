import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {

    let { urlSlug } = useParams();

    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${urlSlug}`)
            .then(resp => resp.json())
            .then(product => setProduct(product));
    }, []);

    return product ? (
        <div>
            <div className="row pb-0 align-items-center rounded-3 border shadow-lg" style={{ backgroundColor: "#f7f7f7", margin: "0 auto" }}>
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1" style={{ fontFamily: "sans-serif" }}>{product.name}</h1>
                    <p className="lead">{product.description}</p>
                    <p className="display-4 lh-1">{product.price}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Add to Cart</button>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                    <img className="rounded-lg-3" src={product.imageUrl} alt="..." width="720" />
                </div>
            </div>

            <div className="row pb-0 align-items-center rounded-3 border shadow-lg" style={{ backgroundColor: "rgb(250 250 250)", margin: "0 auto" }}>
                <div className="col-lg-7 p-3 p-lg-5">
                    <h1 className="display-4 fw-bold lh-1" style={{ fontFamily: "sans-serif" }}>Pro Display Technology</h1>
                    <p className="lead">{product.techSpecs}</p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                    <img className="rounded-lg-3" src={product.secondImage} alt="..." width="720" />
                </div>
            </div>

            <div style={{
                // background: "rgb(63,94,251)",
                background: "linear-gradient(197deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)", height: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <h1 style={{ textAlign: "center", color: "white", fontFamily: "sans-serif" }}>Technical Specifications</h1>
                <p style={{ textAlign: "center", color: "white", fontFamily: "sans-serif", padding: "0 50px" }}>{product.additionaltechSpecs}</p>
            </div>
        </div>
    ) : (
        <h2 style={{ margin: "0 auto", textAlign: "center", padding: "50px 0" }}>Loading</h2>
    )
}

export default ProductDetailsPage;