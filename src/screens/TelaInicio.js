import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default function TelaInicio({ onNavegarMedidor }) {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Pet principal */}
      <View style={styles.cardPet}>

        <View style={styles.fotoPet}>
          <Text style={styles.emojiPet}>🐶</Text>
        </View>

        <View style={styles.infoPet}>
          <Text style={styles.nome}>Mike</Text>

          <Text style={styles.raca}>
            Golden Retriever • 2 anos
          </Text>

          <View style={styles.statusPet}>
            <View style={styles.bolinha} />
            <Text style={styles.statusTexto}>
              Monitoramento parado
            </Text>
          </View>
        </View>

      </View>

      {/* Resumo */}
      <Text style={styles.tituloSecao}>
        Resumo de hoje
      </Text>

      <View style={styles.resumo}>

        <View style={styles.itemResumo}>
          <Text style={styles.iconeResumo}>🐾</Text>
          <Text style={styles.valor}>35 min</Text>
          <Text style={styles.rotulo}>Em movimento</Text>
        </View>

        <View style={styles.itemResumo}>
          <Text style={styles.iconeResumo}>💚</Text>
          <Text style={styles.valor}>1h 20</Text>
          <Text style={styles.rotulo}>Em repouso</Text>
        </View>

      </View>

      {/* Dica */}
      <View style={styles.cardDica}>

        <Text style={styles.tituloDica}>
          💡 Dica de bem-estar
        </Text>

        <Text style={styles.textoDica}>
          Mike já realizou 35 minutos de atividade hoje.
          Continue acompanhando os movimentos para
          manter uma rotina saudável.
        </Text>

      </View>

      {/* Botão */}
      <TouchableOpacity
        style={styles.botao}
        onPress={onNavegarMedidor}
        activeOpacity={0.8}
      >

        <Text style={styles.botaoTexto}>
          🐾 Iniciar monitoramento
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 16,
  },

  cardPet: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F0DDDA',
  },

  fotoPet: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#F9E5E1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  emojiPet: {
    fontSize: 42,
  },

  infoPet: {
    flex: 1,
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#492F2F',
  },

  raca: {
    fontSize: 12,
    color: '#8A7775',
    marginTop: 4,
  },

  statusPet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  bolinha: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D5A02E',
    marginRight: 6,
  },

  statusTexto: {
    fontSize: 11,
    color: '#8A7775',
  },

  tituloSecao: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#492F2F',
    marginBottom: 10,
  },

  resumo: {
    flexDirection: 'row',
    marginBottom: 14,
  },

  itemResumo: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 15,
    marginRight: 7,
    borderWidth: 1,
    borderColor: '#F0DDDA',
  },

  iconeResumo: {
    fontSize: 22,
    marginBottom: 8,
  },

  valor: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#492F2F',
  },

  rotulo: {
    fontSize: 11,
    color: '#8A7775',
    marginTop: 3,
  },

  cardDica: {
    backgroundColor: '#FFF0EC',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },

  tituloDica: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7F3039',
    marginBottom: 7,
  },

  textoDica: {
    fontSize: 13,
    lineHeight: 19,
    color: '#6E5552',
  },

  botao: {
    backgroundColor: '#A94450',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

});