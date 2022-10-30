const SubsModels=require("./SubscriptionsModel")

const getSubs = () => {
    return new Promise((resolve, reject) => {
        SubsModels.find({}, (err, subs) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(subs)
        }
      })
    })
  }
  const createSubs = (obj) => {
    return new Promise((resolve, reject) => {
      let subs = new SubsModels(obj)
      subs.save((err, data) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(data)
        }
      })
    })
  }
  
          
  const deleteSubs = function(id)
{
    return new Promise((resolve,reject) =>
    {
        SubsModels.findByIdAndDelete(id, function(err)
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
const updatSubs = (id, member) => {
  return new Promise((resolve, reject) => {
    SubsModels.findByIdAndUpdate(id, member, (err) => {
          if (err) {
              reject(err)
          } else {
              resolve("Updated")
          }
      })
  })
}

  module.exports = {getSubs,createSubs,deleteSubs,updatSubs}