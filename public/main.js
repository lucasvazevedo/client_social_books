const githubId = document.querySelector('input[type=text]')
const btnBuscar = documen.querySelector('input{type=button}')

btnBuscar.onclick = function(){
    //Conexão com a api
    fetch('https://api.github.com/users/' + githubId.value)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else {
            throw new Error("Bad requisition.")
        }
    })
    .then(data => {
        document.querySelector('#name').textContent = data.name
        document.querySelector('#bio').textContent = data.bio
        document.querySelector('#followers').textContent = data.followers
        document.querySelector('#location').textContent = data.location
        document.querySelector('#avatar').src = data.avatar_url
        //E outros atributos
    })
    .catch(error => {
        console.log('Error: '+ error)
    })
}