import { Component, ReactNode } from "react";


export default function CardComponent(props) {
	return (
		<div>
			{props.children}
		</div>
	);
};