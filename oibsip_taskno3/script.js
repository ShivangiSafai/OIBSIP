document.getElementById('convertBtn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let resultText = '';

    if (isNaN(temperature)) {  // condition if there exists any non-numerical input
        resultText = 'Please enter a valid number for the temperature.';
    } else {
        //here used switch case for a better switch between temp options
        switch(unit) {
            case 'Celsius':
                resultText = `${temperature}°C is ${(temperature * 9/5 + 32).toFixed(2)}°F or ${(temperature + 273.15).toFixed(2)}K`;
                break;
            case 'Fahrenheit':
                resultText = `${temperature}°F is ${((temperature - 32) * 5/9).toFixed(2)}°C or ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
                break;
            case 'Kelvin':
                resultText = `${temperature}K is ${(temperature - 273.15).toFixed(2)}°C or ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                break;
        }
    }

    document.getElementById('result').innerText = resultText;
});
