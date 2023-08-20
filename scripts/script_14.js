
const url_14 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_14.json";
let p_json=[{
                desc: " MAke or Generate your your images using ADOBE SUITE of software",
                id: 1,
                icon: "fa-solid fa-broom-ball",
                image: "https://siddh-kivtechs.github.io/image/fantasy-land-7775979.jpg",
                title: "ADOBE ILLUSTRATOR"
            }, {
                desc: " CANVA for designers ",
                id: 2,
                icon: " fa-solid fa-starship-freighter",
                image: "https://siddh-kivtechs.github.io/image/woman-7838219.jpg",
                title: "CANVA direct"
            }, {
                desc: " AUDIO generator ",
                id: 3,
                icon: "fa-solid fa-hat-wizard",
           
                image: "https://siddh-kivtechs.github.io/image/cyborg-7956066.jpg",
                title: "SPEECH SYNTHESIS"
            }, {
                desc: " LLM Our take on CHATGPT,with open source models from ORCA and other NLP models ",
                id: 4,
                icon: "fa-solid fa-galaxy",
            
                image: "https://siddh-kivtechs.github.io/image/artificial-intelligence-7965011.jpg",
                title: "LLM"
            }];
const Movies = () => {
     const  getMovies =  () => {
    // const  getMovies = async () => {
        // const p_json=await get_json(url_14);
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
