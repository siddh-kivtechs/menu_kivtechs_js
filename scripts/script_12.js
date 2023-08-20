
const url_12 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_12.json";

let promise = fetch(url_12);

promise.then(function(response) {
  // The request was successful.
  const k_json = response.json();
  console.log(k_json);
}).catch(function(error) {
  // The request failed.
  console.log(error);
});
const Tools = () => {
    const getTools = () => {
        return k_json.map((tool) => {
            const styles = {
                backgroundImage: `url(${tool.image})`
            };
            return (React.createElement("div", { key: tool.id, className: "tool-card" },
                React.createElement("div", { className: "tool-card-background background-image", style: styles }),
                React.createElement("div", { className: "tool-card-content" },
                    React.createElement("div", { className: "tool-card-content-header" },
                        React.createElement("span", { className: "tool-card-label" }, tool.label),
                        React.createElement("span", { className: "tool-card-name" }, tool.name)),
                    React.createElement("i", { className: classNames(tool.icon, "tool-card-icon") }))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fa-solid fa-toolbox", id: "tools-section", title: "More in LIne" }, getTools()));
};
