$(function () {
      $("form").submit(function(e) {
            e.preventDefault();           // предотвращение перезагрузки страницы (форма не отправляет данные самостоятельно)
            
            let trueSend = true;          //флаг для отправки формы
            $("span").remove();           //убираем предупреждения при отправке формы
            $(".warning").remove();

            // проверка имени, поля "Задать вопрос"
            $("#myname,textarea").each( function() {
                  const nameRegExp = /[а-яёa-z']+\s*/gi;
                  let entered = $(this).val();
                  //console.log(`Введено ${entered}`); 

                  if($(this).val().length === 0 || !nameRegExp.test(entered) ) {
                        $(this).css("border","3px solid rgba(167, 33, 0)");
                        $(this).after("<p class='warning' style='color:rgba(167, 33, 0); margin-bottom: 0;'><b>Пожалуйста, корректно заполните поле</b></p>");
                        trueSend = false;
                        //console.log("НЕ ок!"); 
                  }
                  else {
                        $(this).css("border","3px solid rgb(33, 148, 255)");
                        //console.log("ОК!");
                  } 
            });

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
            
            // если все поля заполнены верно
            if(trueSend) {
                  $(".mainForm form").css("display","none");
                  $(".thanks").css("display","block");
            }
            
            return trueSend;
      });
})