(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {//
  },
  data: function data() {
    return {
      dialog: false,
      drawer: null,
      items: [{
        icon: 'contacts',
        text: 'Contacts'
      }, {
        icon: 'history',
        text: 'Frequently contacted'
      }, {
        icon: 'content_copy',
        text: 'Duplicates'
      }, {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [{
          icon: 'add',
          text: 'Create label'
        }]
      }, {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [{
          text: 'Import'
        }, {
          text: 'Export'
        }, {
          text: 'Print'
        }, {
          text: 'Undo changes'
        }, {
          text: 'Other contacts'
        }]
      }, {
        icon: 'settings',
        text: 'Settings'
      }, {
        icon: 'chat_bubble',
        text: 'Send feedback'
      }, {
        icon: 'help',
        text: 'Help'
      }, {
        icon: 'phonelink',
        text: 'App downloads'
      }, {
        icon: 'keyboard',
        text: 'Go to the old version'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminLayout.vue?vue&type=template&id=6c7b99be&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminLayout.vue?vue&type=template&id=6c7b99be& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { clipped: _vm.$vuetify.breakpoint.lgAndUp, app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _vm._l(_vm.items, function(item) {
                return [
                  item.heading
                    ? _c(
                        "v-layout",
                        {
                          key: item.heading,
                          attrs: { row: "", "align-center": "" }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs6: "" } },
                            [
                              item.heading
                                ? _c("v-subheader", [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(item.heading) +
                                        "\n                    "
                                    )
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            {
                              staticClass: "text-xs-center",
                              attrs: { xs6: "" }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "body-2 black--text",
                                  attrs: { href: "#!" }
                                },
                                [_vm._v("EDIT")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : item.children
                    ? _c(
                        "v-list-group",
                        {
                          key: item.text,
                          attrs: {
                            "prepend-icon": item.model
                              ? item.icon
                              : item["icon-alt"],
                            "append-icon": ""
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-list-item",
                                      [
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(item.text) +
                                                  "\n                        "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            true
                          ),
                          model: {
                            value: item.model,
                            callback: function($$v) {
                              _vm.$set(item, "model", $$v)
                            },
                            expression: "item.model"
                          }
                        },
                        [
                          _vm._v(" "),
                          _vm._l(item.children, function(child, i) {
                            return _c(
                              "v-list-item",
                              { key: i, on: { click: function($event) {} } },
                              [
                                child.icon
                                  ? _c(
                                      "v-list-item-action",
                                      [
                                        _c("v-icon", [
                                          _vm._v(_vm._s(child.icon))
                                        ])
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(child.text) +
                                          "\n                    "
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    : _c(
                        "v-list-item",
                        { key: item.text, on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-item-action",
                            [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(item.text) +
                                    "\n                    "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                ]
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            "clipped-left": _vm.$vuetify.breakpoint.lgAndUp,
            app: "",
            color: "blue darken-3",
            dark: ""
          }
        },
        [
          _c(
            "v-toolbar-title",
            { staticClass: "ml-0 pl-3", staticStyle: { width: "300px" } },
            [
              _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.drawer = !_vm.drawer
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "hidden-sm-and-down" }, [
                _vm._v("MOIREI")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-text-field", {
            staticClass: "hidden-sm-and-down",
            attrs: {
              flat: "",
              "solo-inverted": "",
              "hide-details": "",
              "prepend-inner-icon": "search",
              label: "Search"
            }
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("apps")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("notifications")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "", large: "" } },
            [
              _c(
                "v-avatar",
                { attrs: { size: "32px", item: "" } },
                [
                  _c("v-img", {
                    attrs: {
                      src: "https://cdn.vuetifyjs.com/images/logos/logo.svg",
                      alt: "Vuetify"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { attrs: { fluid: "", "fill-height": "" } },
            [
              _c(
                "v-layout",
                { attrs: { "align-center": "", "justify-center": "" } },
                [
                  _c(
                    "v-tooltip",
                    {
                      attrs: { right: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  {
                                    attrs: {
                                      href: _vm.source,
                                      icon: "",
                                      large: "",
                                      target: "_blank"
                                    }
                                  },
                                  on
                                ),
                                [
                                  _c("v-icon", { attrs: { large: "" } }, [
                                    _vm._v("mdi-code-tags")
                                  ])
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Source")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tooltip",
                    {
                      attrs: { right: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  {
                                    attrs: {
                                      icon: "",
                                      large: "",
                                      href:
                                        "https://codepen.io/johnjleider/pen/MNYLdL",
                                      target: "_blank"
                                    }
                                  },
                                  on
                                ),
                                [
                                  _c("v-icon", { attrs: { large: "" } }, [
                                    _vm._v("mdi-codepen")
                                  ])
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Codepen")])]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            bottom: "",
            color: "pink",
            dark: "",
            fab: "",
            fixed: "",
            right: ""
          },
          on: {
            click: function($event) {
              _vm.dialog = !_vm.dialog
            }
          }
        },
        [_c("v-icon", [_vm._v("add")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "800px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "grey darken-2" }, [
                _vm._v("\n            Create contact\n        ")
              ]),
              _vm._v(" "),
              _c(
                "v-container",
                { attrs: { "grid-list-sm": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        {
                          attrs: {
                            xs12: "",
                            "align-center": "",
                            "justify-space-between": ""
                          }
                        },
                        [
                          _c(
                            "v-layout",
                            { attrs: { "align-center": "" } },
                            [
                              _c(
                                "v-avatar",
                                {
                                  staticClass: "mr-3",
                                  attrs: { size: "40px" }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        "//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",
                                      alt: ""
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { placeholder: "Name" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs6: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "prepend-icon": "business",
                              placeholder: "Company"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs6: "" } },
                        [
                          _c("v-text-field", {
                            attrs: { placeholder: "Job title" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "prepend-icon": "mail",
                              placeholder: "Email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "tel",
                              "prepend-icon": "phone",
                              placeholder: "(000) 000 - 0000"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "prepend-icon": "notes",
                              placeholder: "Notes"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-btn", { attrs: { text: "", color: "primary" } }, [
                    _vm._v("More")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Save")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AdminLayout.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AdminLayout.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminLayout_vue_vue_type_template_id_6c7b99be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=template&id=6c7b99be& */ "./resources/js/components/AdminLayout.vue?vue&type=template&id=6c7b99be&");
/* harmony import */ var _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminLayout_vue_vue_type_template_id_6c7b99be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminLayout_vue_vue_type_template_id_6c7b99be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AdminLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AdminLayout.vue?vue&type=template&id=6c7b99be&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AdminLayout.vue?vue&type=template&id=6c7b99be& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_6c7b99be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminLayout.vue?vue&type=template&id=6c7b99be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminLayout.vue?vue&type=template&id=6c7b99be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_6c7b99be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_6c7b99be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);