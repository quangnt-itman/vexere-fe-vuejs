import { api } from '../../../api';
import jwtDecode from 'jwt-decode';
import * as types from './constants';
import router from '../../../router';
import { setHeader } from '../../../utils/setHeader';


const state = {
  loading: false,
  token: null,
  user: null,
  error: null,
};

const mutations = {
  [ types.M_AUTH_REQUEST ] ( state ) {
    state.loading = true;
    state.token = null;
    state.user = null;
    state.error = null;
  },

  [ types.M_AUTH_SUCCESS ] ( state, payload ) {
    state.loading = false;
    state.token = payload.token;
    state.user = payload.user;
    state.error = null;
  },

  [ types.M_AUTH_FAILED ] ( state, payload ) {
    state.loading = false;
    state.token = null;
    state.user = null;
    state.error = payload;
  },

  [ types.M_AUTH_CLEAR_DATA ] ( state ) {
    state.loading = false;
    state.token = null;
    state.user = null;
    state.error = null;
  }
};

const actions = {
  [ types.A_AUTH_LOGIN ] ( vuex, authUser ) {
    let { commit, dispatch } = vuex;
    commit( types.M_AUTH_REQUEST );
    console.log( vuex );
    console.log( authUser );

    api.post( '/login', authUser )
      .then( ( result ) => {
        console.log( result );

        if ( !result.data.token ) {
          throw new Error( result.data.message );
        } else {
          setHeader( result.data.token );
          let decode = jwtDecode( result.data.token );
          let payload = {
            token: result.data.token,
            user: decode
          };
          console.log( payload );
          commit( types.M_AUTH_SUCCESS, payload );
          localStorage.setItem( "token", result.data.token );
          localStorage.setItem( "exp", decode.exp );
          dispatch( types.A_AUTH_SET_TIME_OUT_LOGOUT, decode.exp );

          console.log( router );
          document.querySelector( '.modal-backdrop' ).remove();
          // router.replace( "/" );
          router.push( "/" );
        }
      } )
      .catch( ( error ) => {
        commit( types.M_AUTH_FAILED, error );
      } );
  },

  [ types.A_AUTH_LOGOUT ] ( { commit } ) {
    commit( types.M_AUTH_CLEAR_DATA );
    localStorage.removeItem( "token" );
    localStorage.removeItem( "exp" );
    router.replace( "/" );
  },

  [ types.A_AUTH_SET_TIME_OUT_LOGOUT ] ( { dispatch }, exp ) {
    setTimeout( () => {
      dispatch( types.A_AUTH_LOGOUT );
    }, exp );
  },

};

export default { state, mutations, actions };
