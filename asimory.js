let string = "";


let buttons = document.querySelectorAll('.majbut');




    

    

    Array.from(buttons).forEach((buttons) => {
      buttons.addEventListener('touchstart', (e) => {
          string = string + e.target.innerHTML;
          document.querySelector("textarea").value = string;
        })})

       
