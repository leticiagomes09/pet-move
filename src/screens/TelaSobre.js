import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default function TelaSobre() {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.topo}>

        <Text style={styles.logo}>
          🐾
        </Text>

        <Text style={styles.titulo}>
          PetMove
        </Text>

        <Text style={styles.subtitulo}>
          Monitoramento de atividades do pet
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          Sobre o aplicativo
        </Text>

        <Text style={styles.texto}>
          O PetMove é um aplicativo desenvolvido
          para acompanhar os movimentos e atividades
          do animal utilizando o sensor acelerômetro
          do smartphone.
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          Sensor utilizado
        </Text>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>
            Sensor
          </Text>

          <Text style={styles.valor}>
            Acelerômetro
          </Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>
            Eixos
          </Text>

          <Text style={styles.valor}>
            X, Y e Z
          </Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>
            Biblioteca
          </Text>

          <Text style={styles.valor}>
            expo-sensors
          </Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.rotulo}>
            Atualização
          </Text>

          <Text style={styles.valor}>
            200 ms
          </Text>
        </View>

      </View>

      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          Como funciona?
        </Text>

        <Text style={styles.texto}>
          O acelerômetro identifica mudanças no
          movimento do smartphone. O aplicativo
          utiliza essas informações para apresentar
          uma indicação simples do nível de atividade
          do pet.
        </Text>

      </View>

      <Text style={styles.rodape}>
        Projeto acadêmico • Desenvolvimento Mobile
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 16,
  },

  topo: {
    alignItems: 'center',
    marginBottom: 18,
  },

  logo: {
    fontSize: 45,
  },

  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#492F2F',
    marginTop: 4,
  },

  subtitulo: {
    fontSize: 12,
    color: '#8A7775',
    marginTop: 3,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0DDDA',
  },

  tituloCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7F3039',
    marginBottom: 10,
  },

  texto: {
    fontSize: 13,
    color: '#6E5552',
    lineHeight: 20,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#F7EDEA',
  },

  rotulo: {
    fontSize: 13,
    color: '#8A7775',
  },

  valor: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#492F2F',
  },

  rodape: {
    textAlign: 'center',
    color: '#A99592',
    fontSize: 11,
    marginVertical: 10,
  },

});