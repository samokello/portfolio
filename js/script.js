jQuery(document).ready(function(){
  
    jQuery('.progress-bar').each(function() {
      jQuery(this).find('.progress-content').animate({
        width:jQuery(this).attr('data-percentage')
      },2000);
      
      jQuery(this).find('.progress-number-mark').animate(
        {left:jQuery(this).attr('data-percentage')},
        {
         duration: 2000,
         step: function(now, fx) {
           var data = Math.round(now);
           jQuery(this).find('.percent').html(data + '%');
         }
      });  
    });
  });




const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes  = document.querySelectorAll(".error");


function validateForm (){

  clearMessage();

  let errorFlag=false

if(nameInput.value.length < 1){
  errorNodes[0].innerText="Name cannot be blank";
  nameInput.classList.add("erroe-border");

  errorFlag=true;
}

if(!emailIsValid(email.value)){
  errorNodes[1].innerText="Invalid email address";
  email.classList.add("error-border");

  errorFlag=true;
}

if(message.value.length < 1){
  errorNodes[2].innerText="Please Enter Message";
  message.classList.add("error-border");

  errorFlag=true;
}

if(!errorFlag){
  success.innerText="Success!";
}

}




function  clearMessage(){
  for(let i=0; i <errorNodes.length; i++){
    errorNodes[i].innerText="";
  }
success.innerText="";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");

}

function emailIsValid(email){
  let pattern=/\s+@\s+\.s+/;
  return pattern.test(email);
}