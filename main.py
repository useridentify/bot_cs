from telebot import types
import telebot
import re

bot = telebot.TeleBot('5958497453:AAHf9tpI6ltcETe34e9Oy8uXhZvfuY7ysqs')

def webAppKeyboard(): #создание клавиатуры с webapp кнопкой
   keyboard = types.ReplyKeyboardMarkup(row_width=1) #создаем клавиатуру
   webAppTest = types.WebAppInfo("https://useridentify.github.io/bot_cs/") #создаем webappinfo - формат хранения url
   one_butt = types.KeyboardButton(text="Открыть приложение", web_app=webAppTest) #создаем кнопку типа webapp
   keyboard.add(one_butt) #добавляем кнопки в клавиатуру

   return keyboard #возвращаем клавиатуру


@bot.message_handler(commands=['start']) #обрабатываем команду старт
def start_fun(message):
   bot.send_message(message.chat.id, 'Привет, я бот Юздеска!)\nПомогу тебе с оплатой, пришлю документы и дам полезную информацию по работе с платформой.\nЧтобы я мог это сделать, давай познакомимся. Пришли, пожалуйста, ID своей компании в Юздеске. Его можно посмотреть тут - https://secure.usedesk.ru/settings/company\n\nЗатем, воспользуйся веб-приложением по кнопке ниже.', parse_mode="Markdown", reply_markup=webAppKeyboard()) #отправляем сообщение

@bot.message_handler(content_types=['text']) #получаем ID и даем кнопку приложения
def get_id(message):
   bot.send_message(message.chat.id, "Спасибо!\nПередал информацию менеджеру.", parse_mode="Markdown")

@bot.message_handler(content_types="web_app_data") #получаем отправленные данные 
def answer(webAppMes):
   print(webAppMes) #вся информация о сообщении
   print(webAppMes.web_app_data.data) #конкретно то что мы передали в бота
   bot.send_message(webAppMes.chat.id, f"Ваш заказ.\n\n{webAppMes.web_app_data.data}") 
   #отправляем сообщение в ответ на отправку данных из веб-приложения 

if __name__ == '__main__':
   bot.infinity_polling()