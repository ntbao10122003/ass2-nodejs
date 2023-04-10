import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../api/product";
import { Link } from "react-router-dom";
import img1 from "../../assets/img/work-1.jpg"
type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
    setProducts(response.data.docs);
  });
  }, []);

  return (
    <div>
      <section id="products" className="products-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Products</h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
            {products.map((product) => (
              <div className="box-product col-md-4" key={product._id}>
                <div className="service-box">
                  <div className="service-content">
                  <Link style={{marginLeft:'45px' , textDecoration:"none",color:"black"}} to={`/products/${product._id}`}>
                    <div className="box-title">
                    <h3 className="s-title">name : {product.name}</h3>
                    <img src={img1} alt="" style={{borderRadius:"15px" , width:"100%"}} />
                    <p className="s-price "> giá : {product.price}</p>
                    <p className="s-description"> mô tả : {product.description}</p>
                    <a style={{marginLeft:'45px'}} href={product.link}> link : Link Github</a><br/>
                  </div>
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Products;
