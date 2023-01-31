import React from 'react'

function BeerItem({beer, setSelectedBeer, compareBeers, setCompareBeers}) {

  function handleSelectBeerFromList(e){
    const id = e.target.id;
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
    .then((res) => {
      return res.json()
    }).then((data) => {
      setSelectedBeer(data[0])
    })
  }

  function handleAddCompareBeers(beer){
    setCompareBeers((currentCompareBeers) => {
        return [...currentCompareBeers, beer]
    })
  }

  return (
    <div className='beer-item'>
      
      <button className='compare-button' onClick={() => {handleAddCompareBeers(beer)}}>Add</button>
      <li onClick={(e) => {handleSelectBeerFromList(e)}} id={beer.id} key={beer.id}>{beer.name}</li>
    </div> 
  )
}

export default BeerItem