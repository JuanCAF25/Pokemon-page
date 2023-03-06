import { Layout } from "../../components/layouts";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { pokeApi } from "../../api";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import StarsolidW from "../../imgs/star-solid-24 W.png";
import Star from "../../imgs/star-regular-24 W.png";
import { getPokemonInfo, localFavorites } from "../../utils";
import { useState } from "react";
import confetti from "canvas-confetti";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorities = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.8 },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  pokemon.sprites.front_shiny
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                size="sm"
                color="gradient"
                ghost={!isInFavorites}
                onPress={onToggleFavorities}
                css={{ borderRadius: "40px" }}
              >
                {isInFavorites ? (
                  <Image src={StarsolidW} alt={"starSolid"} />
                ) : (
                  <Image src={Star} alt={"star"} />
                )}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container
                display="flex"
                css={{ justifyContent: "space-between" }}
              >
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>

              {/* <Text size={30}>Abilities:</Text>
              <Container display="flex">
                {pokemon.abilities.map((ability) => (
                  <Text
                    key={ability.ability.name}
                    size={20}
                    css={{ marginRight: "15px" }}
                  >
                    {ability.ability.name}
                  </Text>
                ))}
              </Container>

              <Text size={30}>Moves:</Text>
              <Container display="flex">
                {pokemon.moves.map((move) => (
                  <Text
                    key={move.move.name}
                    size={20}
                    css={{
                      marginRight: "15px",
                      justifyContent: "space-between",
                    }}
                  >
                    {move.move.name}
                  </Text>
                ))}
              </Container> */}
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokemons151 = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemons151.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonByNamePage;
