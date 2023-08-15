import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        body {
          overflow-x: hidden;

          img {
            height: auto;
            max-width: 100%;
          }
          .slick-slide {
            scale: 0.8;
            opacity: 0.3;
          }
          .slick-center {
            scale: 1.2;
            opacity: 1;
          }
          .slick-prev,
          .slick-next {
            z-index: 13;
            width: 45px;
            height: 90px;
          }
          .slick-prev {
            left: 0%;
          }
          .slick-next {
            right: 0%;
          }
          .slick-prev:before {
            background-image: url("/img/arrowPrevGray.png");
            content: "";
            display: inline-block;
            width: 25px;
            height: 50px;
            background-size: 25px 50px;
          }
          .slick-next:before {
            background-image: url("/img/arrowNextGray.png");
            content: "";
            display: inline-block;
            width: 25px;
            height: 50px;
            background-size: 25px 50px;
          }
          @media only screen and (min-width: 992px) {
            .slick-prev,
            .slick-next {
              z-index: 13;
              width: 45px;
              height: 90px;
            }
            .slick-prev {
              left: 5%;
            }
            .slick-next {
              right: 5%;
            }
            .slick-prev:before,
            .slick-next:before {
              width: 45px;
              height: 90px;
              background-size: 45px 90px;
            }
          }
        }
      `}
    />
  );
};

export default GlobalStyle;
