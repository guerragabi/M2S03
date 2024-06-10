function iniciar() {
    const nome = window.prompt("Informe o seu nome:")

    if (!nome) {
        alert('Nenhum nome foi informado.')
        return
    } else {
        const confirmacao = window.confirm("Deseja continuar?")
        
        if (confirmacao == true) {
            alert(`Olá, ${nome}!`)
            return
        } if (confirmacao == false) {
            alert('Ação encerrada.')
            return
        } 
    } 
}