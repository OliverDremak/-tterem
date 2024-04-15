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
    alert("Sikeresen elkukldte a rendelést!");
  }

function sendTable() {
    alert("Sikeresen foglalt asztalt!");
  }
//Backend
async function OrderCard(){
    let items = await getData("foods");
    let row = "";
    console.log(items)
    items.forEach(element => {

        row += `
        <div class="col-12 col-md-4">
            <div class="card w-100">
                <img src="${element.pic}" class="card-img-top w-100" alt="Not Found">
                <div class="card-body">
                    <h2 class="card-title">${element.foodName}</h2>
                    <p class="card-text"><b>Ár:</b> ${element.prize}</p>
                    <p class="card-text"><b>Leírás:</b> ${element.description}</p>                   
                </div>
            </div>
        </div>        
    `;
     
    
    });
document.querySelector('#orderCard').innerHTML += row;   
}

async function getData(resource)
{         const response = await fetch('http://localhost:3000/'+resource);        
return response.json();   
}