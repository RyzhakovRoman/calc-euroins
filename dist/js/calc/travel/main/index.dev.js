(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./node_modules/moment/locale sync recursive [/\\\\](ru(\\.js)?)$":
/*!***********************************************************!*\
  !*** ./node_modules/moment/locale sync [/\\](ru(\.js)?)$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive [/\\\\](ru(\\.js)?)$";

/***/ }),

/***/ "./src/calcs/common/classes/sms-manager.ts":
/*!*************************************************!*\
  !*** ./src/calcs/common/classes/sms-manager.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var url = 'https://api.euro-ins.ru/sms/confirm_code/send', method = 'POST';
var SmsManager = /** @class */ (function () {
    function SmsManager() {
        // формируем код для отпраки его в смс
        this.code = "" + SmsManager.randomIntFromInterval(10000, 99999);
        if (true)
            console.log(this.code);
        // создаем заголовки для общения с сервером
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    /**
     * В callback функцию передается текст о успехе/ошибке отправки смс
     */
    SmsManager.prototype.send = function (phone, code, callback) {
        var formattedPhone = phone.replace(/\D/g, '');
        var apiData = {
            code: code,
            phone: formattedPhone,
            message: this.code,
        };
        fetch(url, {
            method: method,
            headers: this.headers,
            body: JSON.stringify(apiData),
        })
            .then(function (response) {
            var status = response.status;
            if (status === 200) {
                callback('СМС доставлено!');
                return false;
            }
            else if (status === 400) {
                throw new Error('Бэк вернул 400, смс не доставлено');
            }
        })
            .catch(function (error) {
            callback('Ошибка отправки смс!');
            console.log(error);
        });
    };
    SmsManager.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return SmsManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (SmsManager);
// OTk5OTk=
// componentDidUpdate
// актуальный телефон 89307475436
// телефон для которого отправлена смс undefined
// componentDidUpdate
// актуальный телефон 89307475436
// телефон для которого отправлена смс 89307475436
// MTI3MzI=
// send
// {"insType":"health","task":"send","pid":0,"name":"Фамилия Имя ","phone":"89307475436","code":"MTI3MzI="}
// response send sms  201840-1000585
// check
// response check sms  100
// getTextByCode
// check
// response check sms  102
// getTextByCode
// check
// response check sms  102
// getTextByCode
// check
// response check sms  102
// getTextByCode
// check
// response check sms  102
// getTextByCode
// check
// response check sms  103
// getTextByCode
// smsInfo Сообщение доставлено!
// componentDidUpdate
// актуальный телефон 89307475436
// телефон для которого отправлена смс 89307475436


/***/ }),

/***/ "./src/calcs/common/components/calc-card/index.less":
/*!**********************************************************!*\
  !*** ./src/calcs/common/components/calc-card/index.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/common/components/calc-card/index.tsx":
/*!*********************************************************!*\
  !*** ./src/calcs/common/components/calc-card/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/calcs/common/components/calc-card/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);


var CalcCard = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "calc-card " + className }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (CalcCard);


/***/ }),

/***/ "./src/calcs/common/components/check-cost/check-cost-for-small-screens/index.less":
/*!****************************************************************************************!*\
  !*** ./src/calcs/common/components/check-cost/check-cost-for-small-screens/index.less ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/common/components/check-cost/check-cost-for-small-screens/index.tsx":
/*!***************************************************************************************!*\
  !*** ./src/calcs/common/components/check-cost/check-cost-for-small-screens/index.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/affix */ "./node_modules/antd/lib/affix/index.js");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/affix/style */ "./node_modules/antd/lib/affix/style/index.js");
/* harmony import */ var antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./src/calcs/common/components/check-cost/check-cost-for-small-screens/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};











var fullScreenCalc = function (rootNode) {
    var clientRect = rootNode.getBoundingClientRect();
    return (window.scrollY > rootNode.offsetTop &&
        window.scrollY < rootNode.offsetTop + clientRect.height);
};
var CheckCostForSmallScreens = function (_a) {
    var currentStep = _a.currentStep, costWithBonuses = _a.costWithBonuses, costWithoutBonuses = _a.costWithoutBonuses, rootNodeId = _a.rootNodeId, 
    // offsetBottom,
    // affixed,
    onAffixStateChange = _a.onAffixStateChange, onPrevStepClick = _a.onPrevStepClick;
    var rootNode = document.getElementById(rootNodeId), _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(fullScreenCalc(rootNode) ? 0 : undefined), 2), offsetBottom = _b[0], setOffsetBottom = _b[1], _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), affixed = _c[0], setAffixed = _c[1], _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), 2), affixHidden = _d[0], setAffixHidden = _d[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        window.addEventListener('scroll', function () {
            var offset = fullScreenCalc(rootNode) ? 0 : undefined;
            setOffsetBottom(offset);
            if (!fullScreenCalc(rootNode))
                setAffixHidden(true);
            else
                setAffixHidden(false);
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_affix__WEBPACK_IMPORTED_MODULE_7___default.a, { style: { display: affixHidden ? 'none' : 'block' }, offsetBottom: offsetBottom, className: "e-ccfss " + (affixed ? ' e-ccfss_affixed' : ''), onChange: setAffixed },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, { align: 'middle' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, { sm: 8, xs: 8, className: 'e-ccfss__prev-col' }, currentStep > 0 && offsetBottom === 0 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, { type: 'primary', onClick: onPrevStepClick }, "\u041D\u0430\u0437\u0430\u0434"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, { sm: 16, xs: 16, className: 'e-ccfss__cost-col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'e-ccfss__cost' }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438:"),
                costWithBonuses,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                        display: affixed ? 'none' : 'block',
                    } }, costWithoutBonuses)))));
};
/* harmony default export */ __webpack_exports__["default"] = (CheckCostForSmallScreens);


/***/ }),

/***/ "./src/calcs/common/components/check-cost/index.less":
/*!***********************************************************!*\
  !*** ./src/calcs/common/components/check-cost/index.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/common/components/check-cost/index.tsx":
/*!**********************************************************!*\
  !*** ./src/calcs/common/components/check-cost/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/calcs/common/components/check-cost/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js");
/* harmony import */ var _ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/calcs/common/constants/index.ts");
/* harmony import */ var _check_cost_for_small_screens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-cost-for-small-screens */ "./src/calcs/common/components/check-cost/check-cost-for-small-screens/index.tsx");







var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, ID_PROMOCODE_OR_BONUSES = 'promocodeOrBonuses', ID_BONUSES = 'bonuses';
var CheckCost = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var currentStep = _a.currentStep, cost = _a.cost, defaultCost = _a.defaultCost, loadingCost = _a.loadingCost, rootNodeId = _a.rootNodeId, bonusesSystemIsOn = _a.bonusesSystemIsOn, onPrevStepClick = _a.onPrevStepClick;
    var getCostWithBonuses = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_a) {
        var getFieldValue = _a.getFieldValue;
        if (loadingCost)
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons_lib_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, { className: 'e-check-cost__loading' }));
        /*
            Если система баллов включена и
            цена рассчитана и
            в калькуляторе выбраны баллы а не промокод -
            вычитаем из цены баллы
         */
        var bonusesSelected = getFieldValue(ID_PROMOCODE_OR_BONUSES) === 'bonuses';
        if (bonusesSystemIsOn && cost !== 0 && bonusesSelected) {
            var bonuses = getFieldValue(ID_BONUSES), costWithBonuses = cost - bonuses;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                Math.floor(costWithBonuses * 100) / 100,
                " \u0440\u0443\u0431."));
        }
        /*
        Просто выводим стоимость, если система баллов не включена
     */
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
            cost || defaultCost,
            " \u0440\u0443\u0431.");
    }, [cost, loadingCost, bonusesSystemIsOn]), getCostWithoutBonuses = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_a) {
        var getFieldValue = _a.getFieldValue;
        var bonusesSelected = getFieldValue(ID_PROMOCODE_OR_BONUSES) ===
            'bonuses', bonuses = getFieldValue(ID_BONUSES);
        if (bonusesSystemIsOn &&
            cost !== 0 &&
            bonusesSelected &&
            bonuses !== 0) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'e-cost-without-bonuses' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'e-cost-without-bonuses__canceled' },
                    cost,
                    " \u0440\u0443\u0431."),
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'e-cost-without-bonuses__text' }, "\u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u0431\u0430\u043B\u043B\u043E\u0432")));
        }
        return null;
    }, [cost, bonusesSystemIsOn]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: true, noStyle: true }, function (form) {
        var costWithBonuses = getCostWithBonuses(form), costWithoutBonuses = getCostWithoutBonuses(form);
        if (_constants__WEBPACK_IMPORTED_MODULE_4__["SCREEN_IS_SMALL"])
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_check_cost_for_small_screens__WEBPACK_IMPORTED_MODULE_5__["default"], { currentStep: currentStep, costWithBonuses: costWithBonuses, costWithoutBonuses: costWithoutBonuses, offsetBottom: 10, affixed: false, rootNodeId: rootNodeId, onAffixStateChange: function (state) { }, onPrevStepClick: function () { } }));
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'e-check-cost__total-cost-label' }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438:"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: 'e-check-cost' }, costWithBonuses),
            costWithoutBonuses));
    }));
});
/* harmony default export */ __webpack_exports__["default"] = (CheckCost);


/***/ }),

/***/ "./src/calcs/common/components/check-wrapper/index.less":
/*!**************************************************************!*\
  !*** ./src/calcs/common/components/check-wrapper/index.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/common/components/check-wrapper/index.tsx":
/*!*************************************************************!*\
  !*** ./src/calcs/common/components/check-wrapper/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/affix */ "./node_modules/antd/lib/affix/index.js");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/affix/style */ "./node_modules/antd/lib/affix/style/index.js");
/* harmony import */ var antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/calcs/common/components/check-wrapper/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





var fixedResetPoint = 0;
var CheckWrapper = function (_a) {
    var rootNodeId = _a.rootNodeId, currentStep = _a.currentStep, children = _a.children;
    var screenIsSmall = window.innerWidth < 768, rootNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return document.getElementById(rootNodeId); }, []), _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({ affixed: true }), 2), affix = _b[0], setAffix = _b[1], setFixedResetPoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        var // Последний-нижний пиксель калькулятора
        calcEndPX = rootNode.offsetTop + rootNode.clientHeight, 
        // Высота чека
        checkHeight = document.getElementsByClassName('calc-check')[0]
            .clientHeight;
        // Точка сброса фиксированной позиции
        fixedResetPoint = calcEndPX - checkHeight;
    }, []), handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        // Если скрол прошел точку сброса, то стам соответствующий стейт
        if (window.scrollY > fixedResetPoint)
            setAffix({ affixed: false });
        else
            setAffix(function (affix) {
                if (!affix.affixed)
                    return { affixed: true };
                else
                    return affix;
            });
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (screenIsSmall)
            return;
        setFixedResetPoint();
        window.addEventListener('scroll', handleScroll);
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setFixedResetPoint();
    }, [currentStep]);
    // Если экран маленький, то рендерим обычно
    if (screenIsSmall)
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'calc-check' }, children);
    // Если экран большой,
    // то рендерим с функционалом фиксации при прокрутке
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default.a, { className: affix.affixed ? '' : 'absolute-bottom' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'calc-check' }, children)));
};
/* harmony default export */ __webpack_exports__["default"] = (CheckWrapper);


/***/ }),

/***/ "./src/calcs/common/components/header/index.less":
/*!*******************************************************!*\
  !*** ./src/calcs/common/components/header/index.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/common/components/header/index.tsx":
/*!******************************************************!*\
  !*** ./src/calcs/common/components/header/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/steps */ "./node_modules/antd/lib/steps/index.js");
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_steps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_steps_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/steps/style */ "./node_modules/antd/lib/steps/style/index.js");
/* harmony import */ var antd_lib_steps_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_steps_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/calcs/common/components/header/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);





var Step = antd_lib_steps__WEBPACK_IMPORTED_MODULE_1___default.a.Step;
var Header = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var currentStep = _a.currentStep, calcSteps = _a.calcSteps;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: 'calc-header' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_steps__WEBPACK_IMPORTED_MODULE_1___default.a, { current: currentStep, className: 'calc-header__steps' }, calcSteps.map(function (step, i) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Step, { className: 'calc-header__step', title: step.name, key: i })); }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./src/calcs/common/components/page-after-payment/index.tsx":
/*!******************************************************************!*\
  !*** ./src/calcs/common/components/page-after-payment/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/grid */ "./node_modules/antd/lib/grid/index.js");
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);






var title = {
    error: 'Ошибка оплаты!',
    success: 'Оплата прошла успешно!',
};
var content = {
    error: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\u0412\u044B \u0432\u0435\u0440\u043D\u0443\u043B\u0438\u0441\u044C \u0441\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u043D\u043E \u043E\u043F\u043B\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0441\u0430 \u043D\u0435 \u0431\u044B\u043B\u0430 \u0441\u0434\u0435\u043B\u0430\u043D\u0430 \u043F\u043E \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u044F\u0449\u0438\u043C \u043E\u0442 \u043D\u0430\u0441 \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0441\u0430 \u043D\u0435 \u0431\u044B\u043B\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0430. \u0414\u043B\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0441\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0435\u0433\u043E \u043E\u043F\u043B\u0430\u0442\u0443."))),
    success: (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\u0412\u044B \u0432\u0435\u0440\u043D\u0443\u043B\u0438\u0441\u044C \u0441\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u0412\u0430\u0448 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u043E\u043B\u0438\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u043F\u043B\u0430\u0447\u0435\u043D. \u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u044B \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u043C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u043E\u043B\u0438\u0441 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0435\u0433\u043E \u043D\u0430 \u0412\u0430\u0448\u0443 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 PDF (\u043E\u0442 1 \u0434\u043E 15 \u043C\u0438\u043D\u0443\u0442)."),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u043E\u043B\u0438\u0441, \u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0430\u043F\u043A\u0443 \u043F\u043E\u0447\u0442\u044B \u0421\u041F\u0410\u041C \u0438\u043B\u0438 \u041D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430 \u0415\u0441\u043B\u0438 \u0443 \u0412\u0430\u0441 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u0442\u043E \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 epolis@euro-ins.ru. \u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0447\u0442\u043E \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438\u0441\u044C \u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438 \u041E\u041E\u041E \u0420\u0421\u041E \"\u0415\u0412\u0420\u041E\u0418\u041D\u0421\". \u0411\u0443\u0434\u0435\u043C \u0440\u0430\u0434\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u0412\u0430\u0441 \u0441\u043D\u043E\u0432\u0430 \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435."))),
};
var PageAfterPayment = function (_a) {
    var params = _a.params, rootNodeId = _a.rootNodeId, successContent = _a.successContent;
    var goToCalculator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        // @ts-ignore
        window.location = window.location.origin + window.location.pathname;
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (params.payment_status) {
            var elem = document.getElementById(rootNodeId);
            elem.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], { gutter: 16, justify: 'center' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { lg: 14, md: 23, sm: 24 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, title[params.payment_status])),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { lg: 14, md: 23, sm: 24 },
            content[params.payment_status],
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            params.payment_status === 'success' && successContent
                ? successContent
                : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, { onClick: goToCalculator }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"))));
};
/* harmony default export */ __webpack_exports__["default"] = (PageAfterPayment);


/***/ }),

/***/ "./src/calcs/common/components/phone-checker/index.less":
/*!**************************************************************!*\
  !*** ./src/calcs/common/components/phone-checker/index.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/common/components/phone-checker/index.tsx":
/*!*************************************************************!*\
  !*** ./src/calcs/common/components/phone-checker/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/grid */ "./node_modules/antd/lib/grid/index.js");
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_classes_sms_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/classes/sms-manager */ "./src/calcs/common/classes/sms-manager.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/calcs/common/components/phone-checker/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _calc_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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











var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;
var PhoneChecker = /** @class */ (function (_super) {
    __extends(PhoneChecker, _super);
    function PhoneChecker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            smsInfo: '',
            phone: undefined,
        };
        _this.handleCodeChange = function () {
            _this.props.form.validateFields(['smsCode']).then();
        };
        _this.smsCodeValidator = function (r, v, c) {
            if (("" + v).length === 5) {
                if (_this.codeForSms !== v) {
                    r.message = 'Введен неверный код!';
                    c(new Error('compare code false'));
                }
                c();
            }
        };
        _this.codeForSms = '';
        _this.sm = new _common_classes_sms_manager__WEBPACK_IMPORTED_MODULE_7__["default"]();
        _this.code = props.globalOptions.code;
        return _this;
    }
    /*
     * Вызывается после перерендеринга (принимает prevProps, prevState)
     */
    PhoneChecker.prototype.componentDidUpdate = function () {
        var _this = this;
        var _a = this.props, stepIsActive = _a.stepIsActive, phoneId = _a.phoneId;
        // если страница неактивна выходим
        if (stepIsActive === false)
            return;
        var getFieldValue = this.props.form.getFieldValue;
        // извлекаем текущий введенный номер
        var insurant = {
            phone: getFieldValue(phoneId),
        };
        // сравниваем текущий введеный номер и тот для которого отправленна смс
        // если они различаются то мы заного отправляем смс
        if (insurant.phone !== this.state.phone) {
            this.setState({
                smsInfo: '',
                phone: insurant.phone,
            }, function () {
                // извлекаем код из смс
                _this.codeForSms = _this.sm.code;
                // отправляем смс, передаем callback в который будет передана информация о доставке смс
                _this.sm.send(insurant.phone, _this.code, function (smsInfo) {
                    _this.setState(__assign(__assign({}, _this.state), { smsInfo: smsInfo }));
                });
            });
        }
    };
    PhoneChecker.prototype.render = function () {
        var _a = this.props, form = _a.form, phoneId = _a.phoneId, getFieldValue = form.getFieldValue;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_calc_card__WEBPACK_IMPORTED_MODULE_9__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "\u041D\u0430 \u043D\u043E\u043C\u0435\u0440 ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, getFieldValue(phoneId)),
                " \u0431\u044B\u043B \u0432\u044B\u0441\u043B\u0430\u043D \u043A\u043E\u0434, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442 \u0412\u0430\u0448\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043E\u043F\u043B\u0430\u0442\u0443 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043F\u0440\u0435\u043C\u0438\u0438. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043E \u0432 \u043D\u0438\u0436\u043D\u044E\u044E \u044F\u0447\u0435\u0439\u043A\u0443. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u043E\u043F\u043B\u0430\u0442\u0443 \u0432 \u0431\u0430\u043D\u043A\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u043C\u0438\u043D\u0443\u0442. \u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u0443\u0441\u043F\u0435\u043B\u0438 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0443 \u0432 \u0441\u0440\u043E\u043A, \u0442\u043E \u0435\u0435 \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], { justify: 'center' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_5__["Col"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: 'smsCode', rules: [
                            {
                                required: true,
                                message: 'Введите код из смс',
                                validator: this.smsCodeValidator,
                            },
                        ] },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, { size: 'large', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 \u0441\u043C\u0441', onChange: this.handleCodeChange }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_5__["Col"], { sm: 24, className: 'calc-phone-checker-sms-info' }, this.state.smsInfo))));
    };
    PhoneChecker.defaultProps = {
        phoneId: ['insurant', 'phone'],
    };
    return PhoneChecker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (PhoneChecker);


/***/ }),

/***/ "./src/calcs/common/components/question-about-euroins/index.tsx":
/*!**********************************************************************!*\
  !*** ./src/calcs/common/components/question-about-euroins/index.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/spin/style */ "./node_modules/antd/lib/spin/style/index.js");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/radio/style */ "./node_modules/antd/lib/radio/style/index.js");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/alert/style */ "./node_modules/antd/lib/alert/style/index.js");
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/form/Form */ "./node_modules/antd/lib/form/Form.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../common/helpers/create-request-state */ "./src/common/helpers/create-request-state.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants */ "./src/calcs/common/constants/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

















