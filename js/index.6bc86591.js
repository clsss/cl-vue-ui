!function(t){function e(e){for(var s,a,o=e[0],r=e[1],c=e[2],u=0,f=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&f.push(l[a][0]),l[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);for(d&&d(e);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var r=n[o];0!==l[r]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},l={index:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window.webpackJsonp=window.webpackJsonp||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=r;i.push([0,"chunk-vendors"]),n()}({0:function(t,e,n){t.exports=n("a1ec")},"0101":function(t,e,n){},"05b0":function(t,e,n){"use strict";var s=n("e23b");n.n(s).a},"06d1":function(t,e,n){},1237:function(t,e,n){"use strict";var s=n("5e76");n.n(s).a},"233a":function(t,e,n){"use strict";var s=n("0101");n.n(s).a},"393e":function(t,e,n){},"3e38":function(t,e,n){"use strict";var s=n("06d1");n.n(s).a},"5e76":function(t,e,n){},"76b3":function(t,e,n){},"829f":function(t,e){!function(t){let e=0,n=1;for(;t--;)e=n+e,n=e-n}(2)},"84ff":function(t,e,n){"use strict";var s=n("cb32");n.n(s).a},"850d":function(t,e,n){"use strict";var s=n("ace4");n.n(s).a},"9b92":function(t,e,n){},"9ec3":function(t,e,n){"use strict";var s=n("c617");n.n(s).a},a1ec:function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),l={props:{menus:{type:Object}},data:()=>({treeData:{title:"目录",children:[{title:"目录1"},{title:"目录2"},{title:"目录3",children:[{title:"目录3-1"},{title:"目录3-2"}]}]}}),watch:{menus:{handler:function(t,e){this.treeData=t},deep:!0}},created(){this.treeData=this.menus},methods:{makeFolder:function(t){Vue.set(t,"children",[]),this.addItem(t)},addItem:function(t){t.children.push({title:"新建"})}}},i=(n("84ff"),n("2877")),a=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-tree"},[n("cl-tree-item",{attrs:{item:t.treeData},on:{"make-folder":t.makeFolder,"add-item":t.addItem}})],1)}),[],!1,null,"73ddd073",null).exports,o={methods:{onClick(){}}},r=(n("9ec3"),Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-alert"},[n("h2",{staticClass:"title-h3"},[t._v("提示-alert")]),n("div",{staticClass:"row"},[n("cl-alert",{attrs:{title:"成功提示的文案",type:"success"}},[t._v(" 文字说明文字说明文字说明文字说明 ")]),n("cl-alert",{attrs:{title:"消息提示的文案",description:"文字描述文字描述文字描述",type:"info"}}),n("cl-alert",{attrs:{title:"警告提示的文案",type:"warning"}}),n("cl-alert",{attrs:{title:"错误提示的文案",type:"error"}})],1),t._v(" 主题：light/dark "),n("div",{staticClass:"row"},[n("cl-alert",{attrs:{title:"成功提示的文案",type:"success",effect:"dark"}}),n("cl-alert",{attrs:{title:"消息提示的文案",type:"info",effect:"dark"}}),n("cl-alert",{attrs:{title:"警告提示的文案",type:"warning",effect:"dark"}}),n("cl-alert",{attrs:{title:"错误提示的文案",type:"error",effect:"dark"}})],1)])}),[],!1,null,"24cc3ed8",null).exports),c={methods:{onClick(){}}},d=(n("3e38"),Object(i.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-button"},[n("h2",{staticClass:"title-h3"},[t._v("按钮-button")]),n("div",{staticClass:"row"},[n("cl-button",{attrs:{type:"dashed"},on:{click:t.onClick}},[t._v("按钮")]),n("cl-button",[t._v("按钮")]),n("cl-button",{attrs:{type:"success"}},[t._v("按钮")]),n("cl-button",{attrs:{type:"info"}},[t._v("按钮")]),n("cl-button",{attrs:{type:"warning"}},[t._v("按钮")])],1),n("div",{staticClass:"row"},[n("cl-button",{attrs:{plain:"",type:"dashed"}},[t._v("按钮")]),n("cl-button",{attrs:{plain:"",type:"primary"}},[t._v("按钮")]),n("cl-button",{attrs:{plain:"",type:"success"}},[t._v("按钮")]),n("cl-button",{attrs:{plain:"",type:"info"}},[t._v("按钮")]),n("cl-button",{attrs:{plain:"",type:"warning"}},[t._v("按钮")])],1),n("div",{staticClass:"row"},[n("cl-button",{attrs:{plain:"",type:"dashed",disabled:""}},[t._v("按钮")]),n("cl-button",{attrs:{plain:"",type:"primary",disabled:""}},[t._v("按钮")]),n("cl-button",{attrs:{plain:"",type:"success",disabled:""}},[t._v("按钮")]),n("cl-button",{attrs:{plain:"",type:"info",disabled:""}},[t._v("按钮")]),n("cl-button",{attrs:{plain:"",type:"warning",disabled:""}},[t._v("按钮")])],1)])}),[],!1,null,"4a713351",null).exports),u={data:()=>({showDialog:!1}),methods:{toggleDialog(){this.showDialog=!this.showDialog},confirm(t){this.showDialog=t},cancel(t){this.showDialog=t}}},f=Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-dialog"},[n("h2",{staticClass:"title-h3"},[t._v("弹窗-dialog")]),n("cl-dialog",{attrs:{show:t.showDialog,showCancel:!0,width:"400",title:"弹窗",confirmText:"知道了",cancelText:"关闭"},on:{callConfirm:t.confirm,callCancel:t.cancel}},[n("p",{staticClass:"mg-20 text-center"},[t._v("这是一个自定义弹窗，通过slot插槽展示内容")])]),n("cl-button",{attrs:{plain:""},on:{click:t.toggleDialog}},[t._v("自定义弹窗")])],1)}),[],!1,null,"410d031c",null).exports,p={props:{menus:{type:Object}},data:()=>({}),methods:{}},h={name:"app",components:{ShowTree:a,ShowAlert:r,ShowButton:d,ShowDialog:f,ShowLoader:Object(i.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-loader"},[n("h2",{staticClass:"title-h3"},[t._v("加载-loading")]),n("div",[n("cl-loading")],1)])}),[],!1,null,"3833ae7a",null).exports},data:()=>({menus:{title:"组件目录",children:[{title:"按钮",type:"button"},{title:"弹窗",type:"dialog"}]}})},v=(n("233a"),Object(i.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"app-content"},[n("div",{staticClass:"menu"},[n("show-tree",{attrs:{menus:t.menus}})],1),n("div",{staticClass:"main"},[n("div",{staticClass:"mb-10"},[n("show-alert")],1),n("div",{staticClass:"mb-10"},[n("show-button")],1),n("div",{staticClass:"mb-10"},[n("show-dialog")],1),n("div",{staticClass:"mb-10"},[n("show-loader")],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"app-header"},[n("strong",[t._v("collin 自定义组件2")])])}],!1,null,null,null).exports),m={name:"ClAlert",props:{title:{type:String,default:""},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}},data:()=>({visible:!0}),methods:{close(){this.visible=!1,this.$emit("close")}},computed:{typeClass(){return"cl-alert--"+this.type},isBoldTitle(){return this.description||this.$slots.default?"is-bold":""}}},b=(n("05b0"),Object(i.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"cl-alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"cl-alert",class:[t.typeClass,t.center?"is-center":"","is-"+t.effect],attrs:{role:"alert"}},[n("div",{staticClass:"cl-alert__content"},[t.title||t.$slots.title?n("span",{staticClass:"cl-alert__title",class:[t.isBoldTitle]},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t.$slots.default&&!t.description?n("p",{staticClass:"cl-alert__description"},[t._t("default")],2):t._e(),t.description&&!t.$slots.default?n("p",{staticClass:"cl-alert__description"},[t._v(t._s(t.description))]):t._e(),n("i",{directives:[{name:"show",rawName:"v-show",value:t.closable,expression:"closable"}],staticClass:"cl-alert__closebtn",class:{"is-customed":""!==t.closeText,"el-icon-close":""===t.closeText},on:{click:function(e){return t.close()}}},[t._v(t._s(t.closeText))])])])])}),[],!1,null,"c7d4b288",null).exports),_={name:"ClButton",props:{type:{type:String,default:"default"},size:{type:String,default:"12"},icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{buttonSize(){return this.size},buttonDisabled(){return this.disabled}},methods:{handleClick(t){this.$emit("click",t)}}},y=(n("850d"),Object(i.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"cl-button",class:[t.type?"cl-button--"+t.type:"",t.buttonSize?"cl-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}],attrs:{disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.icon?n("i",{class:t.icon}):t._e(),t.$slots.default?n("span",[t._t("default")],2):t._e()])}),[],!1,null,null,null).exports),w={name:"ClDialog",props:{show:{type:Boolean,default:!1,required:!0},width:{type:[String,Number],default:"500"},title:{type:String,required:!0},showCancel:{typs:Boolean,default:!1,required:!1},cancelText:{type:String,default:"取消",required:!1},confirmText:{type:String,default:"确定",required:!1}},data(){return{name:"Dialog",showSelf:!1,zIndex:this.getZIndex(),bodyOverflow:""}},watch:{show(t){t?this.showSelf=t:this.closeMyself()}},created(){this.showSelf=this.show},mounted(){},methods:{forbidScroll(){this.bodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"},sloveBodyOverflow(){document.body.style.overflow=this.bodyOverflow},closeMyself(t){this.showSelf=!1,this.sloveBodyOverflow()},cancel(){this.$emit("callCancel",!1)},confirm(){this.$emit("callConfirm",!1)},getZIndex(){let t=20190315;return t++}}},g=(n("ee96"),Object(i.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showSelf?n("div",{staticClass:"cl-dialog",style:{"z-index":t.zIndex}},[n("div",{staticClass:"dialog-mark",style:{"z-index":t.zIndex+1},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeMyself(e)}}}),n("transition",{attrs:{name:"dialog"}},[n("div",{staticClass:"dialog-content",style:{"z-index":t.zIndex+2,width:Number(t.width)+"px"}},[t.title?n("section",{staticClass:"header"},[t._v(t._s(t.title))]):t._e(),n("section",{staticClass:"dialog-body"},[t._t("default")],2),n("section",{staticClass:"dialog-footer"},[t.showCancel?n("div",{staticClass:"btn btn-refuse",on:{click:t.cancel}},[t._v(t._s(t.cancelText))]):t._e(),n("div",{staticClass:"btn btn-confirm",on:{click:t.confirm}},[t._v(t._s(t.confirmText))])])])])],1):t._e()}),[],!1,null,"54b1c1a3",null).exports),C={name:"ClTreeItem",props:{item:Object},data:()=>({isOpen:!1}),computed:{isFolder:function(){return this.item.children&&this.item.children.length}},methods:{toggle:function(){this.isFolder&&(this.isOpen=!this.isOpen)},makeFolder:function(){this.isFolder||(this.$emit("make-folder",this.item),this.isOpen=!0)},onAdd(t){}}},x=(n("1237"),Object(i.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tree-item"},[n("div",{staticClass:"f-content",class:{bold:t.isFolder},on:{click:t.toggle,dblclick:t.makeFolder}},[t.isFolder?n("span",[t._v(" "+t._s(t.isOpen?"▼":"➤")+" ")]):t._e(),n("span",[t._v(" "+t._s(t.item.title)+" ")]),n("strong",{staticClass:"fr",attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.onAdd(t.item)}}},[t._v("✚")])]),t.isFolder?n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}]},t._l(t.item.children,(function(e,s){return n("cl-tree-item",{key:s,attrs:{item:e},on:{"make-folder":function(e){return t.$emit("make-folder",e)},"add-item":function(e){return t.$emit("add-item",e)}}})})),1):t._e()])}),[],!1,null,null,null).exports),O={name:"ClLoading",data:()=>({}),computed:{},methods:{}};n("ef4e");const k=[b,y,g,x,Object(i.a)(O,(function(){var t=this;t.$createElement;return t._self._c,t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cl-loading"},[e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span")])}],!1,null,"8ebe8aa0",null).exports],S=function(t){k.forEach(e=>{t.component(e.name,e)})};"undefined"!=typeof window&&window.Vue&&S(window.Vue);var $={install:S,...k};n("76b3"),n("829f"),s.a.config.productionTip=!1,s.a.use($),new s.a({render:t=>t(v)}).$mount("#app")},ace4:function(t,e,n){},c617:function(t,e,n){},cb32:function(t,e,n){},e23b:function(t,e,n){},ee96:function(t,e,n){"use strict";var s=n("393e");n.n(s).a},ef4e:function(t,e,n){"use strict";var s=n("9b92");n.n(s).a}});
//# sourceMappingURL=index.6bc86591.js.map