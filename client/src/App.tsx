import React, { useState, useEffect, FormEvent } from 'react';
import GlobalStyle from './styles/global';
import Cover from './componentes/cover';
import List from './componentes/List';
import api from './services/api';

interface UrlData {
  id: string;
  url: string;
  shortUrl: string;
  shortCode: string;
  views: number;
  created_at: Date;
  updated_at: Date;
}

const App: React.FC = () => {
  const [urls, setUrl] = useState([])

  useEffect(() => {
    api.get('/').then(response => {
      console.log(response.data)

      setUrl(response.data)
    })
  }, [])

  return (
    <div className="App">
      <Cover />
      <List urldata={urls} />
      <GlobalStyle />
    </div>
  );
}

export default App;
