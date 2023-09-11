//  projects script
let n_json=[{
                desc: "MAIN project",
                id: 1,
                image: "https://img1.wsimg.com/isteam/ip/5347598b-e052-4123-9c3b-e542f646b6b4/Kneogin%20Igmisarch%20Logo.jpg",
                title: "kneoginigmisarch.",
                url: "https://kneoginigmisarch.co.in/"
            },
            {
                desc: "KNEO LEARN ",
                id: 2,
                image: "https://img1.wsimg.com/isteam/ip/5347598b-e052-4123-9c3b-e542f646b6b4/Kneogin%20Igmisarch%20Logo.jpg",
                title: "KNEO LEARN .",
                url: "https://kneo-learn.cloud/"
            },
               {
                desc: "KAEMM",
                id: 3,
                image: "https://img1.wsimg.com/isteam/ip/5347598b-e052-4123-9c3b-e542f646b6b4/Kneogin%20Igmisarch%20Logo.jpg",
                title: "KAEMM .",
                url: "https://kaemm.cloud/"
            },
               {
                desc: "KNEO EMM ",
                id: 4,
                image: "https://img1.wsimg.com/isteam/ip/5347598b-e052-4123-9c3b-e542f646b6b4/Kneogin%20Igmisarch%20Logo.jpg",
                title: "KNEO EMM.",
                url: "https://kneo-emm.cloud/"
            }
            ,
               {
                desc: "I-PROVISION",
                id: 5,
                image: "https://img1.wsimg.com/isteam/ip/5347598b-e052-4123-9c3b-e542f646b6b4/Kneogin%20Igmisarch%20Logo.jpg",
                title: "I-PROVISION.",
                url: "https://i-provision.cloud/"
            },
             {
                desc: "KNEO IMPACT",
                id: 6,
                image: "https://img1.wsimg.com/isteam/ip/5347598b-e052-4123-9c3b-e542f646b6b4/Kneogin%20Igmisarch%20Logo.jpg",
                title: "KNEO IMPACT .",
                url: "https://kneo-impact.cloud/"
            },
                 {
                desc: "DEPLOY S",
                id: 7,
                image: "https://img1.wsimg.com/isteam/ip/5347598b-e052-4123-9c3b-e542f646b6b4/Kneogin%20Igmisarch%20Logo.jpg",
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
