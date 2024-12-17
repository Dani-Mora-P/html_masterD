
const btnCierra = document.querySelector('#btn-cierra');
const btnRetrocede = document.querySelector('#btn-retrocede');
const btnAdelanta = document.querySelector('#btn-adelanta');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

//abrir imagen activa
const abreLightbox = (e) =>{
    imagenActiva.src = e.target.src;
   lightbox.style.display= 'flex';
   indiceImagen = Array.from(imagenes).indexOf(e.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
});
/// funcion para cerrar imagen
btnCierra.addEventListener('click', () => {
    lightbox.style.display = 'none';
    })
//funcion adelantar imagen
const adelantaImagen = () => {
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);
//funcion retroceder imagen
const retrocedeImagen = () => {
    imagenActiva.src = imagenes[indiceImagen -1].src;
    indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocedeImagen);