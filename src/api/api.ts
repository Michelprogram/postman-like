import type IHistory from "@/interfaces/history";
import store from "@/store";
import { HistoryMutation } from "@/store/modules/history/types";
import type { Param } from "@/store/modules/param/types";
import { StatsMutation } from "@/store/modules/stats/types";

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
    const headers = [
      ...store.getters.getByType("Headers"),
      ...store.getters.getByType("Authorization"),
    ];
    const content = new Headers();

    headers.forEach((header: Param) => {
      content.append(header.key, header.value);
    });

    return content;
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

  private setParams = (): RequestInit => {
    let params: RequestInit = {
      mode: "cors",
      signal: this.signal,
      cache: "no-cache",
      method: this.method,
      headers: this.header,
    };

    if (this.method != "GET") {
      params = {
        body: JSON.stringify(this.body, undefined, 0),
      };
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
    const params: RequestInit = this.setParams();

    const request = await fetch(this.uri, params);

    const response = await request.json();

    this.pushHistory(response, request.status);

    this.updateData(response);

    if (!request.ok) {
      const message = "Failed fetch ";
      throw new Error(message);
    }
  };
}

export default Request;
