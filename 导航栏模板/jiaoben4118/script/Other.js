/*
*   JQuery 1.9.1
*   leiyu 2014-7-28
*   修改前请先备份
*/
$(function () {
    /*===================菜单 JS 动作=====================*/
    var menus = $(".t_c_bottom ul>li:first").siblings().andSelf();
    var thisMenu = $("#thisMenu");
    var mt = 161;//默认距离
    var mNow = 0;//获取当前的li
    for (var i = 0; i < menus.length; i++) {
        if (menus.eq(i).hasClass("thisli"))
            mNow = i;
    }
    //给定 thisli 默认位置
    thisMenu.css({ left: (mNow * 104 + mt) + "px" });
    menus.hover(function () {
        MenuMove($(this), ($(this).index() * 104 + mt), 1)
    }, function () {
        MenuMove($(this), (mNow * 104 + mt), 0)
    });
    var MenuAuto;
    function MenuMove(tn, lefts, move) {
        var ti = tn.index();
        var nodes = menus.eq(ti).children(".Nodes");
        nodes.stop();
        clearTimeout(MenuAuto);
        var _h = nodes.children("ul").height() + 23;//8个像素是上、下圆角图片高度 15个像素是 div 的 padding 值
        if (move === 1) {
            thisMenu.stop();
            thisMenu.animate({ left: lefts + "px" }, 165)
            nodes.css({ height: "0px" }).animate({ height: _h + "px" }, 300);
        }
        else if (move === 0) {
            nodes.css({ height: _h + "px" }).animate({ height: "0px" }, 300);
            MenuAuto = setTimeout(function () {
                thisMenu.animate({ left: lefts + "px" }, 300)
            }, 1250);
        }
    }
    
})