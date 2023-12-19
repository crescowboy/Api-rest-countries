const banderas = document.getElementById("banderas");
const div = document.getElementById("borders");
const itemDiv = document.getElementById("item-div");
//const borderContries = document.getElementById("borderContries");
const query = new URLSearchParams(window.location.search);
const params = query.get("name");
console.log(params);
const borderCountries = document.getElementById("border-countries");
const fragment = document.createDocumentFragment();
//const template = document.querySelector("#template").content


document.addEventListener("DOMContentLoaded", e =>{
    fetchData();
});


const fetchData = async () => {
    try {
        const response = await fetch("api.json");
        const data = await response.json();

        const filtroData = data.filter(item => item.name.common === params);
        //lenguajes(data);
        banderillas(filtroData);
        
        
    } catch (error) {
        console.log(error);
    }
}





const banderillas = data =>{
    let elementos = "";
    
    
    data.forEach(item => {
        console.log(item.borders)
        const nativeName = Object.entries(item.name.nativeName);
        const Lenguages = Object.entries(item.languages);
        const currencies = Object.entries(item.currencies);
        //console.log(nativeName[0][1].official);
        console.log(Lenguages[0][1])
        console.log(currencies[0][1].name);
          
          
           
           elementos += `
           <article class="detalle">
                   <img src="${item.flags.png}" alt="" class="">
                   <div class="detalle-content">
                       <div>
                       <h3>${item.name.common}</h3>
                       <p>
                           <b>Native Name: </b>
                           ${nativeName[0][1].common}
                       </p>
                       <p>
                           <b>Population: </b>
                           ${item.population}
                       </p>
                       <p>
                           <b>Capital: </b>
                           ${item.capital}
                       </p>
                       <p>
                           <b>Region: </b>
                           ${item.region}
                       </p>
                       <p>
                           <b>Sub Region: </b>
                           ${item.subregion}
                       </p>
                       
                       </div>
                       <div class="my-t">
                       <p>
                           <b>Top Level Domain: </b>
                           ${item.tld}
                       </p>
                       <p>
                           <b>Currencies: </b>
                           ${currencies[0][1].name}
                       </p>
                       <p>
                           <b>Lenguages: </b>
                           ${Lenguages[0][1]}
                       </p>
                       </div>
                       
                   </div>
               </article>
           `
        

        
        // Forma para pintar todos los items con forEach
        // if(item.borders){
        //     item.borders.forEach(item =>{
        //         div.innerHTML += `<p class="btn-c">${item}</p>`
        //     })
        // }else{
        //     div.innerHTML = "";
        // }
        

        if(item.borders && item.borders.length <= 2){
            item.borders.forEach(item =>{
                itemDiv.innerHTML += `<div class="item-div"><p class="btn-c">${item}</p></div>`
            })
            return;
        }if(item.borders && item.borders.length > 2){
            for(let i = 0; i < 3; i++){
                itemDiv.innerHTML += `<div class="item-div"><p class="btn-c">${item.borders[i]}</p></div>`
            }
        }else{
            itemDiv.innerHTML = "";
        }

        
        
        
    });
    banderas.innerHTML = elementos;
    
    
    
    
    
    
}










// const banderillas = data =>{
//     let elementos = "";
//     data.forEach(item => {
//         elementos += `
//         <article class="card">
//                 <img src="${item.flags.png}" alt="" class="img-fluid">
//                 <div class="card-content">
//                     <h3>${item.name.common}</h3>
//                     <p>
//                         <b>Population: </b>
//                         ${item.population}
//                     </p>
//                     <p>
//                         <b>Capital: </b>
//                         ${item.capital}
//                     </p>
//                     <p>
//                         <b>Region: </b>
//                         ${item.region}
//                     </p>
//                 </div>
//             </article>
//         `
//     });

//     banderas.innerHTML = elementos;
// }