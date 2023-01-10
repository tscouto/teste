module.exports =(req, res, next) => {
    if(req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Tiago', 'Nao use tiago');
         console.log(`Vi que voce postou ${req.body.cliente}`);
    }
    
    next();
};