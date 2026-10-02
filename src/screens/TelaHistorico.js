import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default function TelaHistorico({
  historico,
  onLimpar
}) {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.cabecalho}>

        <View>
          <Text style={styles.titulo}>
            Histórico
          </Text>

          <Text style={styles.subtitulo}>
            Atividades registradas do Mike
          </Text>
        </View>

        {historico.length > 0 && (
          <TouchableOpacity onPress={onLimpar}>
            <Text style={styles.limpar}>
              Limpar
            </Text>
          </TouchableOpacity>
        )}

      </View>

      {historico.length === 0 ? (

        <View style={styles.vazio}>

          <Text style={styles.emoji}>
            📋
          </Text>

          <Text style={styles.vazioTitulo}>
            Nenhuma atividade ainda
          </Text>

          <Text style={styles.vazioTexto}>
            Inicie um monitoramento e salve
            uma medição para ela aparecer aqui.
          </Text>

        </View>

      ) : (

        historico.map((item, index) => (

          <View
            key={item.id}
            style={styles.item}
          >

            <View style={styles.icone}>
              <Text>🐾</Text>
            </View>

            <View style={styles.informacoes}>

              <Text style={styles.horario}>
                Atividade #{historico.length - index}
              </Text>

              <Text style={styles.detalhes}>
                Hoje • {item.horario}
              </Text>

              <Text style={styles.eixos}>
                X: {item.x}g   Y: {item.y}g   Z: {item.z}g
              </Text>

            </View>

            <View style={styles.tag}>
              <Text style={styles.tagTexto}>
                {item.atividade}
              </Text>
            </View>

          </View>

        ))

      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 16,
  },

  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#492F2F',
  },

  subtitulo: {
    fontSize: 12,
    color: '#8A7775',
    marginTop: 3,
  },

  limpar: {
    color: '#A94450',
    fontWeight: 'bold',
    fontSize: 13,
  },

  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 13,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0DDDA',
  },

  icone: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF0EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  informacoes: {
    flex: 1,
  },

  horario: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#492F2F',
  },

  detalhes: {
    fontSize: 11,
    color: '#8A7775',
    marginTop: 3,
  },

  eixos: {
    fontSize: 10,
    color: '#9B8582',
    marginTop: 4,
  },

  tag: {
    backgroundColor: '#E9F8E8',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12,
  },

  tagTexto: {
    color: '#3D8638',
    fontSize: 10,
    fontWeight: 'bold',
  },

  vazio: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0DDDA',
    marginTop: 10,
  },

  emoji: {
    fontSize: 40,
    marginBottom: 10,
  },

  vazioTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#492F2F',
    marginBottom: 6,
  },

  vazioTexto: {
    fontSize: 13,
    color: '#8A7775',
    textAlign: 'center',
    lineHeight: 19,
  },

});