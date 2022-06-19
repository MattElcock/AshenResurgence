import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

type AppLayoutProps = {
  header: ReactNode;
  nav: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

const AppLayout = ({ header, nav, children, footer }: AppLayoutProps) => {
  const templateAreas = `
        "header header"
        "nav main"
        "nav footer"
    `;

  return (
    <Grid
      templateAreas={templateAreas}
      gridTemplateRows="auto 1fr auto"
      gridTemplateColumns="1fr 4fr"
      h="100vh"
    >
      <GridItem area="header" bg="gray.900">
        {header}
      </GridItem>
      <GridItem area="nav" bg="gray.700">
        {nav}
      </GridItem>
      <GridItem area="main" bg="gray.600">
        {children}
      </GridItem>
      <GridItem area="footer" bg="gray.600">
        {footer}
      </GridItem>
    </Grid>
  );
};

export { AppLayout };
