
//Function craetes dates blocks according to width and height of container

let dateMaker = ()=>{
    let datesContainer = document.querySelectorAll('.dates');
     console.log(datesContainer);

       datesContainer.forEach(dates => {   
          let heightForDate = dates.getBoundingClientRect().height / 12;
          for(let i = 1; i<=33; i++){
              elm = document.createElement('span');
              elm.innerHTML = `${i}`;
              elm.classList = 'date';
              elm.style.height = heightForDate + 'px';
              elm.style.width = heightForDate + 'px';

              if(i<=10){
                elm.classList += ' date-fill';
              }
              
              if (!(i > 31)) {
                 
                  dates.appendChild(elm);   
              }
          }
      });
};

dateMaker();



 document.querySelector('#back-icon').addEventListener('click',()=>{
           document.querySelector('.pass-container').style.transform = 'rotateY(0deg)';
 });

 document.querySelector('#go-icon').addEventListener('click',()=>{
     document.querySelector('.pass-container').style.transform = 'rotateY(180deg)';
});
