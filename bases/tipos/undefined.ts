
(() => {
    let nada = undefined;
    console.log(nada)

    // por defecto no lo permite
    // let active: boolean = undefined;

    let active : (boolean|undefined) = undefined;
    console.log({active})

    // activar el tipado en tsconfig.json
})()