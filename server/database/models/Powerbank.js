import { bookshelfConf } from './bookshelf';

import { Block } from './Block';
import { POWERBANK } from '../../constants/database.enum';

export const Powerbank = bookshelfConf.Model.extend({
    tableName: POWERBANK,
    block_id: function() {
        return this.hasMany(Block);
    }
});
