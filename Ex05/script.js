document.addEventListener('DOMContentLoaded', () => {
    const inputTarefa = document.getElementById('input-lista')
    const btnAddTarefa = document.getElementById('criar-tarefa')
    const listaTarefas = document.getElementById('lista')
    
    function criarTarefa() {
        const novaTarefa = inputTarefa.value
        if (novaTarefa === '') {
            alert("Digite uma tarefa")
            return
        }

        const itemLista = document.createElement('li')
        itemLista.className = 'item-lista'

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        const label = document.createElement('label')
        label.textContent = novaTarefa


        checkbox.addEventListener('change', () => {
            label.classList.toggle('done', checkbox.checked)
        })

        itemLista.appendChild(checkbox)
        itemLista.appendChild(label)

        listaTarefas.appendChild(itemLista)
        inputTarefa.value = ''
        inputTarefa.focus()
    }

    btnAddTarefa.addEventListener('click', criarTarefa)

    inputTarefa.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            criarTarefa()
        }
    })
})