/*let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно  

tg.MainButton.text = "Оформить"; //изменяем текст кнопки 
tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
tg.MainButton.color = "#29CE00"; //изменяем цвет бэкграунда кнопки

let btn1 = document.getElementById("btn1"); //объявляем переменную по ID 

btn1.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
   if (tg.MainButton.hide){ //если кнопка скрыта 
    tg.MainButton.show() //показываем кнопку 
   }
});

const input1 = document.getElementById("inp1")

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    const value = input1.value.trim()
    if (value > 0) {
      tg.sendData(`Добавить агента поддержки: ${value}`);
  }  
});

let btn2 = document.getElementById("btn2"); //объявляем переменную по ID 

btn2.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
   if (tg.MainButton.hide){ //если кнопка скрыта 
    tg.MainButton.show() //показываем кнопку 
   }
});

const input2 = document.getElementById("inp2")

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    const value = input2.value.trim()
    if (value > 0) {
      tg.sendData(`Добавить внутреннего сотрудника: ${value}`);
  }  
});

let btn3 = document.getElementById("btn3"); //объявляем переменную по ID 

btn3.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
   if (tg.MainButton.hide){ //если кнопка скрыта 
    tg.MainButton.show() //показываем кнопку 
   }
});

const input3 = document.getElementById("inp3")

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    const value = input3.value.trim()
    if (value > 0) {
      tg.sendData(`Добавить Telegram personal: ${value}`);
  }  
});

let btn4 = document.getElementById("btn4"); //объявляем переменную по ID 

btn4.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
   if (tg.MainButton.hide){ //если кнопка скрыта 
    tg.MainButton.show() //показываем кнопку 
   }
});

const input4 = document.getElementById("inp4")

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    const value = input4.value.trim()
    if (value > 0) {
      tg.sendData(`Добавить ВК Личная страница: ${value}`);
  }  
});

let btn5 = document.getElementById("btn5"); //объявляем переменную по ID 

btn5.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
   if (tg.MainButton.hide){ //если кнопка скрыта 
    tg.MainButton.show() //показываем кнопку 
   }
});

const input5 = document.getElementById("inp5")

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    const value = input5.value.trim()
    if (value > 0) {
      tg.sendData(`Добавить WhatsApp: ${value}`);
  }  
});

let btn6 = document.getElementById("btn6"); //объявляем переменную по ID 

btn6.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
   if (tg.MainButton.hide){ //если кнопка скрыта 
    tg.MainButton.show() //показываем кнопку 
   }
});

const input6 = document.getElementById("inp6")

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    const value = input6.value.trim()
    if (value > 0) {
      tg.sendData(`Добавить WhatsApp Business API: ${value}`);
  }  
});

let btn7 = document.getElementById("btn7"); //объявляем переменную по ID 

btn7.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
   if (tg.MainButton.hide){ //если кнопка скрыта 
    tg.MainButton.show() //показываем кнопку 
   }
});

const input7 = document.getElementById("inp7")

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    const value = input7.value.trim()
    if (value > 0) {
      tg.sendData(`Добавить Viber: ${value}`);
  }  
});*/