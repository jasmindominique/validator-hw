"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PhoneValidator = /*#__PURE__*/function (_Validator) {
  _inherits(PhoneValidator, _Validator);

  var _super = _createSuper(PhoneValidator);

  function PhoneValidator(parameters) {
    var _thisSuper, _thisSuper2, _this;

    _classCallCheck(this, PhoneValidator);

    _this = _super.call(this, parameters);

    _defineProperty(_assertThisInitialized(_this), "validate", function (event) {
      console.log('PhoneValidator.validate', event);

      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PhoneValidator.prototype)), "validateBefore", _thisSuper).call(_thisSuper, event);

      console.log('running validation for PhoneValidator', event);
      var value = event.target.value;
      console.log('value', value);

      if (/^\s*\(?\d{3}\)?[\-\. ]?\d{3}[\-\. ]?\d{4}\s*$/.test(value)) {
        _this.isValid = true;
        console.log('valid phone number!');
      } else {
        _this.isValid = false;
        console.log('not a valid phone number');
      }

      _get((_thisSuper2 = _assertThisInitialized(_this), _getPrototypeOf(PhoneValidator.prototype)), "validateAfter", _thisSuper2).call(_thisSuper2, event);
    });

    console.log('PhoneValidator()', _this.options);
    console.log('looking for non-american phones?', _this.options.nonAmerican);
    return _this;
  }

  return PhoneValidator;
}(Validator);
//# sourceMappingURL=phone-validator.js.map
