import styled, { css } from "styled-components";

const invertedButtonStyles = css`
  background-color: #afaaca;
  color: black;
  border: none;

  &:hover {
    background-color: #928ea7;
    border: 1px solid black;
  }
`;

const googleSignInStyles = css`
  background-color: #6886c5;

  &:hover {
    background-color: #abc1f1;
  }
`;

const buttonStyles = css`
  background-color: #d36d8f;
  color: white;
  border: none;
  &:hover {
    background-color: #f1abc8;
    color: black;
  }
`;

const getButtonStyles = (props) => {
  if (props.googleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "PT Sans";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
