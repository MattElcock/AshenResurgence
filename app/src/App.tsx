import React from "react";

import { AppLayout } from "layouts/AppLayout";
import { Header } from "components/Header";

function App() {
  return (
    <AppLayout header={<Header />} nav={<p>Nav</p>} footer={<p>Footer</p>}>
      <p>Content</p>
    </AppLayout>
  );
}

export default App;
