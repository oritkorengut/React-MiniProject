const express = require('express');
const router=express.Router();
const SubsBl = require('../Models/SubscriptionsBl');
router.get('/', async function (req, res) {
    let data = await SubsBl.getSubs();
    return res.status(200).json(data);

}) 
router.post("/", async function (req, res) {
    let subs = req.body
    await SubsBl.createSubs(subs)
    res.send("created")
})
router.route('/:id')
    .delete( function(req,resp)
    {
        let id = req.params.id;

        SubsBl.deleteSubs(id).then(status =>
            {
                return resp.json(status);
            })
    })
    router.put("/:id", async function (req, res) {
        const id = req.params.id
        const member = req.body
    
        const status = await SubsBl.updatSubs(id, member)
    
        res.status(200).json({ msg: status })
    })
module.exports = router