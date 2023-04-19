import React from "react"
import Planet from "./Planet"

function PlanetList({planets}) {
    const planetsList = planets.map((planet) => (
        <Planet key={planet.id} planet={planet} />
    ))
    
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetsList}
            </tbody>
        </table>
    );
}

export default PlanetList;