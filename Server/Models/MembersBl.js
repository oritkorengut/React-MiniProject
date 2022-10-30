const MembersModels=require("./MembersModel")
const getMembers = () => {
    return new Promise((resolve, reject) => {
        MembersModels.find({}, (err, user) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(user)
        }
      })
    })
  }
  const getMembersId = (id) => {
    return new Promise((resolve, reject) => {
      MembersModels.findById(id, (err, member) => {
            if (err) {
                reject(err)
            } else {
                resolve(member)
            }
        })
    })
}


const updateMember = (id, member) => {
  return new Promise((resolve, reject) => {
      MembersModels.findByIdAndUpdate(id, member, (err) => {
          if (err) {
              reject(err)
          } else {
              resolve("Updated")
          }
      })
  })
}
  const createMembers = (obj) => {
    return new Promise((resolve, reject) => {
      let user = new MembersModels(obj)
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

  const deleteMembers = function(id)
{
    return new Promise((resolve,reject) =>
    {
        MembersModels.findByIdAndDelete(id, function(err)
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


  module.exports = {getMembers,createMembers,deleteMembers,getMembersId,updateMember}