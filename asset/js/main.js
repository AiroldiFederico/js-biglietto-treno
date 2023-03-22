






function getUserInput() {

    // kilometers
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    const prckm = 0.21;

    document.getElementById('priceresult').innerHTML = (prckm * km).toFixed(2);

    if (age < 18) {
        document.getElementById('priceresult').innerHTML = ((prckm * km) * 0.8).toFixed(2);
    } else if (age > 65) {
        document.getElementById('priceresult').innerHTML = ((prckm * km) * 0.6).toFixed(2);
    }

}



