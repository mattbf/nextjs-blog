import '../styles/global.css'
//import "tailwindcss/tailwind.css"; -> other method for using tailwind


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
