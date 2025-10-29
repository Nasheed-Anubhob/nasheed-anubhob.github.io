async function moistureLevel() {
    let val = await fetch("https://blynk.cloud/external/api/get?token=z9g96IMubb00VljZORcXKtdwJyr3NiPS&v5")

   return val.json()
}


async function main() {
    let a = await moistureLevel()
    return a
}






const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
}

setInterval(() => {
    main().then((v) => {
    let gv = v/100

  setGaugeValue(gaugeElement, gv);

let x = 79

if (v > 79) {
  document.getElementsByClassName("good-bad")[0].innerHTML = "Overwatered"
} else if (v > 30) {
  document.getElementsByClassName("good-bad")[0].innerHTML = "Perfect"
}else {
  document.getElementsByClassName("good-bad")[0].innerHTML = "Underwatered"
}

})



}, 1000);

