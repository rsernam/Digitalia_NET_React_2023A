import React from 'react';
import axios from 'axios';

export default class CrearRecibo extends React.Component {

    state = {
        idRecibo: '',
        tipoMonedaRecibo: '',
        montoRecibo: '',
        tituloRecibo: '',
        descripcionRecibo: '',
        direccionRecibo: '',
        nombreRecibo: '',
        nroDocumentoRecibo: '',
        tipoDocumentoRecibo: '',
        selectedFile: null
    }


    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {
        const formData = new FormData();
        formData.append("myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);
        //axios.post("api/uploadfile", formData);
    };

    fileData = () => {

        if (this.state.selectedFile) {
            return (
                <div>
                    <p>Nombre de Imagen: {this.state.selectedFile.name}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Escoger imagen</h4>
                </div>
            );
        }
    };

    handleChange = event => {
        if (event.target.name == "idRecibo") this.setState({ idRecibo: event.target.value });
        if (event.target.name == "tipoMonedaRecibo") this.setState({ tipoMonedaRecibo: event.target.value });
        if (event.target.name == "montoRecibo") this.setState({ montoRecibo: event.target.value });
        if (event.target.name == "tituloRecibo") this.setState({ tituloRecibo: event.target.value });
        if (event.target.name == "descripcionRecibo") this.setState({ descripcionRecibo: event.target.value });
        if (event.target.name == "direccionRecibo") this.setState({ direccionRecibo: event.target.value });
        if (event.target.name == "nombreRecibo") this.setState({ nombreRecibo: event.target.value });
        if (event.target.name == "nroDocumentoRecibo") this.setState({ nroDocumentoRecibo: event.target.value });
        if (event.target.name == "tipoDocumentoRecibo") this.setState({ tipoDocumentoRecibo: event.target.value });
        console.log(event.target.name);
        console.log(this.state);
    }

    handleSubmit = event => {
        event.preventDefault();

        var recibo = {
            idRecibo: this.state.idRecibo,
            tipoMonedaRecibo: this.state.tipoMonedaRecibo,
            montoRecibo: this.state.montoRecibo,
            tituloRecibo: this.state.tituloRecibo,
            descripcionRecibo: this.state.descripcionRecibo,
            direccionRecibo: this.state.direccionRecibo,
            nombreRecibo: this.state.nombreRecibo,
            nroDocumentoRecibo: this.state.nroDocumentoRecibo,
            tipoDocumentoRecibo: this.state.tipoDocumentoRecibo
        };
        console.log('---------------------');
        console.log(this.state);
        console.log('---------------------');
        console.log(recibo);
        console.log('---------------------');

        axios.post('https://localhost:7281/api/recibos', recibo, {
            headers: {
                'secret-api-key': 'DIGITALIA_API_KEY'
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload(false);
            });

       
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <td><label>ID de recibo: </label></td>
                                <td><input type="number" name="idRecibo" onChange={this.handleChange} required="required" /></td>
                            </tr>
                            <tr>
                                <td><label>Moneda: </label></td>
                                <td>
                                    <select class="selectpicker" name="tipoMonedaRecibo" onChange={this.handleChange} >
                                        <option value="1">PEN</option>
                                        <option value="2">USD</option>
                                        <option value="3">EUR</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Monto: </label></td>
                                <td><input type="number" name="montoRecibo" onChange={this.handleChange} required="required" /></td>
                            </tr>
                            <tr>
                                <td><label>Titulo: </label></td>
                                <td><input type="text" name="tituloRecibo" onChange={this.handleChange} required="required" /></td>
                            </tr>
                            <tr>
                                <td><label>Descripcion: </label></td>
                                <td><input type="text" name="descripcionRecibo" onChange={this.handleChange} required="required" /></td>
                            </tr>
                            <tr>
                                <td><label>Direccion: </label></td>
                                <td><input type="text" name="direccionRecibo" onChange={this.handleChange} required="required" /></td>
                            </tr>
                            <tr>
                                <td><label>Nombre de Recibo: </label></td>
                                <td><input type="text" name="nombreRecibo" onChange={this.handleChange} required="required" /></td>
                            </tr>
                            <tr>
                                <td><label>Tipo de Documento: </label></td>
                                <td>
                                    <select class="selectpicker" name="tipoDocumentoRecibo" onChange={this.handleChange} >
                                        <option value="1">DNI</option>
                                        <option value="2">RUC</option>
                                        <option value="3">CEX</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td><label>Nro. de Documento: </label></td>
                                <td><input type="number" name="nroDocumentoRecibo" onChange={this.handleChange} required="required" /></td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }} colSpan="2">
                                    <div>
                                        <input type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"  onChange={this.onFileChange} />
                                    </div>
                                    {this.fileData()}
                                </td>
                            </tr>
                            <tr>
                                <td style={{textAlign:'center'}} colSpan="2"><button type="submit">Agregar Recibo</button></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </form>
            </div>

        )
    }
    
}
