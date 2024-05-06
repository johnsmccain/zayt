import "./App.css";
import AboutUs from "./sections/aboutUs";
import { Gallery } from "./sections/gallery";
import Hero from "./components/hero";
import { Intervention } from "./sections/intervention";
import { Navbar } from "./sections/navbar";
import { OurValue } from "./sections/ourValue";
import { Volanteers } from "./sections/volanteers";

function App() {
	return (
		<div className="px-3">
			<Navbar />
			<Hero />
			<AboutUs />
			<OurValue />
			<Intervention />
			<Gallery />
			<Volanteers />
		</div>
	);
}

export default App;
