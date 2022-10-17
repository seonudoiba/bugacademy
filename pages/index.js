import Head from "next/head";
import Hero from "../components/Home/Hero";
import AboutHero from "../components/Home/AboutHero";
import CourseHero from "../components/Home/CourseHero";

export default function Home() {
	return (
		<div>
			<Head>
				<title>bugacademy</title>
				<meta name="BULLISH GREEN ACADEMY" content="We Learn to Earn" />
				<link rel="icon" href="/favico.png" />
			</Head>
			<Hero />
			<AboutHero />
			<CourseHero />
		</div>
	);
}
