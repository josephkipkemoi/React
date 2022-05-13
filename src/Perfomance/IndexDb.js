import axios from 'axios';

let openRequest = indexedDB.open('PokemonDb', 1 );
 
const  checkStatus = ()  => {

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

    const pokemon_characters_data = [];

    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126')
    .then(({ data }) => pokemon_characters_data.push( data ))
    .catch(e => console.error(e.message))
    
    openRequest.onsuccess = function (event) {
        let db = event.target.result;
        
        db.onversionchange = function() {
            db.close();
            alert('Database is outdated, please reload page')
        }

        const dbTransaction = db.transaction(['pokemon_characters'], 'readwrite');
        const store = dbTransaction.objectStore('pokemon_characters');
       
        const [ { results } ]   = pokemon_characters_data;
    
        // store.add(results);
        if(dbTransaction.onerror) {
            console.error('Transaction Error')
        }

        if(dbTransaction.onabort) {
            console.warn('Transaction Aborted')
        }

        results.map((data) => store.add(data));

        const getDbTranscationData = db.transaction('pokemon_characters', 'readonly');
        const indexDbStore =  getDbTranscationData.objectStore('pokemon_characters');
       
     
        return indexDbStore;
     }



    openRequest.onblocked = function() {
        // this event shouldn't trigger if we handle onversionchange correctly

        // it means that there's another open connection to the same database
        // and it wasn't closed after db.onversionchange triggered for it
    }

  
 }


 

 export default checkStatus;
