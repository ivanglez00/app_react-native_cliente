import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button,TouchableOpacity } from 'react-native';

export default class PedidoConf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosServer: "",
        };
    }


    componentDidMount() {
        let _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                // console.log(xhttp.responseText);
                var datos = JSON.parse(xhttp.responseText);
                _this.setState({ datosServer: datos });
            }
        };
        xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/MostrarCarrito.php?idCarrito=" + this.props.route.params.nui, true);
        xhttp.send();

    }




    render() {

        const confirmacion = () => {
            let _this = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    console.log(xhttp.responseText);
                    let recibe = xhttp.responseText;

                    if (recibe == 1) {
                        alert("confirmado", _this.props.navigation.navigate("ListaPro"));
                    }
                }
            };
            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/confirmarPedCliente.php?nui=" + this.props.route.params.nui, true);
            xhttp.send();
        }
        
        const celda = ({ item }) => {

            return (
                <View style={styles.celdas}>
                    <Text style={styles.texto}> {item.nombrePro}</Text>
                    <Text style={styles.texto}>Cantidad: {item.cantidad}</Text>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: item.foto }}
                    />

                </View>

            )
        }





        return (
            <View style={styles.container}>
                <Text> PedidoConf </Text>
                <Text>nui:  {this.props.route.params.nui} </Text>

                {/* codigo flatlist comienza*/}
                <FlatList
                    data={this.state.datosServer}
                    renderItem={celda}
                    keyExtractor={(item, index) => index.toString()}
                />

               

                <TouchableOpacity style={styles.appButtonContainer} onPress={confirmacion}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/cheque.png")}
                    />
                    <Text style={styles.appButtonText}>Confirmar Pedido</Text>
                </TouchableOpacity>

            </View>
        );//primer return
    }
}


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
        color: 'rgb(193,199,188)',
        padding: 4,
        paddingRight: 3,

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
        marginBottom:100,


    },

    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }



})

