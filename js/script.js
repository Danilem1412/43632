"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}$(".send-form").click((function(){var t=$(this).closest("form");if(t.valid()){var e=t.attr("action");$.ajax({url:e,type:"POST",dataType:"html",data:t.serialize(),success:function(e){t.html(e),$(".status__text").html("Messege has been send")},error:function(){$(".status__text").html("Server error")}}),$(".status").addClass("open"),$("body").addClass("lock"),$(document).mouseup((function(t){$(".status__content").is(t.target)||$(".close").is(t.target)||($(".status").removeClass("open"),$("body").removeClass("lock"))})),$(".close").click((function(){$(".status").removeClass("open"),$("body").removeClass("lock")}))}})),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?t(require("jquery")):t(jQuery)}((function(t){var e,i=navigator.userAgent,n=/iphone/i.test(i),r=/chrome/i.test(i),s=/android/i.test(i);t.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},t.fn.extend({caret:function(t,e){var i;if(0!==this.length&&!this.is(":hidden")&&this.get(0)===document.activeElement)return"number"==typeof t?(e="number"==typeof e?e:t,this.each((function(){this.setSelectionRange?this.setSelectionRange(t,e):this.createTextRange&&((i=this.createTextRange()).collapse(!0),i.moveEnd("character",e),i.moveStart("character",t),i.select())}))):(this[0].setSelectionRange?(t=this[0].selectionStart,e=this[0].selectionEnd):document.selection&&document.selection.createRange&&(i=document.selection.createRange(),t=0-i.duplicate().moveStart("character",-1e5),e=t+i.text.length),{begin:t,end:e})},unmask:function(){return this.trigger("unmask")},mask:function(i,a){var o,u,l,h,d,c,m;if(!i&&this.length>0){var f=t(this[0]).data(t.mask.dataName);return f?f():void 0}return a=t.extend({autoclear:t.mask.autoclear,placeholder:t.mask.placeholder,completed:null},a),o=t.mask.definitions,u=[],l=c=i.length,h=null,i=String(i),t.each(i.split(""),(function(t,e){"?"==e?(c--,l=t):o[e]?(u.push(new RegExp(o[e])),null===h&&(h=u.length-1),t<l&&(d=u.length-1)):u.push(null)})),this.trigger("unmask").each((function(){var f=t(this),g=t.map(i.split(""),(function(t,e){if("?"!=t)return o[t]?F(e):t})),p=g.join(""),v=f.val();function b(){if(a.completed){for(var t=h;t<=d;t++)if(u[t]&&g[t]===F(t))return;a.completed.call(f)}}function F(t){return t<a.placeholder.length?a.placeholder.charAt(t):a.placeholder.charAt(0)}function y(t){for(;++t<c&&!u[t];);return t}function C(t,e){var i,n;if(!(t<0)){for(i=t,n=y(e);i<c;i++)if(u[i]){if(!(n<c&&u[i].test(g[n])))break;g[i]=g[n],g[n]=F(n),n=y(n)}w(),f.caret(Math.max(h,t))}}function x(t){D(),f.val()!=v&&f.change()}function k(t,e){var i;for(i=t;i<e&&i<c;i++)u[i]&&(g[i]=F(i))}function w(){f.val(g.join(""))}function D(t){var e,i,n,r=f.val(),s=-1;for(e=0,n=0;e<c;e++)if(u[e]){for(g[e]=F(e);n++<r.length;)if(i=r.charAt(n-1),u[e].test(i)){g[e]=i,s=e;break}if(n>r.length){k(e+1,c);break}}else g[e]===r.charAt(n)&&n++,e<l&&(s=e);return t?w():s+1<l?a.autoclear||g.join("")===p?(f.val()&&f.val(""),k(0,c)):w():(w(),f.val(f.val().substring(0,s+1))),l?e:h}f.data(t.mask.dataName,(function(){return t.map(g,(function(t,e){return u[e]&&t!=F(e)?t:null})).join("")})),f.one("unmask",(function(){f.off(".mask").removeData(t.mask.dataName)})).on("focus.mask",(function(){var t;f.prop("readonly")||(clearTimeout(e),v=f.val(),t=D(),e=setTimeout((function(){f.get(0)===document.activeElement&&(w(),t==i.replace("?","").length?f.caret(0,t):f.caret(t))}),10))})).on("blur.mask",x).on("keydown.mask",(function(t){if(!f.prop("readonly")){var e,i,r,s=t.which||t.keyCode;m=f.val(),8===s||46===s||n&&127===s?(i=(e=f.caret()).begin,(r=e.end)-i==0&&(i=46!==s?function(t){for(;--t>=0&&!u[t];);return t}(i):r=y(i-1),r=46===s?y(r):r),k(i,r),C(i,r-1),t.preventDefault()):13===s?x.call(this,t):27===s&&(f.val(v),f.caret(0,D()),t.preventDefault())}})).on("keypress.mask",(function(e){if(!f.prop("readonly")){var i,n,r,a=e.which||e.keyCode,o=f.caret();if(!(e.ctrlKey||e.altKey||e.metaKey||a<32)&&a&&13!==a){if(o.end-o.begin!=0&&(k(o.begin,o.end),C(o.begin,o.end-1)),(i=y(o.begin-1))<c&&(n=String.fromCharCode(a),u[i].test(n))){if(function(t){var e,i,n,r;for(e=t,i=F(t);e<c;e++)if(u[e]){if(n=y(e),r=g[e],g[e]=i,!(n<c&&u[n].test(r)))break;i=r}}(i),g[i]=n,w(),r=y(i),s){setTimeout((function(){t.proxy(t.fn.caret,f,r)()}),0)}else f.caret(r);o.begin<=d&&b()}e.preventDefault()}}})).on("input.mask paste.mask",(function(){f.prop("readonly")||setTimeout((function(){var t=D(!0);f.caret(t),b()}),0)})),r&&s&&f.off("input.mask").on("input.mask",(function(t){var e=f.val(),i=f.caret();if(m&&m.length&&m.length>e.length){for(D(!0);i.begin>0&&!u[i.begin-1];)i.begin--;if(0===i.begin)for(;i.begin<h&&!u[i.begin];)i.begin++;f.caret(i.begin,i.begin)}else{D(!0);var n=e.charAt(i.begin);i.begin<c&&(u[i.begin]||i.begin++,u[i.begin].test(n)&&i.begin++),f.caret(i.begin,i.begin)}b()})),D()}))}})})),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}((function(t){t.extend(t.fn,{validate:function(e){if(this.length){var i=t.data(this[0],"validator");return i||(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",(function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)})),this.submit((function(e){function n(){var n;return!i.settings.submitHandler||(i.submitButton&&(n=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&n.remove(),!1)}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,n()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):n():(i.focusInvalid(),!1)}))),i)}e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.")},valid:function(){var e,i;return t(this[0]).is("form")?e=this.validate().form():(e=!0,i=t(this[0].form).validate(),this.each((function(){e=i.element(this)&&e}))),e},removeAttrs:function(e){var i={},n=this;return t.each(e.split(/\s/),(function(t,e){i[e]=n.attr(e),n.removeAttr(e)})),i},rules:function(e,i){var n,r,s,a,o,u,l=this[0];if(e)switch(n=t.data(l.form,"validator").settings,r=n.rules,s=t.validator.staticRules(l),e){case"add":t.extend(s,t.validator.normalizeRule(i)),delete s.messages,r[l.name]=s,i.messages&&(n.messages[l.name]=t.extend(n.messages[l.name],i.messages));break;case"remove":return i?(u={},t.each(i.split(/\s/),(function(e,i){u[i]=s[i],delete s[i],"required"===i&&t(l).removeAttr("aria-required")})),u):(delete r[l.name],s)}return(a=t.validator.normalizeRules(t.extend({},t.validator.classRules(l),t.validator.attributeRules(l),t.validator.dataRules(l),t.validator.staticRules(l)),l)).required&&(o=a.required,delete a.required,a=t.extend({required:o},a),t(l).attr("aria-required","true")),a.remote&&(o=a.remote,delete a.remote,a=t.extend(a,{remote:o})),a}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,(function(t,i){e=e.replace(new RegExp("\\{"+t+"\\}","g"),(function(){return i}))})),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(t)))},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,n){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(n):t(e).addClass(i).removeClass(n)},unhighlight:function(e,i,n){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(n):t(e).removeClass(i).addClass(n)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"Это поле обязательно к заполнению.",remote:"Исправьте это поле.",email:"Пожалуйста, введите действительный адрес электронной почты.",url:"Пожалуйста, введите корректный адрес.",date:"Пожалуйста, введите правильную дату.",dateISO:"Пожалуйста, введите правильную дату ( ISO ).",number:"пожалуйста введите правильное число.",digits:"Пожалуйста, вводите только цифры.",creditcard:"Пожалуйста, введите действительный номер кредитной карты.",equalTo:"Пожалуйста, введите то же значение еще раз.",maxlength:t.validator.format("Пожалуйста, введите не более {0} симв."),minlength:t.validator.format("Пожалуйста, введите хотя бы {0} симв."),rangelength:t.validator.format("Введите значение от {0} до {1} симв."),range:t.validator.format("Введите значение от {0} до {1}."),max:t.validator.format("Пожалуйста, введите значение меньше или равно {0}."),min:t.validator.format("Пожалуйста, введите значение больше или равное {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),n="on"+e.type.replace(/^validate/,""),r=i.settings;r[n]&&!this.is(r.ignore)&&r[n].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i,n=this.groups={};t.each(this.settings.groups,(function(e,i){"string"==typeof i&&(i=i.split(/\s/)),t.each(i,(function(t,i){n[i]=e}))})),i=this.settings.rules,t.each(i,(function(e,n){i[e]=t.validator.normalizeRule(n)})),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",e).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){var i=this.clean(e),n=this.validationTargetFor(i),r=!0;return this.lastElement=n,void 0===n?delete this.invalid[i.name]:(this.prepareElement(n),this.currentElements=t(n),(r=!1!==this.check(n))?delete this.invalid[n.name]:this.invalid[n.name]=!0),t(e).attr("aria-invalid",!r),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),r},showErrors:function(e){if(e){for(var i in t.extend(this.errorMap,e),this.errorList=[],e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,(function(t){return!(t.name in e)}))}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e,i=0;for(e in t)i++;return i},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(t){t.not(this.containers).text(""),this.addWrapper(t).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(t){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,(function(t){return t.element.name===e.name})).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter((function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),!(this.name in i||!e.objectLength(t(this).rules()))&&(i[this.name]=!0,!0)}))},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.split(" ").join(".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i,n=t(e),r=e.type;return"radio"===r||"checkbox"===r?t("input[name='"+e.name+"']:checked").val():"number"===r&&void 0!==e.validity?!e.validity.badInput&&n.val():"string"==typeof(i=n.val())?i.replace(/\r/g,""):i},check:function(e){e=this.validationTargetFor(this.clean(e));var i,n,r,s=t(e).rules(),a=t.map(s,(function(t,e){return e})).length,o=!1,u=this.elementValue(e);for(n in s){r={method:n,parameters:s[n]};try{if("dependency-mismatch"===(i=t.validator.methods[n].call(this,u,e,r.parameters))&&1===a){o=!0;continue}if(o=!1,"pending"===i)return void(this.toHide=this.toHide.not(this.errorsFor(e)));if(!i)return this.formatAndAdd(e,r),!1}catch(t){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+r.method+"' method.",t),t}}if(!o)return this.objectLength(s)&&this.successList.push(e),!0},customDataMessage:function(e,i){return t(e).data("msg"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase())||t(e).data("msg")},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var n=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof n?n=n.call(this,i.parameters,e):r.test(n)&&(n=t.validator.format(n.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:n,element:e,method:i.method}),this.errorMap[e.name]=n,this.submitted[e.name]=n},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e,i;for(t=0;this.errorList[t];t++)i=this.errorList[t],this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map((function(){return this.element}))},showLabel:function(e,i){var n,r,s,a=this.errorsFor(e),o=this.idOrName(e),u=t(e).attr("aria-describedby");a.length?(a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),a.html(i)):(n=a=t("<"+this.settings.errorElement+">").attr("id",o+"-error").addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(n=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(n):this.settings.errorPlacement?this.settings.errorPlacement(n,t(e)):n.insertAfter(e),a.is("label")?a.attr("for",o):0===a.parents("label[for='"+o+"']").length&&(s=a.attr("id"),u?u.match(new RegExp("\b"+s+"\b"))||(u+=" "+s):u=s,t(e).attr("aria-describedby",u),(r=this.groups[e.name])&&t.each(this.groups,(function(e,i){i===r&&t("[name='"+e+"']",this.currentForm).attr("aria-describedby",a.attr("id"))})))),!i&&this.settings.success&&(a.text(""),"string"==typeof this.settings.success?a.addClass(this.settings.success):this.settings.success(a,e)),this.toShow=this.toShow.add(a)},errorsFor:function(e){var i=this.idOrName(e),n=t(e).attr("aria-describedby"),r="label[for='"+i+"'], label[for='"+i+"'] *";return n&&(r=r+", #"+n.replace(/\s+/g,", #")),this.errors().filter(r)},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return!this.dependTypes[_typeof(t)]||this.dependTypes[_typeof(t)](t,e)},dependTypes:{boolean:function(t){return t},string:function(e,i){return!!t(e,i.form).length},function:function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},n=t(e).attr("class");return n&&t.each(n.split(" "),(function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])})),i},attributeRules:function(e){var i,n,r={},s=t(e),a=e.getAttribute("type");for(i in t.validator.methods)"required"===i?(""===(n=e.getAttribute(i))&&(n=!0),n=!!n):n=s.attr(i),/min|max/.test(i)&&(null===a||/number|range|text/.test(a))&&(n=Number(n)),n||0===n?r[i]=n:a===i&&"range"!==a&&(r[i]=!0);return r.maxlength&&/-1|2147483647|524288/.test(r.maxlength)&&delete r.maxlength,r},dataRules:function(e){var i,n,r={},s=t(e);for(i in t.validator.methods)void 0!==(n=s.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase()))&&(r[i]=n);return r},staticRules:function(e){var i={},n=t.data(e.form,"validator");return n.settings.rules&&(i=t.validator.normalizeRule(n.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,(function(n,r){if(!1!==r){if(r.param||r.depends){var s=!0;switch(_typeof(r.depends)){case"string":s=!!t(r.depends,i.form).length;break;case"function":s=r.depends.call(i,i)}s?e[n]=void 0===r.param||r.param:delete e[n]}}else delete e[n]})),t.each(e,(function(n,r){e[n]=t.isFunction(r)?r(i):r})),t.each(["minlength","maxlength"],(function(){e[this]&&(e[this]=Number(e[this]))})),t.each(["rangelength","range"],(function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].replace(/[\[\]]/g,"").split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))})),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),(function(){i[this]=!0})),e=i}return e},addMethod:function(e,i,n){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==n?n:t.validator.messages[e],i.length<3&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,n){if(!this.depend(n,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString())},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i,n,r=0,s=0,a=!1;if((t=t.replace(/\D/g,"")).length<13||t.length>19)return!1;for(i=t.length-1;i>=0;i--)n=t.charAt(i),s=parseInt(n,10),a&&(s*=2)>9&&(s-=9),r+=s,a=!a;return r%10==0},minlength:function(e,i,n){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=n},maxlength:function(e,i,n){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||n>=r},rangelength:function(e,i,n){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=n[0]&&r<=n[1]},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&t<=i[1]},equalTo:function(e,i,n){var r=t(n);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",(function(){t(i).valid()})),e===r.val()},remote:function(e,i,n){if(this.optional(i))return"dependency-mismatch";var r,s,a=this.previousValue(i);return this.settings.messages[i.name]||(this.settings.messages[i.name]={}),a.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=a.message,n="string"==typeof n&&{url:n}||n,a.old===e?a.valid:(a.old=e,r=this,this.startRequest(i),(s={})[i.name]=e,t.ajax(t.extend(!0,{url:n,mode:"abort",port:"validate"+i.name,dataType:"json",data:s,context:r.currentForm,success:function(n){var s,o,u,l=!0===n||"true"===n;r.settings.messages[i.name].remote=a.originalMessage,l?(u=r.formSubmitted,r.prepareElement(i),r.formSubmitted=u,r.successList.push(i),delete r.invalid[i.name],r.showErrors()):(s={},o=n||r.defaultMessage(i,"remote"),s[i.name]=a.message=t.isFunction(o)?o(e):o,r.invalid[i.name]=!0,r.showErrors(s)),a.valid=l,r.stopRequest(i,l)}},n)),"pending")}}}),t.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var e,i={};t.ajaxPrefilter?t.ajaxPrefilter((function(t,e,n){var r=t.port;"abort"===t.mode&&(i[r]&&i[r].abort(),i[r]=n)})):(e=t.ajax,t.ajax=function(n){var r=("mode"in n?n:t.ajaxSettings).mode,s=("port"in n?n:t.ajaxSettings).port;return"abort"===r?(i[s]&&i[s].abort(),i[s]=e.apply(this,arguments),i[s]):e.apply(this,arguments)}),t.extend(t.fn,{validateDelegate:function(e,i,n){return this.bind(i,(function(i){var r=t(i.target);return r.is(e)?n.apply(r,arguments):void 0}))}})})),new Swiper(".reviews__top",{navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},speed:900}),$(".header__burger").click((function(){$(".header__burger").toggleClass("open"),$(".header__menu").toggleClass("open")})),$(".wrapper").on("click","a",(function(t){if($(".header__burger").removeClass("open"),$(".header__menu").removeClass("open"),$("body").removeClass("lock"),!$(this).hasClass("exeption")){t.preventDefault();var e=$(this).attr("href"),i=$(e).offset().top;$("body,html").animate({scrollTop:i},900)}}));