// Importar dependencias
const express = require('express');//importar express
const hbs = require('hbs');//importar hbs
require('dotenv').config(); // Importar dotenv para las variables de entorno

// Inicializar express
const app = express();
const port = process.env.PORT || 8083;// Se iguala la variable puerto al archivo .env


// llamar a Handlebars hbs
app.set('view engine', 'hbs');

// Registrar los partials para hbs (archivos de código que se va a usar en todas las paginas)
hbs.registerPartials(__dirname + '/views/partials');

// llamar archivos estáticos
app.use(express.static('public'));

// Definir rutas principales aqui "/" es home.hbs
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Lady Castiblanco',
        titulo: 'Portafolio Profesional',
        email: 'correo electronico',
    });
});

// Definir ruta para sobre-mi
app.get('/sobre-mi', (req, res) => {
    res.render('sobre-mi', {
        nombre: 'Lady Castiblanco',
        titulo: 'Sobre Mi',
        email: 'correo electronico',
    });
});

// Definir ruta para proyectos
app.get('/proyectos', (req, res) => {
    res.render('proyectos', {
        nombre: 'Lady Castiblanco',
        titulo: 'Mis Proyectos',
        email: 'correo electronico'
    });
});

// Definir ruta para habilidades.hbs
app.get('/habilidades', (req, res) => {
    res.render('habilidades', {
        nombre: 'Lady Castiblanco',
        titulo: 'Habilidades y Destrezas',
        email: 'correo electronico'
    });
});

// Definir ruta para contacto.hbs
app.get('/contacto', (req, res) => {
    res.render('contacto', {
        nombre: 'Lady Castiblanco',
        titulo: 'Contacto',
        email: 'correo electronico'
    });
});

// Definir ruta para sugerencias.hbs
app.get('/sugerencias', (req, res) => {
    res.render('sugerencias', {
        nombre: 'Lady Castiblanco',
        titulo: 'sugerencias',
        email: 'correo electronico'
    });
});

// Manejar rutas no encontradas (404)
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Ejemplo de aplicación corriendo en: http://localhost:${port}`);
});


