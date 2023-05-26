function saludo() {
    var nombre = prompt ("Por favor, ingresa tu nombre");
  
    while (!nombre) {
      nombre = prompt("Por favor, ingresa tu nombre");
    }
  
    alert("¡Bienvenido, " + nombre + "!");
  }
  
  saludo();