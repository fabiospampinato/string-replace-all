
/* IMPORT */

import {describe} from 'ava-spec';
import stringReplaceAll from '../dist';

/* STRING REPLACE ALL */

describe ( 'stringReplaceAll', it => {

  it ( 'Replaces all the occurrences', t => {

    const str = 'A tiny tiny tiger';

    t.is ( stringReplaceAll ( str, 'tiny', 'small' ), 'A small small tiger' );

  });

});
