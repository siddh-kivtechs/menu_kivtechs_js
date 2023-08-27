//splitting script 13 into chatbot script 13 and TTS script 18
let y_json=[{ desc: "AMAZON POLLY",
                id :6,
              image:"https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2017/11/24/polly-social-1024x512.jpg",
                title: "AMAZON POLLY",
                url:"https://tts-lyart-nine.vercel.app/"
            },
                { desc: "GCP TTS",
                id :7,
              image:"https://siddh-kivtechs.github.io/company_images/google-text-to-speech.png",
                title: "GCP TTS",
                url:"https://bard.google.com/?hl=en"
            },
            {
              desc:"IBM WATSON",
              id:8,
              image:"https://miro.medium.com/v2/resize:fit:600/0*pBUKeJ5j2XPw8SyZ",
              title:"IBM WATSON",
              url:""
            }
           ];

const Ginel = () => {
    const getGinel =  () => {
    // const getGinel = async () => {
        // const j_json=await get_json(url_13);
        return y_json.map((ginel) => {
            const styles = {
                backgroundImage: `url(${ginel.image})`
            };
  return (React.createElement("a", { key: ginel.id, href: ginel.url, className: "ginel-card background-image", style: styles },
React.createElement("div", { className: "ginel-card-content" },
React.createElement("div", { className: "ginel-card-content-items" },
React.createElement("span", { className: "ginel-card-title" }, ginel.title),
React.createElement("span", { className: "ginel-card-desc" }, ginel.desc)))));
});
};
return (React.createElement(MenuSection, { icon: "fa-solid fa-head-side-cough", id: "ginel-section", title: "TEXT to SPEECH" }, getGinel()));
};