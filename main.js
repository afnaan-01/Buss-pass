
//Function craetes dates blocks according to width and height of container

 let dateMaker = ()=>{
       let goingContainer = document.querySelector('#going-dates');
       let comingContainer = document.querySelector('#coming-dates');

       let heightForDate = goingContainer.getBoundingClientRect().height /16;
         
          for(let i = 1; i<=32; i++){
              goingContainer.innerHTML += `<span class="date">${i}</span>`;
              comingContainer.innerHTML += `<span class="date">${i}</span>`;
          }
 };

 dateMaker();