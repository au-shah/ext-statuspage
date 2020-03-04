(this.webpackJsonpstatuspage=this.webpackJsonpstatuspage||[]).push([[0],{11:function(e,t,s){e.exports=s.p+"static/media/icon_light.ec17a1ea.svg"},12:function(e,t,s){e.exports=s(20)},17:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(10),i=s.n(r),o=(s(17),s(1)),l=s(2),c=s(5),u=s(3),h=s(4),m=s(11),f=s.n(m),p=s(6),d=(s(9),s(18),s(19),"IBM-Blockchain/blockchain-vscode-extension"),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getLabel",value:function(e){if(e.milestone){var t=e.labels,s=!1;return t.map((function(e){"bug"===e.name&&(s=!0)})),s?a.a.createElement("h3",{className:"label bg-bug"}," ","bug"):a.a.createElement("h3",{className:"label bg-feature"}," ","feature")}return""}},{key:"render",value:function(){var e=this,t=a.a.createElement("p",{className:"alert alert-info",key:"info"},"Please wait, loading status information");this.props.error?t=a.a.createElement("p",{className:"alert alert-danger",key:"error"},this.props.error):void 0!==this.props.issues&&0===(t=this.props.issues.map((function(t){if(e.props.newestMilestone){var s=!1;if(t.milestone&&t.milestone.title===e.props.newestMilestone.title&&(s=!0),!s)return}var n=new Date(t.created_at),r=new Date(t.updated_at),i="Updated: "+r.toLocaleDateString(),o="panel-danger";return"closed"===t.state&&(o="panel-success",i="Resolved: "+r.toLocaleDateString()),a.a.createElement("div",{className:"panel "+o},a.a.createElement("div",{className:"panel-heading"},a.a.createElement("h3",{className:"panel-title"},("closed"===t.state?"RESOLVED: ":"")+t.title+" (#"+t.number+")"),e.getLabel(t)),a.a.createElement("div",{className:"panel-body"},a.a.createElement("p",null,a.a.createElement("span",null,"Reported: "+n.toLocaleDateString()),a.a.createElement("span",{className:"float-right"},i)),a.a.createElement("hr",{className:"hr"}),"open"===t.state?function(e){for(var t=e.split("\n"),s=[],n=0;n<t.length;n++){var r=t[n],i=/^(\#+)\s+(.*)/gi.exec(r);if(i){var o=i[1].length;s.push(a.a.createElement("h",{key:n},(o+2).toString(),i[2]))}else s.push(a.a.createElement("p",{key:n},r))}return s}(t.body):"",a.a.createElement("p",null,a.a.createElement("a",{href:t.html_url},"View on GitHub ("+t.comments+" comments so far)"))))}))).length&&(t=a.a.createElement("p",{className:"alert alert-success"},"No incidents found!"));var s="fa fa-refresh";this.props.refreshing&&(s+=" fa-spin");var n="https://github.com/"+d+"/milestone/";n+=this.props.milestoneNumber;var r=void 0!==this.props.newestMilestone?a.a.createElement("a",{href:n}," ","See current milestone"," "):a.a.createElement("a",{href:"https://github.com/IBM-Blockchain/blockchain-vscode-extension/issues?q="}," ","See all on GitHub");return a.a.createElement("div",null,a.a.createElement("h2",null,this.props.title,a.a.createElement("a",{className:"float-right",href:"#"},a.a.createElement("i",{className:s,onClick:this.props.refreshIssues}))),a.a.createElement("p",null,r," // ",a.a.createElement("a",{href:"https://github.com/IBM-Blockchain/blockchain-vscode-extension/issues/new"},"Report an incident")),t)}}]),t}(n.Component),g=s(7),v=s.n(g),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={issues:void 0,error:void 0,refreshing:!1},e.refreshIssues=e.refreshIssues.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshIssues()}},{key:"componentWillUnmount",value:function(){}},{key:"refreshIssues",value:function(e){void 0!==e&&e.preventDefault(),this.setState({refreshing:!0});var t=function(e){this.setState({issues:e}),setTimeout(function(){this.setState({refreshing:!1})}.bind(this),200)}.bind(this);v.a.get({url:"https://api.github.com/repos/IBM-Blockchain/blockchain-vscode-extension/issues?labels=status",success:t,error:function(){setTimeout(function(){this.setState({refreshing:!1})}.bind(this),200),this.setState({error:"Cannot load incidents from Github, sorry."})}.bind(this)})}},{key:"getInitialState",value:function(){return{refreshing:!1}}},{key:"render",value:function(){return this.state.issues||this.state.error?a.a.createElement("div",null,a.a.createElement(b,{key:"issues",issues:this.state.issues,refreshing:this.state.refreshing,error:this.state.error,refreshIssues:this.refreshIssues,title:"Latest Incidents",issueLabel:"status"})):a.a.createElement(a.a.Fragment,null)}}]),t}(n.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={issues:void 0,error:void 0,refreshing:!1},e.refreshIssues=e.refreshIssues.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshIssues()}},{key:"componentWillUnmount",value:function(){}},{key:"getMilestones",value:function(){}},{key:"refreshIssues",value:function(e){void 0!==e&&e.preventDefault(),this.setState({refreshing:!0});var t=function(e){this.setState({issues:e}),setTimeout(function(){this.setState({refreshing:!1})}.bind(this),200)}.bind(this);v.a.get({url:"https://api.github.com/repos/IBM-Blockchain/blockchain-vscode-extension/milestones",success:function(e){var t;t=e.reduce((function(e,t){return e.due_on>t.due_on?e:t})),this.setState({newestMilestone:t})}.bind(this),error:function(){setTimeout(function(){this.setState({refreshing:!1})}.bind(this),200),this.setState({error:"Cannot load from Github, sorry."})}.bind(this)}),v.a.get({url:"https://api.github.com/repos/IBM-Blockchain/blockchain-vscode-extension/issues?labels=next&state=closed&per_page=100",success:t,error:function(){setTimeout(function(){this.setState({refreshing:!1})}.bind(this),200),this.setState({error:"Cannot load incidents from Github, sorry."})}.bind(this)})}},{key:"getInitialState",value:function(){return{refreshing:!1}}},{key:"render",value:function(){var e="",t="";if(this.state.newestMilestone){var s=new Date(this.state.newestMilestone.due_on);s.setDate(s.getDate()-4),e=s.toLocaleDateString(),t=this.state.newestMilestone.number}return this.state.issues||this.state?a.a.createElement("div",null,a.a.createElement(b,{key:"issues",issues:this.state.issues,refreshing:this.state.refreshing,error:this.state.error,refreshIssues:this.refreshIssues,title:"Upcoming release: expected on "+e,issueLabel:"next",newestMilestone:this.state.newestMilestone,milestoneNumber:t})):a.a.createElement(a.a.Fragment,null)}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-15 col-md-offset-2"},a.a.createElement("h1",{className:"text-muted"},a.a.createElement("img",{className:"logo",src:f.a,alt:"IBM Blockchain Logo"})," IBM Blockchain Platform - Status Page"),a.a.createElement("hr",null),a.a.createElement("p",{className:"lead"},"Below you can find the latest incidents as well as the information for our next release."),a.a.createElement(E,null),a.a.createElement("hr",null),a.a.createElement(k,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.f1ea39ec.chunk.js.map