
// JavaScript Document
function setViews(id)
{
	document.getElementById("member1").className="";
	document.getElementById("member2").className="";
	document.getElementById("member3").className="";
	document.getElementById("member4").className="";
	document.getElementById("member5").className="";
	document.getElementById("member6").className="";
	document.getElementById("tabmem1").style.display="none";
	document.getElementById("tabmem2").style.display="none";
	document.getElementById("tabmem3").style.display="none";
	document.getElementById("tabmem4").style.display="none";
	document.getElementById("tabmem5").style.display="none";
	document.getElementById("tabmem6").style.display="none";
	document.getElementById("member"+id).className="new_tab_on";
	document.getElementById("tabmem"+id).style.display="block";
	document.getElementById("tabmem"+id).className="dis";
	
	
	
	}
	
	
