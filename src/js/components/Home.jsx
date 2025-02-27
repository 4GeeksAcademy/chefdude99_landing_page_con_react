import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "../Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="AllCards row">
				<div className="Cartas col-xs-12 col-md-6 col-lg-3">
					<Card 
					img="https://fastly.picsum.photos/id/1011/500/500.jpg?hmac=YN3oCpwpniYpKEclMAlUd1vWTmlpeh6BUdpODrFAINc"
					title="mas belloooo"
					text="el gato miralo, mas fino."
					/>
				</div>
				<div className="Cartas col-xs-12 col-md-6 col-lg-3">
					<Card 
					img="https://fastly.picsum.photos/id/327/500/500.jpg?hmac=9kV_jy-Q_BAHmgMqOTXXJyOc8tWn3V0VS2h9bB8aWk0"
					title="tengo hambre"
					text="mira aqui tengo es hambre oyo"
					/>
				</div>
				<div className="Cartas col-xs-12 col-md-6 col-lg-3">
					<Card
					img="https://fastly.picsum.photos/id/625/500/500.jpg?hmac=H2HPXZBmIAri0Yql1hn799m9P1mpPGDS8zzRQZH4vF8"
					title="patinetaa"
					text="mi deporte fagorito"
					/>
				</div>
				<div className="Cartas col-xs-12 col-md-6 col-lg-3">
					<Card
					img="https://fastly.picsum.photos/id/552/500/500.jpg?hmac=xhz_UnakbIYc1wvTaAxKJt7MvTl3ykIrcPX9PEfFwN8"
					title="pollo frito"
					text="mi comida favorita"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;