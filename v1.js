function fetchData(){
    fetch("https://reqres.in/api/users?delay=3")
    .then(response =>{
        // console.log(response);
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data.data)
        const html= data.data.map(user=>{
            return `
            <br>
            <div class="container text-center">
            <div class="row">
                <div class="user col-6 offset-md-3 text-center">
                    <p><img src="${user.avatar}" alt="${user.first_name}" class="borders"></p>
                    <p>Id: ${user.id}</p>
                    <p>Name: ${user.first_name}</p>
                    <p>Last Name: ${user.last_name}</p>
                    <p>Email: ${user.email}</p>
                </div>
            </div>
            `
        }).join("");
        console.log(html);
        // localStorage.setItem('clave',JSON.stringify(html));
        // document.querySelector('#app').innerHTML='<p>prueba</p>'
        document.querySelector('#app').insertAdjacentHTML("afterbegin",html);
       
    }).catch(error=>{
        console.log(error)
    }).finally( ()=>{
        btn(); // Aparece el botón
    });
}    
function btn() {
    const container = document.getElementById("contBtn")
}

function usersToLocalStorage(data) {
    const users = {
        usersData: [...data],
        time: Date.now() + 10000
    }
    localStorage.setItem("userData", JSON.stringify(users)); //To convert object to JSON: JSON.stringify(object)
}

function readUser() {
    const user = JSON.parse(localStorage.getItem("userData"));
    user && user.time > Date.now() ?
        displayUsers(user.usersData) :
        fetchData();
        
}


            // <div class="user">
            // <p><img src="${user.avatar}" alt="${user.first_name}"></p>
            // <p>Name: ${user.id}</p>
            // <p>Name: ${user.first_name}</p>
            // <p>Name: ${user.last_name}</p>
            // <p>Email: ${user.email}</p>
            // </div>