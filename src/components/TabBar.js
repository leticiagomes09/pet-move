import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function TabBar({ abaAtual, onSelecionarAba }) {

  const abas = [
    {
      id: 'inicio',
      icone: '🏠',
      rotulo: 'Início'
    },
    {
      id: 'nivel',
      icone: '🐾',
      rotulo: 'Passeio'
    },
    {
      id: 'historico',
      icone: '📋',
      rotulo: 'Histórico'
    },
    {
      id: 'sobre',
      icone: '⚙️',
      rotulo: 'Sobre'
    },
  ];

  return (
    <View style={styles.barra}>

      {abas.map((aba) => {

        const ativa = abaAtual === aba.id;

        return (
          <TouchableOpacity
            key={aba.id}
            style={styles.aba}
            onPress={() => onSelecionarAba(aba.id)}
            activeOpacity={0.7}
          >

            <Text style={styles.icone}>
              {aba.icone}
            </Text>

            <Text
              style={[
                styles.texto,
                ativa && styles.textoAtivo
              ]}
            >
              {aba.rotulo}
            </Text>

          </TouchableOpacity>
        );

      })}

    </View>
  );
}

const styles = StyleSheet.create({

  barra: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0DDDA',
    paddingVertical: 8,
  },

  aba: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },

  icone: {
    fontSize: 18,
    marginBottom: 3,
  },

  texto: {
    fontSize: 11,
    color: '#8A7775',
    fontWeight: '600',
  },

  textoAtivo: {
    color: '#A94450',
    fontWeight: 'bold',
  },

});