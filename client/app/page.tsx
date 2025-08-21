import { CardComponent } from "@/components/card-component";
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
		<div>
			<div className="flex justify-center">
				<div className="ml-4">
					<CardComponent field1="Card Component" header="Test Header">
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
					</CardComponent>
				</div>
				<div className="ml-4">
					<CardComponent field1="Card Component 2" header="Test Header 2">
						Content 2
					</CardComponent>
				</div>
				<div className="ml-4">
					<CardComponent field1="Card Component 3" header="Test Header 3">
						Content 3
					</CardComponent>
				</div>
			</div>
		</div>
	);
}
