//  projects script
let n_json=[{
                desc: "MAIN project",
                id: 1,
                image: "https://siddh-kivtechs.github.io/kneogin_brand_asset/KNEOGIN_IGMISARCH_v_0.png",
                title: "kneoginigmisarch.",
                url: "https://kneoginigmisarch.co.in/"
            },
            {
                desc: "KNEO LEARN ",
                id: 2,
                image: "https://siddh-kivtechs.github.io/kneogin_brand_asset/KNEOGIN_IGMISARCH_v_0.png",
                title: "KNEO LEARN .",
                url: "https://kneo-learn.cloud/"
            },
               {
                desc: "KAEMM",
                id: 3,
                image: "https://siddh-kivtechs.github.io/kneogin_brand_asset/kaemm.cloud.png",
                title: "KAEMM .",
                url: "https://kaemm.cloud/"
            },
               {
                desc: "KNEO EMM ",
                id: 4,
                image: "https://siddh-kivtechs.github.io/kneogin_brand_asset/kneo-emm.cloud.png",
                title: "KNEO EMM.",
                url: "https://kneo-emm.cloud/"
            }
            ,
               {
                desc: "I-PROVISION",
                id: 5,
                image: "https://siddh-kivtechs.github.io/kneogin_brand_asset/i-provision.cloud.png",
                title: "I-PROVISION.",
                url: "https://i-provision.cloud/"
            },
             {
                desc: "KNEO IMPACT",
                id: 6,
                image: "https://siddh-kivtechs.github.io/kneogin_brand_asset/KNEOGIN_IGMISARCH_v_0.png",
                title: "KNEO IMPACT .",
                url: "https://kneo-impact.cloud/"
            },
                 {
                desc: "DEPLOY S",
                id: 7,
                image: "https://siddh-kivtechs.github.io/kneogin_brand_asset/deploy-s.cloud.png",
                title: "DEPLOY S .",
                url: "https://deploy-s.cloud/"
            }
            ];





const Projects = () => {
    const getProjects=()=>{
        return n_json.map((project) => {
           const styles = {
                backgroundImage: `url(${project.image})`
            };

  return (React.createElement("a", { key: project.id, href: project.url, className: "project-card background-image", style: styles },
React.createElement("div", { className: "project-card-content" },
React.createElement("div", { className: "project-card-content-items" },
React.createElement("span", { className: "project-card-title" }, project.title),
React.createElement("span", { className: "project-card-desc" }, project.desc)))));
});
};

    return (React.createElement(MenuSection, { icon: "fa-solid fa-hand-holding-hand", id: "projects-section", scrollable: true, title: " Sister PROJECTs" }, getProjects()));
};
