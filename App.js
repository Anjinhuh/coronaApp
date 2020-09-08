/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {



const [mortes, setMortes] = useState(0)
const [confirmados, setConfirmados] = useState(0)
const [recuperados, setRecuperados] = useState(0)
const [atualizado, setAtualizado] = useState(0)
  const url = "https://covid19-brazil-api.now.sh/api/report/v1/brazil"
  fetch(url).then(corona =>{
    return corona.json()
  }).then(casos =>{
      const numeroConfirmados = casos.data.confirmed
      let numeroMortes = casos.data.deaths
      let numeroRecuperados = casos.data.recovered 
      let atualizadoDia = casos.data.updated_at
      
      setMortes(numeroMortes)
      setRecuperados(numeroRecuperados)
      setConfirmados(numeroConfirmados)
      setAtualizado(atualizadoDia)
    })


 


  return (
    
    <>  

  <ScrollView style={styles.planoDeFundo}>
  <Image source={require('./images/fotocima.png')} style={styles.coronaCima}/>
  <ImageBackground source={require('./images/fundl.png')} style={styles.fotoFundo}>
    <Text style={styles.header}>
      Dados CoronaVírus
    </Text>
    <Text style={styles.header}>
      Brasil
    </Text>
    <View style={styles.boxPrincipal}>
      <View style={styles.row}>
        <View style={styles.boxSecundário}>
          <Text style={styles.escritaPrincipal}>
            Número de casos:
          </Text>
          <Text style={styles.escritaSecundaria}>
           {confirmados}
          </Text>
        </View>
        <View style={styles.boxSecundário}>
          <Text style={styles.recuperado}>
          Recuperados
          </Text>
          <Text style={styles.recuperados}>
            {recuperados}
          </Text>
        </View>
      </View>


      <View style={styles.row}>
        <View style={styles.boxSecundário}>
          <Text style={styles.escritaPrincipal}>
            Número de mortes
          </Text>
          <Text style={styles.escritaSecundaria}>
            {mortes}
          </Text>
          
        </View>

        <View style={styles.boxSecundário}>
          <Text style={styles.escritaPrincipal}>
            Data de atualização:
          </Text>
          <Text  style={styles.escritaSecundaria}>
            HOJE
          </Text>
        </View>
      </View>
      
      
    </View>
    
  </ImageBackground>
  </ScrollView> 
    </>
  );
};

const styles = StyleSheet.create({

  row:{
    flexDirection: "row",
    
  },
  boxPrincipal:{
    backgroundColor: "#5000A0",
    width: 379,
    height: 334,
    alignSelf: "center",
    marginTop: 60,
    borderRadius: 15,
    
  },
  boxSecundário:{
    width: 160,
    height: 120,
    backgroundColor: "#3C2876",
    opacity: 71,
    borderRadius: 18,
    marginLeft: 20,
    marginTop: 35
  },
  coronaCima:{
    height: 120
  },
  fotoFundo:{
    flex: 1,
    height: 580
  },
  planoDeFundo:{
    backgroundColor: "#000",
    flex: 1,
  },
  escritaPrincipal:{
    color: "#fff",
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
  },
  escritaSecundaria:{
    color: "#fff",
    fontSize: 18,
    alignSelf:"center",
    marginTop: 10
  },
  recuperados:{
    color: "#fff",
    alignSelf:"center",
    marginTop: 10,
    fontSize: 23
  },
  recuperado:{
    fontSize: 19,
    marginLeft: 10,
    marginTop: 10,
    color: "#fff"
  },
  header:{
    fontSize: 30,
    alignSelf:"center",
    color: "#fff"
  }
});

export default App;
/*

  */