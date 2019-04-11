var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus');
var blog = require('./../inc/blog');
var contact = require('./../inc/contact');
var whoweare = require('./../inc/whoweare')
var contacts = require('./../inc/contacts');
var router = express.Router();

router.get('/', function (req, res, next) {
  menus.getMenus().then(results => {
    res.render('index', {
      title: 'Restaurante Saboroso',
      menus: results,
      isHome: true
    });
  });
});

router.get('/blog', function (req, res, next) {
  blog.render(req, res);
});

router.get('/contact', function (req, res, next) {
  contact.render(req, res);
});

router.get('/whoweare', function (req, res, next) {
  whoweare.render(req, res);
});

router.get('/contacts', function (req, res, next) {

  contacts.render(req, res);

});

router.post('/contacts', function (req, res, next) {

  if (!req.body.name) {
    contacts.render(req, res, 'Digite o nome');
  } else if (!req.body.email) {
    contacts.render(req, res, 'Digite o email');
  } else if (!req.body.message) {
    contacts.render(req, res, 'Digite a mensagem');
  } else {

    contacts.save(req.body).then(results => {

      req.body = {};

      contacts.render(req, res, null, 'Contato enviado com sucesso');

    }).catch(err => {

      contacts.render(req, res, err.message);

    });

  }

});

router.get('/menus', function (req, res, next) {

  menus.getMenus().then(results => {

    res.render('menus', {
      title: 'Menus - Restaurante Saboroso',
      background: 'images/img_bg_1.jpg',
      h1: 'Saboreie nosso menu!',
      menus: results
    });

  });

});

module.exports = router;
