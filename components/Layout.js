import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
