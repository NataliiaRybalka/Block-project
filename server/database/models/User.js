import { bookshelfConf } from './bookshelf';

import { Powerbank } from './Powerbank';
import { USER } from '../../constants/database.enum';

export const User = bookshelfConf.Model.extend({
    tableName: USER,
    powerbank_id: function() {
        return this.hasMany(Powerbank);
    }
});
