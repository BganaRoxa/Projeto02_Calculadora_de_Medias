const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinimo = parseFloat(prompt("Digite a nota mínima:"))

//variável linhas fora do evento permite que os dados sejam adicionados e não substituídos
let linhas = ''


form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
}
)

function adicionaLinha() {
    //constantes para pegar o conteúdo digitado
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi lançada.`)
    } else {
        //Insere na array atividades as atividades realizadas
        atividades.push(inputNomeAtividade.value)

        //Insere na array notas as notas das atividades
        notas.push(parseFloat(inputNotaAtividade.value))

        //adiciona valores na linha conforme o que foi digitado na página
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinimo ? imgAprovado : imgReprovado}</td>`
        linha += '</td>'

        linhas += linha
        }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')

    //printa na tela
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinimo ? spanAprovado : spanReprovado
    
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    
    return somaDasNotas / notas.length
}
