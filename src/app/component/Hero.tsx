import Image from "next/image";

export default function Hero() {
    return (<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 items-center sm:items-start typewriter">
				<span className="courier-prime-bold text-4xl">Hi, Richart Kid Here <span>|</span></span>

				<div className="courier-prime-bold text-xl">Side Projects</div>
				<ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					<li>Simple Tiny Url</li>
					<li>Kahoot Like App</li>
				</ol>
			</main>
			<footer className="items-center justify-center courier-prime-bold">
				Learn personal branding and technology in one go
			</footer>
		</div>
	)
}