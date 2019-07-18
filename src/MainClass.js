import $ from 'jquery';
const MainClass = function(){

    const checkScrollForHeader = function () {
        let scrollTop = $(window).scrollTop();
        const headerEle = $('#header');
        if( scrollTop > 170 )
            headerEle.addClass('active');
        else
            headerEle.removeClass('active');
    };
    const sliderAction = function (event,_this,sliderId,direction) {
        const sliderContentsWrpEle = $(sliderId);
        if( !sliderContentsWrpEle ) return;
        const sliderItemsWrpEle = sliderContentsWrpEle.find('.slider-items-wrp');
        const translateXValue = sliderItemsWrpEle.width();
        const currentTranslateValue = parseInt(sliderContentsWrpEle.attr('data-translate'));
        let finalTranlste = 0;
        if( direction === 'left' ){
            if( currentTranslateValue )
                finalTranlste = currentTranslateValue + translateXValue;
            else
                finalTranlste = 0;
        }else{
            if( currentTranslateValue ){
                finalTranlste = currentTranslateValue - translateXValue;
                const maxRightValue = translateXValue * (sliderItemsWrpEle.length - 1);
                if( -parseInt(finalTranlste) > parseInt(maxRightValue) )
                    return;
            }
            else
                finalTranlste = 0 - translateXValue;
        }
        $(sliderId+' .slider-items-wrp').css({
            '-webkit-transform':`translateX(${finalTranlste}px)`,
            '-webkit-transition':'-webkit-transform .35s cubic-bezier(0.175, 0.885, 0.320, 1.275)'
        });
        sliderContentsWrpEle.attr('data-translate',finalTranlste);
    };
    return {
        init:function () {
            let delayForLoadActions = setInterval(function () {
                clearInterval(delayForLoadActions);
                checkScrollForHeader();
                window.addEventListener('scroll', checkScrollForHeader);
            },500);
        },
        checkScrollForHeader:function () {
            checkScrollForHeader();
        },
        sliderAction:function (event,_this,sliderId,direction) {
            sliderAction(event,_this,sliderId,direction);
        }
    };
}();


export default MainClass;