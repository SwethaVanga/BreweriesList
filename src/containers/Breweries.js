import React from "react";
import slugify from "slugify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default () => {
    
    const breweries = useSelector(state => state.breweries)

    return (
        <div className="Breweries">
            <h1>Breweries</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Brewery Type</th>
                    </tr>
                </thead>
                <tbody>
                        {breweries.map(brewery => (
                            <tr>
                                <td>
                                    <Link to={slugify(brewery.name)}>
                                        {brewery.id}
                                    </Link>
                                </td>
                                <td>
                                    {brewery.name}
                                </td>
                                <td>
                                    {brewery.brewery_type}
                                </td>
                            </tr>
                            
                        ))}
                </tbody>
            </table>
        </div>
    )
};