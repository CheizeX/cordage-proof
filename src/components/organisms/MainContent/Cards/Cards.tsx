import { FC, useMemo } from "react";
import data from "../../../../data/BU.json";
import * as S from "./Cards.styles";
import Image1 from "/images/1.png";
import Image2 from "/images/2.png";
import Image3 from "/images/3.png";
import Image4 from "/images/4.png";
import Avatar from "../../../atoms/Avatar/Avatar";
import IconButton from "../../../molecules/IconButton/IconButton";
import { theme } from "../../../../themes/theme";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image1,
  Image2,
  Image3,
  Image4,
  Image1,
  Image2,
  Image3,
  Image4,
];

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
          <S.StyledCardHeader img={images[index]}>
            <Avatar
              outlined
              shadow={index === 0}
              star={index === 0}
              text={item.description}
              backgroundcolor={randomColor(index)}
              size={42}
            />
            <IconButton
              icon='/DotsThreeOutline.svg'
              backgroundcolor='#FFFFFF66'
            />
          </S.StyledCardHeader>
          <S.StyledCardBody>
            <h1>{item.description}</h1>
            <h2>{item.name}</h2>
            <p>
              A business unit is an independent entity within an organization,
              such as companies or locations.{" "}
            </p>
          </S.StyledCardBody>

          <S.StyledCardFooter>
            <div>
              <span>PST32</span>
              {["Britain", "Globe", "CalendarBlank", "CirclesFour"].map(
                (icon, index) => (
                  <IconButton
                    key={index}
                    icon={`/${icon}.svg`}
                    iconsize={"20px"}
                  />
                )
              )}
            </div>
            <div>
              <Avatar
                text={item.responsible.first_name}
                backgroundcolor={theme.colors["--green500"]}
                size={32}
              />
            </div>
          </S.StyledCardFooter>
        </S.StyledCard>
      ))}
    </S.StyledCardsContainer>
  );
};

export default Cards;
