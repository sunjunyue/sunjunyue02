// JavaScript Document
$(function() {
    jQuery.jqtwo = function(tt, cont, even) {
        $(tt, cont).find("li").removeClass("cur");
        $(tt).find("li:first").addClass("cur");
        $(cont).find("li:first").addClass("cur");
        
		$(tt).find("li").bind(even,function() {
            $(this).addClass("cur").siblings("li").removeClass("cur");
            var activeindex = $(tt).find("li").index(this);
            $(cont).find("li").eq(activeindex).addClass("cur").siblings("li").removeClass("cur")
        })		
    }
});