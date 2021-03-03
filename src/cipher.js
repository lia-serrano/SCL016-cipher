const cipher = {
  //encode cifra el mensaje
  encode: (text, number) => {
    //variable que contiene el texto final cifrado
    let ciphertext = "";

    for (let i = 0; i < text.length; i++) {

      let letra = text.charCodeAt(i);
      //cifra mayusculas
      if (letra >= 65 && letra <= 90) {
        ciphertext = ciphertext + String.fromCharCode((letra - 65 + parseInt(number)) % 26 + 65);

      }
      // cifra minusculas
      else if (letra >= 97 && letra <= 122) {
        ciphertext = ciphertext + String.fromCharCode((letra - 97 + parseInt(number)) % 26 + 97);
      }
      // cifra numeros y simbolos
      else if (letra >= 32 && letra <= 64) {
        ciphertext = ciphertext + String.fromCharCode((letra - 32 + parseInt(number)) % 33 + 32);
      }
      //cifra Ñ y ñ y acentos
      //else if (letra >= 160 && letra <= 165) {
      // ciphertext = ciphertext + String.fromCharCode((letra - 160 + parseInt(number)) % 6 + 160);
      //}

    } return ciphertext;
  },
  //decoce decifra el mensaje
  decode: (text, number) => {
    //variable que contiene el texto final decifrado
    let ciphertext2 = "";

    for (let i = 0; i < text.length; i++) {

      let letra = text.charCodeAt(i);
      //decifra mayusculas
      if (letra >= 65 && letra <= 90) {
        ciphertext2 = ciphertext2 + String.fromCharCode((letra - 65 + parseInt(number)) % 26 + 65);

      }
      // decifra minusculas
      else if (letra >= 97 && letra <= 122) {
        ciphertext2 = ciphertext2 + String.fromCharCode((letra - 97 + parseInt(number)) % 26 + 97);
      }
      // decifra numeros y simbolos
      else if (letra >= 32 && letra <= 64) {
        ciphertext2 = ciphertext2 + String.fromCharCode((letra - 32 + parseInt(number)) % 33 + 32);
      }

    } return ciphertext2;
  },
};

export default cipher;
