import type IHistory from "@/interfaces/history";

const state = {
  histories: [
    {
      time: "0.25",
      httpCode: 200,
      data: "ouiooui",
      request: "http://jetest.com",
      method: "GET",
    },
  ] as Array<IHistory>,
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
