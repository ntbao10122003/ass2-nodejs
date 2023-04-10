import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {



  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // kiểm tra token có tồn tại hay không
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // đăng xuất
    navigate("/");
  };


  return (
    <div>
      <header id="header" className="fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container d-flex align-items-center justify-content">
          <h1 className="logo">
            <a href="/admin">NTB</a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#products">
                  Products
                </a>
              </li>
              
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {isLoggedIn && ( // hiển thị nút đăng xuất nếu đăng nhập
          <Button style={{position:"absolute" , right:"100px"}} type="primary" danger onClick={handleLogout}>
            Đăng xuất
          </Button>
        )}
        {!isLoggedIn && ( // hiển thị nút đăng nhập nếu chưa đăng nhập
          <Button style={{position:"absolute" , right:"100px"}} type="primary" danger onClick={() => navigate("/login")}>
            Đăng nhập
          </Button>
        )}
        </div>
      </header>
    </div>
  );
};

export default Header;
