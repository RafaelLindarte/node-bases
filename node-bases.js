const argv = require('/home/rafael/curso-node/bases-node/config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('/home/rafael/curso-node/bases-node/multiplicar/multiplicar');

let comando = argv._[0];
switch( comando ){
	case 'listar':
		listarTabla(argv.base,argv.limite);
		break;
	case 'crear':
		crearArchivo(argv.base,argv.limite)
			.then(archivo => console.log('Archivo creado:', colors.brightCyan(archivo)))
			.catch(e => console.log(e.brightRed));		
		break;	
	default:
		console.log('Comando no reconocido'.brightYellow);
	
}
//console.log(argv);
/*
let argv2  = process.argv;
let parametro = argv[2];
console.log('Limite', argv.limite);
*/


//let base=parametro.split('=')[1];



