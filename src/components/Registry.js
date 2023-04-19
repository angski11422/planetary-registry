import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:8085/planets")
        .then((resp) => resp.json())
        .then((data) => setPlanets(data))
    }, []);

    function addNewPlanet(newPlanet) {
        const updatedPlanets = [...planets, newPlanet]
        setPlanets(updatedPlanets)
    }

    const planetsToDisplay = planets.filter((planet) => {
        return planet.name.toLowerCase().includes(search.toLowerCase())
    })
    
    return(
        <div className="registry">
            <Search search={search} onSearch={setSearch}/>
            <div className="content">
                <PlanetList planets={planetsToDisplay} />
                <NewPlanetForm onAddNewPlanet={addNewPlanet}/>
            </div>
        </div>
    )
}

export default Registry;