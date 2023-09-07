
const WeatherSnap = () => {
    const API_key='435bba04efeadbab3e1ef6d796a0df6b';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`;
fetch(url)
.then(async (response) => {
  const data = await response.json();
});
   const [temperature] = React.useState(N.rand(23,32));
    console.log('temperature is '+temperature);
    console.log(typeof(temperature));
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

