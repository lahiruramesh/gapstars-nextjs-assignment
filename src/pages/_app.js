import Layout from '../components/Layout'

// Build my app 
function MyApp({ Component, pageProps }) {
return (
	<Layout>
	<Component {...pageProps} />
	</Layout>
)
}

export default MyApp
