import React, { useState, useEffect } from "react";
import slugify from "slugify";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { GlobalStyle } from '../utils/styles'

import { loadBreweries } from "../store/actions/breweries"

export default () => {

	const breweries = useSelector(state => state.breweries)
	const dispatch = useDispatch()

	const [sortBy, setSortBy] = useState("name")
	const [sortDirection, setSortDirection] = useState("asc")

	useEffect(() => {
		dispatch(loadBreweries(sortBy, sortDirection))
	}, [sortBy, sortDirection])

	return (


		<div className="Breweries">
			<h1>Breweries</h1>
			<p onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}> {sortDirection}</p>
			<p onClick={() => setSortBy("name")}>Name</p>
			<p onClick={() => setSortBy("type")}>Type</p>
			<p onClick={() => setSortBy("state")}>State</p>
			<GlobalStyle />
				<table>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Brewery Type</th>
						</tr>
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
				</table>
		</div>
	)
};