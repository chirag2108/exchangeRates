(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(14),n(1)),u=n(2),s=n(4),i=n(3),m=n(5),h=(n(15),["GBP","EUR","USD","JPY","CHF","CAD","AUD","NZD","RUB","ZAR","MXN","INR"]),p=(n(16),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={rates:{}},n.formatCurrency=function(e,t){if(e===n.props.currency)return"1.0000";var a=t?1/n.state.rates[e]:n.state.rates[e];return a?Math.round(1e4*a)/1e4:a},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.currency;fetch("https://api.exchangeratesapi.io/latest?base=".concat(t)).then(function(e){return e.json()}).then(function(t){return e.setState({rates:t.rates})})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:this.props.className},r.a.createElement("td",null,"1 ",this.props.currency,"="),h.map(function(t){return r.a.createElement("td",null,e.formatCurrency(t))})),r.a.createElement("tr",{className:this.props.className},r.a.createElement("td",null,"Inverse: "),h.map(function(t){return r.a.createElement("td",null,e.formatCurrency(t,!0))})))}}]),t}(a.Component)),f=function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"exchange-table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"exchange-head"},r.a.createElement("th",null," "),h.map(function(e){return r.a.createElement("th",{key:e},e)}))),r.a.createElement("tbody",null,h.map(function(e,t){return r.a.createElement(p,{currency:e,className:t%2===1?"row-dark":""})}))))},d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Exchange Rates"),r.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.224d2b6e.chunk.js.map