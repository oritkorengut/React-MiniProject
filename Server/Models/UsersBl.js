const UsersModels=require("./UsersModels")

const getUser = () => {
    return new Promise((resolve, reject) => {
        UsersModels.find({}, (err, user) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(user)
        }
      })
    })
  }
  const createUser = (obj) => {
    return new Promise((resolve, reject) => {
      let user = new UsersModels(obj)
      user.save((err, data) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(data)
        }
      })
    })
  }
  
          
  const deleteUser = function(id)
{
    return new Promise((resolve,reject) =>
    {
        UsersModels.findByIdAndDelete(id, function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve('Deleted !');
                }
            })
    });
}

  module.exports = {getUser,createUser,deleteUser}