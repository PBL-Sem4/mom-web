import "../styles/globals.css";
import { AuthProvider } from "../firebase/auth";
import Navbar from "../components/Navbar/navbar";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />;
        <Footer/>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
