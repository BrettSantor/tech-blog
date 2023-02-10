const { Post, User} = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dbPostData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Post,
                     attributes: ['content', 'user_id'],
                },
            ],
        });
        const dashboard = dbPostData.map((post) =>
        post.get({ plain: true})
        );
        res.render('dashboard', {
            dashboard,
            loggedIn: req.session.user_id,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get post by id
module.exports = router;