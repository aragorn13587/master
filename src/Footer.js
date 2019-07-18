import React from "react";
import WLogo from "./assets/images/w_logo.svg";
import AppStoreLogo from "./assets/images/app_store_logo.svg";
import GooglePlayLogo from "./assets/images/google_play_logo.png";

function Footer() {
    return (
        <footer id="footer">
            <div id="footer_top_section">
                <div id="footer_top_section_lft_cntnt">
                    <div id="footer_logo_wrp">
                        <img src={WLogo}/>
                    </div>
                    <div id="footer_app_download_wrp">
                        <a>
                            <img src={AppStoreLogo}/>
                        </a>
                        <a>
                            <img src={GooglePlayLogo}/>
                        </a>
                    </div>
                </div>
                <div id="footer_top_section_rght_cntnt">
                    <ul>
                        <li className="head-lst">
                            <a href="">
                                About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Read our blog
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Buy gifts card
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Sign up to deliver
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Add your restaurant
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className="head-lst">
                            <a href="">
                                About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Read our blog
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Buy gifts card
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Sign up to deliver
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Add your restaurant
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="divider white sm-divider"/>
            <div id="footer_bottom_section">
                <div id="copyright_wrp">
                    © 2019 Uber Technologies Inc.
                </div>
                <div id="other_links_wrp">
                    <div id="top_other_links">
                        <a>
                            Privacy Policy
                        </a>
                        <a>
                            Term of Us
                        </a>
                        <a>
                            Pricing
                        </a>
                    </div>
                    <div id="bottom_other_links">
                        <a>
                            Privacy Policy
                        </a>
                        <a>
                            Term of Us
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;