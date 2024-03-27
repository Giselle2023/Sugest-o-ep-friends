const url = "src/scripts/index.json";

function carregar(){
    fetch(url).then(response => response.json())
    .then(data =>{
        const container = document.querySelector('.container');
        const paragrafo = document.querySelector('#ep');
        const resumo = document.querySelector('#resumo');

        const aleatorizar = Math.floor(Math.random() * data.length)
        
        
        paragrafo.innerHTML = data[aleatorizar].nome
        resumo.innerHTML = data[aleatorizar].resumo
        resumo.classList.add('resumo')

    })
}



document.querySelector('button').addEventListener('click',()=>{
    carregar()
})