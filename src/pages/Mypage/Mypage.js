import React from "react";
import "../../styles/Mypage.css"
import Profile  from "./Profile";
import History from "./History";
import Status from "./Status";
import Address from "./Address";

const Mypage = () => {
    return (
        <div className="page-container">
            <Profile />
            <Status />
            <Address />
            <History />
        </div>
    )
}

export default Mypage;