// import React from "react";
import Header from "../Header/Header";
import Routers from "../../router/Routers.jsx";
import Footer from "../Footer/Footer";

const Layout = () => {
  // CHECH the ROLE if no token or user == user => route of users
  // if user == admin 
  let data = localStorage.getItem("user");
  console.log("data",data)
  const result = JSON.stringify(data);
  if ( data.role === "user") {
    return (
      <>
        <Routers />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Routers />
        <Footer />
      </>
    );
  }
  
};

export default Layout;
