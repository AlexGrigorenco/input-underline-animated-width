let counter=0;


const input = document.querySelector('input');
const underline = document.querySelector('.underline');

input.oninput = function(){

  if(input.value.length === 0){
    underline.style.width = '100%';
  }else {
    counter = (input.value.length * 3) + '%';
  
    underline.style.width = counter;
  }
}


// $('input').on('input',function(e){

//   counter = $(this).val().length *4;

//  $('.underline').css('width',counter+'%');
  
//   // If not input 
//   if($(this).val().length == 0)
//  $('.underline').css('width','100%');

// })
