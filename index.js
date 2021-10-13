var nodeq = require("node-q");



const q_queries = {
    test: '2+2',
    createSampleTable: 'sample:([]city:`Ashkelon`Ashdod`TelAviv;name:`yuval`atia`blabla;price:`1231245`3453452`2343)',
    getSampleTable: 'sample',
    insertRow: '`sample insert (`BeitShemesh;`maya;`345876)',
    getAllCities: 'select city from flip sample',
    updateNewColumn: 'update eye:`blue`brown`green`purple from `sample',
    updateCell: 'update eye:`red from `sample where eye=`blue'
}

nodeq.connect({host: "localhost", port: 5010}, function(err, con) {
	if (err) throw err;
	console.log("connected");

    // test
    con.k(q_queries.test, function(err, res) {
        if (err) throw err;
        console.log("kdb says: ", res); 
    });

     // create sample table
     con.k(q_queries.createSampleTable, function(err, res) {
        if (err) throw err;
        console.log("kdb says: ", res); 
    });

    // get sample table
    con.k(q_queries.getSampleTable, function(err, res) {
        if (err) throw err;
        console.log("kdb says: ", res); 
    });

    // insert row into sample
    con.k(q_queries.insertRow, function(err, res) {
        if (err) throw err;
        console.log("index of row inserted to sample: ", res); 
    });

    // get only cities from sample
    con.k(q_queries.getAllCities, function(err, res) {
        if (err) throw err;
        console.log("kdb says: ", res); 
    });

    // update column in sample
    con.k(q_queries.updateNewColumn, function(err, res) {
        if (err) throw err;
        console.log("kdb says: ", res); 
    });

    // update cell in sample
    con.k(q_queries.updateCell, function(err, res) {
        if (err) throw err;
        console.log("kdb says: ", res); 
    });

    // get sample table
     con.k(q_queries.getSampleTable, function(err, res) {
        if (err) throw err;
        console.log("kdb says: ", res); 
    });

});
