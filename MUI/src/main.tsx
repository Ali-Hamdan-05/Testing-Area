import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./Home.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />}/>
                <Route path="about" />
                <Route path="gallery" />
                <Route path="message" />
                <Route path="*"/>
            </Route>
        </Routes>
    </BrowserRouter>
);
