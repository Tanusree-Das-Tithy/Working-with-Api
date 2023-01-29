/** @format */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useGetLocationsQuery } from "../services/apiSlice";

const LocationCard = ({ content }) => {
	return (
		<div>
			<p>{content.name}</p>
			<p>{content.type} </p>
		</div>
	);
};
function LocationList(props) {
	const {
		data: characters,
		isLoading: isGetLoading,
		isSuccess: isGetSuccess,
		isError: isGetError,
		error: getError,
	} = useGetLocationsQuery(props.page);

	const renderError = (
		<div
			className="alert alert-danger"
			role="alert"
		>
			{Boolean(getError)}
		</div>
	);
	const renderLoading = (
		<div className="d-flex justify-content-center">
			<div
				className="spinner-border"
				role="status"
			>
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
	let results;
	return (
		<div className="my-5">
			<h1 className=" flex m-auto text-xl font-bold md:text-2xl justify-center">All Locations</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 md: mx-12 lg:grid-cols-3 gap-2 md:gap-0 ">
				{isGetError
					? renderError
					: isGetLoading
					? renderLoading
					: isGetSuccess &&
					  characters.results.map((item: { id: React.Key }) => {
							return (
								<div>
									<LocationCard
										content={item}
										key={item.id}
									/>
								</div>
							);
					  })}
			</div>
		</div>
	);
}
export default LocationList;
