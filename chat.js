// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI


function addUser()
{
    //obtem o nome do usuario atravez da caixa de texto
  user_name = document.getElementById("user_name").value;

  //Armazena o valor da variavel user_name no armazenamento local
  localStorage.setItem("user_name", user_name);
  
  //direciona o usuario para pagina kwitter_room.html
    window.location = "chat_room.html";
    
}



