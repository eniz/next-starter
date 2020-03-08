import * as S from "./style";

const ProfileCard = ({
  name,
  avatar_url,
  bio,
  location,
  public_repos,
  public_gists
}) => (
  <S.Card>
    <S.Image src={avatar_url} />
    <S.Title>{name}</S.Title>
    <S.Bio>
      {bio} {location}
    </S.Bio>
    <S.RepoStats>Public Repos: {public_repos}</S.RepoStats>
    <S.RepoStats>Public Gists: {public_gists}</S.RepoStats>
  </S.Card>
);

export default ProfileCard;
