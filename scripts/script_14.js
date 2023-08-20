
const url_14 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_14.json";

let promise = fetch(url_14);

promise.then(function(response) {
  // The request was successful.
  const p_json = response.json();
  console.log(p_json);
}).catch(function(error) {
  // The request failed.
  console.log(error);
});
const Movies = () => {
    const getMovies = () => {
        return p_json.map((movie) => {
            const styles = {
                backgroundImage: `url(${movie.image})`
            };
            const id = `movie-card-${movie.id}`;
            return (React.createElement("div", { key: movie.id, id: id, className: "movie-card" },
                React.createElement("div", { className: "movie-card-background background-image", style: styles }),
                React.createElement("div", { className: "movie-card-content" },
                    React.createElement("div", { className: "movie-card-info" },
                        React.createElement("span", { className: "movie-card-title" }, movie.title),
                        React.createElement("span", { className: "movie-card-desc" }, movie.desc)),
                    React.createElement("i", { className: movie.icon }))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fa fa-circle-o-notch", id: "movies-section", scrollable: true, title: "Upcomming Projects" }, getMovies()));
};
