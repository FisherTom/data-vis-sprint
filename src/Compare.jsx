import React from 'react'

function Compare({compareBeers, setSelectedBeer}) {

  function handleSelectCompareBeer(e){
    
    const id = e.target.id;
    console.log(e);
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
    .then((res) => {
      return res.json()
    }).then((data) => {
      setSelectedBeer(data[0])
    })
  }

  return (
    <ul className='compare-list'>
    {compareBeers.map((beer) => {
      console.log(beer.id);
      return (
        <li className='compare-item' key={beer.id} id={beer.id} onClick={(e)=> handleSelectCompareBeer(e)}>
          <h4 id={beer.id}>
            {beer.name}
          </h4>
          <img className='compare-img' id={beer.id} src={beer.image_url}/>
         </li>
      )
        })}
    </ul>
  )
}

export default Compare