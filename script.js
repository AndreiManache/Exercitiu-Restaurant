async function getLista(){

    var responseLista  = await fetch("https://restaurant-menu-v1.firebaseio.com/.json");
    var rezultatLista = await responseLista.json();

    
    var str = "";

    for( var i in rezultatLista.menu){

        str+=`
            <tr>
                <td><img class="img" src="${rezultatLista.menu[i].imagine}"/></td>
                <td>
                <h2>${rezultatLista.menu[i].nume}</h2>
                <p>${rezultatLista.menu[i].ingrediente}</p>
                </td>
                <td><button class="detalii">DETALII</button></td>
            </tr>`
    }

    document.querySelector("table tbody").innerHTML = str;

}

async function x (){
    await getLista();
}