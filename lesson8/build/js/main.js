var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
var updateAssignment = function (assign, propsToUpdate) {
    return __assign(__assign({}, assign), propsToUpdate);
};
// const assignVerified: Readonly<Assignment> = {};
var hexColor = {
    red: 'FF000',
    green: '00FF00',
    blue: '0000F'
};
var newColor = hexColor = { orange: 'EA110' };
console.log(newColor);
