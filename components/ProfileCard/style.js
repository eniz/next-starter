import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  text-align: center;
  font-family: arial;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1``;

const Bio = styled.p`
  color: gray;
  font-size: 18px;
`;

const RepoStats = styled.div``;

export { Card, Bio, Title, Image, RepoStats };
