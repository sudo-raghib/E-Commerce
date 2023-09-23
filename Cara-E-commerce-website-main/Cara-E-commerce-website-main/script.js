let bar=document.getElementById("bar");
let navbar=document.getElementById("navbar");
let critical=document.getElementById("critical");
bar.addEventListener('click',function toggle(){
    navbar.style.right="0px";
});
critical.addEventListener('click',function toggle(){
    navbar.style.right="-300px";
});
