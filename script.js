
function sendOrder() {
    alert("Sikeresen elkukldte a rendelést!");
  }

function sendTable() {
    alert("Sikeresen foglalt asztalt!");
  }
//Backend
async function OrderCard(){
    let items = await getData("foods");
    let row = document.createElement("div");
    row.className = "row";
    console.log(items)
    items.forEach(element => {
        let div = document.createElement("div");
        div.className = "col-12 col-md-4";
        div.innerHTML +=`       
            <div class="card w-100">
                <img src="${element.pic}" class="card-img-top w-100" alt="Not Found">
                <div class="card-body">
                    <h2 class="card-title">${element.foodName}</h2>
                    <p class="card-text"><b>Ár:</b> ${element.prize}</p>
                    <p class="card-text"><b>Leírás:</b> ${element.description}</p>                
                </div>
            </div>
    
    `;
    let btn = document.createElement("button");
    btn.textContent = "Kosárba"
    btn.className = "kosarBtn";
    btn.addEventListener("click",console.log("ok"));
    div.append(btn);
    row.append(div);

    
    });


document.querySelector('#orderCard').append(row);   
}

async function getData(resource)
{         const response = await fetch('http://localhost:3000/'+resource);        
return response.json();   
}