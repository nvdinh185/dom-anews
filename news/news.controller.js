const express = require('express');
const router = express.Router();

const newsHandler = require('./news.handler');
const newsMiddleware = require('./news.middleware');

// routes
router.get('/list-news', getListNews);
router.get('/list-news-by-cat', getListNewsByCat);
router.get('/detail', getNewsDetail);
router.get('/cats', getCategories);

router.post('/save-contact', newsMiddleware.uploadFile, postContact);

module.exports = router;

function getListNews(req, res, next) {
    newsHandler.getListNews()
        .then(listNews => res.json(listNews))
        .catch(err => next(err));
}

function getListNewsByCat(req, res, next) {
    newsHandler.getListNewsByCat(req.query)
        .then(listNews => res.json(listNews))
        .catch(err => next(err));
}

function getNewsDetail(req, res, next) {
    newsHandler.getNewsDetail(req.query)
        .then(news => res.json(news))
        .catch(err => next(err));
}

function getCategories(req, res, next) {
    newsHandler.getCategories()
        .then(listNews => res.json(listNews))
        .catch(err => next(err));
}

function postContact(req, res, next) {
    newsHandler.postContact(req.form_data)
        .then(result => res.json(result))
        .catch(err => next(err));
}