var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, Group = antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a.Group, answers = [
    'От друзей',
    'Из facebook',
    'Из instagram',
    'Из поисковика (Яндекс, Google)',
    'Я ваш партнер',
    'Другое',
], ID_ANSWER = 'answer', ID_OTHER_ANSWER = 'otherAnswer', method = 'POST', headers = new Headers([['Content-Type', 'application/json']]), url = 'https://api.euro-ins.ru/referrer/add';
var initState = Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_14__["createInitialState"])();
var QuestionAboutEuroins = function (_a) {
    var params = _a.params;
    var _b = __read(Object(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_13__["useForm"])(), 1), form = _b[0], _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initState), 2), answerCreation = _c[0], setAnswerCreation = _c[1], handleSendClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var answerValue, otherAnswerValue, data, response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    setAnswerCreation(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_14__["createStartedState"])());
                    return [4 /*yield*/, form.validateFields([ID_ANSWER, ID_OTHER_ANSWER])];
                case 2:
                    _a.sent();
                    answerValue = form.getFieldValue(ID_ANSWER), otherAnswerValue = form.getFieldValue(ID_OTHER_ANSWER), data = {
                        policyId: +params.policy_id,
                        policyType: params.policy_type,
                        referrer: answerValue === 'Другое'
                            ? otherAnswerValue
                            : answerValue,
                    };
                    return [4 /*yield*/, fetch(url, {
                            method: method,
                            headers: headers,
                            body: JSON.stringify(data),
                        })];
                case 3:
                    response = _a.sent();
                    if (response.status !== 200)
                        setAnswerCreation(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_14__["createErrorState"])(['Неверный статус ответа сервера']));
                    setAnswerCreation(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_14__["createSuccessState"])('Успешно'));
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    setAnswerCreation(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_14__["createErrorState"])([e_1.message]));
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a, { className: 'e-calc', layout: 'vertical', form: form, name: 'about' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u041A\u0430\u043A \u0412\u044B \u0443\u0437\u043D\u0430\u043B\u0438 \u043E \u0415\u0412\u0420\u041E\u0418\u041D\u0421?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, { tip: 'Отправка ответа...', spinning: answerCreation.requestStatus === 'started' }, answerCreation.requestStatus === 'success' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            "\u041E\u0442\u0432\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D. \u0412\u0430\u0448 \u043E\u0442\u0432\u0435\u0442:",
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, form.getFieldValue(ID_ANSWER) === 'Другое'
                ? form.getFieldValue(ID_OTHER_ANSWER)
                : form.getFieldValue(ID_ANSWER)),
            ".")) : answerCreation.requestStatus === 'error' ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default.a, { type: 'warning', message: 'Ошибка отправки ответа. Пожалуйста, сообщите в службу тенической поддержки.' })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: 'answer', rules: _constants__WEBPACK_IMPORTED_MODULE_15__["STANDART_ITEM_RULES"], required: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, null, answers.map(function (answer, i) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, { value: answer, key: i }, answer)); }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: true }, function (form) {
                var answerValue = form.getFieldValue(ID_ANSWER);
                if (answerValue !== 'Другое')
                    return null;
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: ID_OTHER_ANSWER, label: 'Оставьте комментарий', rules: _constants__WEBPACK_IMPORTED_MODULE_15__["STANDART_ITEM_RULES"], required: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, { size: 'large' })));
            }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, { onClick: handleSendClick, type: 'primary' }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (QuestionAboutEuroins);


/***/ }),

/***/ "./src/calcs/common/components/step/index.less":
/*!*****************************************************!*\
  !*** ./src/calcs/common/components/step/index.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/common/components/step/index.tsx":
/*!****************************************************!*\
  !*** ./src/calcs/common/components/step/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/calcs/common/components/step/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);


var Step = function (_a) {
    var _b = _a.hidden, hidden = _b === void 0 ? false : _b, children = _a.children;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: hidden ? 'hidden' : null }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Step);


/***/ }),

/***/ "./src/calcs/common/constants/doc-urls.ts":
/*!************************************************!*\
  !*** ./src/calcs/common/constants/doc-urls.ts ***!
  \************************************************/
/*! exports provided: URL_AGREEMENT_OF_PERSONAL_DATA, URL_POLICY_PERSONAL_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_AGREEMENT_OF_PERSONAL_DATA", function() { return URL_AGREEMENT_OF_PERSONAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_POLICY_PERSONAL_DATA", function() { return URL_POLICY_PERSONAL_DATA; });
var URL_AGREEMENT_OF_PERSONAL_DATA = 'https://euro-ins.ru/calc/files/soglasie-na-obrabotku-pd.pdf';
var URL_POLICY_PERSONAL_DATA = 'https://euro-ins.ru/calc/files/personal_data.pdf';


/***/ }),

/***/ "./src/calcs/common/constants/index.ts":
/*!*********************************************!*\
  !*** ./src/calcs/common/constants/index.ts ***!
  \*********************************************/
/*! exports provided: SCREEN_IS_SMALL, OUTPUT_DATE_FORMAT, REQUEST_DATE_FORMAT, STANDART_ITEM_RULES, DATE_PICKER_PLACEHOLDER, NAME_YM_EUROINS, DOMEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_IS_SMALL", function() { return SCREEN_IS_SMALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTPUT_DATE_FORMAT", function() { return OUTPUT_DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_DATE_FORMAT", function() { return REQUEST_DATE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STANDART_ITEM_RULES", function() { return STANDART_ITEM_RULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_PICKER_PLACEHOLDER", function() { return DATE_PICKER_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_YM_EUROINS", function() { return NAME_YM_EUROINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMEN", function() { return DOMEN; });
var SCREEN_IS_SMALL = window.innerWidth < 768;
var OUTPUT_DATE_FORMAT = 'DD.MM.YYYY';
var REQUEST_DATE_FORMAT = 'YYYY-MM-DD';
var STANDART_ITEM_RULES = [{ required: true, message: 'Введите данные' }];
var DATE_PICKER_PLACEHOLDER = '__.__.____';
// имя объекта window['yaCounter21173200'] для основного сайта euro-ins.ru
var NAME_YM_EUROINS = 'yaCounter21173200';
var DOMEN =  true
    ? 'http://api.euro-ins.lh'
    : undefined;


/***/ }),

/***/ "./src/calcs/common/helpers/add-test-payment.ts":
/*!******************************************************!*\
  !*** ./src/calcs/common/helpers/add-test-payment.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/notification */ "./node_modules/antd/lib/notification/index.js");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/notification/style */ "./node_modules/antd/lib/notification/style/index.js");
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_1__);
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};


var addTestPayment = function (globalOptions) {
    var codes = ['KeyE', 'KeyP', 'KeyT'], pressed = new Set();
    document.addEventListener('keydown', function (e) {
        var e_1, _a;
        pressed.add(e.code);
        try {
            for (var codes_1 = __values(codes), codes_1_1 = codes_1.next(); !codes_1_1.done; codes_1_1 = codes_1.next()) {
                var code = codes_1_1.value;
                if (!pressed.has(code))
                    return;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (codes_1_1 && !codes_1_1.done && (_a = codes_1.return)) _a.call(codes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        pressed.clear();
        globalOptions.dinamyc.test = !globalOptions.dinamyc.test;
        if (globalOptions.dinamyc.test)
            antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default.a.info({
                message: 'Включена тестовая оплата!',
                description: 'Если вы сделали это случайно, то зажмите E+T+P (на английской раскладке).',
                duration: 6,
            });
        else
            antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default.a.info({ message: 'Тестовая оплата выключена!' });
    });
    document.addEventListener('keyup', function (e) {
        pressed.delete(e.code);
    });
};
/* harmony default export */ __webpack_exports__["default"] = (addTestPayment);


/***/ }),

/***/ "./src/calcs/common/helpers/bonusesSystemUsed.ts":
/*!*******************************************************!*\
  !*** ./src/calcs/common/helpers/bonusesSystemUsed.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bonusesSystemUsed; });
function bonusesSystemUsed(globalOptions) {
    return ((window.location.hostname === 'lk.euro-ins.ru' ||
        window.location.hostname === 'euro-ins.lh') &&
        globalOptions.bonuses !== undefined &&
        globalOptions.clientIsn !== undefined);
}


/***/ }),

/***/ "./src/calcs/common/helpers/get-ym-client-id.ts":
/*!******************************************************!*\
  !*** ./src/calcs/common/helpers/get-ym-client-id.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getYmClientID = function (NAME_YM) {
    if (window[NAME_YM] === undefined)
        return;
    return window[NAME_YM].getClientID && window[NAME_YM].getClientID();
};
/* harmony default export */ __webpack_exports__["default"] = (getYmClientID);


/***/ }),

/***/ "./src/calcs/common/hooks/use-steps.ts":
/*!*********************************************!*\
  !*** ./src/calcs/common/hooks/use-steps.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var useSteps = function () {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), currentStep = _a[0], setCurrentStep = _a[1], nextStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setCurrentStep(function (prState) { return prState + 1; });
    }, []), prevStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setCurrentStep(function (prState) { return prState - 1; });
    }, []);
    return {
        currentStep: currentStep,
        nextStep: nextStep,
        prevStep: prevStep,
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useSteps);


/***/ }),

/***/ "./src/calcs/travel/main/classes/api.ts":
/*!**********************************************!*\
  !*** ./src/calcs/travel/main/classes/api.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/calcs/travel/main/constants/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var getInitFetch = function (data) { return ({
    method: _constants__WEBPACK_IMPORTED_MODULE_0__["POST"],
    headers: _constants__WEBPACK_IMPORTED_MODULE_0__["HEADERS"],
    body: JSON.stringify(data),
}); };
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.getCost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(_constants__WEBPACK_IMPORTED_MODULE_0__["URL_GET_COST"], getInitFetch(data))];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200)
                            throw new Error('Ошибка запроса стоимости.');
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, { errors: [e_1.message] }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Api.createPolicy = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseData, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch(_constants__WEBPACK_IMPORTED_MODULE_0__["URL_CREATE_POLICY"], getInitFetch(data))];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === 400)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseData = _a.sent();
                        throw new Error(JSON.stringify(responseData.errors) ||
                            'Ошибка создания полиса.');
                    case 3:
                        if (response.status !== 200)
                            throw new Error('Ошибка создания полиса.');
                        return [4 /*yield*/, response.json()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        e_2 = _a.sent();
                        return [2 /*return*/, { errors: [e_2.message] }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Api.getPaymentLink = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(_constants__WEBPACK_IMPORTED_MODULE_0__["URL_GET_PAY_URL"], getInitFetch(data))];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200)
                            throw new Error('Ошибка получения ссылки на оплату.');
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_3 = _a.sent();
                        return [2 /*return*/, { errors: [e_3.message] }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Api.getAssistances = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(_constants__WEBPACK_IMPORTED_MODULE_0__["URL_GET_ASSISTANCES"])];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200)
                            return [2 /*return*/, { errors: ['Ошибка загрузки ассистансов.'] }];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_4 = _a.sent();
                        return [2 /*return*/, { errors: [e_4.message] }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Api.getSports = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(_constants__WEBPACK_IMPORTED_MODULE_0__["URL_GET_SPORTS"])];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200)
                            return [2 /*return*/, { errors: ['Ошибка загрузки видов спорта.'] }];
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_5 = _a.sent();
                        return [2 /*return*/, { errors: [e_5.message] }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Api;
}());
/* harmony default export */ __webpack_exports__["default"] = (Api);


/***/ }),

/***/ "./src/calcs/travel/main/classes/extractor.ts":
/*!****************************************************!*\
  !*** ./src/calcs/travel/main/classes/extractor.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/constants */ "./src/calcs/common/constants/index.ts");
/* harmony import */ var _constants_promocodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/promocodes */ "./src/calcs/travel/main/constants/promocodes.ts");
/* harmony import */ var _common_helpers_get_ym_client_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/get-ym-client-id */ "./src/calcs/common/helpers/get-ym-client-id.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_helpers_bonusesSystemUsed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/bonusesSystemUsed */ "./src/calcs/common/helpers/bonusesSystemUsed.ts");
var __assign = (undefined && undefined.__assign) || function () {
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






/*
    В функциях этого класса мы не проверяем
    на наличие корректных значений полей,
    это задача валидатора.
    Мы просто берем значения из полей.
 */
var Extractor = /** @class */ (function () {
    function Extractor() {
        var _this = this;
        this.setForm = function (form) { return (_this.form = form); };
        this.setGlobalOptions = function (globalOptions) { return (_this.globalOptions = globalOptions); };
        this.setBonusesSystemIsOn = function (bonusesSystemIsOn) {
            return (_this.bonusesSystemIsOn = bonusesSystemIsOn);
        };
        this.formatRisks = function (secondPrograms) {
            var risks = [];
            for (var name_1 in secondPrograms)
                if (secondPrograms[name_1] !== undefined)
                    risks.push({ name: name_1, sum: secondPrograms[name_1] });
            return risks;
        };
        this.extractDataForGetCost = function () {
            // log('extractDataForGetCost', this.form.getFieldsValue())
            var getFieldValue = _this.form.getFieldValue, code = _this.globalOptions.code, currency = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].CURRENCY), multi = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].MULTI), periodStartDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_START_DATE), periodEndDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_END_DATE), risks = _this.formatRisks(getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].SECOND_PROGRAMS)), data = {
                code: code,
                beginDate: periodStartDate.format(_common_constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_DATE_FORMAT"]),
                endDate: multi
                    ? moment__WEBPACK_IMPORTED_MODULE_4__(periodStartDate)
                        .add(1, 'y')
                        .format(_common_constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_DATE_FORMAT"])
                    : periodEndDate.format(_common_constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_DATE_FORMAT"]),
                countries: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].COUNTRIES),
                currency: currency === 'РУБ' ? 'RUB' : currency,
                multi: multi,
                persons: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS).map(function (indured) { return ({
                    birthday: indured.birthday.format(_common_constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_DATE_FORMAT"]),
                }); }),
                sum: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANCE_SUM),
                totalDays: multi
                    ? getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_MULTI)
                    : getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].NUMBER_OF_DAYS),
                risks: risks,
                sports: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].SPORTS),
                options: {
                    covid: getFieldValue([_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].OPTIONS, _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].COVID]),
                },
            };
            var promo = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PROMOCODE);
            if (promo) {
                promo = promo.toLowerCase();
                _constants_promocodes__WEBPACK_IMPORTED_MODULE_2__["default"].some(function (el) {
                    if (promo === el.promocode)
                        return (data.code = el.partnerCode);
                });
            }
            return data;
        };
        this.extractDataForCreate = function () {
            var getFieldValue = _this.form.getFieldValue, 
            // Извлекаем часть данных, которые требуются для рассчета
            chunkOfData = _this.extractDataForGetCost(), insureds = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS).map(function (insured) { return ({
                lastName: insured[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].LAST_NAME],
                firstName: insured[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].FIRST_NAME],
                birthday: insured[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].BIRTHDAY].format(_common_constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_DATE_FORMAT"]),
                passportNumber: insured[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_SERIAL] +
                    ' ' +
                    insured[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_NUMBER],
            }); }), options = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].OPTIONS);
            return __assign(__assign({}, chunkOfData), { insurer: {
                    lastName: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_LAST_NAME),
                    firstName: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_FIRST_NAME),
                    middleName: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_MIDDLE_NAME),
                    address: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_ADDRESS),
                    phone: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_PHONE),
                    email: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_EMAIL),
                    birthday: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_BIRTHDAY).format(_common_constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_DATE_FORMAT"]),
                    passport: {
                        serial: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_PASSPORT_SERIAL),
                        number: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_PASSPORT_NUMBER),
                        issuedDate: getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_PASSPORT_DATE_OF_ISSUE).format(_common_constants__WEBPACK_IMPORTED_MODULE_1__["REQUEST_DATE_FORMAT"]),
                    },
                }, options: __assign(__assign(__assign({}, options), _this.getBonusesData()), { referrer: document.referrer || undefined, ymClientId: Object(_common_helpers_get_ym_client_id__WEBPACK_IMPORTED_MODULE_3__["default"])(_common_constants__WEBPACK_IMPORTED_MODULE_1__["NAME_YM_EUROINS"]) }), persons: insureds, test: _this.globalOptions.dinamyc.test });
        };
    }
    Extractor.prototype.getBonusesData = function () {
        var _a = this, globalOptions = _a.globalOptions, form = _a.form;
        if (Object(_common_helpers_bonusesSystemUsed__WEBPACK_IMPORTED_MODULE_5__["default"])(globalOptions)) {
            return {
                clientIsn: globalOptions.clientIsn,
                bonus: form.getFieldValue('bonuses'),
            };
        }
        else {
            return {};
        }
    };
    return Extractor;
}());
var extractor = new Extractor();
/* harmony default export */ __webpack_exports__["default"] = (extractor);


/***/ }),

/***/ "./src/calcs/travel/main/classes/validator.ts":
/*!****************************************************!*\
  !*** ./src/calcs/travel/main/classes/validator.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};

var Validator = /** @class */ (function () {
    function Validator() {
        var _this = this;
        this.setForm = function (form) {
            _this.form = form;
        };
        this.validateFirstStep = function () { return __awaiter(_this, void 0, void 0, function () {
            var form, insureds, birthdays, ids, values, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('validateFirstStep');
                        form = this.form;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        insureds = form.getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS), birthdays = insureds.map(function (insured, i) { return [
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS,
                            i,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].BIRTHDAY,
                        ]; }), ids = __spread([
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].COUNTRIES,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_START_DATE,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_END_DATE,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].NUMBER_OF_DAYS
                        ], birthdays);
                        return [4 /*yield*/, form.validateFields(ids)];
                    case 2:
                        values = _a.sent();
                        console.log('Валидация первого шага успешна. Значения ', values);
                        return [2 /*return*/, 'success'];
                    case 3:
                        e_1 = _a.sent();
                        console.log('Ошибка при валидации первого шага! ', e_1);
                        form.scrollToField(e_1.errorFields[0].name);
                        return [2 /*return*/, 'error'];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.validateSecondStep = function () { return __awaiter(_this, void 0, void 0, function () {
            var form, ids, values, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = this.form;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        ids = [_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].AGREEMENT_WITH_RULES, _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PROMOCODE];
                        return [4 /*yield*/, form.validateFields(ids)];
                    case 2:
                        values = _a.sent();
                        console.log('Валидация второго шага успешна. Значения ', values);
                        return [2 /*return*/, 'success'];
                    case 3:
                        e_2 = _a.sent();
                        console.log('Ошибка при валидации второго шага! ', e_2);
                        form.scrollToField(e_2.errorFields[0].name);
                        return [2 /*return*/, 'error'];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.validateThirdStep = function () { return __awaiter(_this, void 0, void 0, function () {
            var form, insureds, ids_1, values, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = this.form, insureds = form.getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        ids_1 = [
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_PHONE,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_EMAIL,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_LAST_NAME,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_FIRST_NAME,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_MIDDLE_NAME,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_BIRTHDAY,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_ADDRESS,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_PASSPORT_SERIAL,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_PASSPORT_NUMBER,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT_PASSPORT_DATE_OF_ISSUE,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].AGREEMENT_WITH_PROTECTION_POLICY,
                        ];
                        insureds.forEach(function (insured, i) {
                            ids_1.push([_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS, i, _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].LAST_NAME]);
                            ids_1.push([_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS, i, _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].FIRST_NAME]);
                            ids_1.push([_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS, i, _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_SERIAL]);
                            ids_1.push([_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS, i, _constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_NUMBER]);
                        });
                        return [4 /*yield*/, form.validateFields(ids_1)];
                    case 2:
                        values = _a.sent();
                        console.log('Валидация третьего шага успешна. Значения ', values);
                        return [2 /*return*/, 'success'];
                    case 3:
                        e_3 = _a.sent();
                        console.log('Ошибка при валидации третьего шага! ', e_3);
                        form.scrollToField(e_3.errorFields[0].name);
                        return [2 /*return*/, 'error'];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.validateFourthStep = function () { return __awaiter(_this, void 0, void 0, function () {
            var form, ids, values, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = this.form;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        ids = [];
                        return [4 /*yield*/, form.validateFields(ids)];
                    case 2:
                        values = _a.sent();
                        console.log('Валидация четвертого шага успешна. Значения ', values);
                        return [2 /*return*/, 'success'];
                    case 3:
                        e_4 = _a.sent();
                        console.log('Ошибка при валидации четвертого шага! ', e_4);
                        form.scrollToField(e_4.errorFields[0].name);
                        return [2 /*return*/, 'error'];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    return Validator;
}());
var validator = new Validator();
/* harmony default export */ __webpack_exports__["default"] = (validator);


/***/ }),

/***/ "./src/calcs/travel/main/components/agreement-with-protection-policy/index.tsx":
/*!*************************************************************************************!*\
  !*** ./src/calcs/travel/main/components/agreement-with-protection-policy/index.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/checkbox/style */ "./node_modules/antd/lib/checkbox/style/index.js");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _common_constants_doc_urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/constants/doc-urls */ "./src/calcs/common/constants/doc-urls.ts");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _common_helpers_validators_required_true_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/helpers/validators/required-true-checkbox */ "./src/common/helpers/validators/required-true-checkbox.ts");











var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item;
var AgreementWithProtectionPolicy = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].AGREEMENT_WITH_PROTECTION_POLICY, valuePropName: 'checked', rules: [
                {
                    message: 'Поставьте отметку о согласии',
                    validator: _common_helpers_validators_required_true_checkbox__WEBPACK_IMPORTED_MODULE_9__["default"],
                },
            ], required: true },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u0442\u0435\u043A\u0441\u0442\u043E\u043C",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'e-link_underline', href: _constants__WEBPACK_IMPORTED_MODULE_6__["URL_USER_AGREEMENT"], target: '_blank' }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F"),
                    ". \u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'e-link_underline', href: _common_constants_doc_urls__WEBPACK_IMPORTED_MODULE_7__["URL_AGREEMENT_OF_PERSONAL_DATA"], target: '_blank' }, "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 (\u041F\u0414)"),
                    ' ',
                    "\u0438 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043B\u0441\u044F \u0441",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'e-link_underline', href: _common_constants_doc_urls__WEBPACK_IMPORTED_MODULE_7__["URL_POLICY_PERSONAL_DATA"], target: '_blank' }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u0437\u0430\u0449\u0438\u0442\u044B \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u041F\u0414"),
                    ".")))));
});
/* harmony default export */ __webpack_exports__["default"] = (AgreementWithProtectionPolicy);


/***/ }),

