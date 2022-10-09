import '../styles/globals.css'
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
		<Layout>
			<div className="md:mt-16 mt-12 bg-green-700">
				<Component {...pageProps} />
			</div>
		</Layout>
	);
}

export default MyApp
