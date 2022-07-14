import { useState } from "react";
import styles from './App.module.css';
import Layout from "./components/layout/Layout";
import WelcomeScreen from './components/welcome-screen/Welcome';

function App() {
  const [firstTimePlaying, setFirstTimePlaying] = useState(true);

  return (
    <div className={styles["app"]}>
      {firstTimePlaying && <WelcomeScreen setFirstTimePlaying={setFirstTimePlaying} />}
      {!firstTimePlaying && <Layout />}
    </div>
  );
}

export default App;
