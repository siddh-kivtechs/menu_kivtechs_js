const MenuSection = (props) => {
    const getContent = () => {
        if (props.scrollable) {
            return (React.createElement(ScrollableComponent, { className: "menu-section-content" }, props.children));
        }
        return (React.createElement("div", { className: "menu-section-content" }, props.children));
    };
    return (React.createElement("div", { id: props.id, className: "menu-section" },
        React.createElement("div", { className: "menu-section-title" },
            React.createElement("i", { className: props.icon }),
            React.createElement("span", { className: "menu-section-title-text" }, props.title)),
        getContent()));
};
async function get_json(url) {
  let promise = fetch(url);
  let response = await promise;
  let json_data = await response.json();
  return json_data;
}
let json_10_url='https://siddh-kivtechs.github.io/menu_kivtechs_json/part_10.json';

const QuickNav = () => {
    async getItems = () => {
        return get_json(json_10_url).map((item) => {
            return (React.createElement("div", { key: item.id, className: "quick-nav-item clear-button" },
               // React.createElement("span", { className: "quick-nav-item-label" }, item.label)));
                React.createElement("a", { href: item.url, className: "quick-nav-item-label" }, item.label)));
        });
    };
    return (React.createElement(ScrollableComponent, { id: "quick-nav" }, getItems()));
};

