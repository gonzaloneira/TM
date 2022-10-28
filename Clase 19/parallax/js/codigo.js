$(document).ready(function(){
    $window = $(window)
    
    $('#intro').height($window.height())
    $window.scroll(function () {
        $('div.background').each(function (index, item) { //en este caso, background es la clase del div.
            let $scroll = $(item)
            let yPos = -($window.scrollTop()/$scroll.data('speed'))
            let coords = '50% ' + yPos + 'px'
            $scroll.css ({backgroundPosition: coords})
        })
    })

})