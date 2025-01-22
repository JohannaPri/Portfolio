import { useRef } from "react";
import Slider from "react-slick";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Text } from "../Text";
import { Fade } from "react-awesome-reveal";

const ProjectsSection = () => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const images = [
    { 
      id: 1, 
      src: "/adventure-planner.png", 
      alt: "Image of Adventure Planner Start Page", 
      title: "Adventure Planner", 
      description: "An app for planning and managing your adventures efficiently.", 
      githubLink: "https://github.com/JohannaPri/Adventure-Planner-Exjob", 
      deployLink: "https://adventure-planner-exjob.vercel.app/" 
    },
    { 
      id: 2, 
      src: "/af-group.png", 
      alt: "Image of JobbNavigator Start Page", 
      title: "JobNavigator", 
      description: "A job search tool that helps users find relevant job postings.", 
      githubLink: "https://github.com/JohannaPri/React-JobSearch-AF", 
      deployLink: "https://johannapri.github.io/React-JobSearch-AF/" 
    },
    { 
      id: 3, 
      src: "/the-zoo.png", 
      alt: "Image of The Zoo Start Page", 
      title: "The Zoo", 
      description: "A fun and interactive zoo management simulation.", 
      githubLink: "https://github.com/JohannaPri/React-the-ZOO", 
      deployLink: "https://johannapri.github.io/React-the-ZOO/" 
    },
    { 
      id: 4, 
      src: "/tic-tac-toe.png", 
      alt: "Image of Tic Tac Toe Start Page", 
      title: "Tic Tac Toe", 
      description: "Classic Tic Tac Toe game built with Vue.", 
      githubLink: "https://github.com/JohannaPri/Vue-TicTacToe", 
      deployLink: "https://johannapri.github.io/Vue-TicTacToe/" 
    },
    { 
      id: 5, 
      src: "/the-lemons-quiz.png", 
      alt: "Image of The Lemons Quiz Start Page", 
      title: "The Lemons Quiz", 
      description: "Test your music knowledge with this fun and engaging JavaScript Music Quiz!", 
      githubLink: "https://github.com/JohannaPri/Quiz-assignment-JS-course", 
      deployLink: "https://medieinstitutet.github.io/fed23d-javascript-grundkurs-gruppuppgift-citronerna/" 
    },
    { 
      id: 6, 
      src: "isabella-surf.png", 
      alt: "Image of Isabella's Surf Club Start Page in Figma", 
      title: "Isabella's Surf Club", 
      description: "A Figma design prototype for a surf club website.", 
      githubLink: "https://github.com/JohannaPri/Isabella-Group-Design", 
      deployLink: "" 
    },
    { 
      id: 7, 
      src: "/grace.png", 
      alt: "Image of Studio Grace Start Page", 
      title: "Studio Grace", 
      description: "A mobile-first design for a boutique studio.", 
      githubLink: "https://github.com/JohannaPri/Studio-Grace-Assignment", 
      deployLink: "https://johannapri.github.io/Studio-Grace-Assignment/" 
    },
    { 
      id: 8, 
      src: "/donut-webshop.png", 
      alt: "Image of Donut Factory Start Page", 
      title: "Donut Factory", 
      description: "A playful e-commerce site for donut enthusiasts.", 
      githubLink: "https://github.com/JohannaPri/Webshop-assignment-JS-course?tab=readme-ov-file", 
      deployLink: "https://medieinstitutet.github.io/fed23d-js-grundkurs-webshop-JohannaPri/" 
    },
    { 
      id: 9, 
      src: "/wwf-prototype.png", 
      alt: "Image of WWF prototype Wireframe Start Page", 
      title: "WWF Prototype", 
      description: "A Figma wireframe prototype for a WWF campaign.", 
      githubLink: "https://github.com/JohannaPri/UX-Group-Prototyp", 
      deployLink: "https://www.figma.com/proto/08cDJa5lX23ZBA1B061sKR/UX-Group-assignment?page-id=0%3A1&type=design&node-id=6-4&viewport=770%2C982%2C0.15&t=qhCQQt7FABDMi2gB-1&scaling=scale-down&starting-point-node-id=6%3A4&show-proto-sidebar=1&mode=design" 
    },
    { 
      id: 10, 
      src: "/svg-travel-animation.png", 
      alt: "Image of svg animation", 
      title: "Travel Animation", 
      description: "A travel animation! Click 'Deploy' to see it in action.", 
      githubLink: "https://github.com/JohannaPri/Animation-svg-link", 
      deployLink: "https://codepen.io/Johanna-Larsson/pen/ExJodXZ" 
    },
  ];

  return (
    <section id="projects" className="relative w-full h-auto px-4 py-8 mt-12 mb-12 font-poppins bg-cloudGray bg-opacity-30 drop-shadow-md">
      <Text
        as="p"
        className="text-sm font-normal tracking-widest uppercase text-slateGray lg:text-base heading-projects text-center mb-12"
      >
        <Fade duration={2000}>Projects</Fade>
      </Text>

      <div className="flex items-center justify-between mb-5">
        <button
          onClick={previous}
          className="p-2 bg-slateGray rounded-full text-white hover:bg-gray-800 ml-2"
        >
          <CaretLeft size={15} />
        </button>
        <button
          onClick={next}
          className="p-2 bg-slateGray rounded-full text-white hover:bg-gray-800 mr-2"
        >
          <CaretRight size={15} />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image) => (
          <div key={image.id} className="px-2 font-poppins">
            <div className="relative overflow-hidden rounded-lg group h-[430px] mb-10 projects-image">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-85 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slateGray bg-opacity-60 p-4 projects-card">
                <h3 className="text-white text-lg font-semibold mb-2 projects-card-heading">
                  {image.title}
                </h3>
                <p className="text-white text-sm mb-4 project-description">
                  {image.description}
                </p>
                <div className="flex justify-between gap-4">
                  <a 
                    href={image.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="shadow-md text-white bg-slateGray hover:shadow-none hover:bg-black transition-all duration-300 ease-in py-2 px-4"
                  >
                    GitHub
                  </a>
                  <a 
                    href={image.deployLink || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`shadow-md text-white bg-slateGray hover:shadow-none hover:bg-black transition-all duration-300 ease-in py-2 px-4 ${!image.deployLink ? 'cursor-not-allowed opacity-50 pointer-events-none' : ''}`}
                  >
                    Deployed
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsSection;
