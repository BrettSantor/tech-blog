const router = require('express').Router();
const { User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');

// gets all posts for homepage
router.get('/', async (req, res) => {
  console.log(req.session.loggedIn)
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
router.get('/post/:id', withAuth, async (req, res) => {
  console.log('you hit the single post route');
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
       res.render('post', { post}); //, loggedIn: req.session.loggedIn });
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

  router.get('/dashboard', withAuth, async (req, res) => {
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

  
  module.exports = router;