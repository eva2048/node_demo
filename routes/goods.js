var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');
var Contacts = require('../models/contacts');

//连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_dumall');
mongoose.connection.on('connected', function() {
    console.log("success")
})
mongoose.connection.on('error', function() {
    console.log("fail")
})
mongoose.connection.on('disconnected', function() {
    console.log("disconnected")
})
router.get("/", function(req, res, next) {
    Goods.find({}, function(err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message
            })
        } else {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                },
            })
        }
    })
})
// router.get("/contact", function(req, res, next) {
//     Goods.find({}, function(err, doc) {
//         if (err) {
//             res.json({
//                 status: '1',
//                 msg: err.message
//             })
//         } else {
//             res.json({
//                 status: '0',
//                 msg: '',
//                 result: {
//                     count: doc.length,
//                     list: doc
//                 },
//             })
//         }
//     })
// })
router.post("/contact", function(req, res, next) {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	// Contacts.find({}, function(err, doc) {
 //        if (err) {
 //            res.json({
 //                status: '1',
 //                msg: err.message
 //            })
 //        } else {
 //            res.json({
 //                status: '0',
 //                msg: '',
 //                result: {
 //                    count: doc.length,
 //                    list: doc
 //                },
 //            })
 //        }
 //    })
    Contacts.create({
        phone: req.body.phone,
        wechat: req.body.wechat,
        desc: req.body.desc,
        createTime: req.body.createTime
    },function(err,doc){
    	if (err) {
            res.json({
                status: '1',
                msg: err.message
            })
        } else {
            res.json({
                status: '0',
                msg: '',
                result: '成功'
            })
        }
    })
})
module.exports = router;