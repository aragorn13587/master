import React from "react";
import MainClass from "./MainClass";

function slider(props) {
    if( !props || !props.domId || !props.datas || !props.datas.length )
        return (<h1>Select uniqe slider id for this opponent</h1>);
    const sliderDatas = props.datas;
    let sliderItemsHtmlParsed = ``;
    sliderDatas.forEach(function (itemPerSlide, indexPerSlide, arrayOuter) {
        sliderItemsHtmlParsed += '<div class="slider-items-wrp"><div class="slider-items">';
        itemPerSlide.forEach(function(item, index, array) {
            sliderItemsHtmlParsed += `<a class="slider-item col col-4">
                            <figure>
                                <img src="${item.img}"/>
                            </figure>
                            <div class="slider-item-other-info">
                                <h3>${item.title}</h3>
                                <p>${item.desc}</p>
                                <ul class="other-tags">
                                    <li>15–25 min</li>
                                    <li>4.7 <span class="fa fa-star gold"></span> (200+)</li>
                                    <li>$2.49 Delivery Fee</li>
                                </ul>
                            </div>
                        </a>`;
        });
        sliderItemsHtmlParsed += '</div></div>';
    });
    return (
        <div className="slider-wrp">
            <div className="slider-header">
                <h1>
                    {(props.title && props.title.length)?props.title:''}
                </h1>
                <div className="slider-btn-wrp">
                    <div onClick={() => MainClass.sliderAction('', '', '#'+props.domId, 'right')}
                         className="slider-btn right-slider-btn">
                        <span className="fa fa-long-arrow-right"></span>
                    </div>
                    <div onClick={() => MainClass.sliderAction('', '', '#'+props.domId, 'left')}
                         className="slider-btn left-slider-btn disabled-slider-btn2">
                        <span className="fa fa-long-arrow-left"></span>
                    </div>
                </div>
            </div>
            <div id={props.domId} className="slider-contents" dangerouslySetInnerHTML={{__html: sliderItemsHtmlParsed}}>

            </div>
        </div>
    );
}


export default slider