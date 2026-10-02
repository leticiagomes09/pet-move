import { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './src/components/Header';
import TabBar from './src/components/TabBar';

import TelaInicio from './src/screens/TelaInicio';
import TelaMedidor from './src/screens/TelaMedidor';
import TelaHistorico from './src/screens/TelaHistorico';
import TelaSobre from './src/screens/TelaSobre';

export default function App() {

  const [abaAtual, setAbaAtual] = useState('inicio');

  const [historico, setHistorico] = useState([]);

  const adicionarMedicao = (novaMedicao) => {
    setHistorico((historicoAtual) => [
      novaMedicao,
      ...historicoAtual
    ]);
  };

  const limparHistorico = () => {
    setHistorico([]);
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="dark" />

      <Header />

      <View style={styles.conteudo}>

        {abaAtual === 'inicio' && (
          <TelaInicio
            onNavegarMedidor={() => setAbaAtual('nivel')}
          />
        )}

        {abaAtual === 'nivel' && (
          <TelaMedidor
            onSalvar={adicionarMedicao}
          />
        )}

        {abaAtual === 'historico' && (
          <TelaHistorico
            historico={historico}
            onLimpar={limparHistorico}
          />
        )}

        {abaAtual === 'sobre' && (
          <TelaSobre />
        )}

      </View>

      <TabBar
        abaAtual={abaAtual}
        onSelecionarAba={setAbaAtual}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F5',
  },

  conteudo: {
    flex: 1,
  },
});