// Pegando add-time e verificando quando vai ter um click, quando tiver chama a funcion
document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField(){
    //Fazendo a copia do meu .schedule-item, e colocando na variavel newFieldContainer
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //Fazendo limpeza antes adicionar clone
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        // Para cada valor de fields, deixa-lo como empty
        field.value = ""
    })

    //Adicionado o meu newFieldContainer dentro do meu #schedule-items
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
