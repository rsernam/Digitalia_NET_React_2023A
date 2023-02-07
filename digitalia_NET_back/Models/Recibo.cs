using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using System.Threading;

namespace digitalia_NET_back.Models
{
    public class Recibo
    {
        [Key] 
        public int idRecibo { get; set; }
        public int tipoMonedaRecibo { get; set; }
        public Decimal montoRecibo { get; set; }
        public string? tituloRecibo { get; set; }
        public string? descripcionRecibo { get; set; }
        public string? direccionRecibo { get; set; }
        public string? nombreRecibo { get; set; }
        public string? nroDocumentoRecibo { get; set; }
        public int tipoDocumentoRecibo { get; set; }

        //Como usuario quiero subir un logo de mi marca
        //Como usuario quiero definir el tipo de monedo del recibo
        //Como usuario quiero ingresar el monto a cobrar de mi recibo
        //Como usuario quiero ingresar un título para mi recibo
        //Como usuario quiero ingresar una descripción para mi recibo
        //Como usuario quiero ingresar mi dirección de domicilio para mi recibo
        //Como usuario quiero ingresar mis nombres completos para mi recibo
        //Como usuario quiero ingresar tipo de documento para mi recibo
        //Como usuario quiero ingresar número de documento para mi recibo
        //Como usuario quiero generar mi recibo en PDF que se descargue automáticamente con todos los datos ingresados



    }
}
