const db = require('../db/index')

exports.getData = async (req, res, next) => {
    try {
        const [
            pizzas,
            calzones,
            boissons,
            desserts,
            formules,
            clients,
            salades
        ] = await Promise.all([
            db.get('pizzaecalzones', 'pizzas'),
            db.get('pizzaecalzones', 'calzones'),
            db.get('pizzaecalzones', 'boissons'),
            db.get('pizzaecalzones', 'desserts'),
            db.get('pizzaecalzones', 'formules'),
            db.get('pizzaecalzones', 'clients'),
            db.get('pizzaecalzones', 'salades'),
        ]);
        res.json({
            pizzas,
            calzones,
            boissons,
            desserts,
            formules,
            clients,
            salades
        });
    } catch (e) { 
        console.log('Erreur in getData : ' + e.message);
        return next(e);
    }
};