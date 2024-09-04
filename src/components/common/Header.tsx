import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>NewNop</h1>
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

  @media (max-width: 768px) {
    padding: 16px;
    h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;
    h1 {
      font-size: 14px;
    }
  }
`;

export default Header;
