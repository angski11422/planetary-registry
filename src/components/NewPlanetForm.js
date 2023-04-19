import React, { useState } from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({ onAddNewPlanet }) {
    const [formData, setFormData] =useState({
        name: "",
        climate: "",
        terrain: "",
        population: "",
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit() {
        const newPlanet = {
            id: uuid(),
            name: formData.name,
            climate: formData.climate,
            terrain: formData.terrain,
            population: formData.population,
        }

        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newPlanet)
        })
        .then((resp) => resp.json())
        .then(onAddNewPlanet)
    }

    return(
        <form onSubmit={handleSubmit} >
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="climate" placeholder="Climate" value={formData.climate} onChange={handleChange}/>
            <input type="text" name="terrain" placeholder="Terrain" value={formData.terrain} onChange={handleChange}/>
            <input type="text" name="population" placeholder="Population" value={formData.population} onChange={handleChange}/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;