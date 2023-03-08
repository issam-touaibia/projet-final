import React, { useEffect } from "react";
import "./home.css";
import Slider from "../components/Slider.jsx";
import { Link } from "react-router-dom";
import image8 from "../video/image8.jpeg";
import image1 from "../video/image1.jpeg";
import image9 from "../video/image9.jpeg";

import { useDispatch, useSelector } from "react-redux";
import { newProducts } from "../redux/actions/productAction";
import NewProductCard from "./NewProductCard";
function Home() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productReducer);
  console.log(products);
  useEffect(() => {
    dispatch(newProducts());
  }, [dispatch]);
  return (
    <div>
      <Slider />
      {/* <div>
        <div>
          <input id="form" type="text" placeholder="Search...."></input>
        </div>
        <div>
          <button>
            {" "}
            <AiOutlineSearch className="icon" />{" "}
          </button>
        </div>
      </div> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading"> Our Company </h3>
              <div className="underline mx-auto"> </div>
              <p>
                Nous travaillons sur de nouvelles idées et de nouveaux produits
                avec beaucoup de passion, un sens aigu des tendances et le
                courage de proposer des solutions inhabituelles. Les besoins et
                les désirs de nos clients sont au cœur de tout ce que nous
                faisons. Nous aimons développer de nouvelles produits qui se
                démarquent de la foule. Tout se passe à toute vitesse pour que
                nous ayons toujours une longueur d'avance. Nous apprenons
                quelque chose de nouveau chaque jour, nous évoluons constamment
                et nous nous améliorons sans cesse.
              </p>
              <Link to="/about" className="btn btn-primary shadow">
                {" "}
                Read More{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* {Our vision , mission and values} */}
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Vision,Mission and Values</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="vmv">
              <div className="col-md-4 text-center" text-center>
                <h6> Our vision </h6>
                <p>
               luminarc is offers, through a very large network of distribution,
                  hundreds of different products for satisfy the tastes and
                  needs of all its customers.
                </p>
              </div>
              <div className="col-md-4 text-center" text-center>
                <h6 style={{ marginLeft: "-5%" }}> Our Mission </h6>
                <p style={{ marginLeft: "10%" }}>
                  At luminarc, we celebrate beauty and individuality. We change
                  people's lives, not only through the proven benefits of
                  powerful natural ingredients, but also by empowering them to
                  achieve success as far as they can dream.
                </p>
              </div>
              <div className="col-md-4 text-center" text-center>
                <h6> Our Core Values </h6>
                <p style={{ marginLeft: "10%" }}>
                  As a company, Champaca is based on common values, which it
                  applies in its activities on a global scale. These values,
                  along with the principles defined in our code of ethics, are
                  the basis of our success. They constitute the very essence of
                  our identity, now and the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {best seller } */}
      <div className="col-md-12 mb-4 text-center">
        <h3 className="main-heading">New Products</h3>
        <div className="underline mx-auto"></div>
      </div>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="Products">
          {products.map((product, id) => (
            <NewProductCard product={product} key={id} />
          ))}
        </div>
      )}
    </div>
  );
  //  <script type="text"> window.addEventListener("scroll",function(){
  //   var header=document.querySelector("header");header.classList.toggle("sticky",window.scrollY>0);
  //  })
  //  </script>
}

export default Home;
