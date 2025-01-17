import { Outlet } from "react-router-dom";
import { useState } from 'react';

import styles from "./styles/route.module.css";

const App = () => {
  return (
    <main className={styles.entry}>
      <Outlet />
    </main>
  );
}

export default App;
