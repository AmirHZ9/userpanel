var open = true;
function openMenu(menu) {
  if (open) {
    menu.style.display = "block";
    open = false;
  } else {
    menu.style.display = "none";
    open = true;
  } 
}


const closeSidebar =(sidebarbtn)=>{
  console.log('asdf')
}
export { openMenu,closeSidebar };
