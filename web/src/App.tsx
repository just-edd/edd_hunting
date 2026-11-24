import React from "react";
import ScaleFade from "./transitions/ScaleFade";
import useNuiEvent from "./hooks/useNuiEvent";
import { debugData } from "./utils/debugData";

debugData([
  {
    action: 'open',
    data: {}
  }
]);

const App: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  useNuiEvent('open', (data) => {
    setVisible(true);
  });
  
  return (
    <ScaleFade visible={visible}>
      <>
        
      </>
    </ScaleFade>
  )
};

export default App;