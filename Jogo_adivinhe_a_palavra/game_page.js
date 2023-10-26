pontuacaoJogador1 = 0;
pontuacaoJogador2 = 0;

turno_pergunta = "jogador1";
turno_resposta = "Jogador2";

nomeJogador1 = localStorage.getItem("Nome Jogador 1:");
nomeJogador2 = localStorage.getItem("Nome Jogador 2:");

document.getElementById("player1_name").innerHTML = nomeJogador1 + ":";
document.getElementById("player2_name").innerHTML = nomeJogador2 + ":";

document.getElementById("player1_score").innerHTML = pontuacaoJogador1;
document.getElementById("player2_score").innerHTML = pontuacaoJogador2;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + nomeJogador1;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + nomeJogador2;

function send(){ //Função é um pedaço de codigo que eu posso chamar sempre. 
    //variavel guarda alguma coisa 
    pegarPalavra = document.getElementById("word").value;
    palavra = pegarPalavra.toLowerCase(); // Deixa palavra toda minuscula
    console.log("Palavra Minuscula: "+ palavra)
   
    charAt1 = palavra.charAt(1); //charAt pega um caractere
    console.log(charAt1); //Imprime no console 2 letra

    tamanho_divide2 = Math.floor(palavra.length/2);
    charAt2 = palavra.charAt(tamanho_divide2);
    console.log(charAt2); //Pega letra do Meio da Palavra 

    tamanho_menos_1 = palavra.length - 1;
    charAt3 = palavra.charAt(tamanho_menos_1);
    console.log(charAt3); // Penultima letra da palavra

    remove_letra1 = palavra.replace(charAt1, "_");
    remove_letra2 = remove_letra1.replace(charAt2, "_");
    remove_letra3 = remove_letra2.replace(charAt3, "_");
    console.log(remove_letra3);

    questao_palavra = "<h4 id='word_display'> P. " + remove_letra3 + "</h4>";
    input_resposta = "<br> Resposta : <input type='text' id='input_check_box'>";
    checar_Botao = "<br><br><button class='btn btn-info' onclick='verificar()'>Verificar</button>"
    document.getElementById("output").innerHTML= questao_palavra + input_resposta + checar_Botao;
    document.getElementById("word").value="";

}

function verificar()
{
    pegarResposta = document.getElementById("input_check_box").value;
    Resposta  = pegarPalavra.toLowerCase();
    console.log("Reposta em letras minúsculas - " + Resposta);

    if(Resposta==palavra){

        if(turno_resposta == "Jogador1"){

            pontuacaoJogador1 = pontuacaoJogador1 + 1;
            document.getElementById("player1_score").innerHTML = pontuacaoJogador1;
        }
        else{
            pontuacaoJogador2 = pontuacaoJogador2 + 1;
            document.getElementById("player2_score").innerHTML = pontuacaoJogador2;
        }
    }

    if(turno_pergunta == "jogador1"){
 
        turno_pergunta = "jogador2";
        document.getElementById("player_question").innerHTML = "Turno de perguntas :" + nomeJogador2;
    }else{
         turno_pergunta = "jogador1";
         document.getElementById("player_question").innerHTML = "Turno de perguntas :" + nomeJogador1;

    }

    if(turno_resposta =="jogador1"){
        turno_resposta = "jogador2";
        document.getElementById("player_answer").innerHTML = "Turno da Resposta :" + nomeJogador2;
    }else{
        turno_resposta = "jogador1";
        document.getElementById("player_answer").innerHTML = "Turno da Resposta :" + nomeJogador1;
    }

}

