(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(t,e,a){t.exports=a(57)},40:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},57:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),i=a(10),o=a.n(i),l=(a(40),a(15)),c=a(16),s=a(19),u=a(17),d=a(20),f=a(70),m=(a(41),function(t){function e(){var t,a;Object(l.a)(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).state={face:0},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return this.props.card_faces?n.a.createElement("div",{className:"MtgCard"},this.props.name+": $"+this.props.prices.usd,n.a.createElement("img",{src:this.props.card_faces[this.state.face].image_uris.png,alt:this.props.name,onMouseOver:function(){return t.setState({face:0===t.state.face?1:0})}})):n.a.createElement("div",{className:"MtgCard"},n.a.createElement("span",null,this.props.name+": $"+this.props.prices.usd),n.a.createElement("img",{src:this.props.image_uris.png,alt:this.props.name}))}}]),e}(n.a.Component)),v=(a(42),""),h=2,p=function(t){function e(){var t,a;Object(l.a)(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).state={value:"",cards:[],file:h,numOfFiles:h},a.readTextFile=function(t){var e=new XMLHttpRequest;e.open("GET",t,!1),e.onreadystatechange=function(){if(4===e.readyState&&(200===e.status||0==e.status)){var t=e.responseText;console.log("allText: ",t),v=t}},e.send(null)},a.switchFile=function(){a.setState({file:a.state.file%2+1,cards:[]},function(){a.readTextFile("./cardlist"+a.state.file+".txt");var t=v.split("\n");console.log(t);var e=0,r=setInterval(function(){if(console.log(e),e>=t.length)a.state.cards.length==t.length&&(clearInterval(r),a.setState({}));else{var n=t[e];e++,fetch("https://api.scryfall.com/cards/search?q="+n.substring(2)).then(function(t){if(t.ok)return t;console.log(n.substring(2)+" not found")}).then(function(t){return t?t.json():null}).then(function(t){if(t){var e=0,r=!0,i=!1,o=void 0;try{for(var l,c=t.data[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=l.value;s.name.trim()===n.substring(2).trim()&&(e=t.data.indexOf(s))}}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}0==e&&t.data[e].name.trim()!==n.substring(2).trim()&&console.log(t.data[e].name,n.substring(2),t.data[e].name.trim()===n.substring(2).trim()),a.state.cards.push(t.data[e])}else a.state.cards.push({name:"Not Found",prices:{},cmc:0,image_uris:{png:"test.png"},colors:[]})})}},10)})},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){this.switchFile()}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{id:"utilTest"},n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary",onClick:function(){window.open("https://store.tcgplayer.com/massentry?c="+v.replace(/\n/g,"||"))}},"Buy"),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary"},"Number of Cards: ",this.state.cards.length),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary"},"Average CMC: ",function(){var e=0,a=!0,r=!1,n=void 0;try{for(var i,o=t.state.cards[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){e+=i.value.cmc}}catch(l){r=!0,n=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return Math.round(100*e/t.state.cards.length)/100}()," "),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary"},"Total Cost: ",function(){var e=0,a=!0,r=!1,n=void 0;try{for(var i,o=t.state.cards[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var l=i.value;isNaN(parseFloat(l.prices.usd))?console.log(l):e+=parseFloat(l.prices.usd)}}catch(c){r=!0,n=c}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return Math.round(100*e)/100}()),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary"},"White: ",function(){var e=0,a=!0,r=!1,n=void 0;try{for(var i,o=t.state.cards[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){i.value.colors.includes("W")&&e++}}catch(l){r=!0,n=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return e}()),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary"},"Blue: ",function(){var e=0,a=!0,r=!1,n=void 0;try{for(var i,o=t.state.cards[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){i.value.colors.includes("U")&&e++}}catch(l){r=!0,n=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return e}()),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary"},"Black: ",function(){var e=0,a=!0,r=!1,n=void 0;try{for(var i,o=t.state.cards[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){i.value.colors.includes("B")&&e++}}catch(l){r=!0,n=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return e}()),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary"},"Red: ",function(){var e=0,a=!0,r=!1,n=void 0;try{for(var i,o=t.state.cards[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){i.value.colors.includes("R")&&e++}}catch(l){r=!0,n=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return e}()),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary"},"Green: ",function(){var e=0,a=!0,r=!1,n=void 0;try{for(var i,o=t.state.cards[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){i.value.colors.includes("G")&&e++}}catch(l){r=!0,n=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}return e}()),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary",onClick:this.switchFile},"File: ",this.state.file),n.a.createElement(f.a,{id:"btnTest",variant:"contained",color:"primary"},n.a.createElement("a",{href:"./cardlist"+this.state.file+".txt",download:!0},"Download"))),n.a.createElement("div",{id:"cardsTest"},this.state.cards.map(function(t,e){return n.a.createElement(m,Object.assign({key:e},t))})))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.e794a4e1.chunk.js.map