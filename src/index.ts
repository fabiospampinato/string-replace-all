
/* IMPORT */

import escape from 'string-escape-regex';

/* MAIN */

const replaceAll = ( str: string, find: string, replacement: string ): string => {

  return str.replace ( new RegExp ( escape ( find ), 'g' ), replacement );

};

/* EXPORT */

export default replaceAll;
