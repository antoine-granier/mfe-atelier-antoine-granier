import React, { Suspense } from "react";

const Header = React.lazy(() => import("header/Header"));

const App = () => (
  <Suspense fallback={<div>Loading Header...</div>}>
    <Header />
    <main>
      <p>Bienvenue dans l'App Shell</p>
    </main>
  </Suspense>
);

export default App;
