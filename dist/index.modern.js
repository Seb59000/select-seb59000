import React from 'react';

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

export { Dropdown };
//# sourceMappingURL=index.modern.js.map
