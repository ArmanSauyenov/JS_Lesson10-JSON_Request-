//Практика:
//1. Создать форму в html документе, на форме добавить три поля, поле text, поле code и кнопку(button).
//Ниже формы создать textarea[readonly]
//Создать файл response.json с содержимым { "response": "My Response", "code": "123" }
//После каждого заполнения полей и нажатия кнопки, делается AJAX запрос к response.json,
//    выводим введенный текст, вернувшийся текст в "response", и результат сравнения введенного
//кода и кода в ответе response.json.

//    Например, если в поля ввели: "My Text", "123", то в textarea добавляется строка "My Response, My Text, true"
//Или если в поля ввели: "hello", "555", то в textarea добавляется строка "My Response, hello, false"

document.querySelector('#btn1').addEventListener('click', function (e) {
    e.preventDefault();

    //Задание 2

    var a = document.getElementById('input1').value;
    var b = document.getElementById('input2').value;

    var c = {
        'obj1': document.getElementById('input1').value,
        'obj2': document.getElementById('input2').value,
    }
    var str = JSON.stringify(c);
    document.querySelector("#txtarea1").value += str;

    //Задание 1

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'response.json', false); // GET/POST/PUT/DELETE, URL, async
   
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {

            var response = JSON.parse(xhr.responseText);
            document.querySelector("#txtarea2").value += response.response1 == c.obj1;
            document.querySelector("#txtarea2").value += response.code1 == c.obj2;
        }
    }
    xhr.send(); 
})



