import React from "react";
import { Global, css } from "@emotion/core";
import Background from "./bg.png";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        ,
        body {
          background-image: url(${Background});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: fixed;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0;
          font-family: "Helvetica Neue", sans-serif;
        }
        ,
        h1 {
          font-size: 160px;
          color: white;
        }
        ,
        h2 {
          font-size: 60px;
          color: #bf9cf0;
        }
        ,
        a {
          font-size: 20px;
          color: #ff00ae;
        }
        ,
        a:hover {
          font-size: 30px;
          transition: 0.1s all linear;
        }
      `}
    />
  );
}
