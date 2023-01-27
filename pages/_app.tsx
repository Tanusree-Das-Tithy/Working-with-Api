/** @format */

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "../services/apiSlice";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApiProvider api={apiSlice}>
			<Component {...pageProps} />{" "}
		</ApiProvider>
	);
}
