$(document).ready(function () {
    let estaRotado = false; // Variable para controlar el estado de rotación
    let colaRotada = false; // Variable para controlar el estado de rotación
    $(".btn").click(function () {
        if (!estaRotado) {
            $(".brazos2 img").animate({ rotate: '60deg' }, 600); // Rotación brazo 2
            $(".brazos1 img").animate({ rotate: '-60deg' }, 600); // Rotación brazo 1 (asumiendo que quieres que gire en sentido contrario)
            estaRotado = true; 
        } else {
            $(".brazos2 img").animate({ rotate: '0deg' }, 600); // Vuelta a posición inicial brazo 2
            $(".brazos1 img").animate({ rotate: '0deg' }, 600); // Vuelta a posición inicial brazo 1
            estaRotado = false; 
        }
        if (!colaRotada) {
            $(".cola img").animate({ rotate: '4deg' }, 2000, 'linear'); 
            colaRotada = true;
        } else {
            $(".cola img").animate({ rotate: '0deg' }, 2000, 'linear'); 
            colaRotada = false;
        }
        $(".ojos1 img, .ojos2 img").toggleClass("ojosAnimados"); //para que se active la animación de los ojos
    });
});
$(".pikachu").animate({ 
    rotate: '360deg', 
    scale: 1.1, 
    translateX: '20px' 
  }, 1000);

  