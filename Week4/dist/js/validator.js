"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Validator = /*#__PURE__*/function () {
  function Validator(parameters) {
    var _this = this;

    _classCallCheck(this, Validator);

    _defineProperty(this, "isValid", true);

    _defineProperty(this, "touched", false);

    _defineProperty(this, "options", {});

    _defineProperty(this, "showErrors", function () {
      console.log('showing errors');
    });

    console.log('Validator()', parameters);
    this.options = Object.assign({}, {
      selector: null,
      errorMessage: 'Invalid value'
    }, parameters);
    var selector = this.options.selector;

    if (!selector) {
      console.error("Must provide a selector key!"); // this is a soft error, like a slap on the wrist
      // throw new Error("Must provide a selector key!") // this blows up the whole app
    }

    console.log('setting up listener for', selector);
    var elements = document.querySelectorAll(selector); // two ways to handle this part
    // 1: my preferred way

    if (!elements) {
      console.warn("No elements matching the selector were found!", selector);
      return;
    } // 2: but this is fine too, just a little clunkier
    // if (element) {
    //     // do the setup here
    // }


    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('focus', function () {
        _this.touched = true;
      }); // this sets the wrong scope for 'this' in the child class
      // elements[i].addEventListener('blur', this.validate)
      // so use this syntax instead

      elements[i].addEventListener('blur', function (evt) {
        return _this.validate(evt);
      });
    }
  }

  _createClass(Validator, [{
    key: "validate",
    value: function validate(event) {
      console.log('Validator.validate()');
    }
  }, {
    key: "validateBefore",
    value: function validateBefore(event) {
      console.log('Validator.validateBefore()');
    }
  }, {
    key: "validateAfter",
    value: function validateAfter(event) {
      console.log('Validator.validateAfter() isValid?', this.isValid);
      var $el = event.target;

      if (!this.isValid) {
        $el.classList.add('invalid');
        $el.parentElement.querySelector('.error-message').innerHTML = this.options.errorMessage;
        $el.style.backgroundColor = "red";
      } else {
        $el.classList.remove('invalid');
        $el.parentElement.querySelector('.error-message').innerHTML = '';
        $el.style.backgroundColor = '';
      }
    }
  }]);

  return Validator;
}();
//# sourceMappingURL=validator.js.map
