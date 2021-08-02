import {useState} from "react";

const Form = () => {
    const [city, setCity] = useState<string>("");

    const getWhether = (e: any) => {
        e.preventDefault();
        fetch("http://api.weatherapi.com/v1/current.json?key=f8ec40636e214bbca9c74618210208&q=London&aqi=no")
            .then(res => res.json())
            .then(data => console.log(data));
    };

    return (
        <form action="">
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
            <button type="submit" onClick={getWhether}>天気を取得</button>
        </form>
    );
};

export default Form;