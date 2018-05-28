 module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({ error: 'Debes tener un usuario activo con token valido' });
    }

    next();
};