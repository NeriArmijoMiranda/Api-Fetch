
 const getPersonas = ( url ) =>{
    console.log("inicia mi fetch");
    
    
    fetch( url )
        .then( (resolve)=> resolve.json() ) 
        .then( (data)=> {            
        const users= data.data;            
            const tableBody = document.querySelector('#user-table tbody');
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${user.id}</td>
              <td>${user.first_name}</td>
              <td>${user.last_name}</td>
              <td>${user.email}</td>
              <td><img src="${user.avatar}" alt="Avatar de ${user.first_name}" width="50"></td>
            `;
            tableBody.appendChild(row);  
        }); 
        hidePreloader() 
        } )           
        .catch( (error)=> console.log(error)  );
    console.log("Termina mi fetch");
};

const url = 'https://reqres.in/api/users?delay=3';
getPersonas(url); 

const preloader = document.getElementById('preloader');

function showPreloader() {
    preloader.style.display = 'flex'; 
}

function hidePreloader() {
    preloader.style.display = 'none'; 
}