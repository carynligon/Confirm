import Backbone from 'backbone';
import UserMod from '../Models/UserMod';
import settings from '../settings';

const UserCollection = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/user/kid_SyeeXbpO`,
  model: UserMod
});

export default UserCollection;
