(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/cat.5506e1b7.png"},13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),l=(a(18),a(12)),s=a(1),o=a(2),u=a(3),d=a(5),m=a(4),p=a(6),_=a(10),f=a.n(_),h=a(11),v=a.n(h),b=(a(20),function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={hover:!1},a.articleRef=r.a.createRef(),a.onMouseEnter=function(e){a.props.data.disabled||(a.setState({hover:!0}),a.articleRef.current.classList.add("article__wrapper--hover"))},a.onMouseLeave=function(e){a.props.data.disabled||(a.setState({hover:!1}),a.articleRef.current.classList.remove("article__wrapper--hover"))},a.onClick=function(e){a.props.data.disabled||(a.setState({hover:!1}),a.props.onSelectionChange(a.props.data.id),a.articleRef.current.classList.toggle("article__wrapper--selected"),a.articleRef.current.classList.remove("article__wrapper--hover"))},a.renderList=function(e){return e.map(function(e,t){var a=e.split(" ").map(function(e,t){return isNaN(+e)?e+" ":r.a.createElement("span",{className:"bold",key:t},e," ")});return r.a.createElement("li",{key:t,className:"article__list-item"},a)})},a.renderTagline=function(){var e=a.state.hover,t=a.props.data.selected&&e?"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?":"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e";return r.a.createElement("p",{className:"article__tagline"},t)},a.renderAfterline=function(){var e=a.props.data,t=e.afterline;return e.disabled?t.disabled:a.props.data.selected?t.selected:r.a.createElement(n.Fragment,null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c, \u043f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",r.a.createElement("span",{tabIndex:"0",className:"article__afterline-link",onClick:a.onClick},"\u043a\u0443\u043f\u0438"),".")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.amount,n=e.about,c=e.disabled?"article__wrapper--disabled":"";return r.a.createElement("article",{className:"article__wrapper ".concat(c),ref:this.articleRef},r.a.createElement("div",{className:"article__content",onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onClick:this.onClick},r.a.createElement("div",{className:"article__background"},r.a.createElement("div",{className:"article__description"},this.renderTagline(),r.a.createElement("h3",{className:"article__title"},t.main),r.a.createElement("b",{className:"article__subtitle"},t.sub),r.a.createElement("ul",{className:"article__list"},this.renderList(n))),r.a.createElement("div",{className:"article__img-wrapper"},r.a.createElement("img",{alt:"\u043a\u043e\u0442",src:v.a,className:"article__img"}))),r.a.createElement("div",{className:"article__amount"},r.a.createElement("span",{className:"article__amount-count"},a.count),r.a.createElement("span",{className:"article__amount-unit"},a.unit))),r.a.createElement("p",{className:"article__afterline"},this.renderAfterline()))}}]),t}(n.Component));a(21);a(22).polyfill();var E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.onSelectionChange=function(e){var t=Object(s.a)(a.state.data);t[e].selected=!t[e].selected,a.setState({data:t})},a.renderList=function(){return Object(s.a)(a.state.data).map(function(e,t){return r.a.createElement("li",{key:t,className:"products__item"},r.a.createElement(b,{data:e,onSelectionChange:a.onSelectionChange}))})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;f()("/funbox-test/data.json").then(function(e){return e.json()}).then(function(e){return Object(s.a)(e).map(function(e,t){return Object(l.a)({selected:!1,id:t},e)})}).then(function(t){e.setState({data:Object(s.a)(t)})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"products__wrapper"},r.a.createElement("h2",{className:"products__title"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),r.a.createElement("ul",{className:"products__list"},this.renderList()))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.ecc8683b.chunk.js.map