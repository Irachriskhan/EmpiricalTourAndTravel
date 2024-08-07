
import Header from "../Header/Header";
import Routers from "../../router/Routers.jsx";
import Footer from "../Footer/Footer";

const Layout = () => {
 
  // let data = localStorage.getItem("user");
  // let user = null;

  // if (data) {
  //   user = JSON.parse(data); // Parse the data correctly
  // }

  // // If user is not available or role is 'user', return the user's layout
  // if (user && user.role === "user") {
  //   return (
  //     <>
  //       <Routers />
  //     </>
  //   );
  // } else {
  //   
    return (
      <>
        <Header />
        <Routers />
        <Footer />
      </>
    );
  }

export default Layout;
