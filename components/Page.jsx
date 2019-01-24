import React from "react";
import Nav from "./Nav";
import Head from "./Head";
import Footer from "../components/Footer";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 50px 1fr;
  min-height: 100vh;

  .nav {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  .content {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  @media only screen and (max-width: 700px) {
    .content {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }

    .nav {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }
  }
`;

const Page = props => {
  return (
    <>
      <Head />
      <Grid className="scroll-disable fade-out">
        <div className="nav">
          <Nav />
        </div>
        <div className="content">{props.children}</div>
        <Footer />
      </Grid>
    </>
  );
};

export default Page;
