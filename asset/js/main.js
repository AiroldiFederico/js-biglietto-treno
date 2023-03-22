






function getUserInput() {

    // kilometers
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    const prckm = 0.21;

    document.getElementById('priceresult').innerHTML = prckm * km ;

    console.log(km, age)

}