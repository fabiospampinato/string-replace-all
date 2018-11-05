
/* IMPORT */

import * as _ from 'lodash';

/* STRING REPLACE ALL */

function stringReplaceAll ( str: string, find: string, replacement: string ): string {

  return str.replace ( new RegExp ( _.escapeRegExp ( find ), 'g' ), replacement );

}

/* EXPORT */

export = Object.assign ( stringReplaceAll, { default: stringReplaceAll } );
