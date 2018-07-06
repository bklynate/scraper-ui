/* eslint-disable no-shadow  */

import devKeys from './dev';
import prodKeys from './prod';

const shouldUseProdKeys = process.env.NODE_ENV === 'production';

const exportKeys = shouldUseProdKeys => {
  if (shouldUseProdKeys) return prodKeys;
  return devKeys;
};

export default exportKeys(shouldUseProdKeys);
