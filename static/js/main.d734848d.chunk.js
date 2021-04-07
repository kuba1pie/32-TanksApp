(this.webpackJsonpTankApp=this.webpackJsonpTankApp||[]).push([[0],{33:function(e,t,a){e.exports=a(61)},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),i=(a(38),a(1)),s=a(2),m=a(4),u=a(3),o=a(5),p=a(7),d=a(8),h=a.n(d),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"handleDataChange",value:function(e){this.props.handleData(e.datas)}},{key:"componentDidMount",value:function(){var e=this;h.a.get("https://tanksvueapi.azurewebsites.net/"+this.props.path).then((function(t){var a=t.data;e.handleDataChange({datas:a})}))}},{key:"render",value:function(){return null}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"ClientOrders "},r.a.createElement(v,{path:"client/orders/"+this.props.ClientID,handleData:this.handleDatas}),this.state.datas)}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.client;return r.a.createElement("div",{className:"Client Item Row-2 Hover",key:e.ClientID},r.a.createElement(o.b,{to:"/client/"+e.ClientID},r.a.createElement("div",{className:"Row-2"},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.city))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Clients",className:"Wrapper"},r.a.createElement("h2",null,"Clients List: "),r.a.createElement("div",{id:"ClientsList"},r.a.createElement("div",{id:"ClientsHeader",className:"Item Head Row-4"},r.a.createElement("div",null,"Client Name"),r.a.createElement("div",null,"Client City"),r.a.createElement("div",null,"Order Name"),r.a.createElement("div",null,"Order City")),r.a.createElement(v,{path:"clients",handleData:this.handleDatas}),this.state.datas.map((function(e){return r.a.createElement(y,{client:e,key:e.ClientID})}))),r.a.createElement("button",{id:"Btn-AddClient"},r.a.createElement(o.b,{to:"/clients/create"},"Add Client")))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Home",className:"Home"},r.a.createElement(f,null))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Header Column"},r.a.createElement("div",{className:"Menu"},r.a.createElement("ul",null,r.a.createElement("li",{className:"Menu-Item"},r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",{className:"Menu-Item"},r.a.createElement(o.b,{to:"/clients"},"Clients")),r.a.createElement("li",{className:"Menu-Item"},r.a.createElement(o.b,{to:"/orders"},"Orders")),r.a.createElement("li",{className:"Menu-Item"},r.a.createElement(o.b,{to:"/tanks"},"Tanks")),r.a.createElement("li",{className:"Menu-Item"},r.a.createElement(o.b,{to:"/supplies"},"Supplies")),r.a.createElement("li",{className:"Menu-Item"},r.a.createElement(o.b,{to:"/materials"},"Materials")),r.a.createElement("li",{className:"Menu-Item"},r.a.createElement(o.b,{to:"/store"},"Store")))))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",city:"",adress:"",person:"",number:"",email:""},e}return Object(s.a)(a,[{key:"submit",value:function(){return h.a.post("http://localhost:4000/clients",this.state).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),r.a.createElement(p.a,{to:"/clients/"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"CreateClient",className:"Wrapper"},r.a.createElement("h2",null,"Create Client: "),r.a.createElement("form",{className:"Item Column"},r.a.createElement("input",{value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},type:"text",placeholder:"Name"}),r.a.createElement("input",{value:this.state.city,onChange:function(t){return e.setState({city:t.target.value})},type:"text",placeholder:"City"}),r.a.createElement("input",{value:this.state.adress,onChange:function(t){return e.setState({adress:t.target.value})},type:"text",placeholder:"Adress"}),r.a.createElement("input",{value:this.state.person,onChange:function(t){return e.setState({person:t.target.value})},type:"text",placeholder:"Contact Person"}),r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},type:"text",placeholder:"Email"}),r.a.createElement("input",{value:this.state.number,onChange:function(t){return e.setState({number:t.target.value})},type:"number",placeholder:"Phone"}),r.a.createElement("button",{type:"button",value:"Submit",onClick:function(){return e.submit()}},"Submit client")))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).deleteItem=function(){return h.a.delete("http://localhost:4000/"+e.props.path).then((function(e){console.log(e)})),r.a.createElement(p.a,{to:"/tanks"})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Delete Item"},r.a.createElement("button",{className:"Red",onClick:this.deleteItem},"Delete"))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",city:"",adress:"",person:"",ClientID:e.props.ClientID,number:"",email:"",datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"submit",value:function(){h.a.post("http://localhost:4000/orders",this.state).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"CreateOrder",className:"Wrapper"},r.a.createElement("h2",null,"Create Order: "),r.a.createElement(v,{path:"clients",handleData:this.handleDatas}),r.a.createElement("form",{className:"Item Column"},r.a.createElement("select",{name:"Client",value:this.state.ClientID,onChange:function(t){return e.setState({ClientID:t.target.value})}},this.state.datas.map((function(e){return r.a.createElement("option",{key:e.ClientID,value:e.ClientID},e.name)}))),r.a.createElement("input",{value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},type:"text",placeholder:"Name"}),r.a.createElement("input",{value:this.state.city,onChange:function(t){return e.setState({city:t.target.value})},type:"text",placeholder:"City"}),r.a.createElement("input",{value:this.state.adress,onChange:function(t){return e.setState({adress:t.target.value})},type:"text",placeholder:"Adress"}),r.a.createElement("input",{value:this.state.person,onChange:function(t){return e.setState({person:t.target.value})},type:"text",placeholder:"Contact Person"}),r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},type:"text",placeholder:"Email"}),r.a.createElement("input",{value:this.state.number,onChange:function(t){return e.setState({number:t.target.value})},type:"number",placeholder:"Phone"}),r.a.createElement("button",{type:"button",value:"Submit",onClick:function(){return e.submit()}},"Submit order")))}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.datas;return r.a.createElement("div",{className:"Client"},r.a.createElement(v,{path:"client/"+this.props.match.params.id,handleData:this.handleDatas}),t.map((function(t){return r.a.createElement("div",{className:"Wrapper Column"},r.a.createElement("h2",null,"Client: "),r.a.createElement("div",{className:"Item Row-2"},r.a.createElement("div",{className:"Head Item"},r.a.createElement("div",{className:"Name"},"Name"),r.a.createElement("div",{className:"City"},"City"),r.a.createElement("div",{className:"Client"},"ID")),r.a.createElement("div",{className:"Item"},r.a.createElement("div",{className:""},t.name),r.a.createElement("div",{className:""},t.city),r.a.createElement("div",{className:""},t.ClientID))),r.a.createElement("h2",null,"Orders:"),r.a.createElement("div",{className:"Item"},r.a.createElement("div",{className:"Head Item Row-2"},r.a.createElement("div",null,"Name"),r.a.createElement("div",null,"City")),r.a.createElement(E,{ClientID:e.props.match.params.id}),r.a.createElement(N,{ClientID:e.props.match.params.id})),r.a.createElement("div",{className:"Item"},r.a.createElement(k,{type:"Client",path:"client/"+e.props.match.params.id})))})))}}]),a}(n.Component),g=(n.Component,function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.order;return r.a.createElement("div",{id:"OrderLisItem",className:"OrdersList-Item Item Hover Row-3",key:e.OrderID},r.a.createElement("div",{className:"Number"},r.a.createElement("div",{key:e.OrderID},e.OrderID)),r.a.createElement(o.b,{to:"/order/"+e.OrderID},r.a.createElement("div",{key:e.OrderID,className:"Row-3"},r.a.createElement("div",{key:"name",className:"Name"},e.name),r.a.createElement("div",{key:"city"},e.city),r.a.createElement("div",{key:"client"},e.OrderClient))),r.a.createElement("div",{className:"OrdersList-Item-Tanks Column"}))}}]),a}(n.Component)),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Orders",className:"Wrapper"},r.a.createElement("h2",null,"Orders:"),r.a.createElement("div",{className:"OrdersList"},r.a.createElement("div",{id:"OrdersHeader",className:"OrdersList-Item Head Item Row-3"},r.a.createElement("div",{className:"Number"},r.a.createElement("div",null,"No")),r.a.createElement("div",{className:"Row-3"},r.a.createElement("div",null,"Name"),r.a.createElement("div",null,"City"),r.a.createElement("div",null,"Client")),r.a.createElement("div",{className:"Row-3"},r.a.createElement("div",null,"Capacity"),r.a.createElement("div",null,"Height"),r.a.createElement("div",null,"Diameter"))),r.a.createElement(v,{path:"orders",handleData:this.handleDatas}),this.state.datas.map((function(e){return r.a.createElement(g,{key:e.OrderID,order:e})}))),r.a.createElement(N,null))}}]),a}(n.Component),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.datas;return r.a.createElement("div",{id:"Order"},r.a.createElement(v,{path:"orders/"+this.props.match.params.id,handleData:this.handleDatas}),this.state.datas.map((function(a){return r.a.createElement("div",{className:"Wrapper"},r.a.createElement("div",{className:"Item"},r.a.createElement("h2",{className:"Head Item"},"Order name: ",a.name),r.a.createElement("p",null,"Order name: ",a.name),r.a.createElement("p",null,"Order city: ",a.city)),r.a.createElement("p",null,"Tanks: "),r.a.createElement("div",{className:"Head Item Row-3"},r.a.createElement("div",null,"city"),r.a.createElement("div",null,"city"),r.a.createElement("div",null,"city")),r.a.createElement("div",{className:"Row Item"},r.a.createElement(k,{type:"Order",path:"orders/"+e.props.match.params.id}),r.a.createElement(o.b,{to:{pathname:"/orderedit",state:{order:t[0]}}},r.a.createElement("button",null," Edit order"))))})))}}]),a}(n.Component),S=(a(13),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={order:e.props.location.state.order},e}return Object(s.a)(a,[{key:"updateCapacity",value:function(e){var t=this;this.setState((function(a){var n=Object.assign({},a.order);return n.status=e,h.a.put("http://localhost:4000/orders/"+t.state.order.OrderID,{status:n.status,orderId:t.state.order.OrderID}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),{order:n}}))}},{key:"handleSubmit",value:function(e){alert("Podano nast\u0119puj\u0105ce imi\u0119: "),console.log(this.fileInput.files[0].name),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state.order;return r.a.createElement("div",{id:"Tank",className:"Wrapper"},r.a.createElement("h2",null,"Tank"),r.a.createElement("div",{className:"TanksList-Item Item Row-2"},r.a.createElement("div",{className:"Head Item"},r.a.createElement("div",null,"Capacity"),r.a.createElement("div",null,"Order"),r.a.createElement("div",null,"ID")),r.a.createElement("div",{className:"Item",key:t.OrderID},r.a.createElement("div",{key:t.TankCapacity},t.capacity," m3"),r.a.createElement("div",{key:t.OrderName},t.status),r.a.createElement("div",{key:t.OrderID},t.OrderID),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Capacity:",r.a.createElement("input",{type:"number",value:this.state.order.status,onChange:function(t){return e.updateCapacity(t.target.value)}}),r.a.createElement("select",{value:this.state.order.status,onChange:function(t){return e.updateCapacity(t.target.value)}},r.a.createElement("option",{value:"New"},"New"),r.a.createElement("option",{value:"Project"},"Project"),r.a.createElement("option",{selected:!0,value:"Send"},"Send"),r.a.createElement("option",{value:"Mango"},"Mango"))),r.a.createElement("label",null,r.a.createElement("input",{type:"file",ref:function(t){return e.fileInput=t}})),r.a.createElement("input",{type:"submit",value:"Wy\u015blij"})))))}}]),a}(n.Component)),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={capacity:"",height:"",diameter:"",type:"",OrderID:"",datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"submit",value:function(){h.a.post("http://localhost:4000/tanks",this.state).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"CreateOrder",className:"Wrapper"},r.a.createElement("h2",null,"Create Tank: "),r.a.createElement("form",{className:"flex flex-column Item"},r.a.createElement(v,{path:"orders",handleData:this.handleDatas}),r.a.createElement("select",{name:"Order",value:this.state.OrderID,onChange:function(t){return e.setState({OrderID:t.target.value})}},this.state.datas.map((function(e){return r.a.createElement("option",{key:e.OrderID,value:e.OrderID},e.name)}))),r.a.createElement("input",{value:this.state.capacity,onChange:function(t){return e.setState({capacity:t.target.value})},type:"number",placeholder:"Capacity"}),r.a.createElement("input",{value:this.state.height,onChange:function(t){return e.setState({height:t.target.value})},type:"number",placeholder:"Height"}),r.a.createElement("input",{value:this.state.diameter,onChange:function(t){return e.setState({diameter:t.target.value})},type:"number",placeholder:"Diameter"}),r.a.createElement("select",{name:"Type",value:this.state.type,onChange:function(t){return e.setState({type:t.target.value})}},["VdS","PN-EN","FM","NFPA"].map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("button",{type:"button",value:"Submit",onClick:function(){return e.submit()}},"Submit Tank")))}}]),a}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Tanks",className:"Wrapper"},r.a.createElement("h2",null,"Tanks:"),r.a.createElement("div",{className:"TanksList Wrapper"},r.a.createElement("div",{className:"TanksList-Item Column"},r.a.createElement("div",{className:"Item Head Row-3"},r.a.createElement("div",null,"Capacity"),r.a.createElement("div",null,"Order"),r.a.createElement("div",null,"ID"))),r.a.createElement(v,{path:"tanks",handleData:this.handleDatas}),this.state.datas.map((function(e){return r.a.createElement(o.b,{to:"/tank/"+e.TankID,key:e.OrderName+"_"+e.TankID},r.a.createElement("div",{className:"Item Row-3 Hover"},r.a.createElement("div",null,e.TankCapacity),r.a.createElement("div",null,e.OrderName),r.a.createElement("div",null,e.TankID)))}))),r.a.createElement(w,null))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",quantity:"",partnumber:"",TankID:e.props.tank},e}return Object(s.a)(a,[{key:"submit",value:function(e){h.a.post("http://localhost:4000/materials/",this.state).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Item"},r.a.createElement("h3",null,"Create Material:"),r.a.createElement("form",{className:"Item flex flex-column"},r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})),r.a.createElement("label",null,"Partnumbuer:",r.a.createElement("input",{type:"text",value:this.state.partnumber,onChange:function(t){return e.setState({partnumber:t.target.value})}})),r.a.createElement("label",null,"Quantity:",r.a.createElement("input",{type:"text",value:this.state.quantity,onChange:function(t){return e.setState({quantity:t.target.value})}})),r.a.createElement("button",{type:"submit",value:"Submit",onClick:function(){return e.submit()}},"Submit material")))}}]),a}(n.Component),H=(n.Component,function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={height:21,diameter:e.props.tank,tanks:0},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;this.state.tanks;return r.a.createElement("div",{id:"DrawTank",className:"Wrapper"},r.a.createElement("h2",null,"DrawTank: "),r.a.createElement("div",{id:"svg"},r.a.createElement("input",{type:"text",value:this.state.diameter,onChange:function(t){return e.setState({diameter:t.target.value})}}),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200"},r.a.createElement("g",{fill:"#888"},r.a.createElement("circle",{cx:"100",cy:"100",r:this.state.diameter}),r.a.createElement("rect",{x:"50",y:"100",width:10*this.state.diameter,height:this.state.height}),r.a.createElement("polygon",{points:"50,80 100,100 50,100"}),r.a.createElement("path",{d:"M520.5 78.1z"})))))}}]),a}(n.Component)),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"Tank",className:"Wrapper"},r.a.createElement(v,{path:"tanks/"+this.props.match.params.id,handleData:this.handleDatas}),r.a.createElement("h2",null,"Tank"),r.a.createElement("div",{className:"TanksList-Item Item Row-2",key:"header"},r.a.createElement("div",{className:"Head Item"},r.a.createElement("div",{className:"Capacity"},"Capacity"),r.a.createElement("div",{className:"Height"},"Height"),r.a.createElement("div",{className:"Diameter"},"Diameter"),r.a.createElement("div",{className:"ID"},"ID")),this.state.datas.map((function(t){return t.lenght>0?r.a.createElement("div",{className:"Item",key:t.TankID},r.a.createElement("div",null,t.capacity," m3"),r.a.createElement("div",null,t.height," m"),r.a.createElement("div",null,t.diameter," m"),r.a.createElement("div",null,t.TankID),r.a.createElement(H,{tank:t.height}),r.a.createElement(o.b,{to:{pathname:"/tankedit",state:{tank:e.state.datas[0]}}},r.a.createElement("button",null," Edit tank"))):r.a.createElement("div",{className:"null"},"null")}))),r.a.createElement("h2",null,"Materials:"),"        ",r.a.createElement(x,{tank:this.props.match.params.id}),r.a.createElement(k,{path:"tanks/"+this.props.match.params.id}))}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={tank:e.props.location.state.tank},e}return Object(s.a)(a,[{key:"updateCapacity",value:function(e){var t=this;this.setState((function(a){var n=Object.assign({},a.tank);return n.capacity=e,h.a.put("http://localhost:4000/tanks/"+t.state.tank.TankID,{capacity:n.capacity,tankId:t.state.tank.TankID}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),{tank:n}}))}},{key:"handleSubmit",value:function(e){alert("Podano nast\u0119puj\u0105ce imi\u0119: "),console.log(this.fileInput.files[0].name),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state.tank;return r.a.createElement("div",{className:"Tank Wrapper"},r.a.createElement("h2",null,"Tank"),r.a.createElement("div",{className:"TanksList-Item Item Row-2",key:"header"},r.a.createElement("div",{className:"Head Item"},r.a.createElement("div",{className:"Name"},"Capacity"),r.a.createElement("div",{className:"City"},"Order"),r.a.createElement("div",{className:"Client"},"ID")),r.a.createElement("div",{className:"Item",key:t.TankID},r.a.createElement("div",{key:t.TankCapacity},t.capacity," m3"),r.a.createElement("div",{key:t.OrderName},t.height,"m"),r.a.createElement("div",{key:t.TankID},t.TankID),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Capacity:",r.a.createElement("input",{type:"number",value:this.state.tank.capacity,onChange:function(t){return e.updateCapacity(t.target.value)}})),r.a.createElement("label",null,r.a.createElement("input",{type:"file",ref:function(t){return e.fileInput=t}})),r.a.createElement("input",{type:"submit",value:"Wy\u015blij"})))))}}]),a}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Supplies Wrapper"},r.a.createElement(v,{path:"supplies",handleData:this.handleDatas}),r.a.createElement("h2",null,"Supplies:"),r.a.createElement("div",{className:"Column",key:"header"},r.a.createElement("div",{className:"Row-3 Head Item"},r.a.createElement("div",{className:"Name"},"Created"),r.a.createElement("div",{className:"City"},"Supply ID"),r.a.createElement("div",{className:"Client"},"Materials"))),this.state.datas.map((function(e){return r.a.createElement(o.b,{to:"/supply/"+e.SupplyID,key:e.SupplyID},r.a.createElement("div",{className:"Row-3 Item Hover"},r.a.createElement("div",null,e.created),r.a.createElement("div",null,e.SupplyID),r.a.createElement("div",null,e.SupplyID)))})))}}]),a}(n.Component),W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.datas;return r.a.createElement("div",{className:"Order"},r.a.createElement(v,{path:"supplies/"+this.props.match.params.id,handleData:this.handleDatas}),t.map((function(a){return r.a.createElement("div",{className:"Wrapper"},r.a.createElement("div",{className:"Item"},r.a.createElement("h2",{className:"Head Item"},"Supply name: ",a.name),r.a.createElement("p",null,"SupplID: ",a.SupplyID),r.a.createElement("p",null,"Material: ",a.MaterialID)),r.a.createElement("p",null,"Tanks: "),r.a.createElement("div",{className:"Head Item Row-3"},r.a.createElement("div",null,"city"),r.a.createElement("div",null,"city"),r.a.createElement("div",null,"city")),r.a.createElement(o.b,{to:{pathname:"/supplyedit",state:{supply:t[0]}}},r.a.createElement("button",null," Edit supply"),r.a.createElement("div",{className:"Item"},r.a.createElement(k,{path:"supplies/"+e.props.match.params.id}))))})))}}]),a}(n.Component),L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={supply:e.props.location.state.supply},e}return Object(s.a)(a,[{key:"updateCapacity",value:function(e){var t=this;this.setState((function(a){var n=Object.assign({},a.supply);return n.status=e,h.a.put("http://localhost:4000/supplies/"+t.state.supply.SupplyID,{status:n.status,SupplyID:t.state.supply.SupplyID}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),{supply:n}}))}},{key:"handleSubmit",value:function(e){alert("Podano nast\u0119puj\u0105ce imi\u0119: "),console.log(this.fileInput.files[0].name),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state.supply;return r.a.createElement("div",{className:"Tank Wrapper"},r.a.createElement("h2",null,"Tank"),r.a.createElement("div",{className:"TanksList-Item Item Row-2",key:"header"},r.a.createElement("div",{className:"Head Item"},r.a.createElement("div",{className:"Name"},"Capacity"),r.a.createElement("div",{className:"City"},"Order"),r.a.createElement("div",{className:"Client"},"ID")),r.a.createElement("div",{className:"Item",key:t.OrderID},r.a.createElement("div",{key:t.status},t.status),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Capacity:",r.a.createElement("input",{type:"number",value:this.state.supply.status,onChange:function(t){return e.updateCapacity(t.target.value)}}),r.a.createElement("select",{value:this.state.supply.status,onChange:function(t){return e.updateCapacity(t.target.value)}},r.a.createElement("option",{value:"New"},"New"),r.a.createElement("option",{value:"Project"},"Project"),r.a.createElement("option",{value:"Send"},"Send"),r.a.createElement("option",{value:"Mango"},"Mango"))),r.a.createElement("label",null,r.a.createElement("input",{type:"file",ref:function(t){return e.fileInput=t}})),r.a.createElement("input",{type:"submit",value:"Wy\u015blij"})))))}}]),a}(n.Component),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={datas:[]},e.handleDatas=function(t){e.setState({datas:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"MaterialsList-content Wrapper "},r.a.createElement("h2",null,"Materials:"),r.a.createElement("div",{className:"MaterialsList-Item Column",key:"header"},r.a.createElement("div",{className:"Row-3 Head Item"},r.a.createElement("div",{className:"Name"},"Capacity"),r.a.createElement("div",{className:"City"},"Order"),r.a.createElement("div",{className:"Client"},"ID"))),r.a.createElement(v,{path:"materials",handleData:this.handleDatas}),this.state.datas.map((function(e){return r.a.createElement("div",{className:"Row-3 Item Hover",key:e.MaterialID},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.TankID),r.a.createElement("div",null,e.quantity))})))}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(o.a,null,r.a.createElement(O,null),r.a.createElement("main",null,r.a.createElement(p.a,{from:"/client/:id",to:"/clients"}),r.a.createElement(p.b,{exact:!0,path:"/clients",component:f}),r.a.createElement(p.b,{exact:!0,path:"/clients/create",component:C}),r.a.createElement(p.b,{exact:!0,path:"/client/:id",component:I}),r.a.createElement(p.b,{exact:!0,path:"/orders",component:j}),r.a.createElement(p.b,{exact:!0,path:"/orders/create",component:N}),r.a.createElement(p.b,{exact:!0,path:"/order/:id",component:D}),r.a.createElement(p.b,{exact:!0,path:"/tanks",component:T}),r.a.createElement(p.b,{exact:!0,path:"/tank/:id",component:A}),r.a.createElement(p.b,{exact:!0,path:"/supplies",component:R}),r.a.createElement(p.b,{exact:!0,path:"/supply/:id",component:W}),r.a.createElement(p.b,{exact:!0,path:"/tankedit",component:M}),r.a.createElement(p.b,{exact:!0,path:"/orderedit",component:S}),r.a.createElement(p.b,{exact:!0,path:"/supplyedit",component:L}),r.a.createElement(p.b,{exact:!0,path:"/materials",component:P}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:b}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(q,null)),document.body),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d734848d.chunk.js.map