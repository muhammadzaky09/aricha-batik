import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BatikKombinasi from "./pages/BatikKombinasi";
import MainPage from "./pages/MainPage";
import BatikTulis from "./pages/BatikTulis";
import BatikCap from "./pages/BatikCap";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/batik-kombinasi":
        title = "";
        metaDescription = "";
        break;
      case "/batik-tulis":
        title = "";
        metaDescription = "";
        break;
      case "/batik-cap":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/batik-kombinasi" element={<BatikKombinasi />} />
      <Route path="/batik-tulis" element={<BatikTulis />} />
      <Route path="/batik-cap" element={<BatikCap />} />
    </Routes>
  );
}
export default App;