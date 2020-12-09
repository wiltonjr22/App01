import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

export default function App1(){
  const [peso,setPeso] = useState ('');
  const [altura,setAltura] = useState ('');

  function ImcCalculo () {
    const alt = altura / 100;
    const imc = peso/ (alt * alt);
    
    if (imc < 18.6){
      alert('Voce esta abaixo do peso! '+ imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Voce esta com peso ideal  '+ imc.toFixed(2));
    }else if(imc >= 24.9 ){
      alert('Voce esta acima do peso!  '+ imc.toFixed(2));
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC </Text>

      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (kg)"
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      placeholder="Altura (cm)"
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={ImcCalculo}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#fff',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41AEF4',
    padding: 10,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 25,
  }
});