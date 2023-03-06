import { Card, Grid, Text } from "@nextui-org/react";
import { Router, useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onClick={onFavoriteClick}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={150}
        />

        <Card.Footer>
          <Text h3 transform="capitalize">
            {pokemonId}
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
