$(function(){

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "php/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  $('select').styler();

  $('.header__btn-menu').on('click',function() {
    $('.menu ul').slideToggle();
  });
  $('.services__item-triger').on('click',function() {
    $(this).find('.services__item-show').slideToggle();
  });
});
