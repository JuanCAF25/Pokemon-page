import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Spacer,
  Radio,
  useTheme,
} from "@nextui-org/react";
import { Layout } from "./Layout";
import { SwitchTheme } from "../SwitchTheme";
import Image from "next/image";
import NextLink from "next/link";
import Pokemon from "../../../imgs/pokemon.png";
import Pokebola from "../../../imgs/Pokebola2.png";

export default function Navibar() {
  // const [variant, setVariant] = React.useState("default");
  // const [activeColor, setActiveColor] = React.useState("primary");

  const { isDark } = useTheme();

  // const variants = [
  //   "default",
  //   "highlight",
  //   "highlight-solid",
  //   "underline",
  //   "highlight-rounded",
  //   "highlight-solid-rounded",
  //   "underline-rounded",
  // ];

  // const colors = ["primary", "secondary", "success", "warning", "error"];
  const collapseItems = ["Inicio", "Favoritos", "Contacto"];

  const colores = "warning";
  const variantes = "highlight-rounded";

  return (
    <Layout>
      <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <NextLink href="/" passHref>
            <Image src={Pokebola} alt="Pokebola logo" width={50} height={50} />
          </NextLink>
          {/* <AcmeLogo /> */}
          <Text b color="inherit" hideIn="xs" css={{ marginLeft: "10px" }}>
            <NextLink href="/" passHref>
              <h3>Pokemon</h3>
            </NextLink>
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={colores} hideIn="xs" variant={variantes}>
          <Navbar.Link href="/">
            <Image src={Pokemon} alt="Pokemon logo" />
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} color={colores} href="/favorites">
              Favoritos
            </Button>
          </Navbar.Item>
          <SwitchTheme />
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={
                  item === "Inicio"
                    ? "/"
                    : item === "Favoritos"
                    ? "/favorites"
                    : "/contact "
                }
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
