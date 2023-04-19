//Desafio regras bellow

/* deve ter o caractere @, deve ter pelomenos um . (ponto), não deve ter mais que 2 .(pontos) não pode ter, o ponto não pode ser junto do @
não pode usar regx*/

// model -> joao@smb.com

// primario -> (@ .)
// secundario -> (.@ @. @@ ..)

// resolver -> .@  / @.



const frm = document.querySelector("form")
const calcular = document.getElementById("calcular")
const res = document.getElementById("res")

frm.addEventListener("submit", (e)  =>  {
   
    var atribuidor = frm.email.value
    var verificadorarroba = atribuidor.indexOf("@")
    var verificadorponto = atribuidor.indexOf('.')

    if  (verificadorarroba > 1 && verificadorponto > 1)  {          // > >
    res.innerHTML = `Está correto`
    }

    else if (verificadorarroba < 1 && verificadorponto < 1) {       // < <
    res.innerHTML = `Está incorreto`    
    }

    else if (verificadorarroba < 1 && verificadorponto > 1) {       // < >
    res.innerHTML = `Está incorreto`    
    }

    else if (verificadorarroba > 1 && verificadorponto < 1) {       // > <
    res.innerHTML = `Está incorreto`    
    }

    e.preventDefault()
})
