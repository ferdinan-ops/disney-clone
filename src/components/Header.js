import styled from "styled-components";
import { useEffect, useState } from "react";
import { auth, provider } from "../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  // selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const [active, setActive] = useState("");
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const history = useNavigate();

  // fungsi utk parse data login ke userSlice.js dgn dispatch
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  // fungsi utk handle kondisi login dan logout
  const handleAuth = () => {
    if (!userName) {
      // Code jika login kirim data login ke setUser, serta lakukan popup box login
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (userName) {
      // Code utk logout dr akun google
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  // fungsi jika userName berubah maka akan merender ulang
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/home");
      }
    });
  }, [userName]);

  const handleHamburger = () => setActive("active");

  return (
    <Nav>
      {userName && (
        <Hamburger onClick={handleHamburger}>
          <span />
          <span />
          <span />
        </Hamburger>
      )}
      <Logo>
        <img src="/images/logo.svg" alt=".." />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu className={active}>
            <img
              src="/images/close-icon.svg"
              alt=""
              onClick={() => setActive("")}
            />
            <a href="/home">
              <img src="/images/home-icon.svg" alt=".." />
              <span>Home</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt=".." />
              <span>Search</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt=".." />
              <span>Watchlist</span>
            </a>
            <a href="/original">
              <img src="/images/original-icon.svg" alt=".." />
              <span>Originals</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt=".." />
              <span>Movies</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt=".." />
              <span>Series</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <Dropdown>
              <span onClick={handleAuth}>Sign Out</span>
            </Dropdown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090b13;
  height: 70px;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  max-height: 70px;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;
const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    & {
      display: flex;
    }
  }

  span {
    display: inline-block;
    height: 1px;
    width: 18px;
    background-color: white;
    margin-bottom: 6px;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  margin: 0 auto 0 25px;

  img {
    display: none;
  }

  @media (max-width: 768px) {
    & {
      flex-flow: unset;
      align-items: unset;
      justify-content: unset;
      display: flex;
      position: absolute;
      top: 0;
      left: -26px;
      width: 75vw;
      background-color: #192133;
      padding: 55px 20px;
      gap: 30px;
      height: 100vh;
      flex-direction: column;
      transform: translate(-75vw, 0);
      transition: 0.3s;

      img {
        display: block;
        width: 30px;
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      margin: -4px 5px 0 0;
      display: unset;

      @media (max-width: 768px) {
        & {
          display: none;
        }
      }
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      position: relative;

      /* span */
      &::before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        right: 0;
        left: 0;
        height: 2px;
        opacity: 0;
        position: absolute;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    /* a href */
    &:hover {
      span::before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgba(19, 19, 19);
  border: 1px solid rgba(151, 151, 151);
  border-radius: 4px;
  box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
  padding: 10px 5px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    & {
      width: 40px;
      height: 40px;
    }
  }

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
