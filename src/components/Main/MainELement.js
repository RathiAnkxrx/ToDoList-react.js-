import styled from "styled-components";
import { COLOR, WIDTH } from "../../constant";

export const MainContainer = styled.section`
  width: 100%;
  background: ${COLOR.skyBlue};
  height: 100%;
  padding: 0 2.4rem;
`;

export const MainWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  min-height: calc(100vh - 7.8rem);
  height: min-content;
  margin: 0 auto;
  padding: 6.8rem 0 4.8rem;
`;

export const ListItems = styled.ul``;

export const Items = styled.li`
  color: ${COLOR.indigoDarker};
  position: relative;
  font-weight: 700;
  margin-bottom: 1.8rem;
  font-size: 2.4rem;
  height: 5.4rem;
  background: #fff;
  padding: 0 2.4rem;
  padding-left: 4.8rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05, 1.01);
    background: ${COLOR.navyDark};
    color: ${COLOR.skyBlue};
  }
`;

export const ItemNumber = styled.span`
  position: absolute;
  top: 50%;
  left: -0.8rem;
  content: "";
  font-weight: 700;
  font-size: 1.4rem;
  width: 4.2rem;
  height: 2.8rem;
  color: #fff;
  transform: translateY(-50%);
  background: ${COLOR.cherry};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFound = styled.p`
  color: ${COLOR.navyDark};
  font-size: 2.4rem;
  width: 100%;
  justify-content: center;
  display: flex;
  font-weight: 700;
`;
