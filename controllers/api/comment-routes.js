const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const commentdata = await Comment.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });
        console.log(commentdata)
      res.status(200).json(commentdata);
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;