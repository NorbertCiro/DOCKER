const { syncDB } = require("../../tasks/asyn-db")


describe('Pruebas en Sync-DB', () =>{
    test('Debe de ejecutar el proceso 2 veces', () => {

        syncDB();
        const times = syncDB();
        times

        expect( times ).toBe( 2 );
    });
});