/***/ "./src/calcs/travel/main/components/agreement-with-rules/index.less":
/*!**************************************************************************!*\
  !*** ./src/calcs/travel/main/components/agreement-with-rules/index.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/agreement-with-rules/index.tsx":
/*!*************************************************************************!*\
  !*** ./src/calcs/travel/main/components/agreement-with-rules/index.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/checkbox/style */ "./node_modules/antd/lib/checkbox/style/index.js");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/agreement-with-rules/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_helpers_validators_required_true_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/helpers/validators/required-true-checkbox */ "./src/common/helpers/validators/required-true-checkbox.ts");










var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item;
var AgreementWithRules = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_5__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].AGREEMENT_WITH_RULES, rules: [
                {
                    message: 'Поставьте отметку о согласии с правилами и программой',
                    validator: _common_helpers_validators_required_true_checkbox__WEBPACK_IMPORTED_MODULE_9__["default"],
                },
            ], valuePropName: 'checked' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, { className: 'e-awr' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "*"),
                " \u0421",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'e-link_underline', href: _constants__WEBPACK_IMPORTED_MODULE_7__["URL_RULES"], target: '_blank' }, "\u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438"),
                ' ',
                "\u0438",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'e-link_underline', href: _constants__WEBPACK_IMPORTED_MODULE_7__["URL_PROGRAM"], target: '_blank' }, "\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F"),
                ' ',
                "\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0438\u0445 \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0442\u044C."))));
};
/* harmony default export */ __webpack_exports__["default"] = (AgreementWithRules);


/***/ }),

/***/ "./src/calcs/travel/main/components/app/index.less":
/*!*********************************************************!*\
  !*** ./src/calcs/travel/main/components/app/index.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/app/index.tsx":
/*!********************************************************!*\
  !*** ./src/calcs/travel/main/components/app/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_hooks_use_url_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/hooks/use-url-params */ "./src/common/hooks/use-url-params.ts");
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calculator */ "./src/calcs/travel/main/components/calculator/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/app/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components_page_after_payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/components/page-after-payment */ "./src/calcs/common/components/page-after-payment/index.tsx");
/* harmony import */ var _common_components_question_about_euroins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/components/question-about-euroins */ "./src/calcs/common/components/question-about-euroins/index.tsx");






var App = function (_a) {
    var globalOptions = _a.globalOptions;
    var params = Object(_common_hooks_use_url_params__WEBPACK_IMPORTED_MODULE_1__["default"])(), payment_status = params.payment_status;
    if (payment_status === 'success' || payment_status === 'error')
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_page_after_payment__WEBPACK_IMPORTED_MODULE_4__["default"], { params: params, rootNodeId: globalOptions.rootNodeId, successContent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_question_about_euroins__WEBPACK_IMPORTED_MODULE_5__["default"], { params: params }) }));
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_calculator__WEBPACK_IMPORTED_MODULE_2__["default"], { globalOptions: globalOptions });
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/calcs/travel/main/components/assistance-selection/index.less":
/*!**************************************************************************!*\
  !*** ./src/calcs/travel/main/components/assistance-selection/index.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/assistance-selection/index.tsx":
/*!*************************************************************************!*\
  !*** ./src/calcs/travel/main/components/assistance-selection/index.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/assistance-selection/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/helpers/create-request-state */ "./src/common/helpers/create-request-state.ts");
/* harmony import */ var _classes_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../classes/api */ "./src/calcs/travel/main/classes/api.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
















var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, initState = Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_12__["createInitialState"])();
var AssistanceSelection = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initState), 2), assistances = _a[0], setAssistances = _a[1], handleComponentDidMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setAssistances(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_12__["createStartedState"])());
                    return [4 /*yield*/, _classes_api__WEBPACK_IMPORTED_MODULE_13__["default"].getAssistances()];
                case 1:
                    result = _a.sent();
                    if ('errors' in result)
                        return [2 /*return*/, Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_12__["createErrorState"])(result.errors)];
                    setAssistances(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_12__["createSuccessState"])(result));
                    return [2 /*return*/];
            }
        });
    }); }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        handleComponentDidMount().then();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: function (prevValues, nextValues) {
            return prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES] !== nextValues[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES];
        }, noStyle: true }, function (_a) {
        var getFieldValue = _a.getFieldValue;
        var selectedCountries = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES);
        if (selectedCountries.includes(_constants__WEBPACK_IMPORTED_MODULE_14__["RF_ONLY_ID"]))
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_9__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0412\u044B\u0431\u043E\u0440 \u0430\u0441\u0441\u0438\u0441\u0442\u0430\u043D\u0441\u0430"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\u0410\u0441\u0441\u0438\u0441\u0442\u0430\u043D\u0441-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u0430\u043C\u0438 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u0438 \u0435\u0451 \u043A\u043E\u043C\u043F\u0430\u043D\u044C\u043E\u043D\u0430\u043C\u0438 (\u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u043C\u0438 \u0446\u0435\u043D\u0442\u0440\u0430\u043C\u0438 \u0438 \u0442\u043F). \u041E\u043D\u0438 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u0441\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0442\u0443\u0440\u0438\u0441\u0442\u0430\u043C, \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u043C\u0441\u044F \u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u043E\u043C, \u043F\u0440\u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u043C \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0438, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0433\u043E\u0441\u043F\u0438\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0438 \u0442\u0430\u043A \u0434\u0430\u043B\u0435\u0435."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, { sm: 12, xl: 8 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: [_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].OPTIONS, _constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].ASSISTANCE] },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, { className: 'e-sa__select', loading: assistances.requestStatus ===
                                'started', size: _constants__WEBPACK_IMPORTED_MODULE_14__["COMPONENT_SIZE"] }, assistances.data !== null &&
                            assistances.data.map(function (assistance) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, { value: assistance.code, key: assistance.code }, assistance.name)); }))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: true }, function (_a) {
                var getFieldValue = _a.getFieldValue;
                if (assistances.data === null)
                    return null;
                var assistanceValue = getFieldValue([
                    _constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].OPTIONS,
                    _constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].ASSISTANCE,
                ]), assistanceInfo = assistances.data.find(function (assistance) {
                    return assistance.code === assistanceValue;
                });
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, { sm: 12, xl: 10 },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: 'e-sa__img', src: assistanceInfo.image, alt: 'Логотип' })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, { sm: 24, xl: 14 },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, assistanceInfo.description))));
            })));
    }));
});
/* harmony default export */ __webpack_exports__["default"] = (AssistanceSelection);


/***/ }),

/***/ "./src/calcs/travel/main/components/calculator/index.less":
/*!****************************************************************!*\
  !*** ./src/calcs/travel/main/components/calculator/index.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/calculator/index.tsx":
/*!***************************************************************!*\
  !*** ./src/calcs/travel/main/components/calculator/index.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/grid */ "./node_modules/antd/lib/grid/index.js");
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-controller */ "./src/calcs/travel/main/hooks/use-controller.ts");
/* harmony import */ var _common_components_step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/components/step */ "./src/calcs/common/components/step/index.tsx");
/* harmony import */ var _trip_params__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trip-params */ "./src/calcs/travel/main/components/trip-params/index.tsx");
/* harmony import */ var _filling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filling */ "./src/calcs/travel/main/components/filling/index.tsx");
/* harmony import */ var _data_and_payment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data-and-payment */ "./src/calcs/travel/main/components/data-and-payment/index.tsx");
/* harmony import */ var _constants_init_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/init-values */ "./src/calcs/travel/main/constants/init-values.ts");
/* harmony import */ var _common_components_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/components/header */ "./src/calcs/common/components/header/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _common_components_check_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/components/check-wrapper */ "./src/calcs/common/components/check-wrapper/index.tsx");
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../check */ "./src/calcs/travel/main/components/check/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/calculator/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _common_components_check_cost__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/components/check-cost */ "./src/calcs/common/components/check-cost/index.tsx");
/* harmony import */ var _control_block__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../control-block */ "./src/calcs/travel/main/components/control-block/index.tsx");
/* harmony import */ var _common_components_phone_checker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../common/components/phone-checker */ "./src/calcs/common/components/phone-checker/index.tsx");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/notification/style */ "./node_modules/antd/lib/notification/style/index.js");
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _common_helpers_add_test_payment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../common/helpers/add-test-payment */ "./src/calcs/common/helpers/add-test-payment.ts");























// todo - оптимизировать количество модулей
var Calculator = function (_a) {
    var globalOptions = _a.globalOptions;
    var _b = Object(_hooks_use_controller__WEBPACK_IMPORTED_MODULE_4__["default"])({ globalOptions: globalOptions }), form = _b.form, currentStep = _b.currentStep, cost = _b.cost, policy = _b.policy, paymentLink = _b.paymentLink, prevStep = _b.prevStep, recalculate = _b.recalculate, bonusesSystemIsOn = _b.bonusesSystemIsOn, handleNextClick = _b.handleNextClick, nextDisabled = cost.requestStatus === 'started' ||
        policy.requestStatus === 'started' ||
        paymentLink.requestStatus === 'started';
    // todo - initial-values некоторых полей, нужно высчитывать при слиянии globalOptions,
    //  например поле daysAmount
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (cost.requestStatus === 'error') {
            antd_lib_modal__WEBPACK_IMPORTED_MODULE_18___default.a.error({
                title: 'Ошибка',
                content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, cost.errorMessage),
            });
        }
    }, [cost]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (policy.requestStatus === 'error') {
            antd_lib_modal__WEBPACK_IMPORTED_MODULE_18___default.a.error({
                title: 'Ошибка создания полиса',
                content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, policy.errorMessage),
            });
        }
    }, [policy]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        Object(_common_helpers_add_test_payment__WEBPACK_IMPORTED_MODULE_21__["default"])(globalOptions);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, { className: 'e-calc', layout: 'vertical', form: form, name: 'main', initialValues: _constants_init_values__WEBPACK_IMPORTED_MODULE_9__["default"] },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], { gutter: 64 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { sm: 24 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_header__WEBPACK_IMPORTED_MODULE_10__["default"], { currentStep: currentStep, calcSteps: _constants__WEBPACK_IMPORTED_MODULE_11__["HEADER_STEPS"] })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { xs: 24, md: 14 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_step__WEBPACK_IMPORTED_MODULE_5__["default"], { hidden: currentStep !== 0 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_trip_params__WEBPACK_IMPORTED_MODULE_6__["default"], { form: form })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_step__WEBPACK_IMPORTED_MODULE_5__["default"], { hidden: currentStep !== 1 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_filling__WEBPACK_IMPORTED_MODULE_7__["default"], { form: form, cost: cost.data === null ? 0 : cost.data.totalRub, globalOptions: globalOptions, onValueChange: recalculate, bonusesSystemIsOn: bonusesSystemIsOn })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_step__WEBPACK_IMPORTED_MODULE_5__["default"], { hidden: currentStep !== 2 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_data_and_payment__WEBPACK_IMPORTED_MODULE_8__["default"], { form: form })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_step__WEBPACK_IMPORTED_MODULE_5__["default"], { hidden: currentStep !== 3 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_phone_checker__WEBPACK_IMPORTED_MODULE_17__["default"], { stepIsActive: currentStep === 3, form: form, globalOptions: globalOptions }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { xs: 24, md: 8 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_check_wrapper__WEBPACK_IMPORTED_MODULE_12__["default"], { rootNodeId: globalOptions.rootNodeId, currentStep: currentStep },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_check__WEBPACK_IMPORTED_MODULE_13__["default"], { cost: cost }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_check_cost__WEBPACK_IMPORTED_MODULE_15__["default"], { currentStep: currentStep, cost: cost.data === null ? 0 : cost.data.totalRub, defaultCost: 'от 68', loadingCost: cost.requestStatus === 'started', bonusesSystemIsOn: bonusesSystemIsOn, rootNodeId: globalOptions.rootNodeId, onPrevStepClick: prevStep })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], { gutter: 64 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], { sm: 24, md: 14 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_control_block__WEBPACK_IMPORTED_MODULE_16__["default"], { currentStep: currentStep, onNextClick: handleNextClick, onPrevClick: prevStep, nextDisabled: nextDisabled }))),
         true ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: function (e) {
                e.preventDefault();
                // e.stopPropagation()
                console.log(form.getFieldsValue());
                console.log(globalOptions);
            } }, "\u0414\u0430\u043D\u043D\u044B\u0435")) : undefined));
};
/* harmony default export */ __webpack_exports__["default"] = (Calculator);


/***/ }),

/***/ "./src/calcs/travel/main/components/check/index.less":
/*!***********************************************************!*\
  !*** ./src/calcs/travel/main/components/check/index.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/check/index.tsx":
/*!**********************************************************!*\
  !*** ./src/calcs/travel/main/components/check/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/divider/style */ "./node_modules/antd/lib/divider/style/index.js");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_lib_icons_GlobalOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/GlobalOutlined */ "./node_modules/@ant-design/icons/lib/icons/GlobalOutlined.js");
/* harmony import */ var _ant_design_icons_lib_icons_GlobalOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_GlobalOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants_countries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/countries */ "./src/calcs/travel/main/constants/countries.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/check/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/constants */ "./src/calcs/common/constants/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants_second_programs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/second-programs */ "./src/calcs/travel/main/constants/second-programs.ts");
/* harmony import */ var _common_helpers_divide_integer_by_space__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/helpers/divide-integer-by-space */ "./src/common/helpers/divide-integer-by-space.ts");













var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item;
var getCountryNames = function (_a) {
    var getFieldValue = _a.getFieldValue;
    var selectedCountries = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].COUNTRIES), countryNames = [];
    _constants_countries__WEBPACK_IMPORTED_MODULE_7__["COUNTRIES"].forEach(function (country) {
        var index = selectedCountries.indexOf(country.id);
        if (index !== -1)
            countryNames.push(country.text);
    });
    if (countryNames.length === 0)
        countryNames.push('нет выбранных стран');
    return countryNames.join(', ');
}, getDates = function (_a) {
    var getFieldValue = _a.getFieldValue;
    var periodStartDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].PERIOD_START_DATE), periodStartDateEntered = !!periodStartDate, periodEndDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].PERIOD_END_DATE), periodEndDateEntered = !!periodEndDate, isMulti = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].MULTI), from = periodStartDateEntered
        ? periodStartDate.format(_common_constants__WEBPACK_IMPORTED_MODULE_9__["OUTPUT_DATE_FORMAT"])
        : '-';
    var to = '';
    if (isMulti)
        to = periodStartDateEntered
            ? moment__WEBPACK_IMPORTED_MODULE_10__(periodStartDate)
                .add(1, 'year')
                .format(_common_constants__WEBPACK_IMPORTED_MODULE_9__["OUTPUT_DATE_FORMAT"])
            : '-';
    else
        to = periodEndDateEntered
            ? periodEndDate.format(_common_constants__WEBPACK_IMPORTED_MODULE_9__["OUTPUT_DATE_FORMAT"])
            : '-';
    return "\u0441 " + from + " \u043F\u043E " + to;
}, getNamesOfSecondPrograms = function (_a) {
    var getFieldValue = _a.getFieldValue, getFieldsValue = _a.getFieldsValue;
    var selectedSports = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].SPORTS), selectedSecondPrograms = getFieldsValue()[_constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].SECOND_PROGRAMS], secondProgramNames = [];
    if (selectedSecondPrograms === undefined)
        return '';
    _constants_second_programs__WEBPACK_IMPORTED_MODULE_11__["default"].forEach(function (secondProgram) {
        if (selectedSecondPrograms[secondProgram.id])
            secondProgramNames.push(secondProgram.name);
    });
    if (selectedSports.length > 0)
        secondProgramNames.push('Активный отдых');
    if (secondProgramNames.length === 0)
        secondProgramNames.push('нет выбранных');
    return secondProgramNames.join(', ');
};
var Check = function (_a) {
    var cost = _a.cost;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: true, noStyle: true }, function (form) {
        var getFieldValue = form.getFieldValue, countryNames = getCountryNames(form), dates = getDates(form), numberOfInsured = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].INSUREDS).length, insuranceSum = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].INSURANCE_SUM), cover = Object(_common_helpers_divide_integer_by_space__WEBPACK_IMPORTED_MODULE_12__["default"])(insuranceSum) + " " + getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_6__["default"].CURRENCY), secondProgramNames = getNamesOfSecondPrograms(form);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0412\u0430\u0448 \u043F\u043E\u043B\u0438\u0441"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons_lib_icons_GlobalOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, { className: 'check__icon' }),
                ' ',
                countryNames),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "\u041F\u043E\u043B\u0438\u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442: ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, dates)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A: ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, numberOfInsured)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "\u041F\u043E\u043A\u0440\u044B\u0442\u0438\u0435: ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, cover)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u043F\u0446\u0438\u0438: ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, secondProgramNames)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null)));
    }));
};
/* harmony default export */ __webpack_exports__["default"] = (Check);


/***/ }),

/***/ "./src/calcs/travel/main/components/contacts/index.tsx":
/*!*************************************************************!*\
  !*** ./src/calcs/travel/main/components/contacts/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/grid */ "./node_modules/antd/lib/grid/index.js");
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _common_components_form_items_phone_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/components/form-items/phone-item */ "./src/common/components/form-items/phone-item/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/labels */ "./src/calcs/travel/main/constants/labels.ts");













var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;
var Contacts = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_7__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u0438\u0441\u0430"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], { gutter: { sm: 8, md: 16, xl: 24 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 12, lg: 8 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].INSURANT_EMAIL, label: _constants_labels__WEBPACK_IMPORTED_MODULE_11__["default"].EMAIL, rules: [
                        {
                            required: true,
                            type: 'email',
                            message: 'Введите корректный email',
                        },
                    ], validateTrigger: 'onBlur' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_10__["COMPONENT_SIZE"] }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 12, lg: 8 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_form_items_phone_item__WEBPACK_IMPORTED_MODULE_9__["default"], { name: _constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].INSURANT_PHONE })))));
});
/* harmony default export */ __webpack_exports__["default"] = (Contacts);


/***/ }),

/***/ "./src/calcs/travel/main/components/control-block/index.less":
/*!*******************************************************************!*\
  !*** ./src/calcs/travel/main/components/control-block/index.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/control-block/index.tsx":
/*!******************************************************************!*\
  !*** ./src/calcs/travel/main/components/control-block/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/grid */ "./node_modules/antd/lib/grid/index.js");
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_lib_icons_ArrowLeftOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/ArrowLeftOutlined */ "./node_modules/@ant-design/icons/lib/icons/ArrowLeftOutlined.js");
/* harmony import */ var _ant_design_icons_lib_icons_ArrowLeftOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_ArrowLeftOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons_lib_icons_ArrowRightOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/ArrowRightOutlined */ "./node_modules/@ant-design/icons/lib/icons/ArrowRightOutlined.js");
/* harmony import */ var _ant_design_icons_lib_icons_ArrowRightOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_ArrowRightOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/control-block/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);










var headerNodeId = 'calc-header';
var firstRender = true;
var nextText = ['Рассчитать', 'Оформить', 'Проверить телефон', 'Оплатить'];
var ControlBlock = function (_a) {
    var currentStep = _a.currentStep, onPrevClick = _a.onPrevClick, onNextClick = _a.onNextClick, nextDisabled = _a.nextDisabled;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (firstRender) {
            firstRender = !firstRender;
            return;
        }
        var headerNode = document.getElementById(headerNodeId);
        if (headerNode.scrollIntoView) {
            headerNode.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            window.location.hash = '';
            window.location.hash = "#" + headerNodeId;
        }
    }, [currentStep]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], { gutter: { sm: 8, md: 16, xl: 24 } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 12 }, currentStep > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, { className: 'e-control-block__button', icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons_lib_icons_ArrowLeftOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null), size: _constants__WEBPACK_IMPORTED_MODULE_7__["COMPONENT_SIZE"], onClick: onPrevClick }, "\u041D\u0430\u0437\u0430\u0434")) : null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 12 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, { className: 'e-control-block__button', type: 'primary', size: _constants__WEBPACK_IMPORTED_MODULE_7__["COMPONENT_SIZE"], onClick: onNextClick, disabled: nextDisabled },
                nextText[currentStep],
                " ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons_lib_icons_ArrowRightOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (ControlBlock);


/***/ }),

/***/ "./src/calcs/travel/main/components/country-selection/index.less":
/*!***********************************************************************!*\
  !*** ./src/calcs/travel/main/components/country-selection/index.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/country-selection/index.tsx":
/*!**********************************************************************!*\
  !*** ./src/calcs/travel/main/components/country-selection/index.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_radio_style_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/radio/style/index */ "./node_modules/antd/lib/radio/style/index.js");
/* harmony import */ var antd_lib_radio_style_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style_index__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_countries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/countries */ "./src/calcs/travel/main/constants/countries.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/country-selection/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants_euro_only__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/euro-only */ "./src/calcs/travel/main/constants/euro-only.ts");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};













var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a.Option, Group = antd_lib_radio__WEBPACK_IMPORTED_MODULE_5___default.a.Group;
var CountrySelection = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var form = _a.form;
    var selectRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(), _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1), 2), groupOfCountries = _b[0], setGroupOfCountries = _b[1], _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), open = _c[0], setOpen = _c[1], setCurrencyAndSum = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        var _a, _b, _c;
        var getFieldValue = form.getFieldValue, setFieldsValue = form.setFieldsValue, countries = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES);
        var isEuro = false;
        if (countries.includes(_constants__WEBPACK_IMPORTED_MODULE_8__["RF_ONLY_ID"]))
            return setFieldsValue((_a = {},
                _a[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].CURRENCY] = 'РУБ',
                _a[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].INSURANCE_SUM] = _constants__WEBPACK_IMPORTED_MODULE_8__["INSURANCE_SUMS_RUS"][0],
                _a));
        countries.some(function (countryId) {
            if (_constants_euro_only__WEBPACK_IMPORTED_MODULE_11__["EURO_ONLY"].indexOf(countryId) !== -1) {
                isEuro = true;
                return true;
            }
        });
        if (isEuro)
            setFieldsValue((_b = {},
                _b[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].CURRENCY] = 'EUR',
                _b[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].INSURANCE_SUM] = _constants__WEBPACK_IMPORTED_MODULE_8__["INSURANCE_SUMS"][0],
                _b));
        else
            setFieldsValue((_c = {},
                _c[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].CURRENCY] = 'USD',
                _c[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].INSURANCE_SUM] = _constants__WEBPACK_IMPORTED_MODULE_8__["INSURANCE_SUMS"][0],
                _c));
    }, []), hundleCountryGroupChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_a) {
        var _b, _c;
        var value = _a.target.value;
        var setFieldsValue = form.setFieldsValue;
        if (value === 1)
            setFieldsValue((_b = {}, _b[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES] = [], _b));
        // если Весь мир, Шенген или РФ то выставляем только их
        if (value === 255 || value === _constants__WEBPACK_IMPORTED_MODULE_8__["RF_ONLY_ID"] || value === 254)
            setFieldsValue((_c = {}, _c[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES] = [value], _c));
        setGroupOfCountries(value);
        setCurrencyAndSum();
    }, []), handleDeselectCountry = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
        if (value === 254)
            setGroupOfCountries(1);
        setCurrencyAndSum();
    }, []), handleSelect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        selectRef.current.blur();
        setCurrencyAndSum();
    }, [selectRef]), handleFocus = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setOpen(true);
    }, []), handleBlur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setOpen(false);
    }, []), selectedCountries = form.getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES), selectDisabled = groupOfCountries === 255 || groupOfCountries === _constants__WEBPACK_IMPORTED_MODULE_8__["RF_ONLY_ID"];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__["default"], { className: 'country-selection' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0421\u0442\u0440\u0430\u043D\u0430 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: [_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES], rules: [{ required: true, message: 'Выберете страну' }] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a, { ref: function (select) {
                    selectRef.current = select;
                }, className: 'country-selection__select', size: _constants__WEBPACK_IMPORTED_MODULE_8__["COMPONENT_SIZE"], open: open, mode: 'multiple', disabled: selectDisabled, placeholder: 'Введите страну', onDeselect: handleDeselectCountry, onSelect: handleSelect, onFocus: handleFocus, onBlur: handleBlur, optionFilterProp: 'children' }, _constants_countries__WEBPACK_IMPORTED_MODULE_7__["COUNTRIES"].map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, { value: item.id, disabled: [_constants__WEBPACK_IMPORTED_MODULE_8__["RF_ONLY_ID"], 254, 255].includes(item.id) ||
                    (selectedCountries &&
                        selectedCountries.length > 4 &&
                        !(selectedCountries.indexOf(item.id) + 1)), key: item.id }, item.text)); }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { value: groupOfCountries, onChange: hundleCountryGroupChange, className: 'country-selection__radio-group' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_5___default.a, { value: 1 }, "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u044B"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_5___default.a, { value: 254 }, "\u0421\u0442\u0440\u0430\u043D\u044B \u0448\u0435\u043D\u0433\u0435\u043D\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u044E\u0437\u0430 + \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_5___default.a, { value: 255 }, "\u0412\u0435\u0441\u044C \u043C\u0438\u0440, \u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044F \u0421\u0428\u0410 \u0438 \u041A\u0430\u043D\u0430\u0434\u0443"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_5___default.a, { value: _constants__WEBPACK_IMPORTED_MODULE_8__["RF_ONLY_ID"] }, "\u0422\u043E\u043B\u044C\u043A\u043E \u0420\u0424"))));
});
/* harmony default export */ __webpack_exports__["default"] = (CountrySelection);


/***/ }),

/***/ "./src/calcs/travel/main/components/covid-option/index.less":
/*!******************************************************************!*\
  !*** ./src/calcs/travel/main/components/covid-option/index.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/covid-option/index.tsx":
/*!*****************************************************************!*\
  !*** ./src/calcs/travel/main/components/covid-option/index.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/alert/style */ "./node_modules/antd/lib/alert/style/index.js");
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/radio/style */ "./node_modules/antd/lib/radio/style/index.js");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/covid-option/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");












var Group = antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a.Group, Button = antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a.Button, Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item;
var CovidOption = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var onValueChange = _a.onValueChange;
    var handleChange = function () {
        onValueChange([_constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].OPTIONS, _constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].COVID]);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: function (prevValues, currentValues) {
            return prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].COUNTRIES] !== currentValues[_constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].COUNTRIES];
        }, noStyle: true }, function (_a) {
        var getFieldValue = _a.getFieldValue;
        var selectedCountries = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].COUNTRIES), russiaOnly = selectedCountries.includes(_constants__WEBPACK_IMPORTED_MODULE_10__["RF_ONLY_ID"]);
        if (russiaOnly)
            return;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0442 covid-19"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_alert__WEBPACK_IMPORTED_MODULE_2___default.a, { type: 'warning', message: 'Без данной опции документы в посольстве могут не принять. При включении этой опции она будет указана в вашем полисе.', showIcon: true }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { className: 'e-covid-option__item', name: [_constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].OPTIONS, _constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].COVID], label: 'Включить опцию страхование от covid-19?' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { buttonStyle: 'solid', onChange: handleChange },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Button, { value: false }, "\u041D\u0435\u0442"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Button, { value: true }, "\u0414\u0430")))));
    }));
});
/* harmony default export */ __webpack_exports__["default"] = (CovidOption);


/***/ }),

/***/ "./src/calcs/travel/main/components/currency-and-sums/index.tsx":
/*!**********************************************************************!*\
  !*** ./src/calcs/travel/main/components/currency-and-sums/index.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../currency */ "./src/calcs/travel/main/components/currency/index.tsx");
/* harmony import */ var _sums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sums */ "./src/calcs/travel/main/components/sums/index.tsx");









var CurrencyAndSums = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var onValueChange = _a.onValueChange;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_5__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, { gutter: 16 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, { md: 12, lg: 10 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_currency__WEBPACK_IMPORTED_MODULE_6__["default"], { onValueChange: onValueChange })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, { md: 12 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_sums__WEBPACK_IMPORTED_MODULE_7__["default"], { onValueChange: onValueChange })))));
});
/* harmony default export */ __webpack_exports__["default"] = (CurrencyAndSums);


/***/ }),

/***/ "./src/calcs/travel/main/components/currency/index.tsx":
/*!*************************************************************!*\
  !*** ./src/calcs/travel/main/components/currency/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/radio/style */ "./node_modules/antd/lib/radio/style/index.js");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants_euro_only__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/euro-only */ "./src/calcs/travel/main/constants/euro-only.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");









var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, Group = antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a.Group;
var Currency = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var onValueChange = _a.onValueChange;
    var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        onValueChange(_constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].CURRENCY);
    }, [onValueChange]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0430\u043B\u044E\u0442\u0443"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: function (prevValues, currentValues) {
                return prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].COUNTRIES] !== currentValues[_constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].COUNTRIES];
            } }, function (_a) {
            var getFieldValue = _a.getFieldValue;
            var countries = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].COUNTRIES), russiaOnly = countries.includes(_constants__WEBPACK_IMPORTED_MODULE_7__["RF_ONLY_ID"]);
            var onlyEuro = false;
            countries.some(function (countryId) {
                if (_constants_euro_only__WEBPACK_IMPORTED_MODULE_6__["EURO_ONLY"].includes(countryId)) {
                    return (onlyEuro = true);
                }
            });
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].CURRENCY },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { onChange: handleChange },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, { value: 'USD', disabled: onlyEuro || russiaOnly }, "USD"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, { value: 'EUR', disabled: russiaOnly }, "EUR"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, { value: 'РУБ', disabled: !russiaOnly }, "\u0420\u0423\u0411"))));
        })));
});
/* harmony default export */ __webpack_exports__["default"] = (Currency);


/***/ }),

/***/ "./src/calcs/travel/main/components/data-and-payment/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/calcs/travel/main/components/data-and-payment/index.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contacts */ "./src/calcs/travel/main/components/contacts/index.tsx");
/* harmony import */ var _insureds_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../insureds-info */ "./src/calcs/travel/main/components/insureds-info/index.tsx");
/* harmony import */ var _insurant_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../insurant-info */ "./src/calcs/travel/main/components/insurant-info/index.tsx");
/* harmony import */ var _agreement_with_protection_policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../agreement-with-protection-policy */ "./src/calcs/travel/main/components/agreement-with-protection-policy/index.tsx");






var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item;
var DataAndPayment = function (_a) {
    var form = _a.form;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_contacts__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_insureds_info__WEBPACK_IMPORTED_MODULE_3__["default"], { form: form }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_insurant_info__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_agreement_with_protection_policy__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (DataAndPayment);


/***/ }),

/***/ "./src/calcs/travel/main/components/filling/index.tsx":
/*!************************************************************!*\
  !*** ./src/calcs/travel/main/components/filling/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _currency_and_sums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../currency-and-sums */ "./src/calcs/travel/main/components/currency-and-sums/index.tsx");
/* harmony import */ var _sport_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sport-selection */ "./src/calcs/travel/main/components/sport-selection/index.tsx");
/* harmony import */ var _second_programs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../second-programs */ "./src/calcs/travel/main/components/second-programs/index.tsx");
/* harmony import */ var _promocode_or_bonuses_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../promocode-or-bonuses-wrapper */ "./src/calcs/travel/main/components/promocode-or-bonuses-wrapper/index.tsx");
/* harmony import */ var _assistance_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assistance-selection */ "./src/calcs/travel/main/components/assistance-selection/index.tsx");
/* harmony import */ var _agreement_with_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../agreement-with-rules */ "./src/calcs/travel/main/components/agreement-with-rules/index.tsx");
/* harmony import */ var _covid_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../covid-option */ "./src/calcs/travel/main/components/covid-option/index.tsx");









var Filling = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var form = _a.form, cost = _a.cost, globalOptions = _a.globalOptions, onValueChange = _a.onValueChange, bonusesSystemIsOn = _a.bonusesSystemIsOn;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_currency_and_sums__WEBPACK_IMPORTED_MODULE_1__["default"], { onValueChange: onValueChange }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_sport_selection__WEBPACK_IMPORTED_MODULE_2__["default"], { onValueChange: onValueChange }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_second_programs__WEBPACK_IMPORTED_MODULE_3__["default"], { onValueChange: onValueChange }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_promocode_or_bonuses_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"], { form: form, cost: cost, globalOptions: globalOptions, onValueChange: onValueChange, bonusesSystemIsOn: bonusesSystemIsOn }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assistance_selection__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_agreement_with_rules__WEBPACK_IMPORTED_MODULE_6__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_covid_option__WEBPACK_IMPORTED_MODULE_7__["default"], { onValueChange: onValueChange })));
});
/* harmony default export */ __webpack_exports__["default"] = (Filling);


/***/ }),

/***/ "./src/calcs/travel/main/components/insurant-info/index.less":
/*!*******************************************************************!*\
  !*** ./src/calcs/travel/main/components/insurant-info/index.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/insurant-info/index.tsx":
/*!******************************************************************!*\
  !*** ./src/calcs/travel/main/components/insurant-info/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/grid */ "./node_modules/antd/lib/grid/index.js");
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/radio/style */ "./node_modules/antd/lib/radio/style/index.js");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/components/custom-form-components/date */ "./src/common/components/custom-form-components/date/index.tsx");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/labels */ "./src/calcs/travel/main/constants/labels.ts");
/* harmony import */ var _common_components_passport_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../common/components/passport-data */ "./src/common/components/passport-data/index.tsx");
/* harmony import */ var _common_helpers_validators_is_adult__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../common/helpers/validators/is-adult */ "./src/common/helpers/validators/is-adult.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../common/constants */ "./src/calcs/common/constants/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/insurant-info/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _helpers_reset_insured_is_insurant__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../helpers/reset-insured-is-insurant */ "./src/calcs/travel/main/helpers/reset-insured-is-insurant.ts");
/* harmony import */ var _insured_is_insurant__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./insured-is-insurant */ "./src/calcs/travel/main/components/insurant-info/insured-is-insurant/index.tsx");






















var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, List = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.List, Group = antd_lib_radio__WEBPACK_IMPORTED_MODULE_5___default.a.Group, Button = antd_lib_radio__WEBPACK_IMPORTED_MODULE_5___default.a.Button;
var InsurantInfo = function () {
    var setInsuredToInsurant = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_a) {
        var _b, _c;
        var getFieldValue = _a.getFieldValue, setFieldsValue = _a.setFieldsValue;
        var insureds = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSUREDS), insuredIsInsurantId = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSURED_IS_INSURANT_ID), insuredInsurant = insureds[insuredIsInsurantId];
        setFieldsValue((_b = {},
            _b[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSURANT] = (_c = {},
                _c[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].LAST_NAME] = insuredInsurant[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].LAST_NAME],
                _c[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].FIRST_NAME] = insuredInsurant[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].FIRST_NAME],
                _c[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].MIDDLE_NAME] = insuredInsurant[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].MIDDLE_NAME],
                _c[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].BIRTHDAY] = insuredInsurant[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].BIRTHDAY],
                _c[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].PASSPORT_SERIAL] = insuredInsurant[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].PASSPORT_SERIAL],
                _c[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].PASSPORT_NUMBER] = insuredInsurant[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].PASSPORT_NUMBER],
                _c),
            _b));
    }, []), handleResetInsured = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(_helpers_reset_insured_is_insurant__WEBPACK_IMPORTED_MODULE_19__["default"], []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: true, noStyle: true }, function (form) {
        var getFieldValue = form.getFieldValue, insureds = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSUREDS);
        if (insureds.some(function (insured) { return !insured || !insured[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].BIRTHDAY]; }))
            return null;
        var adultInsureds = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSUREDS).filter(function (insured) {
            return moment__WEBPACK_IMPORTED_MODULE_17__().diff(insured[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].BIRTHDAY], 'years') > 18;
        }), countries = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].COUNTRIES), russiaOnly = countries.includes(_constants__WEBPACK_IMPORTED_MODULE_10__["RF_ONLY_ID"]), insuredIsInsurantId = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSURED_IS_INSURANT_ID), insuredIsInsurant = insuredIsInsurantId !== null;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_9__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u0442\u0435\u043B\u044C (\u0442\u043E\u0442, \u043A\u0442\u043E \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u0438\u0441)"),
            russiaOnly ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_insured_is_insurant__WEBPACK_IMPORTED_MODULE_20__["default"], { adultInsureds: adultInsureds, onInsuredSelect: function () {
                    return setInsuredToInsurant(form);
                }, onReset: function () { return Object(_helpers_reset_insured_is_insurant__WEBPACK_IMPORTED_MODULE_19__["default"])(form); } })) : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], { gutter: { sm: 8, md: 16, xl: 24 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 12, md: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSURANT_LAST_NAME, label: _constants_labels__WEBPACK_IMPORTED_MODULE_13__["default"].LAST_NAME, rules: _common_constants__WEBPACK_IMPORTED_MODULE_16__["STANDART_ITEM_RULES"], required: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_10__["COMPONENT_SIZE"], disabled: insuredIsInsurant }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 12, md: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSURANT_FIRST_NAME, label: _constants_labels__WEBPACK_IMPORTED_MODULE_13__["default"].FIRST_NAME, rules: _common_constants__WEBPACK_IMPORTED_MODULE_16__["STANDART_ITEM_RULES"], required: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_10__["COMPONENT_SIZE"], disabled: insuredIsInsurant }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 12, md: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSURANT_MIDDLE_NAME, label: _constants_labels__WEBPACK_IMPORTED_MODULE_13__["default"].MIDDLE_NAME, rules: _common_constants__WEBPACK_IMPORTED_MODULE_16__["STANDART_ITEM_RULES"], required: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_10__["COMPONENT_SIZE"], disabled: insuredIsInsurant }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 12, md: 6 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSURANT_BIRTHDAY, label: _constants_labels__WEBPACK_IMPORTED_MODULE_13__["default"].BIRTHDAY, rules: [{ validator: _common_helpers_validators_is_adult__WEBPACK_IMPORTED_MODULE_15__["default"] }], required: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_12__["default"], { disabled: insuredIsInsurant }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 24 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSURANT_ADDRESS, label: _constants_labels__WEBPACK_IMPORTED_MODULE_13__["default"].ADDRESS, rules: _common_constants__WEBPACK_IMPORTED_MODULE_16__["STANDART_ITEM_RULES"], required: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_10__["COMPONENT_SIZE"] }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { sm: 24 },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_passport_data__WEBPACK_IMPORTED_MODULE_14__["default"], { namespace: _constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].INSURANT, disablesSerial: insuredIsInsurant, disablesNumber: insuredIsInsurant })))));
    }));
};
/* harmony default export */ __webpack_exports__["default"] = (InsurantInfo);


/***/ }),

/***/ "./src/calcs/travel/main/components/insurant-info/insured-is-insurant/index.tsx":
/*!**************************************************************************************!*\
  !*** ./src/calcs/travel/main/components/insurant-info/insured-is-insurant/index.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/radio/style */ "./node_modules/antd/lib/radio/style/index.js");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_5__);






var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, List = antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.List, Group = antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a.Group, Button = antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a.Button;
var InsuredIsInsurant = function (_a) {
    var adultInsureds = _a.adultInsureds, onInsuredSelect = _a.onInsuredSelect, onReset = _a.onReset;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { marginBottom: 16 } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043D\u044B\u0445?"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'e-insurant-info__insureds' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].INSURED_IS_INSURANT_ID },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { size: 'small', onChange: onInsuredSelect }, adultInsureds.map(function (insured, i) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Button, { value: i, key: i },
                    insured[_constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].LAST_NAME],
                    ' ',
                    insured[_constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].FIRST_NAME])); }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'e-insurant-info__reset', onClick: onReset }, "\u0441\u0431\u0440\u043E\u0441"))));
};
/* harmony default export */ __webpack_exports__["default"] = (InsuredIsInsurant);


/***/ }),

/***/ "./src/calcs/travel/main/components/insured-birthdays/index.less":
/*!***********************************************************************!*\
  !*** ./src/calcs/travel/main/components/insured-birthdays/index.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/insured-birthdays/index.tsx":
/*!**********************************************************************!*\
  !*** ./src/calcs/travel/main/components/insured-birthdays/index.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../common/components/custom-form-components/date */ "./src/common/components/custom-form-components/date/index.tsx");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MinusCircleOutlined */ "./node_modules/@ant-design/icons/lib/icons/MinusCircleOutlined.js");
/* harmony import */ var _ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/insured-birthdays/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _helpers_reset_insured_is_insurant__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../helpers/reset-insured-is-insurant */ "./src/calcs/travel/main/helpers/reset-insured-is-insurant.ts");
var __assign = (undefined && undefined.__assign) || function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




















var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_12___default.a.Item, List = antd_lib_form__WEBPACK_IMPORTED_MODULE_12___default.a.List;
var validator = function (r, v) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!v)
            return [2 /*return*/, Promise.reject('Введите дату')];
        if (v > moment__WEBPACK_IMPORTED_MODULE_10__())
            return [2 /*return*/, Promise.reject('Неверная дата')];
        return [2 /*return*/, Promise.resolve()];
    });
}); };
var InsuredBirthdays = function (_a) {
    var form = _a.form;
    var handleRemoveOrChangeDate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (form.getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].INSURED_IS_INSURANT_ID) !== null)
            Object(_helpers_reset_insured_is_insurant__WEBPACK_IMPORTED_MODULE_18__["default"])(form);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0414\u0430\u0442\u044B \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043D\u044B\u0445"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](List, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].INSUREDS }, function (fields, _a) {
            var add = _a.add, remove = _a.remove;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, null,
                fields.map(function (field) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, { key: field.key },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, __assign({}, field, { name: [field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].BIRTHDAY], fieldKey: [
                            field.fieldKey,
                            _constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].BIRTHDAY,
                        ], rules: [{ validator: validator }], className: 'insured-birthdays__item' }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_14__["default"], { onChange: function () {
                                return handleRemoveOrChangeDate();
                            } })),
                    fields.length > 1 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons_lib_icons_MinusCircleOutlined__WEBPACK_IMPORTED_MODULE_16___default.a, { className: 'insured-birthdays__icon-minus', onClick: function () {
                            remove(field.name);
                            handleRemoveOrChangeDate();
                        } })) : null)); }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, { className: 'insured-birthdays__add-button', type: 'dashed', size: _constants__WEBPACK_IMPORTED_MODULE_11__["COMPONENT_SIZE"], onClick: function () { return add(); }, disabled: fields.length === _constants__WEBPACK_IMPORTED_MODULE_11__["MAX_NUMBER_OF_INSURED"] },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["UserAddOutlined"], null),
                        " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0443\u0440\u0438\u0441\u0442\u0430"))));
        })));
};
/* harmony default export */ __webpack_exports__["default"] = (InsuredBirthdays);


/***/ }),

