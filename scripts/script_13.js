
const url_13 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_13.json";
let j_json=[{
                desc: "Chatbot based on OPEN AI ",
                id: 1,
                image: "https://siddh-kivtechs.github.io/image/woman-7837348.webp",
                title: "IV -O-RY",
                url: "https://ivory.kivtechs.cloud/"
            }, {
                desc: "OLIVIY-A",
                id: 2,
                image: "https://siddh-kivtechs.github.io/image/ai-generated-7770511.jpg",
                title: "OLIVE",
            url:"https://olive.kivtechs.cloud/"
            },
            {
                desc: "Project Catalona",
                id: 3,
                image: "https://siddh-kivtechs.github.io/image/woman-7672506.webp",
                title: "CAT-A-LONA",
            url:"https://catalona.kivtechs.cloud/"
            },
              {
                desc: " IMAGE + CHATGPT",
                id: 4,
                image: "https://siddh-kivtechs.github.io/image/drawing-7887719.webp",
                title: "Project Image CHAT GPT",
            url:"https://chatgpt-vercel-image.vercel.app/"
            },
              {
                desc: "Project PAN",
                id: 5,
                image: "https://siddh-kivtechs.github.io/image/ai-generated-7829161.webp",
                title: "Panel proejct",
            url:"https://panelproject.kivtechs.cloud/"
            }
           ];
const Restaurants = () => {
    const getRestaurants =  () => {
    // const getRestaurants = async () => {
        // const j_json=await get_json(url_13);
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
