const getData = () => {
       
    const openRequest = indexedDB.open('PokemonDb',1)
    
    openRequest.onerror = function(event) {
        console.log('Database Error',  event.target.errorCode)
    }
   
    openRequest.onupgradeneeded = function(event) {
        console.log('upgrade needed');

        let db = event.target.result;

       switch(openRequest.result.version) {
           case 1: 
            if(!db.objectStoreNames.contains('pokemon_characters')) {
                const pokemon_characters = db.createObjectStore('pokemon_characters', { keyPath: 'name' });
                pokemon_characters.createIndex('pokemon_characters', 'name', { unique: true })
                }
            break;
             
       }

    }

    
    openRequest.onsuccess = function (event) {
        let db = event.target.result;
        
        db.onversionchange = function() {
            db.close();
            alert('Database is outdated, please reload page')
        }


        const getDbTranscationData = db.transaction('pokemon_characters', 'readonly');
        const indexDbStore =  getDbTranscationData.objectStore('pokemon_characters');
       
        const resultsData = indexDbStore.getAll();
        
        resultsData.onsuccess = function(e) {
             const chars = e.target.result;
             setCharData(prev => ({ ...prev, chars }))
        }
    
     }
}
