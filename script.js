const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    document.querySelector(".my-image").style.display = "none";
    document.querySelector(".alerta").style.display = "none";
    document.querySelector(".solicitud").style.display = "none"; // Oculta la imagen con la clase "my-image"
}

function validarTexto() {
  const input = document.getElementById("myInput");
  const regex = /^[a-z\s]*$/;

  if (!regex.test(input.value)) {
    alert("No se permiten números, mayúsculas o caracteres especiales.");
  }
}




function encriptar(StringEncriptada) {
  const regex = /^[a-z\s]*$/;

  if (!regex.test(StringEncriptada)) {
    console.log("El texto contiene caracteres no permitidos.");
    return "";
  }

  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  StringEncriptada = StringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (StringEncriptada.includes(matrizCodigo[i][0])) {
      StringEncriptada = StringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return StringEncriptada;
}



    
function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
  
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(mensaje.value)
        .then(() => {
          console.log("Texto copiado al portapapeles");
        })
        .catch((error) => {
          console.error("Error al copiar el texto: ", error);
        });
    } else {
      console.warn("El API Clipboard no está disponible en este navegador.");
    }
  }

  

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    

        }
    return stringDesencriptada

}
