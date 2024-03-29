"function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function (t) {
    return 0 === this.lastIndexOf(t, 0)
}), "function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function (t) {
    return -1 !== this.indexOf(t, this.length - t.length)
}), "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}), "function" != typeof Array.prototype.find && (Array.prototype.find = function (t) {
    if (null == this) throw new TypeError('"this" is null or not defined');
    var e = Object(this),
        i = e.length >>> 0;
    if ("function" != typeof t) throw new TypeError("callback must be a function");
    for (var a = arguments[1], n = 0; n < i;) {
        var o = e[n];
        if (t.call(a, o, n, e)) return o;
        n++
    }
}), "function" != typeof Array.prototype.findIndex && Object.defineProperty(Array.prototype, "findIndex", {
    value: function (t) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var e = Object(this),
            i = e.length >>> 0;
        if ("function" != typeof t) throw new TypeError("predicate must be a function");
        for (var a = arguments[1], n = 0; n < i;) {
            var o = e[n];
            if (t.call(a, o, n, e)) return n;
            n++
        }
        return -1
    },
    configurable: !0,
    writable: !0
}), "function" != typeof Array.prototype.filter && (Array.prototype.filter = function (t, e) {
    "use strict";
    if ("function" != typeof t || !this) throw new TypeError;
    var i = this.length >>> 0,
        a = new Array(i),
        n = this,
        o = 0,
        r = -1;
    if (void 0 === e)
        for (; ++r !== i;)
            if (r in this)
                if (t(n[r], r, n)) a[o++] = n[r];
                else
                    for (; ++r !== i;) r in this && t.call(e, n[r], r, n) && (a[o++] = n[r]);
    return a.length = o, a
}), "function" != typeof Array.prototype.map && (Array.prototype.map = function (t) {
    var e, i, a;
    if (null == this) throw new TypeError("this is null or not defined");
    var n = Object(this),
        o = n.length >>> 0;
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    for (arguments.length > 1 && (e = arguments[1]), i = new Array(o), a = 0; a < o;) {
        var r, s;
        a in n && (r = n[a], s = t.call(e, r, a, n), i[a] = s), a++
    }
    return i
}), "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function (t) {
    if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    var e, i = Object(this),
        a = i.length >>> 0,
        n = 0;
    if (arguments.length >= 2) e = arguments[1];
    else {
        for (; n < a && !(n in i);) n++;
        if (n >= a) throw new TypeError("Reduce of empty array with no initial value");
        e = i[n++]
    }
    for (; n < a;) n in i && (e = t(e, i[n], n, i)), n++;
    return e
}), "function" != typeof Object.keys && (Object.keys = function () {
    "use strict";
    var t = Object.prototype.hasOwnProperty,
        e = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        a = i.length;
    return function (n) {
        if ("function" != typeof n && ("object" != typeof n || null === n)) throw new TypeError("Object.keys called on non-object");
        var o, r, s = [];
        for (o in n) t.call(n, o) && s.push(o);
        if (e)
            for (r = 0; r < a; r++) t.call(n, i[r]) && s.push(i[r]);
        return s
    }
}()), String.prototype.replaceAll = function (t, e) {
    return this.valueOf()
        .split(t)
        .join(e)
}, String.prototype.decode = function () {
    return this.valueOf()
        .replaceAll(/&#38;/g, "&")
        .replaceAll(/&#62;/g, ">")
        .replaceAll(/&#60;/g, "<")
        .replaceAll(/&#39;/g, "'")
        .replaceAll(/&#34;/g, '"')
        .replaceAll(/&#165;/g, "\\")
        .replaceAll(/&#123;/g, "{")
        .replaceAll(/&#125;/g, "}")
}, String.prototype.format = function () {
    for (var t = this, e = 0; e < arguments.length; e++) {
        var i = new RegExp("\\{" + e + "\\}", "gi");
        t = t.replace(i, arguments[e])
    }
    return t.valueOf()
}, Array.prototype.removeSpace = function () {
    var t = [];
    return this.forEach(function (e) {
        (e = e.trim())
        .length > 0 && t.push(e)
    }), t
}, Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}, Array.prototype.unique = function () {
    return this.filter(function (t, e, i) {
        return i.indexOf(t) == e
    })
}, Array.prototype.except = function (t) {
    var e = this;
    return Array.isArray(t) && t.forEach(function (t) {
        var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
    }), e
}, Array.prototype.only = function (t) {
    var e = [];
    return Array.isArray(t) && this.forEach(function (i) {
        -1 != t.indexOf(i) && e.push(i)
    }), e
}, Array.prototype.insert = function (t, e) {
    this.splice(t, 0, e)
};
var LadiPageScriptV2 = LadiPageScriptV2 || function () {};
LadiPageScriptV2.prototype.init = function () {
    this.const = {
        DESKTOP: "desktop",
        MOBILE: "mobile",
        DOMAIN_GOOGLE_DOCS: "docs.google.com",
        POWERED_BY_IMAGE: "",
        STATIC_W_DOMAIN: "w.ladicdn.com",
        STATIC_S_DOMAIN: "s.ladicdn.com",
        APP_RUNTIME_PREFIX: "_runtime",
        ACTION_TYPE: {
            action: "action",
            hover: "hover",
            complete: "complete"
        },
        DATA_ACTION_TYPE: {
            link: "link",
            section: "section",
            email: "email",
            phone: "phone",
            popup: "popup",
            dropbox: "dropbox",
            hidden_show: "hidden_show",
            collapse: "collapse",
            set_value: "set_value",
            copy_clipboard: "copy_clipboard",
            change_index: "change_index",
            set_style: "set_style",
            lightbox: "lightbox",
            popup_cart: "popup_cart",
            popup_checkout: "popup_checkout"
        },
        DATA_ACTION_LIGHTBOX_TYPE: {
            image: "image",
            video: "video",
            iframe: "iframe"
        },
        COUNTDOWN_TYPE: {
            countdown: "countdown",
            daily: "daily",
            endtime: "endtime"
        },
        COUNTDOWN_ITEM_TYPE: {
            day: "day",
            hour: "hour",
            minute: "minute",
            seconds: "seconds"
        },
        VIDEO_TYPE: {
            youtube: "youtube",
            direct: "direct"
        },
        BACKGROUND_STYLE: {
            solid: "solid",
            gradient: "gradient",
            image: "image",
            video: "video"
        },
        PUBLISH_PLATFORM: {
            ladipage: "LADIPAGE",
            ladipagedns: "LADIPAGEDNS",
            wordpress: "WORDPRESS",
            haravan: "HARAVAN",
            sapo: "SAPO",
            shopify: "SHOPIFY",
            itop: "ITOPWEBSITE",
            ftp: "FTP",
            other: "OTHER"
        },
        SECTION_TYPE: {
            default: "DEFAULT",
            global: "GLOBAL"
        },
        TRACKING_NAME: "ladicid",
        ACCESS_KEY_NAME: "ladiack",
        REF_NAME: "ref",
        PUBLISH_STYLE: {
            desktop_min_width: 768,
            mobile_small_min_width: 320
        },
        ANIMATED_LIST: ["rotate-1", "rotate-2", "rotate-3", "type", "scale", "loading-bar", "slide", "clip", "zoom", "push"],
        POSITION_TYPE: {
            default: "default",
            top: "top",
            bottom: "bottom",
            top_left: "top_left",
            top_center: "top_center",
            top_right: "top_right",
            center_left: "center_left",
            center_right: "center_right",
            bottom_left: "bottom_left",
            bottom_center: "bottom_center",
            bottom_right: "bottom_right"
        },
        COLLECTION_TYPE: {
            carousel: "carousel",
            readmore: "readmore"
        },
        INPUT_TYPE: {
            tel: "tel",
            password: "password",
            text: "text",
            date: "date",
            select_multiple: "select_multiple",
            number: "number",
            email: "email",
            textarea: "textarea",
            select: "select",
            radio: "radio",
            checkbox: "checkbox",
            file: "file",
            product_variant: "product_variant"
        },
        CONTENT_TYPE: {
            form_data: "FORM_DATA",
            form_urlencoded: "X_WWW_FORM_URLENCODED",
            json: "JSON"
        },
        SORT_BY_TYPE: {
            asc: "asc",
            desc: "desc"
        },
        PRODUCT_VARIANT_TYPE: {
            combined: "combined",
            combobox: "combobox",
            label: "label"
        },
        PRODUCT_VARIANT_OPTION_TYPE: {
            color: 1,
            image: 2
        },
        PRODUCT_VARIANT_TITLE: {
            left: "left",
            top: "top"
        },
        FORM_THANKYOU_TYPE: {
            default: "default",
            url: "url",
            popup: "popup"
        },
        GAME_RESULT_TYPE: {
            default: "default",
            popup: "popup"
        },
        PERCENT_TRACKING_SCROLL: [0, 25, 50, 75, 100],
        TIME_ONPAGE_TRACKING: [10, 30, 60, 120, 180, 300, 600],
        FORM_CONFIG_TYPE: {
            email: "EMAIL",
            mail_chimp: "MAIL_CHIMP",
            infusion_soft: "INFUSION_SOFT",
            infusion_soft_ladi: "INFUSION_SOFT_LADI",
            active_campaign: "ACTIVE_CAMPAIGN",
            sendgrid: "SENDGRID",
            hubspot: "HUBSPOT",
            smtp: "SMTP",
            esms: "ESMS",
            get_response: "GET_RESPONSE",
            convertkit: "CONVERTKIT",
            ladiflow: "LADIFLOW",
            telegram: "TELEGRAM",
            slack: "SLACK",
            zalo_zns: "ZALO_ZNS",
            mautic: "MAUTIC",
            google_sheet: "GOOGLE_SHEET",
            google_form: "GOOGLE_FORM",
            custom_api: "CUSTOM_API",
            ladisales: "LADISALES",
            haravan: "HARAVAN",
            sapo: "SAPO",
            shopify: "SHOPIFY",
            nhanh_vn: "NHANH_VN",
            google_recaptcha: "GOOGLE_RECAPTCHA",
            google_recaptcha_checkbox: "GOOGLE_RECAPTCHA_CHECKBOX",
            google_recaptcha_enterprise: "GOOGLE_RECAPTCHA_ENTERPRISE",
            kiotviet: "KIOTVIET",
            wordpress: "WORDPRESS",
            metu: "METU",
            ladichat: "LADICHAT",
            shopping: "SHOPPING",
            blog: "BLOG",
            conversion_api: "CONVERSION_API",
            popupx: "POPUPX"
        },
        FORM_UPLOAD_FILE_LENGTH: 20,
        FORM_UPLOAD_FILE_SIZE: 25,
        CART_LAYOUT: {
            editable: "editable",
            viewonly: "viewonly"
        },
        WIDTH_SECTION_RESIZE: {},
        RESIZE_ADD_PIXEL: 300,
        RESIZE_ADD_PIXEL_THUMB: 50,
        RESIZE_RANGE: 50,
        TOOLTIP_TYPE: {
            default: "default",
            info: "info",
            success: "success",
            error: "error",
            notice: "notice"
        },
        TOOLTIP_POSITION: {
            top_left: "top_left",
            top_middle: "top_middle",
            top_right: "top_right",
            bottom_left: "bottom_left",
            bottom_middle: "bottom_middle",
            bottom_right: "bottom_right",
            left_top: "left_top",
            left_middle: "left_middle",
            left_bottom: "left_bottom",
            right_top: "right_top",
            right_middle: "right_middle",
            right_bottom: "right_bottom"
        },
        TOOLTIP_SIZE: {
            small: "small",
            medium: "medium",
            big: "big"
        },
        STORY_PAGE: {
            horizontal: "horizontal",
            vertical: "vertical",
            none: "none"
        },
        COMBOBOX_TYPE: {
            delivery_method: "delivery_method"
        },
        PRODUCT_TYPE: {
            event: "Event",
            service: "Service",
            physical: "Physical"
        }
    }, this.runtime = {
        backdrop_popup_id: "backdrop-popup",
        backdrop_dropbox_id: "backdrop-dropbox",
        lightbox_screen_id: "lightbox-screen",
        builder_section_popup_id: "SECTION_POPUP",
        builder_section_background_id: "BODY_BACKGROUND",
        ladipage_powered_by_classname: "ladipage_powered_by",
        current_element_mouse_down_carousel: null,
        current_element_mouse_down_carousel_position_x: 0,
        current_element_mouse_down_carousel_diff: 40,
        current_element_mouse_down_gallery_control: null,
        current_element_mouse_down_gallery_control_time: 0,
        current_element_mouse_down_gallery_control_time_click: 300,
        current_element_mouse_down_gallery_control_position_x: 0,
        current_element_mouse_down_gallery_view: null,
        current_element_mouse_down_gallery_view_position_x: 0,
        current_element_mouse_down_gallery_view_diff: 40,
        scroll_show_popup: {},
        scroll_depth: [],
        scroll_to_section: {},
        send_request_response: {},
        is_mobile_only: !1,
        interval_countdown: null,
        interval_gallery: null,
        timeout_gallery: {},
        interval_carousel: null,
        timenext_carousel: {},
        time_click: 300,
        isClient: !1,
        isDesktop: !0,
        isBrowserDesktop: !0,
        isIE: !1,
        isLoadHtmlGlobal: !1,
        isYouTubeIframeAPIReady: !1,
        isLoadYouTubeIframeAPI: !1,
        isVideoButtonUnmute: !0,
        device: this.const.DESKTOP,
        ladipage_id: null,
        list_dataset_load: [],
        list_collapse: {},
        list_scroll_func: {},
        list_loaded_func: [],
        list_show_popup_func: {},
        list_youtube_ready_exec: [],
        list_scrolling_exec: {},
        list_scrolled_exec: {},
        list_lightbox_id: {},
        list_set_value_name_country: ["ward", "district", "state", "country"],
        tmp: {},
        tabindexForm: 0,
        eventData: {},
        eventDataGlobal: {},
        timenow: 0,
        widthScrollBar: 0,
        replaceStr: {},
        replacePrefixStart: "{{",
        replacePrefixEnd: "}}",
        replaceNewPrefixStart: "!::",
        replaceNewPrefixEnd: "::!"
    }, this.const.WIDTH_SECTION_RESIZE[this.const.DESKTOP] = 1440, this.const.WIDTH_SECTION_RESIZE[this.const.MOBILE] = 768
}, LadiPageScriptV2.prototype.isObject = function (t) {
    return !this.isFunction(t) && !this.isArray(t) && t instanceof Object
}, LadiPageScriptV2.prototype.isArray = function (t) {
    return t instanceof Array
}, LadiPageScriptV2.prototype.isFunction = function (t) {
    return "function" == typeof t || t instanceof Function
}, LadiPageScriptV2.prototype.isBoolean = function (t) {
    return "boolean" == typeof t
}, LadiPageScriptV2.prototype.isString = function (t) {
    return "string" == typeof t || t instanceof String
}, LadiPageScriptV2.prototype.isEmpty = function (t) {
    return !!this.isNull(t) || (this.isString(t) ? 0 == (t = t.trim())
        .length || "undefined" == t.toLowerCase() : !!this.isArray(t) && 0 == t.length)
}, LadiPageScriptV2.prototype.isNull = function (t) {
    return void 0 === t || void 0 == t
}, LadiPageScriptV2.prototype.equals = function (t, e) {
    return typeof t == typeof e && JSON.stringify(t) == JSON.stringify(e)
}, LadiPageScriptV2.prototype.copy = function (t) {
    return this.isNull(t) ? t : JSON.parse(JSON.stringify(t))
};
var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (t) {
            var e, i, a, n, o, r, s, l = "",
                d = 0;
            for (t = Base64._utf8_encode(t); d < t.length;) n = (e = t.charCodeAt(d++)) >> 2, o = (3 & e) << 4 | (i = t.charCodeAt(d++)) >> 4, r = (15 & i) << 2 | (a = t.charCodeAt(d++)) >> 6, s = 63 & a, isNaN(i) ? r = s = 64 : isNaN(a) && (s = 64), l = l + Base64._keyStr.charAt(n) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(r) + Base64._keyStr.charAt(s);
            return l
        },
        decode: function (t) {
            var e, i, a, n, o, r, s = "",
                l = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < t.length;) e = Base64._keyStr.indexOf(t.charAt(l++)) << 2 | (n = Base64._keyStr.indexOf(t.charAt(l++))) >> 4, i = (15 & n) << 4 | (o = Base64._keyStr.indexOf(t.charAt(l++))) >> 2, a = (3 & o) << 6 | (r = Base64._keyStr.indexOf(t.charAt(l++))), s += String.fromCharCode(e), 64 != o && (s += String.fromCharCode(i)), 64 != r && (s += String.fromCharCode(a));
            return s = Base64._utf8_decode(s)
        },
        _utf8_encode: function (t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", i = 0; i < t.length; i++) {
                var a = t.charCodeAt(i);
                a < 128 ? e += String.fromCharCode(a) : a > 127 && a < 2048 ? (e += String.fromCharCode(a >> 6 | 192), e += String.fromCharCode(63 & a | 128)) : (e += String.fromCharCode(a >> 12 | 224), e += String.fromCharCode(a >> 6 & 63 | 128), e += String.fromCharCode(63 & a | 128))
            }
            return e
        },
        _utf8_decode: function (t) {
            for (var e = "", i = 0, a = 0, n = 0, o = 0; i < t.length;)(a = t.charCodeAt(i)) < 128 ? (e += String.fromCharCode(a), i++) : a > 191 && a < 224 ? (o = t.charCodeAt(i + 1), e += String.fromCharCode((31 & a) << 6 | 63 & o), i += 2) : (o = t.charCodeAt(i + 1), n = t.charCodeAt(i + 2), e += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & n), i += 3);
            return e
        }
    },
    LadiPageScript = LadiPageScript || new LadiPageScriptV2;
LadiPageScript.init();
var LadiFormApi = LadiFormApi || {},
    parseFloatLadiPage = function (t, e) {
        var i = parseFloat(t);
        try {
            return parseFloat(LadiPageScript.formatNumber(i, 21, null, e || 6))
        } catch (t) {
            return NaN
        }
    },
    decodeURIComponentLadiPage = function (t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return t
        }
    };
LadiPageScriptV2.prototype.loadDataset = function (t, e, i, a, n, o, r, s) {
    this.isArray(this.runtime.list_dataset_load) && this.runtime.list_dataset_load.push({
        element_id: t,
        dataset_id: e,
        dataset_type: i,
        sort_name: a,
        sort_by: n,
        isFirst: o,
        is_client: r,
        callback: s
    })
}, LadiPageScriptV2.prototype.loadHtmlGlobal = function (t) {
    for (var e = this, i = 0, a = [], n = document.querySelectorAll(".ladi-section[data-global-id]"), o = 0; o < n.length; o++) {
        var r = n[o],
            s = r.getAttribute("data-global-id");
        e.isEmpty(s) || a.push({
            id: r.id,
            data_global_id: s
        })
    }
    var l = function (n) {
        e.isObject(n) && Object.keys(n)
            .forEach(function (t) {
                e.runtime.eventDataGlobal[t] = n[t]
            });
        i == a.length && function (t) {
            for (var i = [], a = document.querySelectorAll("div.ladi-section-global[data-country-file]"), n = 0; n < a.length; n++) {
                var o = a[n].getAttribute("data-country-file");
                e.isEmpty(o) || (o = (o = o.split(";"))
                    .removeSpace(), i = i.concat(o))
            }
            if ((i = i.unique())
                .length > 0 && e.runtime.hasOwnProperty("cdn_url") && e.runtime.hasOwnProperty("version")) {
                var r = 0;
                i.forEach(function (a) {
                    var n = e.runtime.cdn_url + a + ".js?v=" + e.runtime.version;
                    e.loadScript(n, null, !0, function (a) {
                        ++r < i.length || (e.runtime.load_location || (e.runtime.load_location = !0, e.runAfterLocation()), e.isFunction(t) && t())
                    })
                })
            } else e.isFunction(t) && t()
        }(function () {
            document.querySelectorAll('.ladi-section-global[data-dataset="true"]')
                .length > 0 && !e.runtime.has_dataset && (e.runtime.has_dataset = !0, e.runtime.hasOwnProperty("cdn_url") && e.runtime.hasOwnProperty("version") && e.loadScript(e.runtime.cdn_url + "dataset.min.js?v=" + e.runtime.version)), e.runtime.isLoadHtmlGlobal = !0, e.run(t)
        })
    };
    a.forEach(function (t) {
        var a = t.id,
            n = document.getElementById(a),
            o = LadiPageScript.const.API_SECTION_GLOBAL_HTML.format(e.runtime.store_id, t.data_global_id);
        e.sendRequest("GET", o, null, !0, null, function (o, r, s) {
            if (s.readyState == XMLHttpRequest.DONE) {
                var d = document.createElement("div");
                d.innerHTML = o, LadiPageScript.isEmpty(d.querySelector('div.ladi-section-global[data-id="' + t.id + '"] .ladi-section[data-global-id="' + t.data_global_id + '"]')) ? n.parentElement.removeChild(n) : n.outerHTML = o,
                    function (t) {
                        i++;
                        var a = document.querySelector('.ladi-section-global[data-id="' + t + '"] > script');
                        if (e.isEmpty(a)) l();
                        else {
                            var n = null;
                            try {
                                n = JSON.parse(a.innerHTML), n = e.decodeValue(n)
                            } catch (t) {}
                            a.parentElement.removeChild(a), l(n)
                        }
                    }(a)
            }
        })
    }), l()
}, LadiPageScriptV2.prototype.postMessageWindow = function (t, e, i) {
    t.postMessage(JSON.stringify(e), i)
}, LadiPageScriptV2.prototype.updateHeightElement = function (t, e, i, a, n, o, r) {
    var s = this,
        l = [];
    if ("fixed" != getComputedStyle(e)
        .position) {
        for (var d = [], c = e.parentElement.children, p = 0; p < c.length; p++) c[p].id != e.id && c[p].classList.contains("ladi-element") && d.push(c[p]);
        var u = "style_update_height_element";
        if (t) {
            var m = "#" + s.runtime.builder_section_popup_id + " > .ladi-container > .ladi-element { max-height: none !important;}";
            s.createStyleElement(u, m)
        }
        for (var _ = function (t) {
                var e = !s.isArray(r) || -1 != r.indexOf(t.id);
                if ((e = e ? t.id != s.runtime.builder_section_popup_id : e) && "fixed" == getComputedStyle(t)
                    .position && (!t.classList.contains("ladi-element") || 0 == t.getElementsByClassName("ladi-popup")
                        .length) && (e = !1, t.classList.contains("ladi-section"))) {
                    var i = s.runtime.eventData[t.id],
                        a = s.runtime.isDesktop ? s.const.DESKTOP : s.const.MOBILE;
                    s.isEmpty(i) || i[a + ".option.sticky_position"] != s.const.POSITION_TYPE.top || (e = !0)
                }
                return e
            }, y = n - a, g = parseFloatLadiPage(getComputedStyle(e)
                .top) || 0, f = function (t) {
                s.runTimeout(function () {
                    t.classList.remove("transition-parent-collapse-top")
                }, 1e3 * parseFloatLadiPage(getComputedStyle(t)
                    .transitionDuration))
            }, h = 0; h < d.length; h++)
            if (_(d[h])) {
                var v = parseFloatLadiPage(getComputedStyle(d[h])
                    .top) || 0;
                v >= g + a && (o && (d[h].classList.add("transition-parent-collapse-top"), f(d[h])), d[h].style.setProperty("top", (parseFloatLadiPage(v + y) || 0) + "px"), l.push(d[h].id))
            }
        var E = 0,
            P = 0;
        if (!this.isEmpty(i) && 0 != y && _(i) && (E = parseFloatLadiPage(getComputedStyle(i)
                .height) || 0, P = parseFloatLadiPage(E + y) || 0, o && (i.classList.add("transition-parent-collapse-height"), s.runTimeout(function () {
                i.classList.remove("transition-parent-collapse-height")
            }, 1e3 * parseFloatLadiPage(getComputedStyle(i)
                .transitionDuration))), i.style.setProperty("height", P + "px"), l.push(i.id)), E != P) {
            var L = this.findAncestor(i.parentElement, "ladi-element");
            this.isEmpty(L) && (L = this.findAncestor(i.parentElement, "ladi-section")), l = l.concat(this.updateHeightElement(!1, i, L, E, P, o, r))
        }
        if (t && !this.runtime.tmp.is_quick_collapse_starting) {
            var A = document.getElementById(u);
            this.isEmpty(A) || A.parentElement.removeChild(A)
        }
    }
    return l.unique()
}, LadiPageScriptV2.prototype.showParentVisibility = function (t, e) {
    var i = this.findAncestor(t, "ladi-popup");
    if (!this.isEmpty(i) && (i = this.findAncestor(i, "ladi-element"), !this.isEmpty(i))) return "none" == getComputedStyle(i)
        .display && i.classList.add("hide-visibility"), this.isFunction(e) && e(), void i.classList.remove("hide-visibility");
    this.isFunction(e) && e()
}, LadiPageScriptV2.prototype.pauseAllVideo = function (t) {
    var e = document.getElementById(this.runtime.lightbox_screen_id)
        .getElementsByClassName("lightbox-close")[0];
    if (!this.isEmpty(e)) return e.click(), this.pauseAllVideo(t);
    delete this.runtime.tmp.gallery_playing_video;
    for (var i = (t = t || document)
            .querySelectorAll(".iframe-video-preload:not(.no-pause)"), a = 0; a < i.length; a++) this.runEventReplayVideo(i[a].id, i[a].getAttribute("data-video-type"), !1)
}, LadiPageScriptV2.prototype.runEventReplayVideo = function (t, e, i) {
    var a = this,
        n = document.getElementById(t),
        o = null;
    if (!a.isEmpty(n)) {
        var r = document.getElementById(t + "_button_unmute"),
            s = a.isEmpty(r);
        if (e == a.const.VIDEO_TYPE.youtube) {
            o = i ? "playVideo" : "pauseVideo";
            var l = !1;
            if (a.runtime.isYouTubeIframeAPIReady) {
                var d = window.YT.get(t);
                if (!a.isEmpty(d)) {
                    if (s && i && a.isFunction(d.unMute) && d.unMute(), !s && i && a.isFunction(d.mute) && d.mute(), !a.isFunction(d[o])) return void a.runTimeout(function () {
                        a.runEventReplayVideo(t, e, i)
                    }, 100);
                    d[o](), l = !0
                }
            }
            l || (s && i && a.postMessageWindow(n.contentWindow, {
                event: "command",
                func: "unMute",
                args: []
            }, "*"), !s && i && a.postMessageWindow(n.contentWindow, {
                event: "command",
                func: "mute",
                args: []
            }, "*"), a.postMessageWindow(n.contentWindow, {
                event: "command",
                func: o,
                args: []
            }, "*"))
        }
        e == a.const.VIDEO_TYPE.direct && (o = i ? "play" : "pause", s && i && (n.muted = !1), !s && i && (n.muted = !0), a.isFunction(n[o]) && n[o]()), i ? (n.classList.remove("ladi-hidden"), a.isEmpty(r) || r.style.removeProperty("display")) : (n.classList.add("ladi-hidden"), a.isEmpty(r) || r.style.setProperty("display", "none"))
    }
}, LadiPageScriptV2.prototype.runEventPlayVideo = function (t, e, i, a, n, o, r, s, l, d) {
    var c = this,
        p = c.runtime.isVideoButtonUnmute;
    (c.runtime.isDesktop || r || s || n || a) && (p = !1);
    var u = function (t, i) {
            if (p && !t.hasAttribute("data-remove-button-unmute")) {
                var a = t.id + "_button_unmute",
                    n = document.getElementById(a);
                c.isEmpty(n) && ((n = document.createElement("div"))
                    .id = a, n.innerHTML = "<div></div>", n.className = "button-unmute ladi-hidden", n.addEventListener("click", function (i) {
                        if (i.stopPropagation(), t = document.getElementById(t.id), e == c.const.VIDEO_TYPE.youtube) {
                            var a = !1;
                            if (c.runtime.isYouTubeIframeAPIReady) {
                                var o = window.YT.get(t.id);
                                !c.isEmpty(o) && c.isFunction(o.unMute) && (o.unMute(), a = !0)
                            }
                            a || c.postMessageWindow(t.contentWindow, {
                                event: "command",
                                func: "unMute",
                                args: []
                            }, "*")
                        }
                        e == c.const.VIDEO_TYPE.direct && (t.muted = !1), n.parentElement.removeChild(n), t.setAttribute("data-remove-button-unmute", !0)
                    }), t.parentElement.appendChild(n)), i && n.classList.remove("ladi-hidden");
                var o = c.findAncestor(t, "lightbox-screen");
                c.isEmpty(o) || (n.style.setProperty("width", getComputedStyle(t)
                    .width), n.style.setProperty("height", getComputedStyle(t)
                    .height))
            }
        },
        m = document.getElementById(t);
    if (!c.isEmpty(m)) {
        var _ = c.findAncestor(m, "ladi-video");
        c.isEmpty(_) || (_ = c.findAncestor(_, "ladi-element")), !a || o || c.isEmpty(_) || (_.classList.add("pointer-events-none"), m.classList.add("no-pause")), r && m.classList.add("ladi-hidden");
        var y = "";
        if (!c.isEmpty(_)) {
            var g = _.getElementsByClassName("ladi-video-background")[0];
            if (!c.isEmpty(g)) {
                var f = getComputedStyle(g)
                    .backgroundImage;
                f.toLowerCase()
                    .startsWith('url("') && f.toLowerCase()
                    .endsWith('")') && (f = (f = f.substr('url("'.length))
                        .substr(0, f.length - '")'.length), c.isEmpty(f) || (y = f))
            }
        }
        if (e == c.const.VIDEO_TYPE.youtube) {
            var h = c.getVideoId(e, i),
                v = function () {
                    try {
                        if (c.runtime.isLoadYouTubeIframeAPI && c.runtime.isYouTubeIframeAPIReady || !c.isObject(window.YT) || !c.isFunction(window.YT.Player) || (c.runtime.isLoadYouTubeIframeAPI = !0, c.runtime.isYouTubeIframeAPIReady = !0), c.runtime.isLoadYouTubeIframeAPI || (c.runtime.isLoadYouTubeIframeAPI = !0, window.onYouTubeIframeAPIReady = function () {
                                c.runtime.isYouTubeIframeAPIReady = !0;
                                for (; c.runtime.list_youtube_ready_exec.length > 0;) c.runtime.list_youtube_ready_exec.shift()()
                            }, c.loadScript("https://www.youtube.com/iframe_api")), !c.runtime.isYouTubeIframeAPIReady) return void c.runtime.list_youtube_ready_exec.push(v);
                        m.outerHTML = m.outerHTML.replaceAll("<iframe", "<div")
                            .replaceAll("</iframe>", "</div>"), m = document.getElementById(t), n && m.classList.add("opacity-0");
                        var e = function () {
                                n && (m = document.getElementById(t))
                                    .classList.remove("opacity-0")
                            },
                            i = e,
                            _ = function (e) {
                                m = document.getElementById(t);
                                var i = window.YT.get(t);
                                c.isEmpty(i) || c.isEmpty(m) ? c.runTimeout(_, 100) : (c.runResizeAll(), a || p ? i.mute() : i.unMute(), r || s || i.playVideo(), c.isFunction(d) && d(), u(m))
                            };
                        new window.YT.Player(t, {
                            videoId: h,
                            playerVars: {
                                rel: 0,
                                modestbranding: 0,
                                playsinline: n || a || l || p ? 1 : 0,
                                controls: !n && o ? 1 : 0
                            },
                            events: {
                                onReady: _,
                                onStateChange: function (i) {
                                    if (i.data == window.YT.PlayerState.PLAYING) {
                                        if (m = document.getElementById(t), n) {
                                            var a = function () {
                                                window.YT.get(t)
                                                    .getCurrentTime() >= .1 ? e() : c.runTimeout(a, 100)
                                            };
                                            a()
                                        }
                                        u(m, !0);
                                        var o = document.getElementById(t + "_button_unmute");
                                        c.isEmpty(o) || window.YT.get(t)
                                            .mute()
                                    }
                                    i.data == window.YT.PlayerState.ENDED && window.YT.get(t)
                                        .playVideo()
                                },
                                onError: i
                            }
                        })
                    } catch (t) {}
                };
            v()
        }
        if (e == c.const.VIDEO_TYPE.direct) {
            c.isEmpty(y) || m.setAttribute("poster", y), m.setAttribute("preload", "auto"), m.setAttribute("controlslist", "nodownload"), m.setAttribute("loop", ""), r || s || m.setAttribute("autoplay", ""), (n || a || l || p) && (m.setAttribute("playsinline", ""), m.setAttribute("webkit-playsinline", "")), !n && o && m.setAttribute("controls", ""), a || p ? m.setAttribute("muted", "") : m.removeAttribute("muted"), n && m.classList.add("opacity-0");
            var E = function () {
                n && (m = document.getElementById(t))
                    .classList.remove("opacity-0")
            };
            m.removeAttribute("src"), m.setAttribute("data-src", i), m.outerHTML = m.outerHTML.replaceAll("data-src=", "src="), m = document.getElementById(t), c.isFunction(d) && d(m), m.addEventListener("loadedmetadata", function (t) {
                u(m)
            }), m.addEventListener("error", E), m.addEventListener("playing", function (t) {
                if (n) {
                    var e = function () {
                        m.currentTime >= .1 ? E() : c.runTimeout(e, 100)
                    };
                    e()
                }
                u(m, !0);
                var i = document.getElementById(m.id + "_button_unmute");
                c.isEmpty(i) || (m.muted = !0)
            })
        }
    }
}, LadiPageScriptV2.prototype.playVideo = function (t, e, i, a, n, o) {
    var r = document.getElementById(t);
    if (!this.isEmpty(r)) {
        var s = document.getElementById(t + "_player");
        if (o || n || this.pauseAllVideo(), this.isEmpty(s)) {
            var l = r.getElementsByClassName("ladi-video")[0],
                d = t + "_player";
            e == this.const.VIDEO_TYPE.youtube && (l.innerHTML = l.innerHTML + '<iframe id="' + d + '" class="iframe-video-preload" data-video-type="' + e + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', this.runEventPlayVideo(d, e, i, n, !1, a, o)), e == this.const.VIDEO_TYPE.direct && (l.innerHTML = l.innerHTML + '<video id="' + d + '" class="iframe-video-preload" data-video-type="' + e + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>', this.runEventPlayVideo(d, e, i, n, !1, a, o))
        } else this.runEventReplayVideo(s.id, e, !0)
    }
}, LadiPageScriptV2.prototype.checkResizeImage = function (t) {
    var e = [".jpg", ".jpeg", ".png"],
        i = function (t) {
            for (var i = !1, a = 0; a < e.length; a++)
                if (t.endsWith(e[a])) {
                    i = !0;
                    break
                }
            return i
        };
    if (!i(t.toLowerCase())) {
        var a = this.getElementAHref(t, !0);
        return a.search = "", i(a.href)
    }
    return !0
}, LadiPageScriptV2.prototype.getOptimizeImage = function (t, e, i, a, n, o, r) {
    if (this.isEmpty(t) || !this.isString(t)) return t;
    var s = t.split("/"),
        l = s.indexOf("");
    if (-1 != l && s.length > l + 1 && (s[l + 1] = s[l + 1].toLowerCase()), l = s.indexOf(this.const.STATIC_W_DOMAIN.toLowerCase()), this.checkResizeImage(t) && -1 != l && (s.length == l + 3 || s.length == l + 6 && "ls" == s[3] && "product" == s[5] || s.length == l + 4 && "luid" == s[3] && "avatar" == s[4] || s.length == l + 4 && "rbg" == s[4])) {
        var d = s[l + 1].toLowerCase(),
            c = !0;
        if (d.startsWith("s")) {
            var p = d.split("x");
            2 == p.length && parseFloatLadiPage(p[1]) == p[1] && (c = !1)
        }
        if (c) {
            if (r || n) {
                if (e = parseInt(e) || 0, i = parseInt(i) || 0, a) {
                    var u = this.const.RESIZE_RANGE + (o ? this.const.RESIZE_ADD_PIXEL_THUMB : this.const.RESIZE_ADD_PIXEL);
                    (e <= 0 || i <= 0) && (u *= 2), e = e - e % this.const.RESIZE_RANGE + u, i = i - i % this.const.RESIZE_RANGE + u
                }
            } else e = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen], i = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen];
            s.insert(l + 1, "s" + e + "x" + i)
        }
    }
    return t = s.join("/")
}, LadiPageScriptV2.prototype.historyReplaceState = function (t) {
    try {
        window.history.replaceState(null, null, t)
    } catch (t) {}
}, LadiPageScriptV2.prototype.resetViewport = function () {
    this.isEmpty(this.runtime.tmp.timeoutViewport) || this.removeTimeout(this.runtime.tmp.timeoutViewport), this.isFunction(window.ladi_viewport) && (this.runtime.tmp.timeoutViewport = this.runTimeout(window.ladi_viewport, 10))
}, LadiPageScriptV2.prototype.runStoryPage = function () {
    var t = this,
        e = t.runtime.story_page;
    if (this.isObject(e)) {
        var i = document.getElementsByClassName("ladi-wraper")[0];
        if (!this.isEmpty(i)) {
            var a = document.getElementsByClassName("ladi-story-page-progress-bar")[0];
            this.isEmpty(a) || a.parentElement.removeChild(a);
            var n = document.querySelectorAll('.ladi-section:not([id="' + this.runtime.builder_section_popup_id + '"]):not([id="' + this.runtime.builder_section_background_id + '"])');
            if (0 != n.length) {
                (a = document.createElement("div"))
                .className = "ladi-story-page-progress-bar";
                for (var o = null, r = (n[0], function (e, i) {
                        e.addEventListener("click", function (e) {
                            e.stopPropagation(), t.removeTimeout(t.runtime.tmp.story_page_next_timeout_id), window.ladi(i.id, i)
                                .scroll()
                        })
                    }), s = 0; s < n.length; s++) {
                    var l = document.createElement("div");
                    l.className = "ladi-story-page-progress-bar-item", l.style.setProperty("width", "calc(100% / " + n.length + " - 10px)"), r(l, n[s]), a.appendChild(l), 0 == s && (o = l)
                }
                i.appendChild(a), t.runtime.tmp.story_page_mouse_down = !1, t.runtime.tmp.story_page_current_page = 1;
                var d = function (i, a) {
                        if (!t.isEmpty(i)) {
                            a && i.click();
                            for (var n = i; !t.isEmpty(n.previousElementSibling);)(n = n.previousElementSibling)
                                .classList.add("active");
                            for (var o = i; !t.isEmpty(o.nextElementSibling);)(o = o.nextElementSibling)
                                .classList.remove("active");
                            i.classList.remove("active");
                            var r = i.parentElement.getElementsByTagName("span")[0];
                            t.isEmpty(r) || r.parentElement.removeChild(r), r = document.createElement("span"), i.appendChild(r), e.is_autoplay || r.style.setProperty("width", "100%")
                        }
                    },
                    c = function () {
                        if (e.is_autoplay) {
                            var i = 300,
                                a = null;
                            if (t.isEmpty(t.runtime.tmp.current_default_popup_id) && !t.runtime.tmp.story_page_mouse_down && !t.runtime.tmp.story_page_scroll && (a = document.querySelector(".ladi-story-page-progress-bar-item span"), !t.isEmpty(a))) {
                                var n = parseFloatLadiPage(a.style.getPropertyValue("width")) || 0;
                                n = (n = ((n = 1e3 * e.autoplay_time / (100 / n)) + i) / (1e3 * e.autoplay_time) * 100) > 100 ? 100 : n, a.style.setProperty("width", n + "%"), n >= 100 && (t.runtime.tmp.story_page_next_timeout_id = t.runTimeout(function () {
                                    t.isEmpty(a.parentElement) || d(a.parentElement.nextElementSibling, !0)
                                }, i), i *= 2)
                            }
                            t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, i)
                        }
                    };
                d(o, !1), t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, 300), document.addEventListener("mousedown", function (e) {
                    t.runtime.tmp.story_page_mouse_down = !0
                }), document.addEventListener("touchstart", function (e) {
                    t.runtime.tmp.story_page_mouse_down = !0
                }, t.runtime.scrollEventPassive), document.addEventListener("mouseup", function (e) {
                    t.runtime.tmp.story_page_mouse_down = !1
                }), document.addEventListener("touchend", function (e) {
                    t.runtime.tmp.story_page_mouse_down = !1
                }), i.addEventListener("scroll", function (a) {
                    t.isEmpty(t.runtime.tmp.current_default_popup_id) && (t.runtime.tmp.story_page_scroll = !0, t.removeTimeout(t.runtime.tmp.story_page_scroll_timeout_id), t.removeTimeout(t.runtime.tmp.story_page_timeout_id), t.runtime.tmp.story_page_scroll_timeout_id = t.runTimeout(function () {
                        var a = 0,
                            n = e.type == t.const.STORY_PAGE.horizontal ? i.scrollLeft / i.clientWidth : i.scrollTop / i.clientHeight;
                        if ((n = Math.floor(n + 1.5)) != t.runtime.tmp.story_page_current_page) {
                            t.runtime.tmp.story_page_current_page = n;
                            var o = document.querySelector(".ladi-story-page-progress-bar-item:nth-child(" + n + ")");
                            t.removeTimeout(t.runtime.tmp.story_page_next_timeout_id), d(o, !1), a = 100
                        }
                        t.runtime.tmp.story_page_scroll = !1, delete t.runtime.tmp.story_page_scroll_timeout_id, t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, a)
                    }, 300))
                }, t.runtime.scrollEventPassive)
            }
        }
    }
}, LadiPageScriptV2.prototype.runResizeSectionBackground = function () {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    try {
        for (var e = document.querySelectorAll(".ladi-section .ladi-section-background iframe.ladi-section-background-video"), i = 0; i < e.length; i++) {
            var a = e[i],
                n = parseFloatLadiPage(a.getAttribute("width")) || 0,
                o = parseFloatLadiPage(a.getAttribute("height")) || 0;
            if (!(n <= 0 || o <= 0)) {
                var r = t.findAncestor(a, "ladi-section-background"),
                    s = r.clientWidth,
                    l = o / n * s;
                l < r.clientHeight && (s = r.clientHeight / l * s, l = r.clientHeight);
                var d = (r.clientHeight - l) / 2,
                    c = (r.clientWidth - s) / 2;
                a.style.setProperty("top", (parseFloatLadiPage(d) || 0) + "px"), a.style.setProperty("left", (parseFloatLadiPage(c) || 0) + "px"), a.style.setProperty("width", (parseFloatLadiPage(s) || 0) + "px"), a.style.setProperty("height", (parseFloatLadiPage(l) || 0) + "px")
            }
        }
    } catch (t) {}
}, LadiPageScriptV2.prototype.runResizeAll = function () {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    try {
        t.isFunction(window.ladi_viewport) && window.ladi_viewport(), t.runtime.tmp.generateCart();
        for (var e = document.querySelectorAll("#" + t.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), i = 0; i < e.length; i++) "none" != getComputedStyle(e[i])
            .display && window.ladi(e[i].id)
            .show(!0);
        t.runResizeSectionBackground()
    } catch (t) {}
}, LadiPageScriptV2.prototype.runEventResize = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.isEmpty(e.runtime.tmp.timeoutResizeAll) || e.removeTimeout(e.runtime.tmp.timeoutResizeAll), e.runtime.tmp.timeoutResizeAll = e.runTimeout(e.runResizeAll, 10)
}, LadiPageScriptV2.prototype.runEventOrientationChange = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.runEventResize(t)
}, LadiPageScriptV2.prototype.runAfterLocation = function () {
    var t = this;
    if (t instanceof LadiPageScriptV2 || (t = LadiPageScript), t.runtime.isRun) {
        for (; t.runtime.tmp.listAfterLocation.length > 0;) {
            t.runtime.tmp.listAfterLocation.shift()()
        }
        t.reloadFeeShipping()
    } else t.runTimeout(t.runAfterLocation, 100)
}, LadiPageScriptV2.prototype.removeLazyloadPopup = function (t) {
    var e = document.getElementById(t);
    if (!this.isEmpty(e))
        for (var i = e.getElementsByClassName("ladi-lazyload"); i.length > 0;) i[0].classList.remove("ladi-lazyload")
}, LadiPageScriptV2.prototype.reloadLazyload = function (t) {
    var e = this;
    if (e instanceof LadiPageScriptV2 || (e = LadiPageScript), !e.runtime.tmp.is_quick_collapse_starting) {
        var i = [];
        if (t && e.isObject(e.runtime.story_page)) {
            var a = document.getElementsByClassName("ladi-section")[0];
            if (!e.isEmpty(a))
                for (i = a.getElementsByClassName("ladi-lazyload"); i.length > 0;) i[0].classList.remove("ladi-lazyload")
        } else {
            i = document.getElementsByClassName("ladi-lazyload");
            for (var n = [], o = 0; o < i.length; o++) {
                var r = e.getElementBoundingClientRect(i[o])
                    .y + window.scrollY;
                window.scrollY + e.getHeightDevice() > r && r + i[o].offsetHeight > window.scrollY && n.push(i[o])
            }
            n.forEach(function (t) {
                t.classList.remove("ladi-lazyload")
            });
            for (var s = document.querySelectorAll(".ladi-gallery .ladi-gallery-view-item.selected:not(.ladi-lazyload)"), l = 0; l < s.length; l++)
                if (e.isEmpty(s[l].getAttribute("data-lazyload"))) {
                    s[l].setAttribute("data-lazyload", !0);
                    for (var d = s[l].parentElement.getElementsByClassName("ladi-lazyload"); d.length > 0;) d[0].classList.remove("ladi-lazyload")
                }
        }
    }
}, LadiPageScriptV2.prototype.documentLoaded = function () {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    var e = t.getURLSearchParams(null, null, !0),
        i = e.ladishow,
        a = e.ladihide,
        n = e.laditop,
        o = window.location.hash;
    t.isEmpty(i) ? i = [] : t.isArray(i) || (i = i.split(",")
        .removeSpace()), t.isEmpty(a) ? a = [] : t.isArray(a) || (a = a.split(",")
        .removeSpace()), t.isEmpty(n) ? n = [] : t.isArray(n) || (n = n.split(",")
        .removeSpace()
        .reverse());
    try {
        var r = window.ladi("LADI_CAMP_END_DATE")
            .get_cookie(),
            s = window.ladi("LADI_CAMP_CONFIG")
            .get_cookie();
        if (!t.isEmpty(r) && !t.isEmpty(s)) {
            s = JSON.parse(Base64.decode(s));
            var l = ((r = parseInt(r) || 0) - Date.now()) / 24 / 60 / 60 / 1e3;
            if (l > 0 && t.isArray(s.dynamic_content.cookie)) {
                var d = [];
                s.dynamic_content.cookie.forEach(function (e) {
                    var i = e.split("=");
                    2 != (i = i.removeSpace())
                        .length || t.isEmpty(i[0]) || t.isEmpty(i[1]) || d.push({
                            name: i[0],
                            value: i[1]
                        })
                }), d.forEach(function (t) {
                    window.ladi(t.name)
                        .set_cookie(t.value, l)
                })
            }
            a = s.dynamic_content.hide || [], i = s.dynamic_content.show || [], n = s.dynamic_content.top || [], t.isArray(s.dynamic_content.scroll) && s.dynamic_content.scroll.length > 0 && (o = "#" + s.dynamic_content.scroll.pop())
        }
    } catch (t) {}
    var c = null,
        p = [];
    if (i.forEach(function (e) {
            var i = document.getElementById(e);
            t.isEmpty(i) || i.getElementsByClassName("ladi-popup")
                .length > 0 && p.push(e)
        }), p.length > 0 && !t.isEmpty(o)) try {
        c = document.querySelector(o), t.isEmpty(c) || t.isEmpty(c.id) || !c.classList.contains("ladi-section") || (window.ladi(c.id)
            .scroll(!1, !0), o = null)
    } catch (t) {}
    if (a.forEach(function (t) {
            window.ladi(t)
                .hide()
        }), i.forEach(function (t) {
            window.ladi(t)
                .show()
        }), n.forEach(function (t) {
            window.ladi(t)
                .top()
        }), !t.isEmpty(o)) try {
        c = document.querySelector(o), t.isEmpty(c) || t.isEmpty(c.id) || t.runTimeout(function () {
            window.ladi(c.id)
                .scroll()
        }, 300)
    } catch (t) {}
    if (t.resetViewport(), t.runEventScroll(), !t.isEmpty(t.runtime.tracking_global_url)) {
        var u = !1,
            m = window;
        t.isObject(t.runtime.story_page) && (m = document.getElementsByClassName("ladi-wraper")[0]);
        var _ = function () {
            u || (u = !0, t.loadScript(t.runtime.tracking_global_url + "?v=" + Date.now()), m.removeEventListener("scroll", _), document.removeEventListener("mousemove", _), document.removeEventListener("touchstart", _))
        };
        m.addEventListener("scroll", _, t.runtime.scrollEventPassive), document.addEventListener("mousemove", _), document.addEventListener("touchstart", _, t.runtime.scrollEventPassive), t.runTimeout(_, t.runtime.tracking_global_delay)
    }
    for (t.runtime.tmp.is_quick_collapse_starting = !0; t.runtime.list_loaded_func.length > 0;) {
        t.runtime.list_loaded_func.shift()()
    }
    delete t.runtime.tmp.is_quick_collapse_starting;
    var y = document.getElementById("style_update_height_element");
    t.isEmpty(y) || y.parentElement.removeChild(y);
    var g = document.getElementById("style_animation");
    t.isEmpty(g) || g.parentElement.removeChild(g), t.reloadLazyload(!1)
}, LadiPageScriptV2.prototype.runConversionApi = function (t, e, i) {
    !this.isEmpty(t) && !this.isEmpty(e) && this.isObject(window.ladi_conversion_api) && this.isObject(window.ladi_conversion_api[t]) && (window.ladi_conversion_api[t][e] = i);
    if (this.isObject(window.ladi_conversion_api) && this.isObject(window.ladi_conversion_api.facebook) && this.isArray(window.ladi_conversion_api.facebook.pixels) && this.isArray(window.ladi_conversion_api.facebook.events)) {
        window.ladi_conversion_api.facebook.pixels = window.ladi_conversion_api.facebook.pixels.unique(), window.ladi_conversion_api.facebook.fbc = window.ladi("_fbc")
            .get_cookie(), window.ladi_conversion_api.facebook.fbp = window.ladi("_fbp")
            .get_cookie();
        for (var a = 0; a < window.ladi_conversion_api.facebook.events.length; a++) {
            var n = window.ladi_conversion_api.facebook.events[a].data;
            n.event_id = n.eventID, delete n.eventID, window.ladi_conversion_api.facebook.events[a].data = n
        }
        this.runtime.tmp.runTrackingAnalytics("ConversionApi", {
            data: window.ladi_conversion_api
        }), delete window.ladi_conversion_api.facebook.fbc, delete window.ladi_conversion_api.facebook.fbp, delete window.ladi_conversion_api.facebook.events
    }
}, LadiPageScriptV2.prototype.getWidthDevice = function (t) {
    if (this.runtime.is_mobile_only) {
        var e = document.getElementsByClassName("ladi-wraper")[0];
        if (!this.isEmpty(e)) return e.clientWidth
    }
    var i = window.ladi_screen_width || window.screen.width;
    return t ? window.innerWidth > 0 ? window.innerWidth : i : window.outerWidth > 0 ? window.outerWidth : i
}, LadiPageScriptV2.prototype.getHeightDevice = function (t) {
    return window.outerHeight > 0 && !this.runtime.isDesktop && (t && window.outerHeight > window.innerHeight || !t && window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight
}, LadiPageScriptV2.prototype.startAutoScroll = function (t, e, i, a) {
    if (this.runtime.isDesktop ? i : a) {
        var n = document.getElementById(t);
        if (!this.isEmpty(n) && !n.classList.contains("ladi-auto-scroll")) {
            var o = 0;
            if ("section" != e) {
                if (n.clientWidth <= this.getWidthDevice()) return;
                o = (o = parseFloatLadiPage(getComputedStyle(n)
                    .left) || 0) > 0 ? 0 : -1 * o
            } else {
                for (var r = n.querySelectorAll(".ladi-container > .ladi-element"), s = 0; s < r.length; s++) {
                    var l = parseFloatLadiPage(getComputedStyle(r[s])
                        .left) || 0;
                    l < o && (o = l)
                }
                o = o > 0 ? 0 : -1 * o, n.querySelector(".ladi-container")
                    .style.setProperty("margin-left", o + "px")
            }
            n.classList.add("ladi-auto-scroll"), n.scrollLeft = o
        }
    }
}, LadiPageScriptV2.prototype.getLinkUTMRedirect = function (t, e) {
    var i = this.createTmpElement("a", "", {
            href: t
        }),
        a = this.getURLSearchParams(e, null, !1),
        n = a.utm_source;
    if (!this.isEmpty(n)) {
        n = "utm_source=" + encodeURIComponent(n);
        var o = a.utm_medium,
            r = a.utm_campaign,
            s = a.utm_term,
            l = a.utm_content;
        this.isEmpty(o) || (n += "&utm_medium=" + encodeURIComponent(o)), this.isEmpty(r) || (n += "&utm_campaign=" + encodeURIComponent(r)), this.isEmpty(s) || (n += "&utm_term=" + encodeURIComponent(s)), this.isEmpty(l) || (n += "&utm_content=" + encodeURIComponent(l)), this.isEmpty(i.href) || this.isEmpty(i.host) || !this.isEmpty(this.getURLSearchParams(i.search, "utm_source", !1)) || (i.search = i.search + (this.isEmpty(i.search) ? "?" : "&") + n)
    }
    return i.href
}, LadiPageScriptV2.prototype.randomInt = function (t, e) {
    return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
}, LadiPageScriptV2.prototype.randomString = function (t) {
    for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", a = i.length, n = 0; n < t; n++) e += i.charAt(Math.floor(Math.random() * a));
    return e
}, LadiPageScriptV2.prototype.runCallback = function (t, e) {
    if (this.isFunction(e)) {
        var i = this;
        if (t) {
            var a = i.runInterval(function () {
                i.removeInterval(a), i.runCallback(!1, e)
            }, 0);
            return
        }
        e()
    }
}, LadiPageScriptV2.prototype.runTimeout = function (t, e) {
    if (this.isFunction(t)) {
        if (!this.isEmpty(e) && e > 0) return setTimeout(t, e);
        t()
    }
}, LadiPageScriptV2.prototype.removeTimeout = function (t) {
    return clearTimeout(t)
}, LadiPageScriptV2.prototype.removeInterval = function (t) {
    return clearInterval(t)
}, LadiPageScriptV2.prototype.runInterval = function (t, e) {
    if (this.isFunction(t)) return setInterval(t, e)
}, LadiPageScriptV2.prototype.getURLSearchParams = function (t, e, i) {
    var a = this,
        n = {},
        o = this.isNull(t);
    if (t = o ? window.location.search : t, !this.isEmpty(t))
        for (var r = t.substr(1)
                .split("&"), s = 0; s < r.length; ++s) {
            var l = r[s].split("=", 2);
            if (this.isNull(n[l[0]])) {
                1 == l.length ? n[l[0]] = "" : n[l[0]] = decodeURIComponentLadiPage(l[1].replace(/\+/g, " "));
                try {
                    if (i) {
                        var d = JSON.parse(n[l[0]]);
                        Number.isInteger(d) || (n[l[0]] = d, 0 == n[l[0]].length ? n[l[0]] = "" : 1 == n[l[0]].length && (n[l[0]] = n[l[0]][0]))
                    }
                } catch (t) {}
            } else i && (this.isArray(n[l[0]]) || (n[l[0]] = [n[l[0]]]), 1 == l.length ? n[l[0]].push("") : n[l[0]].push(decodeURIComponentLadiPage(l[1].replace(/\+/g, " "))))
        }
    return o && ["email", "phone"].forEach(function (t) {
        try {
            var e = n[t];
            if (!a.isEmpty(e)) {
                var i = Base64.decode(e);
                e == Base64.encode(i) && (n[t] = i)
            }
        } catch (t) {}
    }), this.isEmpty(e) ? n : n[e]
}, LadiPageScriptV2.prototype.getVideoId = function (t, e) {
    if (this.isEmpty(e)) return e;
    if (t == this.const.VIDEO_TYPE.youtube) {
        var i = this.createTmpElement("a", "", {
            href: e
        }); - 1 != e.toLowerCase()
            .indexOf("watch") ? e = this.getURLSearchParams(i.search, "v", !1) : -1 != e.toLowerCase()
            .indexOf("embed/") ? e = i.pathname.substring("/embed/".length) : -1 != e.toLowerCase()
            .indexOf("shorts/") ? e = i.pathname.substring("/shorts/".length) : -1 != e.toLowerCase()
            .indexOf("youtu.be") && (e = i.pathname.substring("/".length))
    }
    return e
}, LadiPageScriptV2.prototype.sendRequest = function (t, e, i, a, n, o) {
    var r = this,
        s = function (l) {
            var d = l[e],
                c = function (l, p) {
                    if (d.list.length <= l) 0 == l ? s({}) : r.isFunction(o) && o(r.const.LANG.REQUEST_SEND_ERROR, 0, p, e);
                    else {
                        var u = {};
                        u.timeout = d.timeout, u.onreadystatechange = function () {
                            this.readyState == XMLHttpRequest.DONE && (200 == this.status ? o(this.responseText, this.status, this, e) : c(l + 1, this))
                        }, r.sendRequestWithOption(t, d.list[l], i, a, n, u)
                    }
                };
            if (r.isObject(d)) return c(0, null);
            r.sendRequestWithOption(t, e, i, a, n, null, o)
        },
        l = function () {
            var t = r.runtime.tmp.send_request_configs;
            if (!r.isObject(t)) return r.runtime.tmp.send_request_configs = {}, void l();
            s(t)
        };
    l()
}, LadiPageScriptV2.prototype.sendRequestWithOption = function (t, e, i, a, n, o, r) {
    var s = new XMLHttpRequest;
    if (this.isFunction(this.runtime.send_request_response[e]) && this.runtime.send_request_response[e](e, i, r)) return;
    this.isFunction(r) && (s.onreadystatechange = function () {
        var t = null;
        try {
            t = this.responseText
        } catch (t) {}
        r(t, this.status, this, e)
    }), s.open(t, e, a);
    this.isObject(n) && Object.keys(n)
        .forEach(function (t) {
            s.setRequestHeader(t, n[t])
        }), this.isObject(o) && Object.keys(o)
        .forEach(function (t) {
            s[t] = o[t]
        }), s.send(i)
}, LadiPageScriptV2.prototype.deleteCookie = function (t) {
    return window.ladi(t)
        .delete_cookie()
}, LadiPageScriptV2.prototype.setCookie = function (t, e, i, a, n, o) {
    return window.ladi(e)
        .set_cookie(i, a, o, t, n)
}, LadiPageScriptV2.prototype.getCookie = function (t) {
    return window.ladi(t)
        .get_cookie()
}, LadiPageScriptV2.prototype.removeSticky = function () {
    var t = this;
    t instanceof LadiPageScriptV2 || (t = LadiPageScript);
    for (var e = document.querySelectorAll('[data-sticky="true"]'), i = 0; i < e.length; i++) e[i].removeAttribute("data-top"), e[i].removeAttribute("data-left"), e[i].style.removeProperty("top"), e[i].style.removeProperty("left"), e[i].style.removeProperty("width"), e[i].style.removeProperty("position"), e[i].style.removeProperty("z-index");
    t.runEventScroll()
}, LadiPageScriptV2.prototype.runEventBackdropPopupClick = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript);
    for (var i = null, a = document.querySelectorAll('[data-popup-backdrop="true"]'), n = 0; n < a.length; n++) "none" != getComputedStyle(a[n])
        .display && (i = a[n].id);
    if (!e.isEmpty(i)) {
        var o = document.querySelector("#" + i + " .popup-close");
        if (!e.isEmpty(o) && "none" == getComputedStyle(o)
            .display) return
    }
    e.runRemovePopup(i, e.runtime.isClient)
}, LadiPageScriptV2.prototype.runEventBackdropDropboxClick = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript);
    for (var i = document.querySelectorAll('[data-dropbox-backdrop="true"]'), a = 0; a < i.length; a++) window.ladi(i[a].id)
        .hide();
    document.getElementById(e.runtime.backdrop_dropbox_id)
        .style.removeProperty("display")
}, LadiPageScriptV2.prototype.runEventMouseMove = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), t = e.getEventCursorData(t);
    var i = null,
        a = 0,
        n = 0,
        o = 0;
    e.isEmpty(e.runtime.current_element_mouse_down_carousel) || (i = document.getElementById(e.runtime.current_element_mouse_down_carousel), a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x, n = parseFloatLadiPage(i.getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left")) || 0, (n += a) < (o = -((parseFloatLadiPage(e.runtime.eventData[e.runtime.current_element_mouse_down_carousel][e.runtime.device + ".option.carousel_crop.width"]) || 0) - i.clientWidth)) && (n = o), n > 0 && (n = 0), i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n + "px"));
    if (!e.isEmpty(e.runtime.current_element_mouse_down_gallery_view)) {
        i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_view + '"]'), a = t.pageX - e.runtime.current_element_mouse_down_gallery_view_position_x;
        var r = parseFloatLadiPage(i.getAttribute("data-current")) || 0;
        r == (parseFloatLadiPage(i.getAttribute("data-max-item")) || 0) - 1 && a < 0 && (a = 0), a > 0 && 0 == r && (a = 0), a >= e.runtime.current_element_mouse_down_gallery_view_diff ? (e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0, i.getElementsByClassName("ladi-gallery-view-arrow-left")[0].click()) : a <= -e.runtime.current_element_mouse_down_gallery_view_diff ? (e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0, i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].click()) : i.querySelectorAll(".ladi-gallery-view-item.selected")
            .length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.setProperty("left", a + "px")
    }
    e.isEmpty(e.runtime.current_element_mouse_down_gallery_control) || (i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_control + '"]'), a = t.pageX - e.runtime.current_element_mouse_down_gallery_control_position_x, n = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].getAttribute("data-left")) || 0, (n += a) < (o = (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0])
        .width) || 0) - (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0])
        .width) || 0)) && (n = o), n > 0 && (n = 0), i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", n + "px"))
}, LadiPageScriptV2.prototype.runEventMouseUp = function (t) {
    t.stopPropagation();
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), t = e.getEventCursorData(t);
    var i = null,
        a = 0;
    if (!e.isEmpty(e.runtime.current_element_mouse_down_carousel)) {
        delete e.runtime.timenext_carousel[e.runtime.current_element_mouse_down_carousel], a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x;
        var n = (i = document.getElementById(e.runtime.current_element_mouse_down_carousel))
            .getElementsByClassName("ladi-carousel-content")[0].getAttribute("data-left");
        i.getElementsByClassName("ladi-carousel-content")[0].removeAttribute("data-left"), i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), e.runtime.current_element_mouse_down_carousel = null, a >= e.runtime.current_element_mouse_down_carousel_diff ? i.getElementsByClassName("ladi-carousel-arrow-left")[0].click() : a <= -e.runtime.current_element_mouse_down_carousel_diff ? i.getElementsByClassName("ladi-carousel-arrow-right")[0].click() : i.getElementsByClassName("ladi-carousel-content")
            .length > 0 && (i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "100ms"), i.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", n), e.runTimeout(function () {
                i.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration")
            }, 1))
    }
    if (e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) || (i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_view + '"]'))
        .querySelectorAll(".ladi-gallery-view-item.selected")
        .length > 0 && i.querySelectorAll(".ladi-gallery-view-item.selected")[0].style.removeProperty("left"), !e.isEmpty(e.runtime.current_element_mouse_down_gallery_control))
        if ((i = document.querySelector('[data-runtime-id="' + e.runtime.current_element_mouse_down_gallery_control + '"]'))
            .getElementsByClassName("ladi-gallery-control-box")[0].removeAttribute("data-left"), i.getElementsByClassName("ladi-gallery-control-box")[0].style.removeProperty("transition-duration"), i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
            var o = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0,
                r = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0])
                    .width) || 0;
            r = (r = -(r -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0])
                .width) || 0)) > 0 ? 0 : r, o > 0 && (o = 0), o >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), o <= r && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
        } else {
            var s = parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0,
                l = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0])
                    .height) || 0;
            l = (l = -(l -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0])
                .height) || 0)) > 0 ? 0 : l, s > 0 && (s = 0), s >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), s <= l && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
        }
    e.runtime.current_element_mouse_down_carousel_position_x = 0, e.runtime.current_element_mouse_down_gallery_view = null, e.runtime.current_element_mouse_down_gallery_view_position_x = 0;
    var d = 0;
    e.runtime.current_element_mouse_down_gallery_control_time + e.runtime.current_element_mouse_down_gallery_control_time_click < Date.now() && (d = 5), e.runTimeout(function () {
        e.runtime.current_element_mouse_down_gallery_control = null, e.runtime.current_element_mouse_down_gallery_control_time = 0, e.runtime.current_element_mouse_down_gallery_control_position_x = 0
    }, d)
}, LadiPageScriptV2.prototype.runEventMouseLeave = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript), Object.keys(e.runtime.eventData)
        .forEach(function (t) {
            var i = e.runtime.eventData[t];
            if ("popup" == i.type && i["option.show_popup_exit_page"]) {
                if (e.isObject(e.runtime.tmp.popup_leave_show) || (e.runtime.tmp.popup_leave_show = {}), e.runtime.tmp.popup_leave_show[t]) return;
                e.runtime.tmp.popup_leave_show[t] = !0, window.ladi(t)
                    .show()
            }
        })
}, LadiPageScriptV2.prototype.runEventScroll = function (t) {
    var e = this;
    if (e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.runtime.isRun) {
        if (!e.isEmpty(e.runtime.eventData) && !e.runtime.tmp.is_run_show_popup) {
            for (var i = null, a = document.querySelectorAll('[data-popup-backdrop="true"]'), n = 0; n < a.length; n++) "none" != getComputedStyle(a[n])
                .display && (i = a[n].id);
            var o = [];
            if (!e.isEmpty(i))
                for (var r = document.querySelectorAll("#" + i + " .ladi-element"), s = 0; s < r.length; s++) o.push(r[s].id);
            if (Object.keys(e.runtime.eventData)
                .forEach(function (t) {
                    var a = e.runtime.eventData[t],
                        n = null,
                        r = null,
                        s = null,
                        l = Object.keys(e.runtime.list_scroll_func),
                        d = [];
                    d = "gallery" == a.type ? document.querySelectorAll("#" + t) : [s = document.getElementById(t)];
                    for (var c = 0; c < d.length; c++)
                        if (s = d[c], !e.isEmpty(s)) {
                            var p = "gallery" == a.type ? s.getAttribute("data-runtime-id") : s.getAttribute("id");
                            if (-1 != l.indexOf(p)) {
                                var u = !1;
                                "section" == a.type ? (n = s.offsetTop, (window.scrollY >= n && window.scrollY <= n + s.offsetHeight || window.scrollY + e.getHeightDevice() >= n && window.scrollY + e.getHeightDevice() <= n + s.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice() >= n) && (u = !0)) : (n = e.getElementBoundingClientRect(s)
                                    .y + window.scrollY, (window.scrollY >= n && window.scrollY <= n + s.offsetHeight || window.scrollY + e.getHeightDevice(!0) >= n && window.scrollY + e.getHeightDevice(!0) <= n + s.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= n) && (u = !0)), u && (r = e.runtime.list_scroll_func[p], delete e.runtime.list_scroll_func[p], r())
                            }
                        }
                    var m = a[e.runtime.device + ".style.animation-name"];
                    if (!e.isEmpty(m) && (s = document.getElementById(t), !e.isEmpty(s) && !s.classList.contains("ladi-animation"))) {
                        var _ = parseFloatLadiPage(a[e.runtime.device + ".style.animation-delay"]) || 0;
                        n = e.getElementBoundingClientRect(s)
                            .y + window.scrollY;
                        var y = window.scrollY >= n && window.scrollY <= n + s.offsetHeight || window.scrollY + e.getHeightDevice(!0) >= n && window.scrollY + e.getHeightDevice(!0) <= n + s.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice(!0) >= n;
                        e.runtime.tmp.isFirstScroll && _ > 0 && s.classList.add("ladi-animation-hidden"), y && (s.classList.add("ladi-animation"), e.runTimeout(function () {
                            s.classList.remove("ladi-animation-hidden")
                        }, 1e3 * _))
                    }
                    if (e.isEmpty(i) || -1 != o.indexOf(t)) {
                        var g = null,
                            f = null,
                            h = null;
                        if (a[e.runtime.device + ".option.sticky"] && (g = a[e.runtime.device + ".option.sticky_position"], f = parseFloatLadiPage(a[e.runtime.device + ".option.sticky_position_top"]), h = parseFloatLadiPage(a[e.runtime.device + ".option.sticky_position_bottom"])), !e.runtime.has_popupx && !e.isEmpty(g)) {
                            var v = document.getElementById(t);
                            if (!e.isEmpty(v) && v.clientWidth > 0 && v.clientHeight > 0 && -1 != ["default", "top", "bottom"].indexOf(g)) {
                                var E = e.getElementBoundingClientRect(v),
                                    P = v.getAttribute("data-top"),
                                    L = v.getAttribute("data-left");
                                e.isEmpty(P) ? (v.setAttribute("data-top", E.y + window.scrollY), P = E.y) : P = parseFloatLadiPage(P), e.isEmpty(L) ? (v.setAttribute("data-left", E.x + window.scrollX), L = E.x) : L = parseFloatLadiPage(L);
                                var A = null,
                                    b = null,
                                    w = e.getHeightDevice(),
                                    S = document.getElementsByClassName("ladi-wraper")[0],
                                    T = 0,
                                    O = 0,
                                    C = 0,
                                    N = 0;
                                if ("default" == g && (f >= P - window.scrollY ? (A = f + "px", b = L + "px", f <= 0 && (T = v.clientHeight), C = v.clientHeight) : w - h - v.clientHeight <= P - window.scrollY && (A = "calc(100% - " + (h + v.clientHeight) + "px)", b = L + "px", h <= 0 && (O = v.clientHeight), N = v.clientHeight)), "top" == g && (f >= P - window.scrollY || w - 0 < P - window.scrollY) && (A = f + "px", b = L + "px", f <= 0 && (T = v.clientHeight), C = v.clientHeight), "bottom" == g && (w - h - v.clientHeight <= P - window.scrollY || 0 > P + v.clientHeight - window.scrollY) && (A = "calc(100% - " + (h + v.clientHeight) + "px)", b = L + "px", h <= 0 && (O = v.clientHeight), N = v.clientHeight), e.isEmpty(A) || e.isEmpty(b)) v.style.removeProperty("top"), v.style.removeProperty("left"), v.style.removeProperty("width"), v.style.removeProperty("position"), v.style.removeProperty("z-index"), S.getAttribute("data-padding-top-id") == t && (S.removeAttribute("data-padding-top-id"), S.style.removeProperty("padding-top")), S.getAttribute("data-padding-bottom-id") == t && (S.removeAttribute("data-padding-bottom-id"), S.style.removeProperty("padding-bottom"));
                                else if ("section" == a.type && (e.runtime.is_mobile_only ? v.style.setProperty("width", S.clientWidth + "px") : e.runtime.isDesktop && v.style.setProperty("width", "100%"), T > 0 && (S.setAttribute("data-padding-top-id", t), S.style.setProperty("padding-top", T + "px")), O > 0 && (S.setAttribute("data-padding-bottom-id", t), S.style.setProperty("padding-bottom", O + "px")), C > 0 && S.setAttribute("data-scroll-padding-top", C), N > 0 && S.setAttribute("data-scroll-padding-bottom", N)), v.style.setProperty("top", A), v.style.setProperty("left", b), v.style.setProperty("position", "fixed"), v.style.setProperty("z-index", "90000050"), !v.hasAttribute("data-sticky")) {
                                    v.setAttribute("data-sticky", !0), v.classList.contains("ladi-animation-hidden") && (v.classList.remove("ladi-animation-hidden"), v.classList.add("ladi-animation"));
                                    for (var I = v.getElementsByClassName("ladi-animation-hidden"); I.length > 0;) I[0].classList.add("ladi-animation"), I[0].classList.remove("ladi-animation-hidden");
                                    v.classList.remove("ladi-lazyload");
                                    for (var k = v.getElementsByClassName("ladi-lazyload"); k.length > 0;) k[0].classList.remove("ladi-lazyload")
                                }
                            }
                        }
                    }
                    if ("popup" == a.type) {
                        if (!e.isEmpty(e.runtime.scroll_show_popup[t])) return;
                        e.isEmpty(a["option.popup_welcome_page_scroll_to"]) || (s = document.getElementById(a["option.popup_welcome_page_scroll_to"]), !e.isEmpty(s) && s.offsetHeight > 0 && (n = s.offsetTop, (window.scrollY >= n && window.scrollY <= n + s.offsetHeight || window.scrollY + e.getHeightDevice() >= n && window.scrollY + e.getHeightDevice() <= n + s.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice() >= n) && (e.runtime.scroll_show_popup[t] = !0, window.ladi(t)
                            .show())))
                    }
                    if ("section" == a.type) {
                        if (!e.isEmpty(e.runtime.scroll_to_section[t])) return;
                        s = document.getElementById(t), e.isEmpty(s) || (n = s.offsetTop, (window.scrollY >= n && window.scrollY <= n + s.offsetHeight || window.scrollY + e.getHeightDevice() >= n && window.scrollY + e.getHeightDevice() <= n + s.offsetHeight || n >= window.scrollY && window.scrollY + e.getHeightDevice() >= n) && (e.runtime.scroll_to_section[t] = !0, e.runEventTracking(t, !1)))
                    }
                }), e.runtime.isClient) {
                if (e.runtime.is_popupx) return;
                for (var l = Math.round((window.scrollY + e.getHeightDevice()) / document.body.clientHeight * 100), d = 1; d < e.const.PERCENT_TRACKING_SCROLL.length; d++) l > e.const.PERCENT_TRACKING_SCROLL[d - 1] && l <= e.const.PERCENT_TRACKING_SCROLL[d] && -1 == e.runtime.scroll_depth.indexOf(e.const.PERCENT_TRACKING_SCROLL[d]) && (e.runtime.scroll_depth.push(e.const.PERCENT_TRACKING_SCROLL[d]), e.isFunction(window.gtag) && window.gtag("event", "ScrollDepth_" + e.const.PERCENT_TRACKING_SCROLL[d] + "_percent", {
                    event_category: "LadiPageScrollDepth",
                    event_label: window.location.host + window.location.pathname,
                    non_interaction: !0
                }), e.isFunction(window.fbq) && window.fbq("trackCustom", "ScrollDepth_" + e.const.PERCENT_TRACKING_SCROLL[d] + "_percent"))
            }
            if (e.runtime.tmp.isFirstScroll = !1, !e.isEmpty(t)) {
                var c = 0,
                    p = Object.values(e.runtime.list_scrolling_exec);
                if (e.isEmpty(e.runtime.tmp.timeout_scrolling_id))
                    for (c = 0; c < p.length; c++) p[c]();
                e.removeTimeout(e.runtime.tmp.timeout_scrolling_id), e.runtime.tmp.timeout_scrolling_id = e.runTimeout(function () {
                    for (delete e.runtime.tmp.timeout_scrolling_id, p = Object.values(e.runtime.list_scrolled_exec), c = 0; c < p.length; c++) p[c]()
                }, 1e3)
            }
        }
    } else e.runTimeout(function () {
        e.runEventScroll(t)
    }, 100)
}, LadiPageScriptV2.prototype.runRemovePopup = function (t, e, i, a, n) {
    var o = this,
        r = document.querySelectorAll("#" + this.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"),
        s = !1,
        l = !1;
    e || (LadiPagePlugin.getPlugin("popup")
        .removeStyleShowPopupBuilder(), LadiPagePlugin.getPlugin("popup")
        .removeStyleShowPopupBuilderScroll());
    var d = function () {
            var t = document.getElementById("style_popup");
            o.isEmpty(t) || t.parentElement.removeChild(t)
        },
        c = [],
        p = 0;
    if (this.isEmpty(t))
        for (p = 0; p < r.length; p++) c.push(r[p].id);
    else c.push(t);
    if (c.forEach(function (t) {
            var i = document.getElementById(t);
            if (!o.isEmpty(i)) {
                o.runtime.has_popupx && ("none" != getComputedStyle(i)
                    .display && (l = !0), document.body.style.removeProperty("height"));
                var a = parseFloatLadiPage(i.getAttribute("data-timeout-id")) || null;
                o.removeTimeout(a), i.removeAttribute("data-timeout-id"), a = parseFloatLadiPage(i.getAttribute("data-timeout-id-2")) || null, o.removeTimeout(a), i.removeAttribute("data-timeout-id-2"), a = parseFloatLadiPage(i.getAttribute("data-timeout-id-3")) || null, o.removeTimeout(a), i.removeAttribute("data-timeout-id-3");
                var n = i.getElementsByClassName("popup-close")[0];
                o.isEmpty(n) || (a = parseFloatLadiPage(n.getAttribute("data-timeout-id")) || null, o.removeTimeout(a), n.removeAttribute("data-timeout-id")), o.pauseAllVideo(i), o.isEmpty(i.style.getPropertyValue("display")) || (s = !0), i.style.removeProperty("display"), i.style.removeProperty("z-index");
                var c = i.hasAttribute("data-popup-backdrop"),
                    p = o.runtime.eventData[t];
                if (o.isObject(p) && p[o.runtime.device + ".option.popup_position"] == o.const.POSITION_TYPE.default && (c = !0), c) {
                    d(), e && (o.isEmpty(o.runtime.tmp.bodyScrollY) || window.scrollTo(0, o.runtime.tmp.bodyScrollY)), o.runtime.tmp.bodyScrollY = null;
                    for (var u = 0; u < r.length; u++) r[u].style.removeProperty("z-index")
                }
                i.removeAttribute("data-scroll"), i.removeAttribute("data-fixed-close"), i.style.removeProperty("overflow-y"), i.style.removeProperty("overflow-x"), i.getElementsByClassName("ladi-popup")[0].style.removeProperty("height"), i.style.removeProperty("max-height")
            }
        }), s && this.isFunction(i) && i(), a && d(), !n && l) {
        o.runtime.tmp.runActionPopupX({
            id: t,
            dimension: {
                display: "none"
            },
            action: {
                type: "set_iframe_dimension"
            }
        })
    }
    delete this.runtime.tmp.current_default_popup_id
}, LadiPageScriptV2.prototype.runShowPopup = function (t, e, i, a, n, o) {
    var r = this;
    if (!r.isEmpty(e)) {
        var s = document.getElementById(e),
            l = null;
        if (!n || !r.isEmpty(s) && r.isObject(r.runtime.eventData) && !r.isEmpty(r.runtime.eventData[e])) {
            n && (i = r.runtime.eventData[e][r.runtime.device + ".option.popup_position"], a = r.runtime.eventData[e][r.runtime.device + ".option.popup_backdrop"]);
            var d = function (t) {
                    r.runtime.tmp.is_run_show_popup = !0;
                    var c = 0,
                        p = "";
                    n || LadiPagePlugin.getPlugin("popup")
                        .showStyleShowPopupBuilder(e);
                    r.isEmpty(a) ? p += n ? "#" + r.runtime.backdrop_popup_id + " { display: none !important;}" : "#" + r.runtime.backdrop_popup_id + " { display: block !important;}" : (p += "#" + r.runtime.backdrop_popup_id + " { display: block !important; " + a + "}", s.setAttribute("data-popup-backdrop", !0)), i == r.const.POSITION_TYPE.default && "true" != s.getAttribute("data-dropbox") && (! function () {
                        if (!r.runtime.has_popupx && n) {
                            var t = window.scrollY;
                            if (!r.isEmpty(r.runtime.tmp.bodyScrollY)) {
                                var i = getComputedStyle(document.body);
                                "fixed" == i.position && (parseFloatLadiPage(i.top) || 0) == -1 * r.runtime.tmp.bodyScrollY && (t = r.runtime.tmp.bodyScrollY)
                            }
                            "block" != s.style.getPropertyValue("display") || r.isEmpty(r.runtime.tmp.bodyScrollY) || (t = r.runtime.tmp.bodyScrollY), p += "body {", p += "position: fixed !important;", p += "width: 100% !important;", p += "top: -" + t + "px !important;", p += "}", r.runtime.tmp.bodyScrollY = t, l = function () {
                                r.runtime.tmp.bodyScrollY = t
                            }
                        }
                        for (var a = document.querySelectorAll("#" + r.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), o = 0; o < a.length; o++) a[o].id != e && a[o].style.setProperty("z-index", "1", "important");
                        c = 500
                    }(), r.runtime.tmp.current_default_popup_id = e);
                    var u = "block" == s.style.getPropertyValue("display");
                    if (r.isFunction(o) && !u && (o(), r.isFunction(l) && l()), r.isArray(r.runtime.list_show_popup_func[e]))
                        for (; r.runtime.list_show_popup_func[e].length > 0;) {
                            r.runtime.list_show_popup_func[e].shift()()
                        }
                    var m = s.hasAttribute("data-scroll"),
                        _ = s.hasAttribute("data-fixed-close"),
                        y = !1,
                        g = s.getElementsByClassName("ladi-popup")[0],
                        f = 1e3 * (parseFloatLadiPage(getComputedStyle(g)
                            .animationDuration) || 0),
                        h = 1e3 * (parseFloatLadiPage(getComputedStyle(g)
                            .animationDelay) || 0),
                        v = parseFloatLadiPage(s.getAttribute("data-timeout-id")) || null;
                    r.removeTimeout(v), v = parseFloatLadiPage(s.getAttribute("data-timeout-id-2")) || null, r.removeTimeout(v), s.classList.add("ladi-animation-hidden"), "block" != getComputedStyle(s)
                        .display && s.style.setProperty("display", "block", "important"), v = r.runTimeout(function () {
                            s.classList.remove("ladi-animation-hidden"), s.removeAttribute("data-timeout-id")
                        }, h), r.isEmpty(v) || s.setAttribute("data-timeout-id", v), t && (!m && s.clientHeight > .8 * r.getHeightDevice() && (n ? r.runtime.has_popupx ? y = !0 : (s.setAttribute("data-scroll", !0), s.style.setProperty("overflow-y", "auto", "important"), s.style.setProperty("overflow-x", "hidden", "important"), m = !0) : _ = !0), r.runtime.has_popupx && (y ? (s.setAttribute("data-fixed-close", !0), document.body.style.setProperty("height", s.clientHeight + "px")) : document.body.style.removeProperty("height")), m && n && (s.getElementsByClassName("ladi-popup")[0].style.removeProperty("height"), s.style.removeProperty("max-height"), s.getElementsByClassName("ladi-popup")[0].style.setProperty("height", s.clientHeight + "px", "important"), s.style.setProperty("max-height", "80vh"))), !n && _ && LadiPagePlugin.getPlugin("popup")
                        .styleShowPopupBuilderScroll(e), r.runtime.has_popupx && (p += n ? "#" + r.runtime.backdrop_popup_id + " { display: none !important;}" : "#" + r.runtime.backdrop_popup_id + " { display: block !important;}", s.style.removeProperty("max-height"), s.style.removeProperty("overflow-y"), s.style.removeProperty("overflow-x")), r.isEmpty(p) || r.createStyleElement("style_popup", p);
                    var E = null;
                    if (n && !r.isEmpty(s) && "true" != s.getAttribute("data-dropbox")) {
                        var P = s.getElementsByClassName("popup-close")[0];
                        r.isEmpty(P) && ((P = document.createElement("div"))
                            .className = "popup-close", s.appendChild(P), P.addEventListener("click", function (t) {
                                t.stopPropagation(), r.runRemovePopup(e, n)
                            })), v = parseFloatLadiPage(P.getAttribute("data-timeout-id")) || null, r.removeTimeout(v), P.classList.add("opacity-0"), r.runtime.has_popupx && r.runtime.tmp.popupx_is_inline && P.classList.add("ladi-hidden");
                        var L = function () {
                            var t = s.getElementsByClassName("popup-close")[0];
                            if (!r.isEmpty(t)) {
                                var e = r.getElementBoundingClientRect(s),
                                    i = e.y,
                                    a = window.innerWidth - e.x - e.width;
                                (m || y) && (a += r.runtime.widthScrollBar), t.style.setProperty("right", a + "px"), t.style.setProperty("top", i + "px"), t.style.setProperty("position", "fixed")
                            }
                        };
                        E = function () {
                            v = r.runTimeout(function () {
                                L(), P.classList.remove("opacity-0"), P.removeAttribute("data-timeout-id")
                            }, f + h + 100), P.setAttribute("data-timeout-id", v)
                        }, (m || y) && (s.hasAttribute("data-resize-scroll") || (s.setAttribute("data-resize-scroll", !0), window.addEventListener("resize", L)))
                    }
                    n && !u && r.runEventTracking(e, !1);
                    var A = function () {
                        v = r.runTimeout(function () {
                            delete r.runtime.tmp.is_run_show_popup, r.runEventScroll(), r.isFunction(E) && E(), s.removeAttribute("data-timeout-id-2")
                        }, c), r.isEmpty(v) || s.setAttribute("data-timeout-id-2", v)
                    };
                    if (t) A();
                    else {
                        v = r.runTimeout(function () {
                            "none" == getComputedStyle(s)
                                .display ? (c -= 100, A()) : d(!0), s.removeAttribute("data-timeout-id-2")
                        }, 100), s.setAttribute("data-timeout-id-2", v)
                    }
                },
                c = 0;
            i == r.const.POSITION_TYPE.default && (c = 100);
            var p = r.runTimeout(function () {
                d(t)
            }, c);
            r.isEmpty(s) || s.setAttribute("data-timeout-id-3", p)
        }
    }
}, LadiPageScriptV2.prototype.runEventTracking = function (t, e, i, a, n) {
    var o = this;
    if (this.runtime.isClient && !this.isEmpty(t)) {
        var r = o.runtime.eventData[t],
            s = r.type,
            l = null,
            d = null,
            c = null,
            p = null,
            u = null,
            m = o.runtime.currency;
        e && "form" == s ? (l = r["option.form_conversion_name"], d = r["option.form_google_ads_conversion"], c = r["option.form_google_ads_label"], p = r["option.form_event_custom_script"], u = o.isEmpty(r["option.form_purchase_value"]) ? null : parseFloatLadiPage(r["option.form_purchase_value"]) || 0, o.runtime.shopping && (u = o.getCartCheckoutPrice(u))) : (l = r["option.conversion_name"], d = r["option.google_ads_conversion"], c = r["option.google_ads_label"], p = r["option.event_custom_script"]);
        var _ = function (t) {
                if (!o.isEmpty(l)) {
                    var a = "trackCustom"; - 1 != ["AddPaymentInfo", "AddToCart", "AddToWishlist", "CompleteRegistration", "Contact", "CustomizeProduct", "Donate", "FindLocation", "InitiateCheckout", "Lead", "PageView", "Purchase", "Schedule", "Search", "StartTrial", "SubmitApplication", "Subscribe", "ViewContent"].indexOf(l) && (a = "track");
                    var n = null,
                        r = null;
                    if (o.isEmpty(u) || o.isEmpty(m) || ((n = {})
                            .value = u, n.currency = m), t) o.runtime.tmp.runActionPopupX({
                        fbq_track_name: a,
                        conversion_name: l,
                        fbq_data: n,
                        fbq_event_data: r,
                        action: {
                            type: "run_tracking_fbq"
                        }
                    });
                    else {
                        if (o.isObject(window.ladi_conversion_api) && o.isObject(window.ladi_conversion_api.facebook) && o.isArray(window.ladi_conversion_api.facebook.pixels)) {
                            r = {
                                eventID: "ladi." + Date.now() + "." + (Math.floor(9e10 * Math.random()) + 1e10)
                            }
                        }
                        if (window.fbq(a, l, n, r), o.runtime.shopping && e) {
                            var s = o.getCartProducts();
                            o.isNull(s) || (o.isObject(r) || (r = {}), r.cart_products = s)
                        }
                    }
                    o.isObject(i) && (o.isObject(r) || (r = {}), r.email = i.email, r.phone = i.phone), t ? o.runtime.tmp.runActionPopupX({
                        type: "facebook",
                        key: "events",
                        keyData: [{
                            key: a,
                            name: l,
                            custom_data: n,
                            data: r
                        }],
                        action: {
                            type: "run_conversion_api"
                        }
                    }) : o.runConversionApi("facebook", "events", [{
                        key: a,
                        name: l,
                        custom_data: n,
                        data: r
                    }])
                }
            },
            y = function (t) {
                if (o.isEmpty(d) || o.isEmpty(c) || (t ? o.runtime.tmp.runActionPopupX({
                        conversion_name: "conversion",
                        gtag_data: {
                            send_to: "AW-" + d + "/" + c
                        },
                        action: {
                            type: "run_tracking_gtag"
                        }
                    }) : window.gtag("event", "conversion", {
                        send_to: "AW-" + d + "/" + c
                    })), !o.isEmpty(l)) {
                    var e = "";
                    e = "section" == s ? "LadiPageSection" : "popup" == s ? "LadiPagePopup" : "form" == s ? "LadiPageConversion" : "LadiPageClick";
                    var i = LadiPageApp[r.type + o.const.APP_RUNTIME_PREFIX];
                    if (!o.isEmpty(i)) {
                        var a = i(r, o.runtime.isClient);
                        o.isFunction(a.getEventTrackingCategory) && (e = i(r, o.runtime.isClient)
                            .getEventTrackingCategory())
                    }
                    var n = {
                        event_category: e,
                        event_label: window.location.host + window.location.pathname
                    };
                    o.isEmpty(u) || o.isEmpty(m) || (n.value = u, n.currency = m), t ? o.runtime.tmp.runActionPopupX({
                        conversion_name: l,
                        gtag_data: n,
                        action: {
                            type: "run_tracking_gtag"
                        }
                    }) : window.gtag("event", l, n)
                }
            };
        if (!o.isEmpty(a)) {
            var g = !1;
            return o.isEmpty(d) || o.isEmpty(c) || (g = !0), o.isEmpty(l) || (g = !0), o.isEmpty(p) || (g = !0), -1 != ["section", "popup", "countdown"].indexOf(s) && (g = !1), void(g && a.addEventListener("click", function (r) {
                o.isFunction(n) && !n(a, r) || o.runEventTracking(t, e, i)
            }))
        }
        if (o.runtime.is_popupx) return _(!0), y(!0), void o.runtime.tmp.runActionPopupX({
            script: p,
            action: {
                type: "event_custom_script"
            }
        });
        o.isFunction(window.fbq) && _(), o.isFunction(window.gtag) && y(), o.isEmpty(p) || o.runFunctionString(p)
    }
}, LadiPageScriptV2.prototype.runFunctionString = function (t) {
    try {
        new Function(t)()
    } catch (t) {}
}, LadiPageScriptV2.prototype.formatCurrency = function (t, e, i, a) {
    var n = {
        VND: "{0}đ",
        KHR: "{0}៛",
        USD: "${0}",
        EUR: "€{0}",
        GBP: "£{0}",
        THB: "฿{0}",
        LAK: "₭{0}",
        PHP: "₱{0}",
        SGD: "S${0}",
        HKD: "HK${0}",
        TWD: "NT${0}",
        MYR: "RM{0}",
        IDR: "Rp{0}"
    };
    if (Object.keys(n)
        .forEach(function (t) {
            var i = n[t].replaceAll("{0}", "");
            (i = i.trim()) == e && (e = t)
        }), a) return this.isEmpty(n[e]) ? e : n[e].format("")
        .trim();
    var o = this.formatNumber(t, 3, null, {
        VND: 0,
        USD: 2,
        EUR: 2,
        GBP: 2,
        SGD: 2,
        MYR: 2,
        HKD: 2,
        TWD: 0,
        THB: 0,
        PHP: 0,
        KHR: 0,
        LAK: 0,
        IDR: 0
    }[e] || 0);
    return i && (o = this.isEmpty(n[e]) ? o + " " + e : n[e].format(o)), o
}, LadiPageScriptV2.prototype.formatNumber = function (t, e, i, a) {
    if (void 0 != t) {
        void 0 == i && (i = 0), void 0 == a && (a = 0);
        var n = "\\d(?=(\\d{" + (e || 3) + "})+" + (a > 0 ? "\\." : "$") + ")";
        t = t.toFixed(Math.max(0, ~~a))
            .replace(new RegExp(n, "g"), "$&,");
        var o = null,
            r = null;
        i >= 1 && (r = (o = t.split("."))[0], t = r = new Array(i - r.length + 1)
                .join("0") + r, 2 == o.length && (t += "." + o[1])), a >= 1 && 2 == (o = t.split("."))
            .length && (r = o[1], r = new Array(a - r.length + 1)
                .join("0") + r, t = o[0] + "." + r)
    }
    return t
}, LadiPageScriptV2.prototype.setDataReplaceStr = function (t, e) {
    this.runtime.replaceStr[t] = e
}, LadiPageScriptV2.prototype.getDataReplaceStr = function (t, e) {
    var i = null;
    return this.isNull(e) || (i = e[t]), this.isNull(i) && (i = this.runtime.replaceStr[t]), i
}, LadiPageScriptV2.prototype.highlightText = function (t, e, i, a) {
    if (!this.isEmpty(t) && 0 != e.length) {
        var n = i ? "gi" : "g",
            o = [];
        e.forEach(function (t) {
            o.push(t.replaceAll("|", "\\|"))
        }), o.sort(function (t, e) {
            return e.length - t.length
        });
        for (var r = this, s = function (t) {
                var s = new RegExp(o.join("|"), n);
                if (3 !== t.nodeType) r.highlightText(t, e, i, a);
                else if (s.test(t.textContent)) {
                    var l = document.createDocumentFragment(),
                        d = 0;
                    t.textContent.replace(s, function (e, i) {
                        var n = document.createTextNode(t.textContent.slice(d, i)),
                            o = null;
                        r.isFunction(a) ? o = a(e) : (o = document.createElement("span"))
                            .textContent = e, l.appendChild(n), l.appendChild(o), d = i + e.length
                    });
                    var c = document.createTextNode(t.textContent.slice(d));
                    l.appendChild(c), t.parentNode.replaceChild(l, t)
                }
            }, l = 0; l < t.childNodes.length; l++) {
            s(t.childNodes[l])
        }
    }
}, LadiPageScriptV2.prototype.convertDataReplaceStr = function (t, e, i, a, n, o) {
    var r = this,
        s = r.runtime.replacePrefixStart,
        l = r.runtime.replacePrefixEnd;
    r.runtime.convert_replace_str && (s = r.runtime.replaceNewPrefixStart, l = r.runtime.replaceNewPrefixEnd);
    for (var d = t = r.isEmpty(t) ? "" : t, c = new RegExp(s + "[^" + s + "$" + l + "]*" + l, "gi"), p = null, u = [], m = function (t) {
            if (a) u.push(t);
            else {
                var i = t,
                    c = i.split("|");
                i = c[0].substr(s.length), 1 == c.length && (i = i.substr(0, i.length - l.length));
                var p = r.getDataReplaceStr(i, n);
                if (r.isEmpty(p))
                    if (c.length > 1) {
                        var m = r.randomInt(1, c.length - 1);
                        p = c[m], m == c.length - 1 && (p = p.substr(0, p.length - l.length))
                    } else p = "";
                e && (r.isArray(p) && p.length > 1 && (p = JSON.stringify(p)), p = encodeURIComponent(p)), d = o && r.isArray(p) && p.length > 1 ? p : d.replaceAll(t, p)
            }
        }; null !== (p = c.exec(t));) p.index === c.lastIndex && c.lastIndex++, p.forEach(m);
    return u = u.unique(), r.highlightText(i, u, !0, function (t) {
        var e = document.createElement("span");
        return e.setAttribute("data-replace-str", t), e
    }), r.runtime.isDesktop && e && !r.isEmpty(d) && ["fb://profile/", "fb://page/?id=", "fb://page/"].forEach(function (t) {
        d.startsWith(t) && (d = d.replaceAll(t, "https://www.facebook.com/"))
    }), d
}, LadiPageScriptV2.prototype.setDataReplaceElement = function (t, e, i, a, n) {
    for (var o = this.isEmpty(a) ? document : document.getElementById(a), r = o.querySelectorAll("span[data-replace-str]"), s = 0; s < r.length; s++) {
        var l = r[s].getAttribute("data-replace-str");
        r[s].innerHTML = this.convertDataReplaceStr(l, !1, null, !1, i)
    }
    for (var d = o.querySelectorAll("a[data-replace-href]"), c = 0; c < d.length; c++) {
        var p = d[c].getAttribute("data-replace-href");
        p = this.convertDataReplaceStr(p, !0, null, !1, i), d[c].href = p
    }
    for (var u = o.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), m = 0; m < u.length; m++) {
        var _ = null,
            y = null,
            g = !1,
            f = null,
            h = u[m].getAttribute("type");
        if (h = this.isEmpty(h) ? h : h.trim(), t) {
            var v = u[m].getAttribute("name")
                .trim();
            (g = !0) && -1 == n.indexOf(v) && (g = !1), g && "country" == v && "true" == u[m].getAttribute("data-is-select-country") && (g = !1), g && (_ = this.getDataReplaceStr(v, i))
        }
        if (!g) {
            if (f = this.findAncestor(u[m], "ladi-element"), this.isEmpty(f)) continue;
            var E = this.runtime.eventData[f.id];
            if (this.isEmpty(E)) continue;
            var P = E["option.input_default_value"];
            if (this.isEmpty(P)) continue;
            var L = !1;
            "INPUT" == u[m].tagName && "checkbox" == h && (L = !0), _ = this.convertDataReplaceStr(P, !1, null, !1, i, L)
        }
        if (!this.isNull(_)) {
            if (y = this.isArray(_) ? _[0] : _, y = this.isNull(y) ? "" : y, y += "", "INPUT" == u[m].tagName)
                if ("checkbox" == h || "radio" == h) {
                    var A = !1;
                    if ("checkbox" == h) {
                        var b = _;
                        this.isArray(b) || (b = [b]), A = -1 != b.indexOf(u[m].getAttribute("value"))
                    }
                    "radio" == h && (A = u[m].getAttribute("value") == y.trim()), A ? (u[m].checked = !0, e && u[m].setAttribute("checked", "checked")) : (u[m].checked = !1, e && u[m].removeAttribute("checked"));
                    var w = this.findAncestor(u[m], "ladi-form-checkbox-item");
                    if (!this.isEmpty(w)) {
                        var S = w.querySelector("span");
                        this.isEmpty(S) || S.setAttribute("data-checked", u[m].checked)
                    }
                } else f = this.findAncestor(u[m], "ladi-element"), (this.isEmpty(f) || "true" != f.getAttribute("data-quantity")) && (u[m].value = y.trim(), e && u[m].setAttribute("value", u[m].value));
            if ("TEXTAREA" == u[m].tagName && (u[m].value = y.trim(), e && (u[m].innerHTML = u[m].value)), "SELECT" == u[m].tagName) {
                var T = u[m].querySelector('option[value="' + y.trim() + '"]');
                if (!this.isEmpty(T) && (u[m].value = T.getAttribute("value"), e && !T.hasAttribute("selected"))) {
                    for (var O = u[m].querySelectorAll("option"), C = 0; C < O.length; C++) O[C].removeAttribute("selected");
                    T.setAttribute("selected", "selected")
                }
            }
        }
    }
}, LadiPageScriptV2.prototype.setDataReplaceStart = function () {
    for (var t = document.querySelectorAll(".ladi-headline, .ladi-paragraph, .ladi-list-paragraph ul"), e = 0; e < t.length; e++) this.convertDataReplaceStr(t[e].innerHTML, !1, t[e], !0);
    this.setDataReplaceElement(!0, !0, null, null, Object.keys(this.runtime.replaceStr))
}, LadiPageScriptV2.prototype.runLimitRequest = function (t, e) {
    var i = this,
        a = 1e3 / t;
    if (i.runtime.tmp.time_limit_request_next > Date.now()) return i.runTimeout(function () {
        i.runLimitRequest(t, e)
    }, a / 5);
    i.runtime.tmp.time_limit_request_next = Date.now() + a, i.isFunction(e) && e()
}, LadiPageScriptV2.prototype.showMessage = function (t, e, i) {
    var a = this;
    if (t = a.convertDataReplaceStr(t, !1, null, !1, e), a.runtime.has_popupx) a.runtime.tmp.popupx_show_message_callback = i, a.runtime.tmp.runActionPopupX({
        message: t,
        action: {
            type: "show_message"
        }
    });
    else {
        var n = document.getElementsByClassName("ladipage-message")[0];
        if (this.isEmpty(n) || n.parentElement.removeChild(n), this.isEmpty(t)) return void(this.isFunction(i) && i());
        (n = document.createElement("div"))
        .className = "ladipage-message", document.body.appendChild(n);
        var o = document.createElement("div");
        o.className = "ladipage-message-box", n.appendChild(o);
        var r = document.createElement("span");
        o.appendChild(r), r.textContent = this.const.LANG.ALERT_TITLE;
        var s = document.createElement("div");
        s.className = "ladipage-message-text", o.appendChild(s), s.innerHTML = t;
        var l = document.createElement("button");
        l.className = "ladipage-message-close", o.appendChild(l), l.textContent = this.const.LANG.ALERT_BUTTON_TEXT, l.focus(), l.addEventListener("click", function (t) {
            t.stopPropagation(), n.parentElement.removeChild(n), a.isFunction(i) && i()
        })
    }
}, LadiPageScriptV2.prototype.getTextClipboard = function (t, e) {
    var i = this,
        a = function (a) {
            i.isFunction(e) && (a = i.isEmpty(a) ? i.isEmpty(t) ? "" : t : a, e(!0, a))
        },
        n = function () {
            try {
                var t = document.createElement("textarea");
                t.setAttribute("style", "position: fixed; top: 0, left: 0, width: 1px; height: 1px; opacity: 0;"), document.body.appendChild(t), t.focus();
                var n = document.execCommand("paste"),
                    o = t.value;
                if (t.parentElement.removeChild(t), n) return void a(o)
            } catch (t) {}
            i.isFunction(e) && e(!1, null)
        };
    window.navigator.clipboard ? window.navigator.clipboard.readText()
        .then(a)
        .catch(n) : n()
}, LadiPageScriptV2.prototype.copyTextClipboard = function (t, e) {
    var i = this,
        a = function () {
            i.isFunction(e) && e(!0, t)
        },
        n = function () {
            try {
                var n = document.createElement("textarea");
                n.setAttribute("style", "position: fixed; top: 0, left: 0, width: 1px; height: 1px; opacity: 0;"), document.body.appendChild(n), n.value = t, n.select();
                var o = document.execCommand("copy");
                if (n.parentElement.removeChild(n), o) return void a()
            } catch (t) {}
            i.isFunction(e) && e(!1, null)
        };
    window.navigator.clipboard ? window.navigator.clipboard.writeText(t)
        .then(a)
        .catch(n) : n()
}, LadiPageScriptV2.prototype.fireEvent = function (t, e, i) {
    t = this.isString(t) ? document.querySelector(t) : t;
    var a = document.createEvent("HTMLEvents");
    (a.initEvent(e, !0, !0), this.isObject(i)) && Object.keys(i)
        .forEach(function (t) {
            a[t] = i[t]
        });
    return !t.dispatchEvent(a)
}, LadiPageScriptV2.prototype.tapEventListener = function (t, e) {
    var i = this,
        a = function (t) {
            i.isFunction(e) && e(t)
        };
    if (t.addEventListener("click", a), "ontouchstart" in window) {
        var n = 0,
            o = 0,
            r = i.getWidthDevice(),
            s = Math.max(1, Math.floor(.01 * r)),
            l = null;
        t.addEventListener("touchstart", function (e) {
            e = i.getEventCursorData(e), i.removeTimeout(l), n = e.screenX, o = e.screenY, t.removeEventListener("click", a)
        }, i.runtime.scrollEventPassive), t.addEventListener("touchend", function (e) {
            e = i.getEventCursorData(e), Math.abs(e.screenX - n) <= s && Math.abs(e.screenY - o) <= s && a(e), l = i.runTimeout(function () {
                t.addEventListener("click", a)
            }, i.runtime.time_click)
        })
    }
}, LadiPageScriptV2.prototype.findAncestor = function (t, e) {
    if (this.isNull(t) || this.isNull(t.classList) || !t.classList.contains(e))
        for (;
            (t = t.parentElement) && !t.classList.contains(e););
    return t
}, LadiPageScriptV2.prototype.createStyleElement = function (t, e) {
    var i = document.getElementById(t);
    return this.isEmpty(i) && ((i = document.createElement("style"))
        .id = t, i.type = "text/css", document.head.appendChild(i)), i.innerHTML != e && (i.innerHTML = e), i
}, LadiPageScriptV2.prototype.createTmpElement = function (t, e, i, a, n) {
    var o = document.createElement(t);
    this.isEmpty(i) || Object.keys(i)
        .forEach(function (t) {
            o.setAttribute(t, i[t])
        });
    var r = document.createElement("div");
    return r.appendChild(o), a ? o.outerHTML = e : o.innerHTML = e, n ? r : r.firstChild
}, LadiPageScriptV2.prototype.getCountdownTime = function (t, e) {
    var i = Math.floor(t / 1e3),
        a = i % 86400,
        n = a % 3600,
        o = Math.floor(i / 86400),
        r = Math.floor(a / 3600),
        s = Math.floor(n / 60),
        l = n % 60;
    o = o < 0 ? 0 : o, r = r < 0 ? 0 : r, s = s < 0 ? 0 : s, l = l < 0 ? 0 : l, o = o < 10 ? "0" + o : o, r = r < 10 ? "0" + r : r, s = s < 10 ? "0" + s : s, l = l < 10 ? "0" + l : l;
    var d = {};
    return d[this.const.COUNTDOWN_ITEM_TYPE.day] = o, d[this.const.COUNTDOWN_ITEM_TYPE.hour] = r, d[this.const.COUNTDOWN_ITEM_TYPE.minute] = s, d[this.const.COUNTDOWN_ITEM_TYPE.seconds] = l, this.isEmpty(e) ? d : d[e]
}, LadiPageScriptV2.prototype.getElementBoundingClientRect = function (t) {
    this.isString(t) && (t = document.getElementById(t));
    var e = t.getBoundingClientRect();
    return (this.isNull(e.x) || this.isNull(e.y)) && (e.x = e.left, e.y = e.top), e
}, LadiPageScriptV2.prototype.getElementViewBox = function (t) {
    var e = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        i = t.getAttribute("viewBox")
        .split(" ");
    return e.x = parseFloatLadiPage(i[0]) || 0, e.y = parseFloatLadiPage(i[1]) || 0, e.width = parseFloatLadiPage(i[2]) || 0, e.height = parseFloatLadiPage(i[3]) || 0, e
}, LadiPageScriptV2.prototype.getEventCursorData = function (t) {
    var e = this;
    return ["pageX", "pageY", "screenX", "screenY"].forEach(function (i) {
        e.isNull(t[i]) && (!e.isEmpty(t.touches) && t.touches.length > 0 ? t[i] = t.touches[0][i] : !e.isEmpty(t.targetTouches) && t.targetTouches.length > 0 ? t[i] = t.targetTouches[0][i] : !e.isEmpty(t.changedTouches) && t.changedTouches.length > 0 && (t[i] = t.changedTouches[0][i]))
    }), t
}, LadiPageScriptV2.prototype.getElementAHref = function (t, e) {
    var i = document.createElement("a");
    return !e || t.toLowerCase()
        .startsWith("http://") || t.toLowerCase()
        .startsWith("https://") || t.startsWith("//") || (t = "http://" + t), i.href = t, i
}, LadiPageScriptV2.prototype.loadScript = function (t, e, i, a) {
    var n = document.createElement("script");
    (n.type = "text/javascript", this.isFunction(i) && (a = i, i = e, e = null), i && (n.async = !0), this.isObject(e)) && Object.keys(e)
        .forEach(function (t) {
            n.setAttribute(t, e[t])
        });
    n.addEventListener("load", a), n.src = t, document.head.appendChild(n)
}, LadiPageScriptV2.prototype.showLoadingBlur = function () {
    var t = document.getElementsByClassName("ladi-loading")[0];
    this.isEmpty(t) && ((t = document.createElement("div"))
        .className = "ladi-loading", t.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>", document.body.appendChild(t))
}, LadiPageScriptV2.prototype.hideLoadingBlur = function () {
    var t = document.getElementsByClassName("ladi-loading")[0];
    this.isEmpty(t) || t.parentElement.removeChild(t)
}, LadiPageScriptV2.prototype.randomId = function () {
    var t = Date.now(),
        e = window.performance && window.performance.now && 1e3 * window.performance.now() || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (i) {
        var a = 16 * Math.random();
        return t > 0 ? (a = (t + a) % 16 | 0, t = Math.floor(t / 16)) : (a = (e + a) % 16 | 0, e = Math.floor(e / 16)), ("x" === i ? a : 3 & a | 8)
            .toString(16)
    })
}, LadiPageScriptV2.prototype.decodeValue = function (t) {
    var e = this;
    e.isObject(t) && Object.keys(t)
        .forEach(function (i) {
            t[i] = e.decodeValue(t[i])
        });
    if (e.isArray(t))
        for (var i = 0; i < t.length; i++) t[i] = e.decodeValue(t[i]);
    return e.isString(t) && (t = t.decode()), t
}, LadiPageScriptV2.prototype.run = function (t) {
    var e = this;
    if (e.runtime.isLoadHtmlGlobal) {
        e.runtime.isIE = !!document.documentMode, e.runtime.isIE = e.runtime.isIE ? e.runtime.isIE : !e.runtime.isIE && !!window.StyleMedia, e.runtime.scrollEventPassive = null;
        try {
            var i = Object.defineProperty({}, "passive", {
                get: function () {
                    e.runtime.scrollEventPassive = {
                        passive: !0
                    }
                }
            });
            window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i)
        } catch (t) {}
        e.runtime.isClient = t, e.runtime.timenow = window.ladi("_timenow")
            .get_cookie(), e.isEmpty(e.runtime.timenow) ? (e.runtime.timenow = Date.now(), window.ladi("_timenow")
                .set_cookie(e.runtime.timenow, 1)) : e.runtime.timenow = parseFloatLadiPage(e.runtime.timenow) || 0;
        try {
            e.runtime.widthScrollBar = window.innerWidth - document.documentElement.clientWidth
        } catch (t) {}
        if (e.isString(e.runtime.eventData)) try {
            var a = decodeURIComponentLadiPage(e.runtime.eventData);
            e.runtime.eventData = JSON.parse(a)
        } catch (t) {
            var n = e.runtime.eventData.replaceAll(/&amp;/g, "&")
                .replaceAll(/&gt;/g, ">")
                .replaceAll(/&lt;/g, "<")
                .replaceAll(/&quot;/g, '"');
            n = n.replaceAll("\r\n", "")
                .replaceAll("\n", ""), e.runtime.eventData = JSON.parse(n)
        } else {
            var o = document.getElementById("script_event_data");
            if (!e.isEmpty(o)) try {
                e.runtime.eventData = JSON.parse(o.innerHTML), e.runtime.eventData = e.decodeValue(e.runtime.eventData)
            } catch (t) {}
        }
        e.isNull(window.ladi_is_desktop) ? e.runtime.isDesktop = t ? !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(window.navigator.userAgent.toLowerCase()) : LadiPage.isDesktop() : e.runtime.isDesktop = t ? window.ladi_is_desktop : LadiPage.isDesktop(), e.runtime.isBrowserDesktop = !("ontouchstart" in window), e.runtime.device = e.runtime.isDesktop ? e.const.DESKTOP : e.const.MOBILE, e.runtime.tmp.isFirstScroll = !0, e.runtime.tmp.capture_form_data_last = {}, e.runtime.tmp.listAfterLocation = [], e.runtime.tmp.product_info = {}, e.runtime.tmp.timeout_product_info = {}, e.runtime.tmp.product_tag_info = {}, e.runtime.tmp.timeout_product_tag_info = {}, e.runtime.tmp.dataset_check_load = !1, e.runtime.tmp.dataset_data = {}, e.runtime.tmp.timeout_dataset_data = {}, e.runtime.tmp.cart = [], e.runtime.tmp.add_to_cart_discount = 0, e.runtime.tmp.add_to_cart_fee_shipping = 0, e.runtime.tmp.is_click_add_to_cart = !1, e.runtime.tmp.is_click_check_price_discount = !1, e.runtime.tmp.current_use_coupon = null;
        var r = Object.keys(e.runtime.eventDataGlobal);
        r.forEach(function (t) {
                e.runtime.eventData[t] = e.runtime.eventDataGlobal[t], delete e.runtime.eventDataGlobal[t]
            }), (r = Object.keys(e.runtime.eventData))
            .forEach(function (t) {
                Object.keys(e.runtime.eventData[t])
                    .forEach(function (i) {
                        if (e.runtime.isDesktop) {
                            if (i.toLowerCase()
                                .startsWith(e.const.DESKTOP)) {
                                var a = e.const.MOBILE + i.substring(e.const.DESKTOP.length);
                                e.runtime.eventData[t][a] = e.runtime.eventData[t][i]
                            }
                        } else if (i.toLowerCase()
                            .startsWith(e.const.MOBILE)) {
                            var n = e.const.DESKTOP + i.substring(e.const.MOBILE.length);
                            e.runtime.eventData[t][n] = e.runtime.eventData[t][i]
                        }
                    })
            });
        try {
            var s = window.ladi("LADI_DATA")
                .get_cookie();
            s = JSON.parse(Base64.decode(s || Base64.encode("{}"))), Object.keys(s)
                .forEach(function (t) {
                    e.setDataReplaceStr(t, s[t])
                })
        } catch (t) {}
        var l = function (t) {
                var i = e.copy(t);
                return e.isObject(i) && e.runtime.list_set_value_name_country.forEach(function (t) {
                    if (!e.isEmpty(i[t])) {
                        var a = i[t].split(":");
                        a.length > 1 && a.shift(), i[t] = a.join(":")
                    }
                }), i
            },
            d = e.getURLSearchParams(null, null, !0),
            c = e.getURLSearchParams(window.location.search, null, !0),
            p = l(d),
            u = Object.keys(p),
            m = "";
        u.forEach(function (t) {
                if (t != e.const.TRACKING_NAME && t != e.const.ACCESS_KEY_NAME) {
                    if (e.setDataReplaceStr(t, p[t]), "products" == t && e.isString(p[t])) {
                        var i = p[t].split("|");
                        2 == i.length && -1 == u.indexOf("product_id") && e.setDataReplaceStr("product_value", i[0]), 2 == i.length && -1 == u.indexOf("product_name") && e.setDataReplaceStr("product_name", i[1])
                    }(e.isArray(c[t]) ? c[t] : [c[t]])
                    .forEach(function (i) {
                        e.isEmpty(m) ? m += "?" : m += "&", m += t + "=" + encodeURIComponent(i)
                    })
                }
            }), window.ladi(e.const.TRACKING_NAME)
            .delete_cookie("/"), e.historyReplaceState(window.location.pathname + m + window.location.hash);
        var _ = c[e.const.REF_NAME];
        e.isEmpty(_) ? _ = window.ladi("ladi_ref")
            .get_cookie() : window.ladi("ladi_ref")
            .set_cookie(_, 90, "/", window.location.host);
        var y = Object.keys(e.runtime.eventData),
            g = [],
            f = window.ladi("LADI_CLIENT_ID")
            .get_cookie(),
            h = parseFloatLadiPage(window.ladi("LADI_PAGE_VIEW")
                .get_cookie()) || 0,
            v = parseFloatLadiPage(window.ladi("LADI_FORM_SUBMIT")
                .get_cookie()) || 0,
            E = window.ladi("LADI_FUNNEL_NEXT_URL")
            .get_cookie(),
            P = window.ladi("LADI_CAMP_ID")
            .get_cookie(),
            L = window.ladi("LADI_CAMP_NAME")
            .get_cookie(),
            A = window.ladi("LADI_CAMP_TYPE")
            .get_cookie(),
            b = window.ladi("LADI_CAMP_TARGET_URL")
            .get_cookie(),
            w = window.ladi("LADI_CAMP_ORIGIN_URL")
            .get_cookie(),
            S = parseFloatLadiPage(window.ladi("LADI_CAMP_PAGE_VIEW")
                .get_cookie()) || 0,
            T = parseFloatLadiPage(window.ladi("LADI_CAMP_FORM_SUBMIT")
                .get_cookie()) || 0,
            O = window.ladi("LADI_CAMP_CONFIG")
            .get_cookie(),
            C = function (t, i, a) {
                if ("FormSubmit" == t && e.isEmpty(f)) e.isFunction(a) && a();
                else if (!e.runtime.is_popupx || e.runtime.has_popupx) {
                    var n = e.runtime.publish_platform,
                        o = e.runtime.store_id,
                        r = e.runtime.time_zone,
                        s = window.location.host,
                        l = window.location.href,
                        d = e.runtime.ladipage_id,
                        c = {
                            event: t,
                            pixel_id: o,
                            time_zone: r,
                            domain: s,
                            url: l,
                            ladipage_id: d,
                            publish_platform: n,
                            data: []
                        };
                    Object.keys(i)
                        .forEach(function (t) {
                            c[t] = i[t]
                        }), e.runtime.is_popupx && (c.type = "POPUPX", c.origin_store_id = e.runtime.tmp.popupx_origin_store_id, c.origin_referer = e.runtime.tmp.popupx_origin_referer, c.origin_domain = e.runtime.tmp.popupx_origin_domain, c.origin_url = e.runtime.tmp.popupx_origin_url, c.element_id = e.runtime.tmp.popupx_current_element_id, e.isEmpty(c.element_id)) ? e.runTimeout(function () {
                            C(t, i, a)
                        }, 100) : ("FormSubmit" == t && (e.isEmpty(P) ? v++ : (b == w && v++, T++), window.ladi("LADI_CAMP_FORM_SUBMIT")
                            .set_cookie(T, 3650), window.ladi("LADI_FORM_SUBMIT")
                            .set_cookie(v, 3650), e.runtime.is_popupx && e.runtime.tmp.runActionPopupX({
                                action: {
                                    type: "set_submit_form"
                                }
                            })), "PageView" == t && e.runtime.has_popupx && (h++, window.ladi("LADI_PAGE_VIEW")
                            .set_cookie(h, 3650)), e.sendRequest("POST", e.const.API_ANALYTICS_EVENT, JSON.stringify(c), !0, {
                            "Content-Type": "application/json",
                            LADI_CLIENT_ID: f,
                            LADI_PAGE_VIEW: h,
                            LADI_FORM_SUBMIT: v,
                            LADI_CAMP_ID: P,
                            LADI_CAMP_NAME: L,
                            LADI_CAMP_TYPE: A,
                            LADI_CAMP_TARGET_URL: b,
                            LADI_CAMP_ORIGIN_URL: w,
                            LADI_CAMP_PAGE_VIEW: S,
                            LADI_CAMP_FORM_SUBMIT: T
                        }, function (t, i, n) {
                            n.readyState == XMLHttpRequest.DONE && e.isFunction(a) && a(i, t)
                        }))
                } else e.runTimeout(function () {
                    C(t, i, a)
                }, 100)
            },
            N = function (t, i, a, n) {
                var o = null,
                    r = null,
                    s = null,
                    l = 0;
                if (e.isEmpty(i) || "POPUP_PRODUCT" != i.id)
                    if (e.isEmpty(i) || "POPUP_BLOG" != i.id) e.isFunction(n) && n();
                    else {
                        if (o = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function (e) {
                                N(t, i, a, n)
                            }), !e.isObject(o) || !e.isObject(o.product) || !e.isObject(o.store_info)) return;
                        var d = function () {
                            var t, a, c = !0;
                            if (Object.keys(o.product)
                                .forEach(function (t) {
                                    if (c && e.isString(o.product[t]) && o.product[t].startsWith(e.const.DATASET_CONTENT_SOURCE_URL) && o.product[t].endsWith(e.const.DATASET_CONTENT_SOURCE_ENDSWITH)) {
                                        var i = o.product[t].replaceAll(e.const.DATASET_CONTENT_SOURCE_URL, e.const.API_DATASET_BLOG);
                                        c = !1, e.showLoadingBlur(), e.sendRequest("GET", i, null, !0, null, function (e, i, a) {
                                            a.readyState == XMLHttpRequest.DONE && (o.product[t] = e, d())
                                        })
                                    }
                                }), c) {
                                e.hideLoadingBlur(), i.classList.add("opacity-0"), r = document.querySelectorAll("#" + i.id + " .ladi-element");
                                var p = null,
                                    u = function (t) {
                                        e.removeTimeout(p);
                                        var a = function (t, i) {
                                            var a = e.findAncestor(t.parentElement, "ladi-element");
                                            e.updateHeightElement(!0, t, a, i, t.clientHeight)
                                        };
                                        p = e.runTimeout(function () {
                                            e.showParentVisibility(r[0], function () {
                                                for (l = 0; l < r.length; l++) {
                                                    if (r[l].querySelectorAll(".ladi-headline, .ladi-paragraph")
                                                        .length > 0 && r[l].hasAttribute("data-height")) {
                                                        var t = parseFloatLadiPage(r[l].getAttribute("data-height")) || 0;
                                                        t != r[l].clientHeight && (r[l].setAttribute("data-height", r[l].clientHeight), a(r[l], t))
                                                    }
                                                }
                                            }), e.runShowPopup(!0, i.id, null, null, !0)
                                        }, e.isEmpty(t) ? 0 : 100)
                                    };
                                e.showParentVisibility(r[0], function () {
                                    for (l = 0; l < r.length; l++) {
                                        r[l].querySelectorAll(".ladi-headline, .ladi-paragraph")
                                            .length > 0 && !r[l].hasAttribute("data-height") && r[l].setAttribute("data-height", r[l].clientHeight)
                                    }
                                });
                                var m = function (t) {
                                    (!e.runtime.isDesktop || e.isEmpty(t.getAttribute("height")) && e.isEmpty(t.style.getPropertyValue("height"))) && (t.addEventListener("load", u), t.addEventListener("error", u))
                                };
                                for (l = 0; l < r.length; l++) e.runtime.tmp.runLadiSaleProductKey(r[l].id, !1, !1, s, o, !0, null, !0), t = r[l], void 0, a = e.runtime.eventData[t.id], e.isFunction(e.runtime.tmp.runOptionAction) && e.isObject(a) && e.runtime.tmp.runOptionAction(t, t.id, a.type, a, o);
                                for (l = 0; l < r.length; l++)
                                    for (var _ = r[l].querySelectorAll(".ladi-headline img, .ladi-paragraph img"), y = 0; y < _.length; y++) m(_[y]);
                                e.isFunction(n) && n(), u(), e.runTimeout(function () {
                                    i.classList.remove("opacity-0")
                                }, 150)
                            }
                        };
                        d()
                    } else {
                    if (o = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function (e) {
                            N(t, i, a, n)
                        }), !e.isObject(o) || !e.isObject(o.store_info) || !e.isObject(o.product) || !e.isArray(o.product.variants) || o.product.variants.length <= 0) return;
                    if (e.isEmpty(a["option.product_variant_id"])) {
                        s = o.product.variants[0];
                        var c = e.findAncestor(t, "ladi-collection-item"),
                            p = null;
                        if (e.isEmpty(c)) {
                            for (var u = document.querySelectorAll('[data-variant="true"] select[data-store-id="' + o.store_info.id + '"][data-product-id="' + o.product.product_id + '"]'), m = 0; m < u.length; m++)
                                if (e.isEmpty(e.findAncestor(u[m], "ladi-collection-item"))) {
                                    p = u[m];
                                    break
                                }
                        } else p = c.querySelector('[data-variant="true"]');
                        if (!e.isEmpty(p)) {
                            p = e.findAncestor(p, "ladi-element");
                            var _ = e.getProductVariantId(p, o.product);
                            e.isEmpty(_) || (s = o.product.variants.find(function (t) {
                                return t.product_variant_id == _
                            }))
                        }
                    } else s = o.product.variants.find(function (t) {
                        return t.product_variant_id == a["option.product_variant_id"]
                    });
                    if (e.isEmpty(s)) return;
                    var y = function (t) {
                        var i = e.runtime.eventData[t.id];
                        e.isFunction(e.runtime.tmp.runOptionAction) && e.isObject(i) && e.runtime.tmp.runOptionAction(t, t.id, i.type, i, o)
                    };
                    for (r = document.querySelectorAll("#" + i.id + " .ladi-element"), l = 0; l < r.length; l++) e.runtime.tmp.runLadiSaleProductKey(r[l].id, !1, !1, s, o), y(r[l]);
                    e.isFunction(n) && n()
                }
            },
            I = function (t, i) {
                i = e.isArray(i) ? i : [];
                var a = e.runtime.eventData[t.id],
                    n = i.findIndex(function (t) {
                        return t.action_type == e.const.ACTION_TYPE.complete && (t.type == e.const.DATA_ACTION_TYPE.popup || t.type == e.const.DATA_ACTION_TYPE.popup_cart || t.type == e.const.DATA_ACTION_TYPE.popup_checkout)
                    });
                n = -1 != n, i.forEach(function (i) {
                    if (i.action_type == e.const.ACTION_TYPE.complete) {
                        var o = null,
                            r = null;
                        if (i.type == e.const.DATA_ACTION_TYPE.section) {
                            var s = 0,
                                l = document.getElementById(i.action);
                            if (!e.isEmpty(l)) {
                                if (n) return void window.ladi(l.id)
                                    .scroll(!1, !0);
                                if (o = e.findAncestor(t, "ladi-popup"), !e.isEmpty(o)) {
                                    var d = e.findAncestor(o, "ladi-element");
                                    d.hasAttribute("data-popup-backdrop") && (window.ladi(d.id)
                                        .hide(), s = 100)
                                }
                                e.runTimeout(function () {
                                    window.ladi(l.id)
                                        .scroll()
                                }, s)
                            }
                        }
                        if (i.type == e.const.DATA_ACTION_TYPE.popup && (o = document.getElementById(i.action), e.isEmpty(o) || N(t, o, a, function () {
                                window.ladi(i.action)
                                    .show()
                            })), i.type == e.const.DATA_ACTION_TYPE.hidden_show && (e.isArray(i.hidden_ids) && i.hidden_ids.forEach(function (t) {
                                window.ladi(t)
                                    .hide()
                            }), e.isArray(i.show_ids) && i.show_ids.forEach(function (t) {
                                window.ladi(t)
                                    .show()
                            })), i.type == e.const.DATA_ACTION_TYPE.change_index && (r = window.ladi(i.action), e.isFunction(r[i.change_index_type]) ? r[i.change_index_type]() : r.index(i.change_index_number || 1)), i.type == e.const.DATA_ACTION_TYPE.set_value && (r = window.ladi(i.action), e.isEmpty(r) || (i.is_clipboard ? e.getTextClipboard(i.str, function (e, a) {
                                r.value(e ? a : i.str), k(t, e, !0)
                            }) : r.value(i.str))), i.type == e.const.DATA_ACTION_TYPE.link) {
                            var c = i.action;
                            e.isEmpty(c) || (c = e.getLinkUTMRedirect(c, null), c = e.convertDataReplaceStr(c, !0), window.ladi(c)
                                .open_url(i.target, i.nofollow))
                        }
                    }
                })
            },
            k = function (t, i, a) {
                var n = parseFloatLadiPage(t.getAttribute("data-timeout-id-copied")) || 0;
                e.removeTimeout(n);
                var o = "hint-{0}-middle-s-small-hint-anim-d-short",
                    r = !0;
                e.getElementBoundingClientRect(t)
                    .y < 35 && (r = !1), r ? (t.classList.add(o.format("top")), t.classList.remove(o.format("bottom"))) : (t.classList.remove(o.format("top")), t.classList.add(o.format("bottom"))), i ? a ? t.setAttribute("data-hint", e.const.LANG.PASTED) : t.setAttribute("data-hint", e.const.LANG.COPIED) : t.setAttribute("data-hint", e.const.LANG.FALIED), n = e.runTimeout(function () {
                        t.classList.remove(o.format("top")), t.classList.remove(o.format("bottom")), t.removeAttribute("data-hint"), t.removeAttribute("data-timeout-id-copied")
                    }, 1e3), t.setAttribute("data-timeout-id-copied", n)
            },
            x = function (t, i, a, n, o) {
                if (t = t || document.getElementById(i), !e.isEmpty(t)) {
                    var r = function (t) {
                            if (!e.isEmpty(t)) return "true" == t.getAttribute("data-dropbox") ? t : r(t.parentElement)
                        },
                        s = function (t, i) {
                            if ("false" == t.getAttribute("data-click")) return !1;
                            var a = r(i.target);
                            if (!e.isEmpty(a)) {
                                var n = document.getElementById(a.getAttribute("data-from-doc-id"));
                                if (!e.isEmpty(n)) return n.id != t.id && s(t, {
                                    target: n
                                })
                            }
                            return !0
                        },
                        l = n["option.is_submit_form"],
                        d = n["option.data_submit_form_id"];
                    if (!n["option.action_funnel"] || e.isEmpty(E))
                        if (!l || e.isEmpty(d)) {
                            var c = n["option.data_event"];
                            if (!e.isArray(c) && (c = [], e.isObject(n["option.data_action"]))) {
                                var p = e.copy(n["option.data_action"]);
                                p.action_type = e.const.ACTION_TYPE.action, c.push(p)
                            }
                            var u = function (e, i) {
                                    return k(t, e, !1)
                                },
                                m = c.findIndex(function (t) {
                                    return t.action_type == e.const.ACTION_TYPE.action && (t.type == e.const.DATA_ACTION_TYPE.popup || t.type == e.const.DATA_ACTION_TYPE.popup_cart || t.type == e.const.DATA_ACTION_TYPE.popup_checkout)
                                });
                            m = -1 != m, c.forEach(function (a) {
                                if (a.action_type == e.const.ACTION_TYPE.action) {
                                    if (a.type == e.const.DATA_ACTION_TYPE.link) {
                                        var r = null;
                                        t.addEventListener("click", function (i) {
                                            s(t, i) && "true" == t.getAttribute("data-action") && (r = a.action, e.isEmpty(a.action_mapping) || (r = a.action_mapping), e.isEmpty(r) || (r = e.getLinkUTMRedirect(r, null), r = e.convertDataReplaceStr(r, !0), window.ladi(r)
                                                .open_url(a.target, a.nofollow)))
                                        });
                                        var l = function () {
                                            if (e.isNull(o) && (o = e.generateVariantProduct(n, !1, null, null, null, null, !0, !0, l)), e.isObject(o) && e.isObject(o.store_info) && e.isObject(o.product)) {
                                                r = a.action;
                                                var i = a.link_mapping;
                                                e.isEmpty(i) && (i = a.link_mapping_custom), e.isEmpty(i) || (a.action_mapping = o.product[i], e.isEmpty(a.action_mapping) || (r = a.action_mapping)), e.isEmpty(r) ? (t.removeAttribute("data-replace-href"), t.removeAttribute("href")) : (r = e.getLinkUTMRedirect(r, null), t.setAttribute("data-replace-href", r), t.href = e.convertDataReplaceStr(r, !0))
                                            }
                                        };
                                        l()
                                    }
                                    if (a.type == e.const.DATA_ACTION_TYPE.email && t.addEventListener("click", function (i) {
                                            s(t, i) && ("true" != t.getAttribute("data-action") || e.isEmpty(a.action) || window.ladi("mailto:" + a.action)
                                                .open_url())
                                        }), a.type == e.const.DATA_ACTION_TYPE.phone && t.addEventListener("click", function (i) {
                                            s(t, i) && ("true" != t.getAttribute("data-action") || e.isEmpty(a.action) || window.ladi("tel:" + a.action)
                                                .open_url())
                                        }), a.type == e.const.DATA_ACTION_TYPE.collapse && t.addEventListener("click", function (i) {
                                            if (s(t, i)) {
                                                var n = document.getElementById(a.action);
                                                e.isEmpty(n) || window.ladi(a.action)
                                                    .collapse()
                                            }
                                        }), a.type == e.const.DATA_ACTION_TYPE.section && t.addEventListener("click", function (i) {
                                            if (s(t, i)) {
                                                var n = 0,
                                                    o = document.getElementById(a.action);
                                                if (!e.isEmpty(o)) {
                                                    if (m) return void window.ladi(o.id)
                                                        .scroll(!1, !0);
                                                    var r = e.findAncestor(t, "ladi-popup");
                                                    if (!e.isEmpty(r)) {
                                                        var l = e.findAncestor(r, "ladi-element");
                                                        l.hasAttribute("data-popup-backdrop") && (window.ladi(l.id)
                                                            .hide(), n = 100)
                                                    }
                                                    e.runTimeout(function () {
                                                        window.ladi(o.id)
                                                            .scroll()
                                                    }, n)
                                                }
                                            }
                                        }), a.type == e.const.DATA_ACTION_TYPE.popup && t.addEventListener("click", function (i) {
                                            if (s(t, i)) {
                                                var o = document.getElementById(a.action);
                                                e.isEmpty(o) || N(t, o, n, function () {
                                                    window.ladi(a.action)
                                                        .show()
                                                })
                                            }
                                        }), a.type == e.const.DATA_ACTION_TYPE.dropbox && t.addEventListener("click", function (i) {
                                            if (s(t, i)) {
                                                var n = document.getElementById(a.action);
                                                e.isEmpty(n) || window.ladi(a.action)
                                                    .showDropbox(t, a.dropbox, !1)
                                            }
                                        }), a.type == e.const.DATA_ACTION_TYPE.hidden_show && t.addEventListener("click", function (i) {
                                            s(t, i) && (e.isArray(a.hidden_ids) && a.hidden_ids.forEach(function (t) {
                                                window.ladi(t)
                                                    .hide()
                                            }), e.isArray(a.show_ids) && a.show_ids.forEach(function (t) {
                                                window.ladi(t)
                                                    .show()
                                            }))
                                        }), a.type == e.const.DATA_ACTION_TYPE.change_index && t.addEventListener("click", function (i) {
                                            if (s(t, i)) {
                                                var n = window.ladi(a.action);
                                                e.isEmpty(n) || (e.isFunction(n[a.change_index_type]) ? n[a.change_index_type]() : n.index(a.change_index_number || 1))
                                            }
                                        }), a.type == e.const.DATA_ACTION_TYPE.set_style) {
                                        var d = window.ladi(a.action);
                                        e.isEmpty(d) || d.set_style(t, a, !0), t.addEventListener("click", function (i) {
                                            if (s(t, i)) {
                                                var n = window.ladi(a.action);
                                                e.isEmpty(n) || n.set_style(t, a)
                                            }
                                        })
                                    }
                                    a.type == e.const.DATA_ACTION_TYPE.set_value && t.addEventListener("click", function (i) {
                                        if (s(t, i)) {
                                            var n = window.ladi(a.action);
                                            e.isEmpty(n) || (a.is_clipboard ? e.getTextClipboard(a.str, function (e, i) {
                                                n.value(e ? i : a.str), k(t, e, !0)
                                            }) : n.value(a.str))
                                        }
                                    }), a.type == e.const.DATA_ACTION_TYPE.copy_clipboard && t.addEventListener("click", function (i) {
                                        if (s(t, i)) {
                                            var n = null,
                                                o = window.ladi(a.action);
                                            e.isEmpty(o) || (n = o.value(null, null, {
                                                only_text: !0
                                            })), n = e.isEmpty(n) ? a.str : n, e.isEmpty(n) || e.copyTextClipboard(n, u)
                                        }
                                    });
                                    var c = null;
                                    if (a.type == e.const.DATA_ACTION_TYPE.lightbox ? c = a.lightbox_type : "lightbox_image" == a.type ? c = e.const.DATA_ACTION_LIGHTBOX_TYPE.image : "lightbox_video" == a.type ? c = e.const.DATA_ACTION_LIGHTBOX_TYPE.video : "lightbox_iframe" == a.type && (c = e.const.DATA_ACTION_LIGHTBOX_TYPE.iframe), c == e.const.DATA_ACTION_LIGHTBOX_TYPE.image && t.addEventListener("click", function (e) {
                                            s(t, e) && lightbox_image(a.image_url)
                                        }), c == e.const.DATA_ACTION_LIGHTBOX_TYPE.video) {
                                        var p = document.querySelectorAll("#" + i + ".preload")
                                            .length > 0;
                                        p && lightbox_video(a.video_url, a.video_type, p), t.addEventListener("click", function (e) {
                                            s(t, e) && lightbox_video(a.video_url, a.video_type, !1)
                                        })
                                    }
                                    c == e.const.DATA_ACTION_LIGHTBOX_TYPE.iframe && t.addEventListener("click", function (e) {
                                        s(t, e) && lightbox_iframe(a.iframe_url)
                                    }), a.type == e.const.DATA_ACTION_TYPE.popup_cart && t.addEventListener("click", function (i) {
                                        if (s(t, i)) {
                                            var a = document.getElementById("POPUP_CART");
                                            e.isEmpty(a) || window.ladi(a.id)
                                                .show()
                                        }
                                    }), a.type == e.const.DATA_ACTION_TYPE.popup_checkout && t.addEventListener("click", function (i) {
                                        s(t, i) && (e.runtime.shopping_third_party ? e.getThirdPartyCheckoutUrl(!0) : window.ladi("POPUP_CHECKOUT")
                                            .show())
                                    })
                                }
                            }), e.runEventTracking(i, !1, null, t, s)
                        } else t.addEventListener("click", function (i) {
                            if (s(t, i)) {
                                var a = document.getElementById(d);
                                e.isEmpty(a) || a.setAttribute("data-button-submit-other", t.id), window.ladi(d)
                                    .submit()
                            }
                        });
                    else t.addEventListener("click", function (a) {
                        if (s(t, a)) {
                            a.preventDefault();
                            var n = E;
                            n = e.getLinkUTMRedirect(n, null), n = e.convertDataReplaceStr(n, !0), window.ladi(n)
                                .open_url(), e.runEventTracking(i, !1)
                        }
                    })
                }
            },
            D = function (t, i, a, n) {
                if (t = t || document.getElementById(i), !e.isEmpty(t)) {
                    if (!e.isArray(n)) {
                        var o = e.copy(n);
                        n = [], e.isObject(o) && (o.action_type = e.const.ACTION_TYPE.hover, n.push(o))
                    }
                    n.forEach(function (i) {
                        if (i.action_type == e.const.ACTION_TYPE.hover && (i.type == e.const.DATA_ACTION_TYPE.dropbox && (t.addEventListener("mouseenter", function (e) {
                                window.ladi(i.action)
                                    .showDropbox(t, i.dropbox, !0)
                            }), t.addEventListener("mouseleave", function (t) {
                                window.ladi(i.action)
                                    .hide()
                            })), i.type == e.const.DATA_ACTION_TYPE.hidden_show && (t.addEventListener("mouseenter", function (t) {
                                e.isArray(i.hidden_ids) && i.hidden_ids.forEach(function (t) {
                                    window.ladi(t)
                                        .hide()
                                }), e.isArray(i.show_ids) && i.show_ids.forEach(function (t) {
                                    window.ladi(t)
                                        .show()
                                })
                            }), t.addEventListener("mouseleave", function (t) {
                                e.isArray(i.hidden_ids) && i.hidden_ids.forEach(function (t) {
                                    window.ladi(t)
                                        .show()
                                }), e.isArray(i.show_ids) && i.show_ids.forEach(function (t) {
                                    window.ladi(t)
                                        .hide()
                                })
                            })), i.type == e.const.DATA_ACTION_TYPE.change_index && t.addEventListener("mouseenter", function (t) {
                                var a = window.ladi(i.action);
                                e.isFunction(a[i.change_index_type]) ? a[i.change_index_type]() : a.index(i.change_index_number || 1)
                            }), i.type == e.const.DATA_ACTION_TYPE.set_style)) {
                            var a = window.ladi(i.action);
                            e.isEmpty(a) || a.set_style(t, i, !0), t.addEventListener("mouseenter", function (e) {
                                window.ladi(i.action)
                                    .set_style(t, i)
                            }), t.addEventListener("mouseleave", function (e) {
                                window.ladi(i.action)
                                    .remove_style(t, i)
                            })
                        }
                    })
                }
            },
            R = function (t) {
                var i = document.getElementById(t);
                if (!e.isEmpty(i) && t != e.runtime.builder_section_popup_id && t != e.runtime.builder_section_background_id) {
                    var a = i.classList.contains("ladi-section") ? "section" : null;
                    if (e.runtime.is_popupx && "section" == a) {
                        var n = document.createElement("div");
                        n.className = "ladi-section-close", n.addEventListener("click", function (e) {
                            e.stopPropagation(), window.ladi(t)
                                .hide()
                        }), i.appendChild(n)
                    }
                }
            },
            F = function (t, i, a, n, o, r, s, l) {
                "countdown" != a || e.isEmpty(n) || (i = i || document.getElementById(t), e.isEmpty(i) || (i.setAttribute("data-type", n), n != e.const.COUNTDOWN_TYPE.countdown || e.isEmpty(o) || i.setAttribute("data-minute", o), n != e.const.COUNTDOWN_TYPE.endtime || e.isEmpty(l) || i.setAttribute("data-endtime", l), n != e.const.COUNTDOWN_TYPE.daily || e.isEmpty(r) || e.isEmpty(s) || (i.setAttribute("data-daily-start", r), i.setAttribute("data-daily-end", s))))
            },
            q = function (t, i, a, n) {
                "countdown_item" != a || e.isEmpty(n) || (i = i || document.getElementById(t), e.isEmpty(i) || i.setAttribute("data-item-type", n))
            },
            B = function () {
                y.forEach(function (t) {
                    var i = document.getElementById(t);
                    if (!e.isEmpty(i) && "true" != i.getAttribute("data-action")) {
                        var a = e.runtime.eventData[t],
                            n = a["option.data_event"];
                        if (!e.isArray(n) && (n = [], e.isObject(a["option.data_action"]))) {
                            var o = e.copy(a["option.data_action"]);
                            o.action_type = e.const.ACTION_TYPE.action, n.push(o)
                        }! function (t, i) {
                            i.forEach(function (i) {
                                if (i.action_type == e.const.ACTION_TYPE.action && i.type == e.const.DATA_ACTION_TYPE.link)
                                    if (e.isEmpty(t.getAttribute("href"))) t.removeAttribute("href");
                                    else {
                                        var a = e.getLinkUTMRedirect(t.href, null);
                                        t.setAttribute("data-replace-href", a), t.href = e.convertDataReplaceStr(a, !0)
                                    }
                            })
                        }(i, n)
                    }
                });
                for (var t = document.querySelectorAll(".ladi-headline a[href], .ladi-paragraph a[href], .ladi-list-paragraph a[href]"), i = 0; i < t.length; i++)
                    if (e.isEmpty(t[i].getAttribute("href"))) t[i].removeAttribute("href");
                    else {
                        var a = e.getLinkUTMRedirect(t[i].href, null);
                        t[i].setAttribute("data-replace-href", a), t[i].href = e.convertDataReplaceStr(a, !0)
                    }
            },
            M = function () {
                if (t) {
                    var i = function () {
                            if (e.runtime.ladipage_powered_by_classname = e.randomString(e.randomInt(6, 32)), e.runtime.isClient) {
                                var t = document.createElement("div");
                                document.body.insertBefore(t, document.body.childNodes[e.randomInt(0, document.body.childNodes.length)]), t.className = e.runtime.ladipage_powered_by_classname;
                                var i = "." + e.runtime.ladipage_powered_by_classname + ' {width: 0; height: 0; position: fixed; bottom: 0; left: 10px; z-index: 10000000000; background: none; background-size: 90% 70%; border-radius: 4px 4px 0 0; display: block; animation: ' + e.runtime.ladipage_powered_by_classname + " 10s;} @keyframes " + e.runtime.ladipage_powered_by_classname + " {0% {bottom: -40px;} 10% {bottom: 0;} 90% {bottom: 0;} 100% {bottom: -40px;}}",
                                    a = document.createElement("style");
                                a.type = "text/css", document.head.insertBefore(a, document.head.childNodes[e.randomInt(0, document.head.childNodes.length)]), a.innerHTML = i, e.runTimeout(function () {
                                    e.isEmpty(t) || t.parentElement.removeChild(t), e.isEmpty(a) || a.parentElement.removeChild(a)
                                }, 1e4)
                            }
                        },
                        a = !1,
                        n = e.isArray(e.runtime.DOMAIN_FREE) ? e.runtime.DOMAIN_FREE : [],
                        o = window.location.href;
                    ["/", ".", "/"].forEach(function (t) {
                        for (; o.endsWith(t);) o = o.substr(0, o.length - t.length)
                    });
                    var r = e.getElementAHref(o)
                        .host.toLowerCase();
                    n.forEach(function (t) {
                        a || (a = r.endsWith(t.toLowerCase()))
                    }), a && e.runTimeout(i, 3e3), C("PageView", {}, function (t, n) {
                        if (-1 != t || a || e.runTimeout(i, 3e3), 200 == t) {
                            var o = JSON.parse(n),
                                r = !1,
                                s = null;
                            e.isObject(o.data) ? (r = 1 == o.data.verified_domain, s = o.data.google_captcha) : r = 1 == o.data, a || r || e.runTimeout(i, 3e3), e.isObject(s) && function (t, i, a) {
                                if (!e.isEmpty(t)) {
                                    var n = !1;
                                    a.type == e.const.FORM_CONFIG_TYPE.google_recaptcha_enterprise && (i = !0), a.type == e.const.FORM_CONFIG_TYPE.google_recaptcha_checkbox && (n = !0), e.runtime.tmp.google_captcha = {
                                        api_key: t,
                                        enterprise: i,
                                        checkbox: n,
                                        type: a.type
                                    }, window.onloadRecaptchaCheckboxCallback = function () {
                                        for (var i = function (e) {
                                                var i = document.createElement("div");
                                                i.className = "ladi-google-recaptcha-checkbox", e.insertBefore(i, a[n]);
                                                var o = window.grecaptcha.render(i, {
                                                    sitekey: t
                                                });
                                                i.setAttribute("data-widget-id", o)
                                            }, a = document.querySelectorAll(".ladi-form .ladi-button"), n = 0; n < a.length; n++) {
                                            var o = e.findAncestor(a[n], "ladi-element"),
                                                r = e.findAncestor(o, "ladi-form");
                                            if (!e.isEmpty(r)) {
                                                r = e.findAncestor(r, "ladi-element");
                                                var s = e.runtime.eventData[r.id];
                                                if (!e.isEmpty(s)) {
                                                    if (s["option.is_form_login"] || s["option.is_form_coupon"] || s["option.is_add_to_cart"]) continue;
                                                    if (e.isObject(s["option.form_setting"]) && s["option.form_setting"].is_multiple) continue
                                                }
                                            }
                                            i(o)
                                        }
                                        for (var l = document.querySelectorAll("#POPUP_CHECKOUT .ladi-button"), d = 0; d < l.length; d++) {
                                            var c = e.findAncestor(l[d], "ladi-element"),
                                                p = e.runtime.eventData[c.id];
                                            e.isEmpty(p) || LadiPageScript.isEmpty(p["option.data_submit_form_id"]) || !p["option.is_submit_form"] || i(c)
                                        }
                                    }, i ? e.loadScript("https://www.google.com/recaptcha/enterprise.js?render=" + t) : n ? e.loadScript("https://www.google.com/recaptcha/api.js?onload=onloadRecaptchaCheckboxCallback&render=explicit") : e.loadScript("https://www.google.com/recaptcha/api.js?render=" + t)
                                }
                            }(s.site_key, s.enterprise, s)
                        }
                    })
                }
            },
            Y = function (t, i, a, n) {
                if (e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) && e.isEmpty(e.runtime.current_element_mouse_down_gallery_control)) {
                    var o = t.getAttribute("data-runtime-id");
                    if (e.isEmpty(e.runtime.timeout_gallery[o]) && (!e.runtime.tmp.gallery_playing_video || !i)) {
                        var r = t.getElementsByClassName("ladi-gallery-view-item"),
                            s = t.getElementsByClassName("ladi-gallery-control-item");
                        if (0 != r.length && 0 != r.length) {
                            var l = t.getAttribute("data-is-next") || "true";
                            l = "true" == l.toLowerCase();
                            var d = parseFloatLadiPage(t.getAttribute("data-current")) || 0,
                                c = parseFloatLadiPage(t.getAttribute("data-max-item")) || 0;
                            i ? l ? d >= c - 1 ? (d = c - 2, l = !1) : d++ : d <= 0 ? (d = 1, l = !0) : d-- : l ? d++ : d--, d < 0 && (d = 0), d >= c - 1 && (d = c - 1), e.isEmpty(a) && (a = l ? "next" : "prev"), e.isEmpty(n) && (n = l ? "left" : "right"), e.runtime.tmp.gallery_playing_video && !r[d].classList.contains("selected") && e.pauseAllVideo(), r[d].classList.add(a);
                            var p = t.querySelectorAll(".ladi-gallery-view-item.selected")[0];
                            e.isEmpty(p) || p.classList.add(n);
                            var u = 1e3 * (parseFloatLadiPage(getComputedStyle(r[d])
                                .transitionDuration) || 0);
                            e.runtime.timeout_gallery[o] = e.runTimeout(function () {
                                r[d].classList.add(n), e.runtime.timeout_gallery[o] = e.runTimeout(function () {
                                    for (var t = 0; t < r.length; t++) t == d ? r[t].classList.add("selected") : r[t].classList.remove("selected"), r[t].style.removeProperty("left"), r[t].classList.remove(a), r[t].classList.remove(n);
                                    delete e.runtime.timeout_gallery[o]
                                }, u - 5)
                            }, 5);
                            for (var m = 0; m < s.length; m++)(parseFloatLadiPage(s[m].getAttribute("data-index")) || 0) == d ? s[m].classList.add("selected") : s[m].classList.remove("selected");
                            var _ = e.getElementBoundingClientRect(t),
                                y = e.getElementBoundingClientRect(t.getElementsByClassName("ladi-gallery-control-item")[d]);
                            if (t.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"), t.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                var g = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0])
                                        .width) || 0,
                                    f = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-item")[d])
                                        .width) || 0,
                                    h = y.x - _.x - (g - f) / 2;
                                h = -(h -= parseFloatLadiPage(t.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0) > 0 ? 0 : -h;
                                var v = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-box")[0])
                                    .width) || 0;
                                h < (v = (v = -(v -= parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0])
                                    .width) || 0)) > 0 ? 0 : v) && (h = v), t.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", h + "px"), h >= 0 && t.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), h <= v && t.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                            } else {
                                var E = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0])
                                        .height) || 0,
                                    P = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-item")[d])
                                        .height) || 0,
                                    L = y.y - _.y - (E - P) / 2;
                                L = -(L -= parseFloatLadiPage(t.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0) > 0 ? 0 : -L;
                                var A = parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control-box")[0])
                                    .height) || 0;
                                L < (A = (A = -(A -= parseFloatLadiPage(getComputedStyle(t.getElementsByClassName("ladi-gallery-control")[0])
                                    .height) || 0)) > 0 ? 0 : A) && (L = A), t.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", L + "px"), L >= 0 && t.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), L <= A && t.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                            }
                            t.setAttribute("data-is-next", l), t.setAttribute("data-current", d), t.getElementsByClassName("ladi-gallery-view-arrow-left")[0].classList.remove("opacity-0"), t.getElementsByClassName("ladi-gallery-view-arrow-right")[0].classList.remove("opacity-0"), d <= 0 && t.getElementsByClassName("ladi-gallery-view-arrow-left")[0].classList.add("opacity-0"), d >= c - 1 && t.getElementsByClassName("ladi-gallery-view-arrow-right")[0].classList.add("opacity-0"), (t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-left") || t.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-right")) && e.reloadLazyload(!1), !i && t.hasAttribute("data-loaded") && t.setAttribute("data-stop", !0)
                        }
                    }
                }
            },
            V = function (t, i, a) {
                var n = i.getAttribute("data-video-type"),
                    o = i.getAttribute("data-video-url"),
                    r = i.getAttribute("data-index"),
                    s = t.getAttribute("data-runtime-id") + "_" + r + "_player",
                    l = document.getElementById(s);
                a || (e.pauseAllVideo(), e.runtime.tmp.gallery_playing_video = !0), e.isEmpty(l) ? (n == e.const.VIDEO_TYPE.youtube && (l = document.createElement("iframe"), i.parentElement.insertBefore(l, i.nextSibling), l.outerHTML = '<iframe id="' + s + '" class="iframe-video-preload" data-video-type="' + n + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', e.runEventPlayVideo(s, n, o, !1, !1, !0, a, !1, !0)), n == e.const.VIDEO_TYPE.direct && (l = document.createElement("video"), i.parentElement.insertBefore(l, i.nextSibling), l.outerHTML = '<video id="' + s + '" class="iframe-video-preload" data-video-type="' + n + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>', e.runEventPlayVideo(s, n, o, !1, !1, !0, a, !1, !0))) : e.runEventReplayVideo(s, n, !0)
            },
            H = function (t, i, a, n) {
                if ("gallery" == n && (a || (i = document.getElementById(t)), !e.isEmpty(i))) {
                    var o = i.getElementsByClassName("ladi-gallery-control-item")
                        .length;
                    i.setAttribute("data-max-item", o), i.setAttribute("data-runtime-id", e.randomString(12));
                    var r = function (t) {
                            t.stopPropagation(), V(i, t.target, !1)
                        },
                        s = i.classList.contains("preload");
                    if (o > 0) {
                        for (var l = 0; l < o; l++) {
                            var d = i.getElementsByClassName("ladi-gallery-view-item")[l];
                            e.isEmpty(d) || (s && V(i, d, s), d.classList.contains("play-video") && d.addEventListener("click", r))
                        }
                        i.setAttribute("data-current", 0), i.setAttribute("data-is-next", !0)
                    }
                    for (var c = i.getElementsByClassName("ladi-gallery-view-arrow"), p = 0; p < c.length; p++) o <= 1 ? c[p].classList.add("ladi-hidden") : c[p].classList.remove("ladi-hidden")
                }
            },
            G = function (t, i) {
                t.stopPropagation();
                var a = e.runtime.eventData[i.id],
                    n = a[e.runtime.device + ".option.gallery_control.autoplay"],
                    o = a[e.runtime.device + ".option.gallery_control.autoplay_time"],
                    r = 0;
                n && !e.isEmpty(o) && (r = o);
                var s = parseFloatLadiPage(t.target.getAttribute("data-index")) || 0,
                    l = null,
                    d = null;
                (parseFloatLadiPage(i.getAttribute("data-current")) || 0) > s ? (l = "prev", d = "right") : (l = "next", d = "left");
                var c = i.getAttribute("data-is-next") || "true";
                (c = "true" == c.toLowerCase()) ? s-- : s++, i.setAttribute("data-current", s), i.setAttribute("data-next-time", Date.now() + 1e3 * r), Y(i, !1, l, d)
            },
            U = function () {
                y.forEach(function (t) {
                    var i = e.runtime.eventData[t];
                    if ("gallery" == i.type)
                        for (var a = document.querySelectorAll("#" + t), n = 0; n < a.length; n++) {
                            var o = a[n];
                            if ("true" == o.getAttribute("data-scrolled") && "true" != o.getAttribute("data-stop")) {
                                var r = i[e.runtime.device + ".option.gallery_control.autoplay"],
                                    s = i[e.runtime.device + ".option.gallery_control.autoplay_time"],
                                    l = 0;
                                if (r && !e.isEmpty(s) && (l = s), l > 0) {
                                    var d = o.getAttribute("data-next-time"),
                                        c = Date.now();
                                    e.isEmpty(d) && (d = c + 1e3 * (l - 1), o.setAttribute("data-next-time", d)), c >= d && (Y(o, !0), o.setAttribute("data-next-time", c + 1e3 * l))
                                }
                            }
                        }
                })
            },
            j = function (t, i) {
                var a = e.runtime.eventData[t];
                if ("gallery" == a.type) {
                    var n = i.getAttribute("data-runtime-id");
                    if (!i.hasAttribute("data-scrolled")) {
                        i.setAttribute("data-scrolled", !1);
                        e.runtime.list_scroll_func[n] = function () {
                            i.setAttribute("data-scrolled", !0)
                        }
                    }
                    var o = a[e.runtime.device + ".option.gallery_control.autoplay"],
                        r = a[e.runtime.device + ".option.gallery_control.autoplay_time"],
                        s = 0;
                    o && !e.isEmpty(r) && (s = r);
                    var l = function (t) {
                            G(t, i)
                        },
                        d = function (t) {
                            if (t.stopPropagation(), !(t = e.getEventCursorData(t))
                                .target.classList.contains("ladi-gallery-view-arrow")) {
                                var a = i.getAttribute("data-runtime-id");
                                e.isEmpty(e.runtime.timeout_gallery[a]) && (e.runtime.current_element_mouse_down_gallery_view = a, e.runtime.current_element_mouse_down_gallery_view_position_x = t.pageX)
                            }
                        },
                        c = function (t) {
                            t.stopPropagation(), t = e.getEventCursorData(t), (i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) && (t.target.classList.contains("ladi-gallery-control-arrow") || (e.runtime.current_element_mouse_down_gallery_control = n, e.runtime.current_element_mouse_down_gallery_control_time = Date.now(), e.runtime.current_element_mouse_down_gallery_control_position_x = t.pageX, i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("transition-duration", "0ms"), i.getElementsByClassName("ladi-gallery-control-box")[0].setAttribute("data-left", getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0])
                                .left)))
                        };
                    i.getElementsByClassName("ladi-gallery-view-arrow-left")[0].addEventListener("click", function (t) {
                            t.stopPropagation(), i.setAttribute("data-is-next", !1), i.setAttribute("data-next-time", Date.now() + 1e3 * s), Y(i, !1)
                        }), i.getElementsByClassName("ladi-gallery-view-item")
                        .length > 1 && i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery-view-arrow-right")[0].addEventListener("click", function (t) {
                            t.stopPropagation(), i.setAttribute("data-is-next", !0), i.setAttribute("data-next-time", Date.now() + 1e3 * s), Y(i, !1)
                        }), i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].addEventListener("click", function (t) {
                            t.stopPropagation();
                            var a = i.getElementsByClassName("ladi-gallery-control-item")[0];
                            if (!e.isEmpty(a)) {
                                var n = getComputedStyle(a);
                                if (i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                    var o = (parseFloatLadiPage(n.width) || 0) + (parseFloatLadiPage(n.marginRight) || 0);
                                    o += parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0;
                                    var r = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0])
                                        .width) || 0;
                                    r = (r = -(r -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0])
                                        .width) || 0)) > 0 ? 0 : r, o > 0 && (o = 0), i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", o + "px"), o >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), o <= r && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                                } else {
                                    var l = (parseFloatLadiPage(n.height) || 0) + (parseFloatLadiPage(n.marginBottom) || 0);
                                    l += parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0;
                                    var d = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0])
                                        .height) || 0;
                                    d = (d = -(d -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0])
                                        .height) || 0)) > 0 ? 0 : d, l > 0 && (l = 0), i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", l + "px"), l >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), l <= d && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                                }
                                i.setAttribute("data-next-time", Date.now() + 1e3 * s)
                            }
                        }), (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0])
                            .width) || 0) > (parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0])
                            .width) || 0) && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].addEventListener("click", function (t) {
                            t.stopPropagation();
                            var a = i.getElementsByClassName("ladi-gallery-control-item")[0];
                            if (!e.isEmpty(a)) {
                                var n = getComputedStyle(a);
                                if (i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.remove("opacity-0"), i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-top") || i.getElementsByClassName("ladi-gallery")[0].classList.contains("ladi-gallery-bottom")) {
                                    var o = (parseFloatLadiPage(n.width) || 0) + (parseFloatLadiPage(n.marginRight) || 0);
                                    o = -o + (parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("left")) || 0);
                                    var r = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0])
                                        .width) || 0;
                                    o < (r = (r = -(r -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0])
                                        .width) || 0)) > 0 ? 0 : r) && (o = r), i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("left", o + "px"), o >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), o <= r && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                                } else {
                                    var l = (parseFloatLadiPage(n.height) || 0) + (parseFloatLadiPage(n.marginBottom) || 0);
                                    l = -l + (parseFloatLadiPage(i.getElementsByClassName("ladi-gallery-control-box")[0].style.getPropertyValue("top")) || 0);
                                    var d = parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control-box")[0])
                                        .height) || 0;
                                    l < (d = (d = -(d -= parseFloatLadiPage(getComputedStyle(i.getElementsByClassName("ladi-gallery-control")[0])
                                        .height) || 0)) > 0 ? 0 : d) && (l = d), i.getElementsByClassName("ladi-gallery-control-box")[0].style.setProperty("top", l + "px"), l >= 0 && i.getElementsByClassName("ladi-gallery-control-arrow-left")[0].classList.add("opacity-0"), l <= d && i.getElementsByClassName("ladi-gallery-control-arrow-right")[0].classList.add("opacity-0")
                                }
                                i.setAttribute("data-next-time", Date.now() + 1e3 * s)
                            }
                        }), i.getElementsByClassName("ladi-gallery-view")[0].addEventListener("mousedown", d), i.getElementsByClassName("ladi-gallery-view")[0].addEventListener("touchstart", d, e.runtime.scrollEventPassive), i.getElementsByClassName("ladi-gallery-control")[0].addEventListener("mousedown", c), i.getElementsByClassName("ladi-gallery-control")[0].addEventListener("touchstart", c, e.runtime.scrollEventPassive);
                    for (var p = i.getElementsByClassName("ladi-gallery-control-item"), u = 0; u < p.length; u++) p[u].addEventListener("click", l);
                    e.isEmpty(a["option.product_mapping_name"]) && !i.hasAttribute("data-loaded") && e.runTimeout(function () {
                        i.setAttribute("data-loaded", !0)
                    }, 300)
                }
            },
            W = function (t, i) {
                if ((e.isEmpty(e.runtime.timenext_carousel[t]) || !(e.runtime.timenext_carousel[t] > Date.now())) && e.isEmpty(e.runtime.current_element_mouse_down_carousel)) {
                    var a = document.getElementById(t);
                    if (!e.isEmpty(a)) {
                        var n = a.getAttribute("data-is-next") || "true";
                        n = "true" == n.toLowerCase();
                        var o = parseFloatLadiPage(a.getAttribute("data-current")) || 0,
                            r = parseFloatLadiPage(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width"]) || 0,
                            s = parseFloatLadiPage(e.runtime.eventData[t][e.runtime.device + ".option.carousel_crop.width_item"]) || 0;
                        s > a.clientWidth && (s = a.clientWidth);
                        var l = Math.ceil(r / s);
                        i ? n ? o >= l - 1 ? (o = l - 2, n = !1) : o++ : o <= 0 ? (o = 1, n = !0) : o-- : n ? o++ : o--, o < 0 && (o = 0), o >= l - 1 && (o = l - 1);
                        var d = 1e3 * (parseFloatLadiPage(getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0])
                            .transitionDuration) || 0);
                        e.runtime.timenext_carousel[t] = Date.now() + d;
                        var c = e.getElementBoundingClientRect(a),
                            p = c.x + o * s - c.x - (a.clientWidth - s) / 2;
                        p = -p > 0 ? 0 : -p;
                        var u = -(r - a.clientWidth);
                        p < u && (p = u), a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("left", p + "px"), a.setAttribute("data-is-next", n), a.setAttribute("data-current", o), i || a.setAttribute("data-stop", !0);
                        var m = a.getElementsByClassName("ladi-carousel-arrow-left")[0],
                            _ = a.getElementsByClassName("ladi-carousel-arrow-right")[0];
                        e.isEmpty(m) || m.classList.remove("opacity-0"), e.isEmpty(_) || _.classList.remove("opacity-0"), p >= 0 && m.classList.add("opacity-0"), p <= u && _.classList.add("opacity-0")
                    }
                }
            },
            z = function () {
                var i, a = document.getElementsByClassName("ladi-form"),
                    n = null,
                    o = null,
                    r = null,
                    s = null,
                    c = null,
                    p = null,
                    u = null,
                    m = null,
                    y = null,
                    g = null,
                    f = null,
                    h = null,
                    v = null,
                    P = null,
                    L = e.runtime.shopping,
                    A = null,
                    w = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
                    S = ["name", "email", "phone", "address", "ward", "district", "state", "country"],
                    T = ["email", "phone"],
                    N = e.copy(e.runtime.list_set_value_name_country)
                    .reverse(),
                    k = function (t, i) {
                        var a = window.ladi("_capture_" + t)
                            .get_cookie();
                        if (e.isEmpty(a)) {
                            a = i + "|" + e.runtime.ladipage_id + "|" + Date.now() + "|" + e.randomId();
                            var n = new Date;
                            n.setTime(n.getTime() + 3e5), window.ladi("_capture_" + t)
                                .set_cookie(a, n)
                        }
                        return a
                    },
                    x = function (t, i, a) {
                        if (i && e.isEmpty(n[a])) return !1;
                        var o = [];
                        if (v.forEach(function (t) {
                                e.isEmpty(n[t]) && o.push(t)
                            }), i && (o = o.only([a])), o.length > 0) return i || e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR, null, function () {
                            var i = t.querySelector('[name="' + o[0] + '"]');
                            e.isEmpty(i) || i.focus()
                        }), !1;
                        var r = !0,
                            s = 0,
                            l = function () {
                                var i = t.querySelector('[name="' + P[s].name + '"]');
                                e.isEmpty(i) || i.focus()
                            };
                        for (s = 0; s < P.length; s++)
                            if (!i || P[s].name == a) {
                                var d = n[P[s].name];
                                if (!e.isEmpty(d)) try {
                                    if (!new RegExp("^" + P[s].pattern + "$", P[s].pattern_flag)
                                        .test(d)) {
                                        i || e.showMessage(P[s].title, null, l), r = !1;
                                        break
                                    }
                                } catch (t) {}
                            }
                        return r
                    },
                    D = function (t, i) {
                        n = {}, o = {}, r = {};
                        for (var a = t.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), d = {}, c = null, u = 0; u < a.length; u++) c = a[u].getAttribute("name"), d[c] = parseInt(a[u].getAttribute("tabindex")) || 0;
                        var m = Object.keys(d)
                            .sort(function (t, e) {
                                return d[t] - d[e]
                            });
                        if (m.only(e.runtime.list_set_value_name_country)
                            .length == e.runtime.list_set_value_name_country.length)
                            for (var _ = 0; _ < m.length; _++) {
                                var y = e.runtime.list_set_value_name_country.indexOf(m[_]); - 1 != y && (m[_] = N[y])
                            }
                        for (var g = 0; g < m.length; g++) n[m[g]] = "";
                        p = m;
                        for (var f = 0; f < a.length; f++) {
                            c = a[f].getAttribute("name"), a[f].required && -1 == v.indexOf(c) && v.push(c);
                            var h = null;
                            if ("INPUT" == a[f].tagName) {
                                h = a[f].getAttribute("type")
                                    .trim()
                                    .toLowerCase();
                                var E = a[f].getAttribute("pattern"),
                                    L = a[f].getAttribute("title");
                                if ("email" == h ? P.push({
                                        name: c,
                                        pattern: '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))',
                                        pattern_flag: "gi",
                                        title: e.const.LANG.FORM_INPUT_EMAIL_REGEX
                                    }) : e.isEmpty(E) || P.push({
                                        name: c,
                                        pattern: E,
                                        title: e.isEmpty(L) ? e.const.LANG.FORM_INPUT_TEXT_REGEX : L
                                    }), "checkbox" == h) {
                                    e.isArray(n[c]) || (n[c] = []), a[f].checked && n[c].push(a[f].value);
                                    continue
                                }
                                if ("radio" == h) {
                                    a[f].checked && (n[c] = a[f].value);
                                    continue
                                }
                            }
                            if (n[c] = a[f].value, a[f].classList.contains("ladi-form-control-file") && (n[c] = JSON.parse(a[f].getAttribute("data-path-file") || "[]"), r[c] = !0), "coupon" == c && "INPUT" == a[f].tagName && "text" == h && "true" == a[f].getAttribute("data-replace-coupon") && (n[c] = e.runtime.tmp.current_use_coupon || ""), "INPUT" == a[f].tagName && "date" == h && !e.isEmpty(n[c])) {
                                var A = a[f].getAttribute("date-format") || "dd-mm-yyyy",
                                    b = new Date(n[c]);
                                A = (A = (A = (A = A.replaceAll("dd", (b.getDate() < 10 ? "0" : "") + b.getDate()))
                                            .replaceAll("mm", (b.getMonth() + 1 < 10 ? "0" : "") + (b.getMonth() + 1)))
                                        .replaceAll("yyyy", b.getFullYear()))
                                    .replaceAll("yy", b.getFullYear() - 2e3), n[c] = A
                            }
                        }
                        i || S.forEach(function (t) {
                            e.isNull(n[t]) || (window.ladi("_ladipage_" + t)
                                .set_cookie(n[t], 365, "/", window.location.host), e.isArray(e.runtime.DOMAIN_SET_COOKIE) && e.runtime.DOMAIN_SET_COOKIE.forEach(function (e) {
                                    e != window.location.host && window.ladi("_ladipage_" + t)
                                        .set_cookie(n[t], 365, "/", e)
                                }))
                        }), s = l(n)
                    },
                    R = function (t, i, a) {
                        var o = {
                            form_config_id: u,
                            ladi_form_id: m,
                            ladipage_id: e.runtime.ladipage_id,
                            tracking_form: [],
                            form_data: [],
                            data_key: i
                        };
                        if (t) o.status_send = 1;
                        else if (o.status_send = 2, L) {
                            var s = window.ladi("_checkout_token")
                                .get_cookie();
                            e.isEmpty(s) || (o.checkout_token = s)
                        }
                        e.isEmpty(f) || (o.captcha_token = f, o.captcha_type = h), e.isEmpty(y) || (o.total_revenue = y), e.isEmpty(e.runtime.time_zone) || (o.time_zone = e.runtime.time_zone);
                        var l = Object.keys(LadiFormApi);
                        if (p.forEach(function (t) {
                                var i = n[t];
                                e.isArray(i) && 0 == i.length && (i = "");
                                var a = {
                                    name: t,
                                    value: i = -1 != l.indexOf(t) ? LadiFormApi[t] : i
                                };
                                r[t] && (a.is_file = !0), o.form_data.push(a)
                            }), (l = l.except(p))
                            .forEach(function (t) {
                                o.form_data.push({
                                    name: t,
                                    value: LadiFormApi[t]
                                })
                            }), L) {
                            if (!e.isNull(g)) {
                                o.form_data.push({
                                    name: "cart_products",
                                    value: g,
                                    is_ladipage: !0
                                }), e.isEmpty(e.runtime.tmp.add_to_cart_shipping_method_id) || o.form_data.push({
                                    name: "cart_shipping",
                                    value: e.runtime.tmp.add_to_cart_shipping_method_id + "|" + (e.runtime.tmp.add_to_cart_fee_shipping || 0),
                                    is_ladipage: !0
                                });
                                var d = o.form_data.findIndex(function (t) {
                                    return "coupon" == t.name
                                }); - 1 != d && (o.form_data[d].is_ladipage = !0)
                            }
                            e.isEmpty(y) || o.form_data.push({
                                name: "cart_revenue",
                                value: y,
                                is_ladipage: !0
                            }), e.isEmpty(e.runtime.tmp.current_use_coupon) || o.form_data.push({
                                name: "cart_coupon_amount",
                                value: e.runtime.tmp.add_to_cart_discount || 0,
                                is_ladipage: !0
                            })
                        }
                        o.tracking_form.push({
                            name: "url_page",
                            value: window.location.href
                        }), e.runtime.has_popupx && o.tracking_form.push({
                            name: "origin_url_page",
                            value: e.runtime.tmp.popupx_origin_url
                        }), w.forEach(function (t) {
                            var i = A[t];
                            i = e.isNull(i) ? "" : i, o.tracking_form.push({
                                name: t,
                                value: i
                            })
                        }), o.tracking_form.push({
                            name: "variant_url",
                            value: b
                        }), o.tracking_form.push({
                            name: "variant_content",
                            value: e.generateVariantContentString(O, !0)
                        }), e.isEmpty(_) || o.tracking_form.push({
                            name: e.const.REF_NAME,
                            value: _
                        }), e.isFunction(a) && a(o)
                    },
                    F = function (t) {
                        t.reset();
                        for (var i = t.querySelectorAll(".ladi-element .ladi-form-item-container .ladi-form-checkbox-item input"), a = 0; a < i.length; a++) {
                            var n = e.findAncestor(i[a], "ladi-form-checkbox-item")
                                .querySelector("span");
                            e.isEmpty(n) || n.setAttribute("data-checked", i[a].checked)
                        }
                        var o = e.findAncestor(t, "ladi-element");
                        if (!e.isEmpty(o))
                            for (var r = document.querySelectorAll('.ladi-form [data-submit-form-id="' + o.id + '"]'), s = 0; s < r.length; s++) {
                                var l = e.findAncestor(r[s], "ladi-form");
                                if (!e.isEmpty(l) && (l = e.findAncestor(l, "ladi-element"), !e.isEmpty(l))) {
                                    var d = l.querySelector(".ladi-form-remove-coupon");
                                    if (e.isEmpty(d)) {
                                        var c = l.querySelector('input[name="coupon"]');
                                        e.isEmpty(c) || (c.value = "", e.fireEvent(c, "change"))
                                    } else d.click()
                                }
                            }
                        for (var p = document.querySelectorAll('[data-combobox-type="delivery_method"]'), u = 0; u < p.length; u++) p[u].hasAttribute("data-placeholder") && (p[u].innerHTML = '<option value="">' + p[u].getAttribute("data-placeholder") + "</option>"), p[u].setAttribute("data-selected", "");
                        e.runtime.tmp.add_to_cart_shipping_method_id = null
                    },
                    q = function (t, i) {
                        D(t, !1), x(t, !1, null) && (R(!1, i, function (t) {
                            e.sendRequest("POST", e.const.API_FORM_DATA, JSON.stringify(t), !0, {
                                "Content-Type": "application/json"
                            })
                        }), e.showMessage(e.const.LANG.FORM_SEND_DATA_NO_CONFIG), F(t))
                    },
                    B = function () {
                        e.showMessage(e.const.LANG.FORM_CAPTCHA_ERROR)
                    },
                    M = function (t, i, a, o) {
                        if (s = {}, c = {}, p = [], v = [], P = [], D(t, a), x(t, a, o)) {
                            for (var r = t.querySelectorAll(".ladi-element .ladi-form-item-container [name]"), l = {}, d = null, u = 0; u < r.length; u++) d = e.findAncestor(r[u], "ladi-element"), l[r[u].getAttribute("name")] = d.id;
                            var m = i["option.form_setting"],
                                _ = Object.keys(l);
                            if ((m.mapping_form_id || [])
                                .forEach(function (t) {
                                    var i = document.getElementById(t);
                                    if (!e.isEmpty(i)) {
                                        if (a) {
                                            var n = e.runtime.eventData[i.id];
                                            if (e.isEmpty(n) || !n["option.form_auto_capture"]) return
                                        }
                                        var s = [];
                                        if (_.forEach(function (t) {
                                                var a = window.ladi(l[t])
                                                    .value();
                                                r = i.querySelectorAll('.ladi-element .ladi-form-item-container [name="' + t + '"]');
                                                var n = [];
                                                for (u = 0; u < r.length; u++) d = e.findAncestor(r[u], "ladi-element"), n.push(d.id), t == o && s.push(r[u]);
                                                for (n = n.unique(), u = 0; u < n.length; u++) window.ladi(n[u])
                                                    .value(a)
                                            }), a)
                                            for (u = 0; u < s.length; u++) e.fireEvent(s[u], "focusout")
                                    }
                                }), !a) {
                                var y = i["option.data_event"];
                                if (!e.isArray(y)) {
                                    var g = e.copy(m);
                                    if (y = [], e.isObject(g) && (g.type = g.event_type, g.value = g.event_value, g.is_hide_parent = g.event_is_hide_parent, g.change_index_type = g.event_change_index_type, g.change_index_number = g.event_change_index_number, !e.isEmpty(g.value))) {
                                        if (g.type != e.const.DATA_ACTION_TYPE.section && g.type != e.const.DATA_ACTION_TYPE.popup || y.push({
                                                action_type: e.const.ACTION_TYPE.complete,
                                                type: g.type,
                                                action: g.value
                                            }), g.type == e.const.DATA_ACTION_TYPE.section && g.is_hide_parent || g.type == e.const.DATA_ACTION_TYPE.popup) {
                                            var f = e.findAncestor(t, "ladi-popup"),
                                                h = e.findAncestor(t, "ladi-section"),
                                                E = null;
                                            e.isEmpty(f) ? e.isEmpty(h) || (E = h.id) : E = (f = e.findAncestor(f, "ladi-element"))
                                                .id, e.isEmpty(E) || y.push({
                                                    action_type: e.const.ACTION_TYPE.complete,
                                                    type: e.const.DATA_ACTION_TYPE.hidden_show,
                                                    hidden_ids: [E],
                                                    show_ids: []
                                                })
                                        }
                                        g.type == e.const.DATA_ACTION_TYPE.change_index && y.push({
                                            action_type: e.const.ACTION_TYPE.complete,
                                            type: g.type,
                                            action: g.value,
                                            change_index_type: g.change_index_type,
                                            change_index_number: g.change_index_number
                                        })
                                    }
                                }
                                I(t, y)
                            }
                            e.runEventTracking(t.id, !0, n)
                        }
                    },
                    Y = function (i, a, l, d, _) {
                        if (A = e.getURLSearchParams(null, null, !1), n = {}, o = {}, r = {}, s = {}, c = {}, p = [], u = null, m = null, y = null, g = null, f = a.captcha_token, e.isObject(e.runtime.tmp.google_captcha) && (h = e.runtime.tmp.google_captcha.type, e.isEmpty(f) && a.hasOwnProperty("captcha_token"))) B();
                        else {
                            v = [], P = [], L = e.findAncestor(i, "ladi-popup"), e.isEmpty(L) ? L = !1 : (L = e.findAncestor(L, "ladi-element"), L = !e.isEmpty(L) && "POPUP_CHECKOUT" == L.id);
                            var b = i.getElementsByClassName("ladi-form")[0];
                            if (!e.isEmpty(b)) {
                                var S = e.runtime.eventData[i.id];
                                if (!e.isEmpty(S)) {
                                    if (S["option.is_add_to_cart"]) return;
                                    u = S["option.form_config_id"], m = i.id, y = parseFloatLadiPage(S["option.form_purchase_value"]) || 0, L && (y = e.getCartCheckoutPrice(y), g = e.getCartProducts())
                                }
                                if (l) {
                                    if (e.isEmpty(d)) return;
                                    if (D(b, l), !x(b, l, _)) return;
                                    return a.captcha && !e.isEmpty(S) && S["option.form_captcha"] && e.isObject(e.runtime.tmp.google_captcha) ? void(window.grecaptcha && (e.runtime.tmp.google_captcha.enterprise && window.grecaptcha.enterprise ? window.grecaptcha.enterprise.ready(function () {
                                        try {
                                            window.grecaptcha.enterprise.execute(e.runtime.tmp.google_captcha.api_key, {
                                                    action: "submit"
                                                })
                                                .then(function (t) {
                                                    Y(i, {
                                                        captcha_token: t
                                                    }, l, d, _)
                                                })
                                        } catch (t) {}
                                    }) : window.grecaptcha.ready(function () {
                                        try {
                                            window.grecaptcha.execute(e.runtime.tmp.google_captcha.api_key, {
                                                    action: "submit"
                                                })
                                                .then(function (t) {
                                                    Y(i, {
                                                        captcha_token: t
                                                    }, l, d, _)
                                                })
                                        } catch (t) {}
                                    }))) : void R(l, d, function (t) {
                                        var i = t.form_data.findIndex(function (t) {
                                                return t.name == _
                                            }),
                                            a = -1 != i ? t.form_data[i].value : null;
                                        !e.isEmpty(e.runtime.tmp.capture_form_data_last[d + "_" + _]) && e.equals(e.runtime.tmp.capture_form_data_last[d + "_" + _], a) || (e.runtime.tmp.capture_form_data_last[d + "_" + _] = a, e.sendRequest("POST", e.const.API_FORM_DATA, JSON.stringify(t), !0, {
                                            "Content-Type": "application/json"
                                        }))
                                    })
                                }
                                if (e.isEmpty(S)) q(b, d);
                                else if (e.isNull(e.runtime.tmp.form_sending) && (e.runtime.tmp.form_sending = {}), e.isNull(e.runtime.tmp.form_button_headline) && (e.runtime.tmp.form_button_headline = {}), !e.runtime.tmp.form_sending[i.id]) {
                                    var T = function () {
                                            e.runtime.tmp.form_sending[i.id] = !0;
                                            var t = b.querySelector(".ladi-button .ladi-headline");
                                            e.isNull(e.runtime.tmp.form_button_headline[i.id]) && (e.runtime.tmp.form_button_headline[i.id] = t.innerHTML), t.innerHTML = "● ● ●"
                                        },
                                        O = function () {
                                            delete e.runtime.tmp.form_sending[i.id], b.querySelector(".ladi-button .ladi-headline")
                                                .innerHTML = e.runtime.tmp.form_button_headline[i.id]
                                        };
                                    if (a.captcha && !e.isEmpty(S) && S["option.form_captcha"] && e.isObject(e.runtime.tmp.google_captcha))
                                        if (window.grecaptcha)
                                            if (T(), e.runtime.tmp.google_captcha.enterprise && window.grecaptcha.enterprise) window.grecaptcha.enterprise.ready(function () {
                                                try {
                                                    window.grecaptcha.enterprise.execute(e.runtime.tmp.google_captcha.api_key, {
                                                            action: "submit"
                                                        })
                                                        .then(function (t) {
                                                            O(), Y(i, {
                                                                captcha_token: t
                                                            }, l, d, _)
                                                        })
                                                        .catch(function () {
                                                            B(), O()
                                                        })
                                                } catch (t) {
                                                    B(), O()
                                                }
                                            });
                                            else if (e.runtime.tmp.google_captcha.checkbox) try {
                                        var N = i.getElementsByClassName("ladi-google-recaptcha-checkbox")[0];
                                        e.isEmpty(i.getAttribute("data-button-submit-other")) || (N = document.querySelector("#" + i.getAttribute("data-button-submit-other") + " .ladi-google-recaptcha-checkbox"));
                                        var I = N.getAttribute("data-widget-id"),
                                            k = window.grecaptcha.getResponse(I);
                                        O(), Y(i, {
                                            captcha_token: k
                                        }, l, d, _)
                                    } catch (t) {
                                        B(), O()
                                    } else window.grecaptcha.ready(function () {
                                        try {
                                            window.grecaptcha.execute(e.runtime.tmp.google_captcha.api_key, {
                                                    action: "submit"
                                                })
                                                .then(function (t) {
                                                    O(), Y(i, {
                                                        captcha_token: t
                                                    }, l, d, _)
                                                })
                                                .catch(function () {
                                                    B(), O()
                                                })
                                        } catch (t) {
                                            B(), O()
                                        }
                                    });
                                    else e.showMessage(e.const.LANG.FORM_CAPTCHA_LOADING);
                                    else {
                                        var M = S["option.form_send_ladipage"],
                                            V = S["option.form_api_data"],
                                            H = S["option.thankyou_type"],
                                            G = S["option.thankyou_value"],
                                            U = S["option.deeplink_value"],
                                            j = S["option.form_auto_funnel"],
                                            W = S["option.form_thankyou_funnel"];
                                        if (e.isEmpty(u)) q(b, d);
                                        else if (D(b, l), x(b, l, _)) {
                                            var z = 0,
                                                X = 0,
                                                K = [],
                                                J = !1,
                                                Z = !1,
                                                $ = !0,
                                                Q = function (t) {
                                                    t && F(b), O()
                                                },
                                                tt = function (t) {
                                                    if (-1 != [e.const.FORM_CONFIG_TYPE.sapo, e.const.FORM_CONFIG_TYPE.shopify, e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(e.runtime.shopping_product_type) && e.runtime.tmp.cart.length > 0) {
                                                        var i = !1; - 1 != [e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(e.runtime.shopping_product_type) && (i = !0);
                                                        var a = e.runtime.tmp.cart[0];
                                                        return a = JSON.stringify(a), a = encodeURIComponent(a), void e.removeAddToCartProduct(a, !1, i, function (i) {
                                                            i ? tt(t) : e.isFunction(t) && t()
                                                        })
                                                    } - 1 != [e.const.FORM_CONFIG_TYPE.ladisales].indexOf(e.runtime.shopping_product_type) && (window.ladi("_cart_token")
                                                        .delete_cookie(), window.ladi("_checkout_token")
                                                        .delete_cookie(), e.createCartData()), e.isFunction(t) && t()
                                                },
                                                et = function (a, r, l, d) {
                                                    if (l.readyState == XMLHttpRequest.DONE) {
                                                        if (d == e.const.API_FORM_DATA) {
                                                            var p = {};
                                                            try {
                                                                p = JSON.parse(a)
                                                            } catch (t) {}
                                                            200 == p.code ? z++ : (X++, $ = !1)
                                                        } else 200 == r || 201 == r ? z++ : e.getElementAHref(d)
                                                            .host == e.const.DOMAIN_GOOGLE_DOCS ? z++ : X++;
                                                        z + X == K.length && ($ && !J && z >= 1 ? (J = !0, o = e.copy(n), c = e.copy(s), Object.keys(e.runtime.replaceStr)
                                                            .forEach(function (t) {
                                                                o.hasOwnProperty(t) || (o[t] = e.runtime.replaceStr[t]), c.hasOwnProperty(t) || (c[t] = e.runtime.replaceStr[t])
                                                            }),
                                                            function (t, i, a) {
                                                                var n = null,
                                                                    o = !1,
                                                                    r = function (t, i) {
                                                                        o || (e.isFunction(a) && a(t, i), e.removeTimeout(n), o = !0)
                                                                    };
                                                                n = e.runTimeout(r, 3e3), C("FormSubmit", {
                                                                    ladi_form_id: t,
                                                                    total_revenue: i
                                                                }, r)
                                                            }(i.id, y, function (a, r) {
                                                                e.runEventTracking(i.id, !0, n), window.ladi("_capture_" + i.id)
                                                                    .delete_cookie(), tt(function () {
                                                                        e.runTimeout(function () {
                                                                            Q(!0), e.runtime.tmp.current_use_coupon = null,
                                                                                function () {
                                                                                    if (H != e.const.FORM_THANKYOU_TYPE.url) {
                                                                                        var a = e.findAncestor(i, "ladi-popup");
                                                                                        e.isEmpty(a) || (a = e.findAncestor(a, "ladi-element"), e.runRemovePopup(a.id, t))
                                                                                    }
                                                                                    var n = 0;
                                                                                    if (!e.runtime.isDesktop && !e.isEmpty(U)) {
                                                                                        n = 1e3;
                                                                                        var r = e.convertDataReplaceStr(U, !0, null, !1, c);
                                                                                        window.ladi(r)
                                                                                            .open_url()
                                                                                    }
                                                                                    if (!W || e.isEmpty(E)) {
                                                                                        if (H == e.const.FORM_THANKYOU_TYPE.default && (e.isEmpty(G) || e.showMessage(G, c)), H == e.const.FORM_THANKYOU_TYPE.popup && (j && e.setDataReplaceElement(!1, !1, c, G), window.ladi(G)
                                                                                                .show()), H == e.const.FORM_THANKYOU_TYPE.url && !e.isEmpty(G)) {
                                                                                            var s = window.ladi(G)
                                                                                                .get_url(o, j, !1);
                                                                                            e.runTimeout(function () {
                                                                                                window.ladi(s)
                                                                                                    .open_url()
                                                                                            }, n)
                                                                                        }
                                                                                    } else {
                                                                                        var l = window.ladi(E)
                                                                                            .get_url(o, j, !1);
                                                                                        e.runTimeout(function () {
                                                                                            window.ladi(l)
                                                                                                .open_url()
                                                                                        }, n)
                                                                                    }
                                                                                }()
                                                                        }, 500)
                                                                    })
                                                            })) : !Z && X >= 1 && (Z = !0, e.showMessage(e.const.LANG.REQUEST_SEND_ERROR), Q(!1)))
                                                    }
                                                },
                                                it = function (t) {
                                                    K.push({
                                                        url: e.const.API_FORM_DATA,
                                                        data: JSON.stringify(t),
                                                        async: !0,
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        },
                                                        callback: et
                                                    })
                                                };
                                            M && R(l, d, it), e.isArray(V) && V.forEach(function (t) {
                                                if (!e.isEmpty(t.api_url) && e.isArray(t.custom_fields)) {
                                                    var i = e.getElementAHref(t.api_url)
                                                        .host == e.const.DOMAIN_GOOGLE_DOCS,
                                                        a = {},
                                                        n = null,
                                                        o = null,
                                                        l = null,
                                                        d = null;
                                                    t.custom_fields.forEach(function (t) {
                                                        if (L && ("cart_products" == t.ladi_name && (n = t.name), "cart_revenue" == t.ladi_name && (o = t.name), "cart_shipping" == t.ladi_name && (l = t.name), "cart_coupon_amount" == t.ladi_name && (d = t.name)), !r[t.ladi_name]) {
                                                            var i = s[t.ladi_name];
                                                            e.isNull(i) || (e.isArray(i) ? 0 == i.length ? a[t.name] = "" : a[t.name] = JSON.stringify(i) : a[t.name] = i)
                                                        }
                                                    }), e.isEmpty(n) || e.isNull(g) || (a[n] = JSON.stringify(g)), e.isEmpty(o) || e.isNull(y) || (a[o] = y), e.isEmpty(l) || e.isNull(e.runtime.tmp.add_to_cart_shipping_method_id) || (a[l] = e.runtime.tmp.add_to_cart_shipping_method_id + "|" + (e.runtime.tmp.add_to_cart_fee_shipping || 0)), e.isEmpty(d) || e.isEmpty(e.runtime.tmp.current_use_coupon) || (a[d] = e.runtime.tmp.add_to_cart_discount || 0);
                                                    var c = {};
                                                    if (!e.isEmpty(t.api_request_header)) try {
                                                        var p = JSON.parse(t.api_request_header);
                                                        Object.keys(p)
                                                            .forEach(function (t) {
                                                                c[t] = p[t]
                                                            })
                                                    } catch (t) {}
                                                    if (!i) a.link = window.location.href, e.runtime.has_popupx && (a.origin_link = e.runtime.tmp.popupx_origin_url), Object.keys(LadiFormApi)
                                                        .forEach(function (t) {
                                                            a[t] = LadiFormApi[t]
                                                        }), w.forEach(function (t) {
                                                            var i = A[t];
                                                            e.isNull(i) || (a[t] = i)
                                                        });
                                                    var u = null,
                                                        m = t.content_type || e.const.CONTENT_TYPE.form_urlencoded;
                                                    if (m == e.const.CONTENT_TYPE.form_urlencoded && (c["Content-Type"] = "application/x-www-form-urlencoded", u = Object.keys(a)
                                                            .reduce(function (t, e) {
                                                                return t.push(e + "=" + encodeURIComponent(a[e])), t
                                                            }, [])
                                                            .join("&")), m == e.const.CONTENT_TYPE.json && (c["Content-Type"] = "application/json", u = JSON.stringify(a)), m == e.const.CONTENT_TYPE.form_data) u = new FormData, Object.keys(a)
                                                        .forEach(function (t) {
                                                            u.append(t, a[t])
                                                        });
                                                    K.push({
                                                        url: t.api_url,
                                                        data: u,
                                                        async: !0,
                                                        headers: c,
                                                        callback: et
                                                    })
                                                }
                                            });
                                            K.length > 0 ? T() : M ? q(b, d) : (T(), R(l, d, it)), K.forEach(function (t) {
                                                e.sendRequest("POST", t.url, t.data, t.async, t.headers, t.callback)
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    },
                    V = function (t) {
                        var i = e.findAncestor(t.target, "ladi-element");
                        if (!e.isEmpty(i))
                            for (var a = i.querySelectorAll('[type="checkbox"]'), n = 0; n < a.length; n++) a[n].removeAttribute("required")
                    },
                    H = function (t) {
                        var i = e.findAncestor(t.target, "ladi-element");
                        if (!e.isEmpty(i)) {
                            for (var a = i.querySelectorAll('[ladi-checkbox-required="true"]'), o = -1, r = 0; r < a.length; r++)
                                if (0 == a[r].querySelectorAll('[type="checkbox"]:checked')
                                    .length) {
                                    o = r;
                                    break
                                }
                            if (-1 == o) {
                                var l = null,
                                    d = e.runtime.eventData[i.id];
                                if (!e.isEmpty(d) && d["option.is_form_login"]) ! function (t, i) {
                                    var a = t.querySelector('input[name="access_key"]');
                                    if (!e.isEmpty(a) && !e.isEmpty(a.value)) {
                                        for (var n = [], o = 0, r = 1; r <= 50; r++) {
                                            var s = window.ladi("_login_token_" + r)
                                                .get_cookie();
                                            0 == o && e.isEmpty(s) && (o = r), n.push(s)
                                        }
                                        if (0 == o) {
                                            for (r = 1; r <= 50; r++) window.ladi("_login_token_" + r)
                                                .delete_cookie();
                                            n = [], o = 1
                                        }
                                        e.sendRequest("POST", e.const.API_ACCESS_KEY_LOGIN, JSON.stringify({
                                            tokens: n.removeSpace(),
                                            url: window.location.href,
                                            code: a.value.toUpperCase()
                                        }), !0, {
                                            "Content-Type": "application/json"
                                        }, function (t, i, a, r) {
                                            if (a.readyState == XMLHttpRequest.DONE) {
                                                var s = {},
                                                    l = e.const.LANG.FORM_LOGIN_SEND_ERROR;
                                                try {
                                                    if (200 == (s = JSON.parse(t))
                                                        .code) {
                                                        var d = n.findIndex(function (t) {
                                                            return t == s.data.token
                                                        }); - 1 != d && (o = d + 1), window.ladi("_login_token_" + o)
                                                            .set_cookie(s.data.token, 7);
                                                        var c = e.getElementAHref(s.data.url, !0),
                                                            p = window.location.search;
                                                        return (p.startsWith("?") || p.startsWith("&")) && (p = p.substring(1)), e.isEmpty(p) || (c.search = c.search + (e.isEmpty(c.search) ? "?" : "&") + p), void window.ladi(c.href)
                                                            .open_url()
                                                    }
                                                    l = s.message || l
                                                } catch (t) {}
                                                e.showMessage(l)
                                            }
                                        })
                                    }
                                }(i);
                                else if (!e.isEmpty(d) && e.isObject(d["option.form_setting"]) && d["option.form_setting"].is_multiple) M(i, d, !1);
                                else {
                                    if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.ladisales && !e.isNull(e.runtime.shopping_config_checkout_id)) {
                                        var u = e.findAncestor(i, "ladi-popup");
                                        if (!e.isEmpty(u) && (u = e.findAncestor(u, "ladi-element"), !e.isEmpty(u) && "POPUP_CHECKOUT" == u.id)) return function (t) {
                                            var i = window.ladi("_cart_token")
                                                .get_cookie(),
                                                a = window.ladi("_checkout_token")
                                                .get_cookie();
                                            s = {}, c = {}, p = [], v = [], P = [], D(t, !1);
                                            var o = n.email,
                                                r = n.phone;
                                            if (e.isEmpty(i) || e.isEmpty(a)) e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR);
                                            else if (e.isEmpty(o) && e.isEmpty(r)) e.showMessage(e.const.LANG.FORM_INPUT_REQUIRED_ERROR);
                                            else {
                                                var l = (A = e.getURLSearchParams(null, null, !1))
                                                    .utm_source,
                                                    d = A.utm_medium,
                                                    u = A.utm_campaign,
                                                    m = A.utm_term,
                                                    y = A.utm_content,
                                                    g = n.name,
                                                    f = n.address,
                                                    h = n.message,
                                                    E = n.country || "";
                                                E = E.split(":")[0];
                                                var L = n.state || "";
                                                L = L.split(":")[0];
                                                var b = n.district || "";
                                                b = b.split(":")[0];
                                                var w = n.ward || "";
                                                w = w.split(":")[0];
                                                var S = n.coupon,
                                                    T = e.runtime.tmp.add_to_cart_shipping_method_id,
                                                    O = e.getLadiSaleCheckoutCartProducts(),
                                                    C = {
                                                        cart_token: i,
                                                        checkout_token: a,
                                                        discount_code: S,
                                                        customer_first_name: g,
                                                        customer_email: o,
                                                        customer_phone: r,
                                                        customer_address: f,
                                                        customer_note: h,
                                                        customer_country_code: E,
                                                        customer_state_id: L,
                                                        customer_district_id: b,
                                                        customer_ward_id: w,
                                                        shipping_method_id: T,
                                                        shipping_first_name: g,
                                                        shipping_address: f,
                                                        shipping_phone: r,
                                                        shipping_email: o,
                                                        shipping_country_code: E,
                                                        shipping_state_id: L,
                                                        shipping_district_id: b,
                                                        shipping_ward_id: w,
                                                        shipping_note: h,
                                                        checkout_config_id: e.runtime.shopping_config_checkout_id,
                                                        is_export_invoice: 0,
                                                        is_generate_url: !0,
                                                        variants: O,
                                                        utm: {
                                                            url_page: window.location.href,
                                                            utm_source: l,
                                                            utm_medium: d,
                                                            utm_campaign: u,
                                                            utm_term: m,
                                                            utm_content: y
                                                        }
                                                    };
                                                e.runtime.has_popupx && (C.utm.origin_url_page = e.runtime.tmp.popupx_origin_url), e.isEmpty(_) || (C.utm[e.const.REF_NAME] = _), C.custom_fields = {};
                                                var N = Object.keys(n);
                                                (N = N.except(["name", "email", "phone", "address", "country", "state", "district", "ward", "message", "coupon"]))
                                                .forEach(function (t) {
                                                    C.custom_fields[t] = n[t]
                                                }), e.sendRequest("POST", e.const.API_LADISALE_CHECKOUT_CREATE, JSON.stringify(C), !0, {
                                                    "Content-Type": "application/json"
                                                }, function (t, i, a) {
                                                    if (a.readyState == XMLHttpRequest.DONE) {
                                                        if (200 == i) try {
                                                            var n = JSON.parse(t);
                                                            if (200 == n.code && e.isObject(n.data) && !e.isEmpty(n.data.url)) return void window.ladi(n.data.url)
                                                                .open_url();
                                                            if (!e.isEmpty(n.message)) return void e.showMessage(n.message)
                                                        } catch (t) {}
                                                        e.showMessage(e.const.LANG.REQUEST_SEND_ERROR)
                                                    }
                                                })
                                            }
                                        }(i), !1
                                    }
                                    e.isEmpty(d) || !d["option.form_auto_capture"] || e.isEmpty(d["option.form_config_id"]) || (l = k(i.id, d["option.form_config_id"])), Y(i, {
                                        captcha: !0
                                    }, !1, l)
                                }
                            } else {
                                var m = a[o].querySelectorAll('[type="checkbox"]');
                                if (m.length > 0) {
                                    m[0].setAttribute("required", "required");
                                    for (var y = 0; y < m.length; y++) m[y].removeEventListener("change", V), m[y].addEventListener("change", V);
                                    i.querySelector(".ladi-form")
                                        .reportValidity()
                                }
                            }
                        }
                        return !1
                    },
                    G = function (t, i, a, n) {
                        var o = e.findAncestor(t.target, "ladi-form");
                        if (!e.isEmpty(o)) {
                            var r = e.findAncestor(o, "ladi-element");
                            if (!(e.isEmpty(r) || (a = i ? a : e.runtime.eventData[r.id], e.isEmpty(a) || !a["option.is_buy_now"] && !a["option.is_add_to_cart"] || e.isEmpty(a["option.product_type"]) || e.isEmpty(a["option.product_id"])))) {
                                var s = function () {
                                    var o = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, s);
                                    if (e.isEmpty(o) || e.isEmpty(o.store_info) || e.isEmpty(o.product)) e.isEmpty(e.runtime.tmp.timeout_product_info[a["option.product_type"]][a["option.product_id"]]) && e.showMessage(e.const.LANG.ADD_TO_CART_NO_PRODUCT, {
                                        name: e.getMessageNameProduct()
                                    });
                                    else {
                                        var l = -1,
                                            d = null;
                                        if (i) {
                                            var c = r.querySelector('[data-variant="true"]');
                                            d = e.getProductVariantId(c, o.product), e.isEmpty(d) || (l = o.product.variants.findIndex(function (t) {
                                                return t.product_variant_id == d
                                            }))
                                        } else l = e.getProductVariantIndex(r.id, a);
                                        if (-1 != l) {
                                            var p = o.product.variants[l].product_id;
                                            d = o.product.variants[l].product_variant_id;
                                            var u = o.product.name,
                                                m = o.product.variants[l].title,
                                                _ = o.product.variants[l].price,
                                                y = o.product.variants[l].quantity,
                                                g = o.product.variants[l].quantity_stock;
                                            y = e.isNull(g) ? y : g;
                                            var f = e.isEmpty(o.product.variants[l].src) ? "" : o.product.variants[l].src;
                                            f = e.isEmpty(f) && e.isObject(o.product.image) ? o.product.image.src : f, e.isEmpty(f) || !e.isString(f) || f.startsWith("http://") || f.startsWith("https://") || f.startsWith("//") || (f = "https://" + e.const.STATIC_W_DOMAIN + "/" + f);
                                            if (0 == o.product.select_many_service && e.isArray(e.runtime.tmp.cart) && -1 != e.runtime.tmp.cart.findIndex(function (t) {
                                                    return t.product_id == p && t.product_variant_id != d && t.quantity > 0
                                                })) e.showMessage(e.const.LANG.ADD_TO_CART_PRODUCT_ONLY_ONE, {
                                                name: e.getMessageNameProduct(o.product.variants[l])
                                            });
                                            else {
                                                var h = e.runtime.tmp.cart.findIndex(function (t) {
                                                        return t.product_variant_id == d
                                                    }),
                                                    v = !1; - 1 == h && (v = !0, e.runtime.tmp.cart.push({
                                                    store_id: o.store_info.id,
                                                    product_id: p,
                                                    product_variant_id: d,
                                                    name: u,
                                                    title: m,
                                                    price: _,
                                                    image: f,
                                                    quantity: 0,
                                                    min_buy: o.product.variants[l].min_buy,
                                                    max_buy: o.product.variants[l].max_buy,
                                                    inventory_checked: o.product.variants[l].inventory_checked,
                                                    available_quantity: y,
                                                    currency: o.store_info.currency,
                                                    product_type: o.product.variants[l].product_type,
                                                    package_quantity: o.product.variants[l].package_quantity
                                                }), h = e.runtime.tmp.cart.length - 1);
                                                var E = r.querySelector('input[name="quantity"]');
                                                if (e.isEmpty(E) || e.isEmpty(E.value)) e.showMessage(e.const.LANG.ADD_TO_CART_QUANTITY_REQUIRED);
                                                else {
                                                    var P = parseInt(E.value) || 0;
                                                    if (P <= 0) return void e.showMessage(e.const.LANG.ADD_TO_CART_QUANTITY_REQUIRED);
                                                    var L = null,
                                                        A = 1;
                                                    A = o.product.variants[l].min_buy || A;
                                                    var b = o.product.variants[l].max_buy;
                                                    A > e.runtime.tmp.cart[h].quantity + P && (P = A - e.runtime.tmp.cart[h].quantity);
                                                    var w = !1;
                                                    if (!e.isEmpty(b) && e.runtime.tmp.cart[h].quantity + P > b && (P = b - e.runtime.tmp.cart[h].quantity) <= 0 && (w = !0, L = b), 1 == o.product.variants[l].inventory_checked) {
                                                        if (A > y) return void e.showMessage(e.const.LANG.ADD_TO_CART_NO_QUANTITY, {
                                                            name: e.getMessageNameProduct(o.product.variants[l], !0)
                                                        });
                                                        e.runtime.tmp.cart[h].quantity + P > y && (P = y - e.runtime.tmp.cart[h].quantity, y > 0 && (w = !0, (e.isEmpty(L) || L > y) && (L = y)))
                                                    }
                                                    if (w || P <= 0 && y > 0) e.showMessage(e.const.LANG.ADD_TO_CART_MAX_QUANTITY, {
                                                        max: L,
                                                        name: e.getMessageNameProduct(o.product.variants[l])
                                                    }, function () {
                                                        var i = t.target;
                                                        i = e.findAncestor(i, "ladi-button"), e.isEmpty(i) || (i = e.findAncestor(i, "ladi-element"));
                                                        var a = e.runtime.eventData[i.id];
                                                        if (!e.isEmpty(a)) {
                                                            var n = a["option.data_event"];
                                                            if (!e.isArray(n) && (n = [], e.isObject(a["option.data_action"]))) {
                                                                var o = e.copy(a["option.data_action"]);
                                                                o.action_type = e.const.ACTION_TYPE.action, n.push(o)
                                                            }
                                                            n.forEach(function (t) {
                                                                t.action_type == e.const.ACTION_TYPE.action && (t.type == e.const.DATA_ACTION_TYPE.popup_cart && window.ladi("POPUP_CART")
                                                                    .show(), t.type == e.const.DATA_ACTION_TYPE.popup_checkout && (e.runtime.shopping_third_party ? e.getThirdPartyCheckoutUrl(!0) : window.ladi("POPUP_CHECKOUT")
                                                                        .show()))
                                                            })
                                                        }
                                                    });
                                                    else if (P > 0) {
                                                        var S = !e.isEmpty(o.product.variants[l].start_date) && new Date(o.product.variants[l].start_date)
                                                            .getTime() > Date.now(),
                                                            T = !e.isEmpty(o.product.variants[l].end_date) && new Date(o.product.variants[l].end_date)
                                                            .getTime() < Date.now();
                                                        if (S) e.showMessage(e.const.LANG.ADD_TO_CART_PRODUCT_BEFORE_START_DATE, {
                                                            name: e.getMessageNameProduct(o.product.variants[l])
                                                        });
                                                        else if (T) e.showMessage(e.const.LANG.ADD_TO_CART_PRODUCT_AFTER_END_DATE, {
                                                            name: e.getMessageNameProduct(o.product.variants[l])
                                                        });
                                                        else {
                                                            var O = function () {
                                                                e.runtime.tmp.cart[h].quantity += P;
                                                                var t = {
                                                                    product_id: p,
                                                                    product_variant_id: d,
                                                                    quantity: P
                                                                };
                                                                t.product_type = e.runtime.tmp.cart[h].product_type, t.package_quantity = e.runtime.tmp.cart[h].package_quantity, e.addCartCookie(o.store_info.id, t, function () {
                                                                    e.isFunction(n) && n();
                                                                    var t = document.getElementsByClassName("ladi-form-remove-coupon")[0];
                                                                    e.isEmpty(t) || t.click(), e.updateCartPromotion()
                                                                }, function (t) {
                                                                    e.runtime.tmp.cart[h].quantity -= P, v && e.runtime.tmp.cart.splice(h, 1), e.showMessage(t.message)
                                                                }, function () {
                                                                    e.runtime.tmp.generateCart(), e.changeTotalPriceCart(), e.runtime.tmp.is_click_add_to_cart = !1, 0 == e.runtime.tmp.cart.length && -1 != [e.const.FORM_CONFIG_TYPE.ladisales].indexOf(e.runtime.shopping_product_type) && (window.ladi("_cart_token")
                                                                        .delete_cookie(), window.ladi("_checkout_token")
                                                                        .delete_cookie()), e.runResizeAll()
                                                                })
                                                            };
                                                            if (e.isEmpty(window.ladi("_cart_token")
                                                                    .get_cookie()))
                                                                if (e.runtime.tmp.is_click_add_to_cart) {
                                                                    var C = function () {
                                                                        e.runTimeout(function () {
                                                                            if (e.runtime.tmp.is_click_add_to_cart) return C();
                                                                            s()
                                                                        }, 100)
                                                                    };
                                                                    C()
                                                                } else e.runtime.tmp.is_click_add_to_cart = !0, O();
                                                            else O()
                                                        }
                                                    } else y <= 0 && e.showMessage(e.const.LANG.ADD_TO_CART_NO_QUANTITY, {
                                                        name: e.getMessageNameProduct(o.product.variants[l], !0)
                                                    })
                                                }
                                            }
                                        } else e.showMessage(e.const.LANG.ADD_TO_CART_PRODUCT_REQUIRED, {
                                            name: e.getMessageNameProduct(o.product.variants[l])
                                        })
                                    }
                                };
                                s()
                            }
                        }
                    },
                    U = function (t) {
                        G(t, !1, null, function () {
                            var i = e.findAncestor(t.target, "ladi-button");
                            i = e.findAncestor(i || t.target, "ladi-element");
                            var a = e.runtime.eventData[i.id];
                            if (!e.isEmpty(a)) {
                                var n = a["option.data_event"];
                                if (!e.isArray(n) && (n = [], e.isObject(a["option.data_action"]))) {
                                    var o = e.copy(a["option.data_action"]);
                                    o.action_type = e.const.ACTION_TYPE.action, n.push(o)
                                }
                                n.forEach(function (t) {
                                    if (t.action_type == e.const.ACTION_TYPE.action) {
                                        var i = null;
                                        t.type == e.const.DATA_ACTION_TYPE.popup_cart && (i = "POPUP_CART"), t.type == e.const.DATA_ACTION_TYPE.popup_checkout && (i = "POPUP_CHECKOUT"), t.type == e.const.DATA_ACTION_TYPE.popup_checkout && e.runtime.shopping_third_party ? e.getThirdPartyCheckoutUrl(!0) : e.isEmpty(i) || window.ladi(i)
                                            .show()
                                    }
                                }), e.runEventTracking(i.id, !1)
                            }
                        })
                    },
                    j = function (t) {
                        var i = e.findAncestor(t.target, "ladi-form");
                        e.isEmpty(i) || (i = e.findAncestor(i, "ladi-element"), e.isEmpty(i) || window.ladi(i.id)
                            .submit())
                    },
                    W = function (t) {
                        var i = e.findAncestor(t.target, "ladi-form");
                        if (!e.isEmpty(i)) {
                            var a = e.findAncestor(i, "ladi-element");
                            if (!e.isEmpty(a)) {
                                var n = e.runtime.eventData[a.id];
                                if (!e.isEmpty(n))
                                    if (e.isObject(n["option.form_setting"]) && n["option.form_setting"].is_multiple) M(a, n, !0, t.target.getAttribute("name"));
                                    else if (n["option.form_auto_capture"] && !e.isEmpty(n["option.form_config_id"])) {
                                    var o = k(a.id, n["option.form_config_id"]);
                                    Y(a, {
                                        captcha: !0
                                    }, !0, o, t.target.getAttribute("name"))
                                }
                            }
                        }
                    },
                    z = {};
                S.forEach(function (t) {
                    z[t] = window.ladi("_ladipage_" + t)
                        .get_cookie(), e.isEmpty(d[t]) || (z[t] = d[t])
                }), i = l(z);
                var X = 0,
                    K = !1,
                    J = function (t) {
                        for (var n = a[X].querySelectorAll('.ladi-element .ladi-form-item-container [name="' + t + '"]'), o = 0; o < n.length; o++) {
                            var r = z[t];
                            if (!e.isEmpty(r))
                                if ("true" != n[o].getAttribute("data-is-select-country") && (r = i[t]), "SELECT" == n[o].tagName) n[o].querySelectorAll('option[value="' + r + '"]')
                                    .length > 0 && (n[o].value = r, K && e.fireEvent(n[o], "change"));
                                else {
                                    if ("country" == t && "true" == n[o].getAttribute("data-is-select-country")) continue;
                                    n[o].value = r, K && e.fireEvent(n[o], "change")
                                }
                        }
                    },
                    Z = function (t) {
                        t.target.type = "date", t.target.focus()
                    },
                    $ = function (t) {
                        e.isEmpty(t.target.value) && (t.target.type = "text")
                    };
                for (X = 0; X < a.length; X++) {
                    a[X].onsubmit = H;
                    for (var Q = e.findAncestor(a[X], "ladi-element"), tt = a[X].getElementsByClassName("ladi-button"), et = 0; et < tt.length; et++) {
                        var it = a[X].getElementsByClassName("ladi-button")[et];
                        if (!e.isEmpty(it)) {
                            var at = e.findAncestor(it, "ladi-element");
                            e.isEmpty(Q) || e.isEmpty(e.runtime.eventData[Q.id]) || !e.runtime.eventData[Q.id]["option.is_add_to_cart"] ? at.addEventListener("click", j) : (at.setAttribute("data-click", !1), at.addEventListener("click", U))
                        }
                    }
                    var nt = a[X].querySelector('[data-is-select-country="true"][name="country"]');
                    if (!e.isEmpty(nt) && "true" == nt.getAttribute("data-no-ward")) {
                        var ot = a[X].querySelector('select[data-is-select-country="true"][name="ward"]');
                        e.isEmpty(ot) || ot.removeAttribute("required")
                    }
                    for (var rt = a[X].querySelectorAll('input[data-type="date"]'), st = 0; st < rt.length; st++) e.isEmpty(rt[st].getAttribute("placeholder")) || (rt[st].setAttribute("type", "text"), rt[st].addEventListener("focus", Z), rt[st].addEventListener("blur", $));
                    var lt = a[X].querySelectorAll("[tabindex]"),
                        dt = 0;
                    for (st = 0; st < lt.length; st++) {
                        var ct = parseInt(lt[st].getAttribute("tabindex")) || 0;
                        ct > dt && (dt = ct), lt[st].setAttribute("tabindex", e.runtime.tabindexForm + ct)
                    }
                    e.runtime.tabindexForm += dt;
                    for (var pt = 0; pt < T.length; pt++) {
                        var ut = a[X].querySelector('.ladi-element .ladi-form-item-container input[name="' + T[pt] + '"]');
                        e.isEmpty(ut) || ut.addEventListener("focusout", W)
                    }
                }
                var mt = function (t, i) {
                    for (K = i, X = 0; X < a.length; X++) {
                        var n = e.findAncestor(a[X], "ladi-element");
                        !e.isEmpty(e.runtime.eventData[n.id]) && e.runtime.eventData[n.id]["option.form_auto_complete"] && t.forEach(J)
                    }
                };
                mt(e.copy(S)
                    .except(e.runtime.list_set_value_name_country));
                e.runtime.tmp.listAfterLocation.push(function () {
                    var t = "",
                        i = "",
                        n = "",
                        o = "",
                        r = null,
                        s = function (t, e) {
                            var i = "" + r[t].name,
                                a = "" + r[e].name;
                            try {
                                return i.localeCompare(a)
                            } catch (t) {}
                            return i == a ? 0 : i > a ? 1 : -1
                        },
                        l = function (a) {
                            var n = window.LadiLocation[i].data[a];
                            e.isEmpty(n) || (t += '<option value="' + n.id + ":" + n.name + '">' + n.name + "</option>")
                        },
                        d = function (t) {
                            var i = window.LadiLocation[t.target.getAttribute("data-country")].data[t.target.value.split(":")[0]];
                            if (n = "", !e.isEmpty(i)) {
                                var a = Object.keys(i.data);
                                r = i.data, a.sort(s), a.forEach(function (t) {
                                    var e = i.data[t];
                                    n += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>"
                                })
                            }
                            var o = e.findAncestor(t.target, "ladi-element");
                            if (!e.isEmpty(o)) {
                                var l = o.querySelector('select[name="district"]');
                                e.isEmpty(l) || (l.setAttribute("data-selected", ""), l.innerHTML = l.querySelector("option")
                                    .outerHTML + n);
                                var d = o.querySelector('select[name="ward"]');
                                e.isEmpty(d) || (d.setAttribute("data-selected", ""), d.innerHTML = d.querySelector("option")
                                    .outerHTML), e.reloadFeeShipping({
                                    target: d
                                })
                            }
                        },
                        c = function (t) {
                            var i = e.findAncestor(t.target, "ladi-element");
                            if (!e.isEmpty(i)) {
                                var a = i.querySelector('select[name="ward"]');
                                if (!e.isEmpty(a)) {
                                    a.setAttribute("data-selected", ""), o = "";
                                    var n = i.querySelector('select[name="state"]');
                                    if (!e.isEmpty(n)) {
                                        var l = n.getAttribute("data-selected");
                                        if (!e.isEmpty(l)) {
                                            l = l.split(":")[0];
                                            var d = window.LadiLocation[n.getAttribute("data-country")].data[l];
                                            if (!e.isEmpty(d)) {
                                                var c = d.data[t.target.value.split(":")[0]];
                                                if (!e.isEmpty(c)) {
                                                    var p = Object.keys(c.data);
                                                    r = c.data, p.sort(s), p.forEach(function (t) {
                                                        var e = c.data[t];
                                                        o += '<option value="' + e.id + ":" + e.name + '">' + e.name + "</option>"
                                                    })
                                                }
                                            }
                                        }
                                    }
                                    a.innerHTML = a.querySelector("option")
                                        .outerHTML + o
                                }
                                e.reloadFeeShipping({
                                    target: a
                                })
                            }
                        },
                        p = function (t) {
                            var i = e.findAncestor(t.target, "ladi-element");
                            if (!e.isEmpty(i)) {
                                var a = i.querySelector('select[name="ward"]');
                                e.reloadFeeShipping({
                                    target: a
                                })
                            }
                        };
                    for (X = 0; X < a.length; X++) {
                        var u = a[X].querySelectorAll('.ladi-element .ladi-form-item-container [name="state"]'),
                            m = 0,
                            _ = null;
                        for (m = 0; m < u.length; m++)
                            if (_ = e.findAncestor(u[m], "ladi-element"), !e.isEmpty(_) && (i = e.runtime.eventData[_.id]["option.input_country"], !e.isEmpty(i) && (t = "", i = i.split(":")[0], !e.isEmpty(window.LadiLocation[i])))) {
                                var y = window.LadiLocation[i].data,
                                    g = Object.keys(y);
                                r = y, g.sort(s), "VN" == i && (g = g.except(["201", "202", "224", "220", "203"]), g = ["201", "202", "224", "220", "203"].concat(g)), g.forEach(l), u[m].innerHTML = u[m].querySelector("option")
                                    .outerHTML + t, u[m].setAttribute("data-country", i), u[m].addEventListener("change", d)
                            }
                        var f = a[X].querySelectorAll('.ladi-element .ladi-form-item-container [name="district"]');
                        for (m = 0; m < f.length; m++) f[m].addEventListener("change", c);
                        var h = a[X].querySelectorAll('.ladi-element .ladi-form-item-container [name="ward"]');
                        for (m = 0; m < h.length; m++) h[m].addEventListener("change", p)
                    }
                }), e.runtime.tmp.listAfterLocation.push(function () {
                    mt(N, !0)
                }), e.runtime.tmp.buttonAddToCartClick = G
            },
            X = function () {
                for (var t = document.querySelectorAll(".ladi-form .ladi-element .ladi-form-control-file"), i = function (t) {
                        var i = t.target,
                            a = i.getAttribute("data-click-id") || e.randomId();
                        i.setAttribute("data-click-id", a);
                        var n = document.getElementById("ladi-input-file");
                        if (e.isEmpty(n)) {
                            (n = document.createElement("input"))
                            .id = "ladi-input-file";
                            var o = e.findAncestor(i, "ladi-element");
                            !e.isEmpty(o) && o.classList.contains("accept-all") || n.setAttribute("accept", ".jpg, .jpeg, .png, .gif, .svg, .ico, .mp3, .mp4, .ttf, .otf, .woff2, .txt, .doc, .docx, .xls, .xlsx, .pdf"), n.setAttribute("style", "position: absolute; top: 0; left: 0; visibility: hidden;"), n.multiple = !0, n.type = "file", document.body.appendChild(n)
                        }
                        n.setAttribute("data-file-click-id", a), "true" != n.getAttribute("data-event") && (n.setAttribute("data-event", !0), n.addEventListener("change", function (t) {
                            ! function (t, i, a) {
                                if (i.length > e.const.FORM_UPLOAD_FILE_LENGTH) e.showMessage(e.const.LANG.FORM_UPLOAD_FILE_MAX_LENGTH_ERROR, {
                                    max_length: e.const.FORM_UPLOAD_FILE_LENGTH
                                });
                                else {
                                    for (var n = new FormData, o = 0, r = 0; r < i.length; r++) o += i[r].size, n.append("file[]", i[r]);
                                    if (o > 1024 * e.const.FORM_UPLOAD_FILE_SIZE * 1024) e.showMessage(e.const.LANG.FORM_UPLOAD_FILE_MAX_SIZE_ERROR, {
                                        max_size: e.const.FORM_UPLOAD_FILE_SIZE
                                    });
                                    else {
                                        var s = {
                                            ladipage_id: e.runtime.ladipage_id,
                                            lang: e.runtime.lang
                                        };
                                        n.append("json_data", JSON.stringify(s)), e.showLoadingBlur(), e.sendRequest("POST", e.const.API_FILE_UPLOAD, n, !0, null, function (i, a, n) {
                                            if (n.readyState == XMLHttpRequest.DONE) {
                                                if (e.hideLoadingBlur(), 200 == a) try {
                                                    var o = JSON.parse(i);
                                                    if (200 == o.code) {
                                                        var r = [],
                                                            s = [];
                                                        return o.data.success.forEach(function (t) {
                                                            r.push(t.name), s.push({
                                                                id: t._id,
                                                                path: t.path,
                                                                name: t.name
                                                            })
                                                        }), t.value = r.length > 0 ? "[" + r.join(", ") + "]" : "", void t.setAttribute("data-path-file", JSON.stringify(s))
                                                    }
                                                    if (!e.isEmpty(o.message)) return void e.showMessage(o.message)
                                                } catch (t) {}
                                                e.showMessage(e.const.LANG.REQUEST_SEND_ERROR)
                                            }
                                        }), e.isFunction(a) && a()
                                    }
                                }
                            }(i = document.querySelector('[data-click-id="' + t.target.getAttribute("data-file-click-id") + '"]'), t.target.files, function () {
                                t.target.value = null
                            })
                        })), n.click()
                    }, a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.readOnly = !0, n.style.setProperty("cursor", "pointer"), n.addEventListener("click", i)
                }
            },
            K = function (t) {
                if (e.runtime.isClient && !e.runtime.isDesktop && !e.isEmpty(e.runtime.bodyFontSize)) {
                    var i = (parseFloatLadiPage(getComputedStyle(document.body)
                        .fontSize) || 0) / e.runtime.bodyFontSize;
                    if (1 != i)
                        for (var a = document.querySelectorAll(".ladi-paragraph, .ladi-list-paragraph, .ladi-headline, .ladi-countdown, .ladi-form, .ladi-table, .ladi-spin-lucky"), n = 0; n < a.length; n++) {
                            var o = (parseFloatLadiPage(getComputedStyle(a[n])
                                .fontSize) || 0) / (i * i);
                            a[n].style.setProperty("font-size", o + "px")
                        } else t > Date.now() && e.runTimeout(function () {
                            K(t)
                        }, 100)
                }
            },
            J = function (t) {
                var i = null;
                return e.isEmpty(t) || (i = t.classList.contains("no-value") ? null : t.getAttribute("data-value")), i = e.isEmpty(i) ? "" : i
            },
            Z = function (t, i) {
                var a = t.querySelectorAll(".ladi-form-label-item");
                i = e.isEmpty(i) ? "" : i;
                for (var n = 0; n < a.length; n++) {
                    J(a[n]) == i ? a[n].classList.add("selected") : a[n].classList.remove("selected")
                }
            },
            $ = function (t) {
                var e = t.querySelector(".ladi-form-label-item.selected");
                return J(e)
            },
            Q = function (t, i) {
                var a = t.target;
                if (a.classList.contains("disabled"))
                    for (var n = e.findAncestor(a, "ladi-element")
                            .querySelectorAll(".ladi-form-label-item"), o = 0; o < n.length; o++) n[o].classList.contains("no-value") ? n[o].classList.add("selected") : n[o].classList.remove("selected"), n[o].classList.remove("disabled");
                var r = J(a);
                !t.is_fire_event && a.classList.contains("selected") && (r = "");
                var s = e.findAncestor(a, "ladi-form-label-container");
                Z(s, r), e.isFunction(i) && i(s)
            },
            tt = function (i, a, n, o) {
                if ("form" == a) {
                    var r = e.runtime.eventData[i];
                    if (!e.isEmpty(r) && r["option.is_add_to_cart"]) {
                        var s = document.getElementById(i);
                        if (!e.isEmpty(s) && (!n || e.isEmpty(e.findAncestor(s, "ladi-collection-item")))) {
                            var l = s.querySelector('[data-variant="true"]');
                            if (!e.isEmpty(l)) {
                                var d = e.runtime.eventData[l.id];
                                if (!e.isEmpty(d)) {
                                    var c = r["option.product_type"],
                                        p = r["option.product_id"];
                                    if (!e.isEmpty(c) && !e.isEmpty(p)) {
                                        var u = e.generateVariantProduct(r, !1, null, null, null, null, !0, !0, function (t) {
                                            tt(i, a, n, o)
                                        });
                                        if (!(e.isEmpty(u) || e.isEmpty(u.store_info) || e.isEmpty(u.product))) {
                                            var m = e.generateVariantProduct(r, !0, d["option.product_variant_type"], d["option.product_variant_title"], d["option.product_variant_price"], d["option.input_tabindex"], t, !0, function (t) {
                                                    tt(i, a, n, o)
                                                }),
                                                _ = function (t) {
                                                    e.updateProductVariantSelectOption(t, r, d, o, function () {
                                                        if (o) {
                                                            var a = e.generateVariantProduct(r, !1, null, null, null, null, !0, !0),
                                                                n = e.getProductVariantId(t.target, a.product);
                                                            if (!e.isArray(a.product.variants)) return;
                                                            var s = a.product.variants.find(function (t) {
                                                                return t.product_variant_id == n
                                                            });
                                                            if (e.isEmpty(s)) return;
                                                            for (var l = document.querySelectorAll("#POPUP_PRODUCT .ladi-element"), d = 0; d < l.length; d++) l[d].id != i && e.runtime.tmp.runLadiSaleProductKey(l[d].id, !1, !0, s, a)
                                                        } else e.runtime.tmp.generateLadiSaleProduct(!1, !0, t)
                                                    })
                                                },
                                                y = function (t) {
                                                    Q(t, function (t) {
                                                        _({
                                                            target: t
                                                        })
                                                    })
                                                };
                                            e.showParentVisibility(l, function () {
                                                for (var t = l.clientHeight, i = t, a = l.querySelectorAll("select.ladi-form-control"), n = {}, o = 0; o < a.length; o++) n[a[o].getAttribute("data-store-id") + "_" + a[o].getAttribute("data-product-id") + "_" + a[o].getAttribute("data-product-option-id")] = a[o].value;
                                                var c = l.querySelectorAll(".ladi-form-label-container");
                                                for (o = 0; o < c.length; o++) n[c[o].getAttribute("data-store-id") + "_" + c[o].getAttribute("data-product-id") + "_" + c[o].getAttribute("data-product-option-id")] = $(c[o]);
                                                l.innerHTML = m;
                                                for (var p = null, u = null, g = l.querySelectorAll("select.ladi-form-control"), f = 0; f < g.length; f++) g[f].addEventListener("change", _), p = n[g[f].getAttribute("data-store-id") + "_" + g[f].getAttribute("data-product-id") + "_" + g[f].getAttribute("data-product-option-id")], e.isNull(p) && (u = g[f].querySelector("option"), e.isEmpty(u) || (p = u.getAttribute("value"))), g[f].value = p;
                                                var h = l.querySelectorAll(".ladi-form-label-container");
                                                for (f = 0; f < h.length; f++) {
                                                    for (var v = h[f].querySelectorAll(".ladi-form-label-item"), E = 0; E < v.length; E++) e.tapEventListener(v[E], y);
                                                    p = n[h[f].getAttribute("data-store-id") + "_" + h[f].getAttribute("data-product-id") + "_" + h[f].getAttribute("data-product-option-id")], e.isNull(p) && (u = v[1], e.isEmpty(u) || (p = J(u))), Z(h[f], p)
                                                }
                                                if (e.updateProductVariantSelectOptionFirst(r, d, l), d["option.product_variant_type"] != e.const.PRODUCT_VARIANT_TYPE.combined) l.style.setProperty("height", "auto"), i = l.clientHeight, l.style.removeProperty("height"), i > 0 && t != i && (l.style.setProperty("height", i + "px"), e.updateHeightElement(!0, l, s, t, i));
                                                else if (!e.isEmpty(r["option.product_variant_id"]))
                                                    for (var P = 0; P < g.length; P++) {
                                                        var L = g[P].querySelector('option[data-product-variant-id="' + r["option.product_variant_id"] + '"]');
                                                        e.isEmpty(L) || g[P].value == L.getAttribute("value") || (g[P].value = L.getAttribute("value"), e.fireEvent(g[P], "change"))
                                                    }
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            et = function (i, a, n) {
                if (e.isObject(a) && e.isObject(a.variant) && e.isObject(a.product)) {
                    var o = a.variant.src;
                    if (e.isEmpty(o) && (o = a.product.image, e.isObject(o) && (o = o.src)), !e.isEmpty(o)) {
                        !e.isString(o) || o.startsWith("http://") || o.startsWith("https://") || o.startsWith("//") || (o = "https://" + e.const.STATIC_W_DOMAIN + "/" + o);
                        var r = e.findAncestor(i, "ladi-collection-item"),
                            s = [],
                            l = 0,
                            d = null;
                        if (e.isEmpty(r)) {
                            var c = document.querySelectorAll("[data-runtime-id]");
                            for (l = 0; l < c.length; l++) r = e.findAncestor(c[l], "ladi-collection-item"), e.isEmpty(r) && (d = e.runtime.eventData[c[l].id], e.isEmpty(d) || d["option.product_type"] != n["option.product_type"] || d["option.product_id"] != n["option.product_id"] || s.push(c[l]))
                        } else s = r.querySelectorAll("[data-runtime-id]");
                        for (l = 0; l < s.length; l++)
                            if (d = e.runtime.eventData[s[l].id], !e.isEmpty(d) && !e.isEmpty(d["option.product_mapping_name"])) {
                                var p = s[l].getElementsByClassName("ladi-gallery-view")[0],
                                    u = e.getOptimizeImage(o, p.clientWidth, p.clientHeight, !0, !1, !1, t);
                                u = 'url("' + u + '")';
                                var m = e.getOptimizeImage(o, 0, 0, !0, !1, !1, t);
                                m = 'url("' + m + '")';
                                for (var _ = p.getElementsByClassName("ladi-gallery-view-item"), y = 0; y < _.length; y++)
                                    if (u == getComputedStyle(_[y])
                                        .backgroundImage || m == getComputedStyle(_[y])
                                        .backgroundImage) {
                                        var g = (parseFloatLadiPage(_[y].getAttribute("data-index")) || 0) + 1;
                                        window.ladi(s[l].id, s[l])
                                            .index(g)
                                    }
                            }
                    }
                }
            },
            it = function (i, a, n, o, r, s, l, d) {
                var c = e.runtime.eventData[i];
                if (!e.isEmpty(c)) {
                    var p = c["option.product_mapping_name"],
                        u = !e.isEmpty(p),
                        m = c.type,
                        _ = JSON.stringify(c),
                        g = null,
                        f = null;
                    if (s) g = r.product[p];
                    else if (e.isEmpty(o)) {
                        if (e.isEmpty(c) || e.isEmpty(c["option.product_type"]) || e.isEmpty(c["option.product_id"]) || e.isEmpty(p)) return;
                        var h = c["option.product_variant_id"],
                            v = !1;
                        if (e.isEmpty(h) && (a && (v = ! function () {
                                for (var t = !1, i = 0; i < y.length; i++) {
                                    var a = e.runtime.eventData[y[i]];
                                    if ("form" == a.type && a["option.product_type"] == c["option.product_type"] && a["option.product_id"] == c["option.product_id"]) {
                                        t = !0;
                                        break
                                    }
                                }
                                return t
                            }()), !e.isEmpty(l))) {
                            if (c["option.product_id"] != l.target.getAttribute("data-product-id")) return;
                            c["option.product_type"];
                            var E = e.generateVariantProduct(c, !1, null, null, null, null, !0, !0, function (t) {
                                it(i, a, n, o, r, !1, l)
                            });
                            e.isObject(E) && (h = e.getProductVariantId(l.target, E.product))
                        }
                        if (_ === (g = (f = e.generateProductKey(!0, _, !0, c, v, h, o, function (t) {
                                    it(i, a, n, o, r, s, l)
                                }))
                                .value)) return
                    } else {
                        if ("form" == m && c["option.is_add_to_cart"]) return c["option.product_id"] = o.product_id, c["option.product_variant_id"] = o.product_variant_id, void tt(i, m, !1, !0);
                        if (!u) return;
                        g = (g = (f = e.generateProductKey(!0, null, !0, c, !1, o.product_variant_id, o))
                            .value) || ""
                    }
                    var P = null,
                        L = null,
                        A = null;
                    if ("headline" == m || "paragraph" == m) {
                        var b = d ? "ladi-html" : null;
                        window.ladi(i)
                            .value(e.isNull(g) ? "" : g, b)
                    }
                    if ("image" == m) {
                        if (P = document.getElementById(i), e.isEmpty(P)) return;
                        A = e.getOptimizeImage(g, P.clientWidth, P.clientHeight, !0, !1, !1, t), L = "style_add_to_cart_image_" + i;
                        var w = "";
                        w = e.isEmpty(A) ? "#" + i + "  > .ladi-image > .ladi-image-background {background-image: none;}" : "#" + i + '  > .ladi-image > .ladi-image-background {background-image: url("' + A + '");}', e.createStyleElement(L, w)
                    }
                    if ("gallery" == m) {
                        if (!e.isArray(g)) return;
                        if (P = document.getElementById(i), e.isEmpty(P)) return;
                        if (n && "true" == P.getAttribute("data-loaded")) return void et(P, f, c);
                        for (var S = P.getElementsByClassName("ladi-gallery-view")[0], T = P.getElementsByClassName("ladi-gallery-view-item"); T.length < g.length;) {
                            var O = e.createTmpElement("div", '<div class="ladi-gallery-view-item" data-index="' + T.length + '"></div>', null, !0);
                            P.getElementsByClassName("ladi-gallery-view")[0].appendChild(O)
                        }
                        for (; T.length > g.length;) T[T.length - 1].parentElement.removeChild(T[T.length - 1]);
                        for (var C = P.getElementsByClassName("ladi-gallery-control-item"), N = function (t) {
                                G(t, P)
                            }; C.length < g.length;) {
                            var I = e.createTmpElement("div", '<div class="ladi-gallery-control-item" data-index="' + C.length + '"></div>', null, !0);
                            I.addEventListener("click", N), P.getElementsByClassName("ladi-gallery-control-box")[0].appendChild(I)
                        }
                        for (; C.length > g.length;) C[C.length - 1].parentElement.removeChild(C[C.length - 1]);
                        L = "style_add_to_cart_gallery_" + i;
                        var k = "";
                        g.length <= 1 && (k += "#" + i + " .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {display: none;}", k += "#" + i + " > .ladi-gallery > .ladi-gallery-view {height: 100%;}", k += "#" + i + " > .ladi-gallery > .ladi-gallery-control {display: none;}");
                        var x = P.getElementsByClassName("ladi-gallery-control-item")[0];
                        g.forEach(function (a, n) {
                            A = e.getOptimizeImage(a.src, S.clientWidth, S.clientHeight, !0, !1, !1, t), k += "#" + i + ' .ladi-gallery .ladi-gallery-view-item[data-index="' + n + '"] {background-image: url("' + A + '");}', A = e.getOptimizeImage(a.src, x.clientWidth, x.clientHeight, !0, !1, !1, t), k += "#" + i + ' .ladi-gallery .ladi-gallery-control-item[data-index="' + n + '"] {background-image: url("' + A + '");}'
                        }), P.setAttribute("data-max-item", g.length), P.setAttribute("data-loaded", !0), e.createStyleElement(L, k)
                    }
                }
            },
            at = function (t) {
                var i = {
                    type: "POPUPX",
                    iframe_id: e.runtime.tmp.popupx_iframe_id
                };
                Object.keys(t)
                    .forEach(function (e) {
                        i[e] = t[e]
                    }), e.postMessageWindow(window.parent, i, "*")
            },
            nt = function (t) {
                if (!e.runtime.tmp.popupx_is_desktop && !e.isEmpty(t)) {
                    var i = parseFloatLadiPage(t);
                    window.innerWidth = i, window.outerWidth = i, window.ladi_screen_width = i, e.isFunction(window.ladi_viewport) && window.ladi_viewport()
                }
            },
            ot = function (t, i, a, n) {
                var o = e.isEmpty(e.runtime.tmp.popupx_current_element_id);
                e.runtime.tmp.popupx_current_element_id = t, !i || o || a || n || C("PageView", {})
            },
            rt = function (t, i) {
                for (var a = !1, n = !1, o = document.querySelectorAll("#" + e.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), r = 0; r < o.length; r++) "none" != getComputedStyle(o[r])
                    .display && (o[r].id == t && (a = !0), e.runRemovePopup(o[r].id, !0, null, !1, !0));
                for (o = document.querySelectorAll(".ladi-section:not(#" + e.runtime.builder_section_popup_id + ")"), r = 0; r < o.length; r++) "none" != getComputedStyle(o[r])
                    .display && (o[r].id == t && (n = !0), window.ladi(o[r].id)
                        .hide(!0));
                return {
                    isCurrentPopup: a,
                    isCurrentSection: n
                }
            },
            st = function (t, i) {
                var a = e.runtime.eventData[t],
                    n = document.getElementById(t),
                    o = null,
                    r = null,
                    s = !1,
                    l = !1,
                    d = {
                        width_device: e.runtime.desktop_width
                    },
                    c = document.getElementById("style_container_desktop");
                if ((e.isEmpty(c) || "print" == c.getAttribute("media")) && (d = {
                        width_device: e.runtime.mobile_width
                    }), !e.isEmpty(a) && !e.isEmpty(n)) {
                    var p = getComputedStyle(n);
                    if ("popup" == a.type) {
                        o = {}, s = (r = rt(t))
                            .isCurrentPopup, l = r.isCurrentSection;
                        var u = a[e.runtime.device + ".option.popup_position"];
                        ["width", "height", "position", "margin", "top", "left", "bottom", "right", "z-index"].forEach(function (t) {
                            o[t] = p[t]
                        }), nt(o.width), d.width = o.width;
                        var m = a[e.runtime.device + ".option.popup_backdrop"];
                        return at({
                                id: t,
                                position: u,
                                data_backdrop: m,
                                data_scale: d,
                                is_opacity: !s,
                                set_scroll_popup: !0,
                                dimension: o,
                                action: {
                                    type: "set_iframe_dimension"
                                }
                            }), window.ladi(t)
                            .show(!0), ot(t, i, s, l), !0
                    }
                    if ("section" == a.type) {
                        if (s = (r = rt(t))
                            .isCurrentPopup, l = r.isCurrentSection, a[e.runtime.device + ".option.sticky"]) {
                            o = {
                                height: p.height
                            };
                            var _ = n.getElementsByClassName("ladi-container")[0],
                                y = getComputedStyle(_);
                            nt(y.width), d.width = y.width, d.is_sticky_bar = !0, at({
                                    id: t,
                                    data_scale: d,
                                    dimension: o,
                                    element: a,
                                    device: e.runtime.device,
                                    action: {
                                        type: "set_iframe_sticky"
                                    }
                                }), window.ladi(t)
                                .show(!0), ot(t, i, s, l)
                        }
                        return !0
                    }
                }
                return !1
            },
            lt = function (t, i) {
                var a = e.runtime.eventData[t],
                    n = document.getElementById(t),
                    o = null;
                if (!e.isEmpty(a) && !e.isEmpty(n)) {
                    var r = getComputedStyle(n),
                        s = rt(t),
                        l = s.isCurrentPopup,
                        d = s.isCurrentSection,
                        c = {
                            width_device: e.runtime.desktop_width
                        },
                        p = document.getElementById("style_container_desktop");
                    if ((e.isEmpty(p) || "print" == p.getAttribute("media")) && (c = {
                            width_device: e.runtime.mobile_width
                        }), o = {
                            width: r.width,
                            height: r.height
                        }, "popup" == a.type && (c.width = o.width), "section" == a.type) {
                        var u = n.getElementsByClassName("ladi-container")[0],
                            m = getComputedStyle(u);
                        o.width = m.width, c.width = m.width, c.is_sticky_bar = !0
                    }
                    return nt(o.width), at({
                            id: t,
                            data_scale: c,
                            dimension: o,
                            action: {
                                type: "set_iframe_dimension"
                            }
                        }), window.ladi(t)
                        .show(!0), ot(t, i, l, d), !0
                }
                return !1
            },
            dt = function (t) {
                for (var i = ["style_element_desktop", "style_container_desktop", "style_ladi_media_desktop"], a = ["style_element_mobile", "style_container_mobile", "style_ladi_media_mobile"], n = 0; n < i.length; n++) {
                    var o = document.getElementById(i[n]);
                    e.isEmpty(o) || (t ? o.removeAttribute("media") : o.setAttribute("media", "print"))
                }
                for (n = 0; n < a.length; n++) {
                    var r = document.getElementById(a[n]);
                    e.isEmpty(r) || (t ? r.setAttribute("media", "print") : r.removeAttribute("media"))
                }
            },
            ct = function () {
                var i;
                e.changeTotalPriceCart(), e.runtime.tmp.generateLadiSaleProduct(!0), e.runtime.shopping && e.createCartData(), e.loadDataset(null, null, null, null, null, !0, t), y.forEach(function (i) {
                        var a, n, o = e.runtime.eventData[i],
                            r = LadiPageApp[o.type + e.const.APP_RUNTIME_PREFIX];
                        e.isEmpty(r) ? (! function (t, i, a, n, o, r) {
                                var s = document.getElementById(t);
                                if (!e.isEmpty(s) && (R(t), "section" == i && !e.isEmpty(o) && !e.isEmpty(r))) {
                                    var l = s.getElementsByClassName("ladi-section-background")[0];
                                    e.isEmpty(l) || (e.runtime.list_scroll_func[t] = function () {
                                        if ((!e.runtime.isDesktop || a == e.const.BACKGROUND_STYLE.video) && (e.runtime.isDesktop || n == e.const.BACKGROUND_STYLE.video)) {
                                            var i = "",
                                                s = t + "_background_video";
                                            o == e.const.VIDEO_TYPE.youtube && (i = '<iframe id="' + s + '" class="ladi-section-background-video" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>', l.innerHTML += i, e.runEventPlayVideo(s, o, r, !0, !0, !1)), o == e.const.VIDEO_TYPE.direct && (i = '<video id="' + s + '" class="ladi-section-background-video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"></video>', l.innerHTML += i, e.runEventPlayVideo(s, o, r, !0, !0, !1))
                                        }
                                    })
                                }
                            }(i, o.type, o[e.const.DESKTOP + ".option.background-style"], o[e.const.MOBILE + ".option.background-style"], o["option.background_video.video_type"], o["option.background_video.video_value"]), x(null, i, o.type, o), a = o.type, n = o["option.data_event"] || o["option.data_action"], e.runtime.list_loaded_func.push(function () {
                                var t = 0;
                                if (-1 != ["headline", "paragraph", "list_paragraph"].indexOf(a) && (t = 1e3), !e.isArray(n)) {
                                    var i = e.copy(n);
                                    n = [], e.isObject(i) && (i.action_type = e.const.ACTION_TYPE.action, n.push(i))
                                }
                                e.runTimeout(function () {
                                    n.forEach(function (t) {
                                        t.action_type == e.const.ACTION_TYPE.action && (t.type != e.const.DATA_ACTION_TYPE.collapse || e.isEmpty(t.action) || !e.isNull(t.collapse_start_is_show) && t.collapse_start_is_show || window.ladi(t.action)
                                            .collapse(!1))
                                    })
                                }, t)
                            }), D(null, i, o.type, o["option.data_event"] || o["option.data_hover"]), function (t, i, a, n, o, r, s) {
                                if ("video" == i && !e.isEmpty(a)) {
                                    var l = document.getElementById(t);
                                    if (!e.isEmpty(l)) {
                                        var d = function () {
                                                var i = e.runtime.eventData[t];
                                                e.isEmpty(i) || (n = i["option.video_type"], a = i["option.video_value"], o = i["option.video_control"])
                                            },
                                            c = e.runtime.isDesktop && r || !e.runtime.isDesktop && s;
                                        if (c) {
                                            var p = function () {
                                                    d(), e.playVideo(t, n, a, o, c)
                                                },
                                                u = e.findAncestor(l, "ladi-popup");
                                            e.isEmpty(u) ? e.runtime.list_scroll_func[t] = p : (u = e.findAncestor(u, "ladi-element"), e.isArray(e.runtime.list_show_popup_func[u.id]) || (e.runtime.list_show_popup_func[u.id] = []), e.runtime.list_show_popup_func[u.id].push(p))
                                        } else {
                                            var m = document.querySelectorAll("#" + t + ".preload")
                                                .length > 0;
                                            m && e.playVideo(t, n, a, o, !1, m)
                                        }
                                        l.addEventListener("click", function (i) {
                                            i.stopPropagation(), d(), n == e.const.VIDEO_TYPE.direct && "VIDEO" == i.target.tagName || n == e.const.VIDEO_TYPE.youtube && "IFRAME" == i.target.tagName || e.playVideo(t, n, a, o)
                                        })
                                    }
                                }
                            }(i, o.type, o["option.video_value"], o["option.video_type"], o["option.video_control"], o[e.const.DESKTOP + ".option.video_autoplay"], o[e.const.MOBILE + ".option.video_autoplay"]), function (t, i, a, n) {
                                "popup" == i && a && ((e.isEmpty(n) || n < 0) && (n = 0), e.runTimeout(function () {
                                    window.ladi(t)
                                        .show()
                                }, 1e3 * n))
                            }(i, o.type, o["option.show_popup_welcome_page"], o["option.delay_popup_welcome_page"]), F(i, null, o.type, o["option.countdown_type"], o["option.countdown_minute"], o["option.countdown_daily_start"], o["option.countdown_daily_end"], o["option.countdown_endtime"]), q(i, null, o.type, o["option.countdown_item_type"]), function (t, i, a, n) {
                                if ("section" == i) {
                                    var o = document.getElementById(t);
                                    if (!e.isEmpty(o)) {
                                        var r = o.getElementsByClassName("ladi-section-arrow-down")[0];
                                        g.push(function () {
                                            if (e.isEmpty(r)) {
                                                if (e.runtime.isDesktop) {
                                                    if (e.isEmpty(a)) return void o.removeAttribute("data-opacity");
                                                    var t = (parseFloatLadiPage(a) || 0) + 50;
                                                    if (t > o.clientHeight) return void o.removeAttribute("data-opacity");
                                                    o.setAttribute("data-height", o.clientHeight), o.style.setProperty("height", t + "px"), o.classList.add("overflow-hidden")
                                                } else {
                                                    if (e.isEmpty(n)) return void o.removeAttribute("data-opacity");
                                                    var i = (parseFloatLadiPage(n) || 0) + 50;
                                                    if (i > o.clientHeight) return void o.removeAttribute("data-opacity");
                                                    o.setAttribute("data-height", o.clientHeight), o.style.setProperty("height", i + "px"), o.classList.add("overflow-hidden")
                                                }(r = document.createElement("div"))
                                                .className = "ladi-section-arrow-down", o.appendChild(r), o.removeAttribute("data-opacity"), r.addEventListener("click", function (t) {
                                                    t.stopPropagation(), o.classList.add("transition-readmore"), o.style.removeProperty("height"), r.parentElement.removeChild(r), e.runTimeout(function () {
                                                        o.classList.remove("transition-readmore"), o.classList.remove("overflow-hidden"), o.clientHeight != o.getAttribute("data-height") && o.style.setProperty("height", o.getAttribute("data-height") + "px"), o.removeAttribute("data-height"), e.runTimeout(e.removeSticky, 100)
                                                    }, 1e3 * parseFloatLadiPage(getComputedStyle(o)
                                                        .transitionDuration))
                                                })
                                            }
                                        })
                                    }
                                }
                            }(i, o.type, o[e.const.DESKTOP + ".option.readmore_range"], o[e.const.MOBILE + ".option.readmore_range"]), function (t, i, a) {
                                if ("form_item" == i) {
                                    var n = null,
                                        o = null;
                                    if ((a == e.const.INPUT_TYPE.select || a == e.const.INPUT_TYPE.select_multiple) && (n = document.getElementById(t), !e.isEmpty(n)))
                                        for (var r = n.getElementsByClassName("ladi-form-control"), s = 0; s < r.length; s++) r[s].addEventListener("change", function (t) {
                                            t.target.setAttribute("data-selected", t.target.value)
                                        });
                                    if (a == e.const.INPUT_TYPE.checkbox) {
                                        n = document.getElementById(t);
                                        var l = function (t) {
                                                t.stopPropagation();
                                                var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                                e.isEmpty(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked)
                                            },
                                            d = function (t) {
                                                t.stopPropagation();
                                                var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                                e.isEmpty(i) || i.getElementsByTagName("input")[0].click()
                                            };
                                        if (!e.isEmpty(n)) {
                                            o = n.getElementsByClassName("ladi-form-checkbox-item");
                                            for (var c = 0; c < o.length; c++) {
                                                var p = o[c].getElementsByTagName("input")[0];
                                                o[c].getElementsByTagName("span")[0].addEventListener("click", d), p.addEventListener("change", l)
                                            }
                                        }
                                    }
                                    if (a == e.const.INPUT_TYPE.radio) {
                                        n = document.getElementById(t);
                                        var u = function (t) {
                                                var i = e.findAncestor(t.target, "ladi-form-checkbox-item"),
                                                    a = e.findAncestor(i, "ladi-form-checkbox");
                                                if (!e.isEmpty(a)) {
                                                    for (var n = a.querySelectorAll(".ladi-form-checkbox-item span"), o = 0; o < n.length; o++) n[o].setAttribute("data-checked", !1);
                                                    e.isEmpty(i) || i.getElementsByTagName("span")[0].setAttribute("data-checked", t.target.checked)
                                                }
                                            },
                                            m = function (t) {
                                                t.stopPropagation();
                                                var i = e.findAncestor(t.target, "ladi-form-checkbox-item");
                                                e.isEmpty(i) || i.getElementsByTagName("input")[0].click()
                                            };
                                        if (!e.isEmpty(n)) {
                                            o = n.getElementsByClassName("ladi-form-checkbox-item");
                                            for (var _ = 0; _ < o.length; _++) {
                                                var y = o[_].getElementsByTagName("input")[0];
                                                o[_].getElementsByTagName("span")[0].addEventListener("click", m), y.addEventListener("change", u)
                                            }
                                        }
                                    }
                                }
                            }(i, o.type, o["option.input_type"]), H(i, null, !1, o.type), e.startAutoScroll(i, o.type, o[e.const.DESKTOP + ".option.auto_scroll"], o[e.const.MOBILE + ".option.auto_scroll"]), tt(i, o.type, !0, !1), function (t, i) {
                                if ("form" == i) {
                                    var a = document.getElementById(t);
                                    if (!e.isEmpty(a)) {
                                        var n = a.querySelector('input[name="quantity"]');
                                        if (!e.isEmpty(n)) {
                                            var o = function (i) {
                                                if (!e.isEmpty(i.target.value)) {
                                                    var a = e.runtime.eventData[t];
                                                    if (!e.isEmpty(a) && a["option.is_add_to_cart"]) {
                                                        var n = e.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function () {
                                                            o(i)
                                                        });
                                                        if (!(e.isEmpty(n) || e.isEmpty(n.store_info) || e.isEmpty(n.product))) {
                                                            var r = e.getProductVariantIndex(t, a);
                                                            if (-1 != r) {
                                                                var s = n.product.variants[r].quantity,
                                                                    l = n.product.variants[r].quantity_stock;
                                                                s = e.isNull(l) ? s : l;
                                                                var d = parseInt(i.target.value) || 0,
                                                                    c = 1;
                                                                c = n.product.variants[r].min_buy || c;
                                                                var p = n.product.variants[r].max_buy,
                                                                    u = 0,
                                                                    m = e.runtime.tmp.cart.findIndex(function (t) {
                                                                        return t.product_id == n.product.variants[r].product_id && t.product_variant_id == n.product.variants[r].product_variant_id
                                                                    }); - 1 != m && (u = e.runtime.tmp.cart[m].quantity), c > d + u && (d = c - u), 1 == n.product.variants[r].inventory_checked && d + u > s && (d = s - u), !e.isEmpty(p) && d + u > p && (d = p - u), d = d < 1 ? 1 : d, i.target.setAttribute("min", c), e.isEmpty(p) || i.target.setAttribute("max", p), i.target.value = d
                                                            }
                                                        }
                                                    }
                                                }
                                            };
                                            n.addEventListener("input", o), e.fireEvent(n, "input");
                                            var r = a.querySelectorAll(".button")[0],
                                                s = a.querySelectorAll(".button")[1];
                                            e.isEmpty(r) || e.isEmpty(s) || (r.addEventListener("click", function (t) {
                                                n.value = (parseFloatLadiPage(n.value) || 0) - 1, e.fireEvent(n, "input")
                                            }), s.addEventListener("click", function (t) {
                                                n.value = (parseFloatLadiPage(n.value) || 0) + 1, e.fireEvent(n, "input")
                                            }))
                                        }
                                    }
                                }
                            }(i, o.type), function (t, i) {
                                if ("collection" == i) {
                                    var a = document.getElementById(t);
                                    if (!e.isEmpty(a)) {
                                        var n = e.runtime.eventData[t];
                                        if (!e.isEmpty(n)) {
                                            var o = n["option.collection_setting.type"],
                                                r = a.getElementsByClassName("ladi-collection")[0];
                                            if (o == e.const.COLLECTION_TYPE.carousel && r.classList.add("carousel"), o == e.const.COLLECTION_TYPE.carousel) {
                                                var s = document.createElement("div");
                                                s.className = "ladi-collection-arrow ladi-collection-arrow-left opacity-0";
                                                var l = document.createElement("div");
                                                l.className = "ladi-collection-arrow ladi-collection-arrow-right opacity-0", r.appendChild(s), r.appendChild(l), s.addEventListener("click", function (i) {
                                                    i.stopPropagation();
                                                    var o = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                    o = (o -= 1) < 1 ? 1 : o, e.loadCollectionData(t, n, o, !1)
                                                }), l.addEventListener("click", function (i) {
                                                    i.stopPropagation();
                                                    var o = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                    if (o += 1, a.hasAttribute("data-max-page")) {
                                                        var r = parseFloatLadiPage(a.getAttribute("data-max-page")) || 1;
                                                        o = o > r ? r : o
                                                    }
                                                    e.loadCollectionData(t, n, o, !1)
                                                })
                                            }
                                            if (o == e.const.COLLECTION_TYPE.readmore) {
                                                var d = document.createElement("div");
                                                d.className = "ladi-collection-button-next opacity-0", r.appendChild(d), d.addEventListener("click", function (i) {
                                                    i.stopPropagation();
                                                    var o = parseFloatLadiPage(a.getAttribute("data-page")) || 1;
                                                    if (o += 1, a.hasAttribute("data-max-page")) {
                                                        var r = parseFloatLadiPage(a.getAttribute("data-max-page")) || 1;
                                                        o = o > r ? r : o
                                                    }
                                                    e.loadCollectionData(t, n, o, !1, !0)
                                                })
                                            }
                                            e.loadCollectionData(t, n, 1, !0)
                                        }
                                    }
                                }
                            }(i, o.type), function (t, i, a, n) {
                                if ("survey" == i) {
                                    var o = document.getElementById(t);
                                    if (!e.isEmpty(o)) {
                                        a && o.setAttribute("data-multiple", !0);
                                        var r = o.getElementsByClassName("ladi-survey-option"),
                                            s = o.querySelector(".ladi-survey-button-next button"),
                                            l = [],
                                            d = n.mapping_form_name,
                                            c = n.mapping_form_id,
                                            p = e.runtime.eventData[t]["option.data_event"];
                                        if (!e.isArray(p)) {
                                            var u = e.copy(n);
                                            if (p = [], e.isObject(u) && !e.isEmpty(u.value)) {
                                                if (u.type != e.const.DATA_ACTION_TYPE.section && u.type != e.const.DATA_ACTION_TYPE.popup || p.push({
                                                        action_type: e.const.ACTION_TYPE.complete,
                                                        type: u.type,
                                                        action: u.value
                                                    }), u.type == e.const.DATA_ACTION_TYPE.section && u.is_hide_parent || u.type == e.const.DATA_ACTION_TYPE.popup) {
                                                    var m = e.findAncestor(o, "ladi-popup"),
                                                        _ = e.findAncestor(o, "ladi-section"),
                                                        y = null;
                                                    e.isEmpty(m) ? e.isEmpty(_) || (y = _.id) : y = (m = e.findAncestor(m, "ladi-element"))
                                                        .id, e.isEmpty(y) || p.push({
                                                            action_type: e.const.ACTION_TYPE.complete,
                                                            type: e.const.DATA_ACTION_TYPE.hidden_show,
                                                            hidden_ids: [y],
                                                            show_ids: []
                                                        })
                                                }
                                                u.type == e.const.DATA_ACTION_TYPE.change_index && p.push({
                                                    action_type: e.const.ACTION_TYPE.complete,
                                                    type: u.type,
                                                    action: u.value,
                                                    change_index_type: u.change_index_type,
                                                    change_index_number: u.change_index_number
                                                })
                                            }
                                        }
                                        for (var g = function () {
                                                var i = window.ladi(t)
                                                    .value(),
                                                    n = d || "";
                                                c.forEach(function (t) {
                                                    var o = document.getElementById(t);
                                                    if (!e.isEmpty(o)) {
                                                        for (var r = null; 0 != (r = o.querySelectorAll('.ladi-form-item-survey[data-name="' + n + '"]'))
                                                            .length;) r[0].parentElement.removeChild(r[0]);
                                                        var s = [],
                                                            d = o.querySelectorAll(".ladi-element .ladi-form-item-container [name]"),
                                                            c = null,
                                                            p = 0;
                                                        for (P = 0; P < d.length; P++) {
                                                            d[P].getAttribute("name") == n && (c = e.findAncestor(d[P], "ladi-element"), s.push(c.id));
                                                            var u = parseFloatLadiPage(d[P].getAttribute("tabindex")) || 0;
                                                            u > p && (p = u)
                                                        }
                                                        if (0 == (s = s.unique())
                                                            .length) {
                                                            p++, (c = document.createElement("div"))
                                                            .className = "ladi-element ladi-hidden ladi-form-item-survey", c.id = e.randomString(10), c.setAttribute("data-name", n);
                                                            var m = "";
                                                            if (m += '<div class="ladi-form-item-container">', m += '   <div class="ladi-form-item-background"></div>', a) {
                                                                m += '   <div class="ladi-form-item ladi-form-checkbox ladi-form-checkbox-vertical">';
                                                                for (var _ = 0; _ < l.length; _++) m += '   <div class="ladi-form-checkbox-item"><input tabindex="' + p + '" name="' + n + '" type="checkbox" value="' + l[_] + '"><span data-checked="false">' + l[_] + "</span></div>";
                                                                m += "   </div>"
                                                            } else m += '   <div class="ladi-form-item">', m += '       <input autocomplete="off" tabindex="' + p + '" name="' + n + '" class="ladi-form-control" type="text">', m += "   </div>";
                                                            m += "</div>", c.innerHTML = m, o.getElementsByClassName("ladi-form")[0].appendChild(c), s.push(c.id)
                                                        }
                                                        for (P = 0; P < s.length; P++) window.ladi(s[P])
                                                            .value(i)
                                                    }
                                                })
                                            }, f = function () {
                                                for (var t = !1, e = 0; e < r.length; e++)
                                                    if (r[e].classList.contains("selected")) {
                                                        t = !0;
                                                        break
                                                    }
                                                return t
                                            }, h = function () {
                                                f() && I(o, p), g()
                                            }, v = function (t) {
                                                e.tapEventListener(t, function (i) {
                                                    if (i.stopPropagation(), a) t.classList.contains("selected") ? t.classList.remove("selected") : t.classList.add("selected");
                                                    else
                                                        for (var n = t.parentElement.getElementsByClassName("ladi-survey-option"), o = 0; o < n.length; o++) n[o] === t ? n[o].classList.add("selected") : n[o].classList.remove("selected");
                                                    E(), e.isEmpty(s) && h()
                                                })
                                            }, E = function () {
                                                var t = f();
                                                e.isEmpty(s) || (t ? s.parentElement.classList.remove("no-select") : s.parentElement.classList.add("no-select"))
                                            }, P = 0; P < r.length; P++) l.push(r[P].getAttribute("data-value")), v(r[P]);
                                        e.isEmpty(s) || s.addEventListener("click", function (t) {
                                            t.stopPropagation(), h()
                                        }), E(), e.runtime.list_loaded_func.push(g)
                                    }
                                }
                            }(i, o.type, o["option.survey_setting.is_multiple"], o["option.survey_setting"] || o["option.survey_setting.event"])) : r(o, t)
                            .run(i, e.runtime.isDesktop)
                    }), K(Date.now() + 1e3), z(), X(), (i = function () {
                        y.forEach(function (t) {
                            var i = e.runtime.eventData[t];
                            if ("countdown" == i.type)
                                for (var a = document.querySelectorAll("#" + t), n = 0; n < a.length; n++) {
                                    var o = a[n],
                                        r = o.getAttribute("data-type"),
                                        s = 0,
                                        l = 0,
                                        d = Date.now();
                                    if (o.hasAttribute("data-date-start") || o.hasAttribute("data-date-end")) s = parseFloatLadiPage(o.getAttribute("data-date-start")) || 0, l = parseFloatLadiPage(o.getAttribute("data-date-end")) || 0;
                                    else {
                                        if (r == e.const.COUNTDOWN_TYPE.countdown) {
                                            var c = parseInt(o.getAttribute("data-minute")) || 0;
                                            if (c <= 0) return;
                                            for (l = e.runtime.timenow; l <= d;) l += 60 * c * 1e3
                                        }
                                        if (r == e.const.COUNTDOWN_TYPE.endtime && (l = parseInt(o.getAttribute("data-endtime")) || 0), r == e.const.COUNTDOWN_TYPE.daily) {
                                            var p = o.getAttribute("data-daily-start"),
                                                u = o.getAttribute("data-daily-end");
                                            if (!e.isEmpty(p) && !e.isEmpty(u)) {
                                                var m = (new Date)
                                                    .toDateString();
                                                s = new Date(m + " " + p)
                                                    .getTime(), l = new Date(m + " " + u)
                                                    .getTime()
                                            }
                                        }
                                        o.setAttribute("data-date-start", s), o.setAttribute("data-date-end", l)
                                    }
                                    if (s > d) return;
                                    var _ = l - d;
                                    if (_ < 0) {
                                        if (_ = 0, "true" == o.getAttribute("data-end")) return;
                                        "true" != o.getAttribute("data-end") && (o.setAttribute("data-end", !0), I(o, i["option.data_event"]), e.runEventTracking(o.id, !1))
                                    }
                                    for (var y = e.getCountdownTime(_), g = o.querySelectorAll("[data-item-type]"), f = 0; f < g.length; f++) g[f].querySelectorAll(".ladi-countdown-text span")[0].textContent = y[g[f].getAttribute("data-item-type")]
                                }
                        })
                    })(), e.runtime.interval_countdown = e.runInterval(i, 1e3), y.forEach(function (t) {
                        var i = document.getElementById(t);
                        e.isEmpty(i) || j(t, i)
                    }), e.runtime.interval_gallery = e.runInterval(U, 1e3), y.forEach(function (t) {
                        var i = e.runtime.eventData[t];
                        if ("carousel" == i.type) {
                            var a = document.getElementById(t);
                            if (!e.isEmpty(a)) {
                                a.hasAttribute("data-scrolled") || (a.setAttribute("data-scrolled", !1), e.runtime.list_scroll_func[t] = function () {
                                    a.setAttribute("data-scrolled", !0)
                                });
                                var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                                    o = i[e.runtime.device + ".option.carousel_setting.autoplay_time"],
                                    r = 0;
                                n && !e.isEmpty(o) && (r = o);
                                var s = function (i) {
                                    i.stopPropagation(), i = e.getEventCursorData(i), !e.isEmpty(e.runtime.timenext_carousel[t]) && e.runtime.timenext_carousel[t] > Date.now() || i.target.classList.contains("ladi-carousel-arrow") || (e.runtime.timenext_carousel[t] = Date.now() + 864e5, e.runtime.current_element_mouse_down_carousel = t, e.runtime.current_element_mouse_down_carousel_position_x = i.pageX, a.getElementsByClassName("ladi-carousel-content")[0].style.setProperty("transition-duration", "0ms"), a.getElementsByClassName("ladi-carousel-content")[0].setAttribute("data-left", getComputedStyle(a.getElementsByClassName("ladi-carousel-content")[0])
                                        .left))
                                };
                                a.getElementsByClassName("ladi-carousel-arrow-left")[0].addEventListener("click", function (e) {
                                    e.stopPropagation(), a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), a.setAttribute("data-is-next", !1), a.setAttribute("data-next-time", Date.now() + 1e3 * r), W(t, !1)
                                }), -((parseFloatLadiPage(i[e.runtime.device + ".option.carousel_crop.width"]) || 0) - a.clientWidth) < 0 && a.getElementsByClassName("ladi-carousel-arrow-right")[0].classList.remove("opacity-0"), a.getElementsByClassName("ladi-carousel-arrow-right")[0].addEventListener("click", function (e) {
                                    e.stopPropagation(), a.getElementsByClassName("ladi-carousel-content")[0].style.removeProperty("transition-duration"), a.setAttribute("data-is-next", !0), a.setAttribute("data-next-time", Date.now() + 1e3 * r), W(t, !1)
                                }), a.getElementsByClassName("ladi-carousel")[0].addEventListener("mousedown", s), a.getElementsByClassName("ladi-carousel")[0].addEventListener("touchstart", s, e.runtime.scrollEventPassive)
                            }
                        }
                    }), e.runtime.interval_carousel = e.runInterval(function () {
                        y.forEach(function (t) {
                            var i = e.runtime.eventData[t];
                            if ("carousel" == i.type) {
                                var a = document.getElementById(t);
                                if (!e.isEmpty(a) && "true" == a.getAttribute("data-scrolled") && "true" != a.getAttribute("data-stop")) {
                                    var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                                        o = i[e.runtime.device + ".option.carousel_setting.autoplay_time"],
                                        r = 0;
                                    if (n && !e.isEmpty(o) && (r = o), r > 0) {
                                        var s = a.getAttribute("data-next-time"),
                                            l = Date.now();
                                        e.isEmpty(s) && (s = l + 1e3 * (r - 1), a.setAttribute("data-next-time", s)), l >= s && (W(t, !0), a.setAttribute("data-next-time", l + 1e3 * r))
                                    }
                                }
                            }
                        })
                    }, 1e3),
                    function () {
                        var t = ["phone", "email", "coupon"],
                            i = document.querySelectorAll(".ladi-form .ladi-button");
                        e.runtime.tmp.list_form_checkout = [];
                        for (var a = function (t, i) {
                                var a = e.findAncestor(t.target, "ladi-form");
                                if (!e.isEmpty(a) && (a = a.querySelector("[data-submit-form-id]"), !e.isEmpty(a))) {
                                    var n = a.getAttribute("data-submit-form-id");
                                    if (!e.isEmpty(n)) {
                                        var o = document.querySelector("#" + n + ' .ladi-form-item input[name="coupon"]');
                                        e.isEmpty(o) || (o.value = t.target.value, e.fireEvent(o, i))
                                    }
                                }
                            }, n = function (t) {
                                a(t, "change")
                            }, o = function (t) {
                                a(t, "input")
                            }, r = function (t) {
                                e.isEmpty(e.runtime.tmp.current_use_coupon) && e.reloadPriceDiscount(t)
                            }, s = 0; s < i.length; s++) {
                            var l = e.findAncestor(i[s], "ladi-element");
                            if (!e.isEmpty(l)) {
                                var d = e.findAncestor(i[s], "ladi-form");
                                if (!e.isEmpty(d)) {
                                    var c = e.findAncestor(d, "ladi-element");
                                    if (!e.isEmpty(c)) {
                                        var p = e.runtime.eventData[c.id];
                                        if (!e.isEmpty(p)) {
                                            var u = e.runtime.eventData[l.id];
                                            if (e.isEmpty(u) || e.isEmpty(u["option.data_submit_form_id"])) {
                                                if (!p["option.is_form_login"] && !p["option.is_form_coupon"]) {
                                                    var m = e.findAncestor(c, "ladi-popup");
                                                    e.isEmpty(m) || (m = e.findAncestor(m, "ladi-element")), e.isEmpty(m) || "POPUP_CHECKOUT" != m.id || e.runtime.tmp.list_form_checkout.push(c.id)
                                                }
                                            } else if (p["option.is_form_coupon"]) {
                                                l.setAttribute("data-submit-form-id", u["option.data_submit_form_id"]), l.addEventListener("click", r), d.onsubmit = function () {
                                                    return !1
                                                };
                                                var _ = d.querySelector('.ladi-form-item input[name="coupon"]');
                                                if (!e.isEmpty(_)) {
                                                    _.addEventListener("change", n), _.addEventListener("input", o);
                                                    var y = document.querySelector("#" + u["option.data_submit_form_id"] + ' .ladi-form-item input[name="coupon"]');
                                                    e.isEmpty(y) || y.setAttribute("data-replace-coupon", !0)
                                                }
                                                e.runtime.tmp.list_form_checkout.push(u["option.data_submit_form_id"])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        e.runtime.tmp.list_form_checkout = e.runtime.tmp.list_form_checkout.unique();
                        for (var g = function (t) {
                                -1 == [e.const.FORM_CONFIG_TYPE.sapo, e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.shopify, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(e.runtime.shopping_product_type) && e.reloadPriceDiscount()
                            }, f = 0; f < e.runtime.tmp.list_form_checkout.length; f++)
                            for (var h = document.querySelectorAll("#" + e.runtime.tmp.list_form_checkout[f] + " .ladi-form-item input.ladi-form-control"), v = 0; v < h.length; v++) - 1 != t.indexOf(h[v].getAttribute("name")) && (h[v].addEventListener("change", g), h[v].addEventListener("input", g))
                    }(), B(), t && (e.runtime.is_popupx || e.const.TIME_ONPAGE_TRACKING.forEach(function (t) {
                        e.runTimeout(function () {
                            e.isFunction(window.gtag) && window.gtag("event", "TimeOnPage_" + t + "_seconds", {
                                event_category: "LadiPageTimeOnPage",
                                event_label: window.location.host + window.location.pathname,
                                non_interaction: !0
                            }), e.isFunction(window.fbq) && window.fbq("trackCustom", "TimeOnPage_" + t + "_seconds")
                        }, 1e3 * t)
                    })), y.forEach(function (t) {
                        var i = document.getElementById(t);
                        if (!e.isEmpty(i)) {
                            var a = e.runtime.eventData[t],
                                n = a["option.data_tooltip.text"];
                            if (!e.isEmpty(n)) {
                                var o = a["option.data_tooltip.type"] || e.const.TOOLTIP_TYPE.default,
                                    r = a["option.data_tooltip.position"] || e.const.TOOLTIP_POSITION.top_middle,
                                    s = a["option.data_tooltip.size"] || e.const.TOOLTIP_SIZE.medium;
                                i.setAttribute("data-hint", n);
                                var l = "hint";
                                r == e.const.TOOLTIP_POSITION.top_middle && (l += "-top-middle"), r == e.const.TOOLTIP_POSITION.top_left && (l += "-top-left"), r == e.const.TOOLTIP_POSITION.top_right && (l += "-top-right"), r == e.const.TOOLTIP_POSITION.bottom_middle && (l += "-bottom-middle"), r == e.const.TOOLTIP_POSITION.bottom_left && (l += "-bottom-left"), r == e.const.TOOLTIP_POSITION.bottom_right && (l += "-bottom-right"), r == e.const.TOOLTIP_POSITION.left_middle && (l += "-left-middle"), r == e.const.TOOLTIP_POSITION.left_top && (l += "-left-top"), r == e.const.TOOLTIP_POSITION.left_bottom && (l += "-left-bottom"), r == e.const.TOOLTIP_POSITION.right_middle && (l += "-right-middle"), r == e.const.TOOLTIP_POSITION.right_top && (l += "-right-top"), r == e.const.TOOLTIP_POSITION.right_bottom && (l += "-right-bottom"), o == e.const.TOOLTIP_TYPE.info && (l += "-t-info"), o == e.const.TOOLTIP_TYPE.success && (l += "-t-success"), o == e.const.TOOLTIP_TYPE.error && (l += "-t-error"), o == e.const.TOOLTIP_TYPE.notice && (l += "-t-notice"), s == e.const.TOOLTIP_SIZE.small && (l += "-s-small"), s == e.const.TOOLTIP_SIZE.medium && (l += "-s-med"), s == e.const.TOOLTIP_SIZE.big && (l += "-s-big"), l += "-hint-anim-d-short", i.classList.add(l)
                            }
                        }
                    }),
                    function () {
                        var t = 2500,
                            i = 3800,
                            a = 800,
                            n = 50,
                            o = 150,
                            r = 500,
                            s = 1300,
                            l = 600,
                            d = 1500,
                            c = t,
                            p = function (p) {
                                var u = !1;
                                if (e.const.ANIMATED_LIST.forEach(function (t) {
                                        p.classList.contains(t) && (u = !0)
                                    }), u) {
                                    var m = p.getElementsByClassName("ladipage-animated-words-wrapper")[0];
                                    if (!e.isEmpty(m)) {
                                        var _ = e.isEmpty(m.getAttribute("data-word")) ? [] : JSON.parse(m.getAttribute("data-word"));
                                        if (0 != _.length) {
                                            var y = !1,
                                                g = e.randomId(),
                                                f = function (i, a, n, o) {
                                                    if (!y) {
                                                        e.isEmpty(i) || (i.classList.remove("in"), i.classList.add("out"));
                                                        var r = e.isEmpty(i) ? null : i.nextSibling;
                                                        if (e.isEmpty(r) ? n && e.runTimeout(function () {
                                                                L(v(a))
                                                            }, t) : e.runTimeout(function () {
                                                                f(r, a, n, o)
                                                            }, o), e.isEmpty(r) && document.querySelectorAll("html")[0].classList.contains("no-csstransitions")) {
                                                            var s = v(a);
                                                            E(a, s)
                                                        }
                                                    }
                                                },
                                                h = function (i, a, n, o) {
                                                    if (!y) {
                                                        var r = a.parentElement,
                                                            s = r.parentElement;
                                                        s.classList.contains("ladipage-animated-headline") || (s = s.parentElement), e.isEmpty(i) || (i.classList.add("in"), i.classList.remove("out"));
                                                        var l = e.isEmpty(i) ? null : i.nextSibling;
                                                        e.isEmpty(l) ? ((s.classList.contains("rotate-2") || s.classList.contains("rotate-3") || s.classList.contains("scale")) && r.style.setProperty("width", a.clientWidth + "px"), e.isEmpty(e.findAncestor(a, "type")) || e.runTimeout(function () {
                                                            var t = e.findAncestor(a, "ladipage-animated-words-wrapper");
                                                            e.isEmpty(t) || t.classList.add("waiting")
                                                        }, 200), n || e.runTimeout(function () {
                                                            L(a)
                                                        }, t)) : e.runTimeout(function () {
                                                            h(l, a, n, o)
                                                        }, o)
                                                    }
                                                },
                                                v = function (t) {
                                                    if (!y) {
                                                        var i = t.nextSibling;
                                                        return e.isEmpty(i) || i.classList.contains("after") ? t.parentElement.firstChild : i
                                                    }
                                                },
                                                E = function (t, e) {
                                                    y || (t.classList.remove("is-visible"), t.classList.add("is-hidden"), e.classList.remove("is-hidden"), e.classList.add("is-visible"))
                                                },
                                                P = function (t, i) {
                                                    y || (e.isEmpty(e.findAncestor(t, "type")) ? e.isEmpty(e.findAncestor(t, "clip")) || (e.findAncestor(t, "ladipage-animated-words-wrapper")
                                                        .style.setProperty("width", t.clientWidth + 5 + "px"), e.runTimeout(function () {
                                                            L(t)
                                                        }, l + d)) : (h(t.querySelectorAll("i")[0], t, !1, i), t.classList.add("is-visible"), t.classList.remove("is-hidden")))
                                                },
                                                L = function (d) {
                                                    if (!y && !e.isEmpty(d)) {
                                                        var c = v(d);
                                                        if (e.isEmpty(e.findAncestor(d, "type")))
                                                            if (e.isEmpty(e.findAncestor(d, "letters"))) e.isEmpty(e.findAncestor(d, "clip")) ? e.isEmpty(e.findAncestor(d, "loading-bar")) ? (E(d, c), e.runTimeout(function () {
                                                                L(c)
                                                            }, t)) : (e.findAncestor(d, "ladipage-animated-words-wrapper")
                                                                .classList.remove("is-loading"), E(d, c), e.runTimeout(function () {
                                                                    L(c)
                                                                }, i), e.runTimeout(function () {
                                                                    e.findAncestor(d, "ladipage-animated-words-wrapper")
                                                                        .classList.add("is-loading")
                                                                }, a)) : (e.findAncestor(d, "ladipage-animated-words-wrapper")
                                                                .style.setProperty("width", "2px"), e.runTimeout(function () {
                                                                    E(d, c), P(c)
                                                                }, l));
                                                            else {
                                                                var p = d.querySelectorAll("i")
                                                                    .length >= c.querySelectorAll("i")
                                                                    .length;
                                                                f(d.querySelectorAll("i")[0], d, p, n), h(c.querySelectorAll("i")[0], c, p, n)
                                                            } else {
                                                            var u = e.findAncestor(d, "ladipage-animated-words-wrapper");
                                                            u.classList.add("selected"), u.classList.remove("waiting"), e.runTimeout(function () {
                                                                u.classList.remove("selected"), d.classList.remove("is-visible"), d.classList.add("is-hidden");
                                                                for (var t = d.querySelectorAll("i"), e = 0; e < t.length; e++) t[e].classList.remove("in"), t[e].classList.add("out")
                                                            }, r), e.runTimeout(function () {
                                                                P(c, o)
                                                            }, s)
                                                        }
                                                    }
                                                },
                                                A = document.createElement(p.tagName);
                                            p.parentElement.insertBefore(A, p.nextSibling), A.outerHTML = p.outerHTML, (A = p.nextSibling)
                                                .classList.add("ladipage-animated-headline-duplicate"), e.runtime.list_scrolling_exec[g] = function () {
                                                    p.parentElement.removeChild(p), A.classList.remove("ladipage-animated-headline-duplicate"), y = !0, delete e.runtime.list_scrolling_exec[g]
                                                };
                                            var b = m.textContent.trim();
                                            if (m.textContent = "", m.innerHTML = m.innerHTML + '<b class="is-visible">' + b + "</b>", _.forEach(function (t) {
                                                    e.isEmpty(t) ? m.innerHTML = m.innerHTML + "<b>" + b + "</b>" : m.innerHTML = m.innerHTML + "<b>" + t.trim() + "</b>"
                                                }), !e.isEmpty(e.findAncestor(m, "type")) || !e.isEmpty(e.findAncestor(m, "loading-bar")) || !e.isEmpty(e.findAncestor(m, "clip"))) {
                                                m.innerHTML = m.innerHTML + '<div class="after"></div>';
                                                for (var w = getComputedStyle(m)
                                                        .color, S = m.getElementsByClassName("after"), T = 0; T < S.length; T++) S[T].style.setProperty("background-color", w)
                                            }
                                            if (p.classList.contains("type") && m.classList.add("waiting"), (p.classList.contains("type") || p.classList.contains("rotate-2") || p.classList.contains("rotate-3") || p.classList.contains("scale")) && p.classList.add("letters"), function (t) {
                                                    if (!y)
                                                        for (var i = 0; i < t.length; i++) {
                                                            var a = t[i],
                                                                n = a.textContent.trim()
                                                                .split(""),
                                                                o = a.classList.contains("is-visible");
                                                            for (var r in n) {
                                                                " " == n[r] && (n[r] = "&nbsp;");
                                                                var s = e.findAncestor(a, "rotate-2");
                                                                e.isEmpty(s) || (n[r] = "<em>" + n[r] + "</em>"), n[r] = o ? '<i class="in">' + n[r] + "</i>" : "<i>" + n[r] + "</i>"
                                                            }
                                                            var l = n.join("");
                                                            a.innerHTML = l, a.style.setProperty("opacity", 1)
                                                        }
                                                }(document.querySelectorAll(".letters b")), p.classList.contains("loading-bar")) c = i, e.runTimeout(function () {
                                                m.classList.add("is-loading")
                                            }, a);
                                            else if (p.classList.contains("clip")) {
                                                var O = m.clientWidth + 5;
                                                m.style.setProperty("width", O + "px")
                                            }
                                            e.runTimeout(function () {
                                                L(p.getElementsByClassName("is-visible")[0])
                                            }, c)
                                        }
                                    }
                                }
                            },
                            u = function () {
                                for (var t = document.getElementsByClassName("ladipage-animated-headline"), e = [], i = 0; i < t.length; i++) e.push(t[i]);
                                e.forEach(p)
                            };
                        u();
                        var m = e.randomId();
                        e.runtime.list_scrolled_exec[m] = u
                    }(),
                    function () {
                        for (var t = document.querySelectorAll(".ladi-button-group > .ladi-element"), i = function (t) {
                                var i = e.findAncestor(t.target, "ladi-button");
                                (i = e.isEmpty(i) ? t.target : e.findAncestor(i, "ladi-element"))
                                .classList.add("selected");
                                var a = e.findAncestor(t.target, "ladi-button-group");
                                if (!e.isEmpty(a))
                                    for (var n = (a = e.findAncestor(a, "ladi-element"))
                                            .querySelectorAll(".ladi-button-group > .ladi-element"), o = 0; o < n.length; o++) n[o].id != i.id && n[o].classList.remove("selected")
                            }, a = 0; a < t.length; a++) t[a].addEventListener("click", i)
                    }(),
                    function () {
                        document.addEventListener("mouseleave", e.runEventMouseLeave), document.addEventListener("mousemove", e.runEventMouseMove), document.addEventListener("touchmove", e.runEventMouseMove, e.runtime.scrollEventPassive), document.addEventListener("mouseup", e.runEventMouseUp), document.addEventListener("touchend", e.runEventMouseUp);
                        var t = window;
                        e.isObject(e.runtime.story_page) && (t = document.getElementsByClassName("ladi-wraper")[0]), t.addEventListener("scroll", e.runEventScroll, e.runtime.scrollEventPassive), window.addEventListener("resize", e.runEventResize), window.addEventListener("orientationchange", e.runEventOrientationChange);
                        var i = document.getElementById(e.runtime.backdrop_popup_id);
                        e.isEmpty(i) || i.addEventListener("click", e.runEventBackdropPopupClick);
                        var a = document.getElementById(e.runtime.backdrop_dropbox_id);
                        e.isEmpty(a) || a.addEventListener("click", e.runEventBackdropDropboxClick)
                    }(), e.reloadLazyload(!0), M(), e.setDataReplaceStart(), e.resetViewport(), e.runConversionApi(), e.runStoryPage(), t || e.runAfterLocation(), e.runtime.list_loaded_func = e.runtime.list_loaded_func.concat(g), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? e.documentLoaded() : document.addEventListener("DOMContentLoaded", e.documentLoaded)
            };
        e.runtime.tmp.generateLadiSaleProduct = function (t, i, a) {
            var n = function () {
                    y.forEach(function (n) {
                        e.runtime.eventData[n], it(n, t, i, null, null, !1, a)
                    })
                },
                o = function (t) {
                    if (t && e.isEmpty(a)) n();
                    else {
                        var i = a.target,
                            r = e.findAncestor(i, "ladi-element");
                        if (!e.isEmpty(r)) {
                            var s = e.findAncestor(r, "ladi-form");
                            if (!e.isEmpty(s)) {
                                var l = e.findAncestor(s, "ladi-element");
                                if (!e.isEmpty(l)) {
                                    var d = e.runtime.eventData[l.id];
                                    if (!e.isEmpty(d)) {
                                        var c = d["option.product_id"];
                                        if (!e.isEmpty(c)) {
                                            var p = e.generateVariantProduct(d, !1, null, null, null, null, !0, !0, function (t) {
                                                o(!1)
                                            });
                                            if (e.isObject(p) && e.isObject(p.store_info) && e.isObject(p.product)) {
                                                var u = e.getProductVariantIndex(l.id, d),
                                                    m = document.querySelectorAll('[data-variant="true"]');
                                                if (-1 != u)
                                                    for (var _ = 0; _ < m.length; _++)
                                                        if (m[_].id != r.id && e.isEmpty(e.findAncestor(m[_], "ladi-collection"))) {
                                                            var y = e.runtime.eventData[m[_].id];
                                                            if (!e.isEmpty(y)) {
                                                                var g = e.findAncestor(m[_], "ladi-form");
                                                                if (!e.isEmpty(g)) {
                                                                    var f = e.findAncestor(g, "ladi-element");
                                                                    if (!e.isEmpty(f)) {
                                                                        var h = e.runtime.eventData[f.id];
                                                                        if (!e.isEmpty(h) && !e.isEmpty(h["option.product_variant_id"])) continue
                                                                    }
                                                                    var v = null,
                                                                        E = null,
                                                                        P = null,
                                                                        L = 0;
                                                                    if (y["option.product_variant_type"] == e.const.PRODUCT_VARIANT_TYPE.combobox) {
                                                                        if (!e.isArray(p.product.variants)) continue;
                                                                        if (E = p.product.variants[u], e.isString(E.option_ids))
                                                                            for (P = E.option_ids.split("/"), L = 0; L < P.length; L++) v = document.querySelector("#" + m[_].id + ' .ladi-form-item select[data-product-option-id="' + P[L] + '"]'), e.isEmpty(v) || v.getAttribute("data-store-id") != p.store_info.id || v.getAttribute("data-product-id") != E.product_id || (v.value = E["option" + (L + 1)])
                                                                    }
                                                                    if (y["option.product_variant_type"] == e.const.PRODUCT_VARIANT_TYPE.label) {
                                                                        if (!e.isArray(p.product.variants)) continue;
                                                                        if (E = p.product.variants[u], e.isString(E.option_ids))
                                                                            for (P = E.option_ids.split("/"), L = 0; L < P.length; L++) v = document.querySelector("#" + m[_].id + ' .ladi-form-label-container[data-product-option-id="' + P[L] + '"]'), e.isEmpty(v) || v.getAttribute("data-store-id") != p.store_info.id || v.getAttribute("data-product-id") != E.product_id || e.runtime.tmp.updateLabelValue(v, E["option" + (L + 1)])
                                                                    }
                                                                    if (y["option.product_variant_type"] == e.const.PRODUCT_VARIANT_TYPE.combined) {
                                                                        if (v = m[_].querySelector("select.ladi-form-control"), e.isEmpty(v) || v.getAttribute("data-store-id") != p.store_info.id || v.getAttribute("data-product-id") != p.product.product_id) continue;
                                                                        var A = e.getProductVariantId(r, p);
                                                                        if (!e.isEmpty(A)) {
                                                                            var b = v.querySelector('option[data-product-variant-id="' + A + '"]');
                                                                            e.isEmpty(b) || (u = b.getAttribute("value"))
                                                                        }
                                                                        v.value = u + ""
                                                                    }
                                                                }
                                                            }
                                                        }
                                                for (var w = 0; w < m.length; w++) {
                                                    var S = e.findAncestor(m[w], "ladi-form");
                                                    if (!e.isEmpty(S)) {
                                                        var T = S.querySelector('input[name="quantity"]');
                                                        e.isEmpty(T) || e.fireEvent(T, "input")
                                                    }
                                                }
                                                n()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
            o(!0)
        }, e.runtime.tmp.generateCart = function () {
            y.forEach(function (i) {
                ! function (i, a) {
                    if ("cart" == a) {
                        var n = e.runtime.eventData[i];
                        if (!e.isEmpty(n)) {
                            var o = document.getElementById(i);
                            e.isEmpty(o) || e.showParentVisibility(o, function () {
                                var i = parseFloatLadiPage(getComputedStyle(o)
                                        .height) || 0,
                                    a = parseFloatLadiPage(o.getAttribute("data-height")) || 0;
                                o.hasAttribute("data-height") || (o.setAttribute("data-height", i), a = i);
                                var r = e.generateHtmlCart(n["option.cart_layout"], n["option.message_no_product"], t);
                                o.getElementsByClassName("ladi-cart")[0].innerHTML = r;
                                var s = o.getElementsByClassName("ladi-cart")[0].scrollHeight;
                                if (i != (s = s < a ? a : s)) {
                                    o.style.setProperty("height", s + "px");
                                    var l = e.findAncestor(o.parentElement, "ladi-element");
                                    e.isEmpty(l) && (l = e.findAncestor(o.parentElement, "ladi-section")), e.updateHeightElement(!0, o, l, i, s)
                                }
                            })
                        }
                    }
                }(i, e.runtime.eventData[i].type)
            })
        }, e.runtime.tmp.runButtonSectionClose = R, e.runtime.tmp.runOptionAction = x, e.runtime.tmp.runOptionHover = D, e.runtime.tmp.runTrackingAnalytics = C, e.runtime.tmp.runLadiSaleProductKey = it, e.runtime.tmp.eventClickGalleryControlItem = G, e.runtime.tmp.runGallery = H, e.runtime.tmp.setGalleryStart = j, e.runtime.tmp.updateImageGalleryProduct = et, e.runtime.tmp.runOptionCountdown = F, e.runtime.tmp.runOptionCountdownItem = q, e.runtime.tmp.getOptionLabelValue = J, e.runtime.tmp.updateLabelValue = Z, e.runtime.tmp.getLabelValue = $, e.runtime.tmp.clickLabelProductChangeCallback = Q, e.runtime.tmp.fireEventLabelChange = function (t) {
            var i = t.querySelector(".ladi-form-label-item.selected");
            e.isEmpty(i) || e.fireEvent(i, "click", {
                is_fire_event: !0
            })
        }, e.runtime.tmp.showPopupX = st, e.runtime.tmp.runActionPopupX = at, e.runtime.is_popupx ? (e.runtime.tmp.popupx_iframe_id = e.randomId(), at({
            ladipage_id: e.runtime.ladipage_id,
            action: {
                type: "set_iframe_loaded"
            }
        }), window.addEventListener("message", function (t) {
            try {
                var i = JSON.parse(t.data);
                if ("POPUPX" != i.type) return;
                i.iframe_id == e.runtime.tmp.popupx_iframe_id && i.action.value.forEach(function (t) {
                    ! function (t, i) {
                        var a = null,
                            n = null;
                        if ("set_style_device" == t) {
                            if (dt(i.is_desktop), n = document.getElementById(e.runtime.tmp.popupx_current_element_id), e.isEmpty(n)) return;
                            "none" != getComputedStyle(n)
                                .display && (e.runtime.tmp.popupx_is_inline ? lt(e.runtime.tmp.popupx_current_element_id, !1) : st(e.runtime.tmp.popupx_current_element_id, !1))
                        }
                        if ("set_iframe_info" == t) {
                            e.isEmpty(f) && (f = i.ladi_client_id || e.randomId(), window.ladi("LADI_CLIENT_ID")
                                .set_cookie(f, 3650)), e.runtime.tmp.popupx_is_desktop = i.is_desktop, e.runtime.isDesktop = i.is_desktop, e.runtime.device = e.runtime.isDesktop ? e.const.DESKTOP : e.const.MOBILE, e.runtime.tmp.popupx_origin_store_id = i.origin_store_id, e.runtime.tmp.popupx_origin_referer = i.origin_referer, e.runtime.tmp.popupx_origin_domain = i.origin_domain, e.runtime.tmp.popupx_origin_url = i.origin_url, e.runtime.tmp.popupx_is_inline = i.is_inline, dt(i.is_desktop);
                            var o = "#" + e.runtime.builder_section_popup_id + " .ladi-container {width: 100% !important;}";
                            e.runtime.tmp.popupx_is_inline && (o += ".ladi-section > .ladi-section-close {display: none !important;}"), e.createStyleElement("style_popup_container", o), e.runtime.has_popupx = !0, ct()
                        }
                        "hide_popupx" == t && (a = e.runtime.eventData[i], n = document.getElementById(i), e.isEmpty(a) || e.isEmpty(n) || window.ladi(i)
                            .hide()), "show_popupx" == t && st(i, !0), "show_popupx_inline_iframe" == t && lt(i, !0), "show_message_callback" == t && (e.isFunction(e.runtime.tmp.popupx_show_message_callback) && e.runtime.tmp.popupx_show_message_callback(), delete e.runtime.tmp.popupx_show_message_callback)
                    }(i.action.type, t)
                })
            } catch (t) {}
        })) : ct(), e.runtime.isRun = !0
    } else e.loadHtmlGlobal(t)
}, LadiPageScriptV2.prototype.getListProductByTagId = function (t, e, i, a, n) {
    var o = this,
        r = t["option.form_account_id"],
        s = t["option.product_type"],
        l = t["option.ladisale_store_id"] || null,
        d = t["option.product_tag_id"],
        c = t["option.data_setting.value"],
        p = t["option.data_setting.type_dataset"],
        u = t["option.collection_setting.type"],
        m = t["option.data_setting.sort_name"],
        _ = t["option.data_setting.sort_by"],
        y = null,
        g = null,
        f = null,
        h = null,
        v = null;
    if (o.isArray(d) && d.length > 0) {
        if (o.isEmpty(o.runtime.tmp.product_tag_info[s]) && (o.runtime.tmp.product_tag_info[s] = {}), o.isEmpty(o.runtime.tmp.timeout_product_tag_info[s]) && (o.runtime.tmp.timeout_product_tag_info[s] = {}), d.sort(), f = JSON.stringify(d) + "_page_" + i + "_limit_" + e, h = o.runtime.tmp.product_tag_info[s][f], -1 != [o.const.FORM_CONFIG_TYPE.ladisales, o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify, o.const.FORM_CONFIG_TYPE.wordpress].indexOf(s)) {
            g = function () {
                var t = null;
                return o.isObject(h) && o.isArray(h.products) && (t = {
                    products: h.products,
                    total_record: h.total_record
                }, o.isEmpty(o.runtime.tmp.product_info[s]) && (o.runtime.tmp.product_info[s] = {}), t.products.forEach(function (t) {
                    o.runtime.tmp.product_info[s][t.product_id] = {
                        store_info: h.store_info,
                        product: t
                    }
                })), t
            };
            var E = null;
            if (o.isString(h) && (E = h, h = null), o.isNull(h)) {
                o.runtime.tmp.product_tag_info[s][f] = !0;
                var P = function () {
                        o.runtime.tmp.product_tag_info[s][f] = !1, o.isEmpty(o.runtime.tmp.timeout_product_tag_info[s][f]) || (o.removeTimeout(o.runtime.tmp.timeout_product_tag_info[s][f]), delete o.runtime.tmp.timeout_product_tag_info[s][f])
                    },
                    L = function (t) {
                        if (h = t.data, o.isObject(h)) {
                            if (!o.isObject(h.store_info)) {
                                var a = o.runtime.currency;
                                o.runtime.isClient || (a = window.$rootScope.getStoreCurrency()), h.store_info = {
                                    currency: {
                                        code: a,
                                        symbol: o.formatCurrency(null, a, !1, !0)
                                    }
                                }
                            }
                            if (s != o.const.FORM_CONFIG_TYPE.ladisales && (h.store_info.id = -1), o.isArray(h.products))
                                for (var r = null, l = function (t) {
                                        return t.option1 == r
                                    }, c = 0; c < h.products.length; c++)
                                    if (o.isArray(h.products[c].options) && o.isArray(h.products[c].variants)) {
                                        var p = h.products[c].options.map(function (t) {
                                            return t.product_option_id
                                        });
                                        p = p.join("/");
                                        for (var u = 0; u < h.products[c].variants.length; u++) - 1 != [o.const.FORM_CONFIG_TYPE.ladisales].indexOf(s) && 1 == h.products[c].variants[u].allow_sold_out && (h.products[c].variants[u].inventory_checked = 0), o.isNull(h.products[c].variants[u].compare_price) && (h.products[c].variants[u].compare_price = h.products[c].variants[u].price_compare), o.isNull(h.products[c].variants[u].variant_start_date) && (h.products[c].variants[u].variant_start_date = h.products[c].variants[u].start_date), o.isNull(h.products[c].variants[u].variant_end_date) && (h.products[c].variants[u].variant_end_date = h.products[c].variants[u].end_date), o.isNull(h.products[c].variants[u].variant_timezone) && (h.products[c].variants[u].variant_timezone = h.products[c].variants[u].timezone), o.isEmpty(h.products[c].variants[u].option_ids) && (h.products[c].variants[u].option_ids = p), -1 != [o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify].indexOf(s) && 1 == h.products[c].variants.length && "Default Title" == h.products[c].variants[u].title && (h.products[c].variants[u].title = null, h.products[c].variants[u].option1 = null, h.products[c].options = []), -1 != [o.const.FORM_CONFIG_TYPE.wordpress].indexOf(s) && 1 == h.products[c].variants.length && h.products[c].variants[u].title == h.products[c].variants[u].product_name && (h.products[c].variants[u].title = null, h.products[c].variants[u].option1 = null, h.products[c].options = []), o.isEmpty(h.products[c].variants[u].package_quantity) || o.isEmpty(h.products[c].variants[u].package_quantity_unit) || (o.isNull(h.products[c].variants[u].title_old) && (h.products[c].variants[u].title_old = h.products[c].variants[u].title), h.products[c].variants[u].title = h.products[c].variants[u].title_old + " (" + h.products[c].variants[u].package_quantity + " " + h.products[c].variants[u].package_quantity_unit + ")");
                                        if (o.isArray(h.products[c].options) && 1 == h.products[c].options.length && o.isArray(h.products[c].options[0].values))
                                            for (var m = 0; m < h.products[c].options[0].values.length; m++) {
                                                r = h.products[c].options[0].values[m].name;
                                                var _ = h.products[c].variants.find(l);
                                                h.products[c].options[0].values[m].name_new = h.products[c].options[0].values[m].label || h.products[c].options[0].values[m].name, o.isEmpty(_) || o.isEmpty(_.package_quantity) || o.isEmpty(_.package_quantity_unit) || (h.products[c].options[0].values[m].name_new = h.products[c].options[0].values[m].name_new + " (" + _.package_quantity + " " + _.package_quantity_unit + ")")
                                            }
                                    }
                            if (o.isString(h.page_next)) {
                                var v = JSON.stringify(d) + "_page_" + (i + 1) + "_limit_" + e;
                                o.runtime.tmp.product_tag_info[s][v] = h.page_next
                            }
                            o.runtime.tmp.product_tag_info[s][f] = h, y = g(), o.isFunction(n) && n(y)
                        } else P()
                    },
                    A = {
                        product_tag_ids: d,
                        limit: e
                    };
                o.isEmpty(u) ? A.type = "group" : A.paged = i, o.isEmpty(m) || o.isEmpty(_) || (A.sort = {}, A.sort[m] = _ == o.const.SORT_BY_TYPE.desc ? -1 : 1);
                var b = null,
                    w = "POST";
                return o.runLimitRequest(20, function () {
                    if (o.runtime.isClient) {
                        var a = o.const.API_LADISALE_COLLECTION_PRODUCT;
                        s == o.const.FORM_CONFIG_TYPE.ladisales ? ((b = {
                            "Content-Type": "application/json"
                        })["Store-Id"] = l, A = JSON.stringify(A)) : s == o.const.FORM_CONFIG_TYPE.wordpress ? (w = "GET", a = window.location.origin + "/ladipage/api?action=product_list&category_ids=" + d.join("|") + "&page=" + i + "&limit=" + e, A = null) : (b = {
                            "Content-Type": "application/json"
                        }, a = o.const.API_COLLECTION_PRODUCT, A = {
                            form_account_id: r,
                            tags: d,
                            limit: e
                        }, o.isEmpty(E) ? A.page = i : A.page_info = E, A = JSON.stringify(A)), o.sendRequest(w, a, A, !0, b, function (t, e, i) {
                            if (i.readyState == XMLHttpRequest.DONE) try {
                                var a = JSON.parse(t);
                                L(a)
                            } catch (t) {
                                P()
                            }
                        })
                    } else {
                        var n = function (t) {
                                if (o.isArray(t) && t.length > 1) {
                                    var e = {
                                        products: []
                                    };
                                    t.forEach(function (t) {
                                        if (o.isNull(t.product) && !o.isNull(t.store_info) && !o.isNull(t.total_record)) return e.store_info = t.store_info, void(e.total_record = t.total_record);
                                        o.isNull(t.product) || e.products.push(t.product)
                                    }), L({
                                        data: e
                                    })
                                }
                            },
                            c = LadiPage.mapping_attribute_option_product_id(t.element, "", d, e, i, !1, !0, function (t) {
                                n(t)
                            });
                        n(c)
                    }
                }), y
            }
        }
    } else o.isEmpty(c) || (g = function () {
        var t = null;
        if (o.isArray(v)) {
            var a = o.copy(v);
            t = {
                products: a = a.splice((i - 1) * e, e),
                total_record: v.length
            }, o.isEmpty(o.runtime.tmp.product_info[s]) && (o.runtime.tmp.product_info[s] = {}), v.forEach(function (t) {
                o.runtime.tmp.product_info[s][t.id] = {
                    store_info: {},
                    product: t
                }
            })
        }
        return t
    }, v = o.loadDataset(c, c, p, m, _, !0, o.runtime.isClient, function (t) {
        v = t, y = g(), o.isFunction(n) && n(y)
    }));
    return o.isFunction(g) && (!0 === h ? o.runtime.tmp.timeout_product_tag_info[s][f] = o.runTimeout(function () {
        o.getListProductByTagId(t, e, i, !1, n)
    }, 100) : (y = g(), !a && o.isFunction(n) && n(y))), y
}, LadiPageScriptV2.prototype.getLadiSaleCheckoutCartProducts = function () {
    var t = [];
    return this.isArray(this.runtime.tmp.cart) && this.runtime.tmp.cart.forEach(function (e) {
        e.quantity <= 0 || t.push({
            product_id: e.product_id,
            product_variant_id: e.product_variant_id,
            quantity: e.quantity
        })
    }), t
}, LadiPageScriptV2.prototype.getCartProducts = function () {
    var t = this,
        e = function () {
            var e = [];
            return t.runtime.tmp.cart.forEach(function (i) {
                if (!(i.quantity <= 0)) {
                    var a = i.name;
                    t.isEmpty(i.title) || a == i.title || (a += " - " + i.title);
                    var n = [
                        [i.product_variant_id, i.quantity, i.price, i.weight, i.weight_unit].join(":"), a
                    ];
                    t.isObject(i.promotion) && n.push([i.promotion.discount.discount_id, i.promotion.discount.note, i.promotion.total].join(":")), n = n.join("|"), e.push(n)
                }
            }), e
        };
    if (-1 != [t.const.FORM_CONFIG_TYPE.sapo, t.const.FORM_CONFIG_TYPE.haravan, t.const.FORM_CONFIG_TYPE.shopify, t.const.FORM_CONFIG_TYPE.wordpress].indexOf(t.runtime.shopping_product_type)) return e();
    var i = window.ladi("_checkout_token")
        .get_cookie();
    return this.isArray(this.runtime.tmp.cart) && !this.isEmpty(i) ? e() : void 0
}, LadiPageScriptV2.prototype.getCartCheckoutPrice = function (t) {
    var e = this.changeTotalPriceCart(!0);
    if (-1 != [this.const.FORM_CONFIG_TYPE.sapo, this.const.FORM_CONFIG_TYPE.haravan, this.const.FORM_CONFIG_TYPE.shopify, this.const.FORM_CONFIG_TYPE.wordpress].indexOf(this.runtime.shopping_product_type)) return e.cart_checkout_price;
    var i = window.ladi("_checkout_token")
        .get_cookie();
    return this.isArray(this.runtime.tmp.cart) && !this.isEmpty(i) ? e.cart_checkout_price : t
}, LadiPageScriptV2.prototype.createCartData = function (t) {
    this.runtime.tmp.cart = [], this.runtime.tmp.add_to_cart_discount = 0, this.runtime.tmp.add_to_cart_fee_shipping = 0;
    var e = this,
        i = function () {
            e.runtime.tmp.generateCart(), e.changeTotalPriceCart(), e.runResizeAll(), e.isFunction(t) && t()
        };
    if (e.isEmpty(e.runtime.shopping_product_type) || window.ladi("_shopping_product_type")
        .get_cookie() != e.runtime.shopping_product_type && (window.ladi("_cart_token")
            .delete_cookie(), window.ladi("_checkout_token")
            .delete_cookie(), window.ladi("_shopping_product_type")
            .set_cookie(e.runtime.shopping_product_type, 30)), -1 == [e.const.FORM_CONFIG_TYPE.sapo, e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(e.runtime.shopping_product_type))
        if (-1 == [e.const.FORM_CONFIG_TYPE.shopify].indexOf(e.runtime.shopping_product_type)) {
            var a = window.ladi("_cart_token")
                .get_cookie(),
                n = {
                    "Content-Type": "application/json"
                };
            if (!this.isEmpty(a)) return n["cart-token"] = a, void this.sendRequest("POST", this.const.API_LADISALE_SHOW, JSON.stringify({
                type: "LP"
            }), !0, n, function (t, a, n) {
                if (n.readyState == XMLHttpRequest.DONE) {
                    if (200 == a) try {
                        var o = JSON.parse(t);
                        200 == o.code && (e.runtime.tmp.ladisales_checkout_url = o.data.url, o.data.items.forEach(function (t) {
                            var i = e.isEmpty(t.src) ? "" : t.src;
                            e.isEmpty(i) || !e.isString(i) || i.startsWith("http://") || i.startsWith("https://") || i.startsWith("//") || (i = "https://" + e.const.STATIC_W_DOMAIN + "/" + i);
                            var a = e.runtime.tmp.cart.findIndex(function (e) {
                                    return e.store_id == t.store_id && e.product_id == t.product_id && e.product_variant_id == t.product_variant_id
                                }),
                                n = t.quantity,
                                r = t.option_name,
                                s = t.price;
                            e.isEmpty(t.package_quantity) || e.isEmpty(t.package_quantity_unit) || (r = r + " (" + t.package_quantity + " " + t.package_quantity_unit + ")"), -1 == a && e.runtime.tmp.cart.push({
                                store_id: t.store_id,
                                product_id: t.product_id,
                                product_variant_id: t.product_variant_id,
                                name: t.product_name,
                                title: r,
                                price: s,
                                image: i,
                                quantity: n,
                                inventory_checked: t.inventory_checked,
                                available_quantity: t.available_quantity,
                                min_buy: t.min_buy,
                                max_buy: t.max_buy,
                                currency: o.data.store_info.currency,
                                product_type: t.product_type,
                                package_quantity: t.package_quantity
                            })
                        }), e.updateCartPromotion())
                    } catch (t) {}
                    i()
                }
            });
            i()
        } else e.getCheckoutShopify(null, function (t, a) {
            e.updateCartPromotion(null, !0, i)
        }, function () {
            e.updateCartPromotion(null, !0, i)
        });
    else this.updateCartPromotion(null, !0, i)
}, LadiPageScriptV2.prototype.changeTotalPriceCart = function (t) {
    var e = this,
        i = 0,
        a = 0;
    this.runtime.tmp.cart.forEach(function (t) {
        a += t.quantity, e.isObject(t.promotion) ? i += t.promotion.total : i += t.price * t.quantity
    }), i = i < 0 ? 0 : i;
    var n = this.runtime.tmp.add_to_cart_fee_shipping || 0,
        o = this.runtime.tmp.add_to_cart_discount || 0,
        r = i + n - o;
    if (r = r < 0 ? 0 : r, t) return {
        cart_price: i,
        cart_checkout_price: r,
        cart_fee_shipping: n,
        cart_discount: o,
        total_quantity: a
    };
    var s = this.formatNumber(i, 3),
        l = this.formatNumber(r, 3),
        d = this.formatNumber(n, 3),
        c = this.formatNumber(o, 3);
    if (this.runtime.tmp.cart.length > 0 && !this.isEmpty(this.runtime.tmp.cart[0].currency) && !this.isEmpty(this.runtime.tmp.cart[0].currency.symbol)) {
        var p = this.runtime.tmp.cart[0].currency.symbol;
        s = this.formatCurrency(i, p, !0), l = this.formatCurrency(r, p, !0), d = this.formatCurrency(n, p, !0), c = this.formatCurrency(o, p, !0)
    }
    this.setDataReplaceStr("cart_price", s), this.setDataReplaceStr("cart_checkout_price", l), this.setDataReplaceStr("cart_fee_shipping", d), this.setDataReplaceStr("cart_discount", c), this.setDataReplaceStr("cart_quantity", a), this.setDataReplaceElement(!1)
}, LadiPageScriptV2.prototype.removeAddToCartProduct = function (t, e, i, a) {
    var n = this,
        o = {
            product_variant_id: t
        };
    try {
        t = decodeURIComponentLadiPage(t), o = JSON.parse(t)
    } catch (t) {}
    var r = function (t) {
            return n.isEmpty(t.cart_item_key) ? t.product_variant_id == o.product_variant_id : t.cart_item_key == o.cart_item_key
        },
        s = this.runtime.tmp.cart.findIndex(r); - 1 != s && this.updateCartCookie({
        cart_item_key: this.runtime.tmp.cart[s].cart_item_key,
        product_variant_id: this.runtime.tmp.cart[s].product_variant_id,
        quantity: 0
    }, i, function () {
        -1 != (s = n.runtime.tmp.cart.findIndex(r)) && n.runtime.tmp.cart.splice(s, 1), i && (n.runtime.tmp.cart = []), n.runtime.tmp.generateCart(), n.changeTotalPriceCart();
        var t = document.getElementsByClassName("ladi-form-remove-coupon")[0];
        n.isEmpty(t) || t.click(), n.updateCartPromotion(), 0 == n.runtime.tmp.cart.length && -1 != [n.const.FORM_CONFIG_TYPE.ladisales].indexOf(n.runtime.shopping_product_type) && (window.ladi("_cart_token")
            .delete_cookie(), window.ladi("_checkout_token")
            .delete_cookie()), n.runResizeAll(), n.isFunction(a) && a(!0)
    }, function (t) {
        e && n.showMessage(t.message), n.isFunction(a) && a(!1)
    })
}, LadiPageScriptV2.prototype.buttonAddToCartProductQuantity = function (t, e) {
    if (this.isArray(this.runtime.tmp.cart) && 0 != this.runtime.tmp.cart.length) {
        var i = this.findAncestor(t, "ladi-cart-quantity");
        if (!this.isEmpty(i)) {
            var a = i.querySelector("input");
            if (!this.isEmpty(a)) {
                var n = parseInt(a.value) || 0;
                a.value = n + e < a.getAttribute("min") ? a.getAttribute("min") : n + e, a.value != n && this.fireEvent(a, "input")
            }
        }
    }
}, LadiPageScriptV2.prototype.changeAddToCartProductQuantity = function (t, e, i) {
    var a = this,
        n = {
            product_variant_id: e
        };
    try {
        e = decodeURIComponentLadiPage(e), n = JSON.parse(e)
    } catch (t) {}
    var o = function (t) {
            return a.isEmpty(t.cart_item_key) ? t.product_variant_id == n.product_variant_id : t.cart_item_key == n.cart_item_key
        },
        r = this.runtime.tmp.cart.findIndex(o);
    if (-1 != r) {
        var s = !1,
            l = -1,
            d = 1,
            c = null,
            p = null,
            u = this.runtime.tmp.cart[r];
        a.isEmpty(u) || (d = u.min_buy || d, c = u.max_buy);
        var m = this.runtime.tmp.cart[r].quantity;
        if (this.isEmpty(t.value)) i && (t.value = d), this.runtime.tmp.cart[r].quantity = d;
        else {
            var _ = parseInt(t.value) || 0;
            1 == this.runtime.tmp.cart[r].inventory_checked && _ > (l = this.runtime.tmp.cart[r].available_quantity) && (_ = l, s = !0, p = l), _ = _ < d ? d : _, !this.isEmpty(c) && _ > c && (_ = c, s = !0, (a.isEmpty(p) || p > c) && (p = c)), this.runtime.tmp.cart[r].quantity = _, t.value = _
        }
        s && this.showMessage(this.const.LANG.ADD_TO_CART_MAX_QUANTITY, {
            max: p,
            name: a.getMessageNameProduct(u)
        });
        var y = this.runtime.tmp.cart[r].quantity;
        if (m == y) return void(t.value = m);
        var g = {
            cart_item_key: this.runtime.tmp.cart[r].cart_item_key,
            product_variant_id: this.runtime.tmp.cart[r].product_variant_id,
            quantity: y
        };
        g.product_type = this.runtime.tmp.cart[r].product_type, g.package_quantity = this.runtime.tmp.cart[r].package_quantity, this.updateCartCookie(g, !1, function () {
            var t = document.getElementsByClassName("ladi-form-remove-coupon")[0];
            a.isEmpty(t) || t.click(), a.updateCartPromotion()
        }, function (t) {
            a.runtime.tmp.cart[r].quantity -= y - m, a.showMessage(t.message)
        }, function () {
            if (a.changeTotalPriceCart(), -1 != (r = a.runtime.tmp.cart.findIndex(o))) {
                var e = a.runtime.tmp.cart[r].price * a.runtime.tmp.cart[r].quantity,
                    i = a.formatNumber(e, 3);
                a.isObject(a.runtime.tmp.cart[r].currency) && !a.isEmpty(a.runtime.tmp.cart[r].currency.symbol) && (i = a.formatCurrency(e, a.runtime.tmp.cart[r].currency.symbol, !0));
                for (var n = document.querySelectorAll(".ladi-cart-price span[data-product-variant-id]"), s = 0; s < n.length; s++)
                    if (n[s].getAttribute("data-store-id") == a.runtime.tmp.cart[r].store_id && n[s].getAttribute("data-product-id") == a.runtime.tmp.cart[r].product_id) {
                        if (a.isEmpty(a.runtime.tmp.cart[r].cart_item_key)) {
                            if (n[s].getAttribute("data-product-variant-id") != a.runtime.tmp.cart[r].product_variant_id) continue
                        } else if (n[s].getAttribute("data-cart-item-key") != a.runtime.tmp.cart[r].cart_item_key) continue;
                        n[s].innerHTML = i;
                        var l = a.findAncestor(n[s], "ladi-cart-row");
                        if (!a.isEmpty(l)) {
                            var d = a.findAncestor(t, "ladi-element"),
                                c = a.findAncestor(l, "ladi-element");
                            if (!a.isEmpty(d) && !a.isEmpty(c) && d.id == c.id) continue;
                            var p = l.querySelector(".ladi-cart-image-quantity");
                            a.isEmpty(p) || (p.innerHTML = a.runtime.tmp.cart[r].quantity);
                            var u = l.querySelector(".ladi-cart-quantity input");
                            a.isEmpty(u) || (u.value = a.runtime.tmp.cart[r].quantity)
                        }
                    }
            }
        })
    }
}, LadiPageScriptV2.prototype.updateProductVariantSelectOption = function (t, e, i, a, n) {
    var o = this,
        r = t.target,
        s = o.generateVariantProduct(e, !1, null, null, null, null, !0, !0, function (r) {
            o.updateProductVariantSelectOption(t, e, i, a, n)
        });
    if (o.isObject(s)) {
        var l = o.getProductVariantId(r, s.product),
            d = o.findAncestor(r, "ladi-collection-item"),
            c = [],
            p = 0;
        if (o.isEmpty(d))
            for (var u = document.querySelectorAll('[data-variant="true"]'), m = 0; m < u.length; m++) {
                var _ = o.findAncestor(u[m], "ladi-form");
                if (!o.isEmpty(_) && (_ = o.findAncestor(_, "ladi-element"), o.isEmpty(o.findAncestor(_, "ladi-collection")))) {
                    var y = o.runtime.eventData[_.id];
                    o.isEmpty(y) || y["option.product_type"] != e["option.product_type"] || y["option.product_id"] != e["option.product_id"] || c.push(u[m])
                }
            } else c = d.querySelectorAll('[data-variant="true"]');
        var g = [];
        for (p = 0; p < c.length; p++) {
            if (a) {
                var f = o.findAncestor(c[p], "ladi-popup");
                if (o.isEmpty(f)) continue;
                if ("POPUP_PRODUCT" != (f = o.findAncestor(f, "ladi-element"))
                    .id && "POPUP_BLOG" != f.id) continue
            }
            g.push(c[p])
        }
        var h = r.getAttribute("data-product-option-id"),
            v = null,
            E = null,
            P = null;
        if (o.isArray(s.product.variants) && 0 != s.product.variants.length) {
            if (o.isString(s.product.variants[0].option_ids)) {
                for (P = s.product.variants[0].option_ids.split("/"), p = 0; p < P.length; p++)
                    if (P[p] == h) {
                        E = p;
                        break
                    }
                if (!o.isEmpty(E)) {
                    v = {};
                    var L = r.value;
                    r.classList.contains("ladi-form-label-container") && (L = o.runtime.tmp.getLabelValue(r)), s.product.variants.forEach(function (t) {
                        if (o.isEmpty(L) || L == t["option" + (E + 1)])
                            for (p = 0; p < P.length; p++) o.isArray(v[P[p]]) || (v[P[p]] = []), p != E && v[P[p]].push(t["option" + (p + 1)])
                    })
                }
            }
            for (var A = v, b = [], w = [], S = null, T = 0; T < g.length; T++) {
                var O = o.runtime.eventData[g[T].id];
                if (!o.isEmpty(O)) {
                    v = o.copy(A);
                    var C = 0,
                        N = 0,
                        I = 0,
                        k = 0,
                        x = null,
                        D = null,
                        R = null,
                        F = null;
                    if (O["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.combobox) {
                        if (S = g[T].querySelectorAll("select[data-product-option-id]"), o.isObject(v)) {
                            for (C = 0; C < S.length; C++)
                                if ((x = S[C].getAttribute("data-product-option-id")) != h)
                                    for (o.isArray(v[x]) && -1 != v[x].indexOf(S[C].value) || (S[C].value = ""), D = S[C].getElementsByTagName("option"), N = 0; N < D.length; N++) o.isEmpty(D[N].getAttribute("value")) || D[N].removeAttribute("disabled");
                            for (C = 0; C < S.length; C++) {
                                for (x = S[C].getAttribute("data-product-option-id"), v = {}, I = 0; I < s.product.variants.length; I++)
                                    if (F = s.product.variants[I], P = F.option_ids.split("/"), -1 != (E = P.indexOf(x)) && (o.isEmpty(S[C].value) || S[C].value == F["option" + (E + 1)]))
                                        for (p = 0; p < P.length; p++) o.isArray(v[P[p]]) || (v[P[p]] = []), p != E && v[P[p]].push(F["option" + (p + 1)]);
                                for (k = 0; k < S.length; k++)
                                    if ((R = S[k].getAttribute("data-product-option-id")) != x)
                                        for (D = S[k].getElementsByTagName("option"), N = 0; N < D.length; N++) o.isEmpty(D[N].getAttribute("value")) || o.isArray(v[R]) && -1 != v[R].indexOf(D[N].getAttribute("value")) || D[N].setAttribute("disabled", "")
                            }
                        }
                        if (!o.isObject(v))
                            for (C = 0; C < S.length; C++) b.push(S[C])
                    }
                    if (O["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.label) {
                        if (S = g[T].querySelectorAll(".ladi-form-label-container[data-product-option-id]"), o.isObject(v)) {
                            for (C = 0; C < S.length; C++)
                                if ((x = S[C].getAttribute("data-product-option-id")) != h) {
                                    var q = o.runtime.tmp.getLabelValue(S[C]);
                                    for (o.isArray(v[x]) && -1 != v[x].indexOf(q) || o.runtime.tmp.updateLabelValue(S[C], null), D = S[C].getElementsByClassName("ladi-form-label-item"), N = 0; N < D.length; N++) D[N].classList.contains("no-value") || D[N].classList.remove("disabled")
                                }
                            for (C = 0; C < S.length; C++) {
                                for (x = S[C].getAttribute("data-product-option-id"), v = {}, I = 0; I < s.product.variants.length; I++)
                                    if (F = s.product.variants[I], P = F.option_ids.split("/"), -1 != (E = P.indexOf(x))) {
                                        var B = o.runtime.tmp.getLabelValue(S[C]);
                                        if (o.isEmpty(B) || B == F["option" + (E + 1)])
                                            for (p = 0; p < P.length; p++) o.isArray(v[P[p]]) || (v[P[p]] = []), p != E && v[P[p]].push(F["option" + (p + 1)])
                                    }
                                for (k = 0; k < S.length; k++)
                                    if ((R = S[k].getAttribute("data-product-option-id")) != x)
                                        for (D = S[k].getElementsByClassName("ladi-form-label-item"), N = 0; N < D.length; N++)
                                            if (!D[N].classList.contains("no-value")) {
                                                var M = o.runtime.tmp.getOptionLabelValue(D[N]);
                                                o.isArray(v[R]) && -1 != v[R].indexOf(M) || D[N].classList.add("disabled")
                                            }
                            }
                        }
                        if (!o.isObject(v))
                            for (C = 0; C < S.length; C++) w.push(S[C])
                    }
                }
            }!o.isEmpty(l) && o.isFunction(n) && n();
            for (var Y = null; b.length > 0;) Y = b.shift(), o.fireEvent(Y, "change");
            for (; w.length > 0;) Y = w.shift(), o.runtime.tmp.fireEventLabelChange(Y);
            for (S = document.querySelectorAll(".ladi-form .ladi-form-label-container"), T = 0; T < S.length; T++) {
                var V = o.runtime.tmp.getLabelValue(S[T]);
                if (!o.isEmpty(V)) o.findAncestor(S[T], "ladi-element")
                    .getAttribute("data-title-type") == o.const.PRODUCT_VARIANT_TITLE.top && (V = ": " + V);
                var H = o.findAncestor(S[T], "ladi-form-item-box");
                o.isEmpty(H) || (H = H.querySelector(".ladi-form-item-title-value"), o.isEmpty(H) || (H.innerHTML = V))
            }
        }
    }
}, LadiPageScriptV2.prototype.updateProductVariantSelectOptionFirst = function (t, e, i) {
    var a = this,
        n = a.generateVariantProduct(t, !1, null, null, null, null, !0, !0, function () {
            a.updateProductVariantSelectOptionFirst(t, e, i)
        });
    if (a.isObject(n) && a.isObject(n.product)) {
        var o = i.querySelectorAll("select.ladi-form-control"),
            r = i.querySelectorAll(".ladi-form-label-container"),
            s = 0;
        if (a.isArray(n.product.variants) && 0 != n.product.variants.length) {
            var l = null,
                d = null;
            if (a.isEmpty(t["option.product_variant_id"]) || (l = n.product.variants.find(function (e) {
                    return e.product_variant_id == t["option.product_variant_id"]
                })), a.isEmpty(l) && (l = n.product.variants[0]), e["option.product_variant_type"] == a.const.PRODUCT_VARIANT_TYPE.combined)
                for (s = 0; s < o.length; s++) d = o[s].querySelector('option[data-product-variant-id="' + l.product_variant_id + '"]'), a.isEmpty(d) || (o[s].value = d.getAttribute("value"), a.fireEvent(o[s], "change"));
            e["option.product_variant_type"] == a.const.PRODUCT_VARIANT_TYPE.combobox && a.isString(l.option_ids) && l.option_ids.split("/")
                .forEach(function (t, e) {
                    for (s = 0; s < o.length; s++) o[s].getAttribute("data-product-option-id") == t && (o[s].value = l["option" + (e + 1)] || "", a.fireEvent(o[s], "change"))
                }), e["option.product_variant_type"] == a.const.PRODUCT_VARIANT_TYPE.label && a.isString(l.option_ids) && l.option_ids.split("/")
                .forEach(function (t, e) {
                    for (s = 0; s < r.length; s++) r[s].getAttribute("data-product-option-id") == t && (a.runtime.tmp.updateLabelValue(r[s], l["option" + (e + 1)] || ""), a.runtime.tmp.fireEventLabelChange(r[s]))
                })
        } else {
            for (s = 0; s < o.length; s++) o[s].value = "", a.fireEvent(o[s], "change");
            for (s = 0; s < r.length; s++) a.runtime.tmp.updateLabelValue(r[s], null), a.runtime.tmp.fireEventLabelChange(r[s])
        }
    }
}, LadiPageScriptV2.prototype.generateHtmlCart = function (t, e, i) {
    var a = this,
        n = [];
    if (i) n = a.runtime.tmp.cart;
    else {
        var o = window.$rootScope.getStoreCurrency();
        n = [{
            name: "Product Name",
            title: "Product Variant",
            price: 9999,
            image: window.$rootScope.logoUrlColor,
            quantity: 1,
            inventory_checked: 0,
            available_quantity: 999,
            currency: {
                code: o,
                symbol: a.formatCurrency(null, o, !1, !0)
            }
        }]
    }
    var r = "";
    if (r += "<tbody>", 0 == n.length) r += '<tr><td class="ladi-cart-no-product">' + e + "</td></tr>";
    else {
        n.forEach(function (e, n) {
            if (!(e.quantity <= 0)) {
                var o = {
                    product_variant_id: e.product_variant_id,
                    cart_item_key: e.cart_item_key
                };
                o = JSON.stringify(o), o = encodeURIComponent(o);
                var s = a.getOptimizeImage(e.image, 60, 60, !0, !1, !0, i);
                r += '<tr class="ladi-cart-row' + (a.isObject(e.promotion) ? " has-promotion" : "") + '"><td class="ladi-cart-image"><img src="' + s + '" />', t == a.const.CART_LAYOUT.viewonly && (r += '<span class="ladi-cart-image-quantity">' + e.quantity + "</span>"), r += "</td>", r += '<td class="ladi-cart-title"><span class="ladi-cart-title-name">' + e.name + '</span><span class="ladi-cart-title-variant">' + (e.title || "") + "</span>", a.isObject(e.promotion) && (r += '<span class="promotion-name">' + e.promotion.discount.note + "</span>"), r += "</td>", t == a.const.CART_LAYOUT.editable && (r += '<td class="ladi-cart-quantity"><div class="ladi-cart-quantity-content"><div onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, -1);" class="button"><span>-</span></div><input type="number" min="1" value="' + e.quantity + '" oninput="javascript: LadiPageScript.changeAddToCartProductQuantity(this, \'' + o + '\', true);" /><div onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, 1);" class="button"><span>+</span></div></div></td>'), r += '<td class="ladi-cart-price"><span' + (a.isNull(e.store_id) ? "" : ' data-store-id="' + e.store_id + '"') + ' data-product-id="' + e.product_id + '" data-product-variant-id="' + e.product_variant_id + '" data-cart-item-key="' + e.cart_item_key + '">';
                var l = e.price * e.quantity,
                    d = a.formatNumber(l, 3);
                a.isObject(e.currency) && !a.isEmpty(e.currency.symbol) && (d = a.formatCurrency(l, e.currency.symbol, !0)), r += d + "</span>", a.isObject(e.promotion) && (l = e.promotion.total, d = a.formatNumber(l, 3), a.isObject(e.currency) && !a.isEmpty(e.currency.symbol) && (d = a.formatCurrency(l, e.currency.symbol, !0)), r += '<span class="price-compare">' + d + "</span>"), r += "</td>", t == a.const.CART_LAYOUT.editable && (r += '<td class="ladi-cart-action"><div onclick="javascript: LadiPageScript.removeAddToCartProduct(\'' + o + '\', true);" class="button"><span>X</span></div></td>', r += "</tr>")
            }
        })
    }
    return r += "</tbody>"
}, LadiPageScriptV2.prototype.getProductVariantId = function (t, e) {
    var i = null,
        a = this.findAncestor(t, "ladi-element"),
        n = this;
    if (!this.isEmpty(a)) {
        var o = this.runtime.eventData[a.id];
        if (!this.isEmpty(o) && o["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.combined) {
            var r = a.querySelector("select.ladi-form-control");
            if (!this.isEmpty(r) && !this.isEmpty(r.value)) {
                var s = r.querySelector('option[value="' + r.value + '"]');
                this.isEmpty(s) || (i = s.getAttribute("data-product-variant-id"))
            }
        }
        var l = null,
            d = null;
        if (!this.isEmpty(o) && (o["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.combobox || o["option.product_variant_type"] == this.const.PRODUCT_VARIANT_TYPE.label)) {
            d = {}, l = a.querySelectorAll(".ladi-form-item select[data-product-option-id]");
            for (var c = 0; c < l.length; c++) d[l[c].getAttribute("data-product-option-id")] = (n.isEmpty(l[c].value) ? "" : l[c].value)
                .trim();
            for (l = a.querySelectorAll(".ladi-form-label-container[data-product-option-id]"), c = 0; c < l.length; c++) d[l[c].getAttribute("data-product-option-id")] = n.runtime.tmp.getLabelValue(l[c])
                .trim();
            this.isArray(e.variants) && e.variants.forEach(function (t) {
                if (n.isEmpty(i)) {
                    var e = !0;
                    if (n.isString(t.option_ids))
                        for (var a = t.option_ids.split("/"), o = 0; o < a.length; o++)
                            if (d[a[o].trim()] != (t["option" + (o + 1)] || "")
                                .trim()) {
                                e = !1;
                                break
                            }
                    e && (i = t.product_variant_id)
                }
            })
        }
    }
    return i
}, LadiPageScriptV2.prototype.getProductVariantIndex = function (t, e) {
    var i = this,
        a = -1,
        n = e["option.product_type"],
        o = e["option.ladisale_store_id"] || null,
        r = e["option.product_id"],
        s = i.generateVariantProduct(e, !1, null, null, null, null, !0, !0);
    if (!i.isObject(s) || !i.isObject(s.store_info) || !i.isObject(s.product) || !i.isArray(s.product.variants) || s.product.variants.length <= 0) return a;
    this.runtime.isClient ? Object.keys(this.runtime.eventData)
        .forEach(function (e) {
            if ((i.isEmpty(t) || t == e) && -1 == a) {
                var l = i.runtime.eventData[e];
                if ("form" == l.type && l["option.is_add_to_cart"] && l["option.product_type"] == n && l["option.product_id"] == r && l["option.ladisale_store_id"] == o) {
                    var d = document.getElementById(e);
                    if (!i.isEmpty(d)) {
                        var c = d.querySelector('[data-variant="true"]');
                        if (!i.isEmpty(c)) {
                            var p = i.runtime.eventData[c.id];
                            if (!i.isEmpty(p)) {
                                var u = null;
                                if (p["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combobox && (u = c.querySelectorAll(".ladi-form-item select[data-product-option-id]"), a = s.product.variants.findIndex(function (t) {
                                        for (var e = !0, a = null, n = function (t) {
                                                return t == a
                                            }, o = 0; o < u.length; o++)
                                            if (u[o].getAttribute("data-store-id") == s.store_info.id && u[o].getAttribute("data-product-id") == t.product_id) {
                                                a = u[o].getAttribute("data-product-option-id");
                                                var r = u[o].value;
                                                if (i.isString(t.option_ids)) {
                                                    var l = t.option_ids.split("/")
                                                        .findIndex(n);
                                                    if (-1 != l && t["option" + (l + 1)] != r) {
                                                        e = !1;
                                                        break
                                                    }
                                                }
                                            }
                                        return e
                                    })), p["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.label && (u = c.querySelectorAll(".ladi-form-label-container[data-product-option-id]"), a = s.product.variants.findIndex(function (t) {
                                        for (var e = !0, a = null, n = function (t) {
                                                return t == a
                                            }, o = 0; o < u.length; o++)
                                            if (u[o].getAttribute("data-store-id") == s.store_info.id && u[o].getAttribute("data-product-id") == t.product_id) {
                                                a = u[o].getAttribute("data-product-option-id");
                                                var r = i.runtime.tmp.getLabelValue(u[o]);
                                                if (i.isString(t.option_ids)) {
                                                    var l = t.option_ids.split("/")
                                                        .findIndex(n);
                                                    if (-1 != l && t["option" + (l + 1)] != r) {
                                                        e = !1;
                                                        break
                                                    }
                                                }
                                            }
                                        return e
                                    })), p["option.product_variant_type"] == i.const.PRODUCT_VARIANT_TYPE.combined) {
                                    var m = c.querySelector(".ladi-form-control");
                                    if (i.isEmpty(m) || m.getAttribute("data-store-id") != s.store_info.id || m.getAttribute("data-product-id") != s.product.product_id) return;
                                    a = m.value, a = i.isEmpty(a) ? -1 : parseInt(a)
                                }
                            }
                        }
                    }
                }
            }
        }) : a = 0;
    return a
}, LadiPageScriptV2.prototype.generateProductKey = function (t, e, i, a, n, o, r, s) {
    var l = this;
    l.isEmpty(r) || (a["option.product_id"] = r.product_id);
    var d = a["option.product_type"],
        c = a["option.product_mapping_name"],
        p = l.generateVariantProduct(a, !1, null, null, null, null, !0, !0, function (i) {
            l.generateProductKey(t, e, !1, a, n, o, r, s)
        }),
        u = null;

    function m(t) {
        return (t >= 10 ? "" : "0") + t
    }
    if (l.isObject(p) && l.isObject(p.product)) {
        var _ = null,
            y = null;
        p.product.type == l.const.PRODUCT_TYPE.event && "description" == c && (c = "content");
        var g = function () {
            if (-1 != [l.const.FORM_CONFIG_TYPE.ladisales, l.const.FORM_CONFIG_TYPE.sapo, l.const.FORM_CONFIG_TYPE.haravan, l.const.FORM_CONFIG_TYPE.shopify, l.const.FORM_CONFIG_TYPE.wordpress].indexOf(d)) {
                if (-1 != ["name", "description", "content", "location", "timezone", "external_link"].indexOf(c) && (_ = p.product[c], e = _), -1 != ["start_date", "end_date"].indexOf(c)) {
                    _ = p.product[c];
                    try {
                        (y = new Date(_))
                        .toISOString() == _ && (_ = y.getFullYear() + "-" + m(y.getMonth() + 1) + "-" + m(y.getDate()) + " " + m(y.getHours()) + ":" + m(y.getMinutes()) + ":" + m(y.getSeconds()))
                    } catch (t) {}
                    e = _
                }
                if (-1 != ["image"].indexOf(c) && (_ = p.product[c], l.isObject(_) && (e = _.src, l.isEmpty(e) || !l.isString(e) || e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || (e = "https://" + l.const.STATIC_W_DOMAIN + "/" + e))), -1 != ["images"].indexOf(c) && (_ = p.product[c], l.isArray(_) && (e = [], _.forEach(function (t) {
                        l.isEmpty(t.src) || (!l.isString(t.src) || t.src.startsWith("http://") || t.src.startsWith("https://") || t.src.startsWith("//") ? e.push({
                            src: t.src
                        }) : e.push({
                            src: "https://" + l.const.STATIC_W_DOMAIN + "/" + t.src
                        }))
                    }))), l.isArray(p.product.variants) && p.product.variants.length > 0) {
                    var t = n ? 0 : l.getProductVariantIndex(null, a);
                    if (l.isEmpty(o) || (t = p.product.variants.findIndex(function (t) {
                            return t.product_variant_id == o
                        })), -1 != t) {
                        var r = p.product.variants[t];
                        if (u = r, -1 != ["variant_start_date", "variant_end_date"].indexOf(c)) {
                            _ = r[c];
                            try {
                                (y = new Date(_))
                                .toISOString() == _ && (_ = y.getFullYear() + "-" + m(y.getMonth() + 1) + "-" + m(y.getDate()) + " " + m(y.getHours()) + ":" + m(y.getMinutes()) + ":" + m(y.getSeconds()))
                            } catch (t) {}
                            e = _
                        } else if (-1 != ["sku", "variant_timezone"].indexOf(c)) _ = r[c], e = _;
                        else if (-1 != ["title"].indexOf(c)) _ = r[c] || r.product_name, e = _;
                        else if (-1 != ["text_quantity"].indexOf(c)) _ = 1 == r.inventory_checked ? r[c] : "", e = _;
                        else if (-1 != ["weight"].indexOf(c)) _ = r[c], l.isEmpty(r.weight_unit) || (_ += r.weight_unit), e = _;
                        else if (-1 != ["price", "compare_price"].indexOf(c)) l.isEmpty(r[c]) ? _ = "" : (_ = l.formatNumber(r[c], 3), l.isObject(p.store_info) && l.isObject(p.store_info.currency) && !l.isEmpty(p.store_info.currency.symbol) && (_ = l.formatCurrency(r[c], p.store_info.currency.symbol, !0))), e = _;
                        else if (-1 != ["price_sale"].indexOf(c)) {
                            var f = 0;
                            l.isEmpty(r.price) || l.isEmpty(r.compare_price) || (f = r.compare_price - r.price), 0 != f ? (_ = l.formatNumber(f, 3), l.isObject(p.store_info) && l.isObject(p.store_info.currency) && !l.isEmpty(p.store_info.currency.symbol) && (_ = l.formatCurrency(f, p.store_info.currency.symbol, !0))) : _ = "", e = _
                        } else if (-1 != ["price_sale_percent"].indexOf(c)) {
                            var h = 0;
                            l.isEmpty(r.price) || l.isEmpty(r.compare_price) || (h = Math.floor((r.compare_price - r.price) / r.compare_price * 100)), e = _ = 0 != h ? h + "%" : ""
                        } else if (-1 != ["src"].indexOf(c)) {
                            if (_ = r[c], l.isEmpty(_)) return c = "image", g();
                            !l.isString(_) || _.startsWith("http://") || _.startsWith("https://") || _.startsWith("//") || (_ = "https://" + l.const.STATIC_W_DOMAIN + "/" + _), e = _
                        } else ["description"].indexOf(c), _ = r[c], l.isEmpty(_) || (e = _)
                    } else e = _ = ""
                }
            } else {
                if (_ = p.product[c], l.isBoolean(_)) _ = _ ? l.const.LANG.OPTION_TRUE : l.const.LANG.OPTION_FALSE;
                else try {
                    (y = new Date(_))
                    .toISOString() == _ && (_ = y.getFullYear() + "-" + m(y.getMonth() + 1) + "-" + m(y.getDate()) + " " + m(y.getHours()) + ":" + m(y.getMinutes()) + ":" + m(y.getSeconds()))
                } catch (t) {}
                e = _
            }!i && l.isFunction(s) && s(e)
        };
        g()
    }
    return t ? {
        product: p,
        variant: u,
        value: e
    } : e
}, LadiPageScriptV2.prototype.generateVariantProduct = function (t, e, i, a, n, o, r, s, l) {
    var d = e ? "" : null,
        c = this,
        p = function (t) {
            if (!e) return c.isObject(t) ? t : null;
            var s = "";
            if (c.isObject(t)) {
                if (!c.isObject(t.product)) return s;
                i == c.const.PRODUCT_VARIANT_TYPE.combined && (s += '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select' + (c.isObject(t.store_info) && !c.isNull(t.store_info.id) ? ' data-store-id="' + t.store_info.id + '"' : "") + ' data-product-id="' + t.product.product_id + '" required tabindex="' + o + '" class="ladi-form-control ladi-form-control-select" data-selected=""' + (r ? "" : ' onmousedown="javascript: event.preventDefault();"') + ">", c.runtime.isClient && (s += '<option value="" data-product-variant-id="">' + c.const.LANG.OPTION_NO_SELECT + "</option>"), c.isArray(t.product.variants) && t.product.variants.forEach(function (e, i) {
                    var a = e.title || e.product_name;
                    if (n) {
                        var o = c.formatNumber(e.price, 3);
                        c.isObject(t.store_info) && c.isObject(t.store_info.currency) && !c.isEmpty(t.store_info.currency.symbol) && (o = c.formatCurrency(e.price, t.store_info.currency.symbol, !0)), a += " - " + o
                    }
                    s += '<option value="' + i + '" data-product-variant-id="' + e.product_variant_id + '">' + a + "</option>"
                }), s += "</select></div></div>"), i == c.const.PRODUCT_VARIANT_TYPE.combobox && c.isArray(t.product.options) && t.product.options.forEach(function (e) {
                    if (e.is_tmp) s += '<div class="ladi-form-item-box"></div>';
                    else if (c.isArray(e.values) && 0 != e.values.length) {
                        s += '<div class="ladi-form-item-box">', c.isEmpty(a) || (s += '<div class="ladi-form-item-title"><span>' + e.name + "</span></div>"), s += '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select' + (c.isObject(t.store_info) && !c.isNull(t.store_info.id) ? ' data-store-id="' + t.store_info.id + '"' : "") + ' data-product-id="' + e.product_id + '" data-product-option-id="' + e.product_option_id + '" required tabindex="' + o + '" class="ladi-form-control ladi-form-control-select" data-selected=""' + (r ? "" : ' onmousedown="javascript: event.preventDefault();"') + ">", c.runtime.isClient && (s += '<option value="">' + c.const.LANG.OPTION_NO_SELECT + "</option>");
                        var i = null;
                        c.isArray(t.product.variants) && (i = t.product.variants[0]);
                        var n = null;
                        c.isEmpty(i) || c.isString(i.option_ids) && (n = i.option_ids.split("/"));
                        e.values.forEach(function (t) {
                            var a = function (t) {
                                var a = "";
                                return c.isArray(n) && n.forEach(function (n, o) {
                                    e.product_option_id == n && t == i["option" + (o + 1)] && (a = " selected")
                                }), a
                            }(t.name);
                            s += "<option" + a + ' value="' + t.name + '">' + (t.name_new || t.name) + "</option>"
                        }), s += "</select></div></div></div>"
                    }
                }), i == c.const.PRODUCT_VARIANT_TYPE.label && c.isArray(t.product.options) && t.product.options.forEach(function (e) {
                    if (c.isArray(e.values) && 0 != e.values.length) {
                        s += '<div class="ladi-form-item-box">', c.isEmpty(a) || (s += '<div class="ladi-form-item-title">', s += "<span>" + e.name + "</span>", s += '<span class="ladi-form-item-title-value">' + (r ? "" : e.values[0].name) + "</span>", s += "</div>"), s += '<div class="ladi-form-label-container"' + (c.isObject(t.store_info) && !c.isNull(t.store_info.id) ? ' data-store-id="' + t.store_info.id + '"' : "") + ' data-product-id="' + e.product_id + '" data-product-option-id="' + e.product_option_id + '" data-selected="">';
                        var i = null;
                        c.isArray(t.product.variants) && (i = t.product.variants[0]);
                        var n = null;
                        c.isEmpty(i) || c.isString(i.option_ids) && (n = i.option_ids.split("/"));
                        e.values.forEach(function (t, a) {
                            0 == a && (t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.image ? s += '<div class="ladi-form-label-item image no-value" data-value=""></div>' : t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.color ? s += '<div class="ladi-form-label-item color no-value" data-value=""></div>' : s += '<div class="ladi-form-label-item text no-value" data-value="">&nbsp;</div>');
                            var o = function (t) {
                                var a = "";
                                return c.isArray(n) && n.forEach(function (n, o) {
                                    e.product_option_id == n && t == i["option" + (o + 1)] && (a = " selected")
                                }), a
                            }(t.name);
                            if (t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.image) {
                                var r = t.value;
                                c.isEmpty(r) || !c.isString(r) || r.startsWith("http://") || r.startsWith("https://") || r.startsWith("//") || (r = "https://" + c.const.STATIC_W_DOMAIN + "/" + r), r = c.getOptimizeImage(r, 100, 100, !1, !1, !1, !0), s += '<div class="ladi-form-label-item image' + o + '" style=\'background-image: url("' + r + '");\' title="' + (t.name_new || t.name) + '" data-value="' + t.name + '"></div>'
                            } else t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.color ? s += '<div class="ladi-form-label-item color' + o + "\" style='background-color: " + t.value + ";' title=\"" + (t.name_new || t.name) + '" data-value="' + t.name + '"></div>' : s += '<div class="ladi-form-label-item text' + o + '" data-value="' + t.name + '">' + (t.name_new || t.name) + "</div>"
                        }), s += "</div></div>"
                    }
                })
            }
            return s
        };
    if (!c.isNull(t.dataProduct)) return p(t.dataProduct);
    var u = t["option.form_account_id"],
        m = t["option.product_type"],
        _ = t["option.ladisale_store_id"] || null,
        y = t["option.product_id"],
        g = t["option.data_setting.value"],
        f = t["option.data_setting.type_dataset"],
        h = t["option.data_setting.sort_name"],
        v = t["option.data_setting.sort_by"],
        E = null,
        P = null;
    if (-1 != [c.const.FORM_CONFIG_TYPE.ladisales, c.const.FORM_CONFIG_TYPE.sapo, c.const.FORM_CONFIG_TYPE.haravan, c.const.FORM_CONFIG_TYPE.shopify, c.const.FORM_CONFIG_TYPE.wordpress].indexOf(m)) {
        if (!c.isEmpty(y)) {
            if (c.isEmpty(c.runtime.tmp.product_info[m]) && (c.runtime.tmp.product_info[m] = {}), c.isEmpty(c.runtime.tmp.timeout_product_info[m]) && (c.runtime.tmp.timeout_product_info[m] = {}), y = parseInt(y) || y, E = c.runtime.tmp.product_info[m][y], P = function () {
                    return p(E)
                }, c.isNull(E)) {
                c.runtime.tmp.product_info[m][y] = !0;
                var L = function () {
                        c.runtime.tmp.product_info[m][y] = !1, c.isEmpty(c.runtime.tmp.timeout_product_info[m][y]) || (c.removeTimeout(c.runtime.tmp.timeout_product_info[m][y]), delete c.runtime.tmp.timeout_product_info[m][y])
                    },
                    A = function (t) {
                        if (E = c.isObject(c.runtime.tmp.product_info[m][y]) ? c.runtime.tmp.product_info[m][y] : t.data, c.isObject(E)) {
                            if (!c.isObject(E.store_info)) {
                                var e = c.runtime.currency;
                                c.runtime.isClient || (e = window.$rootScope.getStoreCurrency()), E.store_info = {
                                    currency: {
                                        code: e,
                                        symbol: c.formatCurrency(null, e, !1, !0)
                                    }
                                }
                            }
                            if (m != c.const.FORM_CONFIG_TYPE.ladisales && (E.store_info.id = -1), c.isObject(E.product) && c.isArray(E.product.options) && c.isArray(E.product.variants)) {
                                var i = E.product.options.map(function (t) {
                                    return t.product_option_id
                                });
                                i = i.join("/");
                                for (var a = 0; a < E.product.variants.length; a++) - 1 != [c.const.FORM_CONFIG_TYPE.ladisales].indexOf(m) && 1 == E.product.variants[a].allow_sold_out && (E.product.variants[a].inventory_checked = 0), c.isNull(E.product.variants[a].compare_price) && (E.product.variants[a].compare_price = E.product.variants[a].price_compare), c.isNull(E.product.variants[a].variant_start_date) && (E.product.variants[a].variant_start_date = E.product.variants[a].start_date), c.isNull(E.product.variants[a].variant_end_date) && (E.product.variants[a].variant_end_date = E.product.variants[a].end_date), c.isNull(E.product.variants[a].variant_timezone) && (E.product.variants[a].variant_timezone = E.product.variants[a].timezone), c.isEmpty(E.product.variants[a].option_ids) && (E.product.variants[a].option_ids = i), -1 != [c.const.FORM_CONFIG_TYPE.sapo, c.const.FORM_CONFIG_TYPE.haravan, c.const.FORM_CONFIG_TYPE.shopify].indexOf(m) && 1 == E.product.variants.length && "Default Title" == E.product.variants[a].title && (E.product.variants[a].title = null, E.product.variants[a].option1 = null, E.product.options = []), -1 != [c.const.FORM_CONFIG_TYPE.wordpress].indexOf(m) && 1 == E.product.variants.length && E.product.variants[a].title == E.product.variants[a].product_name && (E.product.variants[a].title = null, E.product.variants[a].option1 = null, E.product.options = []), c.isEmpty(E.product.variants[a].package_quantity) || c.isEmpty(E.product.variants[a].package_quantity_unit) || (c.isNull(E.product.variants[a].title_old) && (E.product.variants[a].title_old = E.product.variants[a].title), E.product.variants[a].title = E.product.variants[a].title_old + " (" + E.product.variants[a].package_quantity + " " + E.product.variants[a].package_quantity_unit + ")");
                                if (c.isArray(E.product.options) && 1 == E.product.options.length && c.isArray(E.product.options[0].values))
                                    for (var n = null, o = function (t) {
                                            return t.option1 == n
                                        }, r = 0; r < E.product.options[0].values.length; r++) {
                                        n = E.product.options[0].values[r].name;
                                        var s = E.product.variants.find(o);
                                        E.product.options[0].values[r].name_new = E.product.options[0].values[r].label || E.product.options[0].values[r].name, c.isEmpty(s) || c.isEmpty(s.package_quantity) || c.isEmpty(s.package_quantity_unit) || (E.product.options[0].values[r].name_new = E.product.options[0].values[r].name_new + " (" + s.package_quantity + " " + s.package_quantity_unit + ")")
                                    }
                            }
                            c.runtime.tmp.product_info[m][y] = E, d = P(), c.isFunction(l) && l(d)
                        } else L()
                    },
                    b = {
                        product_id: y
                    },
                    w = null,
                    S = "POST";
                return c.runLimitRequest(20, function () {
                    if (c.runtime.isClient) {
                        var t = c.const.API_LADISALE_SHOW_PRODUCT;
                        m == c.const.FORM_CONFIG_TYPE.ladisales ? ((w = {
                            "Content-Type": "application/json"
                        })["Store-Id"] = _, b = JSON.stringify(b)) : m == c.const.FORM_CONFIG_TYPE.wordpress ? (S = "GET", t = window.location.origin + "/ladipage/api?action=product_info&product_id=" + y, b = null) : (w = {
                            "Content-Type": "application/json"
                        }, t = c.const.API_SHOW_PRODUCT, b = {
                            form_account_id: u,
                            product_id: y
                        }, b = JSON.stringify(b)), c.sendRequest(S, t, b, !0, w, function (t, e, i) {
                            if (i.readyState == XMLHttpRequest.DONE) try {
                                var a = JSON.parse(t);
                                A(a)
                            } catch (t) {
                                L()
                            }
                        })
                    } else {
                        var e = function (t) {
                                c.isNull(t) || A({
                                    data: t
                                })
                            },
                            i = LadiPage.getProductInfo(u, y, function (t) {
                                e(t)
                            });
                        e(i)
                    }
                }), d
            }!0 === E ? c.runtime.tmp.timeout_product_info[m][y] = c.runTimeout(function () {
                c.generateVariantProduct(t, e, i, a, n, o, r, !1, l)
            }, 100) : (d = P(), !s && c.isFunction(l) && l(d))
        }
    } else if (!c.isEmpty(y)) {
        if (c.isEmpty(c.runtime.tmp.product_info[m]) && (c.runtime.tmp.product_info[m] = {}), c.isEmpty(c.runtime.tmp.timeout_product_info[m]) && (c.runtime.tmp.timeout_product_info[m] = {}), y += "", E = c.runtime.tmp.product_info[m][y], P = function () {
                return e ? "" : c.isObject(E) ? E : null
            }, c.isNull(E)) return c.runtime.tmp.product_info[m][y] = !0, c.loadDataset(g, g, f, h, v, !0, c.runtime.isClient, function (t) {
            d = P(), c.isFunction(l) && l(d)
        }), d;
        !0 === E ? c.runtime.tmp.timeout_product_info[m][y] = c.runTimeout(function () {
            c.generateVariantProduct(t, e, i, a, n, o, r, !1, l)
        }, 100) : (d = P(), !s && c.isFunction(l) && l(d))
    }
    return d
}, LadiPageScriptV2.prototype.generateVariantContentString = function (t, e, i, a) {
    var n = [];
    i = this.isEmpty(i) ? " | " : i;
    try {
        this.isEmpty(t) || (e && (t = Base64.decode(t)), t = JSON.parse(t), this.isArray(t.dynamic_content.hide) && t.dynamic_content.hide.length > 0 && n.push(this.const.LANG.HIDE_ELEMENT + " " + t.dynamic_content.hide.join(", ")), this.isArray(t.dynamic_content.show) && t.dynamic_content.show.length > 0 && n.push(this.const.LANG.SHOW_ELEMENT + " " + t.dynamic_content.show.join(", ")), this.isArray(t.dynamic_content.top) && t.dynamic_content.top.length > 0 && n.push(this.const.LANG.TOP_ELEMENT + " " + t.dynamic_content.top.join(", ")), this.isArray(t.dynamic_content.scroll) && t.dynamic_content.scroll.length > 0 && n.push(this.const.LANG.SCROLL_ELEMENT + " " + t.dynamic_content.scroll.join(", ")), this.isArray(t.dynamic_content.cookie) && t.dynamic_content.cookie.length > 0 && n.push(this.const.LANG.SET_COOKIE + " " + t.dynamic_content.cookie.join("; ")))
    } catch (t) {}
    return a ? n : n.join(i)
}, LadiPageScriptV2.prototype.reloadFeeShipping = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript);
    var i = function (t, i) {
        window.ladi("_ladipage_" + t)
            .set_cookie(i, 365, "/", window.location.host), e.isArray(e.runtime.DOMAIN_SET_COOKIE) && e.runtime.DOMAIN_SET_COOKIE.forEach(function (e) {
                e != window.location.host && window.ladi("_ladipage_" + t)
                    .set_cookie(i, 365, "/", e)
            })
    };
    e.isEmpty(e.runtime.tmp.timeout_reload_fee_shipping) || e.removeTimeout(e.runtime.tmp.timeout_reload_fee_shipping);
    var a = function (t, i) {
        e.runtime.tmp.add_to_cart_fee_shipping = t, e.changeTotalPriceCart(), e.isNull(i) && (e.runtime.tmp.add_to_cart_shipping_method_id = null, i = []);
        for (var a = null, n = e.runtime.tmp.add_to_cart_shipping_method_id, o = function (t) {
                l.setAttribute("data-selected", t.target.value || ""), e.runtime.tmp.add_to_cart_shipping_method_id = e.isEmpty(l.getAttribute("data-selected")) ? null : l.getAttribute("data-selected"), (parseFloatLadiPage(e.runtime.tmp.add_to_cart_shipping_method_id) || 0) == e.runtime.tmp.add_to_cart_shipping_method_id && (e.runtime.tmp.add_to_cart_shipping_method_id = parseFloatLadiPage(e.runtime.tmp.add_to_cart_shipping_method_id) || 0), a = t.target.querySelector('option[value="' + t.target.value + '"]'), e.runtime.tmp.add_to_cart_fee_shipping = e.isEmpty(a) ? 0 : parseFloatLadiPage(a.getAttribute("data-fee")) || 0, e.changeTotalPriceCart()
            }, r = document.querySelectorAll('select[data-combobox-type="' + e.const.COMBOBOX_TYPE.delivery_method + '"]'), s = 0; s < r.length; s++) {
            var l = r[s],
                d = l.getElementsByTagName("option");
            for ("true" != l.getAttribute("data-event") && (l.setAttribute("data-event", !0), l.addEventListener("change", o)), e.isNull(l.getAttribute("data-placeholder")) && l.setAttribute("data-placeholder", d[0].innerHTML); d.length > 0;) d[0].parentElement.removeChild(d[0]);
            i.length <= 0 && ((a = document.createElement("option"))
                .innerHTML = l.getAttribute("data-placeholder"), l.appendChild(a));
            for (var c = 0; c < i.length; c++) {
                a = document.createElement("option");
                var p = e.formatNumber(i[c].fee, 3);
                if (e.runtime.tmp.cart.length > 0 && !e.isEmpty(e.runtime.tmp.cart[0].currency) && !e.isEmpty(e.runtime.tmp.cart[0].currency.symbol)) {
                    var u = e.runtime.tmp.cart[0].currency.symbol;
                    p = e.formatCurrency(i[c].fee, u, !0)
                }
                a.innerHTML = i[c].name + " - " + p, a.setAttribute("data-fee", i[c].fee), a.setAttribute("value", i[c].shipping_method_id), n == i[c].shipping_method_id && a.setAttribute("selected", "selected"), l.appendChild(a)
            }
            l.setAttribute("data-selected", n || "")
        }
    };
    e.runtime.tmp.timeout_reload_fee_shipping = e.runTimeout(function () {
        if (0 != e.runtime.tmp.list_form_checkout.length) {
            var n = null;
            if (n = e.isEmpty(t) ? document.getElementById(e.runtime.tmp.list_form_checkout[0]) : e.findAncestor(t.target, "ladi-form"), e.isEmpty(n)) a(0);
            else {
                var o = n.querySelector('.ladi-form-item select[name="state"]'),
                    r = n.querySelector('.ladi-form-item select[name="district"]'),
                    s = n.querySelector('.ladi-form-item select[name="ward"]');
                if (e.isEmpty(o) || e.isEmpty(r) || e.isEmpty(s)) a(0);
                else {
                    var l = o.value,
                        d = r.value,
                        c = s.value;
                    if (e.isEmpty(l) || e.isEmpty(d)) return void a(0);
                    var p = {
                        state_id: l.split(":")[0],
                        district_id: d.split(":")[0],
                        ward_id: c.split(":")[0]
                    };
                    p.state_id = parseInt(p.state_id) || p.state_id, p.district_id = parseInt(p.district_id) || p.district_id, p.ward_id = parseInt(p.ward_id) || p.ward_id;
                    var u = null,
                        m = null,
                        _ = null;
                    if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.sapo) return m = function (t, n) {
                        t = t.querySelector("#checkoutForm"), (u = new FormData)
                            .append("_method", "patch"), u.append("billingProvince", p.state_id), u.append("billingDistrict", p.district_id), u.append("billingWard", p.ward_id), e.sendRequest("POST", window.location.origin + t.getAttribute("action"), u, !0, _, function (t, n, o) {
                                if (o.readyState == XMLHttpRequest.DONE) {
                                    if (200 == n) try {
                                        for (var r = 0, s = [], c = e.createTmpElement("div", t, null, !1)
                                                .querySelectorAll('[for^="shippingMethod-"]'), p = 0; p < c.length; p++) {
                                            var u = "",
                                                m = 0,
                                                _ = "",
                                                y = c[p].querySelector("span.radio__label__primary");
                                            e.isEmpty(y) || (u = y.textContent.trim()), y = c[p].querySelector("span.content-box__emphasis"), e.isEmpty(y) || (m = parseFloatLadiPage(y.textContent.trim()
                                                .replaceAll(".", "")
                                                .replaceAll(",", ".")) || 0);
                                            var g = e.findAncestor(c[p], "content-box__row");
                                            e.isEmpty(g) || (g = g.querySelector('input[name="shippingMethod"]'), e.isEmpty(g) || (_ = g.value)), e.isEmpty(u) || e.isEmpty(_) || s.push({
                                                name: u,
                                                fee: m,
                                                shipping_method_id: _
                                            })
                                        }
                                        return -1 == s.findIndex(function (t) {
                                            return t.shipping_method_id == e.runtime.tmp.add_to_cart_shipping_method_id
                                        }) && (e.runtime.tmp.add_to_cart_shipping_method_id = null), s.forEach(function (t) {
                                            e.isEmpty(e.runtime.tmp.add_to_cart_shipping_method_id) && (e.runtime.tmp.add_to_cart_shipping_method_id = t.shipping_method_id), e.runtime.tmp.add_to_cart_shipping_method_id == t.shipping_method_id && (r = t.fee || 0)
                                        }), i("state", l), i("district", d), void a(r, s)
                                    } catch (t) {}
                                    a(0)
                                }
                            })
                    }, void e.getCheckoutSapo(null, m, a);
                    if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.haravan) return m = function (t) {
                        _ = {
                            "X-Requested-With": "XMLHttpRequest"
                        };
                        var n = e.createTmpElement("a", "", {
                            href: t
                        });
                        n.search = n.search + (e.isEmpty(n.search) ? "?" : "&") + "customer_shipping_province=" + p.state_id + "&customer_shipping_district=" + p.district_id + "&form_name=form_update_location", t = n.href, e.sendRequest("GET", t, null, !0, _, function (t, n, o) {
                            if (o.readyState == XMLHttpRequest.DONE) {
                                if (200 == n) try {
                                    for (var r = 0, s = [], c = e.createTmpElement("div", t, null, !1)
                                            .querySelectorAll('[for^="shipping_rate_id_"]'), p = 0; p < c.length; p++) {
                                        var u = "",
                                            m = 0,
                                            _ = "",
                                            y = c[p].querySelector("span.radio-label-primary");
                                        e.isEmpty(y) || (u = y.textContent.trim()), y = c[p].querySelector("span.content-box-emphasis"), e.isEmpty(y) || (m = parseFloatLadiPage(y.textContent.trim()
                                            .replaceAll(",", "")) || 0);
                                        var g = c[p].querySelector("input");
                                        e.isEmpty(g) || (_ = g.value), e.isEmpty(u) || e.isEmpty(_) || s.push({
                                            name: u,
                                            fee: m,
                                            shipping_method_id: _
                                        })
                                    }
                                    return -1 == s.findIndex(function (t) {
                                        return t.shipping_method_id == e.runtime.tmp.add_to_cart_shipping_method_id
                                    }) && (e.runtime.tmp.add_to_cart_shipping_method_id = null), s.forEach(function (t) {
                                        e.isEmpty(e.runtime.tmp.add_to_cart_shipping_method_id) && (e.runtime.tmp.add_to_cart_shipping_method_id = t.shipping_method_id), e.runtime.tmp.add_to_cart_shipping_method_id == t.shipping_method_id && (r = t.fee || 0)
                                    }), i("state", l), i("district", d), void a(r, s)
                                } catch (t) {}
                                a(0)
                            }
                        })
                    }, void e.getThirdPartyCheckoutUrl(!1, m);
                    if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.shopify) return void a(0);
                    if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.wordpress) return void a(0);
                    var y = window.ladi("_cart_token")
                        .get_cookie(),
                        g = window.ladi("_checkout_token")
                        .get_cookie();
                    if (e.isEmpty(y) || e.isEmpty(g)) return void a(0);
                    _ = {
                        "Content-Type": "application/json",
                        "cart-token": y
                    }, e.sendRequest("POST", e.const.API_LADISALE_GET_SHIPPING.format(g), JSON.stringify(p), !0, _, function (t, i, n) {
                        if (n.readyState == XMLHttpRequest.DONE) {
                            if (200 == i) try {
                                var o = JSON.parse(t);
                                if (200 == o.code) {
                                    var r = 0;
                                    if (e.isArray(o.data.shipping_methods)) - 1 == o.data.shipping_methods.findIndex(function (t) {
                                        return t.shipping_method_id == e.runtime.tmp.add_to_cart_shipping_method_id
                                    }) && (e.runtime.tmp.add_to_cart_shipping_method_id = null), o.data.shipping_methods.forEach(function (t) {
                                        e.isEmpty(e.runtime.tmp.add_to_cart_shipping_method_id) && (e.runtime.tmp.add_to_cart_shipping_method_id = t.shipping_method_id), e.runtime.tmp.add_to_cart_shipping_method_id == t.shipping_method_id && (r = t.fee || 0)
                                    });
                                    return void a(r, o.data.shipping_methods)
                                }
                            } catch (t) {}
                            a(0)
                        }
                    })
                }
            }
        }
    }, 1e3)
}, LadiPageScriptV2.prototype.getThirdPartyCheckoutUrl = function (t, e) {
    var i = this,
        a = window.location.origin + "/checkout",
        n = function (n, o, r) {
            t && (a = i.getLinkUTMRedirect(a, null), a = i.convertDataReplaceStr(a, !0), window.ladi(a)
                .open_url()), i.isFunction(e) && e(a, n, o, r)
        }; - 1 != [i.const.FORM_CONFIG_TYPE.sapo, i.const.FORM_CONFIG_TYPE.haravan, i.const.FORM_CONFIG_TYPE.shopify].indexOf(i.runtime.shopping_product_type) && i.sendRequest("GET", a, null, !0, null, function (t, e, i) {
        i.readyState == XMLHttpRequest.HEADERS_RECEIVED && (a = i.responseURL), i.readyState == XMLHttpRequest.DONE && 200 == e && n(t, e, i)
    }), -1 != [i.const.FORM_CONFIG_TYPE.wordpress].indexOf(i.runtime.shopping_product_type) && n(), -1 != [i.const.FORM_CONFIG_TYPE.ladisales].indexOf(i.runtime.shopping_product_type) && (i.isNull(i.runtime.shopping_config_checkout_id) ? (a = i.runtime.tmp.ladisales_checkout_url, n()) : (t && window.ladi("POPUP_CHECKOUT")
        .show(), i.isFunction(e) && e()))
}, LadiPageScriptV2.prototype.getCheckoutAll = function (t, e, i) {
    var a = this;
    a.getThirdPartyCheckoutUrl(!1, function (t, i, n, o) {
        try {
            var r = a.createTmpElement("div", i, null, !1);
            return void(a.isFunction(e) && e(r, i))
        } catch (t) {}
    })
}, LadiPageScriptV2.prototype.getCheckoutSapo = function (t, e, i) {
    this.getCheckoutAll(t, e, i)
}, LadiPageScriptV2.prototype.getCheckoutHaravan = function (t, e, i) {
    this.getCheckoutAll(t, e, i)
}, LadiPageScriptV2.prototype.getCheckoutWordpress = function (t, e, i) {
    this.getCheckoutAll(t, e, i)
}, LadiPageScriptV2.prototype.getCheckoutShopify = function (t, e, i) {
    return this.getCheckoutAll(t, e, i)
}, LadiPageScriptV2.prototype.reloadCheckoutSapo = function () {
    var t = this;
    t.getCheckoutSapo(null, function (e, i) {
        var a = 0,
            n = (e = e.querySelector("#checkoutForm"))
            .querySelector("#discountCode .discount-code span.ui-tag__label");
        if (!t.isEmpty(n)) {
            var o = e.querySelector("#discountCode .discount-code .col-block");
            t.isEmpty(o) || (a = parseFloatLadiPage(o.textContent.trim()
                .replaceAll(".", "")
                .replaceAll(",", ".")) || 0);
            var r = document.querySelector("#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]");
            if (!t.isEmpty(r)) {
                var s = t.findAncestor(r, "ladi-form")
                    .querySelector('input[name="coupon"]');
                t.isEmpty(s) || (s.value = n.textContent.trim(), t.fireEvent(s, "change"), t.runtime.tmp.current_use_coupon = s.value, t.reloadPriceDiscount({
                    target: r,
                    discount_price: a
                }))
            }
        }
    })
}, LadiPageScriptV2.prototype.reloadCheckoutHaravan = function () {
    var t = this;
    t.getCheckoutHaravan(null, function (e, i) {
        var a = 0,
            n = e.querySelector(".applied-reduction-code-information");
        if (!t.isEmpty(n)) {
            var o = e.querySelector(".total-line-price span[data-checkout-discount-amount-target]");
            t.isEmpty(o) || (a = (parseFloatLadiPage(o.getAttribute("data-checkout-discount-amount-target")) || 0) / 100);
            var r = document.querySelector("#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]");
            if (!t.isEmpty(r)) {
                var s = t.findAncestor(r, "ladi-form")
                    .querySelector('input[name="coupon"]');
                t.isEmpty(s) || (s.value = n.textContent.trim(), t.fireEvent(s, "change"), t.runtime.tmp.current_use_coupon = s.value, t.reloadPriceDiscount({
                    target: r,
                    discount_price: a,
                    docCrawl: e
                }))
            }
        }
    })
}, LadiPageScriptV2.prototype.reloadCheckoutWordpress = function () {
    var t = this;
    this.getCheckoutWordpress(null, function (e, i) {
        var a = 0,
            n = e.querySelector("#order_review .cart-discount");
        if (!t.isEmpty(n)) {
            var o = n.querySelector("a[data-coupon]");
            if (!t.isEmpty(o)) {
                var r = n.querySelector(".woocommerce-Price-amount");
                t.isEmpty(r) || (a = parseFloatLadiPage(r.textContent.trim()
                    .replaceAll(".", "")
                    .replaceAll(",", ".")) || 0);
                var s = document.querySelector("#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]");
                if (!t.isEmpty(s)) {
                    var l = t.findAncestor(s, "ladi-form")
                        .querySelector('input[name="coupon"]');
                    t.isEmpty(l) || (l.value = o.getAttribute("data-coupon"), t.fireEvent(l, "change"), t.runtime.tmp.current_use_coupon = l.value, t.reloadPriceDiscount({
                        target: s,
                        discount_price: a,
                        docCrawl: e
                    }))
                }
            }
        }
    })
}, LadiPageScriptV2.prototype.reloadPriceDiscount = function (t) {
    var e = this;
    e instanceof LadiPageScriptV2 || (e = LadiPageScript);
    var i = e.runtime.tmp.current_use_coupon,
        a = function (n, o) {
            e.runtime.tmp.add_to_cart_discount = n, e.runtime.tmp.is_click_check_price_discount = !1, e.changeTotalPriceCart();
            var r = null,
                s = document.getElementsByClassName("ladi-form-remove-coupon")[0];
            e.isEmpty(s) || (r = e.findAncestor(s, "ladi-form"), s.parentElement.removeChild(s));
            var l = document.querySelector('.ladi-form-item input[name="coupon"].pointer-events-none');
            if (e.isEmpty(l) || l.classList.remove("pointer-events-none"), !e.isEmpty(e.runtime.tmp.current_use_coupon)) {
                if (e.isEmpty(r) && !e.isEmpty(t) && (r = e.findAncestor(t.target, "ladi-form")), e.isEmpty(r)) return;
                if (l = r.querySelector('.ladi-form-item input[name="coupon"]'), e.isEmpty(l)) return;
                (s = document.createElement("span"))
                .className = "ladi-form-remove-coupon", s.innerHTML = "⌫", s.addEventListener("click", function (t) {
                        t.stopPropagation();
                        var i = e.runtime.tmp.current_use_coupon;
                        if (l.value = "", e.fireEvent(l, "change"), e.runtime.tmp.current_use_coupon = null, a(0), -1 != [e.const.FORM_CONFIG_TYPE.sapo, e.const.FORM_CONFIG_TYPE.haravan, e.const.FORM_CONFIG_TYPE.shopify, e.const.FORM_CONFIG_TYPE.wordpress].indexOf(e.runtime.shopping_product_type)) {
                            var n = document.querySelector("#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]");
                            e.isEmpty(n) || e.reloadPriceDiscount({
                                isRemoveCoupon: !0,
                                couponOld: i,
                                target: n
                            })
                        }
                    }), e.findAncestor(l, "ladi-form-item")
                    .appendChild(s), l.classList.add("pointer-events-none")
            }
            if ((i != e.runtime.tmp.current_use_coupon || e.isEmpty(t) || !t.isRemoveCoupon || !e.isEmpty(t.docCrawl)) && e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.haravan) {
                if (delete e.runtime.tmp.use_cart_line_price_original, !e.isEmpty(e.runtime.tmp.current_use_coupon)) {
                    var d = o.querySelector(".order-summary-emphasis[data-checkout-subtotal-price-target]");
                    if (!e.isEmpty(d)) d = (parseFloatLadiPage(d.getAttribute("data-checkout-subtotal-price-target")) || 0) / 100, e.changeTotalPriceCart(!0)
                        .cart_price != d && (e.runtime.tmp.use_cart_line_price_original = !0)
                }
                e.updateCartPromotion()
            }
        };
    e.isEmpty(t) || e.isEmpty(t.discount_price) ? e.runtime.tmp.is_click_check_price_discount || e.isEmpty(t) && e.isEmpty(e.runtime.tmp.current_use_coupon) || (e.isEmpty(e.runtime.tmp.timeout_reload_price_discount) || e.removeTimeout(e.runtime.tmp.timeout_reload_price_discount), e.runtime.tmp.timeout_reload_price_discount = e.runTimeout(function () {
        if (0 != e.runtime.tmp.list_form_checkout.length) {
            var i = null;
            if (e.isEmpty(t) ? i = document.getElementById(e.runtime.tmp.list_form_checkout[0]) : (i = e.findAncestor(t.target, "ladi-form"), e.isEmpty(i) || (i = i.querySelector("[data-submit-form-id]"), e.isEmpty(i) || (i = document.getElementById(i.getAttribute("data-submit-form-id"))))), e.isEmpty(i)) a(0);
            else {
                var n = null,
                    o = i.querySelector('.ladi-form-item input[name="email"]'),
                    r = i.querySelector('.ladi-form-item input[name="phone"]'),
                    s = i.querySelector('.ladi-form-item input[name="coupon"]');
                if (e.isEmpty(s)) a(0);
                else {
                    var l = e.runtime.tmp.current_use_coupon;
                    e.runtime.tmp.current_use_coupon = null;
                    var d = s.value;
                    if (e.isEmpty(d) && (e.isEmpty(t) || !t.isRemoveCoupon)) return void a(0);
                    if (e.isEmpty(t) && d != l) return void a(0);
                    n = {
                        discount_code: d
                    }, e.isEmpty(o) || (n.email = o.value), e.isEmpty(r) || (n.phone = r.value), e.runtime.tmp.is_click_check_price_discount = !0;
                    var c = null,
                        p = null,
                        u = null;
                    if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.sapo) return p = function (i, o) {
                        i = i.querySelector("#checkoutForm"), (u = new FormData)
                            .append("_method", "patch"), u.append("reductionCode", n.discount_code), u.append("email", n.email), e.sendRequest("POST", window.location.origin + i.getAttribute("action"), u, !0, c, function (i, n, o) {
                                if (o.readyState == XMLHttpRequest.DONE) {
                                    if (200 == n) try {
                                        var r = 0,
                                            s = e.createTmpElement("div", i, null, !1),
                                            l = s.querySelector("#discountCode .discount-code span.ui-tag__label");
                                        if (e.isEmpty(l)) {
                                            var c = s.querySelector("#discountCode .field__message--error");
                                            e.isEmpty(c) || e.isEmpty(c.textContent.trim()) || e.isEmpty(t) || e.showMessage(c.textContent.trim())
                                        } else {
                                            e.runtime.tmp.current_use_coupon = d;
                                            var p = s.querySelector("#discountCode .discount-code .col-block");
                                            e.isEmpty(p) || (r = parseFloatLadiPage(p.textContent.trim()
                                                .replaceAll(".", "")
                                                .replaceAll(",", ".")) || 0)
                                        }
                                        return void a(r)
                                    } catch (t) {}
                                    e.isEmpty(t) || e.showMessage(e.const.LANG.REQUEST_SEND_ERROR), a(0)
                                }
                            })
                    }, void e.getCheckoutSapo(t, p, a);
                    if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.haravan) return p = function (i) {
                        c = {
                            "X-Requested-With": "XMLHttpRequest"
                        };
                        var o = e.createTmpElement("a", "", {
                            href: i
                        });
                        e.isEmpty(n.discount_code) ? o.search = o.search + (e.isEmpty(o.search) ? "?" : "&") + "form_name=form_discount_remove" : o.search = o.search + (e.isEmpty(o.search) ? "?" : "&") + "discount.code=" + n.discount_code + "&form_name=form_discount_add", i = o.href, e.sendRequest("GET", i, null, !0, c, function (i, n, o) {
                            if (o.readyState == XMLHttpRequest.DONE) {
                                if (200 == n) try {
                                    var r = 0,
                                        s = e.createTmpElement("div", i, null, !1),
                                        l = s.querySelector(".applied-reduction-code-information");
                                    if (e.isEmpty(l) || l.textContent.trim()
                                        .toLowerCase() != d.trim()
                                        .toLowerCase()) {
                                        var c = s.querySelector("#form_discount_add .field-message-error");
                                        e.isEmpty(c) || e.isEmpty(c.textContent.trim()) || e.isEmpty(t) || e.showMessage(c.textContent.trim())
                                    } else {
                                        e.runtime.tmp.current_use_coupon = d;
                                        var p = s.querySelector(".total-line-price span[data-checkout-discount-amount-target]");
                                        e.isEmpty(p) || (r = (parseFloatLadiPage(p.getAttribute("data-checkout-discount-amount-target")) || 0) / 100)
                                    }
                                    return void a(r, s)
                                } catch (t) {}
                                e.isEmpty(t) || e.showMessage(e.const.LANG.REQUEST_SEND_ERROR), a(0)
                            }
                        })
                    }, void e.getThirdPartyCheckoutUrl(!1, p);
                    if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.shopify) return void a(0);
                    if (e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.wordpress) {
                        var m = window.location.origin + "/ladipage/api";
                        return e.isEmpty(n.discount_code) ? m += "?action=remove_coupon&coupon=" + (e.isEmpty(t) ? "" : t.couponOld) : m += "?action=apply_coupon&coupon=" + n.discount_code, void e.sendRequest("GET", m, null, !0, c, function (i, n, o) {
                            if (o.readyState == XMLHttpRequest.DONE) {
                                if (200 == n) try {
                                    var r = JSON.parse(i);
                                    if (200 == r.code) return e.runtime.tmp.current_use_coupon = d, void a(r.data);
                                    e.isEmpty(r.message) || e.isEmpty(t) || e.showMessage(r.message)
                                } catch (t) {}
                                a(0)
                            }
                        })
                    }
                    var _ = window.ladi("_cart_token")
                        .get_cookie(),
                        y = window.ladi("_checkout_token")
                        .get_cookie();
                    if (e.isEmpty(_) || e.isEmpty(y)) return void a(0);
                    c = {
                        "Content-Type": "application/json",
                        "cart-token": _
                    }, e.sendRequest("POST", e.const.API_LADISALE_VALIDATE_DISCOUNT.format(y), JSON.stringify(n), !0, c, function (i, n, o) {
                        if (o.readyState == XMLHttpRequest.DONE) {
                            if (200 == n) try {
                                var r = JSON.parse(i);
                                if (200 == r.code) return e.isEmpty(r.data.discount_error) ? e.runtime.tmp.current_use_coupon = d : e.isEmpty(t) || e.showMessage(r.data.discount_error), void a(r.data.discount_price)
                            } catch (t) {}
                            a(0)
                        }
                    })
                }
            }
        }
    }, e.isEmpty(t) ? 1e3 : 0)) : a(t.discount_price, t.docCrawl)
}, LadiPageScriptV2.prototype.updateCartPromotion = function (t, e, i) {
    var a = this,
        n = function (t) {
            for (var e = 0; e < a.runtime.tmp.cart.length; e++) {
                var i = a.runtime.tmp.cart[e];
                if (i.product_id == t.product_id && i.product_variant_id == t.product_variant_id) {
                    a.runtime.tmp.use_cart_line_price_original || t.sub_total == t.total ? delete i.promotion : i.promotion = t, a.runtime.tmp.cart[e] = i;
                    for (var n = document.querySelectorAll('.ladi-cart .ladi-cart-row .ladi-cart-price span[data-product-variant-id="' + i.product_variant_id + '"]'), o = 0; o < n.length; o++) {
                        var r = a.findAncestor(n[o], "ladi-cart-row"),
                            s = r.querySelector(".ladi-cart-price"),
                            l = r.querySelector(".ladi-cart-title"),
                            d = s.querySelector("span.price-compare"),
                            c = l.querySelector("span.promotion-name");
                        if (a.isObject(i.promotion)) {
                            r.classList.add("has-promotion"), a.isEmpty(d) && ((d = document.createElement("span"))
                                .className = "price-compare", s.appendChild(d));
                            var p = a.formatNumber(t.total, 3);
                            a.isObject(i.currency) && !a.isEmpty(i.currency.symbol) && (p = a.formatCurrency(t.total, i.currency.symbol, !0)), d.innerHTML = p, a.isEmpty(c) && ((c = document.createElement("span"))
                                .className = "promotion-name", l.appendChild(c)), c.innerHTML = i.promotion.discount.note
                        } else r.classList.remove("has-promotion"), a.isEmpty(d) || d.parentElement.removeChild(d), a.isEmpty(c) || c.parentElement.removeChild(c)
                    }
                }
            }
        },
        o = function () {
            var t = [];
            return a.isArray(a.runtime.tmp.cart) && a.runtime.tmp.cart.forEach(function (e) {
                var i = e.quantity;
                t.push({
                    product_id: e.product_id,
                    product_variant_id: e.product_variant_id,
                    quantity: i
                })
            }), {
                variants: t
            }
        },
        r = o(),
        s = JSON.stringify(r);
    if (a.isObject(a.runtime.tmp.info_update_cart_promotion) || (a.runtime.tmp.info_update_cart_promotion = {}), !a.isEmpty(t)) {
        var l = [],
            d = a.runtime.tmp.cart;
        a.runtime.tmp.cart = [];
        return -1 != [a.const.FORM_CONFIG_TYPE.sapo, a.const.FORM_CONFIG_TYPE.haravan, a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) && t.items.forEach(function (t) {
            var e = null; - 1 != [a.const.FORM_CONFIG_TYPE.sapo].indexOf(a.runtime.shopping_product_type) && t.name == t.title && "Default Title" == t.variant_title && (t.variant_title = null), -1 != [a.const.FORM_CONFIG_TYPE.haravan, a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) && t.product_title == t.title && "Default Title" == t.variant_title && (t.variant_title = null), -1 != [a.const.FORM_CONFIG_TYPE.sapo, a.const.FORM_CONFIG_TYPE.haravan].indexOf(a.runtime.shopping_product_type) && (e = {
                store_id: -1,
                product_id: t.product_id,
                product_variant_id: t.variant_id,
                name: t.title,
                title: t.variant_title,
                image: t.image,
                quantity: t.quantity,
                inventory_checked: 0,
                available_quantity: 0,
                min_buy: 1,
                max_buy: null
            }), -1 != [a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) && (e = {
                store_id: -1,
                product_id: t.product_id,
                product_variant_id: t.variant_id,
                name: t.product_title,
                title: t.variant_title,
                image: t.image,
                quantity: t.quantity,
                inventory_checked: 0,
                available_quantity: 0,
                min_buy: 1,
                max_buy: null
            });
            var i = a.runtime.currency;
            a.runtime.isClient || (i = window.$rootScope.getStoreCurrency()), e.currency = {
                code: i,
                symbol: a.formatCurrency(null, i, !1, !0)
            };
            var n = d.findIndex(function (t) {
                return t.product_id == e.product_id && t.product_variant_id == e.product_variant_id
            }); - 1 != n && (e.title = d[n].title);
            var o = null,
                r = null;
            if (-1 != [a.const.FORM_CONFIG_TYPE.sapo, a.const.FORM_CONFIG_TYPE.haravan].indexOf(a.runtime.shopping_product_type)) {
                if (e.price = t.price_original, a.isObject(t.properties)) {
                    var s = Object.keys(t.properties);
                    s.length > 0 && (o = t.properties[s[0]], -1 != [a.const.FORM_CONFIG_TYPE.haravan].indexOf(a.runtime.shopping_product_type) && ((o = o.split("-"))
                        .shift(), o = (o = o.join("-"))
                        .trim()), r = {
                        product_id: t.product_id,
                        product_variant_id: t.variant_id,
                        sub_total: t.line_price_original,
                        total: t.line_price,
                        discount: {
                            note: o
                        }
                    }, e.promotion = r, l.push(r))
                }
                a.isEmpty(e.promotion) && -1 != [a.const.FORM_CONFIG_TYPE.sapo].indexOf(a.runtime.shopping_product_type) && (e.price = t.price)
            } - 1 != [a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) && (e.price = t.original_price, t.original_line_price != t.line_price && a.isArray(t.discounts) && t.discounts.length > 0 && (o = t.discounts[0].title, r = {
                product_id: t.product_id,
                product_variant_id: t.variant_id,
                sub_total: t.original_line_price,
                total: t.line_price,
                discount: {
                    note: o
                }
            }, e.promotion = r, l.push(r))), -1 != [a.const.FORM_CONFIG_TYPE.haravan, a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type) && (e.price = e.price / 100, a.isEmpty(e.promotion) || (e.promotion.total = e.promotion.total / 100, e.promotion.sub_total = e.promotion.sub_total / 100)), a.runtime.tmp.cart.push(e)
        }), -1 != [a.const.FORM_CONFIG_TYPE.wordpress].indexOf(a.runtime.shopping_product_type) && t.data.forEach(function (t) {
            var e = null;
            a.isObject(t.variation) && (e = Object.values(t.variation)
                .join(", "));
            var i = {
                    store_id: -1,
                    product_id: t.product_id,
                    product_variant_id: t.variation_id,
                    name: t.product_name,
                    title: e,
                    min_buy: 1,
                    max_buy: null,
                    price: t.price,
                    image: t.image || "",
                    quantity: t.quantity,
                    inventory_checked: 0,
                    available_quantity: 0
                },
                n = a.runtime.currency;
            a.runtime.isClient || (n = window.$rootScope.getStoreCurrency()), i.currency = {
                code: n,
                symbol: a.formatCurrency(null, n, !1, !0)
            };
            var o = d.findIndex(function (t) {
                return t.product_id == i.product_id && t.product_variant_id == i.product_variant_id
            }); - 1 != o && (i.title = d[o].title), i.cart_item_key = t.key, a.runtime.tmp.cart.push(i)
        }), r = o(), s = JSON.stringify(r), l.forEach(n), void(a.runtime.tmp.info_update_cart_promotion[s] = l)
    }
    if (!0 !== a.runtime.tmp.info_update_cart_promotion[s]) {
        if (a.isArray(a.runtime.tmp.info_update_cart_promotion[s])) return a.runtime.tmp.info_update_cart_promotion[s].forEach(n), void a.changeTotalPriceCart();
        if (a.runtime.tmp.info_update_cart_promotion[s] = !0, -1 == [a.const.FORM_CONFIG_TYPE.sapo, a.const.FORM_CONFIG_TYPE.haravan, a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type))
            if (-1 == [a.const.FORM_CONFIG_TYPE.wordpress].indexOf(a.runtime.shopping_product_type)) {
                var c = window.ladi("_cart_token")
                    .get_cookie(),
                    p = {
                        "Content-Type": "application/json"
                    };
                a.isEmpty(c) || (p["cart-token"] = c), a.sendRequest("POST", a.const.API_LADISALE_PROMOTION, JSON.stringify(r), !0, p, function (t, e, o) {
                    if (o.readyState == XMLHttpRequest.DONE) {
                        if (200 == e) try {
                            var r = JSON.parse(t);
                            if (200 == r.code && a.isObject(r.data) && a.isArray(r.data.variants)) return r.data.variants.forEach(n), a.runtime.tmp.info_update_cart_promotion[s] = r.data.variants, a.changeTotalPriceCart(), void(a.isFunction(i) && i())
                        } catch (t) {}
                        delete a.runtime.tmp.info_update_cart_promotion[s], a.isFunction(i) && i()
                    }
                })
            } else a.sendRequest("GET", window.location.origin + "/ladipage/api?action=cart_info", null, !0, null, function (t, n, o) {
                if (o.readyState == XMLHttpRequest.DONE) {
                    if (200 == n) try {
                        var r = JSON.parse(t);
                        delete a.runtime.tmp.info_update_cart_promotion[s];
                        a.updateCartPromotion(r);
                        return e && a.runtime.tmp.cart.length > 0 && a.reloadCheckoutWordpress(), a.changeTotalPriceCart(), void(a.isFunction(i) && i())
                    } catch (t) {}
                    delete a.runtime.tmp.info_update_cart_promotion[s], a.isFunction(i) && i()
                }
            });
        else a.sendRequest("GET", window.location.origin + "/cart.js", null, !0, null, function (t, n, o) {
            if (o.readyState == XMLHttpRequest.DONE) {
                if (200 == n) try {
                    var r = JSON.parse(t);
                    delete a.runtime.tmp.info_update_cart_promotion[s];
                    a.updateCartPromotion(r);
                    return e && a.runtime.tmp.cart.length > 0 && (-1 != [a.const.FORM_CONFIG_TYPE.sapo].indexOf(a.runtime.shopping_product_type) && a.reloadCheckoutSapo(), -1 != [a.const.FORM_CONFIG_TYPE.haravan].indexOf(a.runtime.shopping_product_type) && a.reloadCheckoutHaravan(), [a.const.FORM_CONFIG_TYPE.shopify].indexOf(a.runtime.shopping_product_type)), a.changeTotalPriceCart(), void(a.isFunction(i) && i())
                } catch (t) {}
                delete a.runtime.tmp.info_update_cart_promotion[s], a.isFunction(i) && i()
            }
        })
    }
}, LadiPageScriptV2.prototype.addCartCookie = function (t, e, i, a, n) {
    var o = this,
        r = {},
        s = null,
        l = null;
    if (-1 != [o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify].indexOf(o.runtime.shopping_product_type)) return -1 != [o.const.FORM_CONFIG_TYPE.sapo].indexOf(o.runtime.shopping_product_type) && ((l = new FormData)
        .append("variantId", e.product_variant_id), l.append("quantity", e.quantity)), -1 != [o.const.FORM_CONFIG_TYPE.haravan].indexOf(o.runtime.shopping_product_type) && (s = {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest"
        }, l = {
            id: e.product_variant_id,
            quantity: e.quantity
        }, l = Object.keys(l)
        .reduce(function (t, e) {
            return t.push(e + "=" + encodeURIComponent(l[e])), t
        }, [])
        .join("&")), -1 != [o.const.FORM_CONFIG_TYPE.shopify].indexOf(o.runtime.shopping_product_type) && (s = {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest"
        }, l = {
            id: e.product_variant_id,
            quantity: e.quantity,
            form_type: "product"
        }, l = Object.keys(l)
        .reduce(function (t, e) {
            return t.push(e + "=" + encodeURIComponent(l[e])), t
        }, [])
        .join("&")), void this.sendRequest("POST", window.location.origin + "/cart/add.js", l, !0, s, function (t, e, s) {
        if (s.readyState == XMLHttpRequest.DONE) {
            if (200 == e) try {
                if (r = JSON.parse(t), !o.isEmpty(r.id)) return o.isFunction(i) && i(), o.isFunction(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping()
            } catch (t) {}
            o.isFunction(a) && a(r), o.isFunction(n) && n()
        }
    });
    if (-1 == [o.const.FORM_CONFIG_TYPE.wordpress].indexOf(o.runtime.shopping_product_type)) {
        var d = window.ladi("_cart_token")
            .get_cookie();
        (s = {
            "Content-Type": "application/json"
        })["store-id"] = t, this.isEmpty(d) || (s["cart-token"] = d);
        var c = e.quantity;
        l = JSON.stringify({
            type: "LP",
            product_variant_id: e.product_variant_id,
            quantity: c
        }), this.sendRequest("POST", this.const.API_LADISALE_ADD, l, !0, s, function (t, e, s) {
            if (s.readyState == XMLHttpRequest.DONE) {
                if (200 == e) try {
                    if (200 == (r = JSON.parse(t))
                        .code) return window.ladi("_cart_token")
                        .set_cookie(r.data.cart_token, 30), window.ladi("_checkout_token")
                        .set_cookie(r.data.checkout_token, 30), o.runtime.tmp.ladisales_checkout_url = r.data.url, o.isFunction(i) && i(), o.isFunction(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping()
                } catch (t) {}
                o.isFunction(a) && a(r), o.isFunction(n) && n()
            }
        })
    } else this.sendRequest("POST", window.location.origin + "/ladipage/api?action=cart_add&product_id=" + e.product_id + "&variant_id=" + e.product_variant_id + "&qty=" + e.quantity, l, !0, s, function (t, e, s) {
        if (s.readyState == XMLHttpRequest.DONE) {
            if (200 == e) try {
                if (200 == (r = JSON.parse(t))
                    .code) return o.updateCartPromotion(r), o.isFunction(i) && i(), o.isFunction(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping()
            } catch (t) {}
            o.isFunction(a) && a(r), o.isFunction(n) && n()
        }
    })
}, LadiPageScriptV2.prototype.updateCartCookie = function (t, e, i, a, n) {
    var o = this,
        r = {},
        s = null,
        l = null,
        d = null;
    if (-1 == [o.const.FORM_CONFIG_TYPE.sapo, o.const.FORM_CONFIG_TYPE.haravan, o.const.FORM_CONFIG_TYPE.shopify].indexOf(o.runtime.shopping_product_type)) {
        if (-1 != [o.const.FORM_CONFIG_TYPE.wordpress].indexOf(o.runtime.shopping_product_type)) return d = window.location.origin + "/ladipage/api?action=cart_update_item_qty&cart_item_key=" + t.cart_item_key + "&qty=" + t.quantity, e && (d = 0 == t.quantity ? window.location.origin + "/ladipage/api?action=cart_empty" : window.location.origin + "/ladipage/api?action=cart_update_item_qty&qty=" + t.quantity), void this.sendRequest("POST", d, s, !0, l, function (t, e, s) {
            if (s.readyState == XMLHttpRequest.DONE) {
                if (200 == e) try {
                    if (200 == (r = JSON.parse(t))
                        .code) return o.updateCartPromotion(r), o.isFunction(i) && i(), o.isFunction(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping()
                } catch (t) {}
                o.isFunction(a) && a(r), o.isFunction(n) && n()
            }
        });
        var c = window.ladi("_cart_token")
            .get_cookie();
        l = {
            "Content-Type": "application/json"
        }, this.isEmpty(c) || (l["cart-token"] = c);
        var p = t.quantity;
        s = JSON.stringify({
            product_variant_id: t.product_variant_id,
            quantity: p
        }), this.sendRequest("POST", this.const.API_LADISALE_UPDATE, s, !0, l, function (t, e, s) {
            if (s.readyState == XMLHttpRequest.DONE) {
                if (200 == e) try {
                    if (200 == (r = JSON.parse(t))
                        .code) return o.isFunction(i) && i(), o.isFunction(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping()
                } catch (t) {}
                o.isFunction(a) && a(r), o.isFunction(n) && n()
            }
        })
    } else {
        if (-1 != [o.const.FORM_CONFIG_TYPE.sapo].indexOf(o.runtime.shopping_product_type) && (d = window.location.origin + "/cart/change.js", (s = new FormData)
                .append("variantId", t.product_variant_id), s.append("quantity", t.quantity)), -1 != [o.const.FORM_CONFIG_TYPE.haravan].indexOf(o.runtime.shopping_product_type) && (d = window.location.origin + "/cart/update.js", l = {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest"
                }, s = o.runtime.tmp.cart.reduce(function (i, a) {
                    var n = a.quantity;
                    return (e || a.product_variant_id == t.product_variant_id) && (n = t.quantity), i.push("updates[]=" + encodeURIComponent(n)), i
                }, [])
                .join("&")), -1 != [o.const.FORM_CONFIG_TYPE.shopify].indexOf(o.runtime.shopping_product_type)) {
            d = window.location.origin + "/cart/change.js", l = {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            };
            var u = o.runtime.tmp.cart.findIndex(function (e) {
                return e.product_variant_id == t.product_variant_id
            });
            if (-1 == u) return;
            s = JSON.stringify({
                line: u + 1,
                quantity: t.quantity
            })
        }
        this.sendRequest("POST", d, s, !0, l, function (t, e, s) {
            if (s.readyState == XMLHttpRequest.DONE) {
                if (200 == e) try {
                    if (r = JSON.parse(t), !o.isEmpty(r.token)) return o.updateCartPromotion(r), o.isFunction(i) && i(), o.isFunction(n) && n(), o.reloadPriceDiscount(), void o.reloadFeeShipping()
                } catch (t) {}
                o.isFunction(a) && a(r), o.isFunction(n) && n()
            }
        })
    }
}, LadiPageScriptV2.prototype.getMessageNameProduct = function (t, e) {
    var i = this.const.LANG.PRODUCT;
    return this.isObject(t) && (t.product_type == this.const.PRODUCT_TYPE.event ? i = this.const.LANG.TICKET : t.product_type == this.const.PRODUCT_TYPE.service && (i = this.const.LANG.SERVICE)), e || (i = i.toLowerCase()), i
}, LadiPageScriptV2.prototype.loadCollectionData = function (t, e, i, a, n) {
    var o = this,
        r = e["option.product_type"],
        s = e["option.ladisale_store_id"],
        l = e["option.product_tag_id"],
        d = e["option.collection_setting.type"],
        c = o.runtime.eventData[t];
    if (!o.isEmpty(c) && "collection" == c.type) {
        var p = this.runtime.isDesktop ? this.const.DESKTOP : this.const.MOBILE,
            u = parseFloatLadiPage(c[p + ".option.collection_setting.row"]) || 0,
            m = parseFloatLadiPage(c[p + ".option.collection_setting.column"]) || 0,
            _ = parseFloatLadiPage(c[p + ".option.collection_setting.margin"]) || 0,
            y = function (t, e, i, a, n, r) {
                if (i = o.copy(i), Object.keys(a)
                    .forEach(function (t) {
                        i[t] = a[t]
                    }), a["option.input_type"] == o.const.INPUT_TYPE.product_variant) {
                    var s = o.generateVariantProduct(i, !0, a["option.product_variant_type"], a["option.product_variant_title"], a["option.product_variant_price"], a["option.input_tabindex"], o.runtime.isClient, !0, function (o) {
                            y(t, e, i, a, n, r)
                        }),
                        l = function (e) {
                            o.updateProductVariantSelectOption(e, i, a, !1, function () {
                                var i = o.getProductVariantId(e.target, n),
                                    a = n.variants.findIndex(function (t) {
                                        return t.product_variant_id == i
                                    }),
                                    s = o.findAncestor(e.target, "ladi-element");
                                if (!o.isEmpty(s)) {
                                    var l = o.findAncestor(s, "ladi-collection-item");
                                    if (!o.isEmpty(l))
                                        for (var d = l.querySelectorAll('[data-variant="true"]'), c = 0; c < d.length; c++)
                                            if (d[c].id != s.id) {
                                                var p = o.runtime.eventData[d[c].id],
                                                    u = null,
                                                    m = null,
                                                    _ = null,
                                                    y = 0;
                                                if (p["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.combobox && (m = n.variants[a], o.isObject(m) && o.isString(m.option_ids)))
                                                    for (_ = m.option_ids.split("/"), y = 0; y < _.length; y++) u = d[c].querySelector('select[data-product-option-id="' + _[y] + '"]'), o.isEmpty(u) || (u.value = m["option" + (y + 1)]);
                                                if (p["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.label && (m = n.variants[a], o.isObject(m) && o.isString(m.option_ids)))
                                                    for (_ = m.option_ids.split("/"), y = 0; y < _.length; y++) u = d[c].querySelector('.ladi-form-label-container[data-product-option-id="' + _[y] + '"]'), o.isEmpty(u) || o.runtime.tmp.updateLabelValue(u, m["option" + (y + 1)]);
                                                if (p["option.product_variant_type"] == o.const.PRODUCT_VARIANT_TYPE.combined) {
                                                    if (u = d[c].querySelector("select.ladi-form-control"), !o.isEmpty(i)) {
                                                        var g = u.querySelector('option[data-product-variant-id="' + i + '"]');
                                                        o.isEmpty(g) || (a = g.getAttribute("value"))
                                                    }
                                                    u.value = (-1 == a ? "" : a) + ""
                                                }
                                            }
                                }
                                r(t, n, !1, i, !0, !0)
                            })
                        },
                        d = o.runtime.tmp.getOptionLabelValue,
                        c = o.runtime.tmp.updateLabelValue,
                        p = o.runtime.tmp.getLabelValue,
                        u = function (t) {
                            o.runtime.tmp.clickLabelProductChangeCallback(t, function (t) {
                                l({
                                    target: t
                                })
                            })
                        };
                    o.showParentVisibility(e, function () {
                        for (var t = e.clientHeight, n = t, r = e.querySelectorAll("select.ladi-form-control"), m = {}, _ = 0; _ < r.length; _++) m[r[_].getAttribute("data-store-id") + "_" + r[_].getAttribute("data-product-id") + "_" + r[_].getAttribute("data-product-option-id")] = r[_].value;
                        var y = e.querySelectorAll(".ladi-form-label-container");
                        for (_ = 0; _ < y.length; _++) m[y[_].getAttribute("data-store-id") + "_" + y[_].getAttribute("data-product-id") + "_" + y[_].getAttribute("data-product-option-id")] = p(y[_]);
                        e.innerHTML = s;
                        for (var g = e.querySelectorAll("select.ladi-form-control"), f = null, h = null, v = 0; v < g.length; v++) g[v].removeEventListener("change", l), g[v].addEventListener("change", l), f = m[g[v].getAttribute("data-store-id") + "_" + g[v].getAttribute("data-product-id") + "_" + g[v].getAttribute("data-product-option-id")], o.isNull(f) && (h = g[v].querySelector("option"), o.isEmpty(h) || (f = h.getAttribute("value"))), g[v].value = f;
                        var E = e.querySelectorAll(".ladi-form-label-container");
                        for (v = 0; v < E.length; v++) {
                            for (var P = E[v].querySelectorAll(".ladi-form-label-item"), L = 0; L < P.length; L++) o.tapEventListener(P[L], u);
                            f = m[E[v].getAttribute("data-store-id") + "_" + E[v].getAttribute("data-product-id") + "_" + E[v].getAttribute("data-product-option-id")], o.isNull(f) && (h = P[1], o.isEmpty(h) || (f = d(h))), c(E[v], f)
                        }
                        if (o.updateProductVariantSelectOptionFirst(i, a, e), a["option.product_variant_type"] != o.const.PRODUCT_VARIANT_TYPE.combined && (e.style.setProperty("height", "auto"), n = e.clientHeight, e.style.removeProperty("height"), n > 0 && t != n)) {
                            e.style.setProperty("height", n + "px");
                            var A = o.findAncestor(e, "ladi-form");
                            o.isEmpty(A) || (A = o.findAncestor(A, "ladi-element"), o.updateHeightElement(!0, e, A, t, n))
                        }
                    })
                }
                if (a["option.input_type"] == o.const.INPUT_TYPE.number) {
                    var m = e.querySelector('input[name="quantity"]'),
                        _ = function (t) {
                            if (!o.isEmpty(t.target.value)) {
                                var e = o.generateVariantProduct(i, !1, null, null, null, null, !0, !0, function () {
                                    _(t)
                                });
                                if (!(o.isEmpty(e) || o.isEmpty(e.store_info) || o.isEmpty(e.product))) {
                                    var a = t.target;
                                    a = (a = o.findAncestor(a, "ladi-form"))
                                        .querySelector('[data-variant="true"]');
                                    var n = o.getProductVariantId(a, e.product),
                                        r = e.product.variants.findIndex(function (t) {
                                            return t.product_variant_id == n
                                        });
                                    if (-1 != r) {
                                        var s = e.product.variants[r].quantity,
                                            l = e.product.variants[r].quantity_stock;
                                        s = o.isNull(l) ? s : l;
                                        var d = parseInt(t.target.value) || 0,
                                            c = 1;
                                        c = e.product.variants[r].min_buy || c;
                                        var p = e.product.variants[r].max_buy,
                                            u = 0,
                                            m = o.runtime.tmp.cart.findIndex(function (t) {
                                                return t.product_id == e.product.variants[r].product_id && t.product_variant_id == e.product.variants[r].product_variant_id
                                            }); - 1 != m && (u = o.runtime.tmp.cart[m].quantity), c > d + u && (d = c - u), 1 == e.product.variants[r].inventory_checked && d + u > s && (d = s - u), !o.isEmpty(p) && d + u > p && (d = p - u), d = d < 1 ? 1 : d, t.target.setAttribute("min", c), o.isEmpty(p) || t.target.setAttribute("max", p), t.target.value = d
                                    }
                                }
                            }
                        };
                    m.addEventListener("input", _), o.fireEvent(m, "input");
                    var g = e.querySelectorAll(".button")[0],
                        f = e.querySelectorAll(".button")[1];
                    if (o.isEmpty(g) || o.isEmpty(f)) return;
                    g.addEventListener("click", function (t) {
                        m.value = (parseFloatLadiPage(m.value) || 0) - 1, o.fireEvent(m, "input")
                    }), f.addEventListener("click", function (t) {
                        m.value = (parseFloatLadiPage(m.value) || 0) + 1, o.fireEvent(m, "input")
                    })
                }
                if ("button" == a.type && (a["option.is_buy_now"] || a["option.is_add_to_cart"])) {
                    var h = function () {
                        var t = i["option.data_event"];
                        if (!o.isArray(t) && (t = [], o.isObject(i["option.data_action"]))) {
                            var a = o.copy(i["option.data_action"]);
                            a.action_type = o.const.ACTION_TYPE.action, t.push(a)
                        }
                        t.forEach(function (t) {
                            t.action_type == o.const.ACTION_TYPE.action && (t.type == o.const.DATA_ACTION_TYPE.popup_cart && (window.ladi("POPUP_CART")
                                .show(), o.runEventTracking(e.id, !1)), t.type == o.const.DATA_ACTION_TYPE.popup_checkout && (o.runtime.shopping_third_party ? o.getThirdPartyCheckoutUrl(!0) : window.ladi("POPUP_CHECKOUT")
                                .show(), o.runEventTracking(e.id, !1)))
                        })
                    };
                    e.setAttribute("data-click", !1), e.addEventListener("click", function (t) {
                        o.runtime.tmp.buttonAddToCartClick(t, !0, i, h)
                    })
                }
            },
            g = function (t, e, i, a, n, r) {
                var s = !o.isEmpty(e["option.product_mapping_name"]),
                    l = JSON.stringify(e),
                    d = null,
                    c = null;
                if (s)
                    if (a && o.isEmpty(i)) d = "";
                    else if (!o.isEmpty(e["option.product_id"]) && l === (d = (c = o.generateProductKey(!0, l, !0, e, !0, i, null, function (o) {
                            g(t, e, i, a, n, r)
                        }))
                        .value)) return;
                var p = e.type,
                    u = null,
                    m = null;
                if (s && "headline" == p && (m = t.getElementsByClassName("ladi-headline")[0], o.isEmpty(m) || (m.innerHTML = o.isNull(d) ? "" : d)), s && "paragraph" == p && (m = t.getElementsByClassName("ladi-paragraph")[0], o.isEmpty(m) || (m.innerHTML = o.isNull(d) ? "" : d)), s && "image" == p) {
                    u = o.getOptimizeImage(d, t.clientWidth, t.clientHeight, !0, !1, !1, !0);
                    var _ = t.getElementsByClassName("ladi-image-background")[0];
                    o.isEmpty(_) || (o.isEmpty(u) ? _.style.setProperty("background-image", "none") : _.style.setProperty("background-image", 'url("' + u + '")'))
                }
                if ("gallery" == p) {
                    if (s && !o.isArray(d)) return;
                    if (r && !n && "true" == t.getAttribute("data-collection")) return void o.runtime.tmp.updateImageGalleryProduct(t, c, e);
                    t.setAttribute("data-collection", !0), t.removeAttribute("data-stop"), t.removeAttribute("data-loaded"), t.removeAttribute("data-scrolled"), t.removeAttribute("data-current"), t.removeAttribute("data-is-next"), t.removeAttribute("data-runtime-id"), t.removeAttribute("data-next-time");
                    var y = t.querySelector(".ladi-gallery-view-item.selected");
                    o.isEmpty(y) || y.classList.remove("selected");
                    var f = t.querySelector(".ladi-gallery-control-item.selected");
                    o.isEmpty(f) || f.classList.remove("selected");
                    var h = t.getElementsByClassName("ladi-gallery-view")[0];
                    f = t.getElementsByClassName("ladi-gallery-control-item")[0], y = t.getElementsByClassName("ladi-gallery-view-item")[0], o.isEmpty(y) || y.classList.add("selected"), o.isEmpty(f) || f.classList.add("selected");
                    var v = t.getElementsByClassName("ladi-gallery-control-box")[0];
                    if (o.isEmpty(v) || v.style.removeProperty("left"), s) {
                        for (var E = t.getElementsByClassName("ladi-gallery-view-item"); E.length < d.length;) {
                            var P = o.createTmpElement("div", '<div class="ladi-gallery-view-item" data-index="' + E.length + '"></div>', null, !0);
                            t.getElementsByClassName("ladi-gallery-view")[0].appendChild(P)
                        }
                        for (; E.length > d.length;) E[E.length - 1].parentElement.removeChild(E[E.length - 1]);
                        for (var L = t.getElementsByClassName("ladi-gallery-control-item"), A = function (e) {
                                o.runtime.tmp.eventClickGalleryControlItem(e, t)
                            }; L.length < d.length;) {
                            var b = o.createTmpElement("div", '<div class="ladi-gallery-control-item" data-index="' + L.length + '"></div>', null, !0);
                            b.addEventListener("click", A), t.getElementsByClassName("ladi-gallery-control-box")[0].appendChild(b)
                        }
                        for (; L.length > d.length;) L[L.length - 1].parentElement.removeChild(L[L.length - 1]);
                        for (var w = t.querySelectorAll(".ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow"), S = 0; S < w.length; S++) d.length <= 1 ? w[S].style.setProperty("display", "none") : w[S].style.removeProperty("display");
                        for (w = t.querySelectorAll(".ladi-gallery > .ladi-gallery-control"), S = 0; S < w.length; S++) d.length <= 1 ? w[S].style.setProperty("display", "none") : w[S].style.removeProperty("display");
                        for (w = t.querySelectorAll(".ladi-gallery > .ladi-gallery-view"), S = 0; S < w.length; S++) d.length <= 1 ? w[S].style.setProperty("height", "100%") : w[S].style.removeProperty("height");
                        d.forEach(function (e, i) {
                            u = e.src, o.isEmpty(h) || (u = o.getOptimizeImage(e.src, h.clientWidth, h.clientHeight, !0, !1, !1, o.runtime.isClient));
                            var a = t.querySelector('.ladi-gallery .ladi-gallery-view-item[data-index="' + i + '"]');
                            o.isEmpty(a) || a.style.setProperty("background-image", 'url("' + u + '")'), o.isEmpty(f) || (u = o.getOptimizeImage(e.src, f.clientWidth, f.clientHeight, !0, !1, !1, o.runtime.isClient)), a = t.querySelector('.ladi-gallery .ladi-gallery-control-item[data-index="' + i + '"]'), o.isEmpty(a) || a.style.setProperty("background-image", 'url("' + u + '")')
                        }), o.runTimeout(function () {
                            t.setAttribute("data-loaded", !0)
                        }, 300)
                    }
                    o.runtime.tmp.runGallery(t.id, t, !0, p), o.runtime.tmp.setGalleryStart(t.id, t)
                }
                "countdown_item" == p && o.runtime.tmp.runOptionCountdownItem(t.id, t, p, e["option.countdown_item_type"]), "countdown" == p && o.runtime.tmp.runOptionCountdown(t.id, t, p, e["option.countdown_type"], e["option.countdown_minute"], e["option.countdown_daily_start"], e["option.countdown_daily_end"], e["option.countdown_endtime"])
            },
            f = function (t, e) {
                var c = u * m,
                    p = o.getListProductByTagId(e, c, i, !0, function () {
                        f(t, e)
                    });
                if (o.isObject(p) && o.isArray(p.products)) {
                    var h = document.getElementById(t);
                    if (o.isEmpty(h)) return;
                    if (h.getAttribute("data-page") == i) return;
                    var v = i,
                        E = !1,
                        P = !1;
                    if (!o.isEmpty(p.total_record) && i * c >= p.total_record) {
                        if (d == o.const.COLLECTION_TYPE.readmore) {
                            var L = h.getElementsByClassName("ladi-collection-button-next")[0];
                            o.isEmpty(L) || L.setAttribute("data-opacity", "0")
                        }
                        h.setAttribute("data-max-page", v), E = !0, i * c > p.total_record && (P = !0)
                    }
                    h.setAttribute("data-page", i > v ? v : i);
                    var A = h.getElementsByClassName("ladi-collection-arrow-left")[0],
                        b = h.getElementsByClassName("ladi-collection-arrow-right")[0],
                        w = h.getElementsByClassName("ladi-collection-button-next")[0];
                    if (o.isEmpty(A) || A.classList.remove("opacity-0"), o.isEmpty(b) || b.classList.remove("opacity-0"), o.isEmpty(w) || w.classList.remove("opacity-0"), 1 == h.getAttribute("data-page") && d == o.const.COLLECTION_TYPE.carousel && (o.isEmpty(A) || A.classList.add("opacity-0")), h.getAttribute("data-page") == h.getAttribute("data-max-page") && (d == o.const.COLLECTION_TYPE.readmore && (o.isEmpty(w) || w.classList.add("opacity-0")), d == o.const.COLLECTION_TYPE.carousel && (o.isEmpty(b) || b.classList.add("opacity-0"))), v < i) return;
                    var S = h.getElementsByClassName("ladi-collection-item");
                    if (0 == S.length) return;
                    var T = 0,
                        O = 0;
                    if (h.hasAttribute("data-max-option-length")) T = parseFloatLadiPage(h.getAttribute("data-max-option-length"));
                    else {
                        var C = h.querySelectorAll('.ladi-form [data-variant="true"]');
                        for (O = 0; O < C.length; O++) {
                            var N = C[O].getElementsByClassName("ladi-form-item-box");
                            N.length > T && (T = N.length)
                        }
                    }
                    var I = h.getElementsByClassName("ladi-collection-content")[0],
                        k = {
                            className: S[0].className,
                            innerHTML: S[0].innerHTML
                        };
                    a && S[0].parentElement.removeChild(S[0]);
                    for (var x = I.getElementsByClassName("ladi-collection-page"); x.length < i;) {
                        var D = document.createElement("div");
                        D.className = "ladi-collection-page", I.appendChild(D)
                    }
                    var R = x[i - 1],
                        F = R.getElementsByClassName("ladi-collection-item");
                    if (F.length != p.products.length)
                        for (; F.length > 0;) F[0].parentElement.removeChild(F[0]);
                    var q = function (t, i, a, n, d, c) {
                        o.isEmpty(i.id) && !o.isEmpty(i.product_id) && (i.id = i.product_id);
                        for (var p = function (t, e) {
                                if (t.classList.contains("ladi-animation-hidden")) {
                                    var i = parseFloatLadiPage(e[o.runtime.device + ".style.animation-delay"]) || 0;
                                    t.classList.add("ladi-animation"), o.runTimeout(function () {
                                        t.classList.remove("ladi-animation-hidden")
                                    }, 1e3 * i)
                                }
                            }, u = 0; u < t.length; u++) {
                            var m = o.copy(o.runtime.eventData[t[u].id]);
                            o.isEmpty(m) || (p(t[u], m), m["option.product_type"] = r, m["option.ladisale_store_id"] = s, m["option.product_tag_id"] = l, m["option.product_id"] = i.id, a && (o.isFunction(o.runtime.tmp.runOptionAction) && o.runtime.tmp.runOptionAction(t[u], t[u].id, m.type, m), o.isFunction(o.runtime.tmp.runOptionHover) && o.runtime.tmp.runOptionHover(t[u], t[u].id, m.type, m["option.data_event"] || m["option.data_hover"]), y(t, t[u], e, m, i, q)), g(t[u], m, n, d, a, c))
                        }
                    };
                    for (O = 0; O < p.products.length; O++) o.isArray(p.products[O].options) && p.products[O].options.length > T && (T = p.products[O].options.length);
                    for (h.setAttribute("data-max-option-length", T), O = 0; O < p.products.length; O++)
                        if (!(F.length > O)) {
                            var B = document.createElement("div");
                            B.className = k.className, R.appendChild(B), B.innerHTML = k.innerHTML;
                            for (var M = B.getElementsByClassName("ladi-element"); o.isArray(p.products[O].options) && p.products[O].options.length < T;) p.products[O].options.push({
                                is_tmp: !0
                            });
                            q(M, p.products[O], !0, null, !1, !1)
                        }
                    E && (R.classList.add("last"), P && R.classList.add("not-full")), d == o.const.COLLECTION_TYPE.carousel && function (t) {
                        var e = document.getElementById(t);
                        if (!o.isEmpty(e) && e.hasAttribute("data-page")) {
                            var i = "0",
                                a = getComputedStyle(e)
                                .width,
                                n = a,
                                r = parseFloatLadiPage(e.getAttribute("data-page")) || 1,
                                s = e.getElementsByClassName("ladi-collection-content")[0].getElementsByClassName("ladi-collection-page"),
                                l = s[s.length - 1].getElementsByClassName("ladi-collection-item"),
                                d = m - l.length,
                                c = "",
                                p = "";
                            d > 0 ? (n = "calc(" + a + " * " + s.length + " - (" + a + " / " + m + " * " + d + ") + calc(" + _ + "px / " + m + " * " + l.length + "))", r > 1 && (r != s.length ? i = "calc(-" + a + " * " + (r - 1) + ")" : (i = "calc(-" + a + " * " + (r - 1) + " + (" + a + " / " + m + " * " + d + "))", p = "margin-left: calc(-" + _ + "px / " + m + " * " + l.length + ");")), c += "#" + t + " .ladi-collection .ladi-collection-content .ladi-collection-page.last.not-full .ladi-collection-item:first-child {", c += "margin-left: " + _ + "px;", c += "}", c += "#" + t + " .ladi-collection-content .ladi-collection-page.last {", c += "width: calc(" + getComputedStyle(e)
                                .width + " / " + m + " * " + l.length + " + calc(" + _ + "px / " + m + " * " + l.length + "));", c += "}") : (r > 1 && (i = "calc(-" + a + " * " + (r - 1) + ")"), n = "calc(" + a + " * " + s.length + ")");
                            var u = "style_collection_" + t,
                                y = document.getElementById(u);
                            o.isEmpty(y) || y.parentElement.removeChild(y);
                            var g = "#" + t + " .ladi-collection-content {";
                            g += "width: " + n + ";", g += "left: " + i + ";", g += p, g += "}", g += c, o.createStyleElement(u, g)
                        }
                    }(t), n && d == o.const.COLLECTION_TYPE.readmore && function (t) {
                        var e = document.getElementById(t);
                        if (!o.isEmpty(e)) {
                            var i = e.getElementsByClassName("ladi-collection-content")[0];
                            if (e.hasAttribute("data-max-page")) {
                                var a = i.querySelector(".ladi-collection-page.last"),
                                    n = a.getElementsByClassName("ladi-collection-item"),
                                    r = Math.ceil(n.length / m);
                                if (u == r) a.style.removeProperty("height");
                                else {
                                    var s = parseFloatLadiPage((parseFloatLadiPage(getComputedStyle(a)
                                        .height) || 0) * r / u) || 0;
                                    s -= parseFloatLadiPage(_ * (u - r) / u) || 0, a.style.setProperty("height", s + "px")
                                }
                            }
                            var l = parseFloatLadiPage(getComputedStyle(e)
                                    .height) || 0,
                                d = i.scrollHeight;
                            if (l != d) {
                                e.style.setProperty("height", d + "px");
                                var c = o.findAncestor(e.parentElement, "ladi-element");
                                o.isEmpty(c) && (c = o.findAncestor(e.parentElement, "ladi-section")), o.updateHeightElement(!0, e, c, l, d)
                            }
                        }
                    }(t), o.runEventScroll(), o.runResizeAll()
                }
            },
            h = c["option.product_tag_id"],
            v = c["option.data_setting.value"];
        !o.isArray(h) && o.isEmpty(v) || f(t, c)
    }
}, LadiPageScript.const.API_FORM_DATA = "https://api.ldpform.com/sendform", LadiPageScript.const.API_ANALYTICS_EVENT = "https://a.ladipage.com/event", LadiPageScript.const.API_ACCESS_KEY_LOGIN = "https://api.ladipage.com/2.0/access-key-login", LadiPageScript.const.API_COLLECTION_PRODUCT = "https://api.checkout.ladisales.com/1.0/product-list", LadiPageScript.const.API_SHOW_PRODUCT = "https://api.checkout.ladisales.com/1.0/product-detail", LadiPageScript.const.API_LADISALE_COLLECTION_PRODUCT = "https://api.sales.ldpform.net/2.0/public/collections/products", LadiPageScript.const.API_LADISALE_SHOW_PRODUCT = "https://api.sales.ldpform.net/2.0/public/product/show", LadiPageScript.const.API_LADISALE_ADD = "https://api.sales.ldpform.net/2.0/cart/add", LadiPageScript.const.API_LADISALE_UPDATE = "https://api.sales.ldpform.net/2.0/cart/update", LadiPageScript.const.API_LADISALE_SHOW = "https://api.sales.ldpform.net/2.0/cart/show", LadiPageScript.const.API_LADISALE_GET_SHIPPING = "https://api.sales.ldpform.net/2.0/checkout/{0}/get-shipping", LadiPageScript.const.API_LADISALE_VALIDATE_DISCOUNT = "https://api.sales.ldpform.net/2.0/checkout/{0}/validate-discount", LadiPageScript.const.API_LADISALE_PROMOTION = "https://api.checkout.ladisales.com/1.0/checkout/get-promotion", LadiPageScript.const.API_LADISALE_CHECKOUT_CREATE = "https://api.checkout.ladisales.com/1.0/checkout/create", LadiPageScript.const.API_FILE_UPLOAD = "https://api.files.ladicdn.com/2.0/ladipage-upload-file", LadiPageScript.const.API_DATASET_DATA = "https://g.ladicdn.com/dataset/{0}.json?id={1}", LadiPageScript.const.API_DATASET_BLOG = "https://g.ladicdn.com/blog-", LadiPageScript.const.API_SECTION_GLOBAL_HTML = "https://g.ladicdn.com/section/{0}-{1}.html", LadiPageScript.const.CDN_LIBRARY_JS_URL = "https://w.ladicdn.com/v2/source/", LadiPageScript.const.CDN_LIBRARY_CSS_URL = "https://w.ladicdn.com/v2/source/";
var lightbox_run = function (t, e, i, a, n, o, r, s) {
        var l = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
        if (!LadiPageScript.isEmpty(l)) {
            var d = JSON.stringify({
                    html: t,
                    url: e,
                    is_video: i,
                    video_type: o,
                    video_value: r
                }),
                c = Object.keys(LadiPageScript.runtime.list_lightbox_id); - 1 == c.indexOf(d) && (LadiPageScript.runtime.list_lightbox_id[d] = c.length + 1);
            var p = LadiPageScript.runtime.list_lightbox_id[d];
            n = n + "_" + p;
            var u = document.getElementById(n),
                m = !1;
            LadiPageScript.isEmpty(u) ? (u = document.createElement("div"), l.appendChild(u), u.outerHTML = t, u = l.lastChild, m = !0) : i && LadiPageScript.runEventReplayVideo(n, o, !0);
            var _ = document.createElement("div");
            _.className = "lightbox-close", _.setAttribute("data-hidden", !0), l.appendChild(_), u.setAttribute("id", n), u.setAttribute("data-hidden", !0), u.classList.remove("lightbox-hidden");
            var y = function () {
                    if (u = document.getElementById(n), !LadiPageScript.isEmpty(u)) {
                        if ("IFRAME" == u.tagName) {
                            var t = parseFloatLadiPage(getComputedStyle(u)
                                    .width) || 0,
                                e = parseFloatLadiPage(getComputedStyle(u)
                                    .height) || 0;
                            if (t > 0 || e > 0) {
                                var i = .8 * document.body.clientWidth,
                                    a = .8 * LadiPageScript.getHeightDevice(),
                                    o = i,
                                    r = e / t * o;
                                r > a && (o = (r = a) * (t / e)), u.style.setProperty("width", (parseFloatLadiPage(o) || 0) + "px"), u.style.setProperty("height", (parseFloatLadiPage(r) || 0) + "px")
                            }
                        }
                        if (_ = l.getElementsByClassName("lightbox-close")[0], !LadiPageScript.isEmpty(_)) {
                            var s = LadiPageScript.getElementBoundingClientRect(u),
                                d = 10,
                                c = 10;
                            s.x - 5 - _.clientWidth > c && (c = s.x - 5 - _.clientWidth), s.y - 5 - _.clientHeight > d && (d = s.y - 5 - _.clientHeight), c += LadiPageScript.runtime.widthScrollBar, d -= 6, c -= 6, _.style.setProperty("right", c + "px"), _.style.setProperty("top", d + "px")
                        }
                        var p = document.getElementById(u.id + "_button_unmute");
                        LadiPageScript.isEmpty(p) || (p.style.setProperty("width", getComputedStyle(u)
                            .width), p.style.setProperty("height", getComputedStyle(u)
                            .height))
                    }
                },
                g = function () {
                    LadiPageScript.runTimeout(function () {
                        u = document.getElementById(n), LadiPageScript.isEmpty(u) || (u.setAttribute("data-opacity", 0), u.removeAttribute("data-hidden")), _ = l.getElementsByClassName("lightbox-close")[0], LadiPageScript.isEmpty(_) || (_.setAttribute("data-opacity", 0), _.removeAttribute("data-hidden")), y(), LadiPageScript.isEmpty(u) || u.removeAttribute("data-opacity"), LadiPageScript.isEmpty(_) || _.removeAttribute("data-opacity")
                    }, 100)
                };
            _.style.setProperty("top", "-100px"), _.style.setProperty("right", "-100px");
            var f = "load";
            if (i && o == LadiPageScript.const.VIDEO_TYPE.direct && (f = "loadedmetadata"), m && (u.addEventListener(f, g), u.addEventListener("error", g)), i) {
                var h = e;
                o == LadiPageScript.const.VIDEO_TYPE.youtube && (e = null, h = r), m ? LadiPageScript.runEventPlayVideo(n, o, h, !1, !1, !0, !1, s, !1, function (t) {
                    LadiPageScript.isEmpty(t) ? g() : (t.addEventListener(f, g), t.addEventListener("error", g))
                }) : g()
            }
            s || l.style.setProperty("display", "block"), LadiPageScript.isEmpty(e) || (m ? u.src = e : g());
            var v = function () {
                    var t = document.getElementById(LadiPageScript.runtime.backdrop_popup_id);
                    return LadiPageScript.isEmpty(t) || "none" == getComputedStyle(t)
                        .display
                },
                E = 0;
            v() ? (E = window.scrollY, LadiPageScript.runtime.tmp.bodyScrollY = E) : E = LadiPageScript.runtime.tmp.bodyScrollY;
            var P = function () {
                l.style.removeProperty("display"), u = document.getElementById(n), LadiPageScript.isEmpty(u) || (a && !i ? u.parentElement.removeChild(u) : (u.classList.add("lightbox-hidden"), i && LadiPageScript.runEventReplayVideo(n, o, !1))), _ = l.getElementsByClassName("lightbox-close")[0], LadiPageScript.isEmpty(_) || _.parentElement.removeChild(_);
                var t = document.getElementById("style_lightbox");
                LadiPageScript.isEmpty(t) || t.parentElement.removeChild(t);
                var e = v();
                e && !LadiPageScript.isEmpty(LadiPageScript.runtime.tmp.bodyScrollY) && window.scrollTo(0, LadiPageScript.runtime.tmp.bodyScrollY), e && (LadiPageScript.runtime.tmp.bodyScrollY = null)
            };
            if (_.addEventListener("click", function (t) {
                    t.stopPropagation(), P()
                }), !s) {
                var L = "body {";
                L += "position: fixed !important;", L += "width: 100% !important;", L += "top: -" + E + "px !important;", L += "}", LadiPageScript.createStyleElement("style_lightbox", L)
            }
            LadiPageScript.isEmpty(l.getAttribute("data-load-event")) && (l.setAttribute("data-load-event", !0), l.addEventListener("click", function (t) {
                t.stopPropagation(), t.target.id == l.id && (_ = l.getElementsByClassName("lightbox-close")[0], LadiPageScript.isEmpty(_) || _.click())
            }), window.addEventListener("resize", y)), s && P()
        }
    },
    lightbox_iframe = function (t, e, i, a, n, o) {
        if (!LadiPageScript.isEmpty(t)) {
            var r = "margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 80%; max-height: 80%;",
                s = '<iframe id="' + (i = i || "lightbox_iframe") + '" class="lightbox-item" style="' + r + '" frameborder="0" allowfullscreen></iframe>',
                l = t,
                d = LadiPageScript.createTmpElement("iframe", l, null, !0);
            LadiPageScript.isEmpty(d) || "IFRAME" != d.tagName || (l = d.src, i = d.id || i, d.removeAttribute("src"), d.setAttribute("style", r), d.classList.add("lightbox-item"), s = d.outerHTML), lightbox_run(s, l, e, !0, i, a, n, o)
        }
    },
    lightbox_image = function (t) {
        if (!LadiPageScript.isEmpty(t)) {
            lightbox_run('<img class="lightbox-item" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; object-fit: scale-down; max-width: 80%; max-height: 80%;" />', t, !1, !1, "lightbox_image")
        }
    },
    lightbox_video = function (t, e, i) {
        if (!LadiPageScript.isEmpty(t) && !LadiPageScript.isEmpty(e)) {
            LadiPageScript.pauseAllVideo();
            var a = "lightbox_player";
            if (e == LadiPageScript.const.VIDEO_TYPE.youtube && lightbox_iframe('<iframe id="' + a + '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>', !0, a, e, t, i), e == LadiPageScript.const.VIDEO_TYPE.direct) {
                lightbox_run('<video class="lightbox-item" id="lightbox_player" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 80%; max-height: 80%; object-fit: cover;"></video>', t, !0, !1, a, e, null, i)
            }
        }
    },
    LadiPageLibraryV2 = LadiPageLibraryV2 || function () {};
LadiPageLibraryV2.prototype.get_url = function (t, e, i) {
    if (!LadiPageScript.isEmpty(this.id)) {
        var a = this.id,
            n = "";
        if (e && LadiPageScript.isObject(t)) Object.keys(t)
            .forEach(function (e) {
                LadiPageScript.isEmpty(n) || (n += "&");
                var a = t[e];
                i && -1 != ["email", "phone"].indexOf(e) && (a = Base64.encode(a)), LadiPageScript.isArray(a) && a.length > 1 && (a = JSON.stringify(a)), a = encodeURIComponent(a), n += e + "=" + a
            });
        if (!LadiPageScript.isEmpty(n)) {
            var o = LadiPageScript.createTmpElement("a", "", {
                href: a
            });
            o.search = o.search + (LadiPageScript.isEmpty(o.search) ? "?" : "&") + n, a = o.href
        }
        return a = LadiPageScript.getLinkUTMRedirect(a, null), a = LadiPageScript.convertDataReplaceStr(a, !0, null, !1, t)
    }
}, LadiPageLibraryV2.prototype.open_url = function (t, e) {
    if (!LadiPageScript.isEmpty(this.id))
        if (LadiPageScript.runtime.has_popupx) LadiPageScript.runtime.tmp.runActionPopupX({
            url: this.id,
            target: t,
            nofollow: e,
            action: {
                type: "open_url"
            }
        });
        else {
            var i = this.id,
                a = null;
            e && ((a = LadiPageScript.getElementAHref(i, !1))
                .setAttribute("rel", "nofollow"), document.body.appendChild(a)), LadiPageScript.isEmpty(t) || "_self" == t.toLowerCase() ? e ? a.click() : window.location.href = i : e ? (a.setAttribute("target", t), a.click()) : window.open(i, t), e && a.parentElement.removeChild(a)
        }
}, LadiPageLibraryV2.prototype.get_cookie = function () {
    if (!LadiPageScript.isEmpty(this.id)) {
        for (var t = this.id + "=", e = document.cookie.split(";"), i = "", a = 0; a < e.length; a++) {
            for (var n = e[a];
                " " == n.charAt(0);) n = n.substring(1);
            if (0 == n.indexOf(t)) {
                i = n.substring(t.length, n.length);
                break
            }
        }
        return decodeURIComponentLadiPage(i)
    }
}, LadiPageLibraryV2.prototype.delete_cookie = function (t, e) {
    this.set_cookie(null, -3650, t, e, !1)
}, LadiPageLibraryV2.prototype.set_cookie = function (t, e, i, a, n) {
    if (!LadiPageScript.isEmpty(this.id)) {
        var o = "";
        if (n) o = "expires = 0";
        else {
            var r = new Date;
            !LadiPageScript.isNull(e) && e instanceof Date ? r = e : (e = LadiPageScript.isEmpty(e) ? 365 : e, r.setTime(r.getTime() + 24 * e * 60 * 60 * 1e3)), o = "expires = " + r.toUTCString()
        }
        t = LadiPageScript.isEmpty(t) ? "" : t;
        var s = this.id + " = " + t;
        LadiPageScript.isEmpty(o) || (s += "; " + o), LadiPageScript.isEmpty(a) || (s += "; domain = " + a), i = i || window.location.pathname, LadiPageScript.runtime.isIE || (s += "; path = " + i), "https:" == window.location.protocol && (s += "; SameSite = None; secure"), document.cookie = s
    }
}, LadiPageLibraryV2.prototype.submit = function () {
    var t = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) {
        var e = t.querySelector('.ladi-form button[type="submit"]');
        LadiPageScript.isEmpty(e) || e.click()
    }
}, LadiPageLibraryV2.prototype.scroll = function (t, e) {
    var i = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(i))
        if (LadiPageScript.runtime.has_popupx) this.show();
        else {
            t && "none" == getComputedStyle(i)
                .display && this.show();
            for (var a = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), n = 0; n < a.length; n++)
                if (a[n].id != this.id && a[n].hasAttribute("data-popup-backdrop") && "none" != getComputedStyle(a[n])
                    .display) {
                    var o = LadiPageScript.findAncestor(i, "ladi-popup");
                    LadiPageScript.isEmpty(o) || (o = LadiPageScript.findAncestor(o, "ladi-element")), (LadiPageScript.isEmpty(o) || o.id != a[n].id) && (LadiPageScript.runRemovePopup(a[n].id, !0), 100)
                }
            var r = LadiPageScript.isObject(LadiPageScript.runtime.story_page),
                s = function (t, e, i) {
                    LadiPageScript.removeTimeout(LadiPageScript.runtime.tmp.scroll_timeout_id);
                    var a = function (t, e, i, a) {
                            return (t /= a / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
                        },
                        n = 0;
                    n = r ? "left" == t ? e.scrollLeft : e.scrollTop : "left" == t ? e.scrollX : e.scrollY;
                    var o = "left" == t ? window.innerWidth : window.innerHeight,
                        s = i - n;
                    if (0 != s) {
                        var l = s < 0 ? -1 * s : s,
                            d = 0,
                            c = 1e3;
                        c = l <= 4 * o ? 750 : c, c = l <= 2 * o ? 525 : c, c = l <= o ? 300 : c, c = r ? 300 : c;
                        var p = "left" == t ? "scrollLeft" : "scrollTop",
                            u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame,
                            m = null,
                            _ = null,
                            y = function (i) {
                                r ? e[p] = i : "left" == t ? e.scrollTo(i, e.scrollY) : e.scrollTo(e.scrollX, i)
                            };
                        if (u) {
                            var g = Date.now() + c;
                            u(m = function () {
                                d = c - (g - Date.now()), _ = a(d, n, s, c), y(_), d < c ? u(m) : y(i)
                            })
                        } else(m = function () {
                            _ = a(d += 20, n, s, c), y(_), d < c ? LadiPageScript.runtime.tmp.scroll_timeout_id = LadiPageScript.runTimeout(m, 20) : y(i)
                        })()
                    }
                },
                l = function (t) {
                    var e = document.getElementsByClassName("ladi-wraper")[0],
                        a = LadiPageScript.getElementBoundingClientRect(i)
                        .top + (r ? t.scrollTop : t.scrollY);
                    return {
                        scrollTop: a -= parseFloatLadiPage(e.getAttribute("data-scroll-padding-top") || 0) || 0
                    }
                },
                d = null,
                c = null,
                p = null;
            e ? r ? i.scrollIntoView() : (d = l(window), window.scrollTo({
                top: d.scrollTop
            })) : LadiPageScript.runTimeout(function () {
                var t;
                r ? LadiPageScript.runtime.isDesktop || LadiPageScript.runtime.isBrowserDesktop ? i.scrollIntoView({
                    behavior: "smooth"
                }) : (p = document.getElementsByClassName("ladi-wraper")[0], LadiPageScript.runtime.story_page.type == LadiPageScript.const.STORY_PAGE.horizontal && (t = p, c = {
                    scrollLeft: LadiPageScript.getElementBoundingClientRect(i)
                        .left + (r ? t.scrollLeft : t.scrollX)
                }, s("left", p, c.scrollLeft)), LadiPageScript.runtime.story_page.type == LadiPageScript.const.STORY_PAGE.vertical && (d = l(p), s("top", p, d.scrollTop))) : (p = window, d = l(p), LadiPageScript.runtime.isDesktop || LadiPageScript.runtime.isBrowserDesktop ? window.scrollTo({
                    top: d.scrollTop,
                    behavior: "smooth"
                }) : s("top", p, d.scrollTop))
            }, 100)
        }
}, LadiPageLibraryV2.prototype.value = function (t, e, i) {
    var a = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(a)) {
        var n = [],
            o = !1,
            r = 0,
            s = LadiPageScript.isArray(t) ? t : [t],
            l = a.querySelectorAll('.ladi-form-item > [data-is-select-country="true"]');
        if (4 == l.length)
            if (LadiPageScript.isNull(t)) {
                for (r = 0; r < l.length; r++) n.push(l[r].value);
                o = !0
            } else s.forEach(function (t, e) {
                LadiPageScript.isEmpty(l[e]) || (l[e].value = t, LadiPageScript.fireEvent(l[e], "change"))
            });
        else {
            var d = document.querySelectorAll("#" + this.id + " > ." + ["ladi-button .ladi-headline", "ladi-headline", "ladi-paragraph", "ladi-list-paragraph"].join(", #" + this.id + " > .")),
                c = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-item > input", "ladi-form-item-container .ladi-form-item > textarea", "ladi-form-item-container .ladi-form-item > select"].join(", #" + this.id + " > .")),
                p = document.querySelectorAll("#" + this.id + " > ." + ["ladi-form-item-container .ladi-form-checkbox-item > input"].join(", #" + this.id + " > .")),
                u = document.querySelectorAll("#" + this.id + " > .ladi-image .ladi-image-background"),
                m = document.querySelectorAll("#" + this.id + " > .ladi-video"),
                _ = document.querySelectorAll("#" + this.id + " > .ladi-survey > .ladi-survey-option"),
                y = function (t) {
                    var e = [];
                    return LadiPageScript.isArray(t) && t.forEach(function (t) {
                        e.push(t.name)
                    }), e = e.length > 0 ? "[" + e.join(", ") + "]" : ""
                };
            for (r = 0; r < d.length; r++)
                if (LadiPageScript.isNull(t)) LadiPageScript.isObject(i) && i.only_text ? n.push(d[r].innerText) : n.push(d[r].innerHTML);
                else if (d[r].innerHTML = t, !LadiPageScript.isEmpty(e)) {
                var g = LadiPageScript.findAncestor(d[r], "ladi-element");
                LadiPageScript.isEmpty(g) || g.classList.add(e)
            }
            for (r = 0; r < c.length; r++)
                if (LadiPageScript.isNull(t))
                    if (c[r].classList.contains("ladi-form-control-file")) {
                        var f = c[r].getAttribute("data-path-file") || "[]";
                        f = JSON.parse(f), n.push(f)
                    } else n.push(c[r].value);
            else c[r].classList.contains("ladi-form-control-file") ? (c[r].setAttribute("data-path-file", JSON.stringify(t)), c[r].value = y(t)) : (c[r].value = t, "date" == c[r].getAttribute("data-type") && (LadiPageScript.isEmpty(t) ? c[r].setAttribute("type", "text") : c[r].setAttribute("type", "date")));
            var h = !1;
            for (r = 0; r < p.length; r++) LadiPageScript.isNull(t) ? (p[r].checked && n.push(p[r].value), "checkbox" == p[r].getAttribute("type")
                .toLowerCase() && (o = !0)) : (h = !1, "checkbox" == p[r].getAttribute("type")
                .toLowerCase() && -1 != s.indexOf(p[r].value) && (h = !0), "radio" == p[r].getAttribute("type")
                .toLowerCase() && s.length > 0 && s[0] == p[r].value && (h = !0), h ? p[r].checked || p[r].click() : p[r].checked && p[r].click());
            for (r = 0; r < u.length; r++)
                if (LadiPageScript.isNull(t)) {
                    var v = getComputedStyle(u[r])
                        .backgroundImage;
                    (v = v || "")
                    .startsWith('url("') && (v = v.substring('url("'.length)), v.endsWith('")') && (v = v.substring(0, v.length - '")'.length)), n.push(v)
                } else if (LadiPageScript.isEmpty(t)) u[r].style.setProperty("background-image", "none");
            else {
                var E = LadiPageScript.findAncestor(u[r], "ladi-element"),
                    P = LadiPageScript.getOptimizeImage(t, E.clientWidth, E.clientHeight, !0, !1, !1, !0);
                u[r].style.setProperty("background-image", 'url("' + P + '")')
            }
            for (r = 0; r < m.length; r++) {
                var L = LadiPageScript.runtime.eventData[this.id];
                if (LadiPageScript.isNull(t)) LadiPageScript.isEmpty(L) || n.push({
                    type: L["option.video_type"],
                    value: L["option.video_value"]
                });
                else {
                    L["option.video_value"] = t;
                    var A = m[r].getElementsByClassName("iframe-video-preload")[0],
                        b = null;
                    if (L["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.youtube) {
                        var w = "https://img.youtube.com/vi/" + (b = LadiPageScript.getVideoId(L["option.video_type"], t)) + "/hqdefault.jpg",
                            S = m[r].getElementsByClassName("ladi-video-background")[0];
                        LadiPageScript.isEmpty(S) || S.style.setProperty("background-image", 'url("' + w + '")')
                    }
                    if (LadiPageScript.isEmpty(A)) LadiPageScript.playVideo(this.id, L["option.video_type"], L["option.video_value"], L["option.video_control"]);
                    else {
                        LadiPageScript.pauseAllVideo();
                        var T = !1;
                        if (L["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.youtube) {
                            var O = window.YT.get(A.id);
                            !LadiPageScript.isEmpty(O) && LadiPageScript.isFunction(O.loadVideoById) && (O.loadVideoById(b, 0), O.seekTo(0), T = !0)
                        }
                        L["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.direct && LadiPageScript.isFunction(A.play) && (A.src = t, A.currentTime = 0, T = !0), T && LadiPageScript.runEventReplayVideo(A.id, L["option.video_type"], !0)
                    }
                }
            }
            for (r = 0; r < _.length; r++) LadiPageScript.isNull(t) ? (_[r].classList.contains("selected") && n.push(_[r].getAttribute("data-value")), "true" == a.getAttribute("data-multiple") && (o = !0)) : (h = !1, -1 != s.indexOf(_[r].getAttribute("data-value")) && (h = !0), h ? _[r].classList.contains("selected") || _[r].click() : _[r].classList.contains("selected") && _[r].click())
        }
        return o ? n : n.length > 0 ? n[0] : null
    }
}, LadiPageLibraryV2.prototype.top = function () {
    var t = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t) && t.classList.contains("ladi-section")) try {
        var e = t.parentElement.firstChild;
        LadiPageScript.isEmpty(e) || e.id != LadiPageScript.runtime.builder_section_background_id || (e = e.nextElementSibling), t.parentElement.insertBefore(t, e), LadiPageScript.reloadLazyload(!1)
    } catch (t) {}
}, LadiPageLibraryV2.prototype.pause = function () {
    var t = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!LadiPageScript.isEmpty(e) && "video" == e.type) {
            var i = t.querySelector(".iframe-video-preload:not(.no-pause)");
            LadiPageScript.isEmpty(i) || LadiPageScript.runEventReplayVideo(i.id, i.getAttribute("data-video-type"), !1)
        }
    }
}, LadiPageLibraryV2.prototype.play = function () {
    var t = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!LadiPageScript.isEmpty(e) && "video" == e.type) {
            var i = e["option.video_type"],
                a = e["option.video_value"],
                n = e["option.video_control"];
            LadiPageScript.playVideo(this.id, i, a, n)
        }
    }
}, LadiPageLibraryV2.prototype.prevSectionTabs = function () {
    var t = document.querySelectorAll('.ladi-section[data-tab-id="' + this.id + '"]');
    if (0 != t.length)
        for (var e = 0; e < t.length; e++)
            if (t[e].classList.contains("selected")) {
                var i = e - 1;
                i = i < 0 ? 0 : i, this.doc = t[i], this.show();
                break
            }
}, LadiPageLibraryV2.prototype.nextSectionTabs = function () {
    var t = document.querySelectorAll('.ladi-section[data-tab-id="' + this.id + '"]');
    if (0 != t.length)
        for (var e = 0; e < t.length; e++)
            if (t[e].classList.contains("selected")) {
                var i = e + 1;
                i = i >= t.length ? t.length - 1 : i, this.doc = t[i], this.show();
                break
            }
}, LadiPageLibraryV2.prototype.indexSectionTabs = function (t) {
    var e = document.querySelectorAll('.ladi-section[data-tab-id="' + this.id + '"]');
    e.length < t || (this.doc = e[t - 1], this.show())
}, LadiPageLibraryV2.prototype.prev = function () {
    var t = this.doc || document.getElementById(this.id);
    if (LadiPageScript.isEmpty(t)) this.prevSectionTabs();
    else {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!LadiPageScript.isEmpty(e)) {
            var i = null;
            if ("gallery" == e.type && (i = t.querySelector(".ladi-gallery-view-arrow.ladi-gallery-view-arrow-left")), "carousel" == e.type && (i = t.querySelector(".ladi-carousel-arrow.ladi-carousel-arrow-left")), "collection" == e.type && (i = t.querySelector(".ladi-collection-arrow.ladi-collection-arrow-left")), "tabs" == e.type) {
                var a = t.querySelector(".ladi-tabs > .ladi-element.selected[data-index]");
                return LadiPageScript.isEmpty(a) && (a = t.querySelector(".ladi-tabs > .ladi-element")), void(LadiPageScript.isEmpty(a) || LadiPageScript.isEmpty(a.previousElementSibling) || (a.previousElementSibling.classList.add("selected"), a.classList.remove("selected"), LadiPageScript.reloadLazyload(!1)))
            }
            LadiPageScript.isEmpty(i) || i.click()
        }
    }
}, LadiPageLibraryV2.prototype.next = function () {
    var t = this.doc || document.getElementById(this.id);
    if (LadiPageScript.isEmpty(t)) this.nextSectionTabs();
    else {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!LadiPageScript.isEmpty(e)) {
            var i = null;
            if ("gallery" == e.type && (i = t.querySelector(".ladi-gallery-view-arrow.ladi-gallery-view-arrow-right")), "carousel" == e.type && (i = t.querySelector(".ladi-carousel-arrow.ladi-carousel-arrow-right")), "collection" == e.type && (i = t.querySelector(".ladi-collection-arrow.ladi-collection-arrow-right, .ladi-collection-button-next")), "survey" == e.type && (i = t.querySelector(".ladi-survey-button-next button")), "tabs" == e.type) {
                var a = t.querySelector(".ladi-tabs > .ladi-element.selected[data-index]");
                return LadiPageScript.isEmpty(a) && (a = t.querySelector(".ladi-tabs > .ladi-element")), void(LadiPageScript.isEmpty(a) || LadiPageScript.isEmpty(a.nextElementSibling) || (a.nextElementSibling.classList.add("selected"), a.classList.remove("selected"), LadiPageScript.reloadLazyload(!1)))
            }
            LadiPageScript.isEmpty(i) || i.click()
        }
    }
}, LadiPageLibraryV2.prototype.index = function (t) {
    var e = this.doc || document.getElementById(this.id);
    if (LadiPageScript.isEmpty(e)) this.indexSectionTabs(t);
    else {
        var i = LadiPageScript.runtime.eventData[this.id];
        if (!LadiPageScript.isEmpty(i)) {
            var a = 0;
            "gallery" != i.type && "carousel" != i.type || (a = parseFloatLadiPage(e.getAttribute("data-current")) || 0, a += 1), "collection" == i.type && (a = parseFloatLadiPage(e.getAttribute("data-page")) || 1);
            var n = null;
            if ("tabs" == i.type && (n = e.querySelector(".ladi-tabs > .ladi-element.selected[data-index]"), LadiPageScript.isEmpty(n) && (n = e.querySelector(".ladi-tabs > .ladi-element")), LadiPageScript.isEmpty(n) || (a = parseFloatLadiPage(n.getAttribute("data-index")) || 1)), LadiPageScript.isEmpty(t)) return a;
            if ("tabs" != i.type) {
                if ("gallery" != i.type && "carousel" != i.type || (t -= 1, a -= 1), t == a) return "carousel" == i.type && e.setAttribute("data-stop", !0), void("gallery" == i.type && e.hasAttribute("data-loaded") && e.setAttribute("data-stop", !0));
                t > a ? ("gallery" != i.type && "carousel" != i.type || e.setAttribute("data-current", t - 1), "collection" == i.type && e.setAttribute("data-page", t - 1), this.next()) : ("gallery" != i.type && "carousel" != i.type || e.setAttribute("data-current", t + 1), "collection" == i.type && e.setAttribute("data-page", t + 1), this.prev())
            } else {
                var o = e.querySelector('.ladi-tabs > .ladi-element[data-index="' + t + '"]');
                LadiPageScript.isEmpty(o) || (LadiPageScript.isEmpty(n) || n.classList.remove("selected"), o.classList.add("selected"), LadiPageScript.reloadLazyload(!1))
            }
        }
    }
}, LadiPageLibraryV2.prototype.readmore = function () {
    var t = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t)) {
        var e = t.getElementsByClassName("ladi-section-arrow-down")[0];
        LadiPageScript.isEmpty(e) || e.click()
    }
}, LadiPageLibraryV2.prototype.collapse = function (t) {
    var e = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(e) && !e.classList.contains("ladi-section")) {
        var i = e.getElementsByClassName("ladi-popup")[0];
        if (LadiPageScript.isEmpty(i)) {
            var a = LadiPageScript.isNull(t),
                n = document.querySelector(["#" + this.id + " > .ladi-headline", "#" + this.id + " > .ladi-paragraph", "#" + this.id + " > .ladi-list-paragraph"].join(", ")),
                o = LadiPageScript.isEmpty(n),
                r = 0,
                s = 0,
                l = null,
                d = this,
                c = function (t) {
                    var i = LadiPageScript.findAncestor(e.parentElement, "ladi-element");
                    LadiPageScript.isEmpty(i) && (i = LadiPageScript.findAncestor(e.parentElement, "ladi-section")), o || (t = !1), LadiPageScript.runtime.list_collapse[d.id] = LadiPageScript.updateHeightElement(!0, e, i, r, s, t, LadiPageScript.runtime.list_collapse[d.id])
                };
            if ("none" == getComputedStyle(e)
                .display) {
                if (a || t)
                    if (a && o) {
                        if (l = parseFloatLadiPage(e.getAttribute("data-timeout-id")) || null, !LadiPageScript.isEmpty(l)) return;
                        e.classList.remove("height-0"), e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), d.show(), s = parseFloatLadiPage(getComputedStyle(e)
                            .height) || 0, e.classList.add("overflow-hidden"), e.classList.add("height-0"), l = LadiPageScript.runTimeout(function () {
                            e.classList.add("transition-collapse"), e.classList.remove("height-0"), l = LadiPageScript.runTimeout(function () {
                                e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), e.removeAttribute("data-timeout-id")
                            }, 1e3 * parseFloatLadiPage(getComputedStyle(e)
                                .transitionDuration)), e.setAttribute("data-timeout-id", l), c(!0)
                        }, 100), e.setAttribute("data-timeout-id", l)
                    } else d.show(), s = parseFloatLadiPage(getComputedStyle(e)
                        .height) || 0, c()
            } else if (a || !t)
                if (a && o) {
                    if (l = parseFloatLadiPage(e.getAttribute("data-timeout-id")) || null, !LadiPageScript.isEmpty(l)) return;
                    e.classList.remove("height-0"), e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), r = parseFloatLadiPage(getComputedStyle(e)
                        .height) || 0, e.classList.add("overflow-hidden"), l = LadiPageScript.runTimeout(function () {
                        e.classList.add("transition-collapse"), e.classList.add("height-0"), l = LadiPageScript.runTimeout(function () {
                            e.classList.remove("overflow-hidden"), e.classList.remove("transition-collapse"), e.classList.remove("height-0"), e.removeAttribute("data-timeout-id"), d.hide()
                        }, 1e3 * parseFloatLadiPage(getComputedStyle(e)
                            .transitionDuration)), e.setAttribute("data-timeout-id", l), c(!0)
                    }, 100), e.setAttribute("data-timeout-id", l)
                } else r = parseFloatLadiPage(getComputedStyle(e)
                    .height) || 0, d.hide(), c()
        }
    }
}, LadiPageLibraryV2.prototype.hide = function (t) {
    var e = this,
        i = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(i)) {
        var a = !1;
        if (0 == i.getElementsByClassName("ladi-popup")
            .length) {
            if (LadiPageScript.runtime.has_popupx && i.classList.contains("ladi-section") && "none" != getComputedStyle(i)
                .display && (a = !0), i.style.setProperty("display", "none", "important"), LadiPageScript.reloadLazyload(!1), !t && a) {
                LadiPageScript.runtime.tmp.runActionPopupX({
                    id: this.id,
                    dimension: {
                        display: "none"
                    },
                    action: {
                        type: "set_iframe_dimension"
                    }
                })
            }
        } else LadiPageScript.runRemovePopup(this.id, !0, function () {
            for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), i = 0; i < t.length; i++) t[i].id != e.id && t[i].hasAttribute("data-popup-backdrop") && "none" != getComputedStyle(t[i])
                .display && LadiPageScript.runRemovePopup(t[i].id, !0)
        });
        e.hideDropbox()
    }
}, LadiPageLibraryV2.prototype.show = function (t) {
    var e = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(e)) {
        if (e.classList.contains("ladi-section")) {
            var i = e.getAttribute("data-tab-id");
            if (!LadiPageScript.isEmpty(i))
                for (var a = document.querySelectorAll('.ladi-section[data-tab-id="' + i + '"]'), n = 0; n < a.length; n++) a[n].id == e.id ? a[n].classList.add("selected") : (a[n].classList.remove("selected"), window.ladi(a[n].id)
                    .hide())
        }
        var o = this,
            r = function () {
                if (LadiPageScript.isObject(LadiPageScript.runtime.eventData)) {
                    var t = LadiPageScript.runtime.eventData[o.id];
                    LadiPageScript.isEmpty(t) || LadiPageScript.startAutoScroll(o.id, t.type, t[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], t[LadiPageScript.const.MOBILE + ".option.auto_scroll"]);
                    for (var i = e.getElementsByClassName("ladi-element"), a = 0; a < i.length; a++) {
                        var n = LadiPageScript.runtime.eventData[i[a].id];
                        LadiPageScript.isEmpty(n) || LadiPageScript.startAutoScroll(i[a].id, n.type, n[LadiPageScript.const.DESKTOP + ".option.auto_scroll"], n[LadiPageScript.const.MOBILE + ".option.auto_scroll"])
                    }
                }
            },
            s = function () {
                for (var t = e.getElementsByClassName("ladi-element"), i = -1; i < t.length; i++) {
                    var a = -1 == i ? e : t[i];
                    "true" == a.getAttribute("data-sticky") && (a.removeAttribute("data-top"), a.removeAttribute("data-left"), a.removeAttribute("data-sticky"), a.style.removeProperty("top"), a.style.removeProperty("left"), a.style.removeProperty("width"), a.style.removeProperty("position"), a.style.removeProperty("z-index"))
                }
                LadiPageScript.runEventScroll()
            };
        if (t) {
            e.getElementsByClassName("ladi-popup")
                .length > 0 ? (LadiPageScript.runShowPopup(!1, this.id, null, null, !0, function () {
                    for (var t = document.querySelectorAll("#" + LadiPageScript.runtime.builder_section_popup_id + " .ladi-container > .ladi-element"), e = 0; e < t.length; e++) t[e].id != o.id && t[e].hasAttribute("data-popup-backdrop") && "none" != getComputedStyle(t[e])
                        .display && LadiPageScript.runRemovePopup(t[e].id, !0)
                }), LadiPageScript.removeLazyloadPopup(this.id), r(), s(), LadiPageScript.runResizeSectionBackground()) : (e.style.setProperty("display", "block", "important"), r(), s(), LadiPageScript.runResizeSectionBackground(), LadiPageScript.reloadLazyload(!1))
        } else {
            if (LadiPageScript.runtime.has_popupx && LadiPageScript.runtime.tmp.showPopupX(e.id, !0)) return;
            o.show(!0)
        }
    }
}, LadiPageLibraryV2.prototype.showDropbox = function (t, e, i) {
    var a = this.doc || document.getElementById(this.id);
    if (!(LadiPageScript.isEmpty(a) || "true" != a.getAttribute("data-dropbox") || i && a.getAttribute("data-from-doc-id") == t.id && "true" != a.getAttribute("data-dropbox-backdrop") && "block" == getComputedStyle(a)
            .display)) {
        a.classList.add("opacity-0"), this.show(), a.style.removeProperty("display"), a.style.removeProperty("top"), a.style.removeProperty("left"), a.style.removeProperty("bottom"), a.style.removeProperty("right"), LadiPageScript.isObject(e) || (e = {}), e.padding = parseFloatLadiPage(e.padding) || 0, e.animation_duration = parseFloatLadiPage(e.animation_duration) || 0, t.insertBefore(a, t.firstChild), a.setAttribute("data-from-doc-id", t.id), a.setAttribute("data-style", a.getAttribute("style") || ""), LadiPageScript.isEmpty(a.getAttribute("data-style")) && a.removeAttribute("data-style"), t.setAttribute("data-style", t.getAttribute("style") || ""), LadiPageScript.isEmpty(t.getAttribute("data-style")) && t.removeAttribute("data-style");
        var n = a.getElementsByClassName("ladi-popup")[0];
        LadiPageScript.isEmpty(n) || (n.setAttribute("data-style", n.getAttribute("style") || ""), LadiPageScript.isEmpty(n.getAttribute("data-style")) && n.removeAttribute("data-style"));
        var o = LadiPageScript.getElementBoundingClientRect(t),
            r = LadiPageScript.getElementBoundingClientRect(a),
            s = "";
        e.position != LadiPageScript.const.TOOLTIP_POSITION.top_left && e.position != LadiPageScript.const.TOOLTIP_POSITION.top_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.top_right || (a.style.setProperty("top", "auto"), a.style.setProperty("bottom", o.height + e.padding + "px"), e.padding > 0 && (s += 'content: ""; position: absolute; width: 100%; height: ' + e.padding + "px; bottom: " + -e.padding + "px; left: 0;")), e.position == LadiPageScript.const.TOOLTIP_POSITION.top_middle && a.style.setProperty("left", (o.width - r.width) / 2 + "px"), e.position == LadiPageScript.const.TOOLTIP_POSITION.top_right && (a.style.setProperty("left", "auto"), a.style.setProperty("right", "0")), e.position != LadiPageScript.const.TOOLTIP_POSITION.bottom_left && e.position != LadiPageScript.const.TOOLTIP_POSITION.bottom_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.bottom_right || (a.style.setProperty("bottom", "auto"), a.style.setProperty("top", o.height + e.padding + "px"), e.padding > 0 && (s += 'content: ""; position: absolute; width: 100%; height: ' + e.padding + "px; top: " + -e.padding + "px; left: 0;")), e.position == LadiPageScript.const.TOOLTIP_POSITION.bottom_middle && a.style.setProperty("left", (o.width - r.width) / 2 + "px"), e.position == LadiPageScript.const.TOOLTIP_POSITION.bottom_right && (a.style.setProperty("left", "auto"), a.style.setProperty("right", "0")), e.position != LadiPageScript.const.TOOLTIP_POSITION.left_top && e.position != LadiPageScript.const.TOOLTIP_POSITION.left_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.left_bottom || (a.style.setProperty("left", "auto"), a.style.setProperty("right", o.width + e.padding + "px"), e.padding > 0 && (s += 'content: ""; position: absolute; width: ' + e.padding + "px; height: 100%; top: 0; right: " + -e.padding + "px;")), e.position == LadiPageScript.const.TOOLTIP_POSITION.left_top && a.style.setProperty("bottom", "auto"), e.position == LadiPageScript.const.TOOLTIP_POSITION.left_bottom && a.style.setProperty("top", "auto"), e.position != LadiPageScript.const.TOOLTIP_POSITION.right_top && e.position != LadiPageScript.const.TOOLTIP_POSITION.right_middle && e.position != LadiPageScript.const.TOOLTIP_POSITION.right_bottom || (a.style.setProperty("right", "auto"), a.style.setProperty("left", o.width + e.padding + "px"), e.padding > 0 && (s += 'content: ""; position: absolute; width: ' + e.padding + "px; height: 100%; top: 0; left: " + -e.padding + "px;")), e.position == LadiPageScript.const.TOOLTIP_POSITION.right_top && a.style.setProperty("bottom", "auto"), e.position == LadiPageScript.const.TOOLTIP_POSITION.right_bottom && a.style.setProperty("top", "auto"), a.style.setProperty("z-index", "90000090"), "fixed" == getComputedStyle(t)
            .position && t.style.setProperty("z-index", "90000090");
        var l = "dropbox-" + a.id;
        if (i && !LadiPageScript.isEmpty(s)) s = "#" + a.id + ":before {" + s + "}", LadiPageScript.createStyleElement(l, s);
        else {
            var d = document.getElementById(l);
            LadiPageScript.isEmpty(d) || d.parentElement.removeChild(d)
        }
        if (i) a.removeAttribute("data-dropbox-backdrop");
        else a.setAttribute("data-dropbox-backdrop", !0), document.getElementById(LadiPageScript.runtime.backdrop_dropbox_id)
            .style.setProperty("display", "block");
        LadiPageScript.isEmpty(e.animation_name) || LadiPageScript.isEmpty(n) || (n.style.setProperty("animation-name", e.animation_name), n.style.setProperty("-webkit-animation-name", e.animation_name), n.style.setProperty("animation-duration", e.animation_duration + "s"), n.style.setProperty("-webkit-animation-duration", e.animation_duration + "s")), a.classList.remove("opacity-0")
    }
}, LadiPageLibraryV2.prototype.hideDropbox = function () {
    var t = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(t) && "true" == t.getAttribute("data-dropbox")) {
        t.setAttribute("style", t.getAttribute("data-style") || ""), t.removeAttribute("data-style");
        var e = document.getElementById(t.getAttribute("data-from-doc-id"));
        LadiPageScript.isEmpty(e) || (e.setAttribute("style", e.getAttribute("data-style") || ""), e.removeAttribute("data-style"));
        var i = t.getElementsByClassName("ladi-popup")[0];
        LadiPageScript.isEmpty(i) || i.setAttribute("style", i.getAttribute("data-style") || "");
        var a = "dropbox-" + t.id,
            n = document.getElementById(a);
        LadiPageScript.isEmpty(n) || n.parentElement.removeChild(n);
        for (var o = t.querySelectorAll('[data-dropbox-backdrop="true"]'), r = 0; r < o.length; r++) window.ladi(o[r].id)
            .hide();
        if (t.removeAttribute("data-dropbox-backdrop"), 0 == (o = document.querySelectorAll('[data-dropbox-backdrop="true"]'))
            .length) document.getElementById(LadiPageScript.runtime.backdrop_dropbox_id)
            .style.removeProperty("display");
        document.querySelector("#" + LadiPageScript.runtime.builder_section_popup_id + " > .ladi-container")
            .appendChild(t)
    }
}, LadiPageLibraryV2.prototype.toggle = function (t) {
    var e = this.doc || document.getElementById(this.id);
    LadiPageScript.isEmpty(e) || ("none" == getComputedStyle(e)
        .display ? this.show(t) : this.hide(t))
}, LadiPageLibraryV2.prototype.set_style = function (t, e, i) {
    var a = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(a)) {
        var n = "set-style-" + t.id + "-" + a.id + "-" + e.action_type,
            o = "set-style-" + t.id + "-" + a.id + "-" + e.action_type + "-transition",
            r = document.getElementById(i ? o : n);
        if (LadiPageScript.isEmpty(r)) {
            var s = {};
            LadiPageScript.isEmpty(e.color) || (s.color = e.color), LadiPageScript.isEmpty(e.background_color) || (s.background = "none", s["background-color"] = e.background_color), LadiPageScript.isEmpty(e.border_color) || (s["border-color"] = e.border_color), LadiPageScript.isEmpty(e.opacity) || (s.opacity = e.opacity / 100), LadiPageScript.isEmpty(e.transform_scale) || (s.transform = "scale(" + e.transform_scale / 100 + ")"), e.ontop && (s["z-index"] = "9000000090 !important"), LadiPageScript.isObject(e.custom_css) && Object.keys(e.custom_css)
                .forEach(function (t) {
                    s[t] = e.custom_css[t]
                });
            var l = [],
                d = "",
                c = "",
                p = "",
                u = "",
                m = "",
                _ = "",
                y = !1;
            Object.keys(s)
                .forEach(function (t) {
                    "z-index" != t.toLowerCase() ? "background" == t.toLowerCase() || t.toLowerCase()
                        .startsWith("background-") ? p += t + ": " + s[t] + ";" : "color" == t.toLowerCase() || "font" == t.toLowerCase() || t.toLowerCase()
                        .startsWith("font-") || t.toLowerCase()
                        .startsWith("text-") || t.toLowerCase()
                        .startsWith("line-") ? u += t + ": " + s[t] + ";" : c += t + ": " + s[t] + ";" : _ += t + ": " + s[t] + ";"
                });
            var g = function (t) {
                for (var e = !1, o = 0; o < l.length; o++) {
                    var r = l[o];
                    if (LadiPageScript.isEmpty(r)) {
                        i && (y || (m += "#" + a.id + " {transition: all 150ms linear 0s;}")), d += "#" + a.id + "." + n + " {" + t + "}", e = !0;
                        break
                    }
                    if (document.querySelectorAll("#" + a.id + " > " + r)
                        .length > 0) {
                        i && (m += "#" + a.id + " > " + r + " {transition: all 150ms linear 0s;}"), d += "#" + a.id + "." + n + " > " + r + " {" + t + "}", e = !0;
                        break
                    }
                }
                return e
            };
            if (!LadiPageScript.isEmpty(u)) {
                var f = function (t) {
                    t = LadiPageScript.isEmpty(t) ? "" : "." + t;
                    var e = "";
                    return e += "#" + a.id + t + ", ", e += "#" + a.id + t + " .ladi-headline, ", e += "#" + a.id + t + " .ladi-paragraph, ", e += "#" + a.id + t + " .ladi-list-paragraph"
                };
                document.querySelectorAll(f())
                    .length > 0 && (i && (y = !0, m += f() + " {transition: all 150ms linear 0s;}"), d += f(n) + " {" + u + "}")
            }
            LadiPageScript.isEmpty(p) || (l = [".ladi-section-background", ".ladi-popup .ladi-popup-background", ".ladi-button .ladi-button-background", ".ladi-box", ".ladi-video .ladi-video-background", ".ladi-form .ladi-form-item-background", ".ladi-frame .ladi-frame-background", ".ladi-survey .ladi-survey-option-background", ".ladi-combobox .ladi-combobox-item-background", ".ladi-countdown .ladi-countdown-background", ".ladi-notify"], g(p) || (c += p)), LadiPageScript.isEmpty(c) || (l = [".ladi-group", ".ladi-popup", ".ladi-image", ".ladi-gallery", ".ladi-button", ".ladi-button-group", ".ladi-headline", ".ladi-paragraph", ".ladi-list-paragraph", ".ladi-line", ".ladi-box", ".ladi-collection", ".ladi-tabs", ".ladi-shape", ".ladi-video", ".ladi-form", ".ladi-carousel", ".ladi-html-code", ".ladi-frame", ".ladi-table", ".ladi-survey", ".ladi-combobox", ".ladi-countdown", ".ladi-notify", ".ladi-spin-lucky"], g(c) || (_ += c)), LadiPageScript.isEmpty(_) || (l = [""], g(_)), i ? LadiPageScript.createStyleElement(o, m) : LadiPageScript.createStyleElement(n, d)
        }
        i || a.classList.add(n)
    }
}, LadiPageLibraryV2.prototype.remove_style = function (t, e) {
    var i = this.doc || document.getElementById(this.id);
    if (!LadiPageScript.isEmpty(i)) {
        var a = "set-style-" + t.id + "-" + i.id + "-" + e.action_type;
        i.classList.remove(a);
        var n = document.getElementById(a);
        LadiPageScript.isEmpty(n) || n.parentElement.removeChild(n)
    }
}, LadiPageLibraryV2.prototype.element = function () {
    return this.doc || document.getElementById(this.id)
}, ["start", "add_turn"].forEach(function (t) {
    LadiPageLibraryV2.prototype[t] = function () {
        var e = LadiPageScript.runtime.eventData[this.id];
        if (!LadiPageScript.isEmpty(e)) {
            var i = LadiPageApp[e.type + LadiPageScript.const.APP_RUNTIME_PREFIX];
            if (!LadiPageScript.isEmpty(i)) {
                var a = i(e, !0);
                LadiPageScript.isFunction(a[t]) && a[t](this.id)
            }
        }
    }
});
var LadiPageAppV2, ladi = ladi || function (t, e) {
        if (!LadiPageScript.isEmpty(t)) {
            var i = new LadiPageLibraryV2;
            return i.id = t, i.doc = e, i
        }
    },
    ladi_fbq = function (t, e, i, a) {
        if (LadiPageScript.isFunction(window.fbq)) {
            if (LadiPageScript.isObject(window.ladi_conversion_api) && LadiPageScript.isObject(window.ladi_conversion_api.facebook) && LadiPageScript.isArray(window.ladi_conversion_api.facebook.pixels)) {
                LadiPageScript.isObject(a) || (a = {});
                a.eventID = "ladi." + Date.now() + "." + (Math.floor(9e10 * Math.random()) + 1e10)
            }
            window.fbq(t, e, i, a), LadiPageScript.runConversionApi("facebook", "events", [{
                key: t,
                name: e,
                custom_data: i,
                data: a
            }])
        }
    };
LadiPageScript.isArray(window.ladi_fbq_data) && (window.ladi_fbq_data.forEach(function (t) {
        ladi_fbq(t[0], t[1], t[2], t[3])
    }), delete window.ladi_fbq_data), (LadiPageAppV2 = LadiPageAppV2 || function () {})
    .prototype.notify_runtime = function (t, e) {
        var i = function () {},
            a = "top_left",
            n = "top_center",
            o = "top_right",
            r = "bottom_left",
            s = "bottom_center",
            l = "bottom_right";
        return i.prototype.run = function (e, i) {
            LadiPageScript.isObject(LadiPageScript.runtime.tmp.timeout_notify) || (LadiPageScript.runtime.tmp.timeout_notify = {});
            var d = t["option.sheet_id"],
                c = t.dataset_value,
                p = document.getElementById(e);
            if (p.classList.add("ladi-hidden"), !LadiPageScript.isEmpty(d) || !LadiPageScript.isEmpty(c)) {
                var u = i ? LadiPageScript.const.DESKTOP : LadiPageScript.const.MOBILE,
                    m = t[u + ".option.position"],
                    _ = 1e3 * (parseFloatLadiPage(t["option.time_show"]) || 5),
                    y = 1e3 * (parseFloatLadiPage(t["option.time_delay"]) || 10);
                y = y < 501 ? 501 : y;
                var g = "https://w.ladicdn.com/source/notify.svg",
                    f = [{
                        key: "gsx$title",
                        className: ".ladi-notify-title"
                    }, {
                        key: "gsx$content",
                        className: ".ladi-notify-content"
                    }, {
                        key: "gsx$time",
                        className: ".ladi-notify-time"
                    }, {
                        key: "gsx$image",
                        className: ".ladi-notify-image img"
                    }];
                p.classList.remove("ladi-hidden");
                var h = function () {
                    p.style.setProperty("opacity", 0), m != a && m != n && m != o || p.style.setProperty("top", -p.clientHeight - 100 + "px"), m != r && m != s && m != l || p.style.setProperty("bottom", -p.clientHeight - 100 + "px")
                };
                h(), f.forEach(function (t) {
                    "gsx$image" == t.key ? p.querySelectorAll(t.className)[0].src = g : p.querySelectorAll(t.className)[0].textContent = ""
                });
                var v = function (t) {
                        t = t.sort(function () {
                            return .5 - Math.random()
                        });
                        var i = -1,
                            d = function () {
                                if (i + 1 < t.length) {
                                    var c = t[++i],
                                        u = Object.keys(c);
                                    p.style.removeProperty("opacity"), m != a && m != n && m != o || p.style.removeProperty("top"), m != r && m != s && m != l || p.style.removeProperty("bottom"), f.forEach(function (t) {
                                        -1 != u.indexOf(t.key) && ("gsx$image" == t.key ? p.querySelectorAll(t.className)[0].src = LadiPageScript.isEmpty(c[t.key].$t) ? g : c[t.key].$t : p.querySelectorAll(t.className)[0].textContent = c[t.key].$t)
                                    });
                                    var E = function () {
                                        var a = f.findIndex(function (t) {
                                            return "gsx$image" == t.key
                                        });
                                        if (-1 != a) {
                                            var n = t[i + 1 >= t.length ? 0 : i + 1];
                                            n.hasOwnProperty(f[a].key) && (p.querySelectorAll(f[a].className)[0].src = LadiPageScript.isEmpty(n[f[a].key].$t) ? g : n[f[a].key].$t)
                                        }
                                        LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(d, y - 500)
                                    };
                                    LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(function () {
                                        h(), LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(E, 500)
                                    }, _)
                                } else v(t)
                            };
                        LadiPageScript.runtime.tmp.timeout_notify[e] = LadiPageScript.runTimeout(d, y)
                    },
                    E = function (t) {
                        p.querySelector(".ladi-notify")
                            .classList.remove("ladi-hidden"), p.classList.add("ladi-notify-transition"), v(t)
                    };
                LadiPageScript.isEmpty(c) || E(c), LadiPageScript.isEmpty(d) || LadiPageScript.sendRequest("GET", "https://docs.google.com/spreadsheets/d/" + d + "/gviz/tq?tqx=out:json", null, !0, null, function (t, e, i) {
                    if (i.readyState == XMLHttpRequest.DONE && 200 == e) {
                        t = (t = t.substr(t.indexOf('"table":{') + '"table":'.length))
                            .substr(0, t.indexOf("});"));
                        var a = JSON.parse(t),
                            n = [],
                            o = a.cols;
                        LadiPageScript.isObject(a) && 0 == a.parsedNumHeaders && LadiPageScript.isArray(a.rows) && a.rows.length > 0 && LadiPageScript.isObject(a.rows[0]) && LadiPageScript.isArray(a.rows[0].c) && a.rows[0].c.length > 0 && (o = [], a.rows[0].c.forEach(function (t) {
                            o.push({
                                label: LadiPageScript.isObject(t) ? t.v : ""
                            })
                        }), a.rows.shift()), LadiPageScript.isObject(a) && LadiPageScript.isArray(a.rows) && LadiPageScript.isArray(o) && a.rows.forEach(function (t) {
                            if (LadiPageScript.isObject(t)) {
                                var e = {};
                                o.forEach(function (i, a) {
                                    if (LadiPageScript.isArray(t.c)) {
                                        var n = t.c[a];
                                        LadiPageScript.isObject(i) && !LadiPageScript.isEmpty(i.label) && LadiPageScript.isObject(n) && (e["gsx$" + i.label.trim()
                                            .toLowerCase()] = {
                                            $t: n.v
                                        })
                                    }
                                }), n.push(e)
                            }
                        }), E(n)
                    }
                })
            }
        }, new i
    }, (LadiPageAppV2 = LadiPageAppV2 || function () {})
    .prototype.spinlucky_runtime = function (t, e) {
        var i = function () {},
            a = function (t) {
                return parseFloatLadiPage(window.ladi("_total_turn_" + t)
                    .get_cookie()) || 0
            };
        return i.prototype.getEventTrackingCategory = function () {
            return "LadiPageFinish"
        }, i.prototype.run = function (e, i) {
            var n = t["option.spinlucky_setting.list_value"],
                o = t.dataset_value,
                r = t["option.spinlucky_setting.result_popup_id"],
                s = t["option.spinlucky_setting.result_message"],
                l = t["option.spinlucky_setting.max_turn"],
                d = a(e);
            if (!LadiPageScript.isEmpty(n) || !LadiPageScript.isEmpty(o)) {
                n = n || o, LadiPageScript.setDataReplaceStr("spin_turn_left", l - d);
                var c = document.getElementById(e),
                    p = c.getElementsByClassName("ladi-spin-lucky-start")[0],
                    u = c.getElementsByClassName("ladi-spin-lucky-screen")[0],
                    m = "";
                n.forEach(function (t, e) {
                    var i = Base64.decode(t)
                        .split("|");
                    if (3 == i.length) {
                        var a = 360 / n.length * e + 180 / n.length,
                            o = "rotate(" + (a *= -1) + "deg) translateY(-50%)";
                        m += '<div class="ladi-spin-lucky-label" style="transform: ' + o + "; -webkit-transform: " + o + ';">' + decodeURIComponentLadiPage(i[1].trim()) + "</div>"
                    }
                }), u.innerHTML = m;
                var _ = !1;
                p.addEventListener("click", function (t) {
                    if (t.stopPropagation(), !_)
                        if ((d = a(e)) >= l) LadiPageScript.showMessage(LadiPageScript.const.LANG.GAME_MAX_TURN_MESSAGE.format(l));
                        else {
                            _ = !0;
                            var i = [],
                                o = 0,
                                c = 1;
                            n.forEach(function (t, e) {
                                var a = Base64.decode(t)
                                    .split("|"),
                                    n = decodeURIComponentLadiPage(a[0].trim()),
                                    r = decodeURIComponentLadiPage(a[1].trim()),
                                    s = parseFloatLadiPage(decodeURIComponentLadiPage(a[2].trim())) || 0;
                                i.push({
                                    min: c,
                                    max: c + s - 1,
                                    value: n,
                                    text: r,
                                    percent: s,
                                    index: e
                                }), c += s, o += s
                            });
                            for (var p = LadiPageScript.randomInt(1, o), m = null, y = 0; y < i.length; y++)
                                if (i[y].min <= p && i[y].max >= p) {
                                    m = i[y];
                                    break
                                }
                            if (LadiPageScript.isEmpty(m)) _ = !1;
                            else {
                                var g = parseFloatLadiPage(u.getAttribute("data-rotate")) || 0,
                                    f = m.index * (360 / i.length) + 360 * (4 + Math.ceil(g / 360)) + 180 / i.length,
                                    h = "rotate(" + f + "deg)";
                                u.setAttribute("data-rotate", f), u.style.setProperty("transform", h), u.style.setProperty("-webkit-transform", h), "NEXT_TURN" != m.value.toUpperCase() && (d++, window.ladi("_total_turn_" + e)
                                    .set_cookie(d, 1));
                                LadiPageScript.runTimeout(function () {
                                    "NEXT_TURN" == m.value.toUpperCase() ? LadiPageScript.isEmpty(m.text) || LadiPageScript.showMessage(m.text) : (LadiPageScript.setDataReplaceStr("coupon", m.value), LadiPageScript.setDataReplaceStr("coupon_code", m.value), LadiPageScript.setDataReplaceStr("coupon_text", m.text), LadiPageScript.setDataReplaceStr("spin_turn_left", l - d), LadiPageScript.setDataReplaceElement(!0, !1, null, null, ["coupon", "coupon_code", "coupon_text", "spin_turn_left"]), r == LadiPageScript.const.GAME_RESULT_TYPE.default ? LadiPageScript.isEmpty(s) || LadiPageScript.showMessage(s) : window.ladi(r)
                                        .show(), LadiPageScript.runEventTracking(e, !1)), _ = !1
                                }, 1e3 * parseFloatLadiPage(getComputedStyle(u)
                                    .transitionDuration) + 1e3)
                            }
                        }
                })
            }
        }, i.prototype.start = function (t) {
            var e = document.getElementById(t);
            if (!LadiPageScript.isEmpty(e) && e.getElementsByClassName("ladi-spin-lucky")
                .length > 0) {
                var i = e.getElementsByClassName("ladi-spin-lucky-start")[0];
                LadiPageScript.isEmpty(i) || i.click()
            }
        }, i.prototype.add_turn = function (e) {
            var i = t["option.spinlucky_setting.max_turn"],
                n = a(e);
            n > 0 && n--, window.ladi("_total_turn_" + e)
                .set_cookie(n, 1), LadiPageScript.setDataReplaceStr("spin_turn_left", i - n), LadiPageScript.setDataReplaceElement(!1)
        }, new i
    };
LadiPageScript.runtime.lang = "vi", LadiPageScript.const.LANG = {
    ALERT_TITLE: "Alert",
    ALERT_BUTTON_TEXT: "OK",
    COPIED: "Copied!",
    PASTED: "Pasted!",
    FALIED: "Failed!",
    OPTION_NO_SELECT: "Không chọn",
    OPTION_TRUE: "Có",
    OPTION_FALSE: "Không",
    REQUEST_SEND_ERROR: "Đã xảy ra lỗi, vui lòng thử lại!",
    FORM_LOGIN_SEND_ERROR: "Mã của bạn không đúng hoặc đã hết hạn!",
    FORM_SEND_DATA_NO_CONFIG: "Vui lòng kiểm tra lại cấu hình Form!",
    FORM_UPLOAD_FILE_MAX_SIZE_ERROR: "Bạn chỉ được upload file tổng dung lượng tối đa !::max_size::!MB.",
    FORM_UPLOAD_FILE_MAX_LENGTH_ERROR: "Bạn chỉ được upload tối đa !::max_length::! file.",
    FORM_CAPTCHA_ERROR: "Vui lòng xác minh rằng bạn không phải người máy!",
    FORM_CAPTCHA_LOADING: "Vui lòng chờ xác minh rằng bạn không phải người máy!",
    FORM_THANKYOU_MESSAGE_DEFAULT: "Cảm ơn bạn đã quan tâm!",
    FORM_INPUT_REQUIRED_ERROR: "Vui lòng nhập đầy đủ các trường thông tin!",
    FORM_INPUT_EMAIL_REGEX: "Vui lòng nhập đúng định dạng email!",
    FORM_INPUT_TEXT_REGEX: "Vui lòng nhập đúng định dạng!",
    PRODUCT: "Sản phẩm",
    SERVICE: "Dịch vụ",
    TICKET: "Vé",
    ADD_TO_CART_QUANTITY_REQUIRED: "Vui lòng nhập số lượng!",
    ADD_TO_CART_NO_PRODUCT: "Không tìm thấy thông tin !::name::!, vui lòng thử lại sau!",
    ADD_TO_CART_PRODUCT_REQUIRED: "Vui lòng chọn !::name::!!",
    ADD_TO_CART_NO_QUANTITY: "!::name::! đã hết số lượng!",
    ADD_TO_CART_MAX_QUANTITY: "Bạn chỉ được mua tối đa !::max::! !::name::!.",
    ADD_TO_CART_PRODUCT_BEFORE_START_DATE: "Chưa đến thời gian mở bán !::name::!!",
    ADD_TO_CART_PRODUCT_AFTER_END_DATE: "Thời gian mua !::name::! đã hết!",
    ADD_TO_CART_PRODUCT_ONLY_ONE: "Bạn chỉ được mua 1 !::name::! cùng lúc.",
    GAME_RESULT_MESSAGE: "Chúc mừng bạn nhận được !::coupon_text::!. Nhập mã: !::coupon_code::! để sử dụng. Bạn còn !::spin_turn_left::! lượt quay.",
    GAME_MAX_TURN_MESSAGE: "Bạn đã hết lượt quay.",
    HIDE_ELEMENT: "Ẩn phần tử",
    SHOW_ELEMENT: "Hiện phần tử",
    TOP_ELEMENT: "Kéo Section lên đầu",
    SCROLL_ELEMENT: "Kéo tới Section",
    SET_COOKIE: "Thiết lập Cookie"
};
document.getElementsByClassName("nut")[0].onclick = function() {myFunction()};

function myFunction(button) {
  document.getElementsByClassName("danhsach")[0].classList.toggle("zoomra");
  button = document.getElementsByClassName("nut")[0];
  if (button.innerHTML == "Menu") {
      button.innerHTML = "X";
  } else if (button.innerHTML == "X") {
      button.innerHTML = "Menu";
  } else {
      null
  }
}


