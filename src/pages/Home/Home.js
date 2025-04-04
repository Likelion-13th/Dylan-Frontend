import React from "react";
import '../../styles/New.css'
import Menu from "./Menu"
import '../../styles/Home.css'
import Banner from "./Banner"
import Info from "./Info"

const Home = () => {
    return (
        <div className="home-container">
            <Banner />
            <Menu />
            <Info />
        </div>
    )
}

export default Home;