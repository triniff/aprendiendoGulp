/*Dependencias*/
var gulp = require('gulp'); //se llama las dependencias que instalamos
var	concat = require('gulp-concat'); //se llama las dependencias que instalamos
var	uglify = require('gulp-uglify'); //se llama las dependencias que instalamos

/*Configuración de la tarea 'walter'*/
gulp.task('walter', function(){ //la funcion se puede llamar de cualquier forma
	gulp.src('assets/js/*.js') //buscar la ruta de los archivos que quiero tomar (* = para traer todos los archivos con la extencion js)
	.pipe(concat('todo.js')) //Traera todos los archvios y los va a juntar creando un archivo con ese nombre
	.pipe(uglify()) //minifica el archivo en una linea
	.pipe(gulp.dest('js/build/')) //el destino de donde se creara el archivo
});