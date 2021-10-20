import { css } from "styled-components"

const global = css`
  :root {
    --off-white: #f4efde;
    --gold: #d3af5b;
    --shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
    font-size: 15px;
  }

  body {
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.6;
    position: relative;
    min-height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Gibsons Co", sans-serif;
    color: var(--gold);
    font-weight: 400;
    line-height: 1;
  }

  h1 {
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5,
  h6 {
    font-size: 1.25rem;
  }

  p,
  a {
    font-size: 1rem;
  }

  .button {
    display: inline-block;
    background: none;
    border: 2px solid var(--gold);
    color: var(--gold);
    min-width: 200px;
    outline: none;
    padding: 10px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    margin-bottom: 0;
    :hover {
      background: var(--gold);
      color: var(--off-white);
    }
    :focus,
    :active {
      outline: none;
    }
  }

  .button-alt {
    display: inline-block;
    background: none;
    border: none;
    color: var(--gold);
    outline: none;
    padding: 0;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    margin-bottom: 0;
    :hover {
      text-decoration: underline;
    }
    :focus,
    :active {
      outline: none;
    }
  }

  .terms {
    font-size: 0.8rem;
    color: #000;
  }
`

export default global
