import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row'
  },
  positif: {
    padding:5,
    backgroundColor:'yellow',
    width:65, heigth:65
  },
  meninggal: {
    padding:5,
    backgroundColor:'red',
    width:80, heigth:65
  },
  sembuh: {
    padding:5,
    backgroundColor:'lightblue',
    width:65, heigth:65
  }

})

class App extends Component{
  constructor(){
    super()
    this.state={
      confirmed:[],recovered:[],deaths:[],indPos:[],indDeat:[],indSembuh:[]
    }
  }

  async componentDidMount(){
    const res = await fetch("https://covid19.mathdro.id/api/countries/indonesia")
    const dataInd = await res.json()
    this.setState({indPos: dataInd.confirmed, indSembuh: dataInd.recovered, indDeat: dataInd.deaths});
    const resp = await fetch("https://covid19.mathdro.id/api")
    const data = await resp.json()
    this.setState({ confirmed: data.confirmed, recovered: data.recovered, deaths: data.deaths})
  }

  render(){
    return (
      <View style={{padding:20}}>
        <Text style={{fontSize:20}}>Data covid-19 global</Text>
        <View style={styles.container}>
          <Text style={styles.positif}>Positif {this.state.confirmed.value}</Text>
          <Text style={styles.meninggal}>Meninggal {this.state.deaths.value}</Text>
          <Text style={styles.sembuh}>Sembuh {this.state.recovered.value}</Text>
        </View>
        <Text style={{fontSize:20}}>Indonesia</Text>
        <View style={styles.container}>
          <Text style={styles.positif}>Positif {this.state.indPos.value}</Text>
          <Text style={styles.meninggal}>Meninggal {this.state.indDeat.value}</Text>
          <Text style={styles.sembuh}>Sembuh {this.state.indSembuh.value}</Text>
        </View>
      </View>
    );
  }
}

export default App;
