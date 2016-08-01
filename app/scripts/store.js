import DocumentsCollection from './Collections/DocumentsCollection';
import UserCollection from './Collections/UserCollection';

let store= {
  documentsCollection: new DocumentsCollection(),
  userCollection: new UserCollection()
}

export default store;
