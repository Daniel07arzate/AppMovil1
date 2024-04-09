export interface User {
    id?:                string;//porque la hora de la creacion el id no va, la id es opcional
    name:               string;
    email:              string;
    apellidoPaterno:    string;
    apellidoMaterno:    string;
    password:           string;
    token?:     string;
}


