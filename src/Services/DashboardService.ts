import { MetricsView } from "../Types/api";
import {
  ApiResponse,
  Endpoints,
  ErrorMessages,
  Response,
  Statuses,
} from "../Types/App/Types";
import Fetch from "../Utilities/Fetch";

export class DashboardService {
  public static getMetrics = async (): Promise<Response<MetricsView>> => {
    let response: Response<MetricsView> = {
      status: Statuses.FALSE,
      message: ErrorMessages.FAILED,
      data: null,
    };
    try {
      let data = (await Fetch(
        Endpoints.Admin.METRICS
      )) as unknown as ApiResponse;
      let response: Response<MetricsView> = {
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
