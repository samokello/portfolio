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
  
  function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username : "<sender’s email address>",
        Password : "<email password>",
        To : '<samokello024@gmail.com>',
        From : "<sender’s email address>",
        Subject : "<email subject>",
        Body : "<email body>",
    })
    .then(function(message){
        alert("mail sent successfully")
    });
}