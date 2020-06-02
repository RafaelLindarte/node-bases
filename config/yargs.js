const opts = {
	base: {
		demand: true,
		alias: 'b'		
		},
	limite:{
		default: 10,
		alias: 'l'			
		}
}

const argv = require('yargs')
		.command('listar','imprime en consola la tabla de multiplicar',opts)
		.command('crear','crea un archivo .txt donde guarda la tabla de multiplicar',opts)
		.help()		
		.argv;


module.exports = {
	argv
	
}
