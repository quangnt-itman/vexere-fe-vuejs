import { api } from '../../../api';
import * as types from './constants.js';

const state = {
  loading: false,
  data: null,
  error: null
};

const mutations = {
  [ types.M_USER_REQUEST ] ( state ) {
    state.loading = true;
    state.data = null;
    state.error = null;
  },

  [ types.M_USER_SUCCESS ] ( state, payload ) {
    state.loading = false;
    state.data = payload;
    state.error = null;
  },

  [ types.M_USER_FAILED ] ( state, payload ) {
    state.loading = false;
    state.data = null;
    state.error = payload;
  }
};

const actions = {
  [ types.A_USER_CREATE ] ( vuex, SignUpUser ) {
    let { commit } = vuex;
    commit( types.M_USER_REQUEST );

    api.post( '/users', SignUpUser )
      .then( ( result ) => {
        console.log( result );
        commit( types.M_USER_SUCCESS, result.data );
      } )
      .catch( ( error ) => {
        console.log( error );
      } );
  }
};

export default { state, mutations, actions };
