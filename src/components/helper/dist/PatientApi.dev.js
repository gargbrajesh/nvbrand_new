"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raiseSupportTicket = exports.getSupportTicket = exports.resendOtpRequest = exports.getSubscriptionDetails = exports.addFamilyMember = exports.addFamilyDoctorDetail = exports.getFamilyDependentByUid = exports.getFamilyDoctorDetailByUid = exports.getDependentMedicalHistory = exports.getPatientProfile = exports.getPatientLoginOtpVerification = exports.getPatientRegister = exports.getPatientLogin = void 0;

var _LoginCheck = require("./LoginCheck");

var getPatientRegister = function getPatientRegister(data) {
  var requestOptions, response, regResponse;
  return regeneratorRuntime.async(function getPatientRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: data
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'auth/register', requestOptions));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          regResponse = _context.sent;
          return _context.abrupt("return", regResponse);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getPatientRegister = getPatientRegister;

var getPatientLogin = function getPatientLogin(data) {
  var raw, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function getPatientLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          raw = JSON.stringify({
            mobile: '9760078301'
          });
          requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: data
          };
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'auth/login', requestOptions));

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          regResponse = _context2.sent;
          return _context2.abrupt("return", regResponse);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // GEt code for OTP Verifivation


exports.getPatientLogin = getPatientLogin;

var getPatientLoginOtpVerification = function getPatientLoginOtpVerification(data) {
  var requestOptions, response, regResponse;
  return regeneratorRuntime.async(function getPatientLoginOtpVerification$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: data
          };
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'auth/verifyOtp', requestOptions));

        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          regResponse = _context3.sent;
          return _context3.abrupt("return", regResponse);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // Function for to fetch Paitent API response


exports.getPatientLoginOtpVerification = getPatientLoginOtpVerification;

