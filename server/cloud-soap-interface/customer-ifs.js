/**
 * @author qianqing
 * @create by 16-3-1
 * @description
 */
var util = require('util');
var customerObj = require('./object/customerObj');

var CustomerIFS = function (app) {
  this.DS = app.datasources.CustomerSoap;
  Object.call(this);
};
util.inherits(CustomerIFS, Object);
exports = module.exports = CustomerIFS;

CustomerIFS.prototype.getCaptcha = function (data, callback) {
  var Customer = this.DS.models.Customer;
  var xml = customerObj.getCaptchaXML(data);
  Customer.SendVerificationCode(xml, function (err, response) {
    try {
      callback(err, JSON.parse(response.SendVerificationCodeResult));
    } catch (e) {
      console.error('CustomerIFS getCaptcha Exception: ' + e);
      callback(err, {IsSuccess: false, ErrorInfo:'服务异常'});
    }
  });
};

CustomerIFS.prototype.register = function (data, callback) {
  var Customer = this.DS.models.Customer;
  var xml = customerObj.registerXML(data);
  Customer.RegisterByVerCode(xml, function (err, response) {
    try {
      callback(err, JSON.parse(response.RegisterByVerCodeResult));
    } catch (e) {
      console.error('CustomerIFS register Exception: ' + e);
      callback(err, {IsSuccess: false, ErrorDescription:'服务异常'});
    }
  });
};

CustomerIFS.prototype.login = function (obj, callback) {
  var Customer = this.DS.models.Customer;
  var xml = customerObj.loginXML(obj);
  Customer.LogIn(xml, function (err, response) {
    try {
      callback(err, JSON.parse(response.LogInResult));
    } catch (e) {
      console.error('CustomerIFS login Exception: ' + e);
      callback(err, {IsSuccess: false, ErrorDescription:'服务异常'});
    }
  });
};

CustomerIFS.prototype.forgetPassword = function (obj, callback) {
  var Customer = this.DS.models.Customer;
  var xml = customerObj.forgetPasswordXML(obj);
  Customer.ModifyPasswordByVerCode(xml, function (err, response) {
    try {
      callback(err, JSON.parse(response.ModifyPasswordByVerCodeResult));
    } catch (e) {
      console.error('CustomerIFS forgetPassword Exception: ' + e);
      callback(err, {IsSuccess: false, ErrorDescription:'服务异常'});
    }
  });
};

CustomerIFS.prototype.modifyPassword = function (obj, callback) {
  var Customer = this.DS.models.Customer;
  var xml = customerObj.modifyPasswordXML(obj);
  Customer.ModifyPassword(xml, function (err, response) {
    try {
      callback(err, JSON.parse(response.ModifyPasswordResult));
    } catch (e) {
      console.error('CustomerIFS modifyPassword Exception: ' + e);
      callback(err, {IsSuccess: false, ErrorDescription:'服务异常'});
    }
  });
};

CustomerIFS.prototype.isRegistered = function (obj, callback) {
  var Customer = this.DS.models.Customer;
  var xml = customerObj.isRegisteredXML(obj);
  Customer.GetCustomerPhoneIsExist(xml, function (err, response) {
    try {
      callback(err, JSON.parse(response.GetCustomerPhoneIsExistResult));
    } catch (e) {
      console.error('CustomerIFS isRegistered Exception: ' + e);
      callback(err, {IsSuccess: false, ErrorDescription:'服务异常'});
    }
  });
};
