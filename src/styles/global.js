import { css } from "styled-components"

const global = css`
  :root {
    --off-white: #f4efde;
    --gold: #d3af5b;
    --shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
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
    font-size: 11px;
  }
`

export default global
