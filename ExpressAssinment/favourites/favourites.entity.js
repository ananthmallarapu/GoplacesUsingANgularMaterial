const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    placeName: { type: String, required: true },
    id: { type: String, required: true },
    userComments: { type: String}
    
  }, {collection: 'favourites', versionKey: false});
  
  schema.index({id: 1}, {unique: true});
  
  const model = mongoose.model('favourites', schema);
  
  module.exports = {
    favouritesModel: model
  };