from telebot import types
import telebot

bot = telebot.TeleBot('5958497453:AAGXEifmrsLxiaGxmfNobiJWmf0V3KgGAjg')

def webAppKeyboardInline(): #создание inline-клавиатуры с webapp кнопкой
   keyboard = types.InlineKeyboardMarkup(row_width=1) #создаем клавиатуру inline
   webApp = types.WebAppInfo("https://useridentify.github.io/bot_cs/") #создаем webappinfo - формат хранения url
   one = types.InlineKeyboardButton(text="Открыть приложение", web_app=webApp) #создаем кнопку типа webapp
   keyboard.add(one) #добавляем кнопку в клавиатуру

   return keyboard #возвращаем клавиатуру

@bot.message_handler(commands=['start']) #обрабатываем команду старт
def start_fun(message):
   bot.send_message( message.chat.id, 'Привет, я бот Юздеска!)\nОткрой приложение по кнопке на клавиатуре.', parse_mode="Markdown", reply_markup=webAppKeyboardInline()) #отправляем сообщение с нужной клавиатурой


@bot.message_handler(content_types="text")
def new_mes(message):
   start_fun(message)


@bot.message_handler(content_types="web_app_data") #получаем отправленные данные 
def answer(webAppMes):
   print(webAppMes) #вся информация о сообщении
   print(webAppMes.web_app_data.data) #конкретно то что мы передали в бота
   bot.send_message(webAppMes.chat.id, f"Хочу добавить:\n {webAppMes.web_app_data.data}") 
   #отправляем сообщение в ответ на отправку данных из веб-приложения 

if __name__ == '__main__':
   bot.infinity_polling()