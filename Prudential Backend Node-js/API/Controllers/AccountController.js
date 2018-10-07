'use strict';
var mongoose = require('mongoose');

var Account = mongoose.model('Account');



exports.processRequest = function (req, res) {
  if (req.body.result.action == "account") {
    getAccount(req, res)
  }
};

function getAccount(req, res) {
  let acctToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.team ? req.body.result.parameters.team : 'Unknown';
  Account.findOne({ accountNumber: acctToSearch }, function (err, teamExists) {
    if (err) {
      return res.json({
        speech: 'Something went wrong!',
        displayText: 'Something went wrong!',
        source: 'account'
      });
    }
    if (acctExists) {
      return res.json({
        speech: acctExists.street,
        displayText: acctExists.street,
        source: 'account'
      });
    }
    else {
      return res.json({
        speech: 'Currently I don\'t have information about this account',
        displayText: 'Currently I don\'t have information about this account',
        source: 'account'
      });
    }
  });
}
