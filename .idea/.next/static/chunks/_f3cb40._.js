(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_f3cb40._.js", {

"[project]/components/Navbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const Navbar = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container flex justify-between items-center py-4 px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "md:hidden text-2xl font-bold text-gray-800 mr-10",
                        children: "Bandage"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden text-lg md:flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-2xl font-bold text-gray-800 mr-10",
                                children: "Bandage"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 17,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 18,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                className: "text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300",
                                children: "Shop"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                className: "text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing",
                                className: "text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300",
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "text-gray-700 hover:text-sky-500 hover:scale-105 transition-all duration-300",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:flex hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/login",
                                className: "text-sky-400 font-bold font-lg mx-5 hover:scale-105 transition-all duration-300",
                                children: "Login / Register"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                className: "w-6 h-6 text-sky-400 ml-3 hover:scale-105 transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm6.293-1.293l4.707 4.707-1.414 1.414-4.707-4.707a9.97 9.97 0 01-1.414 1.414z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                className: "w-6 h-6 text-sky-400 ml-4 hover:scale-105 transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a4.5 4.5 0 010-6.364z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-400 hover:scale-105 transition-all duration-300",
                                children: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                className: "w-6 h-6 ml-4 text-sky-400 hover:scale-105 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M3 3h18l-2 9H5L3 3z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 47,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "9",
                                        cy: "19",
                                        r: "2",
                                        stroke: "currentColor",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 48,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "17",
                                        cy: "19",
                                        r: "2",
                                        stroke: "currentColor",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-400 hover:scale-105 transition-all duration-300",
                                children: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-gray-700 focus:outline-none",
                        onClick: toggleMenu,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: `fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "md:hidden bg-white shadow-lg text-lg text-gray-800 flex flex-col items-center space-y-4 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 66,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            className: "hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center",
                            children: "Shop"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 71,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 70,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            className: "hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 76,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/pricing",
                            className: "hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center",
                            children: "Pricing"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 81,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-10 py-3 rounded w-full text-center",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 86,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 85,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "hover:bg-sky-200 active:bg-sky-200 focus:bg-sky-200 hover:scale-105 transition-all duration-300 px-4 py-3 rounded w-full text-center",
                            children: "Login / Register"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 91,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 64,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.js",
        lineNumber: 13,
        columnNumber: 9
    }, this);
};
_s(Navbar, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_refresh__.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sections/mainpage/EditorsPick.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const EditorsPick = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-screen-lg mx-auto py-8 mt-11",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center text-gray-800 text-2xl font-bold uppercase mb-2",
                children: "Editor's Pick"
            }, void 0, false, {
                fileName: "[project]/sections/mainpage/EditorsPick.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-500 text-sm mb-6 tracking-widest font-semibold",
                children: "Problems trying to resolve the conflict between"
            }, void 0, false, {
                fileName: "[project]/sections/mainpage/EditorsPick.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:grid md:grid-cols-4 md:gap-4 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group md:col-span-2 md:row-span-2 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Men",
                                className: "w-full h-auto rounded object-cover md:w-full md:h-full"
                            }, void 0, false, {
                                fileName: "[project]/sections/mainpage/EditorsPick.js",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold",
                                children: "Men"
                            }, void 0, false, {
                                fileName: "[project]/sections/mainpage/EditorsPick.js",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sections/mainpage/EditorsPick.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group md:col-span-1 md:row-span-2 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1542145713-b1b5bdffdb61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                alt: "Women",
                                className: "w-full h-auto rounded object-cover md:w-full md:h-full"
                            }, void 0, false, {
                                fileName: "[project]/sections/mainpage/EditorsPick.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold",
                                children: "Women"
                            }, void 0, false, {
                                fileName: "[project]/sections/mainpage/EditorsPick.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sections/mainpage/EditorsPick.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group md:col-span-1 md:row-span-1 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1638657704712-dce36957c97f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFjY2Vzb3JpZXN8ZW58MHx8MHx8fDA%3D",
                                alt: "Accessories",
                                className: "w-full h-auto rounded object-cover md:w-full md:h-full"
                            }, void 0, false, {
                                fileName: "[project]/sections/mainpage/EditorsPick.js",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold",
                                children: "Accessories"
                            }, void 0, false, {
                                fileName: "[project]/sections/mainpage/EditorsPick.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sections/mainpage/EditorsPick.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group md:col-span-1 md:row-span-1 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1618830301945-a4b6c5e94c1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxraWRzJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                                alt: "Kids",
                                className: "w-full h-auto rounded object-cover md:w-full md:h-full"
                            }, void 0, false, {
                                fileName: "[project]/sections/mainpage/EditorsPick.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 text-black text-lg font-bold",
                                children: "Kids"
                            }, void 0, false, {
                                fileName: "[project]/sections/mainpage/EditorsPick.js",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sections/mainpage/EditorsPick.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/mainpage/EditorsPick.js",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/mainpage/EditorsPick.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = EditorsPick;
const __TURBOPACK__default__export__ = EditorsPick;
var _c;
__turbopack_refresh__.register(_c, "EditorsPick");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/constants/Constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "products": (()=>products)
});
const products = [
    // MEN
    {
        id: 1,
        images: [
            'https://images.unsplash.com/photo-1612465289702-7c84b5258fde?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Classic T-Shirt',
        description: 'Comfortable and stylish cotton T-shirt, perfect for casual wear.',
        price: '$25.00',
        discount: '$20.00'
    },
    {
        id: 2,
        images: [
            'https://images.unsplash.com/photo-1613776822564-8859412fc09b?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Leather Jacket',
        description: 'Premium leather jacket with a modern fit and durable finish.',
        price: '$150.00',
        discount: null
    },
    {
        id: 3,
        images: [
            'https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Slim Fit Jeans',
        description: 'Trendy denim jeans with a slim fit for a sharp and modern look.',
        price: '$45.00',
        discount: null
    },
    {
        id: 4,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Wool Sweater',
        description: 'Stay warm and stylish with this cozy wool sweater.',
        price: '$60.00',
        discount: '$50.00'
    },
    {
        id: 5,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Chinos',
        description: 'Comfortable and versatile chinos for casual or formal settings.',
        price: '$40.00',
        discount: null
    },
    {
        id: 6,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Formal Shirt',
        description: 'Classic button-up shirt for office wear and special occasions.',
        price: '$35.00',
        discount: '$30.00'
    },
    {
        id: 7,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Hoodie',
        description: 'Relaxed and cozy hoodie, perfect for layering.',
        price: '$50.00',
        discount: null
    },
    {
        id: 8,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Running Shoes',
        description: 'Lightweight running shoes for sports and casual outings.',
        price: '$80.00',
        discount: '$70.00'
    },
    {
        id: 9,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Polo T-Shirt',
        description: 'Stylish polo T-shirt with a breathable fabric.',
        price: '$30.00',
        discount: '$25.00'
    },
    {
        id: 10,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Sports Watch',
        description: 'Durable sports watch with waterproof features.',
        price: '$60.00',
        discount: null
    },
    {
        id: 11,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Leather Boots',
        description: 'Sturdy leather boots for outdoor adventures.',
        price: '$100.00',
        discount: '$90.00'
    },
    {
        id: 12,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Track Pants',
        description: 'Comfortable track pants for workouts or lounging.',
        price: '$40.00',
        discount: null
    },
    {
        id: 13,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Cap',
        description: 'Classic baseball cap to add a sporty touch to your outfit.',
        price: '$20.00',
        discount: null
    },
    {
        id: 14,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Gloves',
        description: 'Warm gloves made from high-quality wool for winter.',
        price: '$15.00',
        discount: null
    },
    {
        id: 15,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Scarf',
        description: 'Stylish scarf for added comfort and warmth.',
        price: '$25.00',
        discount: null
    },
    {
        id: 16,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Socks (Pack of 3)',
        description: 'Comfortable and durable socks for daily use.',
        price: '$10.00',
        discount: '$8.00'
    },
    {
        id: 17,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Tie',
        description: 'Elegant tie for formal occasions.',
        price: '$20.00',
        discount: null
    },
    {
        id: 18,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Blazer',
        description: 'Tailored blazer for a sophisticated look.',
        price: '$120.00',
        discount: '$100.00'
    },
    {
        id: 19,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Sunglasses',
        description: 'Polarized sunglasses for UV protection.',
        price: '$50.00',
        discount: null
    },
    {
        id: 20,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Cardigan',
        description: 'Soft cardigan for layering during cooler days.',
        price: '$70.00',
        discount: '$60.00'
    },
    // WOMEN (21-40)
    {
        id: 21,
        images: [
            'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Floral Dress',
        description: 'Beautiful floral print dress, ideal for casual outings and events.',
        price: '$40.00',
        discount: null
    },
    {
        id: 22,
        images: [
            'https://images.unsplash.com/photo-1517586979038-a217db9eed08?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Denim Jacket',
        description: 'A trendy denim jacket that pairs well with almost everything.',
        price: '$70.00',
        discount: null
    },
    {
        id: 23,
        images: [
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Knit Sweater',
        description: 'Cozy knit sweater to keep you warm and stylish.',
        price: '$50.00',
        discount: '$45.00'
    },
    {
        id: 24,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Maxi Skirt',
        description: 'Elegant and flowy maxi skirt for casual and formal occasions.',
        price: '$35.00',
        discount: '$30.00'
    },
    {
        id: 25,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Summer Hat',
        description: 'Wide-brimmed summer hat to protect you from the sun in style.',
        price: '$25.00',
        discount: null
    },
    {
        id: 26,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Ankle Boots',
        description: 'Chic ankle boots for a comfortable and stylish look.',
        price: '$80.00',
        discount: '$75.00'
    },
    {
        id: 27,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Silk Scarf',
        description: 'Luxurious silk scarf for a sophisticated touch.',
        price: '$30.00',
        discount: null
    },
    {
        id: 28,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Wide-Leg Pants',
        description: 'Trendy wide-leg pants for effortless chic.',
        price: '$60.00',
        discount: '$50.00'
    },
    {
        id: 29,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Trench Coat',
        description: 'Classic trench coat for a timeless style.',
        price: '$120.00',
        discount: null
    },
    {
        id: 30,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Leggings',
        description: 'Comfortable leggings for workouts or casual wear.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 31,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Wrap Dress',
        description: 'Flattering wrap dress for a stunning silhouette.',
        price: '$55.00',
        discount: null
    },
    {
        id: 32,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Cardigan Sweater',
        description: 'Soft cardigan sweater for layering.',
        price: '$45.00',
        discount: '$40.00'
    },
    {
        id: 33,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Crossbody Bag',
        description: 'Compact crossbody bag for essentials on the go.',
        price: '$70.00',
        discount: '$60.00'
    },
    {
        id: 34,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Heeled Sandals',
        description: 'Stylish heeled sandals for evenings out.',
        price: '$90.00',
        discount: null
    },
    {
        id: 35,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Sports Bra',
        description: 'Supportive sports bra for active lifestyles.',
        price: '$25.00',
        discount: '$22.00'
    },
    {
        id: 36,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Midi Dress',
        description: 'Graceful midi dress with a flattering fit.',
        price: '$65.00',
        discount: null
    },
    {
        id: 37,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Chiffon Top',
        description: 'Lightweight chiffon top for a breezy look.',
        price: '$35.00',
        discount: null
    },
    {
        id: 38,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Blouse',
        description: 'Elegant blouse for work or casual wear.',
        price: '$40.00',
        discount: '$35.00'
    },
    {
        id: 39,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Puffer Jacket',
        description: 'Warm puffer jacket for cold weather.',
        price: '$110.00',
        discount: '$100.00'
    },
    {
        id: 40,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Women',
        title: 'Evening Gown',
        description: 'Elegant evening gown for formal occasions.',
        price: '$150.00',
        discount: null
    },
    // KIDS (41-60)
    {
        id: 41,
        images: [
            'https://images.unsplash.com/photo-1537811500019-6e041c3c672b?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Graphic T-Shirt',
        description: 'Fun and colorful graphic T-shirt for kids.',
        price: '$15.00',
        discount: '$12.00'
    },
    {
        id: 42,
        images: [
            'https://images.unsplash.com/photo-1609854493374-00fcbc1a7761?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Warm Hoodie',
        description: 'Cozy and soft hoodie to keep kids warm during chilly days.',
        price: '$25.00',
        discount: null
    },
    {
        id: 43,
        images: [
            'https://images.unsplash.com/photo-1517601643043-3d0a21a00f82?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Denim Jeans',
        description: 'Durable denim jeans for kids, perfect for all-day play.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 44,
        images: [
            'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Rain Boots',
        description: 'Waterproof rain boots for fun splashing in puddles.',
        price: '$30.00',
        discount: null
    },
    {
        id: 45,
        images: [
            'https://images.unsplash.com/photo-1583422401227-991b8c38f372?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Winter Coat',
        description: 'Warm and cozy winter coat for the cold season.',
        price: '$60.00',
        discount: '$50.00'
    },
    {
        id: 46,
        images: [
            'https://images.unsplash.com/photo-1611095973511-f91b7cddbf5c?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Sneakers',
        description: 'Comfortable and durable sneakers for everyday wear.',
        price: '$40.00',
        discount: '$35.00'
    },
    {
        id: 47,
        images: [
            'https://images.unsplash.com/photo-1571397964266-4ba6ad5ad72e?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Pajamas Set',
        description: 'Soft and cozy pajamas for a good night’s sleep.',
        price: '$18.00',
        discount: '$15.00'
    },
    {
        id: 48,
        images: [
            'https://images.unsplash.com/photo-1542038424-6d87e8fb6828?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Baseball Cap',
        description: 'Stylish cap to keep the sun off during outdoor play.',
        price: '$12.00',
        discount: null
    },
    {
        id: 49,
        images: [
            'https://images.unsplash.com/photo-1586216588434-210f33f99b4b?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Raincoat',
        description: 'Waterproof raincoat for all-weather fun.',
        price: '$35.00',
        discount: null
    },
    {
        id: 50,
        images: [
            'https://images.unsplash.com/photo-1520975841420-1162d6d4ae97?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Swimwear',
        description: 'Bright and fun swimwear for pool or beach time.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 51,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Leggings',
        description: 'Stretchy leggings for active play or lounging.',
        price: '$15.00',
        discount: null
    },
    {
        id: 52,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Party Dress',
        description: 'Adorable party dress for special occasions.',
        price: '$45.00',
        discount: '$40.00'
    },
    {
        id: 53,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Shorts',
        description: 'Comfortable shorts for summer activities.',
        price: '$18.00',
        discount: null
    },
    {
        id: 54,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'School Backpack',
        description: 'Durable and fun backpack for school essentials.',
        price: '$30.00',
        discount: '$25.00'
    },
    {
        id: 55,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Tights (Pack of 2)',
        description: 'Soft tights for layering or wearing on their own.',
        price: '$12.00',
        discount: '$10.00'
    },
    {
        id: 56,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Sweatshirt',
        description: 'Warm sweatshirt with fun prints for casual wear.',
        price: '$25.00',
        discount: null
    },
    {
        id: 57,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Capri Pants',
        description: 'Light and breezy capri pants for summer days.',
        price: '$22.00',
        discount: '$20.00'
    },
    {
        id: 58,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Sandals',
        description: 'Comfortable sandals for all-day wear.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 59,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Winter Gloves',
        description: 'Soft and warm gloves for chilly weather.',
        price: '$10.00',
        discount: null
    },
    {
        id: 60,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Snow Boots',
        description: 'Sturdy snow boots for winter adventures.',
        price: '$50.00',
        discount: '$45.00'
    },
    {
        id: 61,
        images: [
            'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Leather Wallet',
        description: 'Premium leather wallet with multiple compartments.',
        price: '$25.00',
        discount: '$20.00'
    },
    {
        id: 62,
        images: [
            'https://images.unsplash.com/photo-1615823453796-85f7cc1914f3?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Sunglasses',
        description: 'Stylish UV-protected sunglasses for outdoor adventures.',
        price: '$50.00',
        discount: '$45.00'
    },
    {
        id: 63,
        images: [
            'https://images.unsplash.com/photo-1551718901-bf7ef251dc4e?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Beanie Hat',
        description: 'Warm and cozy beanie for cold weather.',
        price: '$18.00',
        discount: null
    },
    {
        id: 64,
        images: [
            'https://images.unsplash.com/photo-1603792295103-5d8a11704dc0?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Classic Watch',
        description: 'Elegant wristwatch with a sleek leather strap.',
        price: '$120.00',
        discount: '$100.00'
    },
    {
        id: 65,
        images: [
            'https://images.unsplash.com/photo-1560831341-289d6c544c9f?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Fashion Scarf',
        description: 'Lightweight and trendy scarf for all seasons.',
        price: '$15.00',
        discount: '$12.00'
    },
    {
        id: 66,
        images: [
            'https://images.unsplash.com/photo-1593032457862-d191cc7339b8?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Leather Belt',
        description: 'Durable leather belt with a polished buckle.',
        price: '$35.00',
        discount: '$30.00'
    },
    {
        id: 67,
        images: [
            'https://images.unsplash.com/photo-1511384751535-c4f6c11b5b7b?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Backpack',
        description: 'Spacious and stylish backpack for everyday use.',
        price: '$60.00',
        discount: '$55.00'
    },
    {
        id: 68,
        images: [
            'https://images.unsplash.com/photo-1581579201082-dac6a1571f7c?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Woolen Gloves',
        description: 'Soft woolen gloves for chilly weather.',
        price: '$20.00',
        discount: null
    },
    {
        id: 69,
        images: [
            'https://images.unsplash.com/photo-1507120410856-1f3f975b9be4?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Bucket Hat',
        description: 'Trendy bucket hat for a casual and cool look.',
        price: '$22.00',
        discount: '$20.00'
    },
    {
        id: 70,
        images: [
            'https://images.unsplash.com/photo-1562967916-eb82221dfb5d?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Gold Necklace',
        description: 'Elegant gold-plated necklace for special occasions.',
        price: '$75.00',
        discount: '$65.00'
    },
    {
        id: 71,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Keychain',
        description: 'Stylish and durable keychain for your essentials.',
        price: '$10.00',
        discount: null
    },
    {
        id: 72,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Duffel Bag',
        description: 'Spacious and lightweight duffel bag for travel.',
        price: '$80.00',
        discount: '$70.00'
    },
    {
        id: 73,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Earrings Set',
        description: 'Elegant earrings set with multiple designs.',
        price: '$25.00',
        discount: null
    },
    {
        id: 74,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Travel Organizer',
        description: 'Compact organizer for storing travel essentials.',
        price: '$35.00',
        discount: '$30.00'
    },
    {
        id: 75,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Leather Briefcase',
        description: 'Classic leather briefcase for work or school.',
        price: '$150.00',
        discount: '$130.00'
    },
    {
        id: 76,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Cufflinks',
        description: 'Sophisticated cufflinks for formal attire.',
        price: '$30.00',
        discount: '$25.00'
    },
    {
        id: 77,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Bracelet',
        description: 'Chic bracelet to complement any outfit.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 78,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Makeup Pouch',
        description: 'Compact makeup pouch for storing cosmetics.',
        price: '$15.00',
        discount: null
    },
    {
        id: 79,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Phone Case',
        description: 'Durable and stylish phone case with a modern design.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 80,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Portable Charger',
        description: 'Compact portable charger for on-the-go power.',
        price: '$35.00',
        discount: '$30.00'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sections/mainpage/FeaturedProducts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const FeaturedProducts = ()=>{
    const products = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1612465289702-7c84b5258fde?q=80&w=1873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Tech Accessories',
            title: 'Wireless Headphones',
            description: 'Immerse yourself in crystal-clear audio with our wireless headphones, featuring noise cancellation, long-lasting battery, and a sleek, lightweight design perfect for all-day comfort.',
            date: '22 Dec 2024',
            comments: 12,
            price: '$59.99'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1613776822564-8859412fc09b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
            category: 'Home Decor',
            title: 'Modern Table Lamp',
            description: 'Brighten up your room with this elegant table lamp, featuring a contemporary design, energy-efficient lighting, and premium materials that add style and functionality to your space.',
            date: '18 Dec 2024',
            comments: 8,
            price: '$45.00'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Fashion',
            title: 'Leather Backpack',
            description: 'Stay organized and stylish with this durable leather backpack, featuring multiple compartments, high-quality craftsmanship, and a timeless design for daily use or travel.',
            date: '15 Dec 2024',
            comments: 15,
            price: '$120.00'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-screen-xl mx-auto py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center text-sky-500 text-sm font-bold mb-2",
                children: "Practice Advice"
            }, void 0, false, {
                fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center text-gray-800 text-2xl font-bold tracking-wider mb-2",
                children: "Featured Products"
            }, void 0, false, {
                fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-500 text-sm mb-6",
                children: [
                    "Problems trying to resolve the conflict between ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                        lineNumber: 48,
                        columnNumber: 57
                    }, this),
                    " the two major realms of Classical physics: Newtonian mechanics."
                ]
            }, void 0, true, {
                fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-64 rounded-md overflow-hidden flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: product.image,
                                            alt: product.title,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded uppercase",
                                        children: "New"
                                    }, void 0, false, {
                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-xs uppercase mb-2",
                                        children: product.category
                                    }, void 0, false, {
                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-gray-800 text-lg font-bold mb-2",
                                        children: product.title
                                    }, void 0, false, {
                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm tracking-wider leading-relaxed mb-4",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-900 text-lg font-bold mb-4",
                                        children: product.price
                                    }, void 0, false, {
                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-sm mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClock"], {
                                                        className: "text-sky-500 w-4 h-4 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, this),
                                                    product.date
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 mr-1 text-sky-500",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2,
                                                        viewBox: "0 0 24 24",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M5 11l7 7 7-7m-7-7v14"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    product.comments,
                                                    " comments"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-gray-700 text-sm font-bold flex items-center gap-1 hover:text-sky-500 transition duration-300",
                                        children: [
                                            "Learn More",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/sections/mainpage/FeaturedProducts.js",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/mainpage/FeaturedProducts.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
_c = FeaturedProducts;
const __TURBOPACK__default__export__ = FeaturedProducts;
var _c;
__turbopack_refresh__.register(_c, "FeaturedProducts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_f3cb40._.js.map