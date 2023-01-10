exports.paginaInicial = (req, res) => {
    // res.send('Hello <b> world </b>');
    
   res.render('index');
   return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};