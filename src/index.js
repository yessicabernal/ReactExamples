import heroes, { owners } from './data/heroes';

const nombre = 'Uriel';
let apellido = 'Cuatepitzi';
console.log(`nombre: ${nombre} ${apellido}`)

const arreglo = [1, 2, 3, 4];

const arregloDos = [...arreglo, 5, 6];

console.log(arreglo, arregloDos);

const getUsuarioActivo = (nombre) => (
    {
        uid: `qwerty123`,
        username: nombre,
    }
);

const usuarioActivo = getUsuarioActivo(`Uriel`);
console.log(usuarioActivo);

const persona = {
    nombre: `Tony`,
    edad: 45,
    clave: `Ironman`,
    rango: `Soldado`
};

// const nombreClave = `Capitan America`;
const obtenerAvenger = ({ clave, edad }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.4532,
            lng: 44.4442,
        }
    }
};

const { nombreClave: nombreAvenger, anios, latlng: { lat, lng } } = obtenerAvenger(persona);
console.log(anios, lat, lng, nombreAvenger);

const estado = (valor) => [valor, () => console.log(`Hola Mundo perro`)];

const [nombreValor, setNombre] = estado(`Goku`);
console.log(nombreValor);
setNombre();

console.log(heroes);

export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

console.log(getHeroesByOwner('DC'))

console.log(owners)

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        console.log(heroe)
    }, 2000)
});

promesa.then(() => {
    console.log("Then de la promesa")
})

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe === undefined ? reject('No se pudo encontra un heroe') : resolve(heroe);
        }, 2000)
    });

}

getHeroeByIdAsync(2).then(console.log).catch(console.warn)

const apiKey = 'VSYOIp0mw5NZi5SorEmM7Hei6i7gECk2'
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.downsized_medium;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn)

const getImagen = async () => {
    try {
        const apiKey = 'VSYOIp0mw5NZi5SorEmM7Hei6i7gECk2'
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const { url } = data.images.downsized_medium;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
};
getImagen();