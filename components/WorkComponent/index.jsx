import Router from "next/router";
import styled from "styled-components";
import WorkCard from "./components/WorkCard";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;

  @media screen and (max-width: 700px) {
    grid-template-rows: 1fr;
    grid-template-columns: auto;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
  }
`;

const Section = styled.section`
  .not--active:hover {
    transform: scale(1.1);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .i1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .i2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .i3 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .i4 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .i5 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .i6 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .i7 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .i8 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .i9 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .active {
    z-index: 100;
    grid-column: 1/4;
    grid-row: 1/4;
    transform: none;
  }

  @media screen and (max-width: 700px) {
    .not--active:hover {
      transform: none;
      box-shadow: none;
    }

    .active {
      z-index: 100;
      height: 100vh;
      width: 100vw;
      transform: none;
    }
    .i1 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .i2 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    .i3 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    .i4 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 5;
    }

    .i5 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 5;
      grid-row-end: 6;
    }

    .i6 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 6;
      grid-row-end: 7;
    }

    .i7 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 7;
      grid-row-end: 8;
    }

    .i8 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 8;
      grid-row-end: 9;
    }

    .i9 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 9;
      grid-row-end: 10;
    }

    .portfolio__item {
      min-height: 20vh;
    }
  }
`;

const data = [
  "http://distracted-goldwasser-aaeb24.bitballoon.com/",
  "http://practical-wright-58b89a.bitballoon.com/",
  "#",
  "#",
  "http://nervous-mclean-17152f.bitballoon.com/",
  "#",
  "#",
  "#",
  "https://relaxed-poincare-7d9478.netlify.com/"
];
class WorkComponent extends React.Component {
  state = { active: null };

  selectActive = selection => {
    this.setState({ active: selection });
  };

  render() {
    const { active } = this.state;
    console.log(active, active === 4 ? "active" : "null");
    return (
      <Section>
        <Grid className="portfolio">
          {data.map((data, i) => (
            <WorkCard
              selectActive={this.selectActive}
              active={active}
              url={data}
              i={i}
            />
          ))}
        </Grid>
      </Section>
    );
  }
}

export default WorkComponent;
