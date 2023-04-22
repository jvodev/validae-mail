const frm = document.querySelector("form")
const calcular = document.getElementById("calcular")
const res = document.getElementById("res")

frm.addEventListener("submit", (e)  =>  {
   
    const textArroba = frm.email.value
                                 
    const pegaArroba = textArroba.indexOf("@")                                              
    const pegaPonto = textArroba.indexOf(".") 
    const pegaPonto2 = textArroba.indexOf(".", pegaArroba) + 1
    const qtdArrobas = textArroba.split('@').length - 1;


    const maiorQueArroba = textArroba.includes('@@')
    const maiorQuePonto = textArroba.includes('..')
    const arrobaPonto = textArroba.includes('@.')
    const arrobaPonto2 = textArroba.includes('.@')

    if (pegaArroba >= 1 && pegaPonto >= 1 && pegaPonto2 > pegaArroba && maiorQueArroba === false && maiorQuePonto === false && arrobaPonto === false && arrobaPonto2 === false && pegaPonto2 > pegaArroba && qtdArrobas === 1 && ((textArroba.split(".").length - 1) <= 2)) {
        res.innerText = `Parabéns o seu e-mail foi validado!`
    } else {
        res.innerText = `E-mail Inválido.`
    }

    e.preventDefault()
})

//---------explicação abaixo -----------------------------------------------------------------------------------------------------------------------//

/* pegaArroba >= 1: verifica se há pelo menos um "@"
pegaPonto >= 1: verifica se há pelo menos um "."
pegaPonto2 > pegaArroba: verifica se há pelo menos um "." depois do "@"
maiorQueArroba === false: verifica se não há dois "@" consecutivos
maiorQuePonto === false: verifica se não há dois "." consecutivos
arrobaPonto === false: verifica se não há um "@" seguido de "."
arrobaPonto2 === false: verifica se não há um "." seguido de "@"
pegaPonto2 > pegaArroba: verifica se há no máximo dois "." após o "@" desde que haja pelo menos um ponto antes do "@";
qtdArrobas === 1: verifica se há apenas um "@"
((textArroba.split(".").length - 1) <= 2): verifica se há no máximo dois pontos após o "@" */
