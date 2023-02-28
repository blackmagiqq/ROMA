import{_ as m,c as i,b as f,d as t,w as a,v as d,f as r,F as h,r as _,o as p,e as b}from"./app.cb043936.js";const y={data:function(){return{forAppend:{button:null,type:"text",info:null},adminItems:[]}},methods:{append:function(){axios.post("api/admin/guide/create",this.forAppend).then(e=>this.adminItems=e.data.data).catch(e=>{this.$notify({text:e.response.data.message,type:"error"})})},remove:function(e){axios.post("api/admin/guide/delete",e).then(n=>this.adminItems=n.data.data).catch(n=>{this.$notify({text:n.response.data.message,type:"error"})})},change:function(e){axios.post("/api/admin/guide/update",e).then(n=>this.adminItems=n.data.data).catch(n=>{this.$notify({text:n.response.data.message,type:"error"})})}},mounted(){axios.post("/api/admin/guide/all").then(e=>this.adminItems=e.data)}},g={class:"row justify-content-center"},v={class:"col-10"},x=t("div",{class:"row justify-content-center"},[t("div",{class:"col-auto"},[t("a",{class:"nav-link",href:"/v2#/app/guide",target:"_blank"},"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043C\u043E\u0434\u0443\u043B\u044C")])],-1),k={class:"table table-striped table-bordered text-center"},V=t("thead",{class:"table-dark"},[t("tr",null,[t("th",{scope:"col"},"\u041A\u043D\u043E\u043F\u043A\u0430"),t("th",{scope:"col"},"\u0422\u0438\u043F"),t("th",{scope:"col"},"\u0418\u043D\u0444\u043E"),t("th",{scope:"col"})])],-1),U=t("option",null,"text",-1),A=t("option",null,"link",-1),C=[U,A],I=["onChange"],$=["onUpdate:modelValue"],w=["onUpdate:modelValue"],B=t("option",null,"text",-1),j=t("option",null,"link",-1),F=[B,j],M=["onUpdate:modelValue"],N=["onClick"];function D(e,n,E,L,S,l){const c=b("notifications");return p(),i("div",g,[f(c),t("div",v,[x,t("table",k,[V,t("tbody",null,[t("tr",null,[t("td",null,[a(t("input",{type:"text",name:"button",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=o=>e.forAppend.button=o)},null,512),[[d,e.forAppend.button]])]),t("td",null,[a(t("select",{class:"form-control","onUpdate:modelValue":n[1]||(n[1]=o=>e.forAppend.type=o)},C,512),[[r,e.forAppend.type]])]),t("td",null,[a(t("input",{class:"form-control",type:"text",name:"info","onUpdate:modelValue":n[2]||(n[2]=o=>e.forAppend.info=o)},null,512),[[d,e.forAppend.info]])]),t("td",null,[t("button",{class:"btn btn-success",onClick:n[3]||(n[3]=(...o)=>l.append&&l.append(...o))},"\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C")])]),(p(!0),i(h,null,_(e.adminItems,(o,u)=>(p(),i("tr",{key:u,onChange:s=>l.change(o)},[t("td",null,[a(t("input",{type:"text",name:"button",class:"form-control","onUpdate:modelValue":s=>o.button=s},null,8,$),[[d,o.button]])]),t("td",null,[a(t("select",{class:"form-control","onUpdate:modelValue":s=>o.type=s},F,8,w),[[r,o.type]])]),t("td",null,[a(t("input",{type:"text",name:"info",class:"form-control","onUpdate:modelValue":s=>o.info=s},null,8,M),[[d,o.info]])]),t("td",null,[t("button",{class:"btn btn-danger",onClick:s=>l.remove(o)},"\u0443\u0434\u0430\u043B\u0438\u0442\u044C",8,N)])],40,I))),128))])])])])}const q=m(y,[["render",D]]);export{q as default};
