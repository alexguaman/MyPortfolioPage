window.addEventListener("resize", functionResize);

function functionMenu() {
  const links = document.getElementById("links");
  console.log(links);
  if (links.classList.contains('links__show')) {
    links.classList.remove('links__show');
    links.classList.add('links__hide');
  } else {
    links.classList.remove('links__hide');
    links.classList.add('links__show');
  }
}

function functionResize() {
  const size = document.documentElement.clientWidth;
  const links = document.getElementById("links");

  if (size >= 768) {
    if (links.classList.contains('links__hide')) {
        links.classList.remove('links__hide');
    }
    
    if (links.classList.contains('links__show')) {
        links.classList.remove('links__show');
    }
  }

}
