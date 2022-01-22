import { UserView } from "../Types/api";
import {
  Endpoints,
  ErrorMessages,
  PagedApiResponse,
  PagedApiResponseData,
  Response,
  Statuses,
} from "../Types/App/Types";
import Fetch from "../Utilities/Fetch";

export class UserService {
  public static listUsers = async (url?: any): Promise<Response<UserView>> => {
    let response: Response<UserView> = {
      status: Statuses.FALSE,
      message: ErrorMessages.FAILED,
      data: null,
    };
    try {
      let data = (await Fetch(
        `${Endpoints.User.LIST.All}${url ? url : ""}`
      )) as unknown as PagedApiResponse<UserView>;
      let response: Response<UserView> = {
        status: data.status,
        message: data.message,
        data: data.data,
      };
      return Promise.resolve(response);
    } catch (error) {
      console.log(error);
      return Promise.reject(response);
    }
  };
}
