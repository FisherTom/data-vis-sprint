import React from 'react';
import { v4 as uuid} from 'uuid';

function SelectedBeerInfo({selectedBeer}) {

  return (
  
  <div className='selected-beer-info'>
    <div className='overview'>

      <div className='overview-inner'>
        <h2 className='beer-name'>{selectedBeer.name}</h2>
        <h3 className='tag-line'>{selectedBeer.tagline}</h3>
        <h3 className=''>{selectedBeer.abv}% ABV</h3>
        <h3>{selectedBeer.ebc} EBC</h3>
        <div className={'ebc-icon '+'ebc-'+(selectedBeer.ebc >= 60 ? '60': selectedBeer.ebc)}></div>
      </div>

    </div>

    {selectedBeer.image_url === null ? <img/> :<img className='selected-beer-picture'src={selectedBeer.image_url} alt={`${selectedBeer.name} label art`}/>}

    {selectedBeer.id === undefined ? <h2>Loading</h2> :
    <div className='info-box'>
      <div className='ingridients-lists-box'>
        <section className='info-label' id='hop-list'>Hops 
          <ul className='ingredients-list'>
            {selectedBeer.ingredients.hops.map((hop) => {
              return <li key={uuid()} alt={hop.name}>{hop.name}</li>
            })}
          </ul>
        </section>
        <section className='info-label' id='malt-list'>Malts 
          <ul className='ingredients-list'>
            {selectedBeer.ingredients.malt.map((malt) => {
              return <li key={uuid()} alt=''>{malt.name}</li>
            })}
          </ul>
        </section>
      </div>
      <div className='pairings-box'>
        <section className='info-label' id='food-pairing-list'>Food pairings 
          <ul className='ingredients-list'>
            {selectedBeer.food_pairing.map((pairing) => {
              return <li key={uuid()} alt=''>{pairing}</li>
            })}
          </ul>
      </section >
    </div>
  </div>
    }

    </div>
 
  )
}

export default SelectedBeerInfo