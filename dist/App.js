"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("./lib/components/Button"));

var _Badge = _interopRequireDefault(require("./lib/components/Badge"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppCustom = () => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      gap: '1.5rem',
      padding: '5rem'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Wow, look at this component library."), /*#__PURE__*/React.createElement("h5", null, "A notification badge:"), /*#__PURE__*/React.createElement(_Badge.default, {
    value: 3
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h5", null, "A button:"), /*#__PURE__*/React.createElement(_Button.default, {
    label: "Enter",
    kind: "primary"
  }));
};

var _default = AppCustom;
exports.default = _default;