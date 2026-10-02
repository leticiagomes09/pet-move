import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>

      <View>
        <Text style={styles.titulo}>🐾 PetMove</Text>
        <Text style={styles.subtitulo}>
          Monitoramento do seu pet
        </Text>
      </View>

      <View style={styles.status}>
        <View style={styles.bolinha} />
        <Text style={styles.statusTexto}>Online</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0DDDA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7F3039',
  },

  subtitulo: {
    fontSize: 12,
    color: '#8A7775',
    marginTop: 2,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9F8E8',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
  },

  bolinha: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#49A942',
    marginRight: 5,
  },

  statusTexto: {
    color: '#3D8638',
    fontSize: 11,
    fontWeight: 'bold',
  },

});