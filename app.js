var express = require('express');
var _lodash = require('lodash');
var fs = require('fs');
var app = express();
var path = require('path');
var morgan = require('morgan');
const fileUpload = require('express-fileupload');
app.use(express.json());
// to support JSON-encoded bodies
app.use(express.urlencoded());
app.use(fileUpload());

var auth = {

    token: "someToken" // Never store password in this way!!!
}

app.use(function (req, res, next) {
    var token = req.headers["x-access-token"] || req.headers["authorization"];
    if (!token || auth.token !== token) {
        req.isAuth = false;
    } else {
        req.isAuth = true;
    }
    next();
})


function authSecure(req, res) {
    if (!req.isAuth) {
        return res.status(200).send(responseMethod("No Authorization to do this Action", true, 3));
    }
}


function notExist(el) {
    return el !== undefined ? el : {data: "Error getting this ID"};

}

function responseMethod(message, data, typeMessage) {
    return {message: message, data: data, typeMessage: typeMessage};
}

// not using the destructuring of objects const object { absolutePath, fn updateData, requestData} = arguments;
function readFile(absolutePath, fn = null, updateData = null, requestData = null) {
    updateData === null ?
        fs.readFile(absolutePath, function (err, data) {
            if (err) throw err;
            return fn(JSON.parse(data));
        }) :
        fs.readFile(absolutePath, function (err, data) {
            if (err) throw err;

            const _data = updateData(data);
            fs.writeFile(absolutePath, _data.data, function (err) {
                if (err) throw err;
                return requestData(_data.options);
            })
        });
}

//Log System
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}));


app.get('/api/all-methods', function (req, res) {


    res.status(200).set('Content-Type', 'text/html').type('html').sendFile(path.join(__dirname, 'public/methods.html'));

})

app.get('/api/cars', function (req, res) {


    readFile(`./data/cars.json`, function (data) {
        const pageCount = Math.ceil(data.length / 15);
        let page = parseInt(req.query.p);
        if (!page) page = 1;
        if (page > pageCount) page = pageCount, data = [];
        res.json({page: page, pageCount: pageCount, data: data.slice(page * 15 - 15, page * 15)});
    })

})


app.get('/api/car/:id', function (req, res) {

    readFile('./data/cars.json', function (data) {
        res.send(notExist(_lodash.find(data), function (el) {
            return el.id === parseInt(req.params.id)
        }))
    });


})

app.post('/api/car-add', function (req, res) {
    // authSecure(req, res);
    readFile('./data/cars.json', null, function (data) {
        var _data = JSON.parse(data);
        const newCar = _lodash.extend({id: (_data.slice(-1)[0]).id + 1}, req.body);
        _data.push(newCar);
        _data = JSON.stringify(_data);
        return {data: _data, options: newCar}
    }, function (car) {
        res.send(responseMethod("Car Created", car, 1));
    })

})


app.put('/api/car/:id', function (req, res) {
    // authSecure(req, res);


    readFile('./data/cars.json', null, function (data) {

        var _data = _lodash.map(JSON.parse(data), function (el) {
            return el.id === parseInt(req.body.id) ? req.body : el;
        })
        return {data: JSON.stringify(_data), options: req.body}
    }, function (car) {
        res.send(responseMethod("Car Updated", car, 1));
    })


})

app.delete('/api/car/:id', function (req, res) {
    // authSecure(req, res);
    readFile('./data/cars.json', null, function (data) {

        var _data = _lodash.remove(JSON.parse(data), function (el) {
            return (el.id !== parseInt(req.params.id))
        })

        return {data: JSON.stringify(_data), options: req.params.id}
    }, function (carDeleted) {
        res.send(responseMethod(`Car of ${carDeleted} deleted`, true, 1))
    })

})


app.get('/api/shops', function (req, res) {

    readFile('./data/shops.json', function (data) {
        const pageCount = Math.ceil(data.length / 15);
        let page = parseInt(req.query.p);
        if (!page) page = 1;
        if (page > pageCount) page = pageCount, data = [];
        res.json({page: page, pageCount: pageCount, data: data.slice(page * 15 - 15, page * 15)});
    });


});

app.get('/api/shop/:id', function (req, res) {

    readFile('./data/shops.json', function (data) {
        res.send(notExist(_lodash.find(data), function (el) {
            return el.id === parseInt(req.params.id)
        }))
    });


});

app.post('/api/shops-add', function (req, res) {
    authSecure(req, res);

    readFile('./data/shops.json', null, function (data) {
        var _data = JSON.parse(data);
        const newShopElement = _lodash.extend({id: _data.length + 1}, req.body);
        _data.push(newShopElement);
        _data = JSON.stringify(_data);
        return {data: _data, options: newShopElement}
    }, function (shop) {
        res.send(responseMethod("Shop Added", shop, 1));
    })


})

app.put('api/shop/:id', function (req, res) {
    authSecure(req, res);

    readFile('./data/shops.json', null, function (data) {
        var _data = _lodash.map(JSON.parse(data), function (el) {
            return el.id === parseInt(req.body.id) ? req.body : el;
        })

        return {data: JSON.stringify(_data), options: req.body}
    }, function (shop) {
        res.send(responseMethod("Shop Updated", shop, 1));
    })


})

app.delete('/api/shop/:id', function (req, res) {
    authSecure(req, res);
    readFile('./data/shops.json', null, function (data) {

        var _data = _lodash.remove(JSON.parse(data), function (el) {
            return (el.id !== parseInt(req.params.id))
        })

        return {data: JSON.stringify(_data), options: req.params.id}
    }, function (shop) {
        res.send(responseMethod(`shop of ${shop} deleted`, true, 1))
    })
})


app.post('/upload', function (req, res) {
    authSecure();

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.uploadServerFile;
    //console.log(sampleFile.mimetype);
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(`./public/uploads/${sampleFile.name}`, function (err) {
        if (err) return res.status(500).send(err);
        res.send('File uploaded!');
    });


    /*
    MultiPart
    _lodash.each(req.files, function (currentFile, index){
        currentFile.mv((`./public/uploads/${currentFile.name}`, function (err) {
            if (err) return res.status(500).send(err);
        }))
    }
    res.send(`File uploaded: ${currentFile.name}`);
    */
})


module.exports = app;
