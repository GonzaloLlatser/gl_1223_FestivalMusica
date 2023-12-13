// Compilacion de hojas de estilos de SASS
const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    // Identificar el archivo SASS  
    src('src/scss/**/*.scss')
        //Con pipe lo compila con SASS
        .pipe(sass())// debo requerir sass = 
        // Con pipe luego lo almacena en disco duro
        .pipe(dest('build/css'));
    done(); // Callback que avisa a gulp cuando llega a la final de la funcion
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

//Llamado a la funcion
exports.css = css;
exports.dev = dev; // Para ejecutar por terminal (npx gulp dev) o (npm run dev)

function tarea(done) {
    console.log("Hola Gonza");
    done();
}
exports.tarea = tarea;