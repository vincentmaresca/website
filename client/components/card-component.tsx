import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
	field1: string;
	children?: ReactNode;
	header?: string;
}>

export const CardComponent: React.FC<Props> = (props) => {
	return (
		<div>
			<div className="bg-blue-400 rounded-tl-lg rounded-tr-lg pl-4 pr-4">{props.header}</div>
			<div className="rounded-b-lg
				bg-gray-600
				border-gray-800
				p-4">
				<p>{props.field1}</p>
				{props.children}
			</div>
		</div>
	);
};