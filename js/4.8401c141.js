(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        現場紀錄表\n      ")])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Essential Links\n      ")]),e._l(e.essentialLinks,(function(t){return n("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),n("q-page-container",[n("router-view")],1)],1)},l=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{attrs:{clickable:"",to:e.link}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))])],1)],1)},i=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=n("2877"),u=n("66e5"),p=n("4074"),b=n("0016"),d=n("0170"),f=n("eebe"),m=n.n(f),w=Object(c["a"])(s,r,i,!1,null,null,null),k=w.exports;m()(w,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:b["a"],QItemLabel:d["a"]});const q=[{title:"現場紀錄表",icon:"school",link:"/PageFieldRecord"}];var v={name:"MainLayout",components:{EssentialLink:k},data(){return{leftDrawerOpen:!1,essentialLinks:q}}},L=v,Q=n("4d5a"),_=n("e359"),g=n("65c6"),y=n("9c40"),h=n("6ac5"),O=n("9404"),D=n("1c1c"),E=n("09e3"),I=Object(c["a"])(L,a,l,!1,null,null,null);t["default"]=I.exports;m()(I,"components",{QLayout:Q["a"],QHeader:_["a"],QToolbar:g["a"],QBtn:y["a"],QToolbarTitle:h["a"],QDrawer:O["a"],QList:D["a"],QItemLabel:d["a"],QPageContainer:E["a"]})}}]);