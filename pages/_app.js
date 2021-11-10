import 'tailwindcss/tailwind.css'
import firebaseInit from '../utils/firebase';

  firebaseInit();

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp
