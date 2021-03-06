import { createGlobalStyle } from 'styled-components';
import iconCheck from '../images/icon-check.svg';

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.25s;
    letter-spacing: -0.25px;
  }

  #completed {
      text-decoration: line-through;
      color: ${({ theme }) => theme.completed};
  }

  footer {
      font-size: 14px;
      color: ${({ theme }) => theme.text};
  }

  ::placeholder{
    color: ${({ theme }) => theme.placeholderColor};
  }

  .container {
    margin-left: 3.2rem;
    display: block;
    position: relative;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark-2 {
    position: absolute;
    top: -4px;
    left: -3.15rem;
    height: 25px;
    width: 25px;
    background-color: none;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    cursor: pointer;
  }

  .container input:checked ~ .checkmark-2 {
    background: linear-gradient(90deg, rgba(87,221,255,1) 0%, rgba(192,88,243,1) 100%);
    border: none;
  }

  .checkmark-2:after {
    content: url(${iconCheck});
    position: absolute;
    display: none;
    top: 3.2px;
    left: 6.75px;
  }

  .container input:checked ~ .checkmark-2:after {
    display: block;
  }

  .cross {
    display: none;
  }

  h1 {
    font-size: 40px;
  }

  li {
    list-style: none;
  }

  p {
    cursor: pointer;
  }

  .todocard:hover .cross { display: block };

  #all,
  #active,
  #complete {
    color: #3a7cfd;
  }

  .items-middle-mobile {
    display: none;
  }

  @media (max-width: 600px) {

    .items-middle-mobile {
      display: flex;
      justify-content: center;
      padding: 1.2rem;
      margin-top: 1rem;
      background: ${({ theme }) => theme.formBackground};
      border-radius: 5px;
      font-size: 14px;
       
    }

    .items-middle-mobile p {
      margin: 0 0.6rem;
      color: ${({ theme }) => theme.text};
      font-weight: 700;
      transition: all 0.25s;
    }

    .items-middle-mobile p:hover {
      color: ${({ theme }) => theme.filterTabHover};
    }

    .checkmark-2:after {
      top: 8px;
    }
  }
 `;
