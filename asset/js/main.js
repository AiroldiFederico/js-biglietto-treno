






function getUserInput() {

    // kilometers
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    const prckm = 0.21;

    document.getElementById('priceresult').innerHTML = prckm * km ;

    if (age < 18) {
        document.getElementById('priceresult').innerHTML = (prckm * km) * 0.8;
    } else if (age > 65) {
        document.getElementById('priceresult').innerHTML = (prckm * km) * 0.6;
    }

}



