import React, { useEffect, useState } from 'react'
import BeerSearch from './BeerSearch'
import Compare from './Compare'

import SelectedBeerInfo from './SelectedBeerInfo'

function BeerApp() {
    const [searchBeers, setSearchBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState({})
    const [compareBeers, setCompareBeers] = useState([])
    //

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/random')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setSelectedBeer(data[0])
        })
    }, [])

  return (
    <div className='beer-app'>
    <SelectedBeerInfo selectedBeer={selectedBeer}/>
    {compareBeers.length>0 ? <Compare setSelectedBeer={setSelectedBeer} compareBeers={compareBeers}/> : <div></div>}
    <BeerSearch searchBeers={searchBeers} setSearchBeers={setSearchBeers} selectedBeer={selectedBeer} setSelectedBeer={setSelectedBeer} compareBeers={compareBeers} setCompareBeers={setCompareBeers}/>
    </div>
  )
}

export default BeerApp