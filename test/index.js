
/* IMPORT */

import {describe} from 'fava';
import stringReplaceAll from '../dist/index.js';

/* MAIN */

describe ( 'stringReplaceAll', it => {

  it ( 'Replaces all the occurrences', t => {

    const str = 'A tiny tiny tiger';

    t.is ( stringReplaceAll ( str, 'tiny', 'small' ), 'A small small tiger' );

  });

});
