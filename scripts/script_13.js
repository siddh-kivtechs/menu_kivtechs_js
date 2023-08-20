
const url_13 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_13.json";

let promise = fetch(url_13);

promise.then(function(response) {
  // The request was successful.
  const j_json = response.json();
  console.log(j_json);
}).catch(function(error) {
  // The request failed.
  console.log(error);
});
const Restaurants = () => {
    const getRestaurants = () => {
        return j_json.map((restaurant) => {
            const styles = {
                backgroundImage: `url(${restaurant.image})`
            };
  return (React.createElement("a", { key: restaurant.id, href: restaurant.url, className: "restaurant-card background-image", style: styles },
React.createElement("div", { className: "restaurant-card-content" },
React.createElement("div", { className: "restaurant-card-content-items" },
React.createElement("span", { className: "restaurant-card-title" }, restaurant.title),
React.createElement("span", { className: "restaurant-card-desc" }, restaurant.desc)))));
});
};
return (React.createElement(MenuSection, { icon: "fas fa-robot", id: "restaurants-section", title: "CHATBOT MENU" }, getRestaurants()));
};
