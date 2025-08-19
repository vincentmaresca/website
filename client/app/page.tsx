import Link from "next/link";
import { Children, FC, PropsWithChildren, ReactNode } from "react";

export default async function Home(): Promise<unknown> {
	/* const resource = 'https://route';
	const options = 'idk?';
	const res = await fetch(resource, options); */

	const ngIfAlternative = true;
	{/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		{ngIfAlternative && <>Testing NgIfAlternatives Stuff</>}
	</div> */}

	return (
		<div className="mx-auto flex max-w-md items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/test/test2">Test 2</Link>
				</li>
				<li>
					<Link href="/test">Test</Link>
				</li>
			</ul>
			<br></br>
			{"\n"}
			<CardComponent field1="Test Field one :)">
				<div className="bg-red-500">
					Testing Children
				</div>
			</CardComponent>
		</div>
	);
}

type Props = PropsWithChildren<{
	field1: string;
	children: ReactNode;
}>

const CardComponent: React.FC<Props> = (props) => {
	return (
		<div>
			<p>{props.field1}</p>
			{props.children}
		</div>
	);
};
