function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}refs={startbnt:document.querySelector("[data-start]"),stopbnt:document.querySelector("[data-stop]")};let e=null;refs.startbnt.addEventListener("click",(function(n){refs.startbnt.disabled=!0,refs.stopbnt.disabled=!1,e=setInterval((()=>{console.log(t()),document.body.style.backgroundColor=t()}),1e3)})),refs.stopbnt.addEventListener("click",(function(t){refs.startbnt.disabled=!1,refs.stopbnt.disabled=!0,clearInterval(e),console.log(`Interval with id ${e} has stopped!`)}));
//# sourceMappingURL=01-color-switcher.ed4eb2f0.js.map
