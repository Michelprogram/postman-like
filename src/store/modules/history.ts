import type IHistory from "@/interfaces/history";

const state = {
  histories: [
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 1,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 2,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 3,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 4,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 5,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 6,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 7,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 8,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 9,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 10,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 11,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 12,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 13,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 14,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 15,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 16,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 17,
    },
  ],
};

/*
  Mutations : méthode qui manipulent les données
  Les mutations ne peuvent pas être asynchrones !!!
   */
const mutations = {
  add: (state: any, payload: any): void => {
    const newHistory: IHistory = payload.history;
    newHistory.id = state.histories.length + 1;
    state.histories.push(newHistory);
  },
  delAll: (state: any): void => {
    state.histories = [];
  },
};
/*
  Actions : méthodes du magasin qui font appel aux mutations
  Elles peuvent être asynchrones !
   */
const actions = {};

/*
  Getters : retourne les données du magasin
  Fonctionne comme les propriétés calculées
  Sert à calculer, trier, filtrer ou formater les donneés
   */
const getters = {
  all: (state: any): Array<IHistory> => {
    return state.histories;
  },
  byId:
    (state: any) =>
    (id: number): IHistory => {
      return state.histories.find((el: IHistory) => el.id == id);
    },
};

/*
  Exporte les constantes, variables du fichier
  On pourra ainsi les récupérer, les importer dans un autre fichier JS.
  
  namespace: true, ajoute un namespace l'objet retourné.
   */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
