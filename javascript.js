function saludo() {
    var nombre = prompt("Por favor, ingresa tu nombre");
    
    if (nombre) {
      alert("¡Bienvenid@, " + nombre + "!");
    } else {
      alert("Por favor, ingresa tu nombre.");
    }
    console.log ("Bienvenido " + nombre + "!");
  }
  
  saludo();