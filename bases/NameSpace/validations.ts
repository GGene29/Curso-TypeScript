// Por debajo lo que esto hace es definir que si no hace nada, si no trae nada por defecto le ddara un valor vacío, evitando errores en el javascript

namespace Validations {
    
    // const validateText = ( text : string ) : boolean => {
// El export llama a las cosas a las que podamos acceder desde fuera del namespace
    export const validateText = ( text : string ) : boolean => {    
        return ( text.length > 3) ? true : false;
    }

    const validateDate = ( myDate : Date ) : boolean => {
        // in not a number 
        return ( isNaN(myDate.valueOf() ))
            ? false
            : true;
    }

}

// undefined si se trata como función da error
// console.log(Validations.validateText('aqu'));

// 
console.log(Validations.validateText('aqui'));
