"use strict";

require("@babel/polyfill");

var _axios = _interopRequireDefault(require("axios"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var PORT = 3000;
var API = 'https://api.telegram.org/bot';
var TOKEN = '859381465:AAEKJmldKVdvlTEu5PusTBC9WVl9UEeF_pM';

var URL = function URL(method) {
  return "".concat(API).concat(TOKEN, "/").concat(method || 'getMe');
};

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.get('/',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, response) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get(URL('getUpdates'));

          case 2:
            res = _context.sent;
            console.log('res:', res);
            return _context.abrupt("return", response.send(res.data));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(PORT, function (req, res) {
  console.log("Ready on http://localhost:".concat(PORT));
});