var getPatientProfile = function getPatientProfile(data) {
  var loginToken, myHeaders, bearerTokern, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function getPatientProfile$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          loginToken = (0, _LoginCheck.checkToken)();
          myHeaders = new Headers();

          if (!loginToken) {
            _context4.next = 6;
            break;
          }

          bearerTokern = loginToken;
          _context4.next = 7;
          break;

        case 6:
          return _context4.abrupt("return", 1);

        case 7:
          myHeaders.append('Authorization', "Bearer ".concat(bearerTokern));
          requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          _context4.next = 11;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/getProfileDetails', requestOptions));

        case 11:
          response = _context4.sent;
          _context4.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          regResponse = _context4.sent;
          console.log('My Response', regResponse);
          return _context4.abrupt("return", regResponse);

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getPatientProfile = getPatientProfile;

var getFamilyDoctorDetailByUid = function getFamilyDoctorDetailByUid(data) {
  var myHeaders, loginToken, bearerTokern, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function getFamilyDoctorDetailByUid$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          myHeaders = new Headers();
          loginToken = (0, _LoginCheck.checkToken)();
          myHeaders = new Headers();

          if (!loginToken) {
            _context5.next = 7;
            break;
          }

          bearerTokern = loginToken;
          _context5.next = 8;
          break;

        case 7:
          return _context5.abrupt("return", 1);

        case 8:
          myHeaders.append('Authorization', "Bearer ".concat(loginToken));
          requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          _context5.next = 12;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/getFamilyDoctor', requestOptions));

        case 12:
          response = _context5.sent;
          _context5.next = 15;
          return regeneratorRuntime.awrap(response.json());

        case 15:
          regResponse = _context5.sent;
          console.log('My Response', regResponse);
          return _context5.abrupt("return", regResponse);

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.getFamilyDoctorDetailByUid = getFamilyDoctorDetailByUid;

var getFamilyDependentByUid = function getFamilyDependentByUid(data) {
  var loginToken, myHeaders, bearerTokern, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function getFamilyDependentByUid$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          loginToken = (0, _LoginCheck.checkToken)();
          myHeaders = new Headers();

          if (!loginToken) {
            _context6.next = 6;
            break;
          }

          bearerTokern = loginToken.access_token;
          _context6.next = 7;
          break;

        case 6:
          return _context6.abrupt("return", 1);

        case 7:
          myHeaders.append('Authorization', "Bearer ".concat(loginToken));
          requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          _context6.next = 11;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/dependents', requestOptions));

        case 11:
          response = _context6.sent;
          _context6.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          regResponse = _context6.sent;
          console.log('My Response', regResponse);
          return _context6.abrupt("return", regResponse);

        case 17:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.getFamilyDependentByUid = getFamilyDependentByUid;

var getDependentMedicalHistory = function getDependentMedicalHistory(data) {
  var loginToken, myHeaders, bearerTokern, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function getDependentMedicalHistory$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          loginToken = (0, _LoginCheck.checkToken)();
          myHeaders = new Headers();

          if (!loginToken) {
            _context7.next = 6;
            break;
          }

          bearerTokern = loginToken.access_token;
          _context7.next = 7;
          break;

        case 6:
          return _context7.abrupt("return", 1);

        case 7:
          myHeaders.append('Authorization', "Bearer ".concat(bearerTokern));
          requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          _context7.next = 11;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/getMedicalHistory', requestOptions));

        case 11:
          response = _context7.sent;
          _context7.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          regResponse = _context7.sent;
          console.log('My Response', regResponse);
          return _context7.abrupt("return", regResponse);

        case 17:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.getDependentMedicalHistory = getDependentMedicalHistory;

var addFamilyMember = function addFamilyMember(data) {
  var loginToken, myHeaders, bearerTokern, recordData, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function addFamilyMember$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          console.log('API Data called here ', data);
          loginToken = (0, _LoginCheck.checkToken)();
          myHeaders = new Headers();

          if (!loginToken) {
            _context8.next = 7;
            break;
          }

          bearerTokern = loginToken.access_token;
          _context8.next = 8;
          break;

        case 7:
          return _context8.abrupt("return", 1);

        case 8:
          myHeaders.append('Content-Type', 'application/json');
          myHeaders.append('Authorization', "Bearer ".concat(bearerTokern));
          recordData = JSON.stringify({
            relationship_id: 3,
            title: data.title,
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            blood_group_id: data.blood_group,
            gender: data.gender,
            dob: data.dob,
            mobile: data.mobile,
            height: data.height,
            weight: data.weight,
            address: data.address,
            city: data.city,
            state_id: data.state,
            pincode: data.pinCode,
            medical_problems: ['test', 'test2'],
            allergies: ['Api'],
            procedures: [],
            lifestyles: [],
            diagnosis: ['super'],
            findings: ['first']
          });
          requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: recordData,
            redirect: 'follow'
          };
          _context8.next = 14;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/addEditDependent', requestOptions));

        case 14:
          response = _context8.sent;
          _context8.next = 17;
          return regeneratorRuntime.awrap(response.json());

        case 17:
          regResponse = _context8.sent;
          return _context8.abrupt("return", regResponse);

        case 19:
        case "end":
          return _context8.stop();
      }
    }
  });
}; // Function For Add Family Doctor


exports.addFamilyMember = addFamilyMember;

var addFamilyDoctorDetail = function addFamilyDoctorDetail(data) {
  var loginToken, myHeaders, bearerTokern, recordData, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function addFamilyDoctorDetail$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          console.log('API Data called here ', data);
          loginToken = (0, _LoginCheck.checkToken)();
          myHeaders = new Headers();

          if (!loginToken) {
            _context9.next = 7;
            break;
          }

          bearerTokern = loginToken;
          _context9.next = 8;
          break;

        case 7:
          return _context9.abrupt("return", 1);

        case 8:
          myHeaders.append('Content-Type', 'application/json');
          myHeaders.append('Authorization', "Bearer ".concat(bearerTokern));
          recordData = JSON.stringify({
            title: data.title,
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            email: data.email,
            mobile: data.mobile,
            gender: data.gender,
            address: data.address,
            city: data.city,
            state_id: data.state,
            pincode: data.pinCode,
            speciality_id: data.specialist,
            med_reg_no: '74txi4783ewk32',
            yrs_of_practice: data.experience
          });
          requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: recordData,
            redirect: 'follow'
          };
          _context9.next = 14;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/addEditFamilyDoctor', requestOptions));

        case 14:
          response = _context9.sent;
          _context9.next = 17;
          return regeneratorRuntime.awrap(response.json());

        case 17:
          regResponse = _context9.sent;
          return _context9.abrupt("return", regResponse);

        case 19:
        case "end":
          return _context9.stop();
      }
    }
  });
}; // Fetch Data for Subscription Page


