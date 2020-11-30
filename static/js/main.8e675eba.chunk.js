(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),a=n(8),s=n.n(a),o=(n(14),n(2)),l=n(3),u=n(5),d=n(4),h=(n(15),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this)).state={data:[]},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://myrecipe-be.herokuapp.com/").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"showOne",value:function(e){this.props.handeldRecipe(e),this.props.routeChange("one")}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"d-flex flex-wrap",children:this.state.data.map((function(t){return Object(c.jsxs)("div",{className:"card m-3",style:{width:"18rem"},children:[Object(c.jsx)("img",{className:"card-img-top",src:"https://myrecipe-be.herokuapp.com/"+t.image,alt:"Card image cap"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:t.title}),Object(c.jsx)("p",{className:"card-text",children:t.ingredients}),Object(c.jsx)("p",{className:"card-text",children:t.recipe}),Object(c.jsx)("button",{onClick:function(){return e.showOne(t._id)},className:"btn btn-primary",children:"More Details"})]})]})}))})}}]),n}(i.Component)),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this)).onSubmit=function(){if(!c.state.title||!c.state.ingredients||!c.state.rec)return alert("You can not submit empty Title, Ingredients and/or Recipe");fetch("https://myrecipe-be.herokuapp.com/edit/".concat(c.props.id),{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({title:c.state.title,ingredients:c.state.ingredients,recipe:c.state.rec})}).then((function(e){return e.json()})).then((function(e){e._id&&c.setState({recipe:e})})).catch((function(e){return console.log(e)})),c.setState({editStatus:!1})},c.delete=function(){window.confirm("Are you sure you want to delete this recipe?")&&fetch("https://myrecipe-be.herokuapp.com/delete/".concat(c.props.id),{method:"delete"}).then(setTimeout((function(){c.props.routeChange("home")}),1e3)).catch((function(e){return console.log(e)}))},c.state={recipe:[],editStatus:!1,title:"",ingredients:"",rec:""},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://myrecipe-be.herokuapp.com/recipe/".concat(this.props.id)).then((function(e){return e.json()})).then((function(t){return e.setState({recipe:t,title:t.title,ingredients:t.ingredients,rec:t.recipe})}))}},{key:"render",value:function(){var e=this,t=this.state.recipe;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"card mb-3",children:[Object(c.jsx)("img",{className:"card-img-top",src:"https://myrecipe-be.herokuapp.com/"+t.image,alt:"Card cap"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:t.title}),Object(c.jsx)("p",{className:"card-text",children:t.recipe}),Object(c.jsx)("p",{className:"card-text",children:Object(c.jsx)("small",{className:"text-muted",children:t.ingredients})}),Object(c.jsx)("button",{className:"btn btn-primary m-3",onClick:function(){return e.setState({editStatus:!0})},children:"Edit"}),Object(c.jsx)("button",{className:"btn btn-primary m-3",onClick:function(){return e.delete()},children:"Delete"}),this.state.editStatus?Object(c.jsx)("p",{children:"Edit Form is Below"}):Object(c.jsx)("div",{})]})]}),this.state.editStatus?Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"w-50",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Title"}),Object(c.jsx)("input",{name:"title",className:"form-control",defaultValue:t.title,onChange:function(t){return e.setState({title:t.target.value})}})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Ingredients"}),Object(c.jsx)("input",{name:"ingredients",className:"form-control",defaultValue:t.ingredients,onChange:function(t){return e.setState({ingredients:t.target.value})}})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"recipe"}),Object(c.jsx)("input",{name:"recipe",className:"form-control",defaultValue:t.recipe,onChange:function(t){return e.setState({rec:t.target.value})}})]}),Object(c.jsx)("button",{type:"button",onClick:function(){return e.onSubmit()},className:"btn btn-primary m-2",children:"Submit"}),Object(c.jsx)("button",{type:"button",onClick:function(){return e.setState({editStatus:!1})},className:"btn btn-primary m-2",children:"Cancel"})]})}):Object(c.jsx)("div",{})]})}}]),n}(i.Component),m=n(7),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this)).onSubmit=function(){var e=new FormData;e.append("recipeImg",c.state.image),e.append("title",c.state.title),e.append("ingredients",c.state.ingredients),e.append("recipe",c.state.recipe),fetch("https://myrecipe-be.herokuapp.com/recipe/create",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(){return c.props.routeChange("home")})).catch((function(e){return console.log(e)}))},c.state={title:"",ingredients:"",recipe:"",image:null},c}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this;return Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"w-50",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Title"}),Object(c.jsx)("input",{name:"title",className:"form-control",onChange:function(e){return t.setState({title:e.target.value})}})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Ingredients"}),Object(c.jsx)("input",(e={className:"w-50",name:"ingredients"},Object(m.a)(e,"className","form-control"),Object(m.a)(e,"onChange",(function(e){return t.setState({ingredients:e.target.value})})),e))]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"recipe"}),Object(c.jsx)("input",{name:"recipe",className:"form-control",onChange:function(e){return t.setState({recipe:e.target.value})}})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Image"}),Object(c.jsx)("input",{name:"image",className:"form-control",type:"file",onChange:function(e){return t.setState({image:e.target.files[0]})}})]}),Object(c.jsx)("button",{type:"button",onClick:function(){return t.onSubmit()},className:"btn btn-primary",children:"Submit"})]})})}}]),n}(i.Component),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).Routing=function(t){e.setState({route:t})},e.handeldRecipe=function(t){e.setState({handeledReipeId:t})},e.state={route:"home",handeledReipeId:null},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"App container bg-light",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between bg-primary",children:[Object(c.jsx)("h1",{className:"text-white",children:"My Recipes"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{className:"btn btn-primary m-2",onClick:function(){return e.Routing("home")},children:"Home"}),Object(c.jsx)("a",{className:"btn btn-primary m-2",onClick:function(){return e.Routing("new")},children:"Add New Recipe"})]})]}),"one"===this.state.route?Object(c.jsx)(j,{routeChange:this.Routing,id:this.state.handeledReipeId}):"home"===this.state.route?Object(c.jsx)(h,{routeChange:this.Routing,handeldRecipe:this.handeldRecipe}):"new"===this.state.route?Object(c.jsx)(p,{routeChange:this.Routing}):Object(c.jsx)("div",{})]})}}]),n}(i.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};n(16);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.8e675eba.chunk.js.map