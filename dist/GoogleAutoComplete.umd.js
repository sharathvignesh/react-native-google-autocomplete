(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('lodash')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'lodash'], factory) :
    (factory((global.GoogleAutocompleted = {}),global.React,null,null));
}(this, (function (exports,React,PropTypes,lodash) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    var strictUriEncode = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

    function encoderForArrayFormat(options) {
    	switch (options.arrayFormat) {
    		case 'index':
    			return (key, value, index) => {
    				return value === null ? [
    					encode(key, options),
    					'[',
    					index,
    					']'
    				].join('') : [
    					encode(key, options),
    					'[',
    					encode(index, options),
    					']=',
    					encode(value, options)
    				].join('');
    			};
    		case 'bracket':
    			return (key, value) => {
    				return value === null ? [encode(key, options), '[]'].join('') : [
    					encode(key, options),
    					'[]=',
    					encode(value, options)
    				].join('');
    			};
    		default:
    			return (key, value) => {
    				return value === null ? encode(key, options) : [
    					encode(key, options),
    					'=',
    					encode(value, options)
    				].join('');
    			};
    	}
    }

    function encode(value, options) {
    	if (options.encode) {
    		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
    	}

    	return value;
    }

    var stringify = (obj, options) => {
    	const defaults = {
    		encode: true,
    		strict: true,
    		arrayFormat: 'none'
    	};

    	options = Object.assign(defaults, options);

    	if (options.sort === false) {
    		options.sort = () => {};
    	}

    	const formatter = encoderForArrayFormat(options);

    	return obj ? Object.keys(obj).sort(options.sort).map(key => {
    		const value = obj[key];

    		if (value === undefined) {
    			return '';
    		}

    		if (value === null) {
    			return encode(key, options);
    		}

    		if (Array.isArray(value)) {
    			const result = [];

    			for (const value2 of value.slice()) {
    				if (value2 === undefined) {
    					continue;
    				}

    				result.push(formatter(key, value2, result.length));
    			}

    			return result.join('&');
    		}

    		return encode(key, options) + '=' + encode(value, options);
    	}).filter(x => x.length > 0).join('&') : '';
    };

    var BASE_URL = 'https://maps.googleapis.com/maps/api/place';
    var GoogleService = /** @class */ (function () {
        function GoogleService() {
        }
        GoogleService._search = function (term, query) {
            return __awaiter(this, void 0, void 0, function () {
                var url, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = BASE_URL + "/autocomplete/json?&input=" + encodeURIComponent(term) + "&" + stringify(query);
                            return [4 /*yield*/, fetch(url)];
                        case 1:
                            res = _a.sent();
                            if (!res.ok) {
                                throw new Error(res.statusText);
                            }
                            return [2 /*return*/, res.json()];
                    }
                });
            });
        };
        GoogleService._searchDetails = function (placeid, query) {
            return __awaiter(this, void 0, void 0, function () {
                var url, res, resJson;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = BASE_URL + "/details/json?" + stringify(__assign({}, query, { placeid: placeid }));
                            return [4 /*yield*/, fetch(url)];
                        case 1:
                            res = _a.sent();
                            return [4 /*yield*/, res.json()];
                        case 2:
                            resJson = _a.sent();
                            if (!resJson.status) {
                                throw new Error(res.statusText);
                            }
                            return [2 /*return*/, Promise.resolve(resJson.result)];
                    }
                });
            });
        };
        return GoogleService;
    }());

    var isFunction = function (value) {
        return typeof value === 'function';
    };

    var initialState = {
        inputValue: '',
        locationResults: [],
        isSearching: false,
    };
    var defaultProps = {
        /**
         * Minimun length of the input before start fetching - default: 2
         */
        minLength: 2,
        /**
         * Debounce request time in ms - default: 300
         */
        debounce: 300,
    };
    var GoogleAutoComplete = /** @class */ (function (_super) {
        __extends(GoogleAutoComplete, _super);
        function GoogleAutoComplete() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = initialState;
            /**
             * Search to google automplete service
             */
            _this._search = lodash.debounce(function (term) { return __awaiter(_this, void 0, void 0, function () {
                var searchOpts, results, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this._isMounted) return [3 /*break*/, 4];
                            this.setState({ isSearching: true });
                            searchOpts = {
                                key: this.props.apiKey,
                                components: this.props.components,
                            };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, GoogleService._search(term, searchOpts)];
                        case 2:
                            results = _a.sent();
                            this.setState({
                                locationResults: results.predictions,
                                isSearching: false,
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            throw error_1;
                        case 4: return [2 /*return*/];
                    }
                });
            }); }, _this.props.debounce);
            _this._clearSearchs = function () {
                if (_this._isMounted) {
                    _this.setState({
                        locationResults: [],
                    });
                }
            };
            /**
             * Handle the input change for react-native
             */
            _this._handleTextChange = function (inputValue) {
                if (_this.props.apiKey == null) {
                    throw new Error('Api Key is required');
                }
                _this.setState({
                    inputValue: inputValue,
                });
                if (inputValue.length >= _this.props.minLength) {
                    _this._search(inputValue);
                }
            };
            /**
             * Handle the input change for react web
             */
            _this._handleEventChange = function (e) {
                var value = e.target.value;
                _this.setState({
                    inputValue: value,
                });
                if (value.length >= _this.props.minLength) {
                    _this._search(value);
                }
            };
            /**
             * Handle the search details when provide the place_id
             */
            _this._searchDetails = function (placeId) { return __awaiter(_this, void 0, void 0, function () {
                var searchOpts;
                return __generator(this, function (_a) {
                    searchOpts = {
                        key: this.props.apiKey,
                        components: this.props.components,
                    };
                    try {
                        return [2 /*return*/, GoogleService._searchDetails(placeId, searchOpts)];
                    }
                    catch (error) {
                        throw error;
                    }
                    return [2 /*return*/];
                });
            }); };
            return _this;
        }
        GoogleAutoComplete.prototype.componentDidMount = function () {
            this._isMounted = true;
        };
        GoogleAutoComplete.prototype.componentWillUnmount = function () {
            this._isMounted = false;
        };
        GoogleAutoComplete.prototype.render = function () {
            var renderProps = {
                inputValue: this.state.inputValue,
                locationResults: this.state.locationResults,
                handleTextChange: this._handleTextChange,
                handleEventChange: this._handleEventChange,
                fetchDetails: this._searchDetails,
                isSearching: this.state.isSearching,
                clearSearchs: this._clearSearchs,
            };
            if (this.props.render) {
                return this.props.render(renderProps);
            }
            return isFunction(this.props.children)
                ? this.props.children(renderProps)
                : null;
        };
        GoogleAutoComplete.defaultProps = defaultProps;
        GoogleAutoComplete.propTypes = {
            /**
             * Minimun length before sending a search request default 2
             */
            minLength: PropTypes.number,
            /**
             * Time for debouncing the search default 300
             */
            debounce: PropTypes.number,
            /**
             * Your api key
             */
            apiKey: PropTypes.string.isRequired,
            /**
             * A grouping of places to which you would like to restrict your results
             */
            components: PropTypes.string,
            /**
             * The distance (in meters) within which to return place results.
             * Note that setting a radius biases results to the indicated area,
             * but may not fully restrict results to the specified area.
             */
            radius: PropTypes.string,
        };
        return GoogleAutoComplete;
    }(React.PureComponent));

    exports.initialState = initialState;
    exports.GoogleAutoComplete = GoogleAutoComplete;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=GoogleAutoComplete.umd.js.map
