import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import {useState} from "react";

type ResultsStateType = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}


function App() {
    const [city, setCity] = useState<string>("");

    const [results, setResults] = useState<ResultsStateType>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""
    });

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`http://api.weatherapi.com/v1/current.json?key=f8ec40636e214bbca9c74618210208&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => {
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    temperature: data.current.temp_c,
                    conditionText: data.current.condition.text,
                    icon: data.current.condition.icon
                })
            });
    };

    return (
        <div className="Test">
            <Title/>
            <Form setCity={setCity} getWeather={getWeather}/>
            <Results results={results}/>
        </div>
    );
}

export default App;
