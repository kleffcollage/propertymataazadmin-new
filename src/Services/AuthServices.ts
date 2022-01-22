import { LoginModel, UserView } from "../Types/api";
import {
  ApiResponse,
  Endpoints,
  HttpMethods,
  Response,
} from "../Types/App/Types";
import Fetch from "../Utilities/Fetch";

export class AuthService {
  public static Login = async (details: LoginModel): Promise<Response<UserView>> => {
    let response: Response<UserView>;
    try {
      let data = (await Fetch(
        Endpoints.Auth.LOGIN,
        HttpMethods.POST,
        details
      )) as unknown as ApiResponse;
      response = {
        status: data.status,
        message: data.message,
        data: data.data,
      };
      return Promise.resolve(response);
    } catch (error) {
      console.log(error);
      response = {
        status: false,
        message: "",
        data: null,
      };
      return Promise.reject(response);
    }
  };
}
