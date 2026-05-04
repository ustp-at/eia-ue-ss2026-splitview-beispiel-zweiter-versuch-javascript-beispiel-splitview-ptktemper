/*$(document).ready(function(){
    var parent = $(".splitter-container");
    var resizer = parent.find(".resizer");
    var top = parent.find(".top");
    var bottom = parent.find(".bottom");

    parent.on("mousemove",function(event){
        if(event.clientX > 150 
            && event.clientX < parent.width() - 150){
                
            resizer.css("left",event.clientX);
            top.css("width",event.clientX);
            bottom.css("left",event.clientX);
            bottom.css("width",parent.width() - event.clientX);
            }
    });

});*/

document.addEventListener("DOMContentLoaded", function() {
    var parent = document.querySelector(".splitter-container");
    var resizer = parent.querySelector(".resizer");
    var top = parent.querySelector(".top");
    var bottom = parent.querySelector(".bottom");

    parent.addEventListener("mousemove",function(event){
        if(event.clientX > 150 
            && event.clientX < parent.offsetWidth - 150){
                
            resizer.style.left = event.clientX + "px";
            top.style.width = event.clientX + "px";
            bottom.style.left = event.clientX + "px";
            bottom.style.width = (parent.offsetWidth - event.clientX) + "px";
        }
    });
});