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

exports.recupererCommandes = async (req, res, next) => {
    try {
        const result = await db.get('pizzaecalzones', 'commandes');
        result.map(el => {
            el.produits = el.produits.map(p => p.designation).join(',');
        });
        result.sort((a,b) => new Date(b.date) - new Date(a.date))
        res.json(result);
    } catch (e) { 
        console.log('Erreur dans recupererCommandes : ' + e.message);
        return next(e);
    }
};
