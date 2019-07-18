import React from "react";
import LogoImg from "./assets/images/logo.svg";

function Header() {
    return (
        <header id="header">
            <div>
                <div id="h_left_contents">
                    <a id="logo" href="#">
                        <img src={LogoImg} />
                    </a>
                    <div id="header_srch_wrp">
                        <div id="header_srch_icon_wrp">
                            <span className="fa fa-map-marker"></span>
                        </div>
                        <div id="header_input_wrp">
                            <input type="text" id="header_search_input" placeholder="Enter delivery address"/>
                        </div>
                    </div>
                </div>
                <div id="h_right_contents">
                    <a>
                        Sign In
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;