const db = require('../db/index')

exports.creerCommande = async (req, res, next) => {
    try {
        req.body.date = new Date();
        const result = await db.insertOne('pizzaecalzones', 'commandes', req.body);
        if (result.insertedCount === 1) {
            res.json({
                error: null,
                result: 'OK'
            });
        }
    } catch (e) { 
        console.log('Erreur dans creerCommande : ' + e.message);
        return next(e);
    }
};