/***/ "./src/calcs/travel/main/components/insureds-info/field-list/index.tsx":
/*!*****************************************************************************!*\
  !*** ./src/calcs/travel/main/components/insureds-info/field-list/index.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/grid */ "./node_modules/antd/lib/grid/index.js");
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/divider/style */ "./node_modules/antd/lib/divider/style/index.js");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/labels */ "./src/calcs/travel/main/constants/labels.ts");
/* harmony import */ var _common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/components/custom-form-components/date */ "./src/common/components/custom-form-components/date/index.tsx");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/constants */ "./src/calcs/common/constants/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _passport__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../passport */ "./src/calcs/travel/main/components/insureds-info/passport/index.tsx");
var __assign = (undefined && undefined.__assign) || function () {
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
















var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item;
var FieldList = function (_a) {
    var form = _a.form, fields = _a.fields, passportTitle = _a.passportTitle, russiaOnly = _a.russiaOnly, getValueFromEvent = _a.getValueFromEvent;
    var insuredIsInsurantId = form.getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].INSURED_IS_INSURANT_ID), handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (insuredId, fieldName) {
        var _a, _b;
        var insured = form.getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].INSUREDS)[insuredId];
        form.setFieldsValue((_a = {},
            _a[_constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].INSURANT] = (_b = {},
                _b[fieldName] = insured[fieldName],
                _b),
            _a));
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, fields.map(function (field, i) {
        var isInsurant = field.name === insuredIsInsurantId;
        var handleLastNameChange, handleFirstNameChange, handleMiddleNameChange, handlePassportSerial, handlePassportNumber;
        if (isInsurant) {
            handleLastNameChange = function () {
                handleChange(field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].LAST_NAME);
            };
            handleFirstNameChange = function () {
                handleChange(field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].FIRST_NAME);
            };
            handleMiddleNameChange = function () {
                handleChange(field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].MIDDLE_NAME);
            };
            handlePassportSerial = function () {
                handleChange(field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].PASSPORT_SERIAL);
            };
            handlePassportNumber = function () {
                handleChange(field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].PASSPORT_NUMBER);
            };
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__["Row"], { gutter: { sm: 8, md: 16, xl: 24 }, key: field.key },
            i > 0 ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__["Col"], { sm: 24 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default.a, null))) : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__["Col"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, __assign({}, field, { name: [field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].BIRTHDAY], fieldKey: [field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].BIRTHDAY], label: _constants_labels__WEBPACK_IMPORTED_MODULE_10__["default"].BIRTHDAY, required: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_11__["default"], { disabled: true }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__["Col"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, __assign({}, field, { name: [field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].LAST_NAME], fieldKey: [field.fieldKey, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].LAST_NAME], label: _constants_labels__WEBPACK_IMPORTED_MODULE_10__["default"].LAST_NAME, rules: _common_constants__WEBPACK_IMPORTED_MODULE_12__["STANDART_ITEM_RULES"], getValueFromEvent: getValueFromEvent, required: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_8___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_13__["COMPONENT_SIZE"], onChange: handleLastNameChange }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__["Col"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, __assign({}, field, { name: [field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].FIRST_NAME], fieldKey: [field.fieldKey, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].FIRST_NAME], label: _constants_labels__WEBPACK_IMPORTED_MODULE_10__["default"].FIRST_NAME, rules: _common_constants__WEBPACK_IMPORTED_MODULE_12__["STANDART_ITEM_RULES"], getValueFromEvent: getValueFromEvent, required: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_8___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_13__["COMPONENT_SIZE"], onChange: handleFirstNameChange }))),
            russiaOnly ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__["Col"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, __assign({}, field, { name: [field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].MIDDLE_NAME], fieldKey: [field.fieldKey, _constants_ids__WEBPACK_IMPORTED_MODULE_1__["default"].MIDDLE_NAME], label: _constants_labels__WEBPACK_IMPORTED_MODULE_10__["default"].MIDDLE_NAME, rules: _common_constants__WEBPACK_IMPORTED_MODULE_12__["STANDART_ITEM_RULES"], getValueFromEvent: getValueFromEvent, required: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_8___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_13__["COMPONENT_SIZE"], onChange: handleMiddleNameChange })))) : null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_4__["Col"], { sm: 24 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_passport__WEBPACK_IMPORTED_MODULE_14__["default"], { field: field, title: passportTitle, onSerialChange: handlePassportSerial, onNumberChange: handlePassportNumber }))));
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (FieldList);


/***/ }),

/***/ "./src/calcs/travel/main/components/insureds-info/index.tsx":
/*!******************************************************************!*\
  !*** ./src/calcs/travel/main/components/insureds-info/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/divider/style */ "./node_modules/antd/lib/divider/style/index.js");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _common_helpers_for_get_value_from_event_handle_input_only_english__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/helpers/for-get-value-from-event/handle-input-only-english */ "./src/common/helpers/for-get-value-from-event/handle-input-only-english.ts");
/* harmony import */ var _common_helpers_for_get_value_from_event_handle_input_only_russian__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/helpers/for-get-value-from-event/handle-input-only-russian */ "./src/common/helpers/for-get-value-from-event/handle-input-only-russian.ts");
/* harmony import */ var _field_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./field-list */ "./src/calcs/travel/main/components/insureds-info/field-list/index.tsx");













var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, List = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.List;
var InsuredsInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var form = _a.form;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: function (prevValues, currentValues) {
            return prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].COUNTRIES] !== currentValues[_constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].COUNTRIES] ||
                prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].INSURED_IS_INSURANT_ID] !==
                    currentValues[_constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].INSURED_IS_INSURANT_ID];
        }, noStyle: true }, function (_a) {
        var getFieldValue = _a.getFieldValue;
        var russiaOnly = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].COUNTRIES).includes(_constants__WEBPACK_IMPORTED_MODULE_8__["RF_ONLY_ID"]);
        var titlePart = '(заполните на английском языке)', passportTitle = 'Данные загранпаспорта', getValueFromEvent = _common_helpers_for_get_value_from_event_handle_input_only_english__WEBPACK_IMPORTED_MODULE_9__["default"];
        if (russiaOnly) {
            titlePart = '';
            passportTitle = undefined;
            getValueFromEvent = _common_helpers_for_get_value_from_event_handle_input_only_russian__WEBPACK_IMPORTED_MODULE_10__["default"];
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_6__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null,
                "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043D\u044B\u0445 ",
                titlePart),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](List, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].INSUREDS }, function (fields) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_field_list__WEBPACK_IMPORTED_MODULE_11__["default"], { form: form, russiaOnly: russiaOnly, passportTitle: passportTitle, getValueFromEvent: getValueFromEvent, fields: fields })); })));
    }));
});
/* harmony default export */ __webpack_exports__["default"] = (InsuredsInfo);


/***/ }),

/***/ "./src/calcs/travel/main/components/insureds-info/passport/index.tsx":
/*!***************************************************************************!*\
  !*** ./src/calcs/travel/main/components/insureds-info/passport/index.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/grid */ "./node_modules/antd/lib/grid/index.js");
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/labels */ "./src/calcs/travel/main/constants/labels.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/constants */ "./src/calcs/common/constants/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
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












var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;
var Passport = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var field = _a.field, _b = _a.title, title = _b === void 0 ? 'Паспорт РФ' : _b, onSerialChange = _a.onSerialChange, onNumberChange = _a.onNumberChange;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], { gutter: { sm: 8, md: 16, xl: 24 } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { xs: 24, sm: 24 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, title)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { xs: 6, sm: 4 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, __assign({}, field, { name: [field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].PASSPORT_SERIAL], fieldKey: [field.fieldKey, _constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].PASSPORT_SERIAL], label: _constants_labels__WEBPACK_IMPORTED_MODULE_8__["default"].SERIAL, rules: _common_constants__WEBPACK_IMPORTED_MODULE_10__["STANDART_ITEM_RULES"], required: true }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_9__["COMPONENT_SIZE"], onChange: onSerialChange }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { xs: 9, sm: 6 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, __assign({}, field, { name: [field.name, _constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].PASSPORT_NUMBER], fieldKey: [field.fieldKey, _constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].PASSPORT_NUMBER], label: _constants_labels__WEBPACK_IMPORTED_MODULE_8__["default"].NUMBER, rules: _common_constants__WEBPACK_IMPORTED_MODULE_10__["STANDART_ITEM_RULES"], required: true }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_9__["COMPONENT_SIZE"], onChange: onNumberChange })))));
});
/* harmony default export */ __webpack_exports__["default"] = (Passport);


/***/ }),

/***/ "./src/calcs/travel/main/components/multiple-trip/index.tsx":
/*!******************************************************************!*\
  !*** ./src/calcs/travel/main/components/multiple-trip/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/constants */ "./src/calcs/common/constants/index.ts");
/* harmony import */ var _common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/components/custom-form-components/date */ "./src/common/components/custom-form-components/date/index.tsx");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/date-picker/style */ "./node_modules/antd/lib/date-picker/style/index.js");
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var antd_es_date_picker_locale_ru_RU__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/date-picker/locale/ru_RU */ "./node_modules/antd/es/date-picker/locale/ru_RU.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item;
var MultipleTrip = function (_a) {
    var minStartDate = _a.minStartDate;
    var validatorStartDate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (r, v) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!v)
                return [2 /*return*/, Promise.reject('Введите дату')];
            if (v < minStartDate)
                return [2 /*return*/, Promise.reject('Неверная дата')];
            return [2 /*return*/, Promise.resolve()];
        });
    }); }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_7__["default"].PERIOD_START_DATE, colon: false, labelCol: { sm: 24 }, rules: [{ validator: validatorStartDate }] }, _common_constants__WEBPACK_IMPORTED_MODULE_3__["SCREEN_IS_SMALL"] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_4__["default"], null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_5___default.a, { locale: antd_es_date_picker_locale_ru_RU__WEBPACK_IMPORTED_MODULE_9__["default"], showToday: false, disabledDate: function (current) { return current < minStartDate; }, format: _common_constants__WEBPACK_IMPORTED_MODULE_3__["OUTPUT_DATE_FORMAT"], size: _constants__WEBPACK_IMPORTED_MODULE_8__["COMPONENT_SIZE"], placeholder: _common_constants__WEBPACK_IMPORTED_MODULE_3__["DATE_PICKER_PLACEHOLDER"] })))));
};
/* harmony default export */ __webpack_exports__["default"] = (MultipleTrip);


/***/ }),

/***/ "./src/calcs/travel/main/components/promocode-item/index.tsx":
/*!*******************************************************************!*\
  !*** ./src/calcs/travel/main/components/promocode-item/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _constants_promocodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/promocodes */ "./src/calcs/travel/main/constants/promocodes.ts");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/labels */ "./src/calcs/travel/main/constants/labels.ts");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};










var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item;
var PromocodeItem = function (_a) {
    var onValid = _a.onValid, onNotValid = _a.onNotValid;
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), 2), validateStatus = _b[0], setValidateStatus = _b[1], validator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (r, v) {
        v = v.toLowerCase();
        if (v === '') {
            setValidateStatus('error');
            onNotValid(_constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].PROMOCODE);
            return Promise.reject('Введите промокод');
        }
        if (!_constants_promocodes__WEBPACK_IMPORTED_MODULE_6__["default"].some(function (cur) { return v === cur.promocode; })) {
            setValidateStatus('warning');
            onNotValid(_constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].PROMOCODE);
            return Promise.reject('Неверный промокод');
        }
        setValidateStatus('success');
        onValid(_constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].PROMOCODE);
        return Promise.resolve();
    }, [onValid]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_8__["default"].PROMOCODE, label: _constants_labels__WEBPACK_IMPORTED_MODULE_7__["default"].PROMOCODE, rules: [{ validator: validator }], validateStatus: validateStatus },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, { size: _constants__WEBPACK_IMPORTED_MODULE_5__["COMPONENT_SIZE"] })));
};
/* harmony default export */ __webpack_exports__["default"] = (PromocodeItem);


/***/ }),

/***/ "./src/calcs/travel/main/components/promocode-or-bonuses-wrapper/index.tsx":
/*!*********************************************************************************!*\
  !*** ./src/calcs/travel/main/components/promocode-or-bonuses-wrapper/index.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _promocode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../promocode */ "./src/calcs/travel/main/components/promocode/index.tsx");


// const PromocodeOrBonuses = React.lazy(() =>
//     import(
//         /* webpackChunkName: "PromocodeOrBonuses" */ '../promocode-or-bonuses/index'
//     )
// )
var PromocodeOrBonusesWrapper = function (_a) {
    // Данный функционал только для сайтов ЕВРОИНС
    // if (!siteIsOwnedByEuroins()) return
    var form = _a.form, cost = _a.cost, globalOptions = _a.globalOptions, onValueChange = _a.onValueChange, bonusesSystemIsOn = _a.bonusesSystemIsOn;
    // todo - хорошо потестить с бонусами
    // if (bonusesSystemIsOn)
    //     return (
    //         <Suspense fallback={'Загрузка компонента бонусов и промокодов...'}>
    //             <PromocodeOrBonuses
    //                 cost={cost}
    //                 globalOptions={globalOptions}
    //                 onValueChange={onValueChange}
    //             />
    //         </Suspense>
    //     )
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_promocode__WEBPACK_IMPORTED_MODULE_1__["default"], { form: form, onValueChange: onValueChange });
};
/* harmony default export */ __webpack_exports__["default"] = (PromocodeOrBonusesWrapper);


/***/ }),

/***/ "./src/calcs/travel/main/components/promocode/index.less":
/*!***************************************************************!*\
  !*** ./src/calcs/travel/main/components/promocode/index.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/promocode/index.tsx":
/*!**************************************************************!*\
  !*** ./src/calcs/travel/main/components/promocode/index.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/checkbox/style */ "./node_modules/antd/lib/checkbox/style/index.js");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _promocode_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../promocode-item */ "./src/calcs/travel/main/components/promocode-item/index.tsx");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/promocode/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_12__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};














var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item;
var Promocode = function (_a) {
    var _b = _a.form, setFieldsValue = _b.setFieldsValue, validateFields = _b.validateFields, onValueChange = _a.onValueChange;
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), checked = _c[0], setChecked = _c[1], handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
        var _a;
        setFieldsValue((_a = {}, _a[_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].PROMOCODE] = '', _a));
        onValueChange(_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].PROMOCODE);
        validateFields([_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].PROMOCODE]).then();
        setChecked(e.target.checked);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_8___default.a, { className: checked ? 'promocode__checkbox_margin_bottom' : '', onChange: handleChange },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, " \u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, { xs: 24, sm: 12, lg: 5 }, checked ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_promocode_item__WEBPACK_IMPORTED_MODULE_10__["default"], { onValid: function () { return onValueChange(_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].PROMOCODE); }, onNotValid: function () { return onValueChange(_constants_ids__WEBPACK_IMPORTED_MODULE_11__["default"].PROMOCODE); } })) : null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Promocode);


/***/ }),

/***/ "./src/calcs/travel/main/components/second-program/index.less":
/*!********************************************************************!*\
  !*** ./src/calcs/travel/main/components/second-program/index.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/second-program/index.tsx":
/*!*******************************************************************!*\
  !*** ./src/calcs/travel/main/components/second-program/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/switch */ "./node_modules/antd/lib/switch/index.js");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/switch/style */ "./node_modules/antd/lib/switch/style/index.js");
/* harmony import */ var antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/radio/style */ "./node_modules/antd/lib/radio/style/index.js");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/second-program/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _common_helpers_divide_integer_by_space__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/helpers/divide-integer-by-space */ "./src/common/helpers/divide-integer-by-space.ts");














var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, Group = antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a.Group;
var SecondProgram = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var id = _a.id, name = _a.name, sums = _a.sums, onValueChange = _a.onValueChange;
    var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        onValueChange([_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].SECOND_PROGRAMS, id]);
    }, [onValueChange]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a, { className: 'e-second-program', title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: 'e-second-program__title' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: 'e-second-program__icon', src: "https://euro-ins.ru/front/dist/img/calc/icon/secondPrograms/" + id + ".png", alt: 'Иконка риска' }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            name), extra: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: true }, function (_a) {
            var getFieldValue = _a.getFieldValue, setFieldsValue = _a.setFieldsValue;
            var checked = getFieldValue([_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].SECOND_PROGRAMS, id]) !==
                undefined, handleChange = function (checked) {
                var _a, _b;
                var value;
                if (checked)
                    value = sums[0];
                setFieldsValue((_a = {},
                    _a[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].SECOND_PROGRAMS] = (_b = {}, _b[id] = value, _b),
                    _a));
                onValueChange([_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].SECOND_PROGRAMS, id]);
            };
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_switch__WEBPACK_IMPORTED_MODULE_5___default.a, { checked: checked, onChange: handleChange }));
        }) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: [_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].SECOND_PROGRAMS, id], className: 'item_without-margin' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { onChange: handleChange }, sums.map(function (sum) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a, { value: sum, key: sum }, Object(_common_helpers_divide_integer_by_space__WEBPACK_IMPORTED_MODULE_11__["default"])(sum))); })))));
});
/* harmony default export */ __webpack_exports__["default"] = (SecondProgram);


/***/ }),

/***/ "./src/calcs/travel/main/components/second-programs/index.tsx":
/*!********************************************************************!*\
  !*** ./src/calcs/travel/main/components/second-programs/index.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var _constants_second_programs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/second-programs */ "./src/calcs/travel/main/constants/second-programs.ts");
/* harmony import */ var _second_program__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../second-program */ "./src/calcs/travel/main/components/second-program/index.tsx");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
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













var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item;
var SecondPrograms = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var onValueChange = _a.onValueChange;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_7__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0446\u0438\u0438"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, { gutter: 16 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: function (prevValues, currentValues) {
                    return prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES] !==
                        currentValues[_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES];
                }, noStyle: true }, function (_a) {
                var getFieldValue = _a.getFieldValue;
                var selectedCountries = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_10__["default"].COUNTRIES);
                if (selectedCountries.includes(_constants__WEBPACK_IMPORTED_MODULE_11__["RF_ONLY_ID"]))
                    return _constants_second_programs__WEBPACK_IMPORTED_MODULE_8__["SECOND_PROGRAMS_RUS"].map(function (program) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, { md: 24, lg: 8, key: program.id },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_second_program__WEBPACK_IMPORTED_MODULE_9__["default"], __assign({}, program, { onValueChange: onValueChange })))); });
                else
                    return _constants_second_programs__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (program) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, { md: 24, lg: 8, key: program.id },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_second_program__WEBPACK_IMPORTED_MODULE_9__["default"], __assign({}, program, { onValueChange: onValueChange })))); });
            }))));
});
/* harmony default export */ __webpack_exports__["default"] = (SecondPrograms);


/***/ }),

/***/ "./src/calcs/travel/main/components/single-trip/index.less":
/*!*****************************************************************!*\
  !*** ./src/calcs/travel/main/components/single-trip/index.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/single-trip/index.tsx":
/*!****************************************************************!*\
  !*** ./src/calcs/travel/main/components/single-trip/index.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/alert/style */ "./node_modules/antd/lib/alert/style/index.js");
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/date-picker/style */ "./node_modules/antd/lib/date-picker/style/index.js");
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../common/components/custom-form-components/date */ "./src/common/components/custom-form-components/date/index.tsx");
/* harmony import */ var _common_helpers_range_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../common/helpers/range-iterator */ "./src/common/helpers/range-iterator.ts");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants/labels */ "./src/calcs/travel/main/constants/labels.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/single-trip/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../common/constants */ "./src/calcs/common/constants/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





















