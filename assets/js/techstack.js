AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/adobe_illustrator.png",
    langName: "Adobe Illustrator",
    langDesc: "<li>Tracé et image vectoriel, création d’illustration, de pictogrammes, de logos ect...</li>",
  },
  {
    langImage: "assets/images/techstack-page/adobe_indesign.png",
    langName: "Adobe Indesign",
    langDesc: "<li>Composer des mise en page à l’aide de repère et de grille</li>",
  },
  {
    langImage: "assets/images/techstack-page/adobe_photoshop.png",
    langName: "Adobe Photoshop",
    langDesc: "<li>Retouche de photo, détourage de visuel, recadrage, effet ect...</li>",
  },
  {
    langImage: "assets/images/techstack-page/adobe_after_effects.png",
    langName: "Adobe After Effects",
    langDesc: "<li>Animer des éléments graphiques, régler leur position ou leur échelle pour créer le mouvement</li>",
  },
  {
    langImage: "assets/images/techstack-page/adobe_media_encoder.png",
    langName: "Adobe Media Encoder",
    langDesc: "<li>Convertir un fichier After Effects en fichier mp4</li>",
  },
  {
    langImage: "assets/images/techstack-page/adobe_XD.png",
    langName: "Adobe XD",
    langDesc: "<li>Conception de maquette, wireframe et zoning</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>HyperText Markup Language, ou HTML est un langage utilisé pour modeler et structurer une page web</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets ou CSS sert à embellir le code HTTP, pour rendre la page WEB plus jolie et attrayante</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};

//function to scroll to 1st stage 
const scrollTo1stLvl = () => {
  window.scrollTo({
      top: $(document).height()*0.18,
      behavior: "smooth",
  });
};

//function to scroll to 2nd stages 
const scrollTo2ndLvl = () => {
  window.scrollTo({
      top: $(document).height()*0.325,
      behavior: "smooth",
  });
};

//function to scroll to 3rd stages 
const scrollTo3rdLvl = () => {
  window.scrollTo({
      top: $(document).height()*0.47,
      behavior: "smooth",
  });
};

//function to scroll to 4th stages 
const scrollTo4thLvl = () => {
  window.scrollTo({
      top: $(document).height()*0.6,
      behavior: "smooth",
  });
};

// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
