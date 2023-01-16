import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            contra: "",
            numRandom: "",

        };
    }
    //hacer un numero random
    componentDidMount() {
        let _this = this;

        let x = 0;
       

        _this.setState({ numRandom: x = Math.floor(Math.random() * 1000) });
        //_this.setState({ numRandom: x = this.state.numRandom });
       
    }



    render() {

        const registro = () => {
            //console.log(this.state.numRandom);
             this.props.navigation.navigate("Registro");
        }

        const btnClick = () => {
            let _this = this;
            console.log("Login");

            
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // console.log(xhttp.responseText); 
                    if (xhttp.responseText != 0) {
                        //corta la cadena y me envia el nombre a la siguiente pantalla
                        console.log( xhttp.responseText);
                        let recibe = xhttp.responseText;
                        let datos = recibe.split('"');
                        console.log(datos[7]);
                        console.log(datos[3]);
                        console.log(datos[11]);
                        console.log(datos[19]);
                        // _this.props.navigation.navigate("pantalla2",{nombre:datos[2]});
                        //cambia de pantalla y envia el nombre tomado del servidor
                        // _this.props.navigation.navigate("acciones",{nombre:datos[2]});
                        _this.props.navigation.navigate("ListaPro", { nombre: datos[7], id: datos[3], correo: datos[11], direccion: datos[19], nui:_this.state.numRandom });
                    } else {
                        alert("datos incorrectos");
                    }
                }
            };

            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/login.php?email=" + '"' + this.state.email + '"' + "&contra=" + '"' + this.state.contra + '"', true);
            xhttp.send();



            //this.props.navigation.navigate("ListaPro");
        }
        return (
            <View style={styles.container}>

                <Text style={styles.textoPrin}>Comida China </Text>

                <Image
                    style={{ width: 120, height: 120, marginLeft: 135, }}
                    source={require("./img/comida-china.png")}
                />


                <TextInput style={styles.input} placeholder={"correo"} keyboardType="email-address"placeholderTextColor="#ffff" onChangeText={email => this.setState({ email })} />
                <TextInput style={styles.input} placeholder={"contraseña"}  secureTextEntry={true}placeholderTextColor="#ffff" onChangeText={contra => this.setState({ contra })} />

                <TouchableOpacity style={styles.appButtonContainer} onPress={btnClick}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/iniciar-sesion.png")}
                    />
                    <Text style={styles.appButtonText}>Iniciar sesion</Text>
                </TouchableOpacity>
                {/* <Button title='entrar' onPress={btnClick} /> */}

                <Text style={styles.textoSec} > ¿ Aun no tienes cuenta? REGISTRATE GRATIS </Text>

                <TouchableOpacity style={styles.appButtonContainer} onPress={registro}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/nuevo.png")}
                    />
                    <Text style={styles.appButtonText}>Registrarse</Text>
                </TouchableOpacity>

                {/* <Button title='registrarse' onPress={registro} /> */}


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

    textoSec: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    textoPrin: {
        fontSize: 25,
        color: "#B51F1F",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        marginTop: 50,

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