var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, getOptions = function (from, to) {
    var e_1, _a;
    var rangeDaysIterator = new _common_helpers_range_iterator__WEBPACK_IMPORTED_MODULE_14__["default"](from, to), arrayOptions = [];
    try {
        for (var rangeDaysIterator_1 = __values(rangeDaysIterator), rangeDaysIterator_1_1 = rangeDaysIterator_1.next(); !rangeDaysIterator_1_1.done; rangeDaysIterator_1_1 = rangeDaysIterator_1.next()) {
            var day = rangeDaysIterator_1_1.value;
            arrayOptions.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, { key: day, value: day }, day));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (rangeDaysIterator_1_1 && !rangeDaysIterator_1_1.done && (_a = rangeDaysIterator_1.return)) _a.call(rangeDaysIterator_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return arrayOptions;
};
var SingleTrip = function (_a) {
    var form = _a.form, _b = _a.form, getFieldValue = _b.getFieldValue, setFieldsValue = _b.setFieldsValue, minStartDate = _a.minStartDate;
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), showAlert = _c[0], setShowAlert = _c[1], getMaxNumberOfDays = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        var startDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE), endDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE);
        if (startDate && endDate)
            return Math.round(endDate.diff(startDate, 'days', true)) + 1;
        return 1;
    }, []), setNumberOfDays = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (startDate, endDate) {
        var _a;
        if (startDate && endDate)
            setFieldsValue((_a = {},
                _a[_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].NUMBER_OF_DAYS] = Math.round(endDate.diff(startDate, 'days', true)) + 1,
                _a));
    }, []), handleNumberOfDaysChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        var startDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE), endDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE), numberOfDays = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].NUMBER_OF_DAYS), datesAreEntered = !!(startDate && endDate), numberOfDaysLessPeriod = datesAreEntered &&
            numberOfDays <
                Math.round(endDate.diff(startDate, 'days', true)) + 1;
        if (numberOfDaysLessPeriod)
            setShowAlert(true);
        else
            setShowAlert(false);
    }, []), commonValidator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (r, v) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!v)
                return [2 /*return*/, Promise.reject('Введите дату')
                    // если выбранная дата меньше минимальной даты
                ];
            // если выбранная дата меньше минимальной даты
            if (v < minStartDate)
                return [2 /*return*/, Promise.reject('Неверная дата')];
            return [2 /*return*/, Promise.resolve()];
        });
    }); }, []), validatorStartDate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (r, v) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, commonValidator(r, v)
                    .then(function () {
                    var endDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE);
                    // Если дату окончания еще не ввели, то пока не проверяем
                    if (!endDate)
                        return Promise.resolve();
                    // Если дата окончания введена и
                    // если дата начала позже даты окончания, то не валидно
                    if (endDate && v > endDate)
                        return Promise.reject('Дата начала не может быть позднее даты окончания');
                    return Promise.resolve();
                })
                    .catch(function (error) { return Promise.reject(error); })];
        });
    }); }, []), validatorEndDate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (r, v) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, commonValidator(r, v)
                    .then(function () {
                    var startDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE);
                    // Если дату окончания еще не ввели, то пока не проверяем
                    if (!startDate)
                        return Promise.resolve();
                    // Если дата начала введена и
                    // если дата начала позже даты окончания, то не валидно
                    if (startDate && v < startDate)
                        return Promise.reject('Дата окончания должна быть раньше даты начала');
                    return Promise.resolve();
                })
                    .catch(function (error) { return Promise.reject(error); })];
        });
    }); }, []), handlePeriodStartDateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        form.validateFields([_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE]).then(function (values) {
            // Если все хорошо, выставляем кол-во дней
            setNumberOfDays(getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE), values[_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE]);
            handleNumberOfDaysChange();
        });
    }, [setNumberOfDays]), handlePeriodEndDateChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        form.validateFields([_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE]).then(function (values) {
            // Если все хорошо, выставляем кол-во дней
            setNumberOfDays(values[_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE], getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE));
            handleNumberOfDaysChange();
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, { sm: 12 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u041F\u0435\u0440\u0438\u043E\u0434 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, { gutter: 16 },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { label: _constants_labels__WEBPACK_IMPORTED_MODULE_16__["default"].PERIOD_START_DATE, name: _constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE, labelCol: { sm: 24 }, colon: false, rules: [
                            {
                                validator: validatorStartDate,
                            },
                        ], required: true }, _common_constants__WEBPACK_IMPORTED_MODULE_19__["SCREEN_IS_SMALL"] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_13__["default"], { onChange: handlePeriodStartDateChange })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_11___default.a, { disabledDate: function (current) {
                            return current < minStartDate;
                        }, format: _common_constants__WEBPACK_IMPORTED_MODULE_19__["OUTPUT_DATE_FORMAT"], size: _constants__WEBPACK_IMPORTED_MODULE_18__["COMPONENT_SIZE"], onChange: handlePeriodStartDateChange, placeholder: _common_constants__WEBPACK_IMPORTED_MODULE_19__["DATE_PICKER_PLACEHOLDER"] })))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { label: _constants_labels__WEBPACK_IMPORTED_MODULE_16__["default"].PERIOD_END_DATE, name: _constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE, labelCol: { sm: 24 }, colon: false, rules: [
                            {
                                validator: validatorEndDate,
                            },
                        ], required: true }, _common_constants__WEBPACK_IMPORTED_MODULE_19__["SCREEN_IS_SMALL"] ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_custom_form_components_date__WEBPACK_IMPORTED_MODULE_13__["default"], { onChange: handlePeriodEndDateChange })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_11___default.a, { disabledDate: function (current) {
                            return current < minStartDate;
                        }, format: _common_constants__WEBPACK_IMPORTED_MODULE_19__["OUTPUT_DATE_FORMAT"], size: _constants__WEBPACK_IMPORTED_MODULE_18__["COMPONENT_SIZE"], onChange: handlePeriodEndDateChange, placeholder: _common_constants__WEBPACK_IMPORTED_MODULE_19__["DATE_PICKER_PLACEHOLDER"] })))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, { sm: 12 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u043D\u0435\u0439"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { className: 'single-trip__item-wrapper', label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "\u00A0"), labelCol: { sm: 24 }, colon: false, shouldUpdate: function (prevValues, currentValues) {
                    // console.log(rest)
                    return (prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE] !==
                        currentValues[_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE] ||
                        prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE] !==
                            currentValues[_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE]);
                } }, function (_a) {
                var getFieldValue = _a.getFieldValue;
                var startDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_START_DATE), endDate = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].PERIOD_END_DATE), datesAreEntered = !!(startDate && endDate);
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_15__["default"].NUMBER_OF_DAYS, rules: [
                        {
                            required: true,
                            message: 'Выберете количество дней',
                        },
                    ], required: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, { className: 'single-trip__days-amount', placeholder: 'Дни', disabled: !datesAreEntered, size: _constants__WEBPACK_IMPORTED_MODULE_18__["COMPONENT_SIZE"], onChange: handleNumberOfDaysChange }, getOptions(1, getMaxNumberOfDays()))));
            })),
        showAlert && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, { sm: 24 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_alert__WEBPACK_IMPORTED_MODULE_9___default.a, { message: 'Количество дней меньше периода страхования', type: 'warning', showIcon: true })))));
};
/* harmony default export */ __webpack_exports__["default"] = (SingleTrip);


/***/ }),

/***/ "./src/calcs/travel/main/components/sport-selection/index.tsx":
/*!********************************************************************!*\
  !*** ./src/calcs/travel/main/components/sport-selection/index.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _constants_labels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/labels */ "./src/calcs/travel/main/constants/labels.ts");
/* harmony import */ var _common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/helpers/create-request-state */ "./src/common/helpers/create-request-state.ts");
/* harmony import */ var _classes_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../classes/api */ "./src/calcs/travel/main/classes/api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};












var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a.Option, initState = Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_9__["createInitialState"])();
var SportSelection = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var onValueChange = _a.onValueChange;
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initState), 2), sports = _b[0], setSports = _b[1], handleComponentDidMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setSports(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_9__["createStartedState"])());
                    return [4 /*yield*/, _classes_api__WEBPACK_IMPORTED_MODULE_10__["default"].getSports()];
                case 1:
                    result = _a.sent();
                    if ('errors' in result)
                        return [2 /*return*/, Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_9__["createErrorState"])(result.errors)];
                    setSports(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_9__["createSuccessState"])(result));
                    return [2 /*return*/];
            }
        });
    }); }, []), handleSelect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        onValueChange(_constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].SPORTS);
    }, [onValueChange]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        handleComponentDidMount().then();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u043E\u0442\u0434\u044B\u0445"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].SPORTS, label: _constants_labels__WEBPACK_IMPORTED_MODULE_8__["default"].SPORTS },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a, { mode: 'multiple', placeholder: 'Выберите вид спорта', size: _constants__WEBPACK_IMPORTED_MODULE_7__["COMPONENT_SIZE"], loading: sports.requestStatus === 'started', onSelect: handleSelect, onDeselect: handleSelect, showSearch: true, optionFilterProp: 'children' }, sports.data !== null &&
                sports.data.map(function (sport) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, { value: sport.id, key: sport.id }, sport.name)); })))));
});
/* harmony default export */ __webpack_exports__["default"] = (SportSelection);


/***/ }),

/***/ "./src/calcs/travel/main/components/sums/index.tsx":
/*!*********************************************************!*\
  !*** ./src/calcs/travel/main/components/sums/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/radio/style */ "./node_modules/antd/lib/radio/style/index.js");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _common_helpers_divide_integer_by_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/helpers/divide-integer-by-space */ "./src/common/helpers/divide-integer-by-space.ts");










var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, Group = antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a.Group;
var Sums = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var onValueChange = _a.onValueChange;
    var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        onValueChange(_constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].INSURANCE_SUM);
    }, [onValueChange]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0443\u044E \u0441\u0443\u043C\u043C\u0443"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { shouldUpdate: function (prevValues, currentValues) {
                return prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].COUNTRIES] !== currentValues[_constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].COUNTRIES];
            } }, function (_a) {
            var getFieldValue = _a.getFieldValue;
            var selectedCountries = getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].COUNTRIES), arrayOfSums = selectedCountries.includes(_constants__WEBPACK_IMPORTED_MODULE_6__["RF_ONLY_ID"])
                ? _constants__WEBPACK_IMPORTED_MODULE_6__["INSURANCE_SUMS_RUS"]
                : _constants__WEBPACK_IMPORTED_MODULE_6__["INSURANCE_SUMS"];
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_5__["default"].INSURANCE_SUM },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { onChange: handleChange }, arrayOfSums.map(function (sum) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, { value: sum, key: sum }, Object(_common_helpers_divide_integer_by_space__WEBPACK_IMPORTED_MODULE_7__["default"])(sum))); }))));
        })));
});
/* harmony default export */ __webpack_exports__["default"] = (Sums);


/***/ }),

/***/ "./src/calcs/travel/main/components/trip-dates/index.less":
/*!****************************************************************!*\
  !*** ./src/calcs/travel/main/components/trip-dates/index.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/calcs/travel/main/components/trip-dates/index.tsx":
/*!***************************************************************!*\
  !*** ./src/calcs/travel/main/components/trip-dates/index.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _single_trip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../single-trip */ "./src/calcs/travel/main/components/single-trip/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/calcs/travel/main/components/trip-dates/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _multiple_trip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../multiple-trip */ "./src/calcs/travel/main/components/multiple-trip/index.tsx");








var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item;
var TripDates = function (_a) {
    var _b = _a.minStartDate, minStartDate = _b === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_5__["MIN_START_DATE"] : _b;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_2__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { className: 'trip-dates__item-wrapper', wrapperCol: { sm: 24 }, shouldUpdate: function (prevValues, currentValues) {
                return prevValues[_constants_ids__WEBPACK_IMPORTED_MODULE_3__["default"].MULTI] !== currentValues[_constants_ids__WEBPACK_IMPORTED_MODULE_3__["default"].MULTI];
            } }, function (form) {
            var isMulti = form.getFieldValue(_constants_ids__WEBPACK_IMPORTED_MODULE_3__["default"].MULTI);
            return isMulti ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_multiple_trip__WEBPACK_IMPORTED_MODULE_7__["default"], { form: form, minStartDate: minStartDate })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_single_trip__WEBPACK_IMPORTED_MODULE_4__["default"], { form: form, minStartDate: minStartDate }));
        })));
};
/* harmony default export */ __webpack_exports__["default"] = (TripDates);


/***/ }),

/***/ "./src/calcs/travel/main/components/trip-params/index.tsx":
/*!****************************************************************!*\
  !*** ./src/calcs/travel/main/components/trip-params/index.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _country_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../country-selection */ "./src/calcs/travel/main/components/country-selection/index.tsx");
/* harmony import */ var _trip_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trip-type */ "./src/calcs/travel/main/components/trip-type/index.tsx");
/* harmony import */ var _trip_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trip-dates */ "./src/calcs/travel/main/components/trip-dates/index.tsx");
/* harmony import */ var _insured_birthdays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../insured-birthdays */ "./src/calcs/travel/main/components/insured-birthdays/index.tsx");






var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item;
var TripParams = function (_a) {
    var form = _a.form;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_country_selection__WEBPACK_IMPORTED_MODULE_2__["default"], { form: form }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_trip_type__WEBPACK_IMPORTED_MODULE_3__["default"], { form: form }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_trip_dates__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_insured_birthdays__WEBPACK_IMPORTED_MODULE_5__["default"], { form: form })));
};
/* harmony default export */ __webpack_exports__["default"] = (TripParams);


/***/ }),

/***/ "./src/calcs/travel/main/components/trip-type/index.tsx":
/*!**************************************************************!*\
  !*** ./src/calcs/travel/main/components/trip-type/index.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/components/calc-card */ "./src/calcs/common/components/calc-card/index.tsx");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/calcs/travel/main/constants/index.ts");







var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, Group = antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a.Group;
var TripType = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var form = _a.form;
    var handleMultiChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        var _a;
        form.setFieldsValue((_a = {}, _a[_constants_ids__WEBPACK_IMPORTED_MODULE_4__["default"].PERIOD_MULTI] = null, _a));
    }, []), handlePeriodMultiChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        var _a;
        form.setFieldsValue((_a = {}, _a[_constants_ids__WEBPACK_IMPORTED_MODULE_4__["default"].MULTI] = true, _a));
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_components_calc_card__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "\u0422\u0438\u043F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0438"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_4__["default"].MULTI },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { onChange: handleMultiChange },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, { value: false }, "\u041E\u0434\u043D\u0430 \u043F\u043E\u0435\u0437\u0434\u043A\u0430"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                "\u041C\u043D\u043E\u0433\u043E\u043A\u0440\u0430\u0442\u043D\u044B\u0435 \u043F\u043E\u0435\u0437\u0434\u043A\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0433\u043E\u0434\u0430.",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0434\u043D\u0435\u0439:")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: _constants_ids__WEBPACK_IMPORTED_MODULE_4__["default"].PERIOD_MULTI },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Group, { onChange: handlePeriodMultiChange }, _constants__WEBPACK_IMPORTED_MODULE_5__["POSSIBLE_PERIODS_MULTI"].map(function (days) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, { value: days, key: days },
                days,
                " \u0438\u0437 365 \u0434\u043D.")); })))));
});
/* harmony default export */ __webpack_exports__["default"] = (TripType);


/***/ }),

/***/ "./src/calcs/travel/main/constants/countries.ts":
/*!******************************************************!*\
  !*** ./src/calcs/travel/main/constants/countries.ts ***!
  \******************************************************/
/*! exports provided: COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
var COUNTRIES = [
    { id: 1, text: 'Австралия' },
    { id: 2, text: 'Австрия' },
    { id: 3, text: 'Азербайджан' },
    { id: 4, text: 'Азорские острова' },
    { id: 5, text: 'Аландские острова' },
    {
        id: 6,
        text: 'Албания',
    },
    { id: 7, text: 'Алжир' },
    { id: 8, text: 'Американские Виргинские острова' },
    {
        id: 9,
        text: 'Американское Самоа',
    },
    { id: 10, text: 'Ангилья' },
    { id: 11, text: 'Ангола' },
    { id: 12, text: 'Андорра' },
    {
        id: 13,
        text: 'Антигуа и Барбуда',
    },
    { id: 14, text: 'Аргентина' },
    { id: 15, text: 'Армения' },
    { id: 16, text: 'Аруба' },
    {
        id: 17,
        text: 'Афганистан',
    },
    { id: 18, text: 'Багамы' },
    { id: 19, text: 'Бангладеш' },
    { id: 20, text: 'Барбадос' },
    {
        id: 21,
        text: 'Бахрейн',
    },
    { id: 22, text: 'Белиз' },
    { id: 23, text: 'Белоруссия' },
    { id: 24, text: 'Бельгия' },
    {
        id: 25,
        text: 'Бенин',
    },
    { id: 26, text: 'Бермуды' },
    { id: 27, text: 'Болгария' },
    { id: 28, text: 'Боливия' },
    {
        id: 29,
        text: 'Босния и Герцеговина (БиГ)',
    },
    { id: 30, text: 'Ботсвана' },
    { id: 31, text: 'Бразилия' },
    {
        id: 32,
        text: 'Британская территория в Индийском океане',
    },
    { id: 33, text: 'Британские Виргинские острова' },
    { id: 34, text: 'Бруней' },
    {
        id: 35,
        text: 'Буркина Фасо (бывшая Верхняя Вольта)',
    },
    { id: 36, text: 'Бурунди' },
    { id: 37, text: 'Бутан' },
    { id: 38, text: 'Вануату' },
    {
        id: 39,
        text: 'Ватикан',
    },
    { id: 40, text: 'Великобритания' },
    { id: 41, text: 'Венгрия' },
    { id: 42, text: 'Венесуэла' },
    {
        id: 43,
        text: 'Восточный Тимор',
    },
    { id: 44, text: 'Вьетнам' },
    { id: 45, text: 'Габон' },
    { id: 46, text: 'Гавайи' },
    {
        id: 47,
        text: 'Гайана',
    },
    { id: 48, text: 'Гаити' },
    { id: 49, text: 'Гамбия' },
    { id: 50, text: 'Гана' },
    {
        id: 51,
        text: 'Гваделупа',
    },
    { id: 52, text: 'Гватемала' },
    { id: 53, text: 'Гвиана - Французская Гвиана' },
    {
        id: 54,
        text: 'Гвинея',
    },
    { id: 55, text: 'Гвинея-Бисау' },
    { id: 56, text: 'Германия' },
    { id: 57, text: 'Гернси' },
    {
        id: 58,
        text: 'Гибралтар',
    },
    { id: 59, text: 'Гондурас' },
    { id: 60, text: 'Гонконг (Сянган)' },
    { id: 61, text: 'Гренада' },
    {
        id: 62,
        text: 'Гренландия',
    },
    { id: 63, text: 'Греция' },
    { id: 64, text: 'Грузия' },
    { id: 65, text: 'Гуам' },
    {
        id: 66,
        text: 'Дания',
    },
    { id: 67, text: 'Джерси' },
    { id: 68, text: 'Джибути' },
    { id: 69, text: 'Доминика' },
    {
        id: 70,
        text: 'Доминиканская Республика',
    },
    { id: 71, text: 'ДР Конго' },
    { id: 72, text: 'Египет' },
    { id: 73, text: 'Замбия' },
    {
        id: 74,
        text: 'Зимбабве',
    },
    { id: 75, text: 'Йемен' },
    { id: 76, text: 'Израиль' },
    { id: 77, text: 'Индия' },
    {
        id: 78,
        text: 'Индонезия',
    },
    { id: 79, text: 'Иордания' },
    { id: 80, text: 'Ирак' },
    { id: 81, text: 'Иран' },
    {
        id: 82,
        text: 'Ирландия',
    },
    { id: 83, text: 'Исландия' },
    { id: 84, text: 'Испания' },
    { id: 85, text: 'Италия' },
    {
        id: 86,
        text: 'Кабо-Верде',
    },
    { id: 87, text: 'Казахстан' },
    { id: 88, text: 'Каймановы острова' },
    { id: 89, text: 'Камбоджа' },
    {
        id: 90,
        text: 'Камерун',
    },
    { id: 91, text: 'Канада' },
    { id: 92, text: 'Катар' },
    { id: 93, text: 'Кения' },
    {
        id: 94,
        text: 'Кипр',
    },
    { id: 95, text: 'Киргизия' },
    { id: 96, text: 'Кирибати' },
    { id: 97, text: 'Китай' },
    {
        id: 98,
        text: 'Китай (Тайвань)',
    },
    { id: 99, text: 'КНДР' },
    { id: 100, text: 'Кокосовые острова' },
    { id: 101, text: 'Колумбия' },
    {
        id: 102,
        text: 'Коморы',
    },
    { id: 103, text: 'Коста-Рика' },
    { id: 104, text: 'Кот-д’Ивуар' },
    { id: 105, text: 'Куба' },
    {
        id: 106,
        text: 'Кувейт',
    },
    { id: 107, text: 'Лаос' },
    { id: 108, text: 'Латвия' },
    { id: 109, text: 'Лесото' },
    {
        id: 110,
        text: 'Либерия',
    },
    { id: 111, text: 'Ливан' },
    { id: 112, text: 'Ливия' },
    { id: 113, text: 'Литва' },
    {
        id: 114,
        text: 'Лихтенштейн',
    },
    { id: 115, text: 'Люксембург' },
    { id: 116, text: 'Маврикий' },
    { id: 117, text: 'Мавритания' },
    {
        id: 118,
        text: 'Мадагаскар',
    },
    { id: 119, text: 'Мадейра' },
    { id: 120, text: 'Майотта' },
    { id: 121, text: 'Макао' },
    {
        id: 122,
        text: 'Малави',
    },
    { id: 123, text: 'Малайзия' },
    { id: 124, text: 'Мали' },
    { id: 125, text: 'Мальдивы' },
    {
        id: 126,
        text: 'Мальта',
    },
    { id: 127, text: 'Марокко' },
    { id: 128, text: 'Мартиника' },
    {
        id: 129,
        text: 'Маршалловы Острова',
    },
    { id: 130, text: 'Мексика' },
    { id: 131, text: 'Мозамбик' },
    { id: 132, text: 'Молдавия' },
    {
        id: 133,
        text: 'Монако',
    },
    { id: 134, text: 'Монголия' },
    { id: 135, text: 'Монтсеррат' },
    { id: 136, text: 'Мьянма' },
    {
        id: 137,
        text: 'Нагорно-Карабахская Республика',
    },
    { id: 138, text: 'Намибия' },
    { id: 139, text: 'Науру' },
    { id: 140, text: 'Непал' },
    {
        id: 141,
        text: 'Нигер',
    },
    { id: 142, text: 'Нигерия' },
    { id: 143, text: 'Нидерландские Антильские острова' },
    {
        id: 144,
        text: 'Нидерланды',
    },
    { id: 145, text: 'Никарагуа' },
    { id: 146, text: 'Ниуэ' },
    { id: 147, text: 'Новая Зеландия' },
    {
        id: 148,
        text: 'Новая Каледония',
    },
    { id: 149, text: 'Норвегия' },
    { id: 150, text: 'ОАЭ (Объединённые Арабские Эмираты)' },
    {
        id: 151,
        text: 'Оман',
    },
    { id: 152, text: 'Остров Мэн' },
    { id: 153, text: 'Остров Норфолк' },
    {
        id: 154,
        text: 'Остров Рождества',
    },
    { id: 155, text: 'Остров Святой Елены' },
    { id: 156, text: 'Острова Кука' },
    {
        id: 157,
        text: 'Острова Питкэрн',
    },
    { id: 158, text: 'Пакистан' },
    { id: 159, text: 'Палау' },
    { id: 160, text: 'Палестина' },
    {
        id: 161,
        text: 'Панама',
    },
    { id: 162, text: 'Папуа — Новая Гвинея' },
    { id: 163, text: 'Парагвай' },
    {
        id: 164,
        text: 'Перу — Республика Перу',
    },
    { id: 165, text: 'Польша' },
    { id: 166, text: 'Португалия' },
    {
        id: 167,
        text: 'Приднестровская Молдавская Республика',
    },
    { id: 168, text: 'Пуэрто-Рико' },
    { id: 169, text: 'Абхазия' },
    {
        id: 170,
        text: 'Республика Конго',
    },
    { id: 171, text: 'Корея' },
    { id: 172, text: 'Косово' },
    { id: 173, text: 'Македония' },
    {
        id: 174,
        text: 'Реюньон',
    },
    // {id: 175, text: 'Россия'},
    { id: 176, text: 'Руанда' },
    { id: 177, text: 'Румыния' },
    {
        id: 178,
        text: 'Сальвадор',
    },
    { id: 179, text: 'Самоа' },
    { id: 180, text: 'Сан-Марино' },
    {
        id: 181,
        text: 'Сан-Томе и Принсипи',
    },
    { id: 182, text: 'Саудовская Аравия' },
    {
        id: 183,
        text: 'Сахарская Арабская Демократическая Республика',
    },
    { id: 184, text: 'Свазиленд' },
    { id: 185, text: 'Северные Марианские острова' },
    {
        id: 186,
        text: 'Сейшельские Острова',
    },
    { id: 187, text: 'Сенегал' },
    { id: 188, text: 'Сен-Пьер и Микелон' },
    {
        id: 189,
        text: 'Сент-Винсент и Гренадины',
    },
    { id: 190, text: 'Сент-Китс и Невис' },
    { id: 191, text: 'Сент-Люсия' },
    {
        id: 192,
        text: 'Сербия',
    },
    { id: 193, text: 'Силенд' },
    { id: 194, text: 'Сингапур' },
    { id: 195, text: 'Сирия' },
    {
        id: 196,
        text: 'Словакия',
    },
    { id: 197, text: 'Словения' },
    { id: 198, text: 'Соломоновы Острова' },
    {
        id: 199,
        text: 'Сомали',
    },
    { id: 200, text: 'Сомалиленд' },
    { id: 201, text: 'Судан' },
    { id: 202, text: 'Суринам' },
    {
        id: 203,
        text: 'США',
    },
    { id: 204, text: 'Соединенные Штаты Америки' },
    { id: 205, text: 'Сьерра-Леоне' },
    {
        id: 206,
        text: 'Таджикистан',
    },
    { id: 207, text: 'Таиланд' },
    { id: 208, text: 'Танзания' },
    { id: 209, text: 'Тёркс и Кайкос' },
    {
        id: 210,
        text: 'Того',
    },
    { id: 211, text: 'Токелау' },
    { id: 212, text: 'Тонга' },
    { id: 213, text: 'Тринидад и Тобаго' },
    {
        id: 214,
        text: 'Тувалу',
    },
    { id: 215, text: 'Тунис' },
    { id: 216, text: 'Турецкая Республика Северного Кипра' },
    {
        id: 217,
        text: 'Туркмения',
    },
    { id: 218, text: 'Турция' },
    { id: 219, text: 'Уганда' },
    { id: 220, text: 'Узбекистан' },
    {
        id: 221,
        text: 'Украина',
    },
    { id: 222, text: 'Уоллис и Футуна' },
    { id: 223, text: 'Уругвай' },
    {
        id: 224,
        text: 'Фарерские острова',
    },
    { id: 225, text: 'Федеративные Штаты Микронезии' },
    { id: 226, text: 'Фиджи' },
    {
        id: 227,
        text: 'Филиппины',
    },
    { id: 228, text: 'Финляндия' },
    { id: 229, text: 'Фолклендские острова' },
    {
        id: 230,
        text: 'Франция',
    },
    { id: 231, text: 'Французская Полинезия' },
    {
        id: 232,
        text: 'Французские Южные и Антарктические Территории',
    },
    { id: 233, text: 'Хорватия' },
    { id: 234, text: 'ЦАР' },
    { id: 235, text: 'Чад' },
    {
        id: 236,
        text: 'Черногория',
    },
    { id: 237, text: 'Чехия' },
    { id: 238, text: 'Чили' },
    { id: 239, text: 'Швейцария' },
    {
        id: 240,
        text: 'Швеция',
    },
    { id: 241, text: 'Шпицберген' },
    { id: 242, text: 'Шри-Ланка' },
    { id: 243, text: 'Эквадор' },
    {
        id: 244,
        text: 'Экваториальная Гвинея',
    },
    { id: 245, text: 'Эстония' },
    { id: 246, text: 'Эфиопия' },
    { id: 247, text: 'ЮАР' },
    {
        id: 248,
        text: 'Южная Георгия и Южные Сандвичевы острова',
    },
    { id: 249, text: 'Южная Осетия' },
    { id: 250, text: 'Япония' },
    { id: 251, text: 'Эритрея' },
    {
        id: 252,
        text: 'Ямайка',
    },
    { id: 175, text: 'Только РФ' },
    { id: 254, text: 'Страны шенгенского союза' },
    {
        id: 255,
        text: 'Весь мир, исключая США и Канаду',
    },
];


/***/ }),

