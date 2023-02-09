const router = require('express').Router();
const { Post, Comment} = require('../models');

// gets all posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['content', 'user_id'],
                },
            ],
        });

        const posts = dbPostData.map((post) =>
        post.get({ plain: true})
        );
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//gets one post
router.get('/post/:id', async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: [
              'id',
              'content',
              'post_id',
              'user_id',
            ],
          },
        ],
      });
  
      const post = dbPostData.get({ plain: true });
      console.log(post);
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // login route
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;