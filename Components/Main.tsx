/** @format */

import React from "react";
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";
import LocationList from "./LocationList";
import ReactPaginate from "react-paginate";
const handlePageClick = () => {
	console.log("clicked");
};
export const Main = () => {
	return (
		<div>
			<CharacterList />
			<EpisodeList />
			<LocationList />
			<ReactPaginate
				className="flex"
				previousLabel="<"
				pageCount={10}
				nextLabel=">"
				breakLabel={"..."}
				onPageChange={handlePageClick}
			/>
		</div>
	);
};

export default Main;
