import Head from "next/head";
import Hero from "../components/Home/Hero";
import AboutHero from "../components/Home/AboutHero";
import CourseHero from "../components/Home/CourseHero";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Bugacademy</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favico.png" />
			</Head>
			<Hero />
			<AboutHero />
			<CourseHero />
		</div>
	);
}
