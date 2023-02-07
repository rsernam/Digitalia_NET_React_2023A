import React, { Component } from 'react';
import Recibos from './components/Recibos';
import CrearRecibo from './components/CrearRecibo';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { recibos: [], loading: true };
    }

    async componentDidMount() {
        const response = await fetch('https://localhost:7281/api/recibos',
            {
                headers: {
                    'content-type': 'application/json',
                    'secret-api-key': 'DIGITALIA_API_KEY'
                }
            }
        );
        
        const data = await response.json();
        this.setState({ recibos: data, loading: false });
        console.log(data);
    }


    render() {

        return (
            <div>
                <h1 id="tabelLabe0">Nuevo Recibo</h1>

                <div>
                    <CrearRecibo />
                </div>
                <h1 id="tabelLabel">Listado de Recibos</h1>
                <div>
                    <Recibos />
                </div>



            </div>
        );


    }

}
