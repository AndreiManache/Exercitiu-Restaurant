
var rezultatLista;

async function getLista(){
    
    var responseLista  = await fetch("https://restaurant-menu-v1.firebaseio.com/.json");
    rezultatLista = await responseLista.json();

    draw();

}

function draw(){

    
    var str = "";
    var input = document.querySelector(".searchBar").value;

    for(var i in rezultatLista.menu){

        if(rezultatLista.menu[i].ingrediente.indexOf(input)>-1 || rezultatLista.menu[i].nume.indexOf(input)>-1){
            
            str+=`
            <tr>
                <td><img class="img" src="${rezultatLista.menu[i].imagine}"/></td>
                <td>
                <h2>${rezultatLista.menu[i].nume}</h2>
                <p>${rezultatLista.menu[i].ingrediente}</p>
                </td>
                <td><a href="detalii.html?idPreparat=${i}"><button class="detalii">Detalii</button></a></td>
            </tr>`
        }
        
    }

    document.querySelector("table tbody").innerHTML = str;

}





