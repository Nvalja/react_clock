(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),r=n(1),i=n(2),s=n(4),u=n(3),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={dateOut:new Date},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerInterval=setInterval((function(){t.setState({dateOut:new Date}),console.log(t.state.dateOut.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval)}},{key:"render",value:function(){return this.state.dateOut.toLocaleTimeString()}}]),n}(c.a.Component),p=(n(12),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isClockVisible:!0,clockName:3.14},t.switchClock=function(e){t.setState({isClockVisible:"Show Clock"===e})},t.getRandomName=function(){var e=t.state.clockName,n=Math.random();console.log("The Clock was renamed from ".concat(e," to ").concat(n)),t.setState({clockName:n})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),c.a.createElement("div",{className:"App__clockface"},c.a.createElement("p",null,"Current time:",c.a.createElement("br",null),this.state.isClockVisible&&c.a.createElement(m,null))),c.a.createElement("div",{className:"App__buttons"},c.a.createElement("button",{className:"App__button",type:"button",onClick:function(e){t.switchClock(e.target.innerText)}},"Show Clock"),c.a.createElement("button",{className:"App__button",type:"button",onClick:this.switchClock},"Hide Clock"),c.a.createElement("button",{className:"App__button",type:"button",onClick:this.getRandomName},"Set random name")))}}]),n}(c.a.Component));l.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.49f099eb.chunk.js.map