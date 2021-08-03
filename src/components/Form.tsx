type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}
const
    Form: React.FC<FormPropsType> = (props) => {
        return (
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
                <button type="submit">天気を取得</button>
            </form>
        );
    };

export default Form;