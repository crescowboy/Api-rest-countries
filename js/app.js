const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", e =>{
    fetchData();
});


const fetchData = async () => {
    try {
        const response = await fetch("api.json");
        const data = await response.json();
        console.log(data);
        banderillas(data);
        formularioCliente(data);
        filtros(data);
        
    } catch (error) {
        console.log(error);
    }
}

const banderillas = data =>{
    let elementos = "";
    data.forEach(item => {
        elementos += `
        <article class="card">
                <img src="${item.flags.png}" alt="" class="img-fluid">
                <div class="card-content">
                    <h3>${item.name.common}</h3>
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
                    <p class="mas-info-p">
                        <a href="pais.html?name=${item.name.common}" class="mas-info">Mas info</a>
                    </p>
                </div>
            </article>
        `
    });

    banderas.innerHTML = elementos;
}