import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MenuAdmin from "./admin/Menu";
import ProductManagementPage from "../admin/Product/ProductManagement";
import FooterAdmin from "./admin/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import img1 from "../../assets/img/avartar.jpg"
const AdminLayout = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "50px",
        }}
      >
        <h3 style={{ position:"relative" , display:"flex" , top:"10px" , left:"10px"} }>
          <img style={{width:"50px" , borderRadius:"50%"}} src={img1} alt="" />
          <a style={{textDecoration:"none", color :"black" , marginLeft:"15px" , fontSize:"15px",marginTop:"15px"}} href="/">nguyễn thế bảo</a>
        </h3>
     
      </div>
      <div style={{ display: "flex" }}>
        <aside style={{paddingTop:"35px"}}>
          <MenuAdmin />
        </aside>
        <main style={{ width: "100%" }}>
          <Outlet>
            <ProductManagementPage />
          </Outlet>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
