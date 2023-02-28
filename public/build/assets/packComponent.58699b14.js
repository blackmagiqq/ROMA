import{_ as m,c as p,b as i,d as t,w as l,v as s,F as h,r as f,o as r,e as y}from"./app.cb043936.js";const b={data:function(){return{forAppend:{category:null,char:null,aboutItem:null,pack:null,method:null},adminItems:[]}},methods:{append:function(){axios.post("api/admin/pack/create",this.forAppend).then(o=>this.adminItems=o.data.data).catch(o=>{this.$notify({text:o.response.data.message,type:"error"})})},remove:function(o){axios.post("api/admin/pack/delete",o).then(n=>this.adminItems=n.data.data).catch(n=>{this.$notify({text:n.response.data.message,type:"error"})})},change:function(o){axios.post("/api/admin/pack/update",o).then(n=>this.adminItems=n.data.data).catch(n=>{this.$notify({text:n.response.data.message,type:"error"})})}},mounted(){axios.post("/api/admin/pack/all").then(o=>this.adminItems=o.data)}},k={class:"row justify-content-center"},g=t("div",{class:"row justify-content-center"},[t("div",{class:"col-auto"},[t("a",{class:"nav-link",href:"/v2#/app/pack",target:"_blank"},"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043C\u043E\u0434\u0443\u043B\u044C")])],-1),V={class:"col-10"},U={class:"table table-striped table-bordered text-center"},v=t("thead",{class:"table-dark"},[t("tr",null,[t("th",{scope:"col"},"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"),t("th",{scope:"col"},"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430"),t("th",{scope:"col"},"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F"),t("th",{scope:"col"},"\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430"),t("th",{scope:"col"},"\u041C\u0435\u0442\u043E\u0434"),t("th",{scope:"col"})])],-1),I=["onChange"],_=["onUpdate:modelValue"],A=["onUpdate:modelValue"],x=["onUpdate:modelValue"],C=["onUpdate:modelValue"],$=["onUpdate:modelValue"],w=["onClick"];function B(o,n,j,F,N,d){const c=y("notifications");return r(),p("div",k,[i(c),g,t("div",V,[t("table",U,[v,t("tbody",null,[t("tr",null,[t("td",null,[l(t("input",{type:"text",name:"category",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>o.forAppend.category=e)},null,512),[[s,o.forAppend.category]])]),t("td",null,[l(t("input",{type:"text",name:"char",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=e=>o.forAppend.char=e)},null,512),[[s,o.forAppend.char]])]),t("td",null,[l(t("input",{type:"text",name:"aboutItem",class:"form-control","onUpdate:modelValue":n[2]||(n[2]=e=>o.forAppend.aboutItem=e)},null,512),[[s,o.forAppend.aboutItem]])]),t("td",null,[l(t("input",{type:"text",name:"pack",class:"form-control","onUpdate:modelValue":n[3]||(n[3]=e=>o.forAppend.pack=e)},null,512),[[s,o.forAppend.pack]])]),t("td",null,[l(t("input",{type:"text",name:"method",class:"form-control","onUpdate:modelValue":n[4]||(n[4]=e=>o.forAppend.method=e)},null,512),[[s,o.forAppend.method]])]),t("td",null,[t("button",{class:"btn btn-success",onClick:n[5]||(n[5]=(...e)=>d.append&&d.append(...e))},"\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C")])]),(r(!0),p(h,null,f(o.adminItems,(e,u)=>(r(),p("tr",{key:u,onChange:a=>d.change(e)},[t("td",null,[l(t("input",{type:"text",name:"category",class:"form-control","onUpdate:modelValue":a=>e.category=a},null,8,_),[[s,e.category]])]),t("td",null,[l(t("input",{type:"text",name:"char",class:"form-control","onUpdate:modelValue":a=>e.char=a},null,8,A),[[s,e.char]])]),t("td",null,[l(t("input",{type:"text",name:"aboutItem",class:"form-control","onUpdate:modelValue":a=>e.aboutItem=a},null,8,x),[[s,e.aboutItem]])]),t("td",null,[l(t("input",{type:"text",name:"pack",class:"form-control","onUpdate:modelValue":a=>e.pack=a},null,8,C),[[s,e.pack]])]),t("td",null,[l(t("input",{type:"text",name:"method",class:"form-control","onUpdate:modelValue":a=>e.method=a},null,8,$),[[s,e.method]])]),t("td",null,[t("button",{class:"btn btn-danger",onClick:a=>d.remove(e)},"\u0443\u0434\u0430\u043B\u0438\u0442\u044C",8,w)])],40,I))),128))])])])])}const E=m(b,[["render",B]]);export{E as default};