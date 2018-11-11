
/* IMPORT */

import escapeRegExp = require ( 'lodash/escapeRegExp' );

/* STRING REPLACE ALL */

function stringReplaceAll ( str: string, find: string, replacement: string ): string {

  return str.replace ( new RegExp ( escapeRegExp ( find ), 'g' ), replacement );

}

/* EXPORT */

export default stringReplaceAll;
