import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: "",
            contra: "",
            direccion: "",

        };
    }

    render() {

        const envRegistro = () => {

            let a = () => {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        let recibe = xhttp.responseText;

                        if (recibe == 1) {
                            alert("Ingresado correctamente");
                        }
                    }
                };
                xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/InsertNuevosClientes.php?nombre=" + '"' + this.state.nombre + '"' + "&correo=" + '"' + this.state.correo + '"' + "&contra=" + '"' + this.state.contra + '"' + "&direccion=" + '"' + this.state.direccion + '"', true);
                xhttp.send();

            }



            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText);
                    let flag = xhttp.responseText;
                    if (flag == 0) {

                        a();
                    } else {
                        alert("correo ya utilizado");
                    }

                }
            };
            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/ValidacionLogin.php?email=" + this.state.correo, true);
            xhttp.send();
















        }



        return (
            <View style={styles.container}>
                <Text> Registro </Text>

                <TextInput style={styles.input} placeholder={"nombre"} placeholderTextColor="#ffff" onChangeText={nombre => this.setState({ nombre })} />

                <TextInput style={styles.input} placeholder={"correo"} placeholderTextColor="#ffff" onChangeText={correo => this.setState({ correo })} />
                <TextInput style={styles.input} placeholder={"direccion"} placeholderTextColor="#ffff" onChangeText={direccion => this.setState({ direccion })} />
                <TextInput style={styles.input} placeholder={"contraseña"} placeholderTextColor="#ffff" onChangeText={contra => this.setState({ contra })} />




                <TouchableOpacity style={styles.appButtonContainer} onPress={envRegistro}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/cheque.png")}
                    />
                    <Text style={styles.appButtonText}>Registrarse</Text>
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

    input: {

        borderWidth: 2,
        fontSize: 25,
        borderColor: '#ffff',
        marginTop: 20,
        marginRight: 30,
        marginLeft: 30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    appButtonContainer: {
        elevation: 8,
        //backgroundColor: "#009688",
        backgroundColor: "#22ABE3",
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