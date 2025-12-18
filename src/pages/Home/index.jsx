import { Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = () => <div className="home">
    <Header />
    <Outlet />
    <Footer />
</div>;

export default Home;