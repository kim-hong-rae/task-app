import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <h1 className="">NewNop</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  background-color: #14807d;
  padding: 24px;

  h1 {
    color: white;
    font-size: 18px;
  }
`;
export default Header;
