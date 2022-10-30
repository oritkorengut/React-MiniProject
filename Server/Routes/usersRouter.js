const express = require('express');
const router=express.Router();
const UsersBl = require('../Models/UsersBl');
router.get('/', async function (req, res) {
    let data = await UsersBl.getUser();
    return res.status(200).json(data);

}) 
router.post("/", async function (req, res) {
    let user = req.body
    await UsersBl.createUser(user)
    res.send("created")
})
router.route('/:id')
    .delete( function(req,resp)
    {
        let id = req.params.id;

        UsersBl.deleteUser(id).then(status =>
            {
                return resp.json(status);
            })
    })
module.exports = router