/** @format */

import React from "react";
import { useState } from "react";
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";
import LocationList from "./LocationList";
import ReactPaginate from "react-paginate";

export const Main = () => {
	const [page, setPage] = useState(1);
	let index = 1;

	return (
		<div>
			<button
				className="mx-10 bg-slate-200 p-1 hover:bg-slate-300"
				onClick={() => setPage(page - 1)}
			>
				Previous
			</button>
			<button
				className="bg-slate-200 p-1 hover:bg-slate-300"
				onClick={() => setPage(page + 1)}
			>
				Next
			</button>
			<CharacterList page={page} />
			<EpisodeList page={page} />
			<LocationList page={page} />
		</div>
	);
};

export default Main;
