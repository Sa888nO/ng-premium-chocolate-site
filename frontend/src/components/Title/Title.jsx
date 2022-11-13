import styled from "styled-components";

const MainTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
  padding: 0px 0 30px 0;
  text-align: center;
`;

const Title = ({ title, ...props }) => {
  return <MainTitle {...props}>{title}</MainTitle>;
};

export default Title;
