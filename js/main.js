var numeroAlAzar;
var score = 0 ;

var imagenes = [
 "Ana.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nelly.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "Ruth-Lopez.jpg","Ruth-Vega.jpg",
 "Sandra-Bollo.jpg","Sandra-Diaz.jpg", 
 "Vianey.jpg", "Zazil.jpg"];
 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];

function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};
function desplegarNuevaJugada() {
  var tamanoArreglo = nombres.length;

  if (tamanoArreglo > 0) {
    numeroAlAzar = enteroRandomEnRango(0,tamanoArreglo)
    var imagen ='fotos/'+ imagenes[numeroAlAzar];
    $('#imagenPersona').attr('src',imagen); 
  }else{
    alert('BIEN!!!!');
  }
  
};
  
$(document).ready(function(){
    $('#btnRevisar').click(function(){
      //obtener nombre
      var nombre =$('#inputNombre').val();
      console.log('el usuario escribio' +  nombre);

      var nombreAAdivinar = nombres[numeroAlAzar];
      console.log('El nombre es: ' + nombreAAdivinar);
      if (nombre === nombreAAdivinar) {
        nombres.splice(numeroAlAzar,1);
        imagenes.splice(numeroAlAzar,1);
        console.log('score :');
        score =score + 5 ;
        $('#score').text(score);
        desplegarNuevaJugada();
      }else {
        nombreAAdivinar != nombres[numeroAlAzar];
        alert('Sigue Intentando!!!!')
      }
            
    });
    desplegarNuevaJugada();
});
