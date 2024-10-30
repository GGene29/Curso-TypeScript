(()=>{

    // Las interfaces siguen siendo una estructura que cumplen los objetos

    interface Empresa {
        trabajadores : string,
        equipos : string,
        pagos : number,
        departamento : string
    }

    

    const ventas : Empresa = {
        trabajadores : "Personas",
        equipos : "Computadoras",
        pagos : 200,
        departamento : "Ventas"
    }

    let inventario : Empresa = {
        trabajadores : "Cargueros",
        equipos : "Productos",
        pagos : 250,
        departamento : "Inventario y Mercader"
    }

    // console.log(ventas, inventario);
    // Las interfaces no posee una representación en JavaScript

    // La diferenica entre los tipos, es que las interfaces pueden seguir expandiendose 






})()