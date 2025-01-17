import { Outlet } from "react-router-dom";
import { useState } from 'react';

const App = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;