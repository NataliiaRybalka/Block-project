import { bookshelfConf } from './bookshelf';

import { User } from './User';
import { USER_TOKEN } from '../../constants/database.enum';

export const UserToken = bookshelfConf.Model.extend({
    tableName: USER_TOKEN,
    user_id: function() {
        return this.hasMany(User);
    }
});
