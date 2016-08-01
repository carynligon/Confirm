import Backbone from 'backbone';

import settings from '../settings';

import Document from '../Models/Document';

const DocumentsCollection = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/kid_SyeeXbpO/Documents`,
  model: Document
});

export default DocumentsCollection;
