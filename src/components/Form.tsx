import {useState} from "react";

const Form = () => {
    const [city, setCity] = useState<string>("");
    return (
        <form action="">
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
            {city}
            <button type="submit">天気を取得</button>
        </form>
    );
};

export default Form;