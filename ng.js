

var yourLogin = prompt("your login");

var yourPassword;

if(yourLogin=="Админ"){
   yourPassword = prompt("your password");


    if(yourPassword=="Чёрный Властелин"){
        alert("Добро пожаловать!");
    }

    else if(yourPassword==null){
        alert("Вход отменён");
    }

    else{alert("Пароль неверен")}

}

else if(yourLogin==null){
    alert("Вход отменён")
}

else{
    alert("Я вас не знаю");
}

