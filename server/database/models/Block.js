import { bookshelfConf } from './bookshelf';

import { BLOCK } from '../../constants/database.enum';

export const Block = bookshelfConf.Model.extend({
    tableName: BLOCK
});
