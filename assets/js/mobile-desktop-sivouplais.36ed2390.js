(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{"7Cvs":function(t,e,i){"use strict";i("KFFO")},FZVb:function(t,e,i){"use strict";i("TMXb");var n=i("VTBJ"),a=i("L2JU"),s=i("LvDl"),o=i("1OyB"),r=i("vuIU"),c=i("rePB"),l=i("z/o8"),h=i("pc+1"),u=null,d=null,p=null,v=h.b.easeOut.config(1.2,.3),f={duration:2.4,ease:v},m=function(){function t(e){var i=e.scope,n=e.index,a=e.path,s=e.start,r=e.end,l=e.colors,h=e.height;Object(o.a)(this,t),Object(c.a)(this,"paperScope",null),Object(c.a)(this,"start",null),Object(c.a)(this,"end",null),Object(c.a)(this,"path",null),Object(c.a)(this,"shape",null),Object(c.a)(this,"animation",null),Object(c.a)(this,"colors",null),Object(c.a)(this,"height",null),Object(c.a)(this,"active",!1),this.index=n,this.path=a,this.start=s,this.end=r,this.height=h,this.colors=l,this.scope=i,p||(p=i),this.setup()}return Object(r.a)(t,[{key:"pointSymbol",get:function(){if(u)return u;if(!p)return null;var t=new p.Path.Circle({center:[0,0],radius:4,fillColor:"yellow",strokeColor:"yellow"});return u=new p.Symbol(t.rasterize()),t.remove(),u}}],[{key:"mouse",set:function(t){if(t)d=t;else{if(!p)return;d={delta:new p.Point(0,0),point:new p.Point(0,0)}}}}]),Object(r.a)(t,[{key:"setup",value:function(){this.shape=this.pointSymbol.place(this.end),this.shape.parent=this.path.parent,this.animation=l.b.timeline({ease:v}),this.shape.visible=!1}},{key:"destroy",value:function(){var t,e,i=this;null===(t=this.animation)||void 0===t||null===(e=t.kill)||void 0===e||e.call(t),Object(s.each)(this,(function(t,e){return delete i[e]}))}},{key:"refresh",value:function(){var t;if(!d||!this.active)return!1;var e=this.end,i=this.animation.isActive(),n=this.path.segments[this.index],a=(null===(t=d)||void 0===t?void 0:t.point.x)||0,s=n.point.x,o=Math.abs(a-s),r=e.isClose(this.shape.position,.1);if(o<51)if(this.animation.clear(),Math.abs(a-e.x)>60)this.snapBack();else{var c=a-s>=0?-1:1,l=50*c+a;n.point.x=l,this.shape.position=n.point,this.path.fillColor=this.colors[c>0?0:1]}else i||r||this.snapBack();return i||!r}},{key:"snapBack",value:function(){var t=this,e=this.end,i=this.shape.position,a=this.path.segments[this.index].point,s=null;this.animation.clear(),a&&e&&i&&this.animation.to([a,i],Object(n.a)(Object(n.a)({x:e.x,y:e.y},f),{},{onUpdate:function(){s=a.x-e.x,t.path.fillColor=t.colors[s>0?0:1]}}),0)}}]),t}();l.b.config({nullTargetWarn:!1});var b=function(){function t(e){var i=e.scope,a=e.layers,s=e.index,r=e.total,l=e.colors,h=e.view,u=e.size,d=e.lineSymbol,p=e.x,v=e.fromResize,f=e.fromX,b=e.segments,g=void 0===b?2:b,y=e.interact,w=void 0===y||y,O=e.lineStyle,k=void 0===O?{}:O;Object(o.a)(this,t),Object(c.a)(this,"scope",null),Object(c.a)(this,"index",null),Object(c.a)(this,"total",null),Object(c.a)(this,"interact",!1),Object(c.a)(this,"smoothing",{type:"continuous"}),Object(c.a)(this,"group",null),Object(c.a)(this,"path",null),Object(c.a)(this,"shape",null),Object(c.a)(this,"controlPoints",[]),Object(c.a)(this,"bgShape",null),Object(c.a)(this,"fromX",0),Object(c.a)(this,"size",{width:0,height:0}),Object(c.a)(this,"active",!1);var j=u.height,x=h.center;this.scope=i,this.index=s,this.total=r,this.interact=w,this.fromX=f,this.size={width:p-f,height:j};var C=this.scope,L=C.Path,S=C.Point,M=C.Group,$=new C.Shape.Rectangle([f,0],[v?this.size.width:0,j]);$.parent=a.background,$.fillColor=l[0],$.fillColor.alpha=1,$.strokeColor=l[0],$.strokeColor.alpha=0,this.bgShape=$,this.group=new M,this.group.parent=a.foreground,this.path=new L(Object(n.a)({parent:this.group,strokeWidth:1},k)),this.shape=d.place([p,x.y]),this.shape.parent=this.group,this.shape.visible=!1;for(var T=[],B=null,z=null,E=null,P=0;P<=g;P+=1){z=new S(f,B=P/g*j),E=new S(p,B);var _=new m({scope:this.scope,path:this.path,start:z,end:E,index:P,colors:l,height:j,ctx:h.context});this.controlPoints.push(_),T.push(E)}this.path.addSegments(T),v&&this.intro(v)}return Object(r.a)(t,[{key:"destroy",value:function(){var t=this;this.group.remove(),Object(s.each)(this.controlPoints,(function(t){return t.destroy()})),Object(s.each)(this,(function(e,i){return delete t[i]}))}},{key:"update",value:function(){for(var t=!this.active,e=this.path.segments.length-1,i=1;i<e;i+=1)this.controlPoints[i].refresh()&&(t=!0);t?(this.path.visible=!0,this.shape.visible=!1,this.smoothPath()):(this.path.visible=!1,this.shape.visible=!0)}},{key:"intro",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.path.visible=!1,this.shape.visible=!1,this.smoothPath();var i=null,n=[],a=this.index?.16*this.index-.01:0,o=.2,r=l.b.timeline({paused:!0});if(Object(s.each)(this.controlPoints,(function(s,c){var l,h=s.shape,u=s.path,d=s.start,p=s.end,v=s.colors;i=null===(l=u.segments[c])||void 0===l?void 0:l.point,n=[i,h.position],e?t.controlPoints[c].active=!0:(n&&d&&r.set(n,{x:d.x},0).add("start",a).call((function(){t.controlPoints[c].active=!0}),null,a+.015),i&&p&&(1===c?(u.fillColor=v[0],u.fillColor.alpha=1,r.to(i,{x:p.x,duration:o,ease:"power4.out"},"start")):r.to(i,{x:p.x,duration:o,ease:"power2.out"},"start")))})),!e){var c={width:0};r.to(c,{width:this.size.width,duration:o,ease:"power2.out",onUpdate:function(){t.size&&(t.bgShape.position=[t.fromX+c.width/2,t.size.height/2],t.bgShape.size=[c.width,t.size.height])},onComplete:function(){t.bgShape.position=[t.fromX+c.width/2,t.size.height/2],t.bgShape.size=[c.width,t.size.height],t.bgShape.visible=!0,t.active=!0}},"start"),r.play()}}},{key:"outro",value:function(){var t=this;this.active=!1,this.path.visible=!1,this.shape.visible=!1,this.smoothPath();var e=null,i=[],n=.4-(this.index?.16*this.index-.01:0),a=l.b.timeline({paused:!0});Object(s.each)(this.controlPoints,(function(s,o){var r,c,l=s.animation,h=s.shape,u=s.path,d=s.start,p=s.end,v=s.colors;null==l||null===(r=l.kill)||void 0===r||r.call(l),e=null===(c=u.segments[o])||void 0===c?void 0:c.point,(i=[e,h.position])&&p&&a.set(i,{x:p.x},0).add("start",n),t.controlPoints[o].active=!1,e&&d&&(1===o?(u.fillColor=v[0],a.fromTo(e,{x:p.x},{x:d.x,duration:.2,ease:"power2.in"},"start")):a.fromTo(e,{x:p.x},{x:d.x,duration:.2,ease:"power2.in"},"start"))}));var o={width:this.size.width};a.to(o,{width:0,duration:.2,ease:"power2.in",onUpdate:function(){t.bgShape.position=[t.fromX+o.width/2,t.size.height/2],t.bgShape.size=[o.width,t.size.height]}},"start"),a.play()}},{key:"smoothPath",value:function(){this.path.smooth(this.smoothing)}}]),t}(),g={name:"ReactiveBackground",components:{},props:{guides:{type:Array,default:function(){return[]}},visible:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},data:function(){var t=this;return{id:"menu-bglines",ready:!1,lineStyle:{},scope:null,view:null,size:{width:0,height:0},layers:{background:void 0,foreground:void 0},lines:[],lineSymbol:null,lineRaster:null,watchers:[],handlers:{mousemove:function(e){var i={x:e?e.x:t.viewport.width/2,y:e?e.y:t.viewport.height/2};m.mouse={point:i}},mouseleave:function(){m.mouse=null}}}},computed:Object(n.a)(Object(n.a)({},Object(a.b)({touch:"Interface/touch",viewport:"Interface/viewport",paper:"Paperjs/paper"})),{},{canInteract:function(){return this.ready&&this.active}}),watch:{canInteract:function(t){t?(document.addEventListener("mousemove",this.handlers.mousemove),this.handlers.mousemove()):(document.removeEventListener("mousemove",this.handlers.mousemove),this.handlers.mouseleave())}},mounted:function(){this.load()},beforeDestroy:function(){var t=this;this.view&&(Object(s.each)(this.lines,(function(t){return t.destroy()})),Object(s.each)(this.watchers,(function(t){return t()})),Object(s.each)(this.handlers,(function(e,i){return t.view.off(i,e)})),this.view.remove(),delete this.view,delete this.lines)},methods:{load:function(){var t=this;this.$store.dispatch("Paperjs/LOAD").then(this.createView.bind(this)).then((function(){t.watchers.push(t.$watch("viewport",Object(s.debounce)((function(){t.init(!0)}),30))),t.init()}))},updateSize:function(){this.size=Object(s.pick)(this.view.bounds,["width","height"])},createView:function(t){var e=new t.PaperScope(this.$el);e.setup(this.$el);var i=e.getView(this.id);i.setAutoUpdate(!1),this.scope=e,this.view=i,this.layers={background:new this.scope.Layer,foreground:new this.scope.Layer},this.updateSize()},init:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$nextTick((function(){t.layers.background.removeChildren(),t.layers.foreground.removeChildren(),t.updateSize(),Object(s.each)(t.lines,(function(t){return t.destroy()})),t.rasterizeLine();var i=Object(s.pick)(t,["scope","view","layers","size","lineSymbol","lineStyle"]);t.$nextTick((function(){var a=null,o=null,r=0,c=null,l=t.guides.length-1;t.lines=Object(s.map)(t.guides,(function(s,h){switch(a=s.getBoundingClientRect(),o=Math.round(a.x+a.width),h){case 0:c=["#fc423f","#1b1b1b"];break;case 1:c=["#1b1b1b","white"];break;default:c=["white","transparent"]}var u=new b(Object(n.a)(Object(n.a)({},i),{},{colors:c,index:h,total:l,x:o,fromResize:e,fromX:r,interact:h<t.guides.length-1}));return r=o,u})),t.ready=!0,t.$emit("ready",!0)}))}))},rasterizeLine:function(){var t,e=this.size.height,i=this.scope;null===(t=this.lineRaster)||void 0===t||t.remove();var a=new i.Path(Object(n.a)({segments:[[0,0],[0,e]]},this.lineStyle));a.visible=!0,a.segments=[[0,0],[0,e]],this.lineRaster=a.rasterize(),this.lineSymbol=new i.Symbol(this.lineRaster),a.visible=!1},render:function(){var t,e;Object(s.each)(this.lines,(function(t){return t.update()})),null===(t=this.view)||void 0===t||null===(e=t.update)||void 0===e||e.call(t)},intro:function(){Object(s.each)(this.lines,(function(t){return t.intro()}))},outro:function(){Object(s.each)(this.lines,(function(t){return t.outro()}))}}},y=(i("7Cvs"),i("KHd+")),w=i("TO2O"),O=i.n(w),k=Object(y.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{staticClass:"canvas",attrs:{id:this.id,resize:""}})}),[],!1,null,"ed27f446",null);"function"==typeof O.a&&O()(k);e.a=k.exports},ILCd:function(t,e,i){"use strict";i("hqZ9");var n=i("VTBJ"),a=i("L2JU"),s=i("z/o8"),o={name:"TheMenuMainNavigation",components:{},data:function(){return{}},computed:Object(n.a)({},Object(a.b)({locale:"I18n/localeName",layout:"Interface/layout",entries:"Menu/entries"})),methods:{closeOnClick:function(t){var e=this;t.target.classList.remove("is-active"),this.onMainLinkLeave(t),setTimeout((function(){e.$store.dispatch("Menu/CLOSE")}),100)},onMainLinkOver:function(t){var e=t.target;if("mobile"!==this.layout&&!e.classList.contains("is-active")){var i=e.querySelector(".inner-link"),n=e.querySelector(".anim-layer"),a=n.querySelector(".anim-text");s.b.timeline().addLabel("start").fromTo(n,{x:"-100%"},{x:"0%",duration:.9},"start").fromTo(a,{x:"100%"},{x:"0%",duration:.9},"start").to(i,{x:"5%",duration:.4,ease:"power3.out"},"start")}},onMainLinkLeave:function(t){var e=t.target;if("mobile"!==this.layout&&!e.classList.contains("is-active")){var i=e.querySelector(".inner-link"),n=e.querySelector(".anim-layer"),a=n.querySelector(".anim-text");s.b.timeline().addLabel("start").fromTo(n,.9,{x:"0%"},{x:"100%",duration:.9},"start").fromTo(a,.9,{x:"0%"},{x:"-100%",duration:.9},"start").to(i,{x:"0%",ease:"power3.out",duration:.4},"start")}}}},r=(i("WOew"),i("KHd+")),c=i("hXxp"),l=i.n(c),h=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"TheMenuMainNavigation"},[i("ul",{staticClass:"list"},t._l(t.entries,(function(e){return i("li",{key:"route-"+e,staticClass:"item"},[i("g-link",{ref:"Link",refInFor:!0,staticClass:"link",attrs:{to:{name:e+"."+t.locale},"data-route":e,"active-class":"is-active",exact:""},nativeOn:{mouseover:function(e){return t.onMainLinkOver(e)},mouseleave:function(e){return t.onMainLinkLeave(e)},click:function(e){return t.closeOnClick(e)}}},[i("div",{staticClass:"inner-link"},[i("span",{staticClass:"anim-layer"},[i("span",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"anim-text",domProps:{innerHTML:t._s(t.$t("NAVIGATION."+e))}})]),i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"label",domProps:{innerHTML:t._s(t.$t("NAVIGATION."+e))}})])])],1)})),0)])}),[],!1,null,"29347533",null);"function"==typeof l.a&&l()(h);e.a=h.exports},KFFO:function(t,e,i){},NKYa:function(t,e){},NvQk:function(t,e,i){"use strict";i("eKN/")},TO2O:function(t,e){},U7lE:function(t,e,i){"use strict";(function(t){i("l2Ro"),i("TMXb");var n=i("KQm4"),a=i("VTBJ"),s=i("LvDl"),o=i("L2JU"),r=i("z/o8"),c=i("GeCn"),l=i("X+t0"),h=i("ILCd"),u=i("yUZN"),d=i("FZVb"),p="true"===t.env.GRIDSOME_DEBUG_SLOW_MENU;e.a={name:"TheMenuDesktopNCPA",components:{SocialsList:c.a,ContactInfos:l.a,MainNavigation:h.a,LangSwitcher:u.a,ReactiveBackground:d.a},props:{contact:{type:Object,default:function(){return{}}}},data:function(){return{DEBUG_SLOW_MENU:p,lineReady:!1,RAF:null,timelineEls:[],forceClosing:!1,guides:[],renderHandler:this.render.bind(this)}},computed:Object(a.a)(Object(a.a)({},Object(o.b)({open:"Menu/open",active:"Menu/active",visible:"Menu/visible",busy:"Menu/busy"})),{},{route:function(){return this.$route}}),watch:{open:function(t){t?this.tweenOpen():this.forceClosing||this.tweenClose()},visible:function(t){t?this.render():(cancelAnimationFrame(this.RAF),this.lineReady=!1)}},mounted:function(){this.timelineEls=this.getTimelineEls(),this.guides=[this.$refs.PartLeft,this.$refs.PartMain,this.$refs.PartRight]},methods:{getTimelineEls:function(){var t,e,i,n=this.$refs,a=n.Button,o=n.LeftBackground,r=n.MainBackground,c=n.RightBackground,l=null===(t=this.$refs.LangSwitcher)||void 0===t?void 0:t.$el,h=null===(e=this.$refs.Contacts)||void 0===e?void 0:e.$el,u=null===(i=this.$refs.SocialsList)||void 0===i?void 0:i.$el;return{primaryLinks:Object(s.map)(this.$refs.MainNavigation.$refs.Link,"$el"),backgrounds:[o,r,c],mainEls:[h,a,l,u]}},tweenOpen:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.timelineEls,n=i.primaryLinks,a=i.backgrounds,o=i.mainEls,c=[];Object(s.each)(n,(function(t){c.push(r.b.fromTo(t,{y:150},{y:0,duration:.5,ease:"power3.out"},.015))})),r.b.set(this.$el,{display:"block"}),r.b.set(a,{x:"-101%"}),this.$store.commit("Menu/SET_VISIBILITY",!0);var l=r.b.timeline({paused:!0,onStart:function(){var e;t.show=!0,t.forceClosing=!1,r.b.set(n,{opacity:1}),null===(e=t.$refs.ReactiveBackground)||void 0===e||e.intro(),t.$store.commit("Menu/SET_ACTIVE",!0)},onComplete:function(){t.$store.dispatch("Menu/CLEAR_BUSY")}}).add("start").to(a,{x:"0%",duration:.2,stagger:.2,ease:"power2.in"}).add(c[0],"-=0.35"),h=.35;Object(s.each)(Object(s.chunk)(Object(s.tail)(c),2),(function(t,e){h=Math.round(100*(.35+.05*e))/100,l.add(t,"-=".concat(h),0)})),l.fromTo(o,{opacity:0},{opacity:1,duration:.3},"-=".concat(h)).fromTo(o,{opacity:0},{opacity:1,duration:.3},"-=".concat(h)).add("end"),p&&l.timeScale(.1),e&&l.seek("end");var u=this.$watch("lineReady",(function(e){e&&(l.play(),t.$nextTick((function(){u()})))}),{immediate:!0})},tweenClose:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.timelineEls,a=i.primaryLinks,o=i.backgrounds,c=i.mainEls,l=r.b.timeline({paused:e,onStart:function(){var e;t.$store.commit("Menu/SET_ACTIVE",!1),null===(e=t.$refs.ReactiveBackground)||void 0===e||e.outro()},onComplete:function(){r.b.set(o,{clearProps:"all"}),t.show=!1,t.$store.commit("Menu/SET_VISIBILITY",!1),t.$store.dispatch("Menu/CLEAR_BUSY")}}).to([a].concat(Object(n.a)(c)),{duration:.1,opacity:0}).to(Object(s.reverse)(Object(s.clone)(o)),.2,{x:"-101%",stagger:.2},"-=0.1").add("delay","+=0.2").to(this.$el,{duration:0,display:"none"},"delay").add("end"),h=p?.1:1.2;l.timeScale(h),e&&l.seek("end")},render:function(){var t,e;this.visible&&(null===(t=this.$refs.ReactiveBackground)||void 0===t||null===(e=t.render)||void 0===e||e.call(t));this.RAF=requestAnimationFrame(this.renderHandler)},onLineReady:function(){this.lineReady=!0},toggleMenu:function(){this.busy||this.$store.dispatch("Menu/CLOSE")}}}}).call(this,i("8oxB"))},WOew:function(t,e,i){"use strict";i("yICD")},XYmA:function(t,e,i){},Xw9p:function(t,e,i){"use strict";i("pcz6")},"eKN/":function(t,e,i){},hXxp:function(t,e){},pcz6:function(t,e,i){},"u/Xk":function(t,e){},"y+Z8":function(t,e,i){"use strict";i.r(e);var n=i("U7lE").a,a=(i("Xw9p"),i("NvQk"),i("KHd+")),s=i("NKYa"),o=i.n(s),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{ref:"Header",staticClass:"TheMenuDesktop -ncp-a",attrs:{"data-debug":t.DEBUG_SLOW_MENU}},[t.visible?i("ReactiveBackground",{ref:"ReactiveBackground",staticClass:"line-canvas",attrs:{guides:t.guides,visible:t.visible,active:t.active},on:{ready:t.onLineReady}}):t._e(),i("div",{staticClass:"container"},[i("div",{ref:"PartLeft",staticClass:"part -left",on:{click:t.toggleMenu}},[i("div",{ref:"LeftBackground",staticClass:"Background"}),i("button",{directives:[{name:"g-image",rawName:"v-g-image"}],ref:"Button",staticClass:"link close _no-btn",domProps:{innerHTML:t._s(t.$t("LABELS.close"))}})]),i("div",{ref:"PartMain",staticClass:"part -main"},[i("div",{ref:"MainBackground",staticClass:"Background"}),i("MainNavigation",{ref:"MainNavigation",staticClass:"inner-navigation"}),i("ContactInfos",{ref:"Contacts",staticClass:"contacts"})],1),i("div",{ref:"PartRight",staticClass:"part -right"},[i("div",{ref:"RightBackground",staticClass:"Background"}),i("LangSwitcher",{ref:"LangSwitcher",staticClass:"lang-switcher"}),i("SocialsList",{ref:"SocialsList",staticClass:"socials"})],1)])],1)}),[],!1,null,"c1b72e2e",null);"function"==typeof o.a&&o()(r);e.default=r.exports},yICD:function(t,e,i){},yOr7:function(t,e,i){"use strict";i("XYmA")},yUZN:function(t,e,i){"use strict";var n=i("VTBJ"),a=i("L2JU"),s={name:"TheLangSwitcher",computed:Object(n.a)(Object(n.a)({},Object(a.b)({otherLocaleName:"I18n/otherLocaleName",translated_url:"I18n/translatedUrl"})),{},{translatedUrl:function(){return this.$context.translated_url||this.translated_url}}),methods:{switchLang:function(t){t.preventDefault(),window.open(this.translatedUrl,"_self")}}},o=(i("yOr7"),i("KHd+")),r=i("u/Xk"),c=i.n(r),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"TheLangSwitcher",attrs:{href:t.translatedUrl,target:"_self"},on:{click:function(e){return e.preventDefault(),t.switchLang(e)}}},[t._v("\n  "+t._s(t.otherLocaleName)+"\n")])}),[],!1,null,"447b8048",null);"function"==typeof c.a&&c()(l);e.a=l.exports}}]);