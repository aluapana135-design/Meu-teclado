import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Teclado = () => {
  const [texto, setTexto] = useState('');

  const teclas = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  const handleTeclaPress = (tecla) => {
    setTexto(texto + tecla);
  };

  return (
    <View>
      <Text>{texto}</Text>
      {teclas.map((linha, index) => (
        <View key={index} style={{ flexDirection: 'row' }}>
          {linha.map((tecla) => (
            <TouchableOpacity key={tecla} onPress={() => handleTeclaPress(tecla)}>
              <Text>{tecla}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Teclado;
