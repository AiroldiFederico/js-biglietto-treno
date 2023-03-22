



function getUserInput() {
    let nome = document.getElementById('name').value;
    let cognome = document.getElementById('lstname').value;  
    let colore = document.getElementById('color').value;

    document.getElementById('pwd').innerHTML = nome + cognome + colore + '21';
}