function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Dropdown = function Dropdown(_ref) {
  var id = _ref.id,
    choices = _ref.choices,
    values = _ref.values,
    onChange = _ref.onChange,
    classOfSelect = _ref.classOfSelect;
  return /*#__PURE__*/React.createElement("select", {
    className: classOfSelect,
    name: id,
    id: id,
    onChange: onChange
  }, choices.map(function (choice, i) {
    return /*#__PURE__*/React.createElement("option", {
      className: "option",
      key: i,
      value: values[i]
    }, choice);
  }));
};

exports.Dropdown = Dropdown;
//# sourceMappingURL=index.js.map
