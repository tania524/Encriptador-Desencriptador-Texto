document.getElementById('encryptButton').addEventListener('click', encriptar);
document.getElementById('decryptButton').addEventListener('click', desencriptar);
document.getElementById('copyButton').addEventListener('click', copiar);

function encriptar() {
    if (validarTexto()) {
        let text = document.getElementById('inputText').value;
        let encryptedText = text.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
        document.getElementById('outputText').value = encryptedText;
    }
}

function desencriptar() {
    if (validarTexto()) {
        let text = document.getElementById('inputText').value;
        let decryptedText = text.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
        document.getElementById('outputText').value = decryptedText;
    }
}

function copiar() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Texto copiado: ' + outputText.value);
}

function validarTexto() {
    let text = document.getElementById('inputText').value;
    let regex = /^[a-z\s]*$/;
    if (!regex.test(text)) {
        alert('Solo se permiten palabras en minúsculas y sin acentos.');
        return false;
    }
    return true;
}