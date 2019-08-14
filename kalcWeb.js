/*      var soma = "+";
      var subtracao = "-";
      var multiplicacao = "*";
      var divisao = "/";
      var igual = "=";
      var valorAtual = 0;
      var valorAnterior = 0;
      var resultado = 0;


       function PegarValor(valor){
            MostrarTela(valor);

        }

        const MostrarTela = function(valor){
           const pegar = document.querySelector(".screen")
           if(pegar.innerText == 0){
            pegar.innerText = "";
            pegar.innerText +=valor; 
           }
           else{
              pegar.innerText += valor;
           } 
           return pegar;
        }

       // function PegarValor2(valor){
         // document.querySelector(".screen").innerText = valor;
       // }

        function PegarOperador(valor){
           MostrarOperador(valor); 

          if(valor == soma){

          }

          //return resultado;
        }

        const MostrarOperador = function(valor){
            const ope = document.querySelector(".screen")
            ope.innerText += valor;
        }

       const zerar = function(){
            const pegar = document.querySelector(".screen")
            pegar.innerText = "0";
       }

*/
  var soma = "+";
  var divisa = "÷";
  var subtracao = "-";
  var multiplicacao = "x";
  var resultado = 0;

  var valorAnterior =0;
  var valorAtual = 0;
  var operando=false;
  var operador = 0 ;

  const mostrar =  document.querySelector(".screen");

  function limpar(){
    mostrar.innerText = "0";
    valorAnterior = 0;
    valorAtual = 0;
    resultado = 0;
    operando = false;
  }
  
  function PegarValor(valor){
    MostrarTela(valor);
  }

  function PegarTela(){
    
  }

  function MostrarTela(valor){

    if(operando){
        operando=false;
        mostrar.innerText = "";
        mostrar.innerText = valor;
    }else{
          if(valor == "." && mostrar.innerText == "0"){
              mostrar.innerText = "0";
              mostrar.innerText += valor;
          }
          else if(mostrar.innerText == "0"){
                    mostrar.innerText = "";
                    mostrar.innerText +=valor;
          }else{
                mostrar.innerText += valor;
          }   
    }
  }
   

  function PegarOperador(valor){
   //console.log(valor);
    operador = valor;
    valorAnterior = resultado;
    valorAtual = mostrar.innerText;

    if(valor == soma){
        mostrar.innerText = "";
        resultado = (Number(valorAnterior) + Number(valorAtual));
        //console.log(resultado);
        MostrarTela(resultado);
        operando=true;
    }else if(valor == subtracao){
              mostrar.innerText = "";
      if(valorAnterior == 0){
          resultado = (Number(valorAtual) - Number(valorAnterior)); 
          MostrarTela(resultado);
          operando=true;
      }else{
            resultado = (Number(valorAnterior) - Number(valorAtual));
            MostrarTela(resultado);
            operando=true;
            } 
    }else if(valor == multiplicacao){
              mostrar.innerText = "";
          if(valorAnterior == 0){
              resultado = (Number(valorAtual) * Number(1));
              MostrarTela(resultado);
              operando = true;
          }else{
              resultado = (Number(valorAtual) * Number(valorAnterior));
              MostrarTela(resultado);
              operando = true;
          }
    }else if(valor == divisa){
              mostrar.innerText = "";
          if(valorAnterior == 0 || valorAnterior <=0){
              resultado = (Number(valorAtual) / Number(1));
              MostrarTela(resultado);
              operando = true;
          }else{
              resultado = (Number(valorAnterior) / Number(valorAtual));
              MostrarTela(resultado);
              operando = true;
          }
           
      }

   //  var imprimir = {valorAnterior,valorAtual,valor,resultado};
    // console.table(imprimir); 
  }

  const igual = function(){
      PegarOperador(operador);
       if(operador != ""){
            operador = "";
        }
    }



  

