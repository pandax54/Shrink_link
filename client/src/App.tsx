import React from 'react';
import GlobalStyle from './styles/global';
import Cover from './componentes/cover';
import List from './componentes/List';

function App() {
  return (
    <div className="App">
      <Cover />
      <List />
      <GlobalStyle />
    </div>
  );
}

export default App;
