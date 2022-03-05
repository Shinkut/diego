const controller ={}


controller.read = (req, res)=>{
    req.getConnection((e, con) =>{
        if (e){
            res.json(e)
        }
        con.query('SELECT `clientes`.*, `estados`.`edesc`FROM `clientes` LEFT JOIN `estados` ON `clientes`.`estatus` = `estados`.`id`;', (e, cliente) =>{
            if(e){
                res.json(e)
            }
            res.render('vclientes',{
                data: cliente  
            }) 
            
        })
    })
}

controller.infoP = (req, res)=>{
    const {id}=req.params
    req.getConnection((e, con)=>{
        if(e){
            res.json(e)
        }
        con.query('SELECT `clientes`.*, `estados`.`edesc`FROM `clientes` LEFT JOIN `estados` ON `clientes`.`estatus` = `estados`.`id` WHERE clientes.id= ?', [id],(e, clientes)=>{
            if(e){
                res.json(e)
            }
            res.render('vInfoP', {
                data:clientes
            })
        })
    })
}
controller.alta = (req, res)=>{
    res.render('vAltaclientes')
}

controller.insert = (req, res) => {
    const cliente = req.body
    console.log(cliente)
    req.getConnection((e,con)=>{
        if(e){
            res.json(e)
        }
        con.query('Insert into clientes set ?', [cliente],(e,cliente) =>{
            if(e){
                res.json(e)
            }
            res.redirect('/')
        }
        )
    }    
    )
}


controller.update = (req, res) => {
    const obs  = req.body.obs
    const cliente = req.body.est_upd
    const {id}=req.params
    req.getConnection((e,con) =>{
        if(e){
            res.json(e)
            console.log('no conecta')
        }
        console.log(cliente)
        con.query("UPDATE clientes SET estatus='"+cliente+"' WHERE clientes.id= "+id, [cliente],(e, rows) => {
            if(e){
                res.json(e)
                console.log('error en query')
            }
            res.redirect('back')      
        }
    )}
        )}
           


controller.delete =(req, res) =>{
  const { id } = req.params
   req.getConnection((e,con)=>{
       if(e){
           res.json(e)
       }
       con.query('delete from clientes where id= ?',[id],(e, rows) =>{
           if(e){
               res.json(e)
           }
           res.redirect('/')

       })
   })
}

module.exports = controller