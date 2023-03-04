import styled from "styled-components";

const NavbarContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 150px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    ul {
      li {
        display: inline-block;
        margin: 1.1rem 2rem;
        font-size: 1.2rem;
        font-weight: bold;
        border-bottom: 3px solid transparent;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          border-bottom: 3px solid #000;
        }
        a {
          text-decoration: none;
          color: #000;
        }
      }
    }

    .active {
      border-bottom: 3px solid #000;
    }
  }
`;

export default NavbarContainer;
