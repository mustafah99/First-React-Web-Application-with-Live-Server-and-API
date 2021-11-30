import React from "react";
import { useState } from "react";

const FormPage = () => {

    const [form, setForm] = useState("");

    const handleSubmit = (event, target) => {
        event.preventDefault();

        console.log(form);
    }


    return (
        <div className="container" style={{ padding: "20px 0" }}>
            <div style={{ paddingBottom: "10px" }}>
                <h1>Shopping Cart Checkout</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ paddingBottom: "20px" }} className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input id="form" onChange={(e) => setForm(e.target.value)} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div style={{ paddingBottom: "20px" }} className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div style={{ paddingBottom: "10px" }} className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default FormPage;