import { useState, useEffect } from "react";
import "./App.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  const [activeType, setActiveType] = useState("water");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [record, setRecord] = useState(() => {
    const savedRecord = localStorage.getItem("record");
    return savedRecord !== null ? parseInt(savedRecord) : 0;
  });

  useEffect(() => {
    const savedRecord = localStorage.getItem("record");
    if (savedRecord !== null) {
      setRecord(parseInt(savedRecord));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("record", record);
  }, [record]);

  const getRecord = (newScore) => {
    if (newScore > record) setRecord(newScore);
  };

  const checkAndChangeArena = () => {
    if (score === 9 && round === 1) {
      // Vérifie si on doit changer d'arène
      if (activeType === "water") {
        setActiveType("grass");
      } else if (activeType === "grass") {
        setActiveType("fire");
      } else {
        setActiveType("water");
      }
      setRound(2);
    } else if (score === 18 && round === 2) {
      // Vérifie si on doit changer d'arène
      if (activeType === "water") {
        setActiveType("grass");
      } else if (activeType === "grass") {
        setActiveType("fire");
      } else {
        setActiveType("water");
      }
      setRound(3);
    }
  };

  // Effectuer cette vérification à chaque changement de score
  useEffect(() => {
    checkAndChangeArena();
  }, [score, activeType]);

  return (
    <>
      <div
        className="relative bg-cover bg-center h-full flex flex-col"
        style={{ backgroundImage: `url(/src/assets/${activeType}-gym.png)` }}
      >
        <Header setActiveType={setActiveType} score={score} record={record} />
        <Body
          activeType={activeType}
          setScore={setScore}
          getRecord={getRecord}
        ></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
