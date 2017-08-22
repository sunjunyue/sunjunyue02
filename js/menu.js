(function($){	
$(function(){
	var $menu = $(".dropdown-menu");
	 $menu.menuAim({
			activate: activateSubmenu,
            deactivate: deactivateSubmenu
     });
function activateSubmenu(row) {
  	var $row = $(row),
    submenuId = $row.data("submenuId"),
    $submenu = $("#" + submenuId),
    offset = $menu.offset(),
    height = $menu.outerHeight(),
    width = $menu.outerWidth();

   	$submenu.css({display: "block",
         top: 0,
         left: width,
         height: height - 4});
    $row.find("a").addClass("maintainHover");
};
function deactivateSubmenu(row) {
    var $row = $(row),
    submenuId = $row.data("submenuId"),
    $submenu = $("#" + submenuId);
    
    $submenu.css("display", "none");
	$row.find("a").removeClass("maintainHover");   
};
$(document).click(function() {
	$("a.maintainHover").removeClass("maintainHover");
    $(".popover").css("display", "none");
	
});
});
})(jq191);
 

 