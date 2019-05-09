module.exports = {
    getUsers : (req,res) => {
        let query = "SELECT * FROM `Products`";
        db_mysql.query(query, (err, results) => {
            if(err){
                return res.status(500).send(err);
            }
            else
            if(results != 0)
            
           res.status(200).send({products: results});
        })
    }
}