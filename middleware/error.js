const handleValidationError = (err,res) =>{
    let errors = err.errors.map(el=>el.message);
    if(errors.length>1){
        let chain = "";
        for(let i = 0;i < error.length; i++){
            chain += errors[i] + "||";
        }
        const string = chain.slice(0,-4);
        res.status(400).send({messages:string});
    }else{
        res.status(400).send({messages:errors});
    }
}

const typeError = (err,req,res,next)=>{
    const errOrigin = err.errOrigin
    if(err.name==='SequelizeValidationError'||err.name==='SequelizeUniqueConstaintError'){
        return err = handleValidationError(err,res);
    }else
    if(errOrigin === 'User'){
        res.status(500).send('There was a problem when creating user');
    }else{
        res.status(500).send('There was a proble when creating model');
    }
    
}

module.exports = { typeError }