import "../styles/Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../asset/slide0.jpeg";
import slide2 from '../asset/slide-1.png'
import slide3 from '../asset/slide-2.png'
import slide4 from '../asset/slide-3.png'
import slide5 from '../asset/slide-4.png'
import Slider from "react-slick";
import { connect } from 'react-redux';
import { setSliderContent } from "../action";
import { useEffect } from "react";

const SlideCard = ({sliderContent, setSliderContent}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    appendDots: (dots) => <ul style={{ margin: "0px" }}>{dots}</ul>,
  };
useEffect(() =>{
  const fetchedsliderContent = [
    {
      id: 1,
      title: "Cyber Security System",
      desc: "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      img: slide1
    },
    {
      id: 2,
      title: "Nodejs Development",
      desc: "LoremLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallisiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      img: slide2

    },
    {
      id: 3,
      title: "MERN Stack Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  consequat eu, quam etiamLorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis at quis ut convallelit. Quis lobortis consequat eu, quam etiamLorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis at quis ut convallis.",
      img: slide3

    },
    {
      id: 4,
      title: "Administration in Company",
      desc: "Lorem ipsum dolor sit amet, consectetur ad consequat eu, quam etiamLorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis at quis ut convallipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      img: slide4

    },

    {
      id: 5,
      title: "Frontend Development",
      desc: "Lorem ipsum dolor sit amet, consectetur ad consequat eu, quam etiamLorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis at quis ut convallipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      img: slide5

    },
    {
      id: 6,
      title: "MEAN Stack Development",
      desc: "Lorem ipsum dolor sit amet, consectetur ad consequat eu, quam etiamLorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis at quis ut convallipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      img: slide1

    },
  ];
  setSliderContent(fetchedsliderContent);
},[setSliderContent])
  
  return (
    <>
      <div className="sliderContainer">
        <Slider {...settings}>
          {sliderContent.map((val, index) => (
            <div className="box d-flex top" key={index}>
              <div className="right">
                <div className="img-box">
                  <img src={val.img} alt={val.title} width={220} height={190} />
                </div>
                <h3 style={{ textAlign: "center" }}>{val.title}</h3>
                <p style={{ textAlign: "center", padding: "0px 20px" }}>
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <p
          style={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "40px",
            fontWeight: "600",
            color:'white'
          }}
        >
          Learn skills, Market will be yours.
        </p>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  sliderContent: state.sliderContent,
});
const mapDispatchToProps = {
  setSliderContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideCard);
