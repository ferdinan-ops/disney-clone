import styled, { keyframes } from "styled-components";

const LazyLoad = () => {
  return (
    <>
      <Wrap>
        <div></div>
      </Wrap>
      <Wrap>
        <div></div>
      </Wrap>
      <Wrap>
        <div></div>
      </Wrap>
      <Wrap>
        <div></div>
      </Wrap>
    </>
  );
};

const loading = keyframes`
0% {
  background: #12141F;
}

100% {
  background: #212535;
}
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid #353845;
  background-color: #ddd;
  animation: ${loading} 1s linear infinite alternate;

  div {
    inset: 0;
    display: block;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    animation: ${loading} 1s linear infinite alternate;
  }
`;

export default LazyLoad;
