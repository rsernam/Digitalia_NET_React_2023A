import React from 'react';
import axios from 'axios';
import '../App.css';
//import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default class Recibos extends React.Component { 

    state = {
        recibos: [],
        selectedFile: null
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
                                <button type="submit">Descargar PDF</button>
                            </td>

                            


                        </tr>
                    )}
                </tbody>
            </table>
        );

    }
}
