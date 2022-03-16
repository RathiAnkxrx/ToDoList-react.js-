import {
  AddItemContainer,
  HeaderContainer,
  HeaderWrapper,
  SearchContainer,
  SearchIcon,
  SearchItem,
} from "./HeaderElement";

import { BsPlusLg } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/addItem";
import { searchItem } from "../../store/searchItem";
const Header = () => {
  const dispatch = useDispatch();
  const randomWords = require("random-words");
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <SearchContainer>
          <SearchItem
            placeholder="search"
            onChange={(e) => dispatch(searchItem(e.target.value))}
          />
          <SearchIcon>
            <ImSearch
              style={{
                width: "100%",
                height: "100%",
                fill: "#ff5a5f",
              }}
            />
          </SearchIcon>
        </SearchContainer>
        <AddItemContainer
          onClick={() => dispatch(addItem(randomWords()))}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <BsPlusLg
            style={{
              width: "60%",
              height: "60%",
              fill: "#ff5a5f",
            }}
          />
        </AddItemContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
