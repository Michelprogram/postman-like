interface IParam {
  key: string;
  value: string;
}

// State : données du magasin
const state = {
  params: [
    {
      key: "",
      value: "",
    },
  ] as Array<IParam>,
};

/*
  Mutations : méthode qui manipulent les données
  Les mutations ne peuvent pas être asynchrones !!!
   */
const mutations = {
  updateById: (state: any, payload: any): void => {
    state.params[payload.index] = payload.param;
  },
  addQuery: (state: any): void => {
    const emptyParam: IParam = {
      key: "",
      value: "",
    };
    state.params.push(emptyParam);
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
  getById: (state: any, payload: any): string => {
    return state[payload.id];
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
