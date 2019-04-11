var conn = require('./db');

module.exports = {
  dashboard() {

    return new Promise((resolve, reject) => {

      conn.query(`
        SELECT 
        (SELECT COUNT(*) FROM tb_users) AS nrusers;
      `, (err, results) => {

          if (err) {
            reject(err);
          } else {
            resolve(results[0])
          }

        });

    });

  },
  getParams(req, params) {

    return Object.assign({}, {
      menus: req.menus,
      user: req.session.user
    }, params);

  },
  getMenus(req) {
    let menus = [
      {
        text: "Dashboard",
        href: "/admin/",
        icon: "home",
        active: false
      },
      {
        text: "Usuários",
        href: "/admin/users",
        icon: "users",
        active: false
      },
      {
        text: "E-mails",
        href: "/admin/emails",
        icon: "envelope",
        active: false
      },
      {
        text: "Model",
        href: "/admin/menus",
        icon: "cutlery",
        active: false
      }
    ];
    menus.map(menu => {

      if (menu.href === `/admin${req.url}`) menu.active = true;

    });
    return menus;
  }
};