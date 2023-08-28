
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
            
                label: "AMAZON WEB SERVICES",
                name: "AWS",
                url:""
            }, {
                icon: "fab fa-microsoft",
                id: 3,
                image: "https://siddh-kivtechs.github.io/company_images/azure-scaled.jpg",
           
                label: "MICROSOFT AZURE",
                name: "AZURE",
                  url:""
            }, {
                icon: "fa-brands fa-cloudversify",
                id: 4,
                image: "https://siddh-kivtechs.github.io/company_images/ovh.png",
          
                label: "OVH",
                name: "OVH",
                  url:""
            }, {
                icon: "fas fa-boxes",
                id: 5,
                image: "https://siddh-kivtechs.github.io/company_images/purepng.com-ingram-micro-logologobrand-logoiconslogos-25151993953320b2j.png",
      
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
                icon: "fa",
                id: 7,
                image: "https://imageio.forbes.com/specials-images/imageserve/64a8262b79a8b89cb191cf1d/Picture1/960x0.png?format=png&width=960",
                label: "IBM ",
                name: "IBM",
                url:""
            },
             {
                icon: "fa ",
                id: 8,
                image: "https://s3-symbol-logo.tradingview.com/intel--big.svg",
                label: "INTEL ",
                name: "INTEL",
                url:""
            },
             {
                icon: "fa ",
                id: 9,
                image: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2-500x281.png",
                label: "SAMSUNG ",
                name: "SAMSUNG",
                url:""
            },
            {
            icon:"",
              id:10,
              image:"https://www.se.com/in/en/assets/v2/380/media/202250/SE_logo-LIO-white_header.svg",
              label:"Schneider Electric ",
              name:"Schneider Electric ",
              url:"https://www.se.com/in/en/"
            },
            {
                icon: "fa fa-wallet",
                id: 11,
                  
                image: "https://siddh-kivtechs.github.io/images_2/money-3722123_1920.png",
                label: "PROJECT KOINS ",
                name: "KOINS",
                url:"https://koins.kivtechs.cloud/"
            },
            {
                icon: "fa fa-vault",
                id: 12,
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
    return (React.createElement(MenuSection, { icon: "fa-solid fa-solar-system", id: "tools-section", title: "APPS in APPS" }, getTools()));
};
