
export default function storageAvailable(type) {

    let storage;

    try {
        
        storage = window[type];

        let x = '__storage_test__';

        storage.setItem(x, x);
        storage.removeItem(x);

        return true;

    } catch (e) {
        return e instanceof DOMException && (
            // everything excpet Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 || 

            e.name === 'QuotaExceededError' || 

            e.name === 'NS_ERROR_DOM_QUOTA_REACHED'

        ) &&

        // acknowledge QuotaExceededError only if there is something already stored
        (storage && storage.length !== 0)
    }
}

/*
    Usage 

    if (storageAvailable('localStorage')) {
        localstorage availble 
    } else {
        localstoragge not availble 
    }
*/