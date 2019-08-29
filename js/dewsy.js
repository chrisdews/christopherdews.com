var offset = 100;

$(window).scroll(function(){
    
    var $elem = $(".greyfade1"),
        topDist = $elem.offset().top - $(this).scrollTop(),
        bottomDist = $elem.offset().top + $elem.height() - $(this).scrollTop();
    
    if ((topDist - 450) < offset && (bottomDist -100) > offset) {
        // (turn on colors)
        // $elem.css("background-color","red");
        $elem.css({'-webkit-filter': 'grayscale(0%)', 
                    '-moz-filter': 'grayscale(0%)',
                    'filter': 'grayscale(0%)',
                    'transition': 'all 0.5s ease'});
    } else {
        // (turn off colors)
        $elem.css({'-webkit-filter': 'grayscale(100%)', 
                    '-moz-filter': 'grayscale(100%)',
                    'filter': 'grayscale(100%)',
                    'transition': 'all 0.5s ease'});
    }
});

$(window).scroll(function(){
    
    var $elem = $(".greyfade1a"),
        topDist = $elem.offset().top - $(this).scrollTop(),
        bottomDist = $elem.offset().top + $elem.height() - $(this).scrollTop();
    
    if ((topDist - 450) < offset && (bottomDist -100 ) > offset) {
        // (turn on colors)
        // $elem.css("background-color","red");
        $elem.css({'-webkit-filter': 'grayscale(0%)', 
                    '-moz-filter': 'grayscale(0%)',
                    'filter': 'grayscale(0%)',
                    'transition': 'all 0.5s ease'});
    } else {
        // (turn off colors)
        $elem.css({'-webkit-filter': 'grayscale(100%)', 
                    '-moz-filter': 'grayscale(100%)',
                    'filter': 'grayscale(100%)',
                    'transition': 'all 0.5s ease'});
    }
});

$(window).scroll(function(){
    
    var $elem = $(".greyfade2"),
        topDist = $elem.offset().top - $(this).scrollTop(),
        bottomDist = $elem.offset().top + $elem.height() - $(this).scrollTop();
    
    if ((topDist - 350) < offset && (bottomDist) > offset) {
        // (turn on colors)
        // $elem.css("background-color","red");
        $elem.css({'-webkit-filter': 'grayscale(0%)', 
                    '-moz-filter': 'grayscale(0%)',
                    'filter': 'grayscale(0%)',
                    'transition': 'all 0.5s ease'});
    } else {
        // (turn off colors)
        $elem.css({'-webkit-filter': 'grayscale(100%)', 
                    '-moz-filter': 'grayscale(100%)',
                    'filter': 'grayscale(100%)',
                    'transition': 'all 0.5s ease'});
    }
});

$(window).scroll(function(){
    
    var $elem = $(".greyfade3"),
        topDist = $elem.offset().top - $(this).scrollTop(),
        bottomDist = $elem.offset().top + $elem.height() - $(this).scrollTop();
    
    if ((topDist - 450) < offset && (bottomDist -200) > offset) {
        // (turn on colors)
        // $elem.css("background-color","red");
        $elem.css({'-webkit-filter': 'grayscale(0%)', 
                    '-moz-filter': 'grayscale(0%)',
                    'filter': 'grayscale(0%)',
                    'transition': 'all 0.5s ease'});
    } else {
        // (turn off colors)
        $elem.css({'-webkit-filter': 'grayscale(100%)', 
                    '-moz-filter': 'grayscale(100%)',
                    'filter': 'grayscale(100%)',
                    'transition': 'all 0.5s ease'});
    }
});

$(window).scroll(function(){
    
    var $elem = $(".greyfade4"),
        topDist = $elem.offset().top - $(this).scrollTop(),
        bottomDist = $elem.offset().top + $elem.height() - $(this).scrollTop();
    
    if ((topDist - 650) < offset && (bottomDist) > offset) {
        // (turn on colors)
        // $elem.css("background-color","red");
        $elem.css({'-webkit-filter': 'grayscale(0%)', 
                    '-moz-filter': 'grayscale(0%)',
                    'filter': 'grayscale(0%)',
                    'transition': 'all 0.5s ease'});
    } else {
        // (turn off colors)
        $elem.css({'-webkit-filter': 'grayscale(100%)', 
                    '-moz-filter': 'grayscale(100%)',
                    'filter': 'grayscale(100%)',
                    'transition': 'all 0.5s ease'});
    }
});