/***/ "./src/calcs/travel/main/constants/euro-only.ts":
/*!******************************************************!*\
  !*** ./src/calcs/travel/main/constants/euro-only.ts ***!
  \******************************************************/
/*! exports provided: EURO_ONLY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EURO_ONLY", function() { return EURO_ONLY; });
var EURO_ONLY = [
    2,
    24,
    27,
    40,
    41,
    56,
    63,
    66,
    82,
    84,
    85,
    94,
    108,
    113,
    114,
    115,
    126,
    144,
    149,
    165,
    166,
    173,
    177,
    180,
    192,
    196,
    197,
    228,
    230,
    233,
    236,
    237,
    239,
    240,
    241,
    245,
    254,
];


/***/ }),

/***/ "./src/calcs/travel/main/constants/global-options.ts":
/*!***********************************************************!*\
  !*** ./src/calcs/travel/main/constants/global-options.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var defaultGlobalOptions = {
    rootNodeId: '',
    code: '',
    dinamyc: {
        test: false,
    },
};
/* harmony default export */ __webpack_exports__["default"] = (defaultGlobalOptions);


/***/ }),

/***/ "./src/calcs/travel/main/constants/ids.ts":
/*!************************************************!*\
  !*** ./src/calcs/travel/main/constants/ids.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var IDS = {
    COUNTRIES: 'countries',
    MULTI: 'multi',
    PERIOD_MULTI: 'periodMulti',
    PERIOD_START_DATE: 'periodStartDate',
    PERIOD_END_DATE: 'periodEndDate',
    NUMBER_OF_DAYS: 'numberOfDays',
    CURRENCY: 'currency',
    INSURANCE_SUM: 'insuranceSum',
    SPORTS: 'sports',
    SECOND_PROGRAMS: 'secondPrograms',
    PROMOCODE: 'promocode',
    PROMOCODE_OR_BONUSES: 'promocodeOrBonuses',
    BONUSES: 'bonuses',
    INSUREDS: 'insureds',
    BIRTHDAY: 'birthday',
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    MIDDLE_NAME: 'middleName',
    ADDRESS: 'address',
    INSURANT: 'insurant',
    INSURANT_EMAIL: ['insurant', 'email'],
    INSURANT_PHONE: ['insurant', 'phone'],
    INSURANT_ADDRESS: ['insurant', 'address'],
    INSURANT_PASSPORT_SERIAL: ['insurant', 'passportSerial'],
    INSURANT_PASSPORT_NUMBER: ['insurant', 'passportNumber'],
    INSURANT_PASSPORT_DATE_OF_ISSUE: ['insurant', 'passportDateOfIssue'],
    INSURANT_FIRST_NAME: ['insurant', 'firstName'],
    INSURANT_LAST_NAME: ['insurant', 'lastName'],
    INSURANT_MIDDLE_NAME: ['insurant', 'middleName'],
    INSURANT_BIRTHDAY: ['insurant', 'birthday'],
    PASSPORT_SERIAL: 'passportSerial',
    PASSPORT_NUMBER: 'passportNumber',
    OPTIONS: 'options',
    ASSISTANCE: 'assistance',
    COVID: 'covid',
    AGREEMENT_WITH_RULES: 'agreementWithRules',
    AGREEMENT_WITH_PROTECTION_POLICY: 'agreementWithProtectionPolicy',
    INSURED_IS_INSURANT_ID: 'insuredIsInsurantId',
};
/* harmony default export */ __webpack_exports__["default"] = (IDS);


/***/ }),

/***/ "./src/calcs/travel/main/constants/index.ts":
/*!**************************************************!*\
  !*** ./src/calcs/travel/main/constants/index.ts ***!
  \**************************************************/
/*! exports provided: COMPONENT_SIZE, POSSIBLE_PERIODS_MULTI, MIN_START_DATE, MAX_NUMBER_OF_INSURED, INSURANCE_SUMS, INSURANCE_SUMS_RUS, BONUS_COVERAGE_PERCENT, RF_ONLY_ID, URL_RULES, URL_PROGRAM, URL_USER_AGREEMENT, HEADER_STEPS, POST, HEADERS, DOMEN, URL_GET_COST, URL_CREATE_POLICY, URL_GET_PAY_URL, URL_GET_ASSISTANCES, URL_GET_SPORTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_SIZE", function() { return COMPONENT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSSIBLE_PERIODS_MULTI", function() { return POSSIBLE_PERIODS_MULTI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_START_DATE", function() { return MIN_START_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_NUMBER_OF_INSURED", function() { return MAX_NUMBER_OF_INSURED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSURANCE_SUMS", function() { return INSURANCE_SUMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSURANCE_SUMS_RUS", function() { return INSURANCE_SUMS_RUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BONUS_COVERAGE_PERCENT", function() { return BONUS_COVERAGE_PERCENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RF_ONLY_ID", function() { return RF_ONLY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_RULES", function() { return URL_RULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_PROGRAM", function() { return URL_PROGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_USER_AGREEMENT", function() { return URL_USER_AGREEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_STEPS", function() { return HEADER_STEPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST", function() { return POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS", function() { return HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMEN", function() { return DOMEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_GET_COST", function() { return URL_GET_COST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CREATE_POLICY", function() { return URL_CREATE_POLICY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_GET_PAY_URL", function() { return URL_GET_PAY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_GET_ASSISTANCES", function() { return URL_GET_ASSISTANCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_GET_SPORTS", function() { return URL_GET_SPORTS; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var COMPONENT_SIZE = 'large';
var POSSIBLE_PERIODS_MULTI = [30, 60, 90, 180, 365];
var MIN_START_DATE = moment__WEBPACK_IMPORTED_MODULE_0__({ h: 0, m: 0, s: 0, ms: 0 }).add(2, 'days');
var MAX_NUMBER_OF_INSURED = 5;
var INSURANCE_SUMS = [35000, 50000];
var INSURANCE_SUMS_RUS = [350000, 700000];
var BONUS_COVERAGE_PERCENT = 20;
var RF_ONLY_ID = 175;
var URL_RULES = 'https://www.euro-ins.ru/wp-content/uploads/pravila/3-1-Pravila_strah_VZR.pdf';
var URL_PROGRAM = 'https://euro-ins.ru/calc/files/program_main.pdf';
var URL_USER_AGREEMENT = 'https://euro-ins.ru/calc/files/user_agreement.pdf';
var HEADER_STEPS = [
    {
        name: 'Параметры поездки',
    },
    {
        name: 'Наполнение',
    },
    {
        name: 'Данные и оплата',
    },
    {
        name: 'Проверка телефона',
    },
];
var POST = 'POST';
var HEADERS = new Headers([['Content-Type', 'application/json']]);
var DOMEN =  true
    ? 'https://api.euro-ins.ru'
    : undefined;
var URL_GET_COST = DOMEN + "/vzr/policy/price";
var URL_CREATE_POLICY = DOMEN + "/vzr/policy/create";
var URL_GET_PAY_URL = DOMEN + "/vzr/policy/get_pay_url";
var URL_GET_ASSISTANCES = "https://euro-ins.ru/api/vzr/assistances/get";
var URL_GET_SPORTS = "https://euro-ins.ru/api/vzr/sports/list";


/***/ }),

/***/ "./src/calcs/travel/main/constants/init-values.ts":
/*!********************************************************!*\
  !*** ./src/calcs/travel/main/constants/init-values.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ids */ "./src/calcs/travel/main/constants/ids.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/calcs/travel/main/constants/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
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
var _a, _b, _c, _d, _e, _f;
// import InitValuesInterface from '../types/init-values'



var INIT_VALUES = (_a = {},
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].COUNTRIES] = [],
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].MULTI] = false,
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_MULTI] = null,
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_START_DATE] = null,
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_END_DATE] = null,
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].NUMBER_OF_DAYS] = 5,
    // todo - надо внутри калька расчитывать исходя из даты начала и даты окончания
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].CURRENCY] = 'USD',
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANCE_SUM] = _index__WEBPACK_IMPORTED_MODULE_2__["INSURANCE_SUMS"][0],
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].SPORTS] = [],
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS] = [
        (_b = {},
            _b[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].BIRTHDAY] = null,
            _b[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].LAST_NAME] = '',
            _b[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].FIRST_NAME] = '',
            _b[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_SERIAL] = '',
            _b[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_NUMBER] = '',
            _b),
    ],
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].OPTIONS] = (_c = {},
        _c[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].ASSISTANCE] = 'express',
        _c[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].COVID] = false,
        _c),
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PROMOCODE_OR_BONUSES] = 'bonuses',
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].BONUSES] = 0,
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].AGREEMENT_WITH_RULES] = false,
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].AGREEMENT_WITH_PROTECTION_POLICY] = false,
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT] = (_d = {},
        _d[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].LAST_NAME] = '',
        _d[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].FIRST_NAME] = '',
        _d[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].MIDDLE_NAME] = '',
        _d[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].BIRTHDAY] = null,
        _d[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].ADDRESS] = '',
        _d[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_SERIAL] = '',
        _d[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_NUMBER] = '',
        _d),
    _a[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURED_IS_INSURANT_ID] = null,
    _a);
if (true) {
    INIT_VALUES = __assign(__assign({}, INIT_VALUES), (_e = {}, _e[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].COUNTRIES] = [175], _e[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_START_DATE] = moment__WEBPACK_IMPORTED_MODULE_1__().add(20, 'days'), _e[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PERIOD_END_DATE] = moment__WEBPACK_IMPORTED_MODULE_1__().add(24, 'days'), _e[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSUREDS] = [
        (_f = {},
            // [IDS.BIRTHDAY]: null,
            _f[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].BIRTHDAY] = moment__WEBPACK_IMPORTED_MODULE_1__('2000-01-01'),
            _f[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].LAST_NAME] = 'ZTESTOV 1',
            _f[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].FIRST_NAME] = 'ZTEST 1',
            _f[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_SERIAL] = '11',
            _f[_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_NUMBER] = '111111',
            _f),
    ], _e));
}
/* harmony default export */ __webpack_exports__["default"] = (INIT_VALUES);


/***/ }),

/***/ "./src/calcs/travel/main/constants/labels.ts":
/*!***************************************************!*\
  !*** ./src/calcs/travel/main/constants/labels.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LABELS = {
    PERIOD_START_DATE: 'С',
    PERIOD_END_DATE: 'По',
    SPORTS: 'Выберите вид спорта, если планируете активный отдых',
    PROMOCODE: 'Введите промокод',
    BIRTHDAY: 'Дата рождения',
    FIRST_NAME: 'Имя',
    LAST_NAME: 'Фамилия',
    MIDDLE_NAME: 'Отчество',
    PHONE: 'Телефон',
    EMAIL: 'Электронная почта',
    SERIAL: 'Серия',
    NUMBER: 'Номер',
    ADDRESS: 'Адрес',
};
/* harmony default export */ __webpack_exports__["default"] = (LABELS);


/***/ }),

/***/ "./src/calcs/travel/main/constants/promocodes.ts":
/*!*******************************************************!*\
  !*** ./src/calcs/travel/main/constants/promocodes.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PROMOCODES = [
    {
        promocode: 'isic',
        partnerCode: 'MTAwMTEwMDE1MDAwMDM1',
    },
];
/* harmony default export */ __webpack_exports__["default"] = (PROMOCODES);


/***/ }),

/***/ "./src/calcs/travel/main/constants/second-programs.ts":
/*!************************************************************!*\
  !*** ./src/calcs/travel/main/constants/second-programs.ts ***!
  \************************************************************/
/*! exports provided: default, SECOND_PROGRAMS_RUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECOND_PROGRAMS_RUS", function() { return SECOND_PROGRAMS_RUS; });
var SECOND_PROGRAMS = [
    {
        id: 'liability',
        name: 'Гражданская ответственность',
        sums: [12000, 25000],
    },
    {
        id: 'accident',
        name: 'Несчастный случай',
        sums: [3000, 5000, 10000],
    },
    {
        id: 'baggage',
        name: 'Утрата багажа',
        sums: [500, 1000, 1500],
    },
];
/* harmony default export */ __webpack_exports__["default"] = (SECOND_PROGRAMS);
var SECOND_PROGRAMS_RUS = [
    {
        id: 'liability',
        name: 'Гражданская ответственность',
        sums: [200000, 500000],
    },
    {
        id: 'accident',
        name: 'Несчастный случай',
        sums: [100000, 200000, 350000, 700000],
    },
    {
        id: 'baggage',
        name: 'Утрата багажа',
        sums: [35000, 70000],
    },
];


/***/ }),

/***/ "./src/calcs/travel/main/helpers/bonuses-system-used.ts":
/*!**************************************************************!*\
  !*** ./src/calcs/travel/main/helpers/bonuses-system-used.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bonusesSystemUsed = function (globalOptions) {
    return !!((window.location.hostname === 'lk.euro-ins.ru' ||
        window.location.hostname === 'euro-ins.lh') &&
        globalOptions.bonuses &&
        globalOptions.clientIsn);
};
/* harmony default export */ __webpack_exports__["default"] = (bonusesSystemUsed);


/***/ }),

/***/ "./src/calcs/travel/main/helpers/reset-insured-is-insurant.ts":
/*!********************************************************************!*\
  !*** ./src/calcs/travel/main/helpers/reset-insured-is-insurant.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ids */ "./src/calcs/travel/main/constants/ids.ts");

var resetInsuredIsInsurant = function (form) {
    var _a, _b;
    form.setFieldsValue((_a = {},
        _a[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURED_IS_INSURANT_ID] = null,
        _a[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].INSURANT] = (_b = {},
            _b[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].LAST_NAME] = '',
            _b[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].FIRST_NAME] = '',
            _b[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].MIDDLE_NAME] = '',
            _b[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].BIRTHDAY] = null,
            _b[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_SERIAL] = '',
            _b[_constants_ids__WEBPACK_IMPORTED_MODULE_0__["default"].PASSPORT_NUMBER] = '',
            _b),
        _a));
};
/* harmony default export */ __webpack_exports__["default"] = (resetInsuredIsInsurant);


/***/ }),

/***/ "./src/calcs/travel/main/hooks/use-controller.ts":
/*!*******************************************************!*\
  !*** ./src/calcs/travel/main/hooks/use-controller.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/form/Form */ "./node_modules/antd/lib/form/Form.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/validator */ "./src/calcs/travel/main/classes/validator.ts");
/* harmony import */ var _classes_extractor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/extractor */ "./src/calcs/travel/main/classes/extractor.ts");
/* harmony import */ var _classes_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/api */ "./src/calcs/travel/main/classes/api.ts");
/* harmony import */ var _common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/helpers/create-request-state */ "./src/common/helpers/create-request-state.ts");
/* harmony import */ var _common_hooks_use_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/hooks/use-steps */ "./src/calcs/common/hooks/use-steps.ts");
/* harmony import */ var _helpers_bonuses_system_used__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/bonuses-system-used */ "./src/calcs/travel/main/helpers/bonuses-system-used.ts");
/* harmony import */ var _common_helpers_console_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/helpers/console/log */ "./src/common/helpers/console/log.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};









