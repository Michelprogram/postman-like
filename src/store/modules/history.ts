import type IHistory from "@/interfaces/history";

const state = {
  histories: [
    {
      time: "0",
      httpCode: 100,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      id: 1,
    },
    {
      time: "0",
      httpCode: 199,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/2",
      method: "GET",
      id: 2,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/3",
      method: "GET",
      id: 3,
    },
    {
      time: "0",
      httpCode: 299,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/4",
      method: "GET",
      id: 4,
    },
    {
      time: "0",
      httpCode: 300,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/5",
      method: "GET",
      id: 5,
    },
    {
      time: "0",
      httpCode: 399,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/6",
      method: "GET",
      id: 6,
    },
    {
      time: "0",
      httpCode: 400,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/7",
      method: "GET",
      id: 7,
    },
    {
      time: "0",
      httpCode: 499,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/8",
      method: "GET",
      id: 8,
    },
    {
      time: "0",
      httpCode: 500,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/9",
      method: "GET",
      id: 9,
    },
    {
      time: "0",
      httpCode: 599,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/10",
      method: "GET",
      id: 10,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/11",
      method: "GET",
      id: 11,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/12",
      method: "GET",
      id: 12,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/13",
      method: "GET",
      id: 13,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/14",
      method: "GET",
      id: 14,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/15",
      method: "GET",
      id: 15,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/16",
      method: "GET",
      id: 16,
    },
    {
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/todos/17",
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
