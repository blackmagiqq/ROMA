import{_ as d,c as s,d as e,w as l,v as h,h as r,F as u,r as m,o,t as p}from"./app.cb043936.js";const _={name:"exportComponent",data:function(){return{searchItem:null,recommends:[],about:null,notfound:!1}},methods:{select:function(t){axios.post("/api/export/search",{item:t}).then(n=>this.about=n.data[0].about)}},watch:{searchItem(){this.notfound=!1,this.searchItem.length>3&&axios.post("/api/export/presearch",{item:this.searchItem}).then(t=>{t.data.length==0&&(this.notfound=!0),this.recommends=t.data})}},mounted(){this.searchItem=this.$route.query.value?this.$route.query.value:null}},f={class:"app"},v=e("div",{class:"importexport_docs chapter"},[e("span",null,[e("a",{href:"https://wiki.cdek.ru/document/view?id=10738",target:"_blank"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u0435\u043C\u0430 \u043F\u043E\u0441\u044B\u043B\u043E\u043A \u0438\u0437 \u0420\u0424 \u0432 \u0415\u0410\u042D\u0421 \u0432 \u0421\u041E\u041F 009")])],-1),k={class:"chapter"},g={id:"importexport"},x=e("tr",null,[e("td",null,[e("span",{class:"centrtext"},"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F")])],-1),b={key:0},y=e("td",null,[e("span",{class:"p-green"},"\u042F \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u043C\u043E\u0433 \u043D\u0430\u0439\u0442\u0438 :(")],-1),I=[y],$={key:0,class:"chapter"},w=e("span",null,"\u0420\u0415\u041A\u041E\u041C\u0415\u041D\u0414\u0410\u0426\u0418\u0418",-1),C=e("span",{class:"p-green"},"\u043A\u043B\u0438\u043A\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C",-1),N={class:"recommends"},B=["onClick"],L={key:1,class:"chapter"},M=e("span",{class:"text-header"},"\u0418\u041D\u0424\u041E",-1),T=["innerHTML"];function V(t,n,q,D,F,i){return o(),s("div",f,[v,e("div",k,[e("table",g,[x,e("tr",null,[e("td",null,[l(e("input",{id:"item_importexport","onUpdate:modelValue":n[0]||(n[0]=a=>t.searchItem=a)},null,512),[[h,t.searchItem]])])]),t.notfound?(o(),s("tr",b,I)):r("",!0)])]),t.recommends.length>0?(o(),s("div",$,[w,C,e("div",N,[(o(!0),s(u,null,m(t.recommends,(a,c)=>(o(),s("div",{class:"recommend",key:c,onClick:H=>i.select(a.itemName)},p(a.itemName),9,B))),128))])])):r("",!0),t.about?(o(),s("div",L,[M,e("span",{class:"info",innerHTML:t.about},null,8,T)])):r("",!0)])}const S=d(_,[["render",V]]);export{S as default};