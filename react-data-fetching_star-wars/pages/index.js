import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  console.log("data: ", data);

  const characters = data.results;

  const characterNamesAndIndices = characters.map((character, index) => ({
    name: character.name,
    index: index + 1,
  }));

  console.log("characterNamesAndIndices: ", characterNamesAndIndices);

  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <List>
        {characterNamesAndIndices.map((character) => {
          return (
            <li key={character.name}>
              <StyledLink href={`/characters/${character.index}`}>
                {character.name}
              </StyledLink>
            </li>
          );
        })}
      </List>
    </Layout>
  );
}

const List = styled.ul`
  background-color: var(--color-light);
  list-style-type: "➡️ ";
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-dark);
`;
