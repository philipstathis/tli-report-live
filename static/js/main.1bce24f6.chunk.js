/*! For license information please see main.1bce24f6.chunk.js.LICENSE.txt */
(this["webpackJsonptli-reports-live"]=this["webpackJsonptli-reports-live"]||[]).push([[0],{23:function(e,a,t){},30:function(e,a,t){e.exports=t.p+"static/media/react-logo.eb6be414.png"},31:function(e,a,t){e.exports=t(50)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var s=t(0),i=t.n(s),r=t(17),o=t.n(r),n=t(7),l=t(10),c=t(12),m=t(5),d=t.n(m),u=t(51),b=t(52),p=t(53);class h extends i.a.Component{constructor(e){super(e),this.updateColor=()=>{window.innerWidth<993&&this.state.collapseOpen?this.setState({color:"bg-white"}):this.setState({color:"navbar-transparent"})},this.toggleCollapse=()=>{this.state.collapseOpen?this.setState({color:"navbar-transparent"}):this.setState({color:"bg-white"}),this.setState({collapseOpen:!this.state.collapseOpen})},this.toggleModalSearch=()=>{this.setState({modalSearch:!this.state.modalSearch})},this.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"}}componentDidMount(){window.addEventListener("resize",this.updateColor)}componentWillUnmount(){window.removeEventListener("resize",this.updateColor)}render(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:d()("navbar-absolute",this.state.color),expand:"lg"},i.a.createElement(b.a,{fluid:!0},i.a.createElement("div",{className:"navbar-wrapper"},i.a.createElement("div",{className:d()("navbar-toggle d-inline",{toggled:this.props.sidebarOpened})},i.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.props.toggleSidebar},i.a.createElement("span",{className:"navbar-toggler-bar bar1"}),i.a.createElement("span",{className:"navbar-toggler-bar bar2"}),i.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),i.a.createElement(p.a,{href:"",onClick:e=>e.preventDefault()},this.props.brandText)))))}}var v,N=h,g=t(11),f=t(54);class C extends i.a.Component{constructor(e){super(e),this.linkOnClick=()=>{document.documentElement.classList.remove("nav-open")},this.activeRoute.bind(this)}activeRoute(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}componentDidMount(){navigator.platform.indexOf("Win")>-1&&(v=new c.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&v.destroy()}render(){const e=this.props,a=e.bgColor,t=e.routes,s=e.rtlActive,r=e.logo;let o=null,n=null;return void 0!==r&&(void 0!==r.outterLink?(o=i.a.createElement("a",{href:r.outterLink,className:"simple-text logo-mini",target:"_blank",onClick:this.props.toggleSidebar},i.a.createElement("div",{className:"logo-img"},i.a.createElement("img",{src:r.imgSrc,alt:"react-logo"}))),n=i.a.createElement("a",{href:r.outterLink,className:"simple-text logo-normal",target:"_blank",onClick:this.props.toggleSidebar},r.text)):(o=i.a.createElement(g.a,{to:r.innerLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},i.a.createElement("div",{className:"logo-img"},i.a.createElement("img",{src:r.imgSrc,alt:"react-logo"}))),n=i.a.createElement(g.a,{to:r.innerLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},r.text))),i.a.createElement("div",{className:"sidebar",data:a},i.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},null!==o||null!==n?i.a.createElement("div",{className:"logo"},o,n):null,i.a.createElement(f.a,null,t.map((e,a)=>e.redirect?null:i.a.createElement("li",{className:this.activeRoute(e.path)+(e.pro?" active-pro":""),key:a},i.a.createElement(g.b,{to:e.layout+e.path,className:"nav-link",activeClassName:"active",onClick:this.props.toggleSidebar},i.a.createElement("i",{className:e.icon}),i.a.createElement("p",null,s?e.rtlName:e.name)))),i.a.createElement("li",{className:"active-pro"}))))}}C.defaultProps={rtlActive:!1,bgColor:"primary",routes:[{}]};var E=C,T=(t(23),t(14));t(25),t(26),t(27);class w extends s.Component{constructor(e){super(e),this.state={columnDefs:[{headerName:"Toastmasters Division",enableRowGroup:!0,field:"division",sortable:!0,sort:"asc",filter:!0,resizable:!0},{headerName:"Toastmasters Area",enableRowGroup:!0,field:"area",sortable:!0,sort:"asc",filter:!0,resizable:!0},{headerName:"Toastmasters Club Name",field:"clubName",sortable:!0,sort:"asc",filter:!0,resizable:!0},{headerName:"Officer Role Selected",enableRowGroup:!0,field:"role",sortable:!0,filter:!0,resizable:!0},{headerName:"Training Date",enableRowGroup:!0,field:"startTime",cellRenderer:e=>e.value?new Date(e.value).toLocaleDateString():"",sortable:!0,filter:!0,resizable:!0},{headerName:"First Name",field:"first_name",sortable:!0,filter:!0,resizable:!0},{headerName:"Attended",enableRowGroup:!0,field:"checked_in"}],statusBar:{statusPanels:[{statusPanel:"agTotalAndFilteredRowCountComponent",align:"left"}]}}}componentDidMount(){Promise.all([fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731167904"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731189970"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731193982"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731204012"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731218054"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731222066")]).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then(e=>e.reduce((function(e,a){return Array.prototype.concat(e,a)}),[])).then(e=>this.setState({rowData:e})).catch((function(e){console.log(e)}))}render(){return i.a.createElement("div",{className:"content ag-theme-alpine",style:{height:"100%",width:"100%"}},i.a.createElement(T.AgGridReact,{columnDefs:this.state.columnDefs,rowData:this.state.rowData,statusBar:this.state.statusBar,rowGroupPanelShow:"always"}))}}var S=w;class D extends s.Component{constructor(e){super(e),this.state={columnDefs:[{headerName:"Toastmasters Division",field:"division",sort:"asc",chartDataType:"category"},{headerName:"Toastmasters Area",field:"area",sort:"asc",chartDataType:"category"},{headerName:"Toastmasters Club Name",field:"clubName",sortable:!0,sort:"asc"},{headerName:"Signed Up",field:"signups",chartDataType:"series"},{headerName:"President",field:"President"},{headerName:"Vice President of Education",field:"Vice President of Education"},{headerName:"Secretary",field:"Secretary"},{headerName:"Vice President of Membership",field:"Vice President of Membership"},{headerName:"Vice President of PR",field:"Vice President of PR"},{headerName:"Treasurer",field:"Treasurer"},{headerName:"Sergeant at Arms",field:"Sergeant at Arms"}],statusBar:{statusPanels:[{statusPanel:"agTotalAndFilteredRowCountComponent",align:"left"}]},defaultColDef:{enableRowGroup:!0,sortable:!0,filter:!0,resizable:!0,enableRangeSelection:!0,enableCharts:!0},groupIncludeFooter:!0,sideBar:!0}}componentDidMount(){Promise.all([fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731167904"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731189970"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731193982"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731204012"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731218054"),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/events/110731222066")]).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then(e=>e.reduce((function(e,a){return Array.prototype.concat(e,a)}),[])).then(e=>{var a=e.filter(e=>"Outside District 46"!==e.division).reduce((function(e,a){const t=a.first_name,s=a.role,i=a.clubName;return e[i]||(e[i]={division:a.division,area:a.area,clubName:a.clubName}),e[i][s]?e[i][s]!==t&&(e[i][s]=e[i][s]+","+t):e[i][s]=t,e[i].signups=function(e){let a=0;return e.President&&a++,e["Vice President of Education"]&&a++,e.Secretary&&a++,e["Vice President of Membership"]&&a++,e["Vice President of PR"]&&a++,e.Treasurer&&a++,e["Sergeant at Arms"]&&a++,a}(e[i])+"/7",e}),{});return this.getStaticClubData().forEach(e=>{const t=e.clubName;t in a||(a[t]={division:e.division,area:e.area,clubName:e.clubName,signups:"0/7"})}),Object.keys(a).map((function(e){return a[e]}))}).then(e=>this.setState({rowData:e})).catch((function(e){console.log(e)}))}getHeight(){return window.innerHeight+"px"}getStaticClubData(){return[{division:"A",area:"11",clubName:"Hudson River Toastmasters (8558)"},{division:"A",area:"11",clubName:"IBM Westchester Toastmasters (648356)"},{division:"A",area:"11",clubName:"Peekskill Toastmasters (3171395)"},{division:"A",area:"11",clubName:"Northern Westchester Toastmasters (3797112)"},{division:"A",area:"12",clubName:"BASF Tarrytown Toastmasters (3638279)"},{division:"A",area:"12",clubName:"Siemens Tarrytown Speechineers (5762149)"},{division:"A",area:"12",clubName:"Regeneron Toastmasters (5829986)"},{division:"A",area:"12",clubName:"WSP-BCM Toastmasters (7176388)"},{division:"A",area:"13",clubName:"Westchester Toastmasters (863)"},{division:"A",area:"13",clubName:"Speakers With Authority (5463)"},{division:"A",area:"13",clubName:"United We Stand Toastmasters Club (9938)"},{division:"A",area:"13",clubName:"Westchester Advanced Club (695803)"},{division:"A",area:"14",clubName:"Cross Westchester Toastmasters (9976)"},{division:"A",area:"14",clubName:"PepsiCo Valhalla Toastmasters Club (828089)"},{division:"A",area:"14",clubName:"Legends For Life! (889516)"},{division:"A",area:"15",clubName:"Pepsico Toastmasters Club (7230)"},{division:"A",area:"15",clubName:"Swiss Toast Club (716600)"},{division:"A",area:"15",clubName:"Priceless Speakers (1199057)"},{division:"A",area:"15",clubName:"The Toast of Purchase (5864849)"},{division:"B",area:"21",clubName:"La Voz Latina Toastmasters (1488421)"},{division:"B",area:"21",clubName:"Monroe College Toastmasters (2218018)"},{division:"B",area:"21",clubName:"Bronx Advanced Speakers (3337790)"},{division:"B",area:"21",clubName:"Mount Vernon Toast (5341900)"},{division:"B",area:"22",clubName:"Toast Of The Bronx Club (3035)"},{division:"B",area:"22",clubName:"Co-op City Toastmasters Club (3824)"},{division:"B",area:"22",clubName:"Einstein Toastmasters (1500422)"},{division:"B",area:"22",clubName:"Montefiore Toastmasters (4080286)"},{division:"B",area:"23",clubName:"Bronx Toastmasters Club (6615)"},{division:"B",area:"23",clubName:"MI Toastmasters (1322088)"},{division:"B",area:"23",clubName:"Consumer Reports Toastmasters (3640336)"},{division:"B",area:"23",clubName:"IAC Applications Toastmasters (6426850)"},{division:"B",area:"23",clubName:"MIT Toastmasters (6576008)"},{division:"B",area:"24",clubName:"TIC Toastmasters Club (2676)"},{division:"B",area:"24",clubName:"Harlem Toastmasters (8594)"},{division:"B",area:"24",clubName:"TORCH Toastmasters (1168440)"},{division:"B",area:"24",clubName:"Columbia University Toastmasters  (3890961)"},{division:"B",area:"25",clubName:"Douglas Elliman /west Side Toasties (595443)"},{division:"B",area:"25",clubName:"West Side Talkers (1180341)"},{division:"B",area:"25",clubName:"Fordham Lincoln Center (4776065)"},{division:"B",area:"25",clubName:"DE Squared (5580612)"},{division:"C",area:"31",clubName:"Pacers Toastmasters Club (2608)"},{division:"C",area:"31",clubName:"AB Toastmasters (1588600)"},{division:"C",area:"31",clubName:"g-Toastmasters (5589856)"},{division:"C",area:"31",clubName:"Macquarie New York (7291924)"},{division:"C",area:"32",clubName:"Ringers Toastmasters Club (7890)"},{division:"C",area:"32",clubName:"Excellent Toastmasters (1410471)"},{division:"C",area:"32",clubName:"BNP Paribas Toastmasters (3332242)"},{division:"C",area:"32",clubName:"State Street New York Toastmasters (3916690)"},{division:"C",area:"32",clubName:"French/Bilingual Toastmasters of NY (7315453)"},{division:"C",area:"33",clubName:"Leadership Roundtable  (1636)"},{division:"C",area:"33",clubName:"Bryant Park Toastmasters Club (2895)"},{division:"C",area:"33",clubName:"CFA NY Toastmasters (965817)"},{division:"C",area:"33",clubName:"The Empire Eagles (5371277)"},{division:"C",area:"33",clubName:"Barclays New York Toastmasters (5418945)"},{division:"C",area:"34",clubName:"SEC Roughriders Club (1876)"},{division:"C",area:"34",clubName:"Traffic Club (2286)"},{division:"C",area:"34",clubName:"Mazars USA LLP (1166775)"},{division:"C",area:"34",clubName:"Marsh McLennan Companies NY (2078496)"},{division:"C",area:"35",clubName:"Deloitte Tri-State Toastmasters  (1244840)"},{division:"C",area:"35",clubName:"Midtown's Best @ Morgan Stanley (1700500)"},{division:"C",area:"35",clubName:"MS Midtown Complex (4677031)"},{division:"C",area:"35",clubName:"District Leaders Toastmasters (5616534)"},{division:"C",area:"35",clubName:"The Big Toast NYC (7419138)"},{division:"C",area:"36",clubName:"BlackRock Speaks NY (2884725)"},{division:"C",area:"36",clubName:"The World's Leading Toastmasters (4315364)"},{division:"C",area:"36",clubName:"Speak Up Swiss Re (6547516)"},{division:"C",area:"36",clubName:"Crowe Club Masters (7264044)"},{division:"C",area:"36",clubName:"Dewan Shai (7376563)"},{division:"D",area:"41",clubName:"Knickerbocker Toastmasters Club (137)"},{division:"D",area:"41",clubName:"Roosevelt Island Club (4121)"},{division:"D",area:"41",clubName:"East Side Toastmasters Club (6138)"},{division:"D",area:"41",clubName:"Yorkville Evening Stars - YES (5425506)"},{division:"D",area:"41",clubName:"New York Storytellers (6606660)"},{division:"D",area:"42",clubName:"Humorous Toastmasters (1296797)"},{division:"D",area:"42",clubName:"730 Toastmasters (1387307)"},{division:"D",area:"42",clubName:"Bloomberg New York Toastmasters (3618250)"},{division:"D",area:"42",clubName:"Gotham Speakers Toastmasters Club (3966637)"},{division:"D",area:"42",clubName:"Geller and Company (7708987)"},{division:"D",area:"43",clubName:"JPMorgan Toastmasters NYC (3793452)"},{division:"D",area:"43",clubName:"KPMG NYO Toastmasters Club (4405755)"},{division:"D",area:"43",clubName:"Capital One 299 Park Toastmasters (6038149)"},{division:"D",area:"43",clubName:"Wafra Toastmasters (6931829)"},{division:"D",area:"43",clubName:"TD NYC Toastmasters Club (7702911)"},{division:"D",area:"44",clubName:"Mount Sinai Toastmasters (1023495)"},{division:"D",area:"44",clubName:"Metnyc (1213823)"},{division:"D",area:"44",clubName:"Stagecoach Speakers, NYC (4748139)"},{division:"D",area:"44",clubName:"Societe Generale Toastmasters, USA (6765848)"},{division:"D",area:"44",clubName:"CBRE ()"},{division:"D",area:"45",clubName:"Nichibei Toastmasters Club (6394)"},{division:"D",area:"45",clubName:"World Voices Club (643436)"},{division:"D",area:"45",clubName:"Advanced Debaters (3313240)"},{division:"D",area:"45",clubName:"Persuasive Toastmasters (4634928)"},{division:"D",area:"45",clubName:"Toastmasters Int'l Club - Elsevier NYC (6660424)"},{division:"D",area:"46",clubName:"Global Expression Club (5596)"},{division:"D",area:"46",clubName:"Pfree Speech Toastmasters Club (7883)"},{division:"D",area:"46",clubName:"Travelers NYC (3433011)"},{division:"D",area:"46",clubName:"A+E Networks NYC (6501985)"},{division:"D",area:"46",clubName:"Speaking Easy (7560123)"},{division:"E",area:"51",clubName:"Voices of Bank America Club (5328)"},{division:"E",area:"51",clubName:"Times Toastmasters (1548645)"},{division:"E",area:"51",clubName:"Legg Mason Toastmasters - NY Chapter (5821058)"},{division:"E",area:"51",clubName:"The Durst Organization Employees NYC (6732803)"},{division:"E",area:"51",clubName:"Acuris New York Toastmasters (7580325)"},{division:"E",area:"52",clubName:"EY NYC Toastmasters (2560548)"},{division:"E",area:"52",clubName:"Toastmasters NYC Microsoft (6021925)"},{division:"E",area:"52",clubName:"Synechron NY Toastmasters (7327389)"},{division:"E",area:"52",clubName:"NY WAM-OI Toastmasters (7450958)"},{division:"E",area:"53",clubName:"Greenspeakers Club (3172)"},{division:"E",area:"53",clubName:"NYC Equitable Toastmasters Club (3507)"},{division:"E",area:"53",clubName:"Fung Academy Toastmasters New York (5271044)"},{division:"E",area:"53",clubName:"Amazon NYC Toastmasters Club (7226903)"},{division:"E",area:"54",clubName:"Vanderbilt Club (3061)"},{division:"E",area:"54",clubName:"Lexington Toastmasters (1254058)"},{division:"E",area:"54",clubName:"Jade Toastmasters Club (1721565)"},{division:"E",area:"54",clubName:"Midtown Masters (4672690)"},{division:"E",area:"54",clubName:"Jacobs Toast (6943827)"},{division:"E",area:"55",clubName:"Extraordinary Talkers (735)"},{division:"E",area:"55",clubName:"PwC NY Toastmasters (1393205)"},{division:"E",area:"55",clubName:"FactMasters (1526129)"},{division:"E",area:"55",clubName:"Toastmasters @ MSK (1551020)"},{division:"E",area:"55",clubName:"CPG Toastmasters (4565093)"},{division:"E",area:"56",clubName:"Metro New York (451)"},{division:"E",area:"56",clubName:"Graybar Club (1436)"},{division:"E",area:"56",clubName:"New York Toastmasters Club (1949)"},{division:"E",area:"56",clubName:"TempMasters (7112110)"},{division:"E",area:"56",clubName:"Girl Scouts of the USA (7202219)"}]}render(){return i.a.createElement("div",{className:"content ag-theme-alpine",style:{height:this.getHeight(),width:"100%"}},i.a.createElement(T.AgGridReact,{columnDefs:this.state.columnDefs,defaultColDef:this.state.defaultColDef,autoGroupColumnDef:this.state.autoGroupColumnDef,rowData:this.state.rowData,statusBar:this.state.statusBar,rowGroupPanelShow:"always"}))}}var k=D,x=t(55),A=t(56),y=t(57),P=t(58),B=t(59),M=t(60),O=t(61),Y=t(62),R=t(63),L=t(64),z=t(65);class W extends i.a.Component{constructor(e){super(e),this.state={},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleChange(e){this.setState({[e.target.name]:e.target.value})}handleSubmit(e){e.preventDefault(),fetch("https://a5slwb8wx6.execute-api.us-east-1.amazonaws.com/dev/todos",{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({attendeeEmail:this.state.attendeeEmail,eventPassword:this.state.eventPassword}),method:"POST"}).then(e=>e.json()).then(e=>{console.log(e),e.id?this.setState({disabled:!0,completeMessage:"Check-In Complete, Thank You!"}):alert("Message failed to send. Did you enter the Correct Access Code? E-mail district46officerstraining@gmail.com for support.")}).catch(e=>console.log(e))}render(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"content"},i.a.createElement(x.a,null,i.a.createElement(A.a,{md:"12"},i.a.createElement(y.a,null,i.a.createElement(P.a,null,i.a.createElement("h5",{className:"title"},"Please complete the information below to Confirm Attendance")),i.a.createElement(B.a,{method:this.props.method,onSubmit:this.handleSubmit},i.a.createElement(M.a,null,i.a.createElement(x.a,null,i.a.createElement(A.a,{className:"pr-md-1",md:"6"},i.a.createElement(O.a,null,i.a.createElement("label",null,"Event Access Code (Shared during Training)"),i.a.createElement(Y.a,{placeholder:"accesscode",type:"text",name:"eventPassword",onChange:this.handleChange}))),i.a.createElement(A.a,{className:"pl-md-1",md:"6"},i.a.createElement(O.a,null,i.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Attendee Email address (Same one used in Eventbrite)"),i.a.createElement(Y.a,{placeholder:"mike@email.com",type:"email",name:"attendeeEmail",onChange:this.handleChange}))))),i.a.createElement(R.a,null,i.a.createElement(L.a,{name:"checkin",className:"btn-fill",color:"primary",disabled:this.state.disabled,type:"submit"},this.state.completeMessage||"Check In"))))),i.a.createElement(A.a,{md:"12"},i.a.createElement(y.a,{className:"card-user"},i.a.createElement(P.a,null,i.a.createElement("h5",{className:"title"},"Let us know how it went! Your name won't appear in the evaluation!")),i.a.createElement(z.a,null,i.a.createElement("iframe",{title:"Anonymous evaluation",src:"https://docs.google.com/forms/d/e/1FAIpQLSdXV-PrmBnVumIFYUrAM8PxYDaFu0jLNF1IlMWO5Q3V_-edow/viewform?embedded=true",width:"100%",height:"600em",frameBorder:"0",marginHeight:"0",marginWidth:"0"},"Loading\u2026")))))))}}var G,F=W,I=[{path:"?club-report",name:"Club Registration Report",icon:"tim-icons icon-chart-pie-36",component:k,layout:"/tli-reports-live"},{path:"?attendee-report",name:"Attendee Report",icon:"tim-icons icon-chart-pie-36",component:S,layout:"/tli-reports-live"},{path:"?attendee-check-in",name:"Check-In",icon:"tim-icons icon-single-02",component:F,layout:"/tli-reports-live"}],V=t(30),U=t.n(V);class j extends i.a.Component{constructor(e){super(e),this.toggleSidebar=()=>{document.documentElement.classList.toggle("nav-open"),this.setState({sidebarOpened:!this.state.sidebarOpened})},this.getRoutes=e=>e.map((e,a)=>"/tli-reports-live"===e.layout?i.a.createElement(l.b,{path:e.layout+e.path,component:e.component,key:a}):null),this.handleBgClick=e=>{this.setState({backgroundColor:e})},this.getBrandText=e=>{for(let a=0;a<I.length;a++)if(-1!==this.props.location.pathname.indexOf(I[a].layout+I[a].path))return I[a].name;return"District 46 - TLI Custom Reports"},this.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open")}}componentDidMount(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),G=new c.a(this.refs.mainPanel,{suppressScrollX:!0});let e=document.querySelectorAll(".table-responsive");for(let a=0;a<e.length;a++)G=new c.a(e[a])}}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&(G.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on"))}componentDidUpdate(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1){let e=document.querySelectorAll(".table-responsive");for(let a=0;a<e.length;a++)G=new c.a(e[a])}document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}render(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"wrapper"},i.a.createElement(E,Object.assign({},this.props,{routes:I,bgColor:this.state.backgroundColor,logo:{outterLink:"https://toastmasters46.org",text:"TM46 Official Site",imgSrc:U.a},toggleSidebar:this.toggleSidebar})),i.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},i.a.createElement(N,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname),toggleSidebar:this.toggleSidebar,sidebarOpened:this.state.sidebarOpened})),i.a.createElement(l.d,null,-1===this.props.location.search.indexOf("club-report")?null:i.a.createElement(l.b,{path:"/tli-reports-live",search:"?club-report"},i.a.createElement(k,null)),-1===this.props.location.search.indexOf("attendee-report")?null:i.a.createElement(l.b,{path:"/tli-reports-live",search:"?attendee-report"},i.a.createElement(S,null)),-1===this.props.location.search.indexOf("attendee-check-in")?null:i.a.createElement(l.b,{path:"/tli-reports-live",search:"?attendee-check-in"},i.a.createElement(F,null)),i.a.createElement(l.b,{path:"/tli-reports-live",search:""},i.a.createElement(k,null)),i.a.createElement(l.a,{from:"*",to:"/tli-reports-live?club-report"})))))}}var H=j;t(48),t(49);const J=Object(n.a)();o.a.render(i.a.createElement(l.c,{history:J},i.a.createElement(l.d,null,i.a.createElement(l.b,{from:"/tli-reports-live",render:e=>i.a.createElement(H,e)}),i.a.createElement(l.a,{from:"*",to:"/tli-reports-live?club-report"}))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1bce24f6.chunk.js.map