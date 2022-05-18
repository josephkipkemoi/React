
export default function IndexDbTest() {
       /*
        Beware that implementations that use a prefix may be buggy, or incomplete, or 
        following an old version of the specification. Therefore, it is not recommended 
        to use it in production code. It may be preferable to not support a browser than
        to claim to support it and fail:
    */

    // Prefixes of implementations tested
    const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.IDBTransaction || window.webkitIDBTransaction || 
                            window.msIDBTransaction ||  {READ_WRITE: "readwrite"};

    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if( !indexedDB ) {
        console.log('Your browser does not support IndexDB, Features .... will not be available')
    }

}

