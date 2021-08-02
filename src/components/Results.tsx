type ResultsPropsType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

const Results = (props: ResultsPropsType) => {
    return (
        <div>
            {props.results.cityName && <h2>{props.results.cityName}</h2>}
            {props.results.country && <p>{props.results.country}</p>}
            {props.results.temperature && <p>{props.results.temperature}</p>}
            {props.results.conditionText &&
            <div>
                <img src={props.results.icon} alt="icon"/>
                <span>{props.results.conditionText}</span>
            </div>}
        </div>
    );
};

export default Results;