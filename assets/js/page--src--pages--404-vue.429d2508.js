(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{"0Qi8":function(t,e,i){"use strict";i("vPt4")},"2I9N":function(t,e,i){t.exports=i.p+"assets/media/3.e51f586b.mp3"},"3WRX":function(t,e,i){},"4cwx":function(t,e){},"63Hk":function(t,e,i){t.exports=i.p+"assets/media/6.34a3a0e5.mp3"},"6oSV":function(t,e,i){t.exports=i.p+"assets/media/4.5813a3db.mp3"},"7l0S":function(t,e,i){"use strict";i.r(e);i("l2Ro");var n=i("VTBJ"),o=i("L2JU"),s=i("z/o8"),r=i("G4ji"),a=i("THhm"),l=(i("TMXb"),i("LvDl")),c=void 0,u={name:"FouroFourMarquee",props:{inverted:{type:Boolean,default:!1},text:{type:String,default:function(){return c.$t("PAGE_404.not_found")}}},data:function(){return{showModel:!0,timeline:null,speed:6}},computed:Object(n.a)({},Object(o.b)({viewport:"Interface/viewport"})),mounted:function(){var t=this;this.$watch("viewport",(function(){var e;t.showModel=!0,null===(e=t.timeline)||void 0===e||e.kill(),t.$nextTick(t.setup.bind(t))}),{immediate:!0})},methods:{setup:function(){var t=this,e=this.$refs.List,i=e.innerHTML,n=e.offsetWidth,o=this.viewport.width;this.showModel=!1;var s=n>o?1:Math.ceil((o-n)/n);this.$refs.Clones.innerHTML="",Object(l.each)(Object(l.range)(4*s),(function(){t.$refs.Clones.innerHTML+=i}));var r=this.$refs.Clones.offsetWidth;this.timeline=this.createTimeline(),this.timeline.timeScale(window.innerWidth/r)},createTimeline:function(){return s.b.timeline({repeat:-1}).set(this.$refs.Clones,{x:"0%"}).to(this.$refs.Clones,this.speed,{x:"-50%",ease:"power0"}).to(this.$refs.Clones,{x:"0%",duration:0},"+=0.01")}}},h=(i("qi7N"),i("KHd+")),f=i("vGtL"),d=i.n(f),m=Object(h.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:"Marquee container "+(this.inverted?"-inverted":"")},[e("div",{staticClass:"list-marquee"},[e("ol",{ref:"Clones",staticClass:"list clones"}),this.showModel?e("ol",{ref:"List",staticClass:"list model"},[e("li",{ref:"Item",staticClass:"item",domProps:{textContent:this._s(this.text)}})]):this._e()])])}),[],!1,null,"b3da4152",null);"function"==typeof d.a&&d()(m);var p=m.exports,v=(i("hqZ9"),{name:"FouroFourMarquee",data:function(){return{stage:null,context:null,browserX:0,browserY:0,balls:[],current:0,total:6,currentDrag:null,mouseX:0,mouseY:0,raf:null,nextSound:0}},computed:Object(n.a)({},Object(o.b)({viewport:"Interface/viewport"})),mounted:function(){var t,e,i=this;this.$watch("viewport",(function(){var t,e;i.stage&&(i.stage.width=null===(t=i.viewport)||void 0===t?void 0:t.width,i.stage.height=null===(e=i.viewport)||void 0===e?void 0:e.height)})),(null===(t=this.viewport)||void 0===t?void 0:t.width)>1e3&&(this.total=25),(null===(e=this.viewport)||void 0===e?void 0:e.width)>1600&&(this.total=40),setTimeout((function(){i.init()}),800)},beforeDestroy:function(){cancelAnimationFrame(this.raf),document.removeEventListener("mousemove",this.getMouseXY),document.removeEventListener("touchmove",this.getMouseXY),document.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("touchstart",this.onMouseDown),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("touchend",this.onMouseUp)},methods:{init:function(){var t,e;this.nextSound=Object(l.random)(1,6),this.stage=this.$refs.Stage,this.browserX=window.screenX,this.browserY=window.screenY,this.stage.width=null===(t=this.viewport)||void 0===t?void 0:t.width,this.stage.height=null===(e=this.viewport)||void 0===e?void 0:e.height,this.generate(),this.stage.getContext&&(this.context=this.stage.getContext("2d"),this.raf=requestAnimationFrame(this.render)),document.addEventListener("mousemove",this.getMouseXY),document.addEventListener("touchmove",this.getMouseXY),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("touchstart",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("touchend",this.onMouseUp)},generate:function(){var t=this;if(this.current<this.total){var e,i={};i.bounce=.5+.5*Math.random(),i.vx=50*Math.random()-25,i.vy=50*Math.random()-25,i.size=(null===(e=this.viewport)||void 0===e?void 0:e.width)>1e3?70:50,i.rotation=Math.floor(360*Math.random())+0,i.x=Math.random()*(this.stage.width-50)+50,i.y=Math.random()*this.stage.height-this.stage.height,i.frame=0,i.maxFrame=20,this.balls[this.balls.length]=i,this.current+=1,setTimeout((function(){t.generate()}),50)}},render:function(){var t=this,e=this.browserX!==window.screenX||this.browserY!==window.screenY,i=0,n=0;e&&(i=this.browserX-window.screenX,this.browserX=window.screenX,n=this.browserY-window.screenY,this.browserY=window.screenY),Object(l.each)(this.balls,(function(o,s){t.update(o,s),e&&(t.balls[s].vx+=.05*i,t.balls[s].vy+=.1*n)})),this.draw(),this.raf=requestAnimationFrame(this.render)},draw:function(){var t=this;this.context.clearRect(0,0,this.stage.width,this.stage.height),Object(l.each)(this.balls,(function(e,i){t.context.beginPath(),t.context.save(),t.context.arc(t.balls[i].x,t.balls[i].y,t.balls[i].size,0,2*Math.PI),t.context.clip(),t.context.translate(t.balls[i].x,t.balls[i].y),t.context.rotate(t.balls[i].rotation),t.context.drawImage(t.$refs.Image,140*t.balls[i].frame,0,140,140,-70,-70,140,140),t.balls[i].frame=(t.balls[i].frame+1)%t.balls[i].maxFrame,t.context.restore(),t.context.closePath()}))},update:function(t,e){this.collisionCheck();t.dragging?(t.vx=t.x-t.ox,t.vy=t.y-t.oy,t.ox=t.x,t.oy=t.y,t.x=this.mouseX,t.y=this.mouseY,t.x+t.size>this.stage.width?t.x=this.stage.width-t.size:t.x-t.size<0&&(t.x=0+t.size),t.y+t.size>this.stage.height?t.y=this.stage.height-t.size:t.y-t.size<0&&(t.y=0+t.size)):(t.x+=t.vx,t.y+=t.vy,t.x+t.size>this.stage.width?(t.x=this.stage.width-t.size,t.vx=-t.vx*t.bounce):t.x-t.size<0&&(t.x=0+t.size,t.vx=-t.vx*t.bounce),t.y+t.size>this.stage.height&&(t.y=this.stage.height-t.size,t.vy=-t.vy*t.bounce),t.vx*=.98,t.vy=.98*t.vy+.7),this.balls[e]=t},collisionCheck:function(){for(var t=0;t<this.total-1;t+=1)for(var e=t+1;e<this.total;e+=1)if(this.balls[e]&&this.balls[t]){var i=this.balls[e].x-this.balls[t].x,n=this.balls[e].y-this.balls[t].y,o=Math.sqrt(i*i+n*n),s=this.balls[t].size+this.balls[e].size;if(o<s){var r=this.balls[t].x+i/o*s,a=this.balls[t].y+n/o*s,l=r-this.balls[e].x,c=a-this.balls[e].y;this.balls[t].x-=l,this.balls[t].y-=c,this.balls[e].x+=l,this.balls[e].y+=c,this.balls[t].vx-=.4*l,this.balls[t].vy-=.4*c,this.balls[e].vx+=.4*l,this.balls[e].vy+=.4*c}}},getMouseXY:function(t){return this.mouseX=t.pageX||t.clientX+document.body.scrollLeft,this.mouseY=t.pageY||t.clientY+document.body.scrollTop,t.targetTouches&&(this.mouseX=t.targetTouches[0].pageX,this.mouseY=t.targetTouches[0].pageY),this.mouseX<0&&(this.mouseX=0),this.mouseY<0&&(this.mouseY=0),!0},onMouseDown:function(){var t=this;Object(l.each)(this.balls,(function(e,i){var n=t.mouseX-e.x,o=t.mouseY-e.y;Math.sqrt(n*n+o*o)<e.size&&(t.$refs.Audio[t.nextSound-1].play(),t.nextRandomSound(),t.balls[i].dragging=!0,t.currentDrag=t.balls[i],t.currentDrag.index=i)}))},onMouseUp:function(){null!=this.currentDrag&&(this.balls[this.currentDrag.index].dragging=!1,this.currentDrag.dragging=!1)},nextRandomSound:function(){var t=Object(l.random)(1,6);return t===this.nextSound?this.nextRandomSound():(this.nextSound=t,t)}}}),g=(i("XBTE"),i("8Bj2")),b=i.n(g),y=Object(h.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"BouncyCats"},[e("canvas",{ref:"Stage"}),e("g-image",{ref:"Image",staticClass:"image",attrs:{src:i("lBZD"),alt:""}}),this._l([1,2,3,4,5,6],(function(t){return e("audio",{key:"audio-"+t,ref:"Audio",refInFor:!0},[e("source",{attrs:{src:i("GqlE")("./"+t+".mp3"),type:"audio/mpeg"}})])}))],2)}),[],!1,null,"61953a68",null);"function"==typeof b.a&&b()(y);var x=y.exports,_={name:"PageFourOFour",components:{UiCta:a.a,TheMarquee:p,BouncyCats:x},mixins:[r.a],data:function(){return{}},computed:Object(n.a)(Object(n.a)({},Object(o.b)({locale:"I18n/localeName",isVpDesktop:"Interface/isVpDesktop"})),{},{seo:function(){return{title:"404 - KFFEIN"}},url:function(){return"".concat(window.location.origin,"/").concat(this.locale)}}),mounted:function(){var t=this;this.$store.commit("App/SET_PAGE_READY"),this.$nextTick((function(){t.isAnimating(),t.$store.dispatch("Interface/ENABLE_SCROLL")}))},methods:{redirect:function(){window.location.href=this.url},isAnimating:function(){s.b.timeline({delay:.5}).fromTo(this.$refs.Left.$el,.5,{x:"-100%",z:-1,alpha:0},{x:0,z:-1,alpha:1,ease:"power4.out"}).fromTo(this.$refs.Top.$el,.5,{y:"-100%",z:-1,alpha:0},{y:0,z:-1,alpha:1,ease:"power4.out"},.1).fromTo(this.$refs.Right.$el,.5,{x:"200%",z:-1,alpha:0},{x:this.isVpDesktop?-80:-49,z:-1,alpha:1,ease:"power4.out"},.2).fromTo(this.$refs.Bottom.$el,.5,{y:"100%",z:-1,alpha:0},{y:0,z:-1,alpha:1,ease:"power4.out"},.3)}}},w=(i("Udxw"),i("4cwx")),S=i.n(w),O=Object(h.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"PageFourOFour"},[i("TheMarquee",{ref:"Left",staticClass:"left",attrs:{text:t.$t("PAGE_404.not_found_left")}}),i("TheMarquee",{ref:"Top",staticClass:"top",attrs:{inverted:!0,text:t.$t("PAGE_404.not_found_top")}}),t.$t("PAGE_404.cta")?i("UiCta",{staticClass:"link",attrs:{label:t.$t("PAGE_404.cta"),action:t.redirect}}):t._e(),i("TheMarquee",{ref:"Right",staticClass:"right",attrs:{text:t.$t("PAGE_404.not_found_right")}}),i("TheMarquee",{ref:"Bottom",staticClass:"bottom",attrs:{inverted:!0,text:t.$t("PAGE_404.not_found_bottom")}}),i("BouncyCats")],1)}),[],!1,null,null,null);"function"==typeof S.a&&S()(O);e.default=O.exports},"8Bj2":function(t,e){},BzYT:function(t,e,i){var n=i("xFgl"),o=i("OHzE").f,s={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return r&&"[object Window]"==s.call(t)?function(t){try{return o(t)}catch(t){return r.slice()}}(t):o(n(t))}},G4ji:function(t,e,i){"use strict";i("pol5"),i("IjEv"),i("l2Ro"),i("mSpg");var n=i("VTBJ"),o=i("LvDl"),s=i("L2JU");e.a={metaInfo:function(){var t;return{title:null===(t=this.seo)||void 0===t?void 0:t.title,meta:this.seo_mixin__info_metas,link:this.seo_mixin__info_links,htmlAttrs:{lang:this.seo_mixin__iso}}},computed:Object(n.a)(Object(n.a)({},Object(s.b)({seo_mixin__locale:"I18n/localeCode",seo_mixin__iso:"I18n/localeIso",seo_mixin__locale_alternate:"I18n/otherLocaleIso",seo_mixin__translated_url:"I18n/translatedUrl"})),{},{seo_mixin__url:function(){return"".concat("https://kffein.com").concat(this.$route.fullPath)},seo_mixin__translated_url:function(){return this.$context.translated_url||this.translated_url},seo_mixin__url_alternate:function(){return"".concat("https://kffein.com").concat(this.seo_mixin__translated_url)},seo_mixin__sitename:function(){var t="SEO.sitename";return this.$te(t)?this.$t(t):null},seo_mixin__fbAppId:function(){return"597866454288478"}}),watch:{seo:{immediate:!0,handler:function(t){t&&this.seo_mixin__setMetas()}}},methods:{seo_mixin__setMetas:function(){var t,e;if(!this.seo)throw new Error("Missing data `seo`");var i=[],n=this.seo,s=n.description,r=n.keywords;Object(o.each)({description:s,keywords:r},(function(t,e){t&&i.push({name:e,content:t,vmid:e})}));var a,l,c,u,h,f,d={},m=null!==(t=null===(e=this.seo)||void 0===e?void 0:e.socials)&&void 0!==t?t:{},p=m.facebook,v=m.twitter;p&&(d.fb={app_id:this.seo_mixin__fbAppId},d.og={title:p.title,description:p.description,"image:url":null===(a=p.image)||void 0===a?void 0:a.url,"image:alt":null===(l=p.image)||void 0===l?void 0:l.alt,"image:width":null===(c=p.image)||void 0===c?void 0:c.width,"image:height":null===(u=p.image)||void 0===u?void 0:u.height,url:this.seo_mixin__url,locale:this.seo_mixin__locale,"locale:alternate":this.seo_mixin__locale_alternate,type:"website",site_name:this.seo_mixin__sitename});v&&(d.twitter={title:v.title,description:v.description,image:null===(h=v.image)||void 0===h?void 0:h.url,"image:alt":null===(f=v.image)||void 0===f?void 0:f.alt,card:"summary_large_image",url:this.seo_mixin__url});Object(o.each)(d,(function(t,e){Object(o.each)(t,(function(t,n){if(t){var o="".concat(e,":").concat(n);i.push({vmid:o,property:o,content:t})}}))})),this.seo_mixin__info_metas=i,this.seo_mixin__translated_url&&(this.seo_mixin__info_links=[{vmid:"alternate",rel:"alternate",href:this.seo_mixin__url_alternate,hreflang:this.seo_mixin__locale_alternate}]),"language"===this.$route.name&&(this.seo_mixin__info_links=[{vmid:"canonical",rel:"canonical",href:"https://kffein.com/fr"},{vmid:"alternate",rel:"alternate",href:"https://kffein.com/en",hreflang:"en"}]),this.is404&&i.push({name:"prerender-status-code",content:"404"})}}}},GaaO:function(t,e,i){var n=i("qcUw");e.f=n},GqlE:function(t,e,i){var n={"./1.mp3":"IK9Q","./2.mp3":"NlGM","./3.mp3":"2I9N","./4.mp3":"6oSV","./5.mp3":"gYUT","./6.mp3":"63Hk"};function o(t){var e=s(t);return i(e)}function s(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=s,t.exports=o,o.id="GqlE"},IK9Q:function(t,e,i){t.exports=i.p+"assets/media/1.a2293c60.mp3"},IjEv:function(t,e,i){"use strict";var n=i("EqoQ"),o=i("3yG5"),s=i("RByB"),r=i("AC+g"),a=i("bdo+"),l=i("cQx/").f,c=i("3Zg8"),u=s.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var h={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(h[e]=!0),e};c(f,u);var d=f.prototype=u.prototype;d.constructor=f;var m=d.toString,p="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;l(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=m.call(t);if(r(h,t))return"";var i=p?e.slice(7,-1):e.replace(v,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:f})}},NlGM:function(t,e,i){t.exports=i.p+"assets/media/2.c894223a.mp3"},PTfx:function(t,e,i){var n=i("c10S"),o=i("AC+g"),s=i("GaaO"),r=i("cQx/").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||r(e,t,{value:s.f(t)})}},PuBE:function(t,e){},THhm:function(t,e,i){"use strict";i("zPAV"),i("TMXb"),i("hHd6"),i("hqZ9");var n=i("VTBJ"),o=i("LvDl"),s=i("z/o8"),r=i("L2JU"),a={name:"UiCta",props:{type:{type:String,default:"internal"},url:{type:String,default:null},label:{type:String,default:null},title:{type:String,default:null},scrollTo:{type:String,default:null},inversed:{type:Boolean,default:!1},action:{type:Function,default:null}},data:function(){return{tl:null,rotateTl:null}},computed:Object(n.a)(Object(n.a)({},Object(r.b)({locale:"I18n/localeName",layout:"Interface/layout",smoothScroll:"Interface/smoothScroll"})),{},{mobile:function(){return"mobile"===this.layout},tag:function(){return this.scrollTo||this.action?"div":"g-link"},_attr:function(){var t={title:this.title};return this.scrollTo||this.action||("internal"===this.type?Object(o.assign)(t,{to:"/".concat(this.url)}):Object(o.assign)(t,{href:this.url})),t}}),watch:{layout:{handler:function(t){var e=this;"mobile"!==t||this.inversed?setTimeout((function(){e.tl.resume(0),e.tl.pause()}),0):setTimeout((function(){e.tl.play()}),0)}}},mounted:function(){i.e(484).then(i.bind(null,"Ci6W")).then(this.init.bind(this))},methods:{init:function(t){var e=t.MorphSVGPlugin;s.b.registerPlugin(e),this.inversed?(e.convertToPath(this.$refs.Star),this.tl=s.b.timeline({paused:!0}).to(this.$el.querySelector(".star"),{morphSVG:this.$refs.Circle,duration:.4,ease:"elastic.inOut"})):(e.convertToPath(this.$refs.Circle),this.tl=s.b.timeline({paused:!0}).to(this.$el.querySelector(".circle"),{morphSVG:this.$refs.Star,duration:.4,ease:"elastic.inOut"})),"mobile"!==this.layout||this.inversed||this.tl.play(),s.b.to(this.$el.querySelector(".bang-bang"),60,{rotation:"-360deg",repeat:-1})},over:function(){"mobile"!==this.layout&&(this.tl.play(),s.b.to(this.$el.querySelector(".bang-bang"),.5,{rotation:"0deg",overwrite:!0,ease:"expo.out"}))},out:function(){"mobile"!==this.layout&&(this.tl.reverse(),s.b.to(this.$el.querySelector(".bang-bang"),60,{rotation:"-360deg",overwrite:!0,repeat:-1}))},click:function(t){var e;this.scrollTo?(t.preventDefault(),t.stopPropagation(),this.mobile?this.$store.dispatch("Interface/SCROLL_TO",{to:document.querySelector(this.scrollTo).offsetTop-70}):this.smoothScroll.scrollTo(document.querySelector(this.scrollTo).offsetTop,!0)):null===(e=this.action)||void 0===e||e.call(this)}}},l=(i("0Qi8"),i("KHd+")),c=i("PuBE"),u=i.n(c),h=Object(l.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"UiCta",on:{mouseout:t.out,mouseover:t.over,click:t.click}},[i(t.tag,t._b({tag:"component",staticClass:"bang-bang",attrs:{"data-inversed":t.inversed}},"component",t._attr,!1),[t._t("default",[i("svg",{staticStyle:{"enable-background":"new 0 0 196 194"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 196 194","xml:space":"preserve"}},[i("polygon",{ref:"Star",staticClass:"star fill-red",attrs:{points:"112.5,51.6 152.4,16.2 135.9,66.9 188.6,58.6 147.2,92.3 196,113.9 143,119.8\n        172.3,164.3 124.5,140.7 125.1,194 97.7,148.3 69.3,193.5 71,140.2 22.7,162.9 52.9,119 0,112 49.2,91.4 8.5,57 61,66.1 45.4,15.2\n        84.6,51.3 99.1,0 "}}),i("circle",{ref:"Circle",staticClass:"circle fill-red",attrs:{cx:"98",cy:"97",r:"50"}})]),i("span",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"label",domProps:{innerHTML:t._s(t.label)}})])],2)],1)}),[],!1,null,"eef083f6",null);"function"==typeof u.a&&u()(h);e.a=h.exports},Udxw:function(t,e,i){"use strict";i("3WRX")},XBTE:function(t,e,i){"use strict";i("yQED")},gYUT:function(t,e,i){t.exports=i.p+"assets/media/5.b648661b.mp3"},lBZD:function(t,e,i){t.exports=i.p+"assets/img/catsprite.fd631b61.png"},pol5:function(t,e,i){"use strict";var n=i("EqoQ"),o=i("RByB"),s=i("ml1h"),r=i("D59c"),a=i("3yG5"),l=i("LXrG"),c=i("L/81"),u=i("5tlu"),h=i("AC+g"),f=i("2CzT"),d=i("bdo+"),m=i("a3gQ"),p=i("RpcN"),v=i("xFgl"),g=i("gbSs"),b=i("9Rqp"),y=i("oFY8"),x=i("NUYl"),_=i("OHzE"),w=i("BzYT"),S=i("Bnsn"),O=i("r99Z"),T=i("cQx/"),E=i("QI7S"),M=i("W1M1"),$=i("C0OK"),C=i("dLMH"),j=i("kFjK"),L=i("ZTPG"),P=i("KJNj"),k=i("qcUw"),q=i("GaaO"),z=i("PTfx"),I=i("IAU4"),Y=i("YLkJ"),X=i("Od7x").forEach,A=j("hidden"),D=k("toPrimitive"),B=Y.set,G=Y.getterFor("Symbol"),F=Object.prototype,U=o.Symbol,N=s("JSON","stringify"),R=O.f,Q=T.f,H=w.f,V=E.f,J=C("symbols"),K=C("op-symbols"),W=C("string-to-symbol-registry"),Z=C("symbol-to-string-registry"),tt=C("wks"),et=o.QObject,it=!et||!et.prototype||!et.prototype.findChild,nt=a&&u((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=R(F,e);n&&delete F[e],Q(t,e,i),n&&t!==F&&Q(F,e,n)}:Q,ot=function(t,e){var i=J[t]=y(U.prototype);return B(i,{type:"Symbol",tag:t,description:e}),a||(i.description=e),i},st=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},rt=function(t,e,i){t===F&&rt(K,e,i),m(t);var n=g(e,!0);return m(i),h(J,n)?(i.enumerable?(h(t,A)&&t[A][n]&&(t[A][n]=!1),i=y(i,{enumerable:b(0,!1)})):(h(t,A)||Q(t,A,b(1,{})),t[A][n]=!0),nt(t,n,i)):Q(t,n,i)},at=function(t,e){m(t);var i=v(e),n=x(i).concat(ht(i));return X(n,(function(e){a&&!lt.call(i,e)||rt(t,e,i[e])})),t},lt=function(t){var e=g(t,!0),i=V.call(this,e);return!(this===F&&h(J,e)&&!h(K,e))&&(!(i||!h(this,e)||!h(J,e)||h(this,A)&&this[A][e])||i)},ct=function(t,e){var i=v(t),n=g(e,!0);if(i!==F||!h(J,n)||h(K,n)){var o=R(i,n);return!o||!h(J,n)||h(i,A)&&i[A][n]||(o.enumerable=!0),o}},ut=function(t){var e=H(v(t)),i=[];return X(e,(function(t){h(J,t)||h(L,t)||i.push(t)})),i},ht=function(t){var e=t===F,i=H(e?K:v(t)),n=[];return X(i,(function(t){!h(J,t)||e&&!h(F,t)||n.push(J[t])})),n};(l||($((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),i=function(t){this===F&&i.call(K,t),h(this,A)&&h(this[A],e)&&(this[A][e]=!1),nt(this,e,b(1,t))};return a&&it&&nt(F,e,{configurable:!0,set:i}),ot(e,t)}).prototype,"toString",(function(){return G(this).tag})),$(U,"withoutSetter",(function(t){return ot(P(t),t)})),E.f=lt,T.f=rt,O.f=ct,_.f=w.f=ut,S.f=ht,q.f=function(t){return ot(k(t),t)},a&&(Q(U.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),r||$(F,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:U}),X(x(tt),(function(t){z(t)})),n({target:"Symbol",stat:!0,forced:!l},{for:function(t){var e=String(t);if(h(W,e))return W[e];var i=U(e);return W[e]=i,Z[i]=e,i},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(h(Z,t))return Z[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!l,sham:!a},{create:function(t,e){return void 0===e?y(t):at(y(t),e)},defineProperty:rt,defineProperties:at,getOwnPropertyDescriptor:ct}),n({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ut,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),N)&&n({target:"JSON",stat:!0,forced:!l||u((function(){var t=U();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))}))},{stringify:function(t,e,i){for(var n,o=[t],s=1;arguments.length>s;)o.push(arguments[s++]);if(n=e,(d(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),o[1]=e,N.apply(null,o)}});U.prototype[D]||M(U.prototype,D,U.prototype.valueOf),I(U,"Symbol"),L[A]=!0},qi7N:function(t,e,i){"use strict";i("qp+q")},"qp+q":function(t,e,i){},vGtL:function(t,e){},vPt4:function(t,e,i){},yQED:function(t,e,i){},zPAV:function(t,e,i){"use strict";var n=i("EqoQ"),o=i("2CzT"),s=[].reverse,r=[1,2];n({target:"Array",proto:!0,forced:String(r)===String(r.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),s.call(this)}})}}]);