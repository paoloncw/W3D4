let usciti = [];

const tabellone = document.querySelector("#tabellone");
const ultimoNumero = document.querySelector("#ultimo-numero");
const cronologia = document.querySelector("#cronologia");
const bottoneEstrai = document.querySelector("#estrai");
const bottoneReset = document.querySelector("#reset");

function rendiTabellone() {

  tabellone.innerHTML = "";

  for (let i = 1; i <= 90; i++) {
    const casella = document.createElement("div");
    casella.classList.add("numero");
    casella.textContent = i;

    if (usciti.includes(i)) {
      casella.classList.add("uscito");
    }

    tabellone.appendChild(casella);
  }
}

function estrai() {

  const disponibili = [];
  for (let i = 1; i <= 90; i++) {
    if (!usciti.includes(i)) {
      disponibili.push(i);
    }
  }

  if (disponibili.length === 0) {
    alert("Tutti i numeri sono usciti!");
    return;
  }

  const posizione = Math.floor(Math.random() * disponibili.length);

  const numero = disponibili[posizione];

  usciti.push(numero);

  ultimoNumero.textContent = numero;

  rendiTabellone();
  rendiCronologia();
}

function rendiCronologia() {

  if (usciti.length === 0) {
    cronologia.textContent = "Nessun numero estratto.";
    return;
  }

  const ultimi10 = usciti.slice(-10).reverse();

  cronologia.textContent = ultimi10.join(", ");
}

bottoneEstrai.addEventListener("click", estrai);

bottoneReset.addEventListener("click", function () {
  usciti = [];
  ultimoNumero.textContent = "-";
  rendiTabellone();
  rendiCronologia();
});

rendiTabellone();
