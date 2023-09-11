const WeatherSnap = () => {
    const [temperature, setTemperature] = React.useState(32);
    React.useEffect(() => {
      
      const key=atob('ODAxYTVlMDU4YzQ1YzE3NjZiOWNlMmQ0MTM1OTE4NWQ=');
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
        // Use async-await syntax to fetch the data
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                // Update the temperature state with the data
                setTemperature(data.main.temp);
            }
            catch (error) {
                console.error(error);
            }
        };
        // Call the fetchData function
        fetchData();
    }, []); // Pass an empty array as dependency to run only once
    return (React.createElement("span", { className: "weather" },
        React.createElement("i", { className: "weather-type", className: "fa-duotone fa-sun" }),
        React.createElement("span", { className: "weather-temperature-value" }, temperature),
        React.createElement("span", { className: "weather-temperature-unit" }, "\u00B0C")));
};
const Reminder = () => {
    return (React.createElement("div", { className: "reminder" },
        React.createElement("div", { className: "reminder-icon" },
            React.createElement("i", { className: "fa-regular fa-home" })),
        React.createElement("span", { className: "reminder-text" },
           ` Location : ${geo_location} `  ,
            React.createElement("span", { className: "reminder-time" }, 
                ` IP  : ${ip_address} `                 ))));
};
const Time = () => {
    const date = useCurrentDateEffect();
    return (React.createElement("span", { className: "time" }, T.format(date)));
};
const Info = (props) => {
    return (React.createElement("div", { id: props.id, className: "info" },
        React.createElement(Time, null),
        React.createElement(WeatherSnap, null)));
};

