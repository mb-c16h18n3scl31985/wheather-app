type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}
const
    Form: React.FC<FormPropsType> = ({setCity,getWeather}: FormPropsType) => {
        return (
            <form onSubmit={getWeather}>
                <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
                <button type="submit">天気を取得</button>
            </form>
        );
    };

export default Form;