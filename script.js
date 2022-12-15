let buttonR = document.querySelector('.b-remover')
let buttonB = document.querySelector('.b-buscar')
let buttonS = document.querySelector('.b-sair')
let buttonC = document.querySelector('.b-cadastro')  
let buttonM = document.querySelector('.b-mostrar')

class Objeto {
    constructor(){
        this.codigo = []
        this.data = []
        this.cpf = []
    }

    Cadastrar(inputC, inputD, inputCpf){
        this.codigo.push(inputC)
        this.data.push(inputD)
        this.cpf.push(inputCpf)

        console.log(`Codigo: ${this.codigo} data: ${this.data} cpf: ${this.cpf}`)

        localStorage.setItem('Codigo', JSON.stringify(this.codigo))
        localStorage.setItem('Data', JSON.stringify(this.data))
        localStorage.setItem('CPF', JSON.stringify(this.cpf))

        let ul = document.querySelector('.lista')
        let li = document.createElement('li')
        let localcodigo = JSON.parse(localStorage.getItem('Codigo'))

        this.localcod = inputC

        for(let i = 0; i < localcodigo.length; i++){
            // console.log(`Codigo ${i}: ` + JSON.stringify(localcodigo[i]))
            li.innerHTML = `Codigo: ` + JSON.stringify(localcodigo[i]).replace(/["]/g, '');
            li.id = this.localcod
            li.className = 'item'
            li.style.listStyleType = 'none'
            ul.appendChild(li)
        }
    }

    Mostrar(inputC){
        let box = document.querySelector('.box-mostrar')
        box.style.display = 'block'
    }

    Remover(removecod){
        let ul = document.getElementById('list')
        // let li = document.getElementsByClassName('item')
        let target = document.getElementById(removecod)

        let local = JSON.parse(localStorage.getItem('Codigo'))

        for(let i = 0; i < local.length; i++){
            if(removecod == local[i]){
                ul.removeChild(target)
                this.codigo.splice(i, 1)
                this.data.splice(i, 1)
                this.cpf.splice(i, 1)
                local.splice(i, 1)
                localStorage.setItem('Codigo', JSON.stringify(local))
                localStorage.setItem('Data', JSON.stringify(local))
                localStorage.setItem('CPF', JSON.stringify(local))
            }
        }
    }

    Buscar(inputB){
        let local = JSON.parse(localStorage.getItem('Codigo'))
        let locall = JSON.parse(localStorage.getItem('Codigo')).length
        let ItemBusca = document.getElementById('item-buscado')

        console.log(local, locall)


        if(locall != 0){
            for(let i = 0; i < local.length; i++){
                if(inputB == local[i]){
                    // return alert('Item encontrado')
                    return ItemBusca.innerHTML = ' Encontrado!'
                }
                if(inputB != local[i]) {
                    // alert('Item não encontrado')
                    ItemBusca.innerHTML = ' Não foi Encontrado!'
                }
            }
        }
        else{
            ItemBusca.innerHTML = ' Não foi Encontrado!'
        }
        
    }
}

// ID dos butoes
let ButaoCadastro = document.querySelector('#Bcad')
let ButaoRemove = document.querySelector('#Bre')
let ButaoBusca = document.querySelector('#Bbus')

// Area das funções

let p = new Objeto();

ButaoCadastro.addEventListener('click', function(){
    let inputC = document.querySelector('#codigo').value
    let inputD = document.querySelector('input[type="date"]').value
    let inputCpf = document.querySelector('#cpf').value

    p.Cadastrar(inputC, inputD, inputCpf)
})


buttonM.addEventListener('click', function(){
    let inputC = document.querySelector('#codigo').value
    p.Mostrar(inputC)
})

ButaoRemove.addEventListener('click', function(){
    let removecod = document.querySelector('#cod1').value
    p.Remover(removecod)
})

ButaoBusca.addEventListener('click', function(){
    let inputB = document.querySelector('#cod2').value
    p.Buscar(inputB)
})

// Eventos da Pagina

let BoxMostrar = document.querySelector('.box-mostrar')
let BoxCadastro = document.querySelector('.box-cadastro')
let BoxRemover = document.querySelector('.box-remover')
let BoxBuscar = document.querySelector('.box-busca')


buttonC.addEventListener('click', function(){   
    BoxCadastro.style.display = 'flex'
    BoxMostrar.style.display = 'none'
    BoxRemover.style.display = 'none'
    BoxBuscar.style.display = 'none'

})

buttonM.addEventListener('click', function(){
    BoxCadastro.style.display = 'none'
    BoxMostrar.style.display = 'flex'
    BoxRemover.style.display = 'none'
    BoxBuscar.style.display = 'none'
})

buttonR.addEventListener('click', function(){
    BoxCadastro.style.display = 'none'
    BoxMostrar.style.display = 'none'
    BoxRemover.style.display = 'block'
    BoxBuscar.style.display = 'none'
})

buttonB.addEventListener('click', function(){
    BoxCadastro.style.display = 'none'
    BoxMostrar.style.display = 'none'
    BoxRemover.style.display = 'none'
    BoxBuscar.style.display = 'block'
})

buttonS.addEventListener('click', function(){
    alert('Obrigado por usar o meu algoritmo, até a proxima!')
    close()
})