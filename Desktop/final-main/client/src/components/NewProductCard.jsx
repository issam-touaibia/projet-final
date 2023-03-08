import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const NewProductCard = ({ product }) => {
  return (
    <div>
      {" "}
      <div className="section  border-top">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12 mb-4 text-center"> */}
            {/* <h3 className="main-heading">Best Seller</h3> */}
            {/* <div className="underline mx-auto"></div> */}
            {/* </div> */}
            <div className="col-md-4 ">
              <div className="card shadow">
                <img src={product.imageUrl} className="w-100 border-bottom" />
                <div className="card-body">
                  <h6 style={{ color: "black", textAlign: "center" }}>
                    {" "}
                    {product.title}{" "}
                  </h6>
                  <div className="undeline"> </div>
                  <p>{product.description} </p>
                  <h5 style={{ color: "primary", textAlign: "center" }}>
                    {" "}
                    {product.price}{" "}
                  </h5>

                  <Link
                    to="/Product"
                    className="btn btn-link"
                    style={{ color: "primary" }}
                  >
                    {" "}
                    Read more{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductCard;
