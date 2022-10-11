// rpalaol@ausiasmarch.net

const IDs = [];
const Names = [];
const Usernames = [];
const Emails = [];
const Addresses = [];
const Phones = [];
const Webs = [];
const Companies = [];
const arrays = [IDs, Names, Usernames, Emails, Addresses, Phones, Webs, Companies];

const tabla = document.querySelector("#userData");
const btn = document.querySelector("#boton");
btn.addEventListener("click", getData);

async function getData() {

    const consulta = await fetch("https://jsonplaceholder.typicode.com/users/");
    const jsonData = await consulta.json();

    //Cargar los datos del Json en cada array correspondiente
    for ( x of jsonData) {
        IDs.push(x.id);
        Names.push(x.name);
        Usernames.push(x.username);
        Emails.push(x.email);
        Addresses.push(x.address.street + " " + x.address.suite);
        Phones.push(x.phone);
        Webs.push(x.website);
        Companies.push(x.company.name)
    }

    /* Bucle para mostrar los datos de cada array en la consola
    for(i in IDs) {
        console.log("----------------")
        console.log(IDs[i]);
        console.log(Names[i]);
        console.log(Usernames[i]);
        console.log(Emails[i]);
        console.log(Addresses[i]);
        console.log(Phones[i]);
        console.log(Webs[i]);
        console.log(Companies[i]);        
    } */

    // por cada dato del array de IDs añade una fila
    // dentro de la fila, añade una celda para cada dato a añadir (ID, Nombre, dirección, etc)
    // y lo rellena con los datos recorriendo la matriz
    for(i in IDs) {

        let newRow = tabla.insertRow();
        for (let j = 0; j < arrays.length; j++) {
            let cells = newRow.insertCell();
            cells.innerHTML = arrays[j][i];
        }
    }
}




