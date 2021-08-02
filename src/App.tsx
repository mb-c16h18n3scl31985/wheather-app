import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import {useState} from "react";

function App() {
    const [city, setCity] = useState<string>("");

    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("http://api.weatherapi.com/v1/current.json?key=f8ec40636e214bbca9c74618210208&q=London&aqi=no")
            .then(res => res.json())
            .then(data => console.log(data));
    };

    return (
        <div className="Test">
            <Title/>
            <Form setCity={setCity} getWeather={getWeather}/>
            <Results/>
        </div>
    );
}

export default App;
