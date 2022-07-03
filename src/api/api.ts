import type IHistory from "@/interfaces/history";
import store from "@/store";
import { HistoryMutation } from "@/store/modules/history/types";
import type { Param } from "@/store/modules/param/types";
import { StatsMutation } from "@/store/modules/stats/types";
import axios, { AxiosError, type AxiosRequestConfig } from "axios";

type Headers = {
  [x: string]: string;
};

class Request {
  private body: string;
  private header: Headers;
  private method: string;
  private signal: AbortSignal;
  private uri: string;

  constructor(uri: string, signal: AbortSignal) {
    this.header = this.initHeaders();
    this.body = this.initBody();
    this.method = this.initMethod();
    this.uri = uri;
    this.signal = signal;
  }

  private initHeaders = (): Headers => {
    const res = {} as { [x: string]: string };

    store.getters.getByType("Headers").forEach((header: Param) => {
      res[header.key] = header.value;
    });

    return res;
  };

  private initMethod = (): string => {
    return store.getters.getMethod;
  };

  private initBody = (): string => {
    let body: string = store.getters.getByType("Body");
    body = body == "" ? '""' : body;
    const json = JSON.parse(body);

    return JSON.stringify(json, undefined, 0);
  };

  private setParams = (): AxiosRequestConfig => {
    const params: AxiosRequestConfig = {
      url: this.uri,
      method: this.method,
      headers: this.header,
      signal: this.signal,
    };

    if (this.method != "GET") {
      params.data = this.body;
    }

    return params;
  };

  private getTimer = (): string => {
    return store.getters.getTimer;
  };

  private pushHistory = (response: string, code: number): void => {
    const history: IHistory = {
      time: this.getTimer(),
      httpCode: code,
      data: JSON.stringify(response, undefined, 2),
      request: this.uri,
      method: this.method,
    };
    store.commit(HistoryMutation.ADD_HISTORY, history);
  };

  private updateData = (response: string) => {
    store.commit(
      StatsMutation.RESPONSE_STATS,
      JSON.stringify(response, undefined, 2)
    );
  };

  public send = async () => {
    const options = this.setParams();

    let request;
    let error: AxiosError = {} as AxiosError;
    try {
      request = await axios(options);
    } catch (err) {
      if (err instanceof AxiosError) {
        error = err;
      }
    } finally {
      if (request != undefined) {
        const response = request.data;

        this.pushHistory(response, request.status);

        this.updateData(response);
      } else {
        const message = error.message;
        const code = error.response ? error.response.status : 0;

        this.pushHistory(message, code);
        this.updateData(message);
      }
    }
  };
}

export default Request;
