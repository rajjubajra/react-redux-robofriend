(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},26:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(3),i=t.n(o),c=t(5),l=t(4),s=(t(26),t(11)),u=t(12),h=t(14),d=t(13),f=t(15),m=function(e){var n=e.name,t=e.email,r=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},g=function(e){var n=e.robots;return a.a.createElement("div",null,n.map((function(e,t){return a.a.createElement(m,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},b=function(e){e.searchfield;var n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},v=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},p=(t(27),function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(h.a)(this,Object(d.a)(n).call(this))).state={robots:[]},e}return Object(f.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state.robots,n=this.props,t=n.searchField,r=n.onSearchChange,o=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return e.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(b,{searchChange:r}),a.a.createElement(v,null,a.a.createElement(g,{robots:o}))):a.a.createElement("h1",null,"Loading")}}]),n}(r.Component)),w=Object(c.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})}}}))(p),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(28);var y={searchField:""},C=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}}));i.a.render(a.a.createElement(c.a,null,a.a.createElement(w,{store:C})),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/rajjubajra/react-redux-robofriend.git",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/rajjubajra/react-redux-robofriend.git","/service-worker.js");E?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.2ac73997.chunk.js.map