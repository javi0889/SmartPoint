
    // Guarda en qué slide está cada carrusel
    var posicion = {
      carrusel1: 0,
      carrusel2: 0,
      carrusel3: 0
    };
 
    // Crea los puntos debajo de cada carrusel al cargar la página
    function crearPuntos(idCarrusel) {
      var carrusel = document.getElementById(idCarrusel);
      var slides = carrusel.querySelectorAll('.slide');
      var contenedorPuntos = document.getElementById('puntos-' + idCarrusel);
 
      for (var i = 0; i < slides.length; i++) {
        var punto = document.createElement('span');
        punto.className = 'punto';
        if (i === 0) punto.className += ' activo';
 
        // Al hacer clic en un punto va directo a ese slide
        punto.setAttribute('data-carrusel', idCarrusel);
        punto.setAttribute('data-indice', i);
        punto.onclick = function() {
          irA(this.getAttribute('data-carrusel'), parseInt(this.getAttribute('data-indice')));
        };
 
        contenedorPuntos.appendChild(punto);
      }
    }
 
    // Va a un slide específico por número
    function irA(idCarrusel, indice) {
      var carrusel = document.getElementById(idCarrusel);
      var slides = carrusel.querySelectorAll('.slide');
      var total = slides.length;
 
      // Si se pasa del último vuelve al primero, y viceversa
      if (indice >= total) indice = 0;
      if (indice < 0) indice = total - 1;
 
      posicion[idCarrusel] = indice;
 
      // Mueve el carrusel
      carrusel.style.transform = 'translateX(-' + (indice * 100) + '%)';
 
      // Actualiza los puntos
      var puntos = document.querySelectorAll('#puntos-' + idCarrusel + ' .punto');
      for (var i = 0; i < puntos.length; i++) {
        puntos[i].className = 'punto';
        if (i === indice) puntos[i].className += ' activo';
      }
    }
 
    // Avanza o retrocede un slide (-1 o +1)
    function moverCarrusel(idCarrusel, direccion) {
      irA(idCarrusel, posicion[idCarrusel] + direccion);
    }
 
    // Autoplay: cambia de slide cada 4 segundos
    function autoplay() {
      moverCarrusel('carrusel1', 1);
      moverCarrusel('carrusel2', 1);
      moverCarrusel('carrusel3', 1);
    }
 
    // Iniciar
    crearPuntos('carrusel1');
    crearPuntos('carrusel2');
    crearPuntos('carrusel3');
    setInterval(autoplay, 4000);
 
 
 