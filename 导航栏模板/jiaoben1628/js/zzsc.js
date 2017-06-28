$(function(){
    var nav = $(".nav");
    var init = $(".nav .m").eq(ind);
    var block = $(".nav .block");
    block.css({
        "left": init.position().left - 3
    });
    nav.hover(function() {},
    function() {
        block.stop().animate({
            "left": init.position().left - 3
        },
        100);
    });
    $(".nav").slide({
        type: "menu",
        titCell: ".m",
        targetCell: ".sub",
        delayTime: 300,
        triggerTime: 0,
        returnDefault: true,
        defaultIndex: ind,
        startFun: function(i, c, s, tit) {
            block.stop().animate({
                "left": tit.eq(i).position().left - 3
            },
            100);
        }
    });
});

var ind = 0;
//…Ë÷√
myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_quwan'//∑Á∏Ò
});