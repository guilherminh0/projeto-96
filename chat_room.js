//Atualizar o elemento HTML com o nome do usuario

var firebaseConfig = {apiKey: "AIzaSyDziV_bmLbIfxgaKd7bLDaWUb_9Imi1XrI",
authDomain: "kwitter-94e23.firebaseapp.com",
databaseURL: "https://kwitter-94e23-default-rtdb.firebaseio.com",
projectId: "kwitter-94e23",
storageBucket: "kwitter-94e23.appspot.com",
messagingSenderId: "4375530654",
appId: "1:4375530654:web:404f23265ae193108d7f8f",
measurementId: "G-MM8TLB61JF"}
firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

//A funçao addRoom sera chamada quando o botão adicionar sala for clicado
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

//Função obtera os nomes da sala do banco de dados
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

//Função que sera chamada quando clicarmos em qualquer sala
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

//Função para desconectar
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "chat.html";
}
