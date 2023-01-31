import React from 'react'
import BeerItem from './BeerItem';

function BeerSearchResults({searchBeers, setSelectedBeer, compareBeers, setCompareBeers}) {



  return (
    <ul className='beer-search-results'>
      {searchBeers.map((beer) => {
        return (
        <BeerItem key={beer.id} beer={beer} searchBeers={searchBeers} setSelectedBeer={setSelectedBeer} compareBeers={compareBeers} setCompareBeers={setCompareBeers}/>
        )
      })}
    </ul>
  )
}



export default BeerSearchResults