import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NumericInput from 'react-native-numeric-input'


export default class VistaProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: "",
    };
  }

  render() {

    const addCarrito = () => {
      console.log("agregar al carrito ");
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText);
          let recibe = xhttp.responseText;

          if (recibe == 1) {
            alert("Añadido correctamente", _this.props.navigation.navigate("ListaPro"));
          }
        }
      };
      xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/AddCarrito.php?nui=" + this.props.route.params.nui + "&idProducto=" + this.props.route.params.id + "&cantidad=" + this.state.cantidad + "&idCliente=" + this.props.route.params.idCli, true);
      xhttp.send();


    }


    return (
      <View style={styles.container}>

        {/* <Text>nui:  {this.props.route.params.nui} </Text> */}
        {/* <Text>idCliente  {this.props.route.params.idCli} </Text> */}
        {/* <Text> id Producto: {this.props.route.params.id} </Text> */}
        <Text style={styles.nombreP}>  {this.props.route.params.nombre} </Text>

        <Text style={styles.descripcionP}>  {this.props.route.params.descripcion} </Text>
        <Text style={styles.precioP}>  $ {this.props.route.params.precio} </Text>

        <Image
          style={{ width: 250, height: 250, marginLeft: 70, marginBottom: 40 }}
          source={{ uri: this.props.route.params.imagen }}
        />


        <View style={styles.viewPrueba}>
          <Image
            style={styles.imgMenos}
            source={require("./img/menos.png")}
          />


          <NumericInput


            minValue={1}
            rounded
            leftButtonBackgroundColor='rgb(56,61,59)'
            rightButtonBackgroundColor='rgb(56,61,59)'
            textColor='#EDF7F1'
            iconStyle={{ color: 'black' }}

            onChange={cantidad => this.setState({ cantidad })} />

          <Image
            style={styles.imgMas}
            
            source={require("./img/mas.png")}
          />

        </View>

        <Text>{this.state.cantidad}</Text>




        <TouchableOpacity style={styles.appButtonContainer} onPress={addCarrito}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./img/compras.png")}
          />
          <Text style={styles.appButtonText}>agregar al carrito</Text>
        </TouchableOpacity>


      </View>
    );
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(56,61,59)',
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
    width: 300,
    marginLeft: 45,


  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  nombreP: {
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 20,
    color: '#D01212',
    fontSize: 30,

  },
  precioP: {
    marginLeft: 250,
    marginBottom: 40,
    color: '#18D861',
    fontSize: 40,
    fontWeight: 'bold'
  },
  descripcionP: {
    textAlign: 'center',
    color: "#EDF7F1",
    fontSize: 25,
  },
  imgMas: {
    width: 30,
    height: 30,
  
    

  },
  imgMenos: {
    width: 30,
    height: 30,
  
    marginLeft: 5,

  },
  viewPrueba: {
    
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }


})