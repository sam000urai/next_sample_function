import { url } from '../../const';
import { regionFunctions } from '../../helper';
/**
 * 本の一覧を取得
 */
export const getBookList = regionFunctions.https.onCall(
  async (data, context) => {
    console.log('🚀 ~ file: createCardInfo.ts:8 ~ data:', url);
    return { test: 'test functions' };
  }
);
