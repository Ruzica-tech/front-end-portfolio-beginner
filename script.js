function inflationCalculator() {
    let inflationRate = document.querySelector("#inflationRate");
    let money = document.querySelector("#money");
    let years = document.querySelector("#years");

    // Parsiraj vrednosti u brojeve
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value); // Ovde je nedostajalo `.value`

    // Formula za izračunavanje inflacije za prvu godinu
    let worth = money + (money * inflationRate / 100);

    // Petlja za izračunavanje inflacije za svaku narednu godinu
    for (let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }

    // Zaokruži na dve decimale
    worth = worth.toFixed(2);

    // Kreiraj novi element sa rezultatom
    let newElement = document.createElement("div");
    newElement.className = "new-value";
    
    // Koristi `backticks` za interpolaciju promenljivih
    newElement.innerText = `Današnjih ${money}€ će vrijediti isto kao ${worth}€ za ${years} godina.`;

    // Dodaj novi element u DOM
    document.querySelector(".container").appendChild(newElement);
}

/*function inflationCalculator() {
    let inflationRate = document.querySelector("#inflationRate");
    let money = document.querySelector("#money");
    let years= document.querySelector("#years");

inflationRate = parseFloat(inflationRate.value);
money = parseFloat(money.value);
years = parseFloat(years);

//Formula za izracunavanje inflacije za prvu godinu

let worth = (money + (money * inflationRate/100));

for (let i = 1; i < years; i++);

{worth += worth + (worth*(inflationRate/100))};

worth = worth.toFixed(2);

let newElement = document.createElement("div");
newElement.className = "new-value";
newElement.innerText = "Današnjih ${money}€ će vrijediti isto kao ${worth}€ za ${years} godina.";

document.querySelector(".container").appendChild(newElement);

}*/