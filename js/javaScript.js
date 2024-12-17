
////////Función para cargar archivo externo(JSON)

document.addEventListener('DOMContentLoaded', function(){ 
    fetch('../views/noticias.json') 
    .then(response => response.json()) 
    .then(data => { const noticiasDiv = document.getElementById('noticias'); 
    data.forEach(noticia => { 
    const noticiaElement = document.createElement('div'); 
    noticiaElement.innerHTML = `<h4>${noticia.titulo}</h4><p>${noticia.contenido}</p>`; 
    noticiasDiv.appendChild(noticiaElement); }); }) 
    .catch(error => console.error('Error al cargar las noticias:', error));
})