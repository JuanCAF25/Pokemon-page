import Head from "next/head";
import { PropsWithChildren } from "react";
import { FC } from "react";
import Navibar from "../ui/NavBar/Navibar";

interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="JuanAF" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon , pokedex`} />

        <meta property="og:title" content={`información sobre ${title}`} />
        <meta
          property="og:description"
          content={`esta es la pagina de ${title}`}
        />
        <meta property="og:image" content={`${origin}/imgs/banner.png`} />
      </Head>
      <Navibar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
