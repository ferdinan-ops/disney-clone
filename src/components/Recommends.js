import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { selectRecommend } from "../features/movie/movieSlice";
import LazyLoad from "./LazyLoad";

/* selectRecommend adalah fungsi slice redux yg kita buat 
pada file movieSlice.js yg berguna utk memilah data movie 
dalam firebase berdasarkan type-nya */

/* useSelector adalah hooks dari redux yg berguna menyeleksi 
fungsi selectRecommend */

const Recommend = () => {
  // variabel penampung data dari firebase yg memliki type = recomend;
  const movies = useSelector(selectRecommend);
  console.log(movies);

  return (
    <Container>
      <h3>Recommended for You</h3>
      <Content>
        {/* menampilkan cardImg dgn type recomend dr firebase */}
        {movies ? (
          movies.map((movie, key) => {
            return (
              <Wrap key={key}>
                {movie.id}
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            );
          })
        ) : (
          <LazyLoad />
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-gap: 25px;
  /* grid-template-columns: repeat(8, minmax(0, 1fr)); */
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  /* padding-top: 130%; */
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 9s;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommend;
