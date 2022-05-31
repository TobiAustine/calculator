(function(){
    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-delete');

    buttons.forEach(function (button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.number;
           display.value += value;
          
        })
    });

    equal.addEventListener('click', function(e){
        if(display.value === ' '){
            display.value = 'Please Enter';
        }else{ 
             
            display.value = eval(display.value);
          

        }
    })

     clear.addEventListener('click', function(e){
        display.value = '';
    })
})();