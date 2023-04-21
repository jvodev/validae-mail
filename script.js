//Desafio regras bellow

/* deve ter o caractere @, deve ter pelomenos um . (ponto), não deve ter mais que 2 .(pontos) não pode ter, o ponto não pode ser junto do @
não pode usar regx*/

// model -> joao@smb.com

// primario -> (@ .)
// secundario -> (.@ @. @@ ..)

const frm = document.querySelector("form")
const calcular = document.getElementById("calcular")
const res = document.getElementById("res")

frm.addEventListener("submit", (e)  =>  {
   
    const textArroba = frm.email.value
                                 
    const pegaArroba = textArroba.indexOf("@")                                              
    const pegaPonto = textArroba.indexOf(".") 

    const maiorQueArroba = textArroba.includes('@@')
    const maiorQuePonto = textArroba.includes('..')
    const arrobaPonto = textArroba.includes('@.')
    const arrobaPonto2 = textArroba.includes('.@')

//--------------------------------------------------------------------------------------------------------------------------------------------//

if  (pegaArroba >= 1 && pegaPonto >= 1 && maiorQueArroba === false && maiorQuePonto === false && arrobaPonto === false && arrobaPonto2 === false)    {
    res.innerText = `Parabéns o seu e-mail foi validado!`
}
    else    
        res.innerText = `E-mail Inválido.`

    e.preventDefault()
})
