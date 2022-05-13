import React, { useState, useEffect } from "react";
import './PokemonBody.css';
import { Link } from "react-router-dom";
import { useGetPaginatedPokemonCharactersQuery } from "../../../../Services/Hooks/PokemonHook";
import { Button, Spinner } from "react-bootstrap";
 
export default function PokemonCharacters() {
    const offsetCount = !localStorage.getItem('offset_count') ? 0 : Number(localStorage.getItem('offset_count'));

    const [offset, setOffset] = useState(offsetCount);

    const [charData, setCharData] = useState([]);

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

    useEffect(() => {
        getData() 
        
    
       
    }, [])
  
  
 

    const { data, error, isLoading } = useGetPaginatedPokemonCharactersQuery({ offset, limit: 40 });

    if(error) {
        const { data } = error;

        return <div className="alert alert-danger">{data}</div>
    }

    if(isLoading) {
        return <Spinner animation="grow"></Spinner>
    }

    const { results, previous, next} = data;

    const getNext = () => {
        setOffset(prevState => prevState + 40);
    }

    const getPrevious = () => {
        setOffset(prevState => prevState - 40);
    }

    localStorage.setItem('offset_count', offset);
 
    return (
        <>
        <div className="row">
            
        {charData.chars?.map((data, key) =>  <Link key={key + data.name} to={"/Pokemon/Characters/" + data.name } className="text-decoration-none text-light col-2"><div className="m-3  p-2 char-name-box rounded bg-primary">{data.name}</div></Link> )}

        </div>
            <div className="row">
                {results.map(({name}, key) =>  <Link key={key + name} to={"/Pokemon/Characters/" + name } className="text-decoration-none text-light col-2"><div className="m-3  p-2 char-name-box rounded bg-primary">{name}</div></Link>)}
            </div>
            <div className="d-sm-flex justify-content-center">
                <Button disabled={!previous} onClick={() => getPrevious()}>Previous</Button>
                <Button disabled={!next} onClick={() => getNext()}>Next</Button>
            </div>
        </>   
    )
}