type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: any) => void;
}
const
    Form: React.FC<FormPropsType> = (props) => {
        return (
            <form action="">
                <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
                <button type="submit" onClick={props.getWeather}>天気を取得</button>
            </form>
        );
    };

export default Form;