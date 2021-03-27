import { api } from "../../api";

export const setHeader = ( token ) => {
  if ( token ) {
    // console.log( { api } );
    api.defaults.headers.common[ 'token' ] = token;
  } else {
    delete api.defaults.headers.common[ 'token' ];
  }
};
