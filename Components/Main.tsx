/** @format */

import React from "react";
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";
import LocationList from "./LocationList";

export const Main = () => {
	return (
		<div>
			<CharacterList />
			<EpisodeList />
			<LocationList />
		</div>
	);
};

export default Main;
