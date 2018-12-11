import '../style/index.scss';

const menuIcon = document.querySelector('.menu--lines');
const navItems = document.querySelector('.nav--items');
const navItem = document.querySelectorAll('.nav--item');
const menuLines = document.querySelector('.menu--lines');
const lines = document.querySelectorAll('.line');

function showMenu() {
  navItems.classList.toggle('open');
  menuLines.classList.toggle('move--menuIcon');
  lines.forEach(line => line.classList.toggle('rotate--line'));
}

menuIcon.addEventListener('click', showMenu);

// navItem.forEach(item => item.addEventListener('click', (e) => {
//   e.currentTarget.classList.remove('open');
//   console.log(e.currentTarget)
// }));

document.addEventListener('click', (e) => {
  if (e.target.parentElement.parentElement.parentElement.classList.contains('open')
      || e.target.parentElement.parentElement.classList.contains('open') ) {
        navItems.classList.remove('open');
        menuLines.classList.remove('move--menuIcon');
        lines.forEach(line => line.classList.remove('rotate--line'));
      console.log(e.target);
      }
})



if (document.querySelector('.hero')) {

  const heros = document.querySelectorAll('.hero');
  let myIndex = 0;
  
  function carousel() {
    // heros.forEach(hero => hero.style.display = 'none');
    heros.forEach(hero => hero.style.opacity = '0');
    myIndex++;
    if (myIndex > heros.length) 
    myIndex = 1;
    // heros[myIndex - 1].style.display = 'block';
    heros[myIndex - 1].style.opacity = '1';
    setTimeout(carousel, 4000);
  }
  
  carousel();
}