import Backbone from 'backbone';

import settings from '../settings';

const Document = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/Documents`,
  idAttribute: '_id',
  defaults: {
    read: false
  }
})

export default Document;
