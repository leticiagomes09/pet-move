import { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import { Accelerometer } from 'expo-sensors';

export default function TelaMedidor({ onSalvar }) {

  const [{ x, y, z }, setDados] = useState({
    x: 0,
    y: 0,
    z: 0
  });

  const [sensorAtivo, setSensorAtivo] = useState(true);

  const [disponivel, setDisponivel] = useState(true);

  useEffect(() => {

    Accelerometer.isAvailableAsync().then((resultado) => {
      setDisponivel(resultado);
    });

    Accelerometer.setUpdateInterval(200);

    let assinatura = null;

    if (sensorAtivo) {

      assinatura = Accelerometer.addListener((dados) => {
        setDados(dados);
      });

    }

    return () => {

      if (assinatura) {
        assinatura.remove();
      }

    };

  }, [sensorAtivo]);

  const movimento = Math.sqrt(
    x * x + y * y + z * z
  );

  let nivelAtividade = 'Baixa';

  if (movimento > 1.3) {
    nivelAtividade = 'Alta';
  } else if (movimento > 1.05) {
    nivelAtividade = 'Moderada';
  }

  const corNivel =
    nivelAtividade === 'Alta'
      ? '#C94B4B'
      : nivelAtividade === 'Moderada'
      ? '#D39A38'
      : '#49A942';

  const salvarMedicao = () => {

    const novaMedicao = {
      id: Date.now().toString(),

      horario: new Date().toLocaleTimeString(
        'pt-BR',
        {
          hour: '2-digit',
          minute: '2-digit'
        }
      ),

      x: x.toFixed(2),
      y: y.toFixed(2),
      z: z.toFixed(2),

      atividade: nivelAtividade,
    };

    onSalvar(novaMedicao);

    Alert.alert(
      'Medição salva!',
      'A leitura foi adicionada ao histórico.'
    );
  };

  if (!disponivel) {

    return (
      <View style={styles.erro}>

        <Text style={styles.emoji}>
          ⚠️
        </Text>

        <Text style={styles.erroTitulo}>
          Sensor indisponível
        </Text>

        <Text style={styles.erroTexto}>
          O acelerômetro não está disponível
          neste aparelho.
        </Text>

      </View>
    );
  }

  return (
    <View style={styles.tela}>

      <Text style={styles.titulo}>
        Passeio Ativo 🐾
      </Text>

      <Text style={styles.subtitulo}>
        Monitorando os movimentos do Mike
      </Text>

      {/* Indicador */}
      <View style={styles.cardStatus}>

        <View
          style={[
            styles.ponto,
            {
              backgroundColor: sensorAtivo
                ? '#49A942'
                : '#C94B4B'
            }
          ]}
        />

        <Text style={styles.status}>
          {sensorAtivo
            ? 'Monitoramento ativo'
            : 'Monitoramento pausado'}
        </Text>

      </View>

      {/* Círculo principal */}
      <View
        style={[
          styles.circulo,
          {
            borderColor: corNivel
          }
        ]}
      >

        <View style={styles.circuloInterno}>

          <Text style={styles.pata}>
            🐾
          </Text>

          <Text
            style={[
              styles.nivel,
              {
                color: corNivel
              }
            ]}
          >
            {nivelAtividade}
          </Text>

          <Text style={styles.movimento}>
            Movimento detectado
          </Text>

        </View>

      </View>

      {/* Valores */}
      <View style={styles.valores}>

        <View style={styles.valorItem}>
          <Text style={styles.valorRotulo}>
            Eixo X
          </Text>

          <Text style={styles.valor}>
            {x.toFixed(2)} g
          </Text>
        </View>

        <View style={styles.linha} />

        <View style={styles.valorItem}>
          <Text style={styles.valorRotulo}>
            Eixo Y
          </Text>

          <Text style={styles.valor}>
            {y.toFixed(2)} g
          </Text>
        </View>

        <View style={styles.linha} />

        <View style={styles.valorItem}>
          <Text style={styles.valorRotulo}>
            Eixo Z
          </Text>

          <Text style={styles.valor}>
            {z.toFixed(2)} g
          </Text>
        </View>

      </View>

      {/* Botões */}
      <View style={styles.botoes}>

        <TouchableOpacity
          style={[
            styles.botao,
            sensorAtivo
              ? styles.botaoPausar
              : styles.botaoRetomar
          ]}
          onPress={() => setSensorAtivo(!sensorAtivo)}
        >

          <Text style={styles.botaoTexto}>
            {sensorAtivo ? 'Pausar' : 'Retomar'}
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.botao,
            styles.botaoSalvar
          ]}
          onPress={salvarMedicao}
        >

          <Text style={styles.botaoTexto}>
            Salvar medição
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  tela: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#492F2F',
    marginTop: 10,
  },

  subtitulo: {
    fontSize: 13,
    color: '#8A7775',
    marginTop: 4,
    marginBottom: 14,
  },

  cardStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9F8E8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginBottom: 15,
  },

  ponto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },

  status: {
    fontSize: 11,
    color: '#3D8638',
    fontWeight: 'bold',
  },

  circulo: {
    width: 210,
    height: 210,
    borderRadius: 105,
    borderWidth: 8,
    backgroundColor: '#FFF0EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },

  circuloInterno: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pata: {
    fontSize: 35,
    marginBottom: 4,
  },

  nivel: {
    fontSize: 21,
    fontWeight: 'bold',
  },

  movimento: {
    fontSize: 11,
    color: '#8A7775',
    marginTop: 4,
  },

  valores: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#F0DDDA',
    marginBottom: 16,
  },

  valorItem: {
    flex: 1,
    alignItems: 'center',
  },

  valorRotulo: {
    fontSize: 11,
    color: '#8A7775',
    marginBottom: 4,
  },

  valor: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#492F2F',
  },

  linha: {
    width: 1,
    backgroundColor: '#F0DDDA',
  },

  botoes: {
    width: '100%',
    flexDirection: 'row',
  },

  botao: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 24,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  botaoPausar: {
    backgroundColor: '#A94450',
  },

  botaoRetomar: {
    backgroundColor: '#4C8CC9',
  },

  botaoSalvar: {
    backgroundColor: '#492F2F',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  erro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  emoji: {
    fontSize: 45,
    marginBottom: 10,
  },

  erroTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#492F2F',
    marginBottom: 8,
  },

  erroTexto: {
    fontSize: 14,
    color: '#8A7775',
    textAlign: 'center',
  },

});