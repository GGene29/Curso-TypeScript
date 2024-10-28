"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Unico;
    (function (Unico) {
        Unico[Unico["minimo"] = 0] = "minimo";
        Unico[Unico["medio"] = 1] = "medio";
        Unico[Unico["fuerte"] = 5] = "fuerte";
        Unico[Unico["superfuerte"] = 100] = "superfuerte";
    })(Unico || (Unico = {}));
    const fuerzaFlash = Unico.minimo;
    const fuerzaSuperman = Unico.superfuerte;
    const fuerzaBatman = Unico.medio;
    const fuerzaAcuaman = Unico.fuerte;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    function pedir_ayud(value) {
        console.log('Auxilio!!!');
        throw new Error(value);
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=Aapractica.js.map