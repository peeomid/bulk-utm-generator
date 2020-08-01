(this["webpackJsonputm-builder"]=this["webpackJsonputm-builder"]||[]).push([[0],{44:function(e,t,a){e.exports=a(55)},49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),l=a.n(r),c=(a(49),a(50),a(40)),s=a(30),u=a(14),i=a(9),m=a(15),p=a(16),h=a(8),g=a(17),d=a(18),v=a(77),b=a(39),E={menu:function(e,t){return Object(i.a)({},e,{color:"black"})},placeholder:function(e,t){return Object(i.a)({},e,{fontSize:"calc(10px + 1vmin)"})}},f=function(e){return e?e.map((function(e){return{label:t=e,value:t.toLowerCase().replace(/\W/g,"")};var t})):[]},C=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.props.onChange(n.props.name,function(e){return e?e.map((function(e){return e.value})):[]}(e))},n.handleCreate=function(e){var t=e;n.props.onCreateOption(n.props.name,t)},n.state={},n.handleChange.bind(Object(h.a)(n)),n.handleCreate.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"render",value:function(){var e=f(this.props.options),t=f(this.props.value);return o.a.createElement("div",null,o.a.createElement("label",null,this.props.label),o.a.createElement(b.a,{isMulti:!0,name:"sources",onChange:this.handleChange,onCreateOption:this.handleCreate,options:e,styles:E,value:t,closeMenuOnSelect:!1,placeholder:"Select or Type in to Create"}))}}]),a}(n.Component),O=a(23);function j(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var a=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+a)}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(t)}(e)}function y(e){var t=Object(O.c)();return(o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){var a=e.generateText(e.values);console.log(a),j(a),t.success("Copied to Clipboard")}},o.a.createElement("span",null,"Copy to Clipboard"))))}var x={menu:function(e,t){return Object(i.a)({},e,{color:"black"})}},N=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleInput=function(e){var t=e.target.value,a=e.target.name;n.props.handleInput(a,t)},n.handleCopy=function(e){var t=n.props.generateText(n.props.values);console.log(t)},n.state={},n.handleCopy.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.values,t=e.sources,a=e.mediums,n=e.names,r=e.terms,l=e.content,c=this.props.options,s=c.sources,u=c.mediums,i=c.names,m=c.terms,p=c.content;return o.a.createElement("div",{className:""},o.a.createElement(v.a,{container:!0,className:"form-group"},o.a.createElement(v.a,{container:!0,xs:12,sm:6},o.a.createElement(v.a,{item:!0,xs:12,className:"control-group"},o.a.createElement("label",{className:"form-label"},"URL"),o.a.createElement("input",{className:"entry",name:"urls",value:this.props.values.urls,onChange:this.handleInput})),o.a.createElement(v.a,{item:!0,xs:12,className:"control-group"},o.a.createElement(C,{name:"sources",label:"Campaign Source(s)",onChange:this.props.onChange,onCreateOption:this.props.onCreateOption,options:s,styles:x,value:t})),o.a.createElement(v.a,{item:!0,xs:12,className:"control-group"},o.a.createElement(C,{name:"mediums",label:"Marketing Medium(s)",onChange:this.props.onChange,onCreateOption:this.props.onCreateOption,options:u,styles:x,value:a})),o.a.createElement(v.a,{item:!0,xs:12,className:"control-group"},o.a.createElement(C,{name:"names",label:"Campaign Name(s)",onChange:this.props.onChange,onCreateOption:this.props.onCreateOption,options:i,styles:x,value:n})),o.a.createElement(v.a,{item:!0,xs:12,className:"control-group"},o.a.createElement(C,{name:"terms",label:"Term(s)",onChange:this.props.onChange,onCreateOption:this.props.onCreateOption,options:m,styles:x,value:r})),o.a.createElement(v.a,{item:!0,xs:12,className:"control-group"},o.a.createElement(C,{name:"content",label:"Content",onChange:this.props.onChange,onCreateOption:this.props.onCreateOption,options:p,styles:x,value:l})),o.a.createElement(v.a,{item:!0,xs:12,className:"control-group"},o.a.createElement(y,{generateText:this.props.generateText,values:this.props.values})))))}}]),a}(n.Component),w=a(79),k=a(82),T=a(85),_=a(86),S=a(80),M=a(83),U=a(84),I=a(81),V=Object(w.a)({table:{minWidth:650}});var L=function(e){var t=[];for(var a in e.values)t.push(o.a.createElement("p",null,a,": ",e.values[a]));console.log(e.values);var n=e.generateValues(e.values);console.log(n);var r=V();return(o.a.createElement(S.a,{component:I.a},o.a.createElement(k.a,{className:r.table,"aria-label":"simple table"},o.a.createElement(M.a,null,o.a.createElement(U.a,null,o.a.createElement(_.a,null,"URL"),o.a.createElement(_.a,{align:"right"},"Source"),o.a.createElement(_.a,{align:"right"},"Medium"),o.a.createElement(_.a,{align:"right"},"Name"),o.a.createElement(_.a,{align:"right"},"Term"),o.a.createElement(_.a,{align:"right"},"Content"),o.a.createElement(_.a,{align:"right"},"Generated URL"))),o.a.createElement(T.a,null,n.map((function(e){return o.a.createElement(U.a,{key:e.name},o.a.createElement(_.a,{component:"th",scope:"row"},e.url),o.a.createElement(_.a,{align:"right"},e.source),o.a.createElement(_.a,{align:"right"},e.medium),o.a.createElement(_.a,{align:"right"},e.name),o.a.createElement(_.a,{align:"right"},e.term),o.a.createElement(_.a,{align:"right"},e.content),o.a.createElement(_.a,{align:"right"},e.generated_url))}))))))},R=a(37),B=a.n(R);function F(e){return e&&e.length?e:[""]}var G=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleInput=function(e,t){var a=n.state.utm_values;n.setState({utm_values:Object(i.a)({},a,Object(u.a)({},e,[t]))})},n.handleChange=function(e,t){var a=n.state.utm_values;n.setState({utm_values:Object(i.a)({},a,Object(u.a)({},e,t))})},n.handleCreate=function(e,t){var a=n.state.utm_values,o=a[e],r=n.state.utm_options,l=r[e];console.log(r),console.log(l),n.setState({utm_values:Object(i.a)({},a,Object(u.a)({},e,[].concat(Object(s.a)(o),[t]))),utm_options:Object(i.a)({},r,Object(u.a)({},e,[].concat(Object(s.a)(l),[t])))})},n.composeUrl=function(e,t,a,n,o,r){var l={};return t&&(l.source=t),a&&(l.medium=a),n&&(l.name=n),o&&(l.term=o),r&&(l.content=r),B()(e,{queryParams:l})},n.generateValues=function(e){console.log("values"),console.log(e);var t=function(){var e=[],t=arguments,a=t.length-1;function n(o,r){for(var l=0,c=t[r].length;l<c;l++){var s=o.slice(0);s.push(t[r][l]),r===a?e.push(s):n(s,r+1)}}return n([],0),e}(F(e.urls),F(e.sources),F(e.mediums),F(e.names),F(e.terms),F(e.content));return console.log("combinations"),console.log(t),t.map((function(e){var t=Object(c.a)(e,6),a=t[0],o=t[1],r=t[2],l=t[3],s=t[4],u=t[5];return{url:a,source:o,medium:r,name:l,term:s,content:u,generated_url:n.composeUrl(a,o,r,l,s,u)}}))},n.generateTextValues=function(e){var t=n.generateValues(e).map((function(e){var t=e.url,a=e.source,n=e.medium,o=e.name,r=e.term,l=e.content,c=e.generated_url;return"".concat(t,"\t").concat(a,"\t").concat(n,"\t").concat(o,"\t").concat(r,"\t").concat(l,"\t").concat(c,"\t")})).join("\n");return"".concat("Url\tSource\tMedium\tCampaign Name\tCampaign Term\tContent\tGenerated Url","\n").concat(t)},n.state={utm_options:{sources:["google","facebook","newsletter"],mediums:["cpc","banner","email"],names:[],terms:[],content:[]},utm_values:{urls:["http://anancial.com"],sources:[],mediums:[],names:[],terms:[],content:[]}},n.handleInput.bind(Object(h.a)(n)),n.generateValues.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Bulk UTM Generator"),o.a.createElement(v.a,{container:!0,className:"form-group"},o.a.createElement(v.a,{container:!0,xs:12,sm:6},o.a.createElement(v.a,{item:!0,xs:12,className:"control-group"},o.a.createElement("p",{className:"blahblah"},"You wanna create campaign parameters to URL but provided ",o.a.createElement("a",{href:"https://ga-dev-tools.appspot.com/campaign-url-builder/"},"tool by Google")," only allow one parameter value at a time? Here comes this tool! Put it as many values for each parameter as you want, and copy them all with just a click.")))),o.a.createElement(N,{options:this.state.utm_options,values:this.state.utm_values,onChange:this.handleChange,onCreateOption:this.handleCreate,handleInput:this.handleInput,generateText:this.generateTextValues}),o.a.createElement("div",{className:"spacer"}),o.a.createElement("div",null,o.a.createElement("p",null,"For feedback/request, please create an issue in this ",o.a.createElement("a",{href:"https://github.com/peeomid/bulk-utm-generator"},"repo")," or dm me on ",o.a.createElement("a",{href:"https://twitter.com/peeomid"},"Twitter")," ")),o.a.createElement(L,{values:this.state.utm_values,generateValues:this.generateValues}))}}]),a}(n.Component),W=a(38),A={timeout:5e3,position:O.b.BOTTOM_CENTER};var q=function(){return o.a.createElement(O.a,Object.assign({template:W.a},A),o.a.createElement("div",{className:"App"},o.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.ae90af57.chunk.js.map