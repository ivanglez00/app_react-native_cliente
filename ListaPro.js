import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button,Image } from 'react-native';

export default class ListaPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer: "",
      idcliente: "",
      nuiServer: "",
    };
  }


  componentDidMount() {
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        // console.log(xhttp.responseText); 
        var datos = JSON.parse(xhttp.responseText);
        _this.setState({ datosServer: datos });
      }
    };
    xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/MostrarAllDatos.php", true);
    xhttp.send();

    _this.setState({ idcliente: this.props.route.params.id });
    _this.setState({ nuiServer: this.props.route.params.nui });
  }



  render() {

    const carrito = () => {
      console.log("desde fn de carrito ");
      this.props.navigation.navigate("PedidoConf", { nui: this.state.nuiServer})
    }


    const envDatos = (idEnv, nombreEnv, precioEnv, imgEnv, descEnv) => {
      //console.log(nombreEnv);

      this.props.navigation.navigate("VistaProducto", { id: idEnv, nombre: nombreEnv, precio: precioEnv, imagen: imgEnv, descripcion: descEnv, idCli: this.state.idcliente, nui: this.state.nuiServer })
    }

    const celda = ({ item }) => {
      return (
        <View style={styles.celdas}>
          <TouchableOpacity onPress={() => envDatos(item.idPro, item.nombrePro, item.precioPro, item.foto, item.descripcionPro)}>
            {/* <Text style={styles.texto}>id: {item.idPro}</Text> */}
            <Text style={styles.texto}> {item.nombrePro}</Text>
            <Text style={styles.precio}>$ {item.precioPro}</Text>

            <Image
          style={{ width: 100, height: 100, marginLeft:120,marginBottom:10 }}
          source={{ uri: item.foto }}
        />
          </TouchableOpacity>
        </View>

      )

    }


    return (
      <View style={styles.container}>
      

      {/* boton carrito */}
        <TouchableOpacity style={styles.appButtonContainer} onPress={carrito}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/carrito-de-compras.png")}
                    />
                    <Text style={styles.appButtonText}>Ver carrito</Text>
                </TouchableOpacity>

        {/* <Text> nombre: {this.props.route.params.nombre} </Text>
        <Text> id: {this.props.route.params.id} </Text>
        <Text> correo: {this.props.route.params.correo} </Text>
        <Text> direccion: {this.props.route.params.direccion} </Text>
        <Text> nui: {this.props.route.params.nui} </Text> */}

        {/* codigo flatlist comienza*/}
        <FlatList
          data={this.state.datosServer}
          renderItem={celda}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );// return principal


  }//render
}//componenet




const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(56,61,59)',
  },
  celdas: {
    margin: 20,
    borderWidth: 2,
    borderColor: 'rgb(122,201,173)',
    borderRadius: 10,
  },
  texto: {
    color: '#DB2C0D',
    padding: 4,
    paddingRight: 3,
    textAlign:'center',
    fontSize:30,
  },
  precio:{
    color: '#0EE828',
    marginLeft:40,
    fontSize:20,
  },
  appButtonContainer: {
        elevation: 8,
        //backgroundColor: "#009688",
        backgroundColor: "#D0B627",
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
    }


})
