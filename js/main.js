   //  Select all .menu_class
   for (let b = 0; b < document.querySelectorAll(".menu_class").length; b++) {
      //  Create i x article tag behind first_layer
      for (let m = 0; m < 15; m++) {
         (() => {
            let behindFirstLayer = document.getElementById("menu_3d").querySelectorAll(".menu_class")[b]
            let article = document.createElement("article");
            behindFirstLayer.appendChild(article);
         })()
         //  Setting z-inex and add style to acrticle tag
         let firstLayer = document.querySelectorAll(".first_layer")[b]
         let artLayer = document.querySelectorAll(".menu_class")[b].getElementsByTagName('article')
         firstLayer.style.zIndex = artLayer.length
         for (let i = 0; i < artLayer.length; i++) {
            artLayer[i].style.zIndex = -i
            artLayer[i].style.right = i * -1 + "px"
            artLayer[i].style.top = i * -0.5 + "px"
         }
      }
   }