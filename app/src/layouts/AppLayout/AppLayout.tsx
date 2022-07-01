import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

type AppLayoutProps = {
  header: ReactNode;
  nav: ReactNode;
  children: ReactNode;
};

const AppLayout = ({ header, nav, children }: AppLayoutProps) => {
  const templateAreas = `
        "header header"
        "nav main"
        "nav main"
    `;

  return (
    <Grid
      templateAreas={templateAreas}
      gridTemplateRows="auto 1fr auto"
      gridTemplateColumns="10rem auto"
      h="100vh"
    >
      <GridItem area="header" bg="blackAlpha.900">
        {header}
      </GridItem>
      <GridItem area="nav" bg="gray.900">
        {nav}
      </GridItem>
      <GridItem area="main" bg="gray.800">
        {children}
      </GridItem>
    </Grid>
  );
};

export { AppLayout };
