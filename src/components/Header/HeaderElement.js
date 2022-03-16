import styled from "styled-components";
import { COLOR, WIDTH } from "../../constant";

export const HeaderContainer = styled.section`
  width: 100%;
  background: ${COLOR.navyDark};
  padding: 0 2.4rem;
`;

export const HeaderWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  margin: 0 auto;
  height: 7.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  right: 1rem;
  fill: #141625;
`;

export const SearchItem = styled.input`
  width: 28rem;
  height: 3.4rem;
  border-radius: 0.4rem;
  border: none;
  padding: 0 1.8rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  &:focus {
    outline: none;
  }
`;

export const AddItemContainer = styled.div`
  width: 4.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  &:before {
    display: none;
    position: absolute;
    content: "";
    height: 100%;
    width: 1px;
    left: -2.4rem;
    top: 0;
    bottom: 0;
    background: ${COLOR.grayish};
  }
`;
