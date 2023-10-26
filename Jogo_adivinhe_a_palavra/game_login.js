
function addUsuario(){
  jogador1 = document.getElementById("player1_name_input").value;
  jogador2 = document.getElementById("player2_name_input").value;

  localStorage.setItem("Nome Jogador 1:", jogador1);
  localStorage.setItem("Nome Jogador 2:", jogador2);

  window.location = "game_page.html";
  
}