exports.addFamilyDoctorDetail = addFamilyDoctorDetail;

var getSubscriptionDetails = function getSubscriptionDetails(data) {
  var loginToken, myHeaders, bearerTokern, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function getSubscriptionDetails$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          loginToken = (0, _LoginCheck.checkToken)();
          myHeaders = new Headers();

          if (!loginToken) {
            _context10.next = 6;
            break;
          }

          bearerTokern = loginToken.access_token;
          _context10.next = 7;
          break;

        case 6:
          return _context10.abrupt("return", 1);

        case 7:
          myHeaders.append('Authorization', "Bearer ".concat(bearerTokern));
          requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          _context10.next = 11;
          return regeneratorRuntime.awrap(fetch('https://cms.Beatnik.com/api/get-all-subscription'));

        case 11:
          response = _context10.sent;
          _context10.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          regResponse = _context10.sent;
          console.log('My Response', regResponse);
          return _context10.abrupt("return", regResponse);

        case 17:
        case "end":
          return _context10.stop();
      }
    }
  });
}; // Code for Resend OTP


exports.getSubscriptionDetails = getSubscriptionDetails;

var resendOtpRequest = function resendOtpRequest(data) {
  var requestOptions, response, regResponse;
  return regeneratorRuntime.async(function resendOtpRequest$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: data
          };
          _context11.next = 3;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'auth/resendOtp', requestOptions));

        case 3:
          response = _context11.sent;
          _context11.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          regResponse = _context11.sent;
          return _context11.abrupt("return", regResponse);

        case 8:
        case "end":
          return _context11.stop();
      }
    }
  });
}; // Support API


exports.resendOtpRequest = resendOtpRequest;

var getSupportTicket = function getSupportTicket(data) {
  var loginToken, myHeaders, bearerTokern, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function getSupportTicket$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          loginToken = (0, _LoginCheck.checkToken)();
          myHeaders = new Headers();

          if (!loginToken) {
            _context12.next = 6;
            break;
          }

          bearerTokern = loginToken.access_token;
          _context12.next = 7;
          break;

        case 6:
          return _context12.abrupt("return", 1);

        case 7:
          myHeaders.append('Authorization', "Bearer ".concat(bearerTokern));
          requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          _context12.next = 11;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'support/index', requestOptions));

        case 11:
          response = _context12.sent;
          _context12.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          regResponse = _context12.sent;
          console.log('My Response', regResponse);
          return _context12.abrupt("return", regResponse);

        case 17:
        case "end":
          return _context12.stop();
      }
    }
  });
}; // Code for Submit Support Raise Ticket


exports.getSupportTicket = getSupportTicket;

var raiseSupportTicket = function raiseSupportTicket(data) {
  var loginToken, myHeaders, bearerTokern, recordData, requestOptions, response, regResponse;
  return regeneratorRuntime.async(function raiseSupportTicket$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          console.log('API Data called here ', data);
          loginToken = (0, _LoginCheck.checkToken)();
          myHeaders = new Headers();

          if (!loginToken) {
            _context13.next = 7;
            break;
          }

          bearerTokern = loginToken.access_token;
          _context13.next = 8;
          break;

        case 7:
          return _context13.abrupt("return", 1);

        case 8:
          myHeaders.append('Content-Type', 'application/json');
          myHeaders.append('Authorization', "Bearer ".concat(bearerTokern));
          recordData = JSON.stringify({
            ticket_subject: data.subject,
            ticket_description: data.message,
            support_category_id: data.bookingID
          });
          requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: recordData,
            redirect: 'follow'
          };
          _context13.next = 14;
          return regeneratorRuntime.awrap(fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'support/raiseTicket', requestOptions));

        case 14:
          response = _context13.sent;
          _context13.next = 17;
          return regeneratorRuntime.awrap(response.json());

        case 17:
          regResponse = _context13.sent;
          return _context13.abrupt("return", regResponse);

        case 19:
        case "end":
          return _context13.stop();
      }
    }
  });
};

exports.raiseSupportTicket = raiseSupportTicket;