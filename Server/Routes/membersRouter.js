const express = require('express');
const router=express.Router();
const MembersBl = require('../Models/MembersBl');
router.get('/', async function (req, res) {
    let data = await MembersBl.getMembers();
    return res.status(200).json(data);

}) 

router.get("/:id", async function (req, res) {
    const id = req.params.id
    const member = await MembersBl.getMembersId(id)
    res.status(200).json(member)
})
router.post("/", async function (req, res) {
    let user = req.body
    await MembersBl.createMembers(user)
    res.send("created")
})


router.put("/:id", async function (req, res) {
    const id = req.params.id
    const member = req.body

    const status = await MembersBl.updateMember(id, member)

    res.status(200).json({ msg: status })
})
router.route('/:id')
    .delete( function(req,resp)
    {
        let id = req.params.id;

        MembersBl.deleteMembers(id).then(status =>
            {
                return resp.json(status);
            })
    })
module.exports = router