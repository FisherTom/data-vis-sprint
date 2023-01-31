import React, { useEffect, useState } from 'react'
import BeerSearchResults from './BeerSearchResults';

function BeerSearch({searchBeers, setSearchBeers, selectedBeer, setSelectedBeer, compareBeers, setCompareBeers}) {

    const [searchBar, setSearchBar] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    function handleRandomBeer(){
        fetch('https://api.punkapi.com/v2/beers/random')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setSelectedBeer(data[0])
        })
    }

    function handleSearchQuery({value}){ 
        setSearchQuery(value)
    }

    function handleSearchBar({value}){
        setSearchBar(value)
    }

    useEffect(()=> {
        setSearchQuery("beer_name")
    },[])

    function handleSearch(e){
        fetch(`https://api.punkapi.com/v2/beers?${searchQuery}=${searchBar}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            
            setSearchBeers(data)
        })
        e.preventDefault()
    }

  return (
    <div className='beer-search'>
        <button className='random-button' onClick={() => {handleRandomBeer()}}>Get random Beer</button>
        <form className='search-form' onSubmit={(e)=> {handleSearch(e)}}>
            <label>search by :
                <select className='query-selector' onChange={(e) => {handleSearchQuery(e.target)}}>
                    <option value='beer_name'>Name</option>
                    <option value='hops'>Hops</option>
                    <option value ='malt'>Malt</option>
                    <option value ='food'>Food</option>
                </select>
            </label>
            <input value={searchBar} onChange={(e)=>{handleSearchBar(e.target)}}></input>
            <button>Search</button>
        </form>
        <BeerSearchResults searchBeers={searchBeers} setSelectedBeer={setSelectedBeer} compareBeers={compareBeers} setCompareBeers={setCompareBeers}/>
    </div>
  )
}

export default BeerSearch