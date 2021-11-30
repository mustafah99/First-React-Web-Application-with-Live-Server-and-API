import React from 'react';

const Hero = ({ title, shortDescription, buttonText, buttonLink, imageUrl }) => (
    <div>
        <div className="row pb-0 align-items-center rounded-3 border shadow-lg" style={{ backgroundColor: "#f7f7f7", margin: "0 auto" }}>
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1" style={{ fontFamily: "sans-serif" }}>{title}</h1>
                <p className="lead">{shortDescription}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                        <a href={buttonLink}>{buttonText}</a></button>
                </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                <img className="rounded-lg-3" src={imageUrl} alt="..." width="720" />
            </div>
        </div>
    </div>
)

export default Hero;