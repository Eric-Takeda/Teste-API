const entrada = document.getElementById("entrada")
const button = document.getElementById("button")
const display = document.getElementById("display")

const cotarAcao = async () => {
    const acao = entrada.value
    const dado = await fetch(`https://brapi.dev/api/quote/${acao}`)
    const dadosJson = await dado.json()
    const resultados = dadosJson.results[0]

    const nomeCompleto = resultados.longName

    console.log(nomeCompleto)

    display.innerText = nomeCompleto
}

button.addEventListener("click", cotarAcao)