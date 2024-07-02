$(function () {
      $("form").submit(function(e) {
            let trueSend = true;          //флаг для отправки формы
            $("span").remove();           //убираем предупреждения при отправке формы

            // проверка имени
            const nameRegExp = /[а-яёa-z]+\s*/gi;
            let enteredName = $("#myname").val();
            //console.log(`Введено ${enteredName}`); 

            if($("#myname").val().length === 0 || !nameRegExp.test(enteredName) ) {
                  $("#myname").css("border","3px solid rgba(167, 33, 0)");
                  $("#myname").after("<span style='color:rgba(167, 33, 0)'><b>Пожалуйста, корректно заполните поле</b></span>");
                  trueSend = false;
                  //console.log("НЕ ок!"); 
            }
            else {
                  $("#myname").css("border","3px solid rgb(33, 148, 255)");
                  //console.log("ОК!");
            }

            // Проверка e-mail
            const mailRegExp = /^[a-z._\-\d]+@[a-z]+.[a-z]{2,6}$/gi;
            let enteredMail = $("#myemail").val();
            //console.log(`Введено ${enteredMail}`); 

            if($("#myemail").val().length === 0 || !mailRegExp.test(enteredMail) ) {
                  $("#myemail").css("border","3px solid rgba(167, 33, 0)");
                  $("#myemail").after("<span style='color:rgba(167, 33, 0)'><b>Пожалуйста, корректно заполните поле</b></span>");
                  trueSend = false;
                  //console.log("Почта НЕ ок!"); 
            }
            else {
                  $("#myemail").css("border","3px solid rgb(33, 148, 255)");
                  //console.log("Почта ОК!");
            }

            //Проверка выбора кнопки
            if (!($('input[name="opinion"]').is(':checked'))) {
                  $(".choice").after("<span style='color:rgba(167, 33, 0)'><b>Пожалуйста, выберите оценку</b></span>");
                  trueSend = false;
                  //console.log("НЕ выбран!"); 
            } else {
                  //$("span").remove();
                  $(".choice").after("<span style='color:rgb(33, 148, 255)'><b>Спасибо за ваше мнение!</b></span>");
                  //console.log("Выбран!");
            }

            //Проверка даты (оставлять пустое поле или ввести корректную информацию)
            const dataRegExp = /^202[2-9]{1}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/gi;
            let enteredData = $("#dt").val();
            //console.log(`Введено ${enteredData}`); 

            if($("#dt").val().length !== 0 && !dataRegExp.test(enteredData) ) {
                  $("#dt").css("border","3px solid rgba(167, 33, 0)");
                  $("#dt").after("<span style='color:rgba(167, 33, 0)'><b>Пожалуйста, корректно заполните дату</b></span>");
                  trueSend = false;
                  //console.log("Дата НЕ ок!"); 
            }
            else {
                  $("#dt").css("border","3px solid rgb(33, 148, 255)");
                  //console.log("Дата ОК!");
            }

            
            if(trueSend) {
                  //новый блок для вывода сообщения - вписать в страницу и выводить когда все ок вверху формы

                  /*$("form").after("<div style='display:block; font-size:22px; color:rgb(33, 148, 255)'><b>Спасибо за ваш отзыв!</b></div>");*/

                  $(".thanks").addClass("thanks-show");
                  console.log("Спасибо за отзыв!!");

                  e.preventDefault();
            }
      
            return trueSend;
      });
})