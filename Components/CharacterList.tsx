/** @format */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useGetCharactersQuery } from "../services/apiSlice";

const CharacterCard = ({ content }) => {
	return (
		<div>
			<p>{content.name}</p>
			<img src={content.image} />
		</div>
	);
};
function CharacterList(props) {
	const {
		data: characters,
		isLoading: isGetLoading,
		isSuccess: isGetSuccess,
		isError: isGetError,
		error: getError,
	} = useGetCharactersQuery(props.page);

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
			<h1 className=" flex m-auto text-xl font-bold md:text-2xl justify-center">All Characters</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 md: mx-12 lg:grid-cols-3 gap-2 md:gap-0 ">
				{isGetError
					? renderError
					: isGetLoading
					? renderLoading
					: isGetSuccess &&
					  characters.results.map((item: { id: React.Key }) => {
							return (
								<CharacterCard
									content={item}
									key={item.id}
								/>
							);
					  })}
			</div>
		</div>
	);
}
export default CharacterList;