var costInitState = Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createInitialState"])(), policyInitState = Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createInitialState"])(), paymentLinkInitState = Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createInitialState"])();
var useController = function (_a) {
    var globalOptions = _a.globalOptions;
    var _b = __read(Object(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_0__["useForm"])(), 1), form = _b[0], _c = Object(_common_hooks_use_steps__WEBPACK_IMPORTED_MODULE_6__["default"])(), currentStep = _c.currentStep, prevStep = _c.prevStep, nextStep = _c.nextStep, _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(costInitState), 2), cost = _d[0], setCost = _d[1], _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(policyInitState), 2), policy = _e[0], setPolicy = _e[1], _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(paymentLinkInitState), 2), paymentLink = _f[0], setPaymentLink = _f[1], bonusesSystemIsOn = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return Object(_helpers_bonuses_system_used__WEBPACK_IMPORTED_MODULE_7__["default"])(globalOptions); }, []), 
    /*
        Пересчет стоимости,
        поля должны быть валидны!
     */
    recalculate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Сразу устанавливаем флаг, о начале запроса стоимости
                    setCost(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createStartedState"])());
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    data = _classes_extractor__WEBPACK_IMPORTED_MODULE_3__["default"].extractDataForGetCost();
                    return [4 /*yield*/, _classes_api__WEBPACK_IMPORTED_MODULE_4__["default"].getCost(data)
                        // Проверяем результат запроса
                    ];
                case 2:
                    result = _a.sent();
                    // Проверяем результат запроса
                    if ('errors' in result)
                        throw new Error(result.errors.join());
                    setCost(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createSuccessState"])(result));
                    return [2 /*return*/, true];
                case 3:
                    e_1 = _a.sent();
                    setCost(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createErrorState"])([e_1.message]));
                    console.error(e_1);
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/];
            }
        });
    }); }, []), 
    /*
        Обработчик перехода с первого на второй шаг
        Параметры поездки -> Наполнение
     */
    fromFirstToSecondStep = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var validationStatus, isSuccess;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('fromFirstToSecondStep');
                    e.preventDefault();
                    return [4 /*yield*/, _classes_validator__WEBPACK_IMPORTED_MODULE_2__["default"].validateFirstStep()];
                case 1:
                    validationStatus = _a.sent();
                    if (validationStatus === 'error')
                        return [2 /*return*/];
                    // Сразу устанавливаем флаг, о начале запроса стоимости
                    setCost(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createStartedState"])());
                    return [4 /*yield*/, recalculate()];
                case 2:
                    isSuccess = _a.sent();
                    if (isSuccess)
                        nextStep();
                    return [2 /*return*/];
            }
        });
    }); }, []), 
    /*
        Обработчик перехода со второго на третий шаг
        Наполнение -> Данные и оплата
     */
    fromSecondToThirdStep = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var validationStatus, isSuccess;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('fromSecondToThirdStep');
                    e.preventDefault();
                    return [4 /*yield*/, _classes_validator__WEBPACK_IMPORTED_MODULE_2__["default"].validateSecondStep()];
                case 1:
                    validationStatus = _a.sent();
                    if (validationStatus === 'error')
                        return [2 /*return*/];
                    return [4 /*yield*/, recalculate()];
                case 2:
                    isSuccess = _a.sent();
                    if (isSuccess)
                        nextStep();
                    return [2 /*return*/];
            }
        });
    }); }, []), 
    /*
        Обработчик перехода с третьего на четвертый шаг
        Данные и оплата -> Проверка телефона
     */
    fromThirdToFourthStep = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var validationStatus;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('fromThirdToFourthStep');
                    e.preventDefault();
                    return [4 /*yield*/, _classes_validator__WEBPACK_IMPORTED_MODULE_2__["default"].validateThirdStep()];
                case 1:
                    validationStatus = _a.sent();
                    if (validationStatus === 'error')
                        return [2 /*return*/];
                    nextStep();
                    return [2 /*return*/];
            }
        });
    }); }, []), 
    /*
        Обработчик перехода с четвертого на пятый шаг
        Проверка телефона -> Оплата
     */
    fromFourthToFifthStep = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var validationStatus, dataForCreate, creationResult, dataForGetPaymentLink, gettingResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Object(_common_helpers_console_log__WEBPACK_IMPORTED_MODULE_8__["log"])('fromFourthToFifthStep');
                    return [4 /*yield*/, _classes_validator__WEBPACK_IMPORTED_MODULE_2__["default"].validateFourthStep()];
                case 1:
                    validationStatus = _a.sent();
                    if (validationStatus === 'error')
                        return [2 /*return*/];
                    setPolicy(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createStartedState"])());
                    dataForCreate = _classes_extractor__WEBPACK_IMPORTED_MODULE_3__["default"].extractDataForCreate();
                    Object(_common_helpers_console_log__WEBPACK_IMPORTED_MODULE_8__["log"])('Извлечены данные для создания полиса ', dataForCreate);
                    return [4 /*yield*/, _classes_api__WEBPACK_IMPORTED_MODULE_4__["default"].createPolicy(dataForCreate)];
                case 2:
                    creationResult = _a.sent();
                    if ('errors' in creationResult)
                        return [2 /*return*/, setPolicy(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createErrorState"])(creationResult.errors))];
                    setPolicy(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createSuccessState"])(creationResult));
                    setPaymentLink(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createStartedState"])());
                    dataForGetPaymentLink = {
                        id: creationResult.id,
                        code: dataForCreate.code,
                    };
                    return [4 /*yield*/, _classes_api__WEBPACK_IMPORTED_MODULE_4__["default"].getPaymentLink(dataForGetPaymentLink)];
                case 3:
                    gettingResult = _a.sent();
                    if ('errors' in gettingResult)
                        return [2 /*return*/, setPaymentLink(Object(_common_helpers_create_request_state__WEBPACK_IMPORTED_MODULE_5__["createErrorState"])(gettingResult.errors))];
                    if (true) {
                        if (confirm('Перейти на оплату?'))
                            window.location.href = gettingResult.data.url;
                    }
                    else {}
                    return [2 /*return*/];
            }
        });
    }); }, []), handleNextClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
        if (currentStep === 0)
            return fromFirstToSecondStep(e);
        if (currentStep === 1)
            return fromSecondToThirdStep(e);
        if (currentStep === 2)
            return fromThirdToFourthStep(e);
        if (currentStep === 3)
            return fromFourthToFifthStep(e);
    }, [currentStep]);
    _classes_validator__WEBPACK_IMPORTED_MODULE_2__["default"].setForm(form);
    _classes_extractor__WEBPACK_IMPORTED_MODULE_3__["default"].setForm(form);
    _classes_extractor__WEBPACK_IMPORTED_MODULE_3__["default"].setGlobalOptions(globalOptions);
    _classes_extractor__WEBPACK_IMPORTED_MODULE_3__["default"].setBonusesSystemIsOn(bonusesSystemIsOn);
    return {
        form: form,
        currentStep: currentStep,
        cost: cost,
        policy: policy,
        paymentLink: paymentLink,
        prevStep: prevStep,
        recalculate: recalculate,
        bonusesSystemIsOn: bonusesSystemIsOn,
        handleNextClick: handleNextClick,
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useController);


/***/ }),

/***/ "./src/calcs/travel/main/index.tsx":
/*!*****************************************!*\
  !*** ./src/calcs/travel/main/index.tsx ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/config-provider */ "./node_modules/antd/lib/config-provider/index.js");
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_es_locale_ru_RU__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/locale/ru_RU */ "./node_modules/antd/es/locale/ru_RU.js");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app */ "./src/calcs/travel/main/components/app/index.tsx");
/* harmony import */ var _common_helpers_merge_deep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/merge-deep */ "./src/common/helpers/merge-deep.ts");
/* harmony import */ var _constants_global_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/global-options */ "./src/calcs/travel/main/constants/global-options.ts");
var __assign = (undefined && undefined.__assign) || function () {
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







window.TravelCalculator = /** @class */ (function () {
    function TravelCalculator(nodeId, initOptions) {
        var globalOptions = Object(_common_helpers_merge_deep__WEBPACK_IMPORTED_MODULE_5__["default"])({}, initOptions, _constants_global_options__WEBPACK_IMPORTED_MODULE_6__["default"]);
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_2___default.a, { locale: antd_es_locale_ru_RU__WEBPACK_IMPORTED_MODULE_3__["default"] },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_app__WEBPACK_IMPORTED_MODULE_4__["default"], { globalOptions: __assign(__assign({}, globalOptions), { rootNodeId: nodeId }) })), document.getElementById(nodeId));
    }
    return TravelCalculator;
}());


/***/ }),

/***/ "./src/common/components/custom-form-components/date/index.less":
/*!**********************************************************************!*\
  !*** ./src/common/components/custom-form-components/date/index.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/components/custom-form-components/date/index.tsx":
/*!*********************************************************************!*\
  !*** ./src/common/components/custom-form-components/date/index.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/common/components/custom-form-components/date/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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






// Если меняется маска то меняем и формат!
var dateFormat = 'DD.MM.YYYY', mask = '99.99.9999';
var Date = /** @class */ (function (_super) {
    __extends(Date, _super);
    function Date(props) {
        var _this = _super.call(this, props) || this;
        _this.changeValue = function (e) {
            if (e.type === 'change') {
                var onChange = _this.props.onChange;
                if (moment__WEBPACK_IMPORTED_MODULE_5__(e.target.value, dateFormat, true).isValid())
                    onChange(moment__WEBPACK_IMPORTED_MODULE_5__(e.target.value, dateFormat));
                else
                    onChange(null);
                _this.setState({ value: e.target.value });
            }
        };
        _this.state = {
            value: props.value ? props.value.format(dateFormat) : '__.__.____',
        };
        return _this;
    }
    Date.getDerivedStateFromProps = function (_a, state) {
        var value = _a.value;
        if (value && state.value !== value.format(dateFormat)) {
            return {
                value: value.format(dateFormat),
            };
        }
        else if (state.value.indexOf('_') === -1 &&
            (value === null || value === undefined)) {
            return {
                value: '',
            };
        }
        else {
            return null;
        }
    };
    Date.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, onBlur = _a.onBlur, value = this.state.value;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_input_mask__WEBPACK_IMPORTED_MODULE_3__, { mask: mask, value: value, onChange: this.changeValue, disabled: disabled, onBlur: onBlur }, function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, __assign({}, props, { size: _this.props.size, className: 'e-date-mask', disabled: disabled }))); }));
    };
    Date.defaultProps = {
        size: 'large',
        disabled: false,
    };
    return Date;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Date);


/***/ }),

/***/ "./src/common/components/custom-form-components/phone/index.tsx":
/*!**********************************************************************!*\
  !*** ./src/common/components/custom-form-components/phone/index.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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





var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone(props) {
        var _this = _super.call(this, props) || this;
        _this.changeValue = function (e) {
            if (e.type === 'change') {
                _this.setState({ value: e.target.value }, _this.props.onChange(e.target.value));
            }
        };
        _this.state = {
            value: props.value || '+7 (___) ___-__-__',
        };
        return _this;
    }
    Phone.getDerivedStateFromProps = function (nextProps) {
        if ('value' in nextProps) {
            return __assign({}, (nextProps.value || {}));
        }
        return null;
    };
    Phone.prototype.render = function () {
        var _this = this;
        var disabled = this.props.disabled, value = this.state.value;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_input_mask__WEBPACK_IMPORTED_MODULE_3__, { mask: '+7 (999) 999-99-99', value: value, onChange: this.changeValue, disabled: disabled }, function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, __assign({}, props, { type: 'tel', size: _this.props.size, disabled: disabled }))); }));
    };
    Phone.defaultProps = {
        size: 'large',
        disabled: false,
    };
    return Phone;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Phone);


/***/ }),

/***/ "./src/common/components/form-items/phone-item/index.tsx":
/*!***************************************************************!*\
  !*** ./src/common/components/form-items/phone-item/index.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_form_components_phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../custom-form-components/phone */ "./src/common/components/custom-form-components/phone/index.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, validator = function (r, v) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!v || ~v.indexOf('_'))
            return [2 /*return*/, Promise.reject('Введите телефон')];
        return [2 /*return*/, Promise.resolve()];
    });
}); };
var PhoneItem = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'phone' : _b, size = _a.size, disabled = _a.disabled;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: name, label: 'Телефон', rules: [{ validator: validator }], required: true },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_custom_form_components_phone__WEBPACK_IMPORTED_MODULE_3__["default"], { size: size, disabled: disabled })));
};
/* harmony default export */ __webpack_exports__["default"] = (PhoneItem);


/***/ }),

/***/ "./src/common/components/passport-data/index.less":
/*!********************************************************!*\
  !*** ./src/common/components/passport-data/index.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/components/passport-data/index.tsx":
/*!*******************************************************!*\
  !*** ./src/common/components/passport-data/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/grid */ "./node_modules/antd/lib/grid/index.js");
/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/grid/style */ "./node_modules/antd/lib/grid/style/index.js");
/* harmony import */ var antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_grid_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _custom_form_components_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-form-components/date */ "./src/common/components/custom-form-components/date/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/common/components/passport-data/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _calcs_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../calcs/common/constants */ "./src/calcs/common/constants/index.ts");











var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;
var PassportData = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_a) {
    var namespace = _a.namespace, _b = _a.showHeading, showHeading = _b === void 0 ? true : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.disablesSerial, disablesSerial = _d === void 0 ? false : _d, _e = _a.disablesNumber, disablesNumber = _e === void 0 ? false : _e;
    var serialName = 'passportSerial', numberName = 'passportNumber', dateOfIssueName = 'passportDateOfIssue';
    if (namespace) {
        serialName = [namespace, serialName];
        numberName = [namespace, numberName];
        dateOfIssueName = [namespace, dateOfIssueName];
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], { gutter: { sm: 8, md: 16, xl: 24 } },
        showHeading && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { xs: 24, sm: 24 },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "\u041F\u0430\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { className: 'e-passport-data__serial-col' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: serialName, label: 'Серия', rules: _calcs_common_constants__WEBPACK_IMPORTED_MODULE_9__["STANDART_ITEM_RULES"], required: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, { className: 'e-passport-data__serial', size: 'large', disabled: disabled || disablesSerial }))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], { className: 'e-passport-data__number-col' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: numberName, label: 'Номер', rules: _calcs_common_constants__WEBPACK_IMPORTED_MODULE_9__["STANDART_ITEM_RULES"], required: true },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, { className: 'e-passport-data__number', size: 'large', disabled: disabled || disablesNumber }))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd_lib_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Item, { name: dateOfIssueName, label: 'Дата выдачи', rules: _calcs_common_constants__WEBPACK_IMPORTED_MODULE_9__["STANDART_ITEM_RULES"], required: true },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_custom_form_components_date__WEBPACK_IMPORTED_MODULE_7__["default"], { disabled: disabled })))));
});
/* harmony default export */ __webpack_exports__["default"] = (PassportData);


/***/ }),

/***/ "./src/common/helpers/console/log.ts":
/*!*******************************************!*\
  !*** ./src/common/helpers/console/log.ts ***!
  \*******************************************/
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
function log() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    if (true)
        console.log.apply(console, __spread(params));
}


/***/ }),

/***/ "./src/common/helpers/create-request-state.ts":
/*!****************************************************!*\
  !*** ./src/common/helpers/create-request-state.ts ***!
  \****************************************************/
/*! exports provided: createInitialState, createStartedState, createErrorState, createSuccessState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialState", function() { return createInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStartedState", function() { return createStartedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorState", function() { return createErrorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSuccessState", function() { return createSuccessState; });
var createInitialState = function () {
    return {
        requestStatus: 'didNotLoad',
        errorMessage: '',
        data: null,
    };
};
var createStartedState = function (data) {
    if (data === void 0) { data = null; }
    return {
        requestStatus: 'started',
        errorMessage: '',
        data: data,
    };
};
var createErrorState = function (errors) {
    return {
        requestStatus: 'error',
        errorMessage: errors.join(', '),
        data: null,
    };
};
var createSuccessState = function (data) {
    return {
        requestStatus: 'success',
        errorMessage: '',
        data: data,
    };
};


/***/ }),

/***/ "./src/common/helpers/divide-integer-by-space.ts":
/*!*******************************************************!*\
  !*** ./src/common/helpers/divide-integer-by-space.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Делит целые числа по тысячам через пробел 5000 -> 5 000
 */
/* harmony default export */ __webpack_exports__["default"] = (function (number) {
    return (number + '')
        .split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g)
        .join(' ')
        .split('')
        .reverse()
        .join('');
});


/***/ }),

/***/ "./src/common/helpers/for-get-value-from-event/handle-input-only-english.ts":
/*!**********************************************************************************!*\
  !*** ./src/common/helpers/for-get-value-from-event/handle-input-only-english.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/notification */ "./node_modules/antd/lib/notification/index.js");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/notification/style */ "./node_modules/antd/lib/notification/style/index.js");
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_1__);


var handleInputOnlyEnglish = function (e) {
    // 65 & 90 включительно (диапозон кодов больших английских букв)
    var val = e.target.value, newVal = val.toUpperCase(), charCode = newVal.charCodeAt(val.length - 1);
    // todo - вывести подсказку
    if (charCode > 64 && charCode < 91)
        return newVal;
    else {
        antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default.a.info({
            message: 'Пожалуйста, переключите язык на клавиатуре',
        });
        return newVal.substr(0, newVal.length - 1);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (handleInputOnlyEnglish);


/***/ }),

/***/ "./src/common/helpers/for-get-value-from-event/handle-input-only-russian.ts":
/*!**********************************************************************************!*\
  !*** ./src/common/helpers/for-get-value-from-event/handle-input-only-russian.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/notification */ "./node_modules/antd/lib/notification/index.js");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/notification/style */ "./node_modules/antd/lib/notification/style/index.js");
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_1__);


var handleInputOnlyRussian = function (e) {
    // 65 & 90 включительно (диапозон кодов больших английских букв)
    var val = e.target.value, charCode = val.charCodeAt(val.length - 1);
    if ((charCode > 1039 && charCode < 1104) ||
        charCode === 1025 ||
        charCode === 1105)
        return val;
    else {
        antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default.a.info({
            message: 'Пожалуйста, переключите язык на клавиатуре',
        });
        return val.substr(0, val.length - 1);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (handleInputOnlyRussian);


/***/ }),

/***/ "./src/common/helpers/merge-deep.ts":
/*!******************************************!*\
  !*** ./src/common/helpers/merge-deep.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeDeep; });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
function isPlainObject(obj) {
    return (isObject(obj) &&
        (obj.constructor === Object || obj.constructor === undefined));
}
function mergeDeep(target) {
    var e_1, _a;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length)
        return target;
    var source = sources.shift();
    if (Array.isArray(target)) {
        if (Array.isArray(source)) {
            target.push.apply(target, __spread(source));
        }
        else {
            target.push(source);
        }
    }
    else if (isPlainObject(target)) {
        if (isPlainObject(source)) {
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    if (!target[key]) {
                        target[key] = source[key];
                    }
                    else {
                        mergeDeep(target[key], source[key]);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            throw new Error("Cannot merge object with non-object");
        }
    }
    else {
        target = source;
    }
    return mergeDeep.apply(void 0, __spread([target], sources));
}


/***/ }),

/***/ "./src/common/helpers/range-iterator.ts":
/*!**********************************************!*\
  !*** ./src/common/helpers/range-iterator.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RangeIterator = /** @class */ (function () {
    function RangeIterator(from, to) {
        this.from = from;
        this.to = to;
    }
    RangeIterator.prototype[Symbol.iterator] = function () {
        var from = this.from, to = this.to;
        var current = undefined;
        return {
            next: function () {
                if (current === undefined) {
                    // инициализация состояния итерации
                    current = from;
                }
                if (current <= to) {
                    return {
                        done: false,
                        value: current++,
                    };
                }
                else {
                    // очистка текущей итерации
                    current = undefined;
                    return {
                        done: true,
                        value: null,
                    };
                }
            },
        };
    };
    return RangeIterator;
}());
/* harmony default export */ __webpack_exports__["default"] = (RangeIterator);


/***/ }),

/***/ "./src/common/helpers/validators/is-adult.ts":
/*!***************************************************!*\
  !*** ./src/common/helpers/validators/is-adult.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var isAdultValidator = function (r, v) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!v)
            return [2 /*return*/, Promise.reject('Введите дату')];
        if (moment__WEBPACK_IMPORTED_MODULE_0__().diff(v, 'years') < 18)
            return [2 /*return*/, Promise.reject('Должен быть совершеннолетним')];
        return [2 /*return*/, Promise.resolve()];
    });
}); };
/* harmony default export */ __webpack_exports__["default"] = (isAdultValidator);


/***/ }),

/***/ "./src/common/helpers/validators/required-true-checkbox.ts":
/*!*****************************************************************!*\
  !*** ./src/common/helpers/validators/required-true-checkbox.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var requiredTrueCheckboxValidator = function (r, v) {
    if (!v)
        return Promise.reject('Поставьте галочку');
    return Promise.resolve();
};
/* harmony default export */ __webpack_exports__["default"] = (requiredTrueCheckboxValidator);


/***/ }),

/***/ "./src/common/hooks/use-url-params.ts":
/*!********************************************!*\
  !*** ./src/common/hooks/use-url-params.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var useUrlParams = function () {
    return window.location.search
        .replace('?', '') //! знаки ? строго как разделители
        .split('&')
        .reduce(function (prevValue, curValue) {
        var param = curValue.split('=');
        prevValue[param[0]] = param[1];
        return prevValue;
    }, {});
};
/* harmony default export */ __webpack_exports__["default"] = (useUrlParams);


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

},[["./src/calcs/travel/main/index.tsx","runtime","vendors~index"]]]);
//# sourceMappingURL=index.dev.js.map