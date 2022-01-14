export interface PersonaInterface {
    IDPERSONA:  number;
    NIF:        string;
    APE1:       string;
    APE2:       string;
    NOMBRE:     string;
    TLF:        string;
    EMAIL:      string;
    DIRECCION:  string;
    CP:         string;
    POBLACION:  string;
    MUNICIPIO:  string;
    FECHA_ALTA: Date;
    SEXO:       number;
    TIPOVIA:    number;
}

export interface Tipovia {
    COD_VIA:  number;
    DESC_VIA: string;
}


export interface Sexo {
    COD_SEXO:  number;
    DESC_SEXO: string;
}

