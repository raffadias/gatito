import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import TelaPadrao from './src/components/TelaPadrao/TelaPadrao';
import Rotas from './src/rotas';


export default function App() {
  return (
    <TelaPadrao>
    <Rotas/>
    </TelaPadrao>
  );
}
