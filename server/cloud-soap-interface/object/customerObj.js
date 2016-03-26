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

exports.registerXML = function (obj) {
  var sex = 'man';
  if (obj.sex === 2) {
    sex = 'woman'
  }

  var xmlObj = [{
    RegisterByVerCode: [
      {
        _attr: {
          xmlns: 'http://tempuri.org/'
        }
      },
      {
        cellPhoneNo: obj.phone
      },
      {
        passWord: obj.password
      },
      {
        ename: ''
      },
      {
        memberName: ''
      },
      {
        sex: sex
      },
      {
        userLink: ''
      },
      {
        vercode: obj.code
      }
    ]
  }];

  return xml(xmlObj, true);
};

exports.loginXML = function (obj) {

  var xmlObj = [{
    LogIn: [
      {
        _attr: {
          xmlns: 'http://tempuri.org/'
        }
      },
      {
        cellPhoneNo: obj.phone
      },
      {
        password: obj.password
      }
    ]
  }];

  return xml(xmlObj, true);
};

exports.forgetPasswordXML = function (obj) {

  var xmlObj = [{
    ModifyPasswordByVerCode: [
      {
        _attr: {
          xmlns: 'http://tempuri.org/'
        }
      },
      {
        mobile: obj.phone
      },
      {
        newPassword: obj.newPassword
      },
      {
        verCode: obj.code
      }

    ]
  }];

  return xml(xmlObj, true);
};

exports.modifyPasswordXML = function (obj) {

  var xmlObj = [{
    ModifyPasswordWithCheck: [
      {
        _attr: {
          xmlns: 'http://tempuri.org/'
        }
      },
      {
        customerNo: obj.userId
      },
      {
        newPassword: obj.newPassword
      },
      {
        oldPassword: obj.oldPassword
      }

    ]
  }];

  return xml(xmlObj, true);
};

exports.isRegisteredXML = function (obj) {

  var xmlObj = [{
    GetCustomerPhoneIsExist: [
      {
        _attr: {
          xmlns: 'http://tempuri.org/'
        }
      },
      {
        CellPhoneNo: obj.phone
      }
    ]
  }];

  return xml(xmlObj, true);
};
