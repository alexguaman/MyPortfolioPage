function functionMenu(){const s=document.getElementById("links");console.log(s),s.classList.contains("links__show")?(s.classList.remove("links__show"),s.classList.add("links__hide")):(s.classList.remove("links__hide"),s.classList.add("links__show"))}function functionResize(){const s=document.documentElement.clientWidth,n=document.getElementById("links");s>=768&&(n.classList.contains("links__hide")&&n.classList.remove("links__hide"),n.classList.contains("links__show")&&n.classList.remove("links__show"))}window.addEventListener("resize",functionResize);
//# sourceMappingURL=bundle.js.map
