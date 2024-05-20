let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"
        iconeBarras.style.display = "none"

    } else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

const solicitarOrcamento = (event) => {
    let valorAssunto = document.getElementById("campo-assunto").value
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-mensagem").value

    let dadosForm = {
        assunto: valorAssunto,
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    fetch("http://localhost:3000/solicitacoes", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        document.querySelector("#contato form").reset()

        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        console.log(erro)
        alert("Erro na requisição")
    })

    event.preventDefault()
}
