var container = document.querySelector(".box");
const casillas = 9;

// crear puchero
 var puchero = document.createElement('canvas');
 puchero.classList.add('puchero');
 puchero.width = 120;
 puchero.height = 120;
 container.appendChild(puchero);
 pintarPuchero(puchero,7);
//<!-- Crear elementos canvas para las casillas -->
//<!-- Usar un bucle for para crear los elementos de manera automática -->

//Los canvas se formarán en una elipse
for (var i = 0; i < casillas; i++) {
  // Crear un elemento canvas
  var canvas = document.createElement('canvas');
  canvas.classList.add('casilla');
  // Establecer el ancho y alto del canvas en 50 (cada canvas será de 50 x 50)
  canvas.width = 120;
  canvas.height = 120;
  // Añadir el canvas a la página
  container.appendChild(canvas);
  
}

// Obtener una referencia a todos los elementos canvas en la página
var canvases = document.querySelectorAll('.casilla');



// Dibujar una elipse en cada canvas y posicionarlos en una elipse de 
for (var i = 0; i < canvases.length; i++) {
  // Obtener el contexto del canvas en 2D
  var ctx = canvases[i].getContext('2d');

  // Dibujar una elipse en el canvas
  ctx.beginPath();  
  
  //ctx.ellipse(35, 35, 35, 35, 0, 0, 2 * Math.PI);
  //ctx.stroke();

  // Posicionar el canvas en la elipse 
  canvases[i].style.left = Math.cos(2 * Math.PI * i / casillas) * 400 + 400 - 25 + 'px';
  canvases[i].style.top = Math.sin(2 * Math.PI * i / casillas) * 250 + 300  - 25  + 'px';
  
  if (i>4) pintarCasilla(canvases[i],i+3)
  else pintarCasilla(canvases[i],i+2)
}



function pintarCasilla(canvas, fichas, num){
  var ctx = canvas.getContext('2d');
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();
  for (var i = 0; i < fichas; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i / fichas) * 35 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i / fichas) * 35 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
      if (i < num ) ctx.fillStyle = 'black'
         else ctx.fillStyle = 'white'
      ctx.fill();
    
     ctx.fillStyle = 'white';
    // Establecer la fuente para el texto
     ctx.font = '24px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(fichas).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(fichas, x, y);
  }
  
}

function pintarPuchero(canvas,fichas,num){
  var ctx = canvas.getContext('2d');
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  for (var i = 0; i < fichas; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i / fichas) * 35 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i / fichas) * 35 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
      if (i < num ) ctx.fillStyle = 'red'
         else ctx.fillStyle = 'black'
      ctx.fill();
    
     ctx.fillStyle = 'white';
    // Establecer la fuente para el texto
     ctx.font = '24px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(7).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(7, x, y);
  }
  
}

// pintamos fichas aleatorias en el tablero
/*for(let i=0; i < canvases.length; i++){
  let fichas = Math.ceil(Math.random()*(i+2));
   if (i>4) pintarCasilla(canvases[i],i+3,fichas)
  else pintarCasilla(canvases[i],i+2,fichas)

  console.log(i+" "+(i+2)+ " "+fichas);
}*/

//pintarCasilla(canvases[2], 4, 2); // pinta dos fichas en el 4
//pintarCasilla(canvases[8], 11, 5); // pinta 5 fichas en el 11
//pintarCasilla(canvases[6], 9, 3); // pinta 3 fichas en el 9
var arrayJugadores=[];

