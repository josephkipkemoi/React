import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';

export default function PokemonCharacterStat({ stats }) {
    
    const PokemonStats = () => {
      return stats.map(({base_stat, effort, stat: {name}},key) => {
             return (
             <React.Fragment key={name+key}>
                 <div className="text-center m-2 d-flex flex-column">
                    <small>{name}</small>                    
                    <div style={{  width: 100, height: 100  }}>
                    <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: `rgba(62, 152, 199, ${base_stat / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                    text={`${base_stat}%`} 
                    value={base_stat} 
                    maxValue={100}
                    />
                    </div>
                    <small>Effort: {effort}</small>
                 </div>              
             </React.Fragment>
             )
        })
    }
    return (
        <>
           <Link to="/Pokemon/Stats"><h4>Stats</h4></Link> 
          <div className="d-flex flex-wrap">
            <PokemonStats/>
          </div>
        
        </>
    )
}

PokemonCharacterStat.propTypes = {
    stats: PropTypes.array.isRequired
}