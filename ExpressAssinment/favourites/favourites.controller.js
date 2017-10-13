const fs = require('fs');

const favouritesModel=require('./favourites.entity.js').favouritesModel;

const postDataIntoFile = function postDataIntoFile(req, callback) {
  favouritesModel.insertMany(req.body,(err,data) =>{
   try{
    if (err) {
      console.log(
        "Encountered error at favouritesModule::insertmany, error: ",
        err);
        throw err;
    }
  }
    
catch(err){
    console.log(data);
    console.log("catch block")
    return callback(err, {});
    
}
return callback(null, JSON.stringify(data));
  });
 /* fs.readFile('./favourites/favourites.json', (err, data) => {
    try {
      if (err) {
        throw (err);
      }
      const obj = JSON.parse(data);
      console.log(obj);
      console.log(req.body);
      obj.favourites.push((req.body));
      console.log(obj);

      fs.writeFile('./favourites/favourites.json', JSON.stringify(obj, null, 3), (err) => {
        if (err) {
          throw (err);
        }
        return false;
      });
    } catch (err) {
      console.log('caught the error in catch block');
      return callback(err, {});
    }
    callback(null, {});
  });*/
};
const sendData = function (req, callback) {

  favouritesModel.find(function(err, entityDocument) {
   try { 
    if (err) {
      console.log(
        "Encountered error at moduleOneController::getEntityOfId, error: ",
        err);
        throw err;
    }

    if (!entityDocument) {
      console.log('Requested Entity not found, query: ', query);
      return callback('Entity not available or not found..!', {});
      
    }
  }
  catch(err){
    console.log('sendData caught block')
    callback(err,{});
  }

    console.log(entityDocument);
     callback(null, JSON.stringify(entityDocument));
  });

  /*fs.readFile('./favourites/favourites.json', (err, data) => {
    try {
      if (err) {
        throw (err);
      }
    } catch (err) {
      console.log('caught the error in catch block');
      return callback(err, {});
    }
    callback(null, data);
  });*/
};
const deleteData = function (req, callback) {
  favouritesModel.findOneAndRemove({
    id: req.params.placeid }, (err,result) =>{
      if(err)
      {
        console.log(err);
        return callback(err, {});
      }
      else {
        console.log(result);
        if(!result){
          callback("no element exist with the given id",{});
        }
        else
        callback(null, JSON.stringify(result));
      }
  });
  /*fs.readFile('./favourites/favourites.json', (err, data) => {
    try {
      if (err) {
        throw (err);
      }
      const obj = JSON.parse(data);
      console.log(req.params.placeid);
      // console.log(obj);
      // console.log(req.body);
      const index = obj.favourites.find(element =>
        // console.log("selected element",element['id']);
        (req.params.placeid == element.id));

      // console.log("index cale",index);
      const indexN = obj.favourites.indexOf(index);
      // console.log(indexN);
      obj.favourites.splice(indexN, 1);
      console.log(obj);

      fs.writeFile('./favourites/favourites.json', JSON.stringify(obj, null, 3), (err) => {
        if (err) {
          throw (err);
        }
        return false;
      });
    } catch (err) {
      console.log('caught the error in catch block');
      console.log(err);
      return callback(err, {});
    }
    callback(null, {});
  });*/
};
const updateData = function (req, callback) {
  favouritesModel.findOneAndUpdate(
    {id:req.params.placeid},
    {userComments:req.body.userComments},{new :true} ,(err,data) =>
   {
     if(err)
     {
       console.log(err);
       return callback(err, {});
     }
     else {
       console.log(data);
       if(!data){
         callback("no element exist with the given id",{});
       }
       else
       callback(null, JSON.stringify(data));
     }
   });
  
  
  /*let index;
  fs.readFile('./favourites/favourites.json', (err, data) => {
    try {
      if (err) {
        throw (err);
      }
      const obj = JSON.parse(data);
      console.log(obj);
      console.log(req.body);
       index = obj.favourites.find(element => (req.params.placeid === element.id));
      const indexN = obj.favourites.indexOf(index);
      index.userComments = req.body.userComments;


      console.log(indexN);
      console.log(obj);

      fs.writeFile('./favourites/favourites.json', JSON.stringify(obj, null, 3), (err) => {
        if (err) {
          throw (err);
        }
        return false;
      });
    } catch (err) {
      console.log('caught the error in catch block');
      console.log(err);
      return callback(err, {});
    }
    callback(null, JSON.stringify(index));
  });*/
};


module.exports = {
  postDataIntoFile,
  sendData,
  deleteData,
  updateData,
};
