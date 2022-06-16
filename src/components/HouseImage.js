import houseImage from "../assets/images/houseimage.svg";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  max-width: 700px;
`;

const HouseImage = () => {
  return <Image src={houseImage} alt="house-image"></Image>;
};
export default HouseImage;
