
/*bottom to top*/ 

let totop=document.querySelector(".top-top")
window.addEventListener("scroll",()=>{
	if(window.pageYOffset>100){
		totop.classList.add("active");
	}
	else{
		totop.classList.remove("active");
	}
})

/*menu*/

var menulist=document.getElementById("menu-list");
menulist.style.maxHeight="0%";
function togglemenu(){
    if(menulist.style.maxHeight=="0%"){
        menulist.style.maxHeight="100%";
     }
    else{
        menulist.style.maxHeight="0%";
    }
}
function closemenu(){
    menulist.style.maxHeight='0%';
}