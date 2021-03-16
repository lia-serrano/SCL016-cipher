const cipher = {
  //encode cifra el mensaje
  encode: (text, number) => {
    //variable que contiene el texto final cifrado
    let ciphertext = "";
    //for:para recorrer el texto la cantidad de veces que sea necesario
    //let i:es la posicion de la letra parte de 0
    //text.length:indica que i es menor
    //i++:por cada vuelta agrega un 1
    for (let i = 0; i < text.length; i++) {
      //se obtiene el valor ascii de cada letra
      let letra = text.charCodeAt(i);
      //cifra mayusculas y obtiene el nuevo valor de cada letra
      if (letra >= 65 && letra <= 90) {
        ciphertext = ciphertext + String.fromCharCode((letra - 65 + parseInt(number)) % 26 + 65);

      }
      // cifra minusculas y obtiene el nuevo valor de cada letra
      else if (letra >= 97 && letra <= 122) {
        ciphertext = ciphertext + String.fromCharCode((letra - 97 + parseInt(number)) % 26 + 97);
      }
      // cifra numeros y simbolos y obtiene el nuevo valor de cada letra
      else if (letra >= 48 && letra <= 57) {
        ciphertext = ciphertext + String.fromCharCode((letra - 48 + parseInt(number)) % 10 + 48);
      }
    } return ciphertext;
  },
  //decoce decifra el mensaje
  decode: (text, number) => {
    //variable que contiene el texto final decifrado
    let ciphertext2 = "";
    //for:para recorrer el texto la cantidad de veces que sea necesario
    //let i:es la posicion de la letra parte de 0
    //text.length:indica que i es menor
    //i++:por cada vuelta agrega un 1
    for (let i = 0; i < text.length; i++) {
      //se obtiene el valor ascii de cada letra
      let letra = text.charCodeAt(i);
      //decifra mayusculas y obtiene el nuevo valor de cada letra
      if (letra >= 65 && letra <= 90) {
        ciphertext2 = ciphertext2 + String.fromCharCode((letra - 65 - parseInt(number)) % 26 + 65);

      }
      // decifra minusculas  y obtiene el nuevo valor de cada letra
      else if (letra >= 97 && letra <= 122) {
        ciphertext2 = ciphertext2 + String.fromCharCode((letra - 97 - parseInt(number)) % 26 + 97);
      }
      // decifra numeros y simbolos y obtiene el nuevo valor de cada letra
      else if (letra >= 48 && letra <= 57) {
        ciphertext2 = ciphertext2 + String.fromCharCode((letra - 48 - parseInt(number)) % 10 + 48);
      }

    } return ciphertext2;
  },
};

export default cipher;
