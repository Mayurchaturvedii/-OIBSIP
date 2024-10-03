function convertFromCelsius() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    document.getElementById('fahrenheit').value = (celsius * 9/5) + 32;
    document.getElementById('kelvin').value = celsius + 273.15;
}

function convertFromFahrenheit() {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    document.getElementById('celsius').value = (fahrenheit - 32) * 5/9;
    document.getElementById('kelvin').value = ((fahrenheit - 32) * 5/9) + 273.15;
}

function convertFromKelvin() {
    let kelvin = parseFloat(document.getElementById('kelvin').value);
    document.getElementById('celsius').value = kelvin - 273.15;
    document.getElementById('fahrenheit').value = ((kelvin - 273.15) * 9/5) + 32;
}

function resetValue(){
    document.getElementById('celsius').value ='';
    document.getElementById('fahrenheit').value ='';
    document.getElementById('kelvin').value ='';
    // alert('working')
}