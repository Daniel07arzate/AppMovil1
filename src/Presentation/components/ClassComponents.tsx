import React ,{Component} from "react";
import { View, Text } from 'react-native';

interface Props{
    age: number;
    name: string;
}

interface State{
    message: string;
}

class ClassComponets extends Component<Props, State>{
    constructor(props: Props){
        super(props) //llamada al constructor de clase padre 
        //se inicializa el estado
        this.state = {
            message: " menseje desde el componete clase"
        };
    }

    render(){

        const {age, name} = this.props;
        const {message} = this.state;

        return (
            <View>
            <Text>{message}</Text>
            <Text>Hola: {name} tu edad: {age}</Text>
            </View>
        );

    };
}

export default ClassComponets;