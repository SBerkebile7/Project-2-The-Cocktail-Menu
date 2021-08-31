const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Save } = require('../models');
// const search = require('../public/javascript/search');

// get all posts for homepage
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
        ],
        include: [
           {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
    if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
    }

    const post = dbPostData.get({ plain: true });

    res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// allows users to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// allows users to signup using a username
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

// allows users to see saved posts
router.get('/saved', (req, res) => {
    if (req.session.loggedIn) {
        res.render('saved', {
            loggedIn: req.session.loggedIn
        });
        return;
    }

    res.redirect('/');
});

// allows users to see our Contact Us page
router.get('/contact', (req, res) => {
    if (req.session.loggedIn) {
        res.render('contact', {
            loggedIn: req.session.loggedIn
        });
        return;
    }
    
    res.render('contact');
});

router.get('/search', (req, res) => {
    if (req.session.loggedIn) {
        res.render('search', {
            loggedIn: req.session.loggedIn
        });
        return;
    }
    
    res.render('search');
});

// allows users to see our About Us page
router.get('/about', (req, res) => {
    if (req.session.loggedIn) {
        res.render('about', {
            loggedIn: req.session.loggedIn
        });
        return;
    }
    
    res.render('about');
});

// allows users to see our Blog page
router.get('/blog', (req, res) => {
    if (req.session.loggedIn) {
        res.render('blog', {
            loggedIn: req.session.loggedIn
        });
        return;
    }
    
    res.render('blog');
});

// router.get('/search', search, (req, res) => {
//     var searchResult = req.searchResult;

//     if(req.session.loggedIn) {
//         res.render('search', {
//             results: searchResult.length,
//             searchTerm: req/searchTerm,
//             searchResult: searchResult,
//             category: req.category,
//         });
//         return;
//     }

//     res.render('search', {
//         results: searchResult.length,
//         searchTerm: req/searchTerm,
//         searchResult: searchResult,
//         category: req.category,
//     });
// });

module.exports = router;
