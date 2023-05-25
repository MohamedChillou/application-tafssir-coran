import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            titre: localStorage.getItem('maVariable1') || 'valeur initiale',
            body: localStorage.getItem('maVariable2') || 'valeur initiale',
            tafsir: localStorage.getItem('maVariable3') || 'valeur initiale',
            mofasir: localStorage.getItem('maVariable4') || 'valeur initiale',
            nAya: localStorage.getItem('maVariable5') || 'valeur initiale',
            sura: localStorage.getItem('maVariable6') || 'valeur initiale',



          };
    },
    mutations: {
        modifierTitre(state, nouvelleValeur) {
            state.titre = nouvelleValeur;
            localStorage.setItem('maVariable1', nouvelleValeur);
          },
          modifierBody(state, nouvelleValeur1) {
            state.body = nouvelleValeur1;
            localStorage.setItem('maVariable2', nouvelleValeur1);
          },
          modifierTafsir(state, nouvelleValeur2) {
            state.tafsir = nouvelleValeur2;
            localStorage.setItem('maVariable3', nouvelleValeur2);
          },
          modifierMofasir(state, nouvelleValeur3) {
            state.mofasir = nouvelleValeur3;
            localStorage.setItem('maVariable4', nouvelleValeur3);
          },
          modifierNAya(state, nouvelleValeur4) {
            state.nAya = nouvelleValeur4;
            localStorage.setItem('maVariable5', nouvelleValeur4);
          },
          modifierSura(state, nouvelleValeur5) {
            state.sura = nouvelleValeur5;
            localStorage.setItem('maVariable6', nouvelleValeur5);
          },
            },
    actions: {
      // Vos actions pour effectuer des opérations asynchrones
    },
    getters: {
      // Vos getters pour accéder à l'état global
    },
    modules: {
      // Vos modules Vuex (si nécessaire)
    },
  });