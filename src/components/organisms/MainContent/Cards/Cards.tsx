import { FC, useMemo } from "react";
import data from "../../../../data/BU.json";
import * as S from "./Cards.styles";

const Cards: FC<any> = ({ randomColor, search }) => {
  const currentPageData = useMemo(
    () =>
      search
        ? data.filter((item) => {
            return (
              item.description.toLowerCase().includes(search.toLowerCase()) ||
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.responsible.first_name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              item.responsible.last_name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              item.responsible.email
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              item.code.toLowerCase().includes(search.toLowerCase()) ||
              item.address.country
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              item.address.location.toLowerCase().includes(search.toLowerCase())
            );
          })
        : data,
    [search]
  );

  return (
    <S.StyledCardsContainer>
      {currentPageData.map((item: any, index: number) => (
        <S.StyledCard key={index} color={randomColor(index)}>
          <S.StyledCardHeader></S.StyledCardHeader>
          {/* <S.StyledCardBody>
          <S.StyledCardBodyText>{item.description}</S.StyledCardBodyText>
        </S.StyledCardBody> */}
          {/* <S.StyledCardFooter>
          <S.StyledCardFooterText>
            {item.responsible.first_name} {item.responsible.last_name}
          </S.StyledCardFooterText>
          <S.StyledCardFooterText>{item.address.country}</S.StyledCardFooterText>
          <S.StyledCardFooterText>{item.address.location}</S.StyledCardFooterText>
        </S.StyledCardFooter> */}
        </S.StyledCard>
      ))}
    </S.StyledCardsContainer>
  );
};

export default Cards;
