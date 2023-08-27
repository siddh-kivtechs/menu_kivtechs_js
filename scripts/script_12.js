
const url_12 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_12.json";
let k_json=[{
                icon: "fa-solid fa-adobe",
                id: 1,
                image: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                label: "ADOBE SOLUTIONS",
                name: "ADOBE"
            }, {
                icon: "fab fa-aws",
                id: 2,
                image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                label: "AMAZON WEB SERVICES",
                name: "AWS"
            }, {
                icon: "fa-solid fa-azure",
                id: 3,
                image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvJTIwY2hhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                label: "MICROSOFT AZURE",
                name: "AZURE"
            }, {
                icon: "fa-solid fa-plane",
                id: 4,
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                label: "OVH",
                name: "OVH"
            }, {
                icon: "fa-solid fa-gamepad-modern",
                id: 5,
                image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                label: "INGRAM MICRO",
                name: "INGRAM"
            }, {
                icon: "fa fa-google",
                id: 6,
                image: "https://siddh-kivtechs.github.io/company_images/google-1088004.svg",
                label: "GOOGLE CLOUD ",
                name: "GCP"
            },
            {
                icon: "fa fa-wallet",
                id: 7,
                  
                image: "https://siddh-kivtechs.github.io/images_2/money-3722123.svg",
                label: "PROJECT KOINS ",
                name: "KOINS"
            },
            {
                icon: "fa fa-vault",
                id: 8,
                image: "https://siddh-kivtechs.github.io/images_2/safe-913452.jpg",
                label: "AUTH",
                name: "AUTH"
            }];

const Tools = () => {
    const getTools = () => {
    // const getTools = async () => {
        // const k_json=await get_json(url_12);
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
