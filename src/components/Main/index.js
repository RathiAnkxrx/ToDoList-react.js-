import {
  Items,
  MainContainer,
  MainWrapper,
  ListItems,
  ItemNumber,
  NotFound,
} from "./MainELement";

import { useSelector } from "react-redux";
import { useState } from "react";

const List = () => {
  const { items } = useSelector((state) => state.addNewItem);
  const { inputItem } = useSelector((state) => state.inputSearch);
  let isFound = false;
  return (
    <MainContainer>
      <MainWrapper>
        {inputItem && (
          <ListItems>
            {items.map((item, index) => {
              if (item.toLowerCase() === inputItem.toLowerCase()) {
                isFound = true;
                return (
                  <Items key={index}>
                    {item}
                    <ItemNumber>
                      {index < 10 ? `0${index + 1}` : index + 1}
                    </ItemNumber>
                  </Items>
                );
              }
            })}
            {!isFound && <NotFound>No Items Found </NotFound>}
          </ListItems>
        )}

        {!inputItem && (
          <ListItems data-aos="zoom-in" data-aos-duration="1000">
            {items.map((item, index) => {
              return (
                <Items>
                  {item}
                  <ItemNumber>
                    {index < 10 ? `0${index + 1}` : index + 1}
                  </ItemNumber>
                </Items>
              );
            })}
          </ListItems>
        )}
      </MainWrapper>
    </MainContainer>
  );
};

export default List;
