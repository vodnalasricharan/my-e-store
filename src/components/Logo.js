import styled from "styled-components";
const Logo = () => {
  return (
    <Wrapper>
      <span>Charan</span>Store
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-1);
  font-family: "Quicksand", sans-serif;
  span {
    color: var(--clr-primary-5);
    font-family: "Britney", cursive;
  }
`;

export default Logo;
