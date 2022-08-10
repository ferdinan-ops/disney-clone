import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const ImgSlider = () => {
  // setup img slider slick-carousel
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a href="/home">
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a href="/home">
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a href="/home">
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a href="/home">
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

// Konfugasi style slider utk carousel
const Carousel = styled(Slider)`
  margin-top: 20px;

  /* setup button next & previous */
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  /* setup bullets button yg dibawah */
  ul li button {
    &::before {
      font-size: 18px;
      color: rgb(150, 158, 171);
      margin-top: 20px;
    }

    @media (max-width: 768px) {
      &::before {
        font-size: 8px;
      }
    }
  }
  /* Kondisi bullet saat aktif */
  li.slick-active button::before {
    color: white;
  }

  /* ini berguna utk liat gambar selanjutnya
  yg artinya akan ada 3 gambar yaitu sebagian 
  gambar sblmnya, 1 full gambar active dan 
  sebagian gambar selanjutnya */
  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -110px;
  }
  .slick-next {
    right: -110px;
  }
`;

const Wrap = styled.div`
  width: 70%;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
