//Cim mezo kikapcsol
const checkbox = document.getElementById('ettermiAtvet');
const addressInput = document.getElementById('AddressInput');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        addressInput.disabled = true;
    } else {
        addressInput.disabled = false;
    }
});

function sendOrder() {
    alert("Sikeresen elkukldte a rendelést");
  }

//Backend