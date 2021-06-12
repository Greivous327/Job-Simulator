const name = () =>{
    var nSubmit = document.querySelector(`#nSubmit`);
    var uInput = document.querySelector(`#mName`);
    var info = document.querySelector(`#info`);
    var start = document.querySelector(`.name`);
    var job = document.querySelector(`.job`);
    
    nSubmit.addEventListener(`click`, () =>{
        if(uInput === null){
            info.textContent = (`Money: $`);
        }else{
            document.querySelector('.uName').innerHTML = uInput.value;
        };
        start.remove();
        job.style.display = `initial`;
        return;
    });
};

const game = () =>{
    let money = 0;
    
    const press = document.querySelector(`.button button`);
    const Money = document.querySelector(`.Money`);
    
    press.addEventListener(`click`, () =>{
       money++;
      Money.textContent = money;
    });
    
};
game();
name();