import "../styles/globals.css";
import { AuthUserProvider } from '../context/AuthUserContext';
import Navbar from "../components/Navbar/navbar";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthUserProvider>
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </AuthUserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
