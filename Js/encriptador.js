function encriptarTexto() {
    const textoInput = document.getElementById("texto-input").value;
    const resultado = encriptar(textoInput);
    document.getElementById("resultado").value = resultado;
  }
  
  function desencriptarTexto() {
    const textoInput = document.getElementById("texto-input").value;
    const resultado = desencriptar(textoInput);
    document.getElementById("resultado").value = resultado;
  }
  
  function encriptar(texto) {
    let resultado = texto.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");
    return resultado;
  }
  
  function desencriptar(texto) {
    let resultado = texto.replace(/enter/g, "e")
                        .replace(/imes/g, "i")
                        .replace(/ai/g, "a")
                        .replace(/ober/g, "o")
                        .replace(/ufat/g, "u");
    return resultado;
  }

    // Función para agregar la clase CSS y activar la animación
    function animateHeader() {
        const header = document.getElementById('header');
        header.classList.add('moving-letters');
      }
  
      // Llamar a la función de animación al cargar la página
      window.onload = animateHeader;

      function copiarTexto() {
        const resultado = document.getElementById("resultado");
        resultado.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
      }
  