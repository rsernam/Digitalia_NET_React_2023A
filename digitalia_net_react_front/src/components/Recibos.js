import React from 'react';
import axios from 'axios';
import '../App.css';
import Canvas from './Canvas';
//import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



const draw = context => {

    context.beginPath();
    context.font = 20 + 'px ' + 'Arial';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillStyle = 'black';
    context.fillText("RECIBO 1", 20, 5);
    context.fillText("RECIBO 2", 20, 25);
    context.fillText("RECIBO 3", 20, 45);
    context.fillText("RECIBO 4", 20, 65);
    context.stroke();

};


export default class Recibos extends React.Component { 

    state = {
        recibos: [],
        selectedFile: null,
        reciboSeleccionado: {

        },
        estadoRecibo: false
    }

    componentDidMount() {
        axios.get('https://localhost:7281/api/recibos/', {
            headers: {
                'secret-api-key': 'DIGITALIA_API_KEY'
            }
        })
            .then(res => {
                var recibos = res.data;
                this.setState({ recibos });

            })
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }



    ImagenRecibo = () => {
        if (this.state.estadoRecibo) {
            return (
                <div>
                    <Canvas draw={draw} height={600} width={1000} nombre={this.state.reciboSeleccionado.tituloRecibo} />
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                </div>
            );
        }

    };

    descargaArchivo = event => {
        /*
        this.setState({ estadoRecibo: true });
        console.log(event.target.value)
        console.log(this.state.recibos)
        var recSeleccionado = this.state.recibos.find(element => {
            return element.idRecibo === event.target.value;
        })
        this.setState({ reciboSeleccionado: recSeleccionado });
        console.log(recSeleccionado)
        */

    };


    render() {

        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Direccion</th>
                        <th>Nombres y Apellidos</th>
                        <th>Descarga</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.recibos.map(recibo =>
                        <tr key={recibo.idRecibo}>
                            <td>{recibo.tituloRecibo}</td>
                            <td>{recibo.descripcionRecibo}</td>
                            <td>{recibo.direccionRecibo}</td>
                            <td>{recibo.nombreRecibo}</td>
                            <td>
                                <button type="submit" value={recibo.idRecibo} onClick={this.descargaArchivo}>Descargar PDF</button>
                            </td>

                            


                        </tr>
                    )}
                </tbody>
                <br />
                {this.ImagenRecibo()}
                
            </table>
        );

    }
}
