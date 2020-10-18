import React, { useState, useEffect } from "react";
import slugify from "slugify";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Button, GlobalStyle } from '../utils/styles';

import { loadBreweries } from "../store/actions/breweries";

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
			<GlobalStyle />
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")} >
							<Button type="button" onClick={() => setSortBy('name')}>
								Name
              </Button >
						</th>
						<th onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")} >
							<Button type="button" onClick={() => setSortBy("type")}>
								Brewery Type
              </Button>
						</th>
						<th>Street</th>
						<th>City</th>
						<th onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")} >
							<Button type="button" onClick={() => setSortBy("state")}>
								State
              </Button></th>
						<th>Postal Code</th>
						<th>Country</th>
						<th>Longtitude</th>
						<th>Latitude</th>
						<th>Phone</th>
						<th>Website Url</th>
						<th>Updated At</th>
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
							<td>
								{brewery.street}
							</td>
							<td>
								{brewery.city}
							</td>
							<td>
								{brewery.state}
							</td>
							<td>
								{brewery.postal_code}
							</td>
							<td>
								{brewery.country}
							</td>
							<td>
								{brewery.longitude}
							</td>
							<td>
								{brewery.latitude}
							</td>
							<td>
								{brewery.phone}
							</td>
							<td>
								{brewery.website_url}
							</td>
							<td>
								{brewery.updated_at}
							</td>
						</tr>


					))}
				</tbody>
			</table>
		</div>
	)
};