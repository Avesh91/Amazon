import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "/img/ad/ad1.jpg" },
  { url: "/img/ad/ad3.jpg" },
  { url: "/img/ad/ad4.jpg" },
  { url: "/img/ad/ad5.jpg" },
  { url: "/img/ad/ad2.jpg" },

 
];

const Header = () => {
  return (
    <div>
      <SimpleImageSlider
        width={'100%'}
        height={604}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default Header