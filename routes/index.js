const express = require('express');
const router  = express.Router();

function checkIfAdmin(req, res, next){
  if (req.user.role === "ADMIN") return next();
  res.send('No tienes permisos de administrador :)')
}

//checkRole('role')
const checkRole = (role) => (req, res, next) => {// una funcion que recibe otra funcion
    if (!req.isAuthenticated()) return res.redirect('/login');
    if (req.user.role === role) return next();
    return res.send('no tienes permisos de admin :)');
}

//admin panel
router.get('/admin', checkRole('EDITOR'), (req, res, next) => {
  res.send('hola admin')
});

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;