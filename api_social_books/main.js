const livroId = document.querySelector('input[type=text]');
const btnBuscar = document.querySelector('input[type=button]');

btnBuscar.onclick = function(){
    //Conexão com a api
    fetch(`http://localhost:8080/livros/${livroId.value}`)
    .then(response => {
        if(response.ok){

            return response.json()
        }
        else {
            throw new Error("Bad requisition.")
        }
    })
    .then(data => {
        document.querySelector('#id').textContent = data.id;
        document.querySelector('#nome').textContent = data.nome;
        document.querySelector('#resumo').textContent = data.resumo;
        document.querySelector('#autor').textContent = data.autor;
        document.querySelector('#editora').textContent = data.editora;
        //E outros atributos
    })
    .catch(error => {
        console.log('Error: '+ error);
    })
}