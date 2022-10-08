import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://i.postimg.cc/CMNZ08pz/ad1.jpg" },
  { url: "https://i.postimg.cc/mg0kjNC6/ad2.jpg" },
  { url: "https://i.postimg.cc/mD4DfLdY/ad4.jpg" },
  { url: "https://i.postimg.cc/XvdJzGgN/ad3.jpg" },
  { url: "https://i.postimg.cc/G2jpbWNZ/ad5.jpg" },

 
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
