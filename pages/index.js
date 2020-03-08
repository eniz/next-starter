import Title from "../components/Title";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

import fetcher from "../helpers/fetcher";
import useGithubProfile from "../hooks/useGithubProfile";

const USERNAME = "eniz";

function Index(props) {
  const initialData = props.data;
  const { data, error } = useGithubProfile(USERNAME, { initialData });
  if (!data) return "Loading...";
  if (error) return "Something went wrong";

  return (
    <Layout>
      <Title />
      <ProfileCard {...data} />
    </Layout>
  );
}

Index.getInitialProps = async () => {
  const data = await fetcher(`https://api.github.com/users/${USERNAME}`);
  return { data };
};

export default Index;
