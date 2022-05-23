const accordianMenu =(menu)=>{

          if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
          } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
          } 
    
}
export {accordianMenu}