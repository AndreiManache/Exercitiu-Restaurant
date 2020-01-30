var preparat;

async function getPreparat(){
    var id=window.location.search.substr(12);
    var accessLista  = await fetch(`https://restaurant-menu-v1.firebaseio.com/menu/${id}.json`);
    preparat = await accessLista.json();

    draw();

}

function draw(){
    document.querySelector(".imagine").src = preparat.imagine;
    document.querySelector("h3").innerText = preparat.nume;
    document.querySelector("p").innerText = "Ingrediente: "+ preparat.ingrediente + "\n\n" + "Reteta: "+ preparat.reteta;

}

