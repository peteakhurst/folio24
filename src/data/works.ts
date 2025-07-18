export type Work = {
    id: number;
    heading: string;
    imgSrc: string;
    subHeading: string;
    href: string;
  };

const works: Work[] = [
    { id: 1, heading: 'Swaggle', imgSrc: '../swaggleScreenshot.png', subHeading: 'Shopify/ReactJs/TailwindCss', href:"https://swaggle.com.au/" },
    { id: 2, heading: 'Gant', imgSrc: '../gant.png', subHeading: 'Shopify/Liquid/Web Components/TailwindCss', href: "https://gant.com.au"},
    { id: 3, heading: 'Sesimi', imgSrc: '../sesimi.jpg', subHeading: 'ReactJs/TailwindCss/GSAP', href:'https://sesimi.com/' },
    { id: 4, heading: 'Latitude', imgSrc: '../clearDynamicsScreenshot.png', subHeading: 'ReactJs/TailwindCss/AWS', href:'https://www.latitudefinancial.com.au/credit-cards/28-degrees/' },
    { id: 5, heading: 'Catfish', imgSrc: '../catfish.png', subHeading: 'Shopify/Liquid/Css', href:'https://www.thecatfish.com.au/' },
    { id: 6, heading: 'Harkness', imgSrc: '../harkScreenshot.png', subHeading: 'Shopify/Liquid/Css', href:"https://harknessjewellery.com/" },
  ];

  export default works
