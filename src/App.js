import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainClass from './MainClass';
import SliderComponent from './SliderComponent';
import './App.css';
import LeftMainImg from './assets/images/uber_main_img_left.svg';
import RightMainImg from './assets/images/uber_main_img_right.svg';

function App() {
    MainClass.init();
    const sliderSampleData =[
        [
            {
                img:'https://d1ralsognjng37.cloudfront.net/6bfccf26-2172-4c3b-ab3a-50210047af94',
                href:'',
                title:'Rooster & Rice',
                desc:'$ • Comfort Food • Chicken • Thai • Vegetarian Friendly • Vegan Friendly',
                tags:['15–25 min','4.7 <span className="fa fa-star gold"></span> (200+)','$2.49 Delivery Fee']
            },
            {
                img:'https://d1ralsognjng37.cloudfront.net/6bfccf26-2172-4c3b-ab3a-50210047af94',
                href:'',
                title:'Rooster & Rice',
                desc:'$ • Comfort Food • Chicken • Thai • Vegetarian Friendly • Vegan Friendly',
                tags:['15–25 min','4.7 <span className="fa fa-star gold"></span> (200+)','$2.49 Delivery Fee']
            },
            {
                img:'https://d1ralsognjng37.cloudfront.net/6bfccf26-2172-4c3b-ab3a-50210047af94',
                href:'',
                title:'Rooster & Rice',
                desc:'$ • Comfort Food • Chicken • Thai • Vegetarian Friendly • Vegan Friendly',
                tags:['15–25 min','4.7 <span className="fa fa-star gold"></span> (200+)','$2.49 Delivery Fee']
            }
        ],
        [
            {
                img:'https://d1ralsognjng37.cloudfront.net/5515cbd4-2eb3-4c5e-b05b-c4e67c155d17',
                href:'',
                title:'Rooster & Rice2',
                desc:'$ • Comfort Food • Chicken • Thai • Vegetarian Friendly • Vegan Friendly222',
                tags:['15–25 min22','4.7 <span className="fa fa-star gold"></span> (200+)','$2.49 Delivery Fee2']
            },
            {
                img:'https://d1ralsognjng37.cloudfront.net/5515cbd4-2eb3-4c5e-b05b-c4e67c155d17',
                href:'',
                title:'Rooster & Rice2',
                desc:'$ • Comfort Food • Chicken • Thai • Vegetarian Friendly • Vegan Friendly222',
                tags:['15–25 min22','4.7 <span className="fa fa-star gold"></span> (200+)','$2.49 Delivery Fee2']
            },
            {
                img:'https://d1ralsognjng37.cloudfront.net/5515cbd4-2eb3-4c5e-b05b-c4e67c155d17',
                href:'',
                title:'Rooster & Rice2',
                desc:'$ • Comfort Food • Chicken • Thai • Vegetarian Friendly • Vegan Friendly222',
                tags:['15–25 min22','4.7 <span className="fa fa-star gold"></span> (200+)','$2.49 Delivery Fee2']
            },
            {
                img:'https://d1ralsognjng37.cloudfront.net/5515cbd4-2eb3-4c5e-b05b-c4e67c155d17',
                href:'',
                title:'Rooster & Rice2',
                desc:'$ • Comfort Food • Chicken • Thai • Vegetarian Friendly • Vegan Friendly222',
                tags:['15–25 min22','4.7 <span className="fa fa-star gold"></span> (200+)','$2.49 Delivery Fee2']
            }
        ]
    ];
    return (
        <div id="container">

            <Header/>

            <section id="top_section">
                <div className="uber-main-img-wrp" id="uber_main_img_left_wrp">
                    <img src={LeftMainImg}/>
                </div>
                <div className="uber-main-img-wrp" id="uber_main_img_right_wrp">
                    <img src={RightMainImg}/>
                </div>
                <div id="main_feed_search_wrp">
                    <div id="main_feed_search_contents">
                        <h1>
                            Restaurants you love, delivered to you
                        </h1>
                        <div id="main_feed_form_wrp">
                            <div id="main_feed_srch_wrp">
                                <div id="main_feed_srch_icon_wrp">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div id="main_feed_input_wrp">
                                    <input type="text" id="main_feed_search_input"
                                           placeholder="Enter delivery address"/>
                                </div>
                            </div>
                            <div id="main_feed_btn_wrp">
                                <button type="button">
                                    Find Food
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="restaurants_info_wrp">
                <SliderComponent title={"Food Delivery in San Francisco Bay Area"} domId={"top_slider"}
                                 datas={sliderSampleData} />
                <hr className="divider"/>
                <section className="feature-wrp">
                    <div className="feature col col-4">
                        <figure>
                            <img
                                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/816084874de4267a8e89c881db968ed2.svg"/>
                        </figure>
                        <h2>
                            There's more to love in the app.
                        </h2>
                        <div className="feature-links-wrp">
                            <span>Get the app:&nbsp;&nbsp;</span>
                            <a href="#">iPhone</a>
                            <a href="#">Andorid</a>
                        </div>
                    </div>
                    <div className="feature col col-4">
                        <figure>
                            <img
                                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/bd4c2537aa3799e345a397e7e4c9cbac.svg"/>
                        </figure>
                        <h2>
                            Your restaurant, delivered
                        </h2>
                        <div className="feature-links-wrp">
                            <a href="#" className="green">Add your restaurant</a>
                        </div>
                    </div>
                    <div className="feature col col-4">
                        <figure>
                            <img
                                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b96045d2e2b2989e7b09200b1c40ab73.svg"/>
                        </figure>
                        <h2>
                            Deliver the Eats
                        </h2>
                        <div className="feature-links-wrp">
                            <a href="#" className="green">Sign up to deliver</a>
                        </div>
                    </div>
                </section>
                <hr className="divider"/>
                <SliderComponent title={"New on Uber Eats"} domId={"middle_slider"} datas={sliderSampleData} />
                <hr className="divider"/>
                <SliderComponent title={"Chinese Delivery in San Francisco Bay Area"} domId={"middle_slider2"}
                                 datas={sliderSampleData} />
                <hr className="divider"/>
                <div id="nearest_cities_wrp">
                    <header>
                        <h1>
                            Cities Near You
                        </h1>
                        <h3>
                            View all 500+ cities
                        </h3>
                    </header>
                    <div id="cities_list">
                        <a className="r1 c1">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r2 c1">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r3 c1">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r4 c1">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r5 c1">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r6 c1">
                            <div>
                                Atlanta
                            </div>
                        </a>

                        <a className="r1 c2">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r2 c2">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r3 c2">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r4 c2">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r5 c2">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r6 c2">
                            <div>
                                Atlanta
                            </div>
                        </a>

                        <a className="r1 c3">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r2 c3">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r3 c3">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r4 c3">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r5 c3">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r6 c3">
                            <div>
                                Atlanta
                            </div>
                        </a>

                        <a className="r1 c4">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r2 c4">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r3 c4">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r4 c4">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r5 c4">
                            <div>
                                Atlanta
                            </div>
                        </a>
                        <a className="r6 c4">
                            <div>
                                Atlanta
                            </div>
                        </a>

                    </div>
                </div>
                <hr className="divider"/>
                <SliderComponent title={"Pizza Delivery in San Francisco Bay Area"} domId={"bottom_slider"}
                                 datas={sliderSampleData} />
                <hr className="divider"/>
                <div id="foods_wrapper">
                    <h1>
                        Explore Popular Categories
                    </h1>
                    <div id="foods_items">
                        <div className="food-item ">
                            <figure>
                                <img src="https://duyt4h9nfnj50.cloudfront.net/sku/a84dc69cee307fba4f559b1e825d8e9e"/>
                            </figure>
                            <h3>Chinese</h3>
                        </div>
                        <div className="food-item ">
                            <figure>
                                <img src="https://duyt4h9nfnj50.cloudfront.net/sku/836fa3b8cf098f8cbed99cedc7c06779"/>
                            </figure>
                            <h3>Indian</h3>
                        </div>
                        <div className="food-item ">
                            <figure>
                                <img src="https://duyt4h9nfnj50.cloudfront.net/sku/7b2a32908c050e6b07252ffcbe651e8c"/>
                            </figure>
                            <h3>Mexican</h3>
                        </div>
                        <div className="food-item ">
                            <figure>
                                <img src="https://duyt4h9nfnj50.cloudfront.net/sku/971d80f9ccce0c8eab98014650ee97eb"/>
                            </figure>
                            <h3>Pizaa</h3>
                        </div>
                        <div className="food-item ">
                            <figure>
                                <img src="https://duyt4h9nfnj50.cloudfront.net/sku/21b6882726bf71ba17b29ab47ef16d22"/>
                            </figure>
                            <h3>Sushi</h3>
                        </div>
                        <div className="food-item ">
                            <figure>
                                <img src="https://duyt4h9nfnj50.cloudfront.net/sku/9a7792417e52d2be9f6550b48e48a4fc"/>
                            </figure>
                            <h3>Thai</h3>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    );
}

export default App;
