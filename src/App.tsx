import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Treść alertu</Alert>
      )}

      <Button onClick={() => setAlertVisibility(true)}>Apply</Button>
    </div>
  );
}

export default App;

/*

import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Radom", "Warszawa", "Kielce", "Gdańsk", "Szczecin"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;


*/
