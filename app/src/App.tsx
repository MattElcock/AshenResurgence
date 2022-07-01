import React from "react";

import { AppLayout } from "layouts/AppLayout";
import { Header } from "components/Header";
import { Nav } from "components/Nav";

function App() {
  return (
    <AppLayout header={<Header />} nav={<Nav />}>
      <p>Hello</p>
    </AppLayout>
  );
}

export default App;
