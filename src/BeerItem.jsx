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

  function handleCompareBeers(e){
    const checked = e.target.checked;
    setCompareBeers((currentCompareBeers) => {
      if(checked){
        return [...currentCompareBeers, beer]
      }else{
        return currentCompareBeers.filter(beerToRemove => beerToRemove !== beer);
      }
    })
  }

  return (
    <div className='beer-item'>
      <input type="checkbox" className='list-checkbox' onChange={(e)=>{handleCompareBeers(e)}}/>
      <li onClick={(e) => {handleSelectBeerFromList(e)}} id={beer.id} key={beer.id}>{beer.name}</li>
    </div> 
  )
}

export default BeerItem