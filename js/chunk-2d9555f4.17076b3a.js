(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d9555f4"],{"159d":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("table",{staticClass:"table mt-5"},[t._m(0),t.orders.length?e("tbody",t._l(t.sortOrder,(function(a,n){return e("tr",{key:n},[e("td",[t._v(t._s(t._f("transdate")(a.create_at)))]),e("td",[t._v(t._s(a.user.name))]),e("td",[t._v(t._s(a.user.email))]),e("th",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,n){return e("li",{key:n},[t._v(" "+t._s(a.product.title)+" / 數量："+t._s(a.qty)+t._s(a.product.unit)+" ")])})),0)]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.total)))]),e("td",{staticClass:"text-right"},[a.is_paid?e("span",{staticClass:"text-success"},[t._v("Paid")]):e("span",{staticClass:"text-danger"},[t._v("Unpaid")])])])})),0):t._e()]),e("Pagination",{attrs:{"page-in":t.pagination},on:{getInfosFromPagi:t.getOrders}})],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"120"}},[t._v("Order Date")]),e("th",{attrs:{width:"160"}},[t._v("Customer Name")]),e("th",[t._v("E-mail")]),e("th",[t._v("Purchase List")]),e("th",{staticClass:"text-right",attrs:{width:"120"}},[t._v("Total")]),e("th",{staticClass:"text-right",attrs:{width:"120"}},[t._v("Paid")])])])}],s=(e("99af"),e("1799")),i={name:"Orders",data:function(){return{orders:[],pagination:{},tempOrders:{},isNew:!1,isLoading:!1}},components:{Pagination:s["a"]},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("citrus","/admin/orders?page=").concat(t);a.isLoading=!0,a.$http.get(e).then((function(t){a.isLoading=!1,a.orders=t.data.orders,a.pagination=t.data.pagination}))}},computed:{sortOrder:function(){var t=this,a=[];return t.orders.length&&(a=t.orders.sort((function(t,a){var e=t.is_paid?1:0,n=a.is_paid?1:0;return n-e}))),a}},created:function(){this.getOrders()}},o=i,c=e("2877"),l=Object(c["a"])(o,n,r,!1,null,null,null);a["default"]=l.exports},1799:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination d-flex justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:!t.pageIn.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.geInfosInPagis(t.pageIn.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pageIn.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:a===t.pageIn.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.geInfosInPagis(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pageIn.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.geInfosInPagis(t.pageIn.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},r=[],s={name:"Pagination",data:function(){return{}},props:["pageIn"],methods:{geInfosInPagis:function(t){this.$emit("getInfosFromPagi",t)}}},i=s,o=e("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);a["a"]=c.exports},8418:function(t,a,e){"use strict";var n=e("c04e"),r=e("9bf2"),s=e("5c6c");t.exports=function(t,a,e){var i=n(a);i in t?r.f(t,i,s(0,e)):t[i]=e}},"99af":function(t,a,e){"use strict";var n=e("23e7"),r=e("d039"),s=e("e8b5"),i=e("861d"),o=e("7b0b"),c=e("50c4"),l=e("8418"),u=e("65f0"),d=e("1dde"),g=e("b622"),p=e("2d00"),f=g("isConcatSpreadable"),h=9007199254740991,_="Maximum allowed index exceeded",v=p>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!i(t))return!1;var a=t[f];return void 0!==a?!!a:s(t)},x=!v||!m;n({target:"Array",proto:!0,forced:x},{concat:function(t){var a,e,n,r,s,i=o(this),d=u(i,0),g=0;for(a=-1,n=arguments.length;a<n;a++)if(s=-1===a?i:arguments[a],b(s)){if(r=c(s.length),g+r>h)throw TypeError(_);for(e=0;e<r;e++,g++)e in s&&l(d,g,s[e])}else{if(g>=h)throw TypeError(_);l(d,g++,s)}return d.length=g,d}})}}]);
//# sourceMappingURL=chunk-2d9555f4.17076b3a.js.map