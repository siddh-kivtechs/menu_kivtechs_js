
const url_12 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_12.json";
let k_json=[{
                icon: "fas fa-photo-video",
                id: 1,
            image: "https://siddh-kivtechs.github.io/company_images/Adobe-Logo.png",
         
                label: "ADOBE SOLUTIONS",
                name: "ADOBE",
                url:""
            }, {
                icon: "fab fa-aws",
                id: 2,
                image: "https://siddh-kivtechs.github.io/company_images/aws_logo_cmyk-2a9ix9v.jpg",
                // image:"",
                label: "AMAZON WEB SERVICES",
                name: "AWS",
                url:""
            }, {
                icon: "fab fa-microsoft",
                id: 3,
                image: "https://siddh-kivtechs.github.io/company_images/azure-scaled.jpg",
                // image:"",
                label: "MICROSOFT AZURE",
                name: "AZURE",
                  url:""
            }, {
                icon: "fab fa-cloudfare",
                id: 4,
                image: "https://siddh-kivtechs.github.io/company_images/ovh.png",
            // image:"",
                label: "OVH",
                name: "OVH",
                  url:""
            }, {
                icon: "fa-solid fa-gamepad-modern",
                id: 5,
                image: "https://siddh-kivtechs.github.io/company_images/purepng.com-ingram-micro-logologobrand-logoiconslogos-25151993953320b2j.png",
                  // image:"",
                label: "INGRAM MICRO",
                name: "INGRAM",
                  url:""
            }, {
                icon: "fa fa-google",
                id: 6,
                image: "https://siddh-kivtechs.github.io/company_images/google-1088004.svg",
                label: "GOOGLE CLOUD ",
                name: "GCP",
                url:""
            },
            {
                icon: "fa fa-wallet",
                id: 7,
                  
                image: "https://siddh-kivtechs.github.io/images_2/money-3722123_1920.png",
                label: "PROJECT KOINS ",
                name: "KOINS",
                url:"https://koins.kivtechs.cloud/"
            },
            {
                icon: "fa fa-vault",
                id: 8,
                image: "https://siddh-kivtechs.github.io/images_2/safe-913452.jpg",
                label: "AUTH",
                name: "AUTH",
                url:"https://auth.kivtechs.cloud/"
            }];

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
