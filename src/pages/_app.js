import { GlobalStyles } from "../Styles/Styles";

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default App;
