(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{"9NiH":function(e,n){},"9lxQ":function(e,n,t){"use strict";t("j3dC")},EqHM:function(e,n,t){"use strict";t.r(n);var i=t("LvDl"),s={name:"SeeMoreBtn",props:{longDescriptionOpen:{type:Boolean,default:null}},methods:{toggleDescription:function(){this.$emit("toggledescription")}}},o=(t("9lxQ"),t("KHd+")),c=t("9NiH"),r=t.n(c),a=Object(o.a)(s,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{class:[{"is-open":this.longDescriptionOpen},"SeeMoreBtn"],on:{click:this.toggleDescription}},[n("span",{staticClass:"line"}),n("span",{staticClass:"line"})])}),[],!1,null,"3dd326c1",null);"function"==typeof r.a&&r()(a);var l={name:"PBAccordeon",components:{SeeMoreBtn:a.exports,UiWysiwyg:t("jVun").a},props:{items:{type:Array,default:function(){return[]}}},data:function(){return{longDescriptionOpen:[]}},mounted:function(){var e=this;Object(i.each)(this.$refs.Li,(function(){e.longDescriptionOpen.push(Boolean(!1))}))},methods:{toggleDescription:function(e,n){this.$set(this.longDescriptionOpen,n,!this.longDescriptionOpen[n])}}},p=(t("Gus1"),t("qVlL")),u=t.n(p),d=Object(o.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"Accordeon"},[t("ol",{staticClass:"list-container"},e._l(e.items,(function(n,i){var s=n.title,o=n.text;return t("li",{key:"list-"+s+"-"+i,ref:"Li",refInFor:!0,staticClass:"item"},[t("div",{staticClass:"header-item",on:{click:function(n){return e.toggleDescription(n,i)}}},[t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"list-title",domProps:{innerHTML:e._s(s)}}),t("SeeMoreBtn",{attrs:{"long-description-open":e.longDescriptionOpen[i]}})],1),o?t("div",{directives:[{name:"show-slide",rawName:"v-show-slide",value:e.longDescriptionOpen[i],expression:"longDescriptionOpen[i]"}],staticClass:"description-container"},[t("UiWysiwyg",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(o)}})],1):e._e()])})),0)])}),[],!1,null,"97113d60",null);"function"==typeof u.a&&u()(d);n.default=d.exports},Gus1:function(e,n,t){"use strict";t("u7bE")},j3dC:function(e,n,t){},qVlL:function(e,n){},u7bE:function(e,n,t){}}]);