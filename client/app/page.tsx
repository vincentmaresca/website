import Link from "next/link";

export default async function Home(): Promise<unknown> {
	/* const resource = 'https://route';
	const options = 'idk?';
	const res = await fetch(resource, options); */

	const ngIfAlternative = true;
	{/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		{ngIfAlternative && <>Testing NgIfAlternatives Stuff</>}
	</div> */}

	return (
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
	);
}
