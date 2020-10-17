import React from "react"
import slugify from "slugify";
import { useSelector } from "react-redux";

export default ({match: {params: {slug}}}) => {

    const breweries = useSelector(state => state.breweries)
    const found = breweries.find(brewery => slugify(brewery.name) === slug)

    if(!found){
        return (
            <div>Loading or Not Found</div>
        )
    }
    return (
        <div className="SingleBrewery">
            {found && found.name}
        </div>
    )
};