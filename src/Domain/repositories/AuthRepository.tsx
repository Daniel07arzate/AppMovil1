import { User } from "../entities/User";
import { ResponseApi } from "../../Data/source/remote/models/ResponseApi";


export interface AuthRepository{
    login(email: String, password: string):Promise<ResponseApi>
    register(user: User): Promise<ResponseApi>
}