function jugadores(){
    var jugadores, parrafo;
    jugadores=parseInt(prompt("¿Cuantos jugadores sois?"));
    switch(jugadores){
        case 2:
            //var Jugador_1 =new Jugadores(30);
            //var jugador_2 = new Jugadores(30);
            arrayJugadores=["Jugador 1","Jugador 2"];
            var fichasJ1=30, fichasJ2=30;
            parrafo=document.getElementById("jugadores").innerHTML=arrayJugadores[0];
            parrafo=document.getElementById("fichasJ1").innerHTML="Fichas que tiene el jugador 1: "+fichasJ1;
            parrafo=document.getElementById("jugadores2").innerHTML=arrayJugadores[1];
            parrafo=document.getElementById("fichasJ2").innerHTML="Fichas que tiene el jugador 2: "+fichasJ2;
            break;
        case 3:
            arrayJugadores=["Jugador 1","Jugador 2","Jugador 3"];
            var fichasJ1=20, fichasJ2=20, fichasJ3=20;
            parrafo=document.getElementById("jugadores").innerHTML=arrayJugadores[0];
            parrafo=document.getElementById("jugadores2").innerHTML=arrayJugadores[1];
            parrafo=document.getElementById("jugadores3").innerHTML=arrayJugadores[2];
            parrafo=document.getElementById("fichasJ1").innerHTML="Fichas que tiene el jugador 1: "+fichasJ1;
            parrafo=document.getElementById("fichasJ2").innerHTML="Fichas que tiene el jugador 2: "+fichasJ2;
            parrafo=document.getElementById("fichasJ3").innerHTML="Fichas que tiene el jugador 3: "+fichasJ3;
        
            break;
        case 4:
            var fichasJ1=15, fichasJ2=15, fichasJ3=15, fichasJ4=15;
            arrayJugadores=["Jugador 1","Jugador 2","Jugador 3","Jugador 4"];
            parrafo=document.getElementById("jugadores").innerHTML=arrayJugadores[0];
            parrafo=document.getElementById("jugadores2").innerHTML=arrayJugadores[1];
            parrafo=document.getElementById("jugadores3").innerHTML=arrayJugadores[2];
            parrafo=document.getElementById("jugadores4").innerHTML=arrayJugadores[3];
            parrafo=document.getElementById("fichasJ1").innerHTML="Fichas que tiene el jugador 1: "+fichasJ1;
            parrafo=document.getElementById("fichasJ2").innerHTML="Fichas que tiene el jugador 2: "+fichasJ2;
            parrafo=document.getElementById("fichasJ3").innerHTML="Fichas que tiene el jugador 3: "+fichasJ3;
            parrafo=document.getElementById("fichasJ4").innerHTML="Fichas que tiene el jugador 4: "+fichasJ4;
        
            break;
        case 5:
            var fichasJ1=12, fichasJ2=12, fichasJ3=12, fichasJ4=12, fichasJ5=12;
            arrayJugadores=["Jugador 1","Jugador 2","Jugador 3","Jugador 4","Jugador 5"];
            parrafo=document.getElementById("jugadores").innerHTML=arrayJugadores[0];
            parrafo=document.getElementById("jugadores2").innerHTML=arrayJugadores[1];
            parrafo=document.getElementById("jugadores3").innerHTML=arrayJugadores[2];
            parrafo=document.getElementById("jugadores4").innerHTML=arrayJugadores[3];
            parrafo=document.getElementById("jugadores5").innerHTML=arrayJugadores[4];
            parrafo=document.getElementById("fichasJ1").innerHTML="Fichas que tiene el jugador 1: "+fichasJ1;
            parrafo=document.getElementById("fichasJ2").innerHTML="Fichas que tiene el jugador 2: "+fichasJ2;
            parrafo=document.getElementById("fichasJ3").innerHTML="Fichas que tiene el jugador 3: "+fichasJ3;
            parrafo=document.getElementById("fichasJ4").innerHTML="Fichas que tiene el jugador 4: "+fichasJ4;
            parrafo=document.getElementById("fichasJ5").innerHTML="Fichas que tiene el jugador 5: "+fichasJ5;
        
            break;
        case 6:
            var fichasJ1=10, fichasJ2=10, fichasJ3=10, fichasJ4=10, fichasJ5=10, fichasJ6=10;
            arrayJugadores=["Jugador 1","Jugador 2","Jugador 3","Jugador 4","Jugador 5","Jugador 6"];
            parrafo=document.getElementById("jugadores").innerHTML=arrayJugadores[0];
            parrafo=document.getElementById("jugadores2").innerHTML=arrayJugadores[1];
            parrafo=document.getElementById("jugadores3").innerHTML=arrayJugadores[2];
            parrafo=document.getElementById("jugadores4").innerHTML=arrayJugadores[3];
            parrafo=document.getElementById("jugadores5").innerHTML=arrayJugadores[4];
            parrafo=document.getElementById("jugadores6").innerHTML=arrayJugadores[5];
            parrafo=document.getElementById("fichasJ1").innerHTML="Fichas que tiene el jugador 1: "+fichasJ1;
            parrafo=document.getElementById("fichasJ2").innerHTML="Fichas que tiene el jugador 2: "+fichasJ2;
            parrafo=document.getElementById("fichasJ3").innerHTML="Fichas que tiene el jugador 3: "+fichasJ3;
            parrafo=document.getElementById("fichasJ4").innerHTML="Fichas que tiene el jugador 4: "+fichasJ4;
            parrafo=document.getElementById("fichasJ5").innerHTML="Fichas que tiene el jugador 5: "+fichasJ5;
            parrafo=document.getElementById("fichasJ6").innerHTML="Fichas que tiene el jugador 6: "+fichasJ6;
        
            break;                                        
    } 
}
var casilla2= [];
var casilla3= [];
var casilla4= [];
var casilla5= [];
var casilla6= [];
var casilla8= [];
var casilla7= [];
var casilla9= [];
var casilla10= [];
var casilla11= [];
var i=0,j=0,l=0,x=0,z=0,a=0,c=0,f=0,q=0,a=0,turno=1,mostrarTurno,movimientos=1,mostrarMovimientos;
function Tirada(){
    var dado1,dado2,suma, max=6, min=1;
    dado1=Math.floor(Math.random()*(max - min) + min);
    dado2=Math.floor(Math.random()*(max - min) + min);
    //dado1=6;
    //dado2=6;
    suma=dado1+dado2;
    //alert(suma);
    switch(suma){
        case 2:
            casilla2.push("Ficha");
            if(i<=casilla2.length){
                pintarCasilla(canvases[suma-2],suma,i+1);
                i++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno;
                }
            }
           if(casilla2.length==3){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al jugador "+turno);
                pintarCasilla(canvases[suma-2],suma,0);
                i=0;
                casilla2.length=0;
            }
            break;
        case 3:
            casilla3.push("Ficha");
            if(j<=casilla3.length){
                pintarCasilla(canvases[suma-2],suma,j+1);
                j++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            }
           if(casilla3.length==4){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al jugador "+turno);
                pintarCasilla(canvases[suma-2],suma,0);
                j=0;
                casilla3.length=0;
           }
            break;
        case 4:
            casilla4.push("Ficha");
            if(l<=casilla4.length){
                pintarCasilla(canvases[suma-2],suma,l+1);
                l++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            }
           if(casilla4.length==5){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al jugador "+turno);
                pintarCasilla(canvases[suma-2],suma,0);
                l=0;
                casilla4.length=0;
           }
            break;
        case 5:
            casilla5.push("Ficha");
            if(x<=casilla5.length){
                pintarCasilla(canvases[suma-2],suma,x+1);
                x++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            }
           if(casilla5.length==6){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al jugador "+turno);
                pintarCasilla(canvases[suma-2],suma,0);
                x=0;
                casilla5.length=0;
           }
            break;
        case 6:
            casilla6.push("Ficha");
            if(z<=casilla6.length){
                pintarCasilla(canvases[suma-2],suma,z+1);
                z++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            }
           if(casilla6.length==7){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al jugador "+turno);
                pintarCasilla(canvases[suma-2],suma,0);
                z=0;
                casilla6.length=0;
           }
            break;

        case 7:
            casilla7.push("Ficha");
            if(a<=casilla7.length){
                pintarPuchero(puchero,a+1,a+1);
                a++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            }
            break;

        case 8:
            casilla8.push("Ficha");
            if(c<=casilla8.length){
                pintarCasilla(canvases[suma-3],suma,c+1);
                c++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            }
           if(casilla8.length==9){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al jugador "+turno);
                pintarCasilla(canvases[suma-3],suma,0);
                c=0;
                casilla8.length=0;
           }
            break;

        case 9:
            casilla9.push("Ficha");
            if(a<=casilla9.length){
                pintarCasilla(canvases[suma-3],suma,a+1);
                a++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            }
           if(casilla9.length==10){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al jugador "+turno);
                pintarCasilla(canvases[suma-3],suma,0);
                a=0;
                casilla9.length=0;
           }
            break;

        case 10:
            casilla10.push("Ficha");
            if(f<=casilla10.length){
                pintarCasilla(canvases[suma-3],suma,f+1);
                a++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            }
           if(casilla10.length==11){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al jugador "+turno);
                pintarCasilla(canvases[suma-3],suma,0);
                f=0;
                casilla10.length=0;
           }
            break;

        case 11:
            casilla11.push("Ficha");
            if(q<=casilla11.length){
                pintarCasilla(canvases[suma-3],suma,q+1);
                q++;
                mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            }
           if(casilla11.length==11){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al jugador "+turno);
                pintarCasilla(canvases[suma-3],suma,0);
                q=0;
                casilla11.length=0;
           }
            break;

        case 12:
            alert("Se borraran las fichas del puchero y se entregaran todas las fichas al jugador"+turno);
            var fichasaentregar=casilla7.length+casilla2.length+casilla3.length+casilla4.length+casilla5.length+casilla6.length+casilla8.length+casilla9.length+casilla10.length+casilla11.length;
            alert(fichasaentregar);
            pintarPuchero(puchero,7,0);
            casilla7.length=0;
            pintarCasilla(canvases[0],2,0);
            pintarCasilla(canvases[1],3,0);
            pintarCasilla(canvases[2],4,0);
            pintarCasilla(canvases[3],5,0);
            pintarCasilla(canvases[4],6,0);
            pintarCasilla(canvases[5],8,0);
            pintarCasilla(canvases[6],9,0);
            pintarCasilla(canvases[7],10,0);
            pintarCasilla(canvases[8],11,0);
            casilla2.length=0;
            casilla3.length=0;
            casilla4.length=0;
            casilla5.length=0;
            casilla6.length=0;
            casilla8.length=0;
            casilla9.length=0;
            casilla10.length=0;
            casilla11.length=0;
            mostrarMovimientos=document.getElementById("movimientos").innerHTML="Movimientos totales de la partida: "+movimientos++; 
                if(turno==arrayJugadores.length){
                    turno=1;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }else{
                    turno++;
                    mostrarTurno=document.getElementById("turno").innerHTML="Turno del jugador "+turno; 
                }
            break;
    }
}
