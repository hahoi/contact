(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"025a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-slide-item",{attrs:{"right-color":"red"},on:{left:t.onLeft,right:t.onRight},scopedSlots:t._u([{key:"left",fn:function(){return[a("q-icon",{attrs:{name:"edit"}}),t._v("修改\n    ")]},proxy:!0},{key:"right",fn:function(){return[a("q-icon",{attrs:{name:"delete"}}),t._v("刪除\n    ")]},proxy:!0}])},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.dowork}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:t.task.photo}})])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(t.task.name))]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[a("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.task.address))]),t._v("\n          "+t._s(t.task.professionalTitle)+"-"+t._s(t.task.clubTitle)+"\n        ")])],1),a("q-item-section",{attrs:{side:"",top:""}},t._l(t.task.star,(function(t){return a("div",{staticClass:"text-orange row"},[a("q-icon",{attrs:{name:"star"}})],1)})),0)],1)],1),a("q-separator",{attrs:{inset:"item"}}),a("q-dialog",{attrs:{maximized:!0,persistent:"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialogList,callback:function(e){t.dialogList=e},expression:"dialogList"}},[a("q-card",{staticClass:"bg-teal text-white"},[a("q-bar",[a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t._v("關閉\n          "),a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),a("q-card-section",[a("task-list",{attrs:{task:t.copyTask,id:t.id}})],1),a("q-card-actions",{attrs:{align:"around"}},[a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t._v("關閉")])],1)],1)],1)],1)},i=[],r=(a("5319"),a("ded3")),o=a.n(r),c=a("2f62"),l=(a("11ec"),{name:"",props:["task","id"],data(){return{dialogList:!1,maximizedToggle:!0,copyTask:null}},components:{TaskList:a("8e02").default},created(){},mounted(){},watch:{},computed:o()({},Object(c["d"])("fieldrecord",["search"])),methods:{onLeft({reset:t}){this.$q.notify("修改這筆資料"),this.finalize(t)},onRight({reset:t}){this.$q.notify("刪除這筆資料！"),this.finalize(t)},finalize(t){this.timer=setTimeout(()=>{t()},1e3)},beforeDestroy(){clearTimeout(this.timer)},dowork(){this.dialogList=!0;let t=Object.assign({},this.task);if(this.search){let e=this.search.split(/\s+/);e.forEach((e,a)=>{Object.keys(t).forEach(a=>{if("photo"!=a&&"string"===typeof t[a]){let s=t[a],i=e.toLowerCase();if(s.includes(i)){let i=new RegExp(e,"i"),r=s.match(i);r&&(s=s.replace(i,"<span class='bg-red text-white'>"+r[0]+"</span>"),t[a]=s)}}})})}this.copyTask=t}}}),n=l,d=(a("d3ac"),a("2877")),m=a("de1d"),p=a("0016"),q=a("66e5"),u=a("4074"),b=a("cb32"),v=a("0170"),_=a("eb85"),f=a("24e8"),k=a("f09f"),h=a("d847"),g=a("2c91"),C=a("9c40"),L=a("05c0"),Q=a("a370"),w=a("4b7e"),T=a("4983"),y=a("714f"),x=a("7f67"),P=a("eebe"),M=a.n(P),S=Object(d["a"])(n,s,i,!1,null,null,null);e["default"]=S.exports;M()(S,"components",{QSlideItem:m["a"],QIcon:p["a"],QItem:q["a"],QItemSection:u["a"],QAvatar:b["a"],QItemLabel:v["a"],QSeparator:_["a"],QDialog:f["a"],QCard:k["a"],QBar:h["a"],QSpace:g["a"],QBtn:C["a"],QTooltip:L["a"],QCardSection:Q["a"],QCardActions:w["a"],QScrollArea:T["a"]}),M()(S,"directives",{Ripple:y["a"],ClosePopup:x["a"]})},"0519":function(t,e,a){"use strict";var s=a("bd35"),i=a.n(s);i.a},"2faa":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[t.tasksDownloaded?[a("div",{staticClass:"row q-ma-md"},[a("search"),a("sort")],1),a("div",{staticClass:"q-px-md q-pb-lg absolute full-width column"},[a("q-list",{attrs:{bordered:"",separator:""}},t._l(t.FieldReordFiltered,(function(t,e){return a("task-listitem",{key:e,attrs:{task:t,id:e}})})),1)],1)]:t._e(),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"accent"}})],1)],2)},i=[],r=a("ded3"),o=a.n(r),c=a("2f62"),l={name:"",data(){return{}},components:{TaskListitem:a("025a").default,search:a("c106").default,sort:a("3a5e").default},created(){},mounted(){},watch:{},computed:o()(o()({},Object(c["d"])("fieldrecord",["FieldReord","tasksDownloaded"])),Object(c["c"])("fieldrecord",["FieldReordFiltered"])),methods:{}},n=l,d=a("2877"),m=a("9989"),p=a("4983"),q=a("1c1c"),u=a("5096"),b=a("9c40"),v=a("eebe"),_=a.n(v),f=Object(d["a"])(n,s,i,!1,null,null,null);e["default"]=f.exports;_()(f,"components",{QPage:m["a"],QScrollArea:p["a"],QList:q["a"],QPageScroller:u["a"],QBtn:b["a"]})},"3a5e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-select",{staticClass:"col q-ml-sm",attrs:{options:t.options,"emit-value":"","map-options":"",filled:"",label:"排序","stack-label":""},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}})},i=[],r=(a("4e82"),a("ded3")),o=a.n(r),c=a("2f62"),l={data(){return{options:[{label:"姓名",value:"name"},{label:"地址",value:"address"}]}},computed:o()(o()({},Object(c["d"])("fieldrecord",["sort"])),{},{sortBy:{get(){return this.sort},set(t){this.setSort(t)}}}),methods:o()({},Object(c["b"])("fieldrecord",["setSort"]))},n=l,d=(a("0519"),a("2877")),m=a("ddd8"),p=a("eebe"),q=a.n(p),u=Object(d["a"])(n,s,i,!1,null,"9a5609ec",null);e["default"]=u.exports;q()(u,"components",{QSelect:m["a"]})},"8e02":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white text-black"},[a("q-card-section",[a("q-list",[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:t.task.photo}})])],1),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.name)}},[t._v(t._s(t.task.name))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 手機： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.mobilePhone)}},[t._v(t._s(t.task.mobilePhone))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 公司電話： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.mobilePhone)}},[t._v(t._s(t.task.mobilePhone))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 地址： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.address)}},[t._v(t._s(t.task.address))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 職業職稱： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.professionalTitle)}},[t._v(t._s(t.task.professionalTitle))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 社團職稱： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.clubTitle)}},[t._v(t._s(t.task.clubTitle))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 人脈關係： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.personalConnections)}},[t._v(t._s(t.task.personalConnections))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 初次見面日期： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.firstMeetDate)}},[t._v(t._s(t.task.firstMeetDate))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 初次見面地點： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.firstMeetLocation)}},[t._v(t._s(t.task.firstMeetLocation))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 建言事項： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.suggestions)}},[t._v(t._s(t.task.suggestions))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 陳情事項： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.petitionMatters)}},[t._v(t._s(t.task.petitionMatters))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 飲食： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.diet)}},[t._v(t._s(t.task.diet))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 興趣： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.interest)}},[t._v(t._s(t.task.interest))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 話題： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.topic)}},[t._v(t._s(t.task.topic))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[t._v(" 其他： ")]),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(t.task.other)}},[t._v(t._s(t.task.other))])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"col-5",attrs:{avatar:""}},[a("q-icon",{attrs:{color:"red",name:"local_gas_station"}})],1),a("q-item-section",[a("q-item-label",[t._v("Gas Station")]),a("q-item-label",{attrs:{caption:""}},[t._v("Fill your gas tank.")])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",thumbnail:""}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/mountains.jpg"}})])],1),a("q-separator",{attrs:{spaced:""}}),a("q-separator",{attrs:{spaced:""}})],1)],1)],1)},i=[],r={name:"",props:["task","id"],data(){return{}},components:{},created(){},mounted(){},watch:{},computed:{},methods:{}},o=r,c=a("2877"),l=a("a370"),n=a("1c1c"),d=a("66e5"),m=a("4074"),p=a("cb32"),q=a("0170"),u=a("eb85"),b=a("0016"),v=a("eebe"),_=a.n(v),f=Object(c["a"])(o,s,i,!1,null,null,null);e["default"]=f.exports;_()(f,"components",{QCardSection:l["a"],QList:n["a"],QItem:d["a"],QItemSection:m["a"],QAvatar:p["a"],QItemLabel:q["a"],QSeparator:u["a"],QIcon:b["a"]})},a646:function(t,e,a){},bd35:function(t,e,a){},c106:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-input",{directives:[{name:"select-all",rawName:"v-select-all"}],staticClass:"col",attrs:{outlined:"",label:"Search"},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.searchField=""}},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.searchField?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){t.searchField=""}}}):t._e(),a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchField,callback:function(e){t.searchField=e},expression:"searchField"}})},i=[],r=a("ded3"),o=a.n(r),c=a("2f62");const l={inserted(t){let e=t.querySelector(".q-field__native");e.addEventListener("focus",()=>{e.value.length&&e.select()})}};var n={computed:o()(o()({},Object(c["d"])("fieldrecord",["search"])),{},{searchField:{get(){return this.search},set(t){this.setSearch(t)}}}),methods:o()({},Object(c["b"])("fieldrecord",["setSearch"])),directives:{selectAll:l}},d=n,m=a("2877"),p=a("27f9"),q=a("0016"),u=a("eebe"),b=a.n(u),v=Object(m["a"])(d,s,i,!1,null,null,null);e["default"]=v.exports;b()(v,"components",{QInput:p["a"],QIcon:q["a"]})},d3ac:function(t,e,a){"use strict";var s=a("a646"),i=a.n(s);i.a}}]);