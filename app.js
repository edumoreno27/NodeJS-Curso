const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
// let base = 7;


console.log(argv);
let comando = argv._[0];
let base = argv.base;
switch (comando) {
    case 'crear':
        crearArchivo(base, argv.limite).then(data => {
            console.log(`el archivo ${data} fue creado.`)
        });
        break;
    case 'listar':
        listarTabla(base, argv.limite);
        break;
    default:
        console.log('comando no reconocido');
        break;
}


// let parametro = argv[2];
// let base = parametro.split('=');S