/**
 * @author qianqing
 * @create by 16-3-1
 * @description
 */
var xml = require('xml');

exports.getCaptchaXML = function (obj) {
  var xmlObj = [{
    SendVerificationCode: [
      {
        _attr: {
          xmlns: 'http://tempuri.org/'
        }
      },
      {
        sendUserId: '496'
      },
      {
        sendPassword: '123'
      },
      {
        sendType: obj.type
      },
      {
        toMobile: obj.phone
      }
    ]
  }];

  return xml(xmlObj, true);
};
