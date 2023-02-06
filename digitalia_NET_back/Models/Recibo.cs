using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using System.Threading;

namespace digitalia_NET_back.Models
{
    public class Recibo
    {
        [Key] 
        public int IdRecibo { get; set; }
        public int TipoMonedaRecibo { get; set; }
        public Decimal MontoRecibo { get; set; }
        public string? TituloRecibo { get; set; }
        public string? DescripcionRecibo { get; set; }
        public string? DireccionRecibo { get; set; }
        public string? NombreRecibo { get; set; }
        public string? NroDocumentoRecibo { get; set; }
        public int TipoDocumentoRecibo { get; set; }

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
