(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{120:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(23),o=n.n(r),u=(n(86),n(87),n(12)),i=n(36),b=n.n(i),s=n(27),l=n(16),j=Object(l.b)("contacts/addContactRequest",(function(t,e){return{payload:{id:b.a.generate(),name:t,number:e}}})),d=Object(l.b)("contacts/addContactSuccess"),f=Object(l.b)("contacts/addContactError"),O=Object(l.b)("contacts/deleteContactRequest"),h=Object(l.b)("contacts/deleteContactSuccess"),m=Object(l.b)("contacts/deleteContactError"),p=Object(l.b)("contacts/getContactRequest"),C=Object(l.b)("contacts/getContactSuccess"),x=Object(l.b)("contacts/getContactError"),g=Object(l.b)("phonebook/changeFilter"),v=n(38),F=n.n(v);F.a.defaults.baseURL="http://localhost:4040/";var A=n(66),k=n.n(A),y=n(153),z=n(2),w=function(t){var e=t.title,n=t.onChange,c=t.value,a=t.nameInputId;return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)("label",{htmlFor:a,children:Object(z.jsx)(y.a,{id:"outlined-basic",label:"Name",variant:"outlined",value:c,onChange:n,type:"text",name:e,placeholder:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})})})},N=function(t){var e=t.title,n=t.onChange,c=t.value;return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)("label",{htmlFor:"",children:Object(z.jsx)(y.a,{id:"outlined-basic",label:"Number",variant:"outlined",value:c,onChange:n,type:"text",name:e,placeholder:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})})})},S=n(154);var _=Object(s.b)((function(t){return t.contacts.phonebookContacts}),(function(t){return{onSubmit:function(e){return t(function(t){return function(e){e(j()),F.a.post("contacts",t).then((function(t){return e(d(t.data))})).catch((function(t){return e(f(t))}))}}(e))}}}))((function(t){t.contacts;var e=t.onSubmit,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),l=s[0],j=s[1],d=b.a.generate(),f=b.a.generate(),O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":j(c);break;default:return}};return Object(z.jsxs)("form",{className:k.a.ContactFormWrapper,onSubmit:function(t){t.preventDefault(),e(r,l),console.log("number: ",l),console.log("name: ",r),o(""),j("")},children:[Object(z.jsx)(w,{nameInputId:d,title:"name",value:r,onChange:O,className:"FormName"}),Object(z.jsx)(N,{numberInputId:f,title:"number",value:l,onChange:O,className:"FormNumber"}),Object(z.jsx)("p",{children:Object(z.jsx)(S.a,{variant:"outlined",type:"submit",children:"Send"})})]})})),Z=n(68),L=n.n(Z),I=function(t){var e=t.contacts,n=t.deleteContact,a=t.filter,r=t.onContactFetch,o=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e,a);return Object(c.useEffect)((function(){r()}),[r]),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)("ul",{className:L.a.ContactList,children:o&&o.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(z.jsxs)("li",{children:[c," ",a,"\u2002",Object(z.jsx)(S.a,{variant:"outlined",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})},B=Object(s.b)((function(t){var e=t.contacts;return{contacts:e.phonebookContacts,filter:e.phonebookFilter}}),(function(t){return{deleteContact:function(e){return t(function(t){return function(e){e(O()),F.a.delete("contacts/"+t).then((function(){return e(h(t))})).catch((function(t){return e(m(t))}))}}(e))},onContactFetch:function(){return t((function(t){t(p()),F.a.get("contacts").then((function(e){return t(C(e.data))})).catch((function(e){return t(x(e))}))}))}}}))(I),q=n(69),E=n.n(q),J=function(t){var e=t.children;return Object(z.jsx)("div",{className:E.a.ContainerWrapper,children:e})},R=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(g(e))}}}))((function(t){var e=t.filter,n=t.changeFilter;return Object(z.jsx)("form",{action:"",children:Object(z.jsx)("label",{htmlFor:"",children:Object(z.jsx)(y.a,{label:"Find contacts by name...",variant:"standard",placeholder:"Find contacts by name...",onChange:function(t){return n(t.currentTarget.value)},type:"text",name:"name",id:"standard-basic",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."})})})}));var M,W,$=function(){return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(J,{className:"App",children:[Object(z.jsx)("h1",{children:"Phonebook"}),Object(z.jsx)(_,{}),Object(z.jsx)("h2",{children:"Contacts:"}),Object(z.jsx)(R,{}),Object(z.jsx)(B,{})]})})},D=n(15),T=n(70),G=n.n(T),P=n(30),U=n(4),V=n(19),H=Object(l.c)([],(M={},Object(U.a)(M,d,(function(t,e){var n=e.payload;return[].concat(Object(D.a)(t),[n])})),Object(U.a)(M,h,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(U.a)(M,C,(function(t,e){return e.payload})),M)),K=Object(l.c)("",Object(U.a)({},g,(function(t,e){return e.payload}))),Q=Object(l.c)(!1,(W={},Object(U.a)(W,j,(function(){return!0})),Object(U.a)(W,f,(function(){return!1})),Object(U.a)(W,d,(function(){return!1})),Object(U.a)(W,O,(function(){return!0})),Object(U.a)(W,m,(function(){return!1})),Object(U.a)(W,h,(function(){return!1})),Object(U.a)(W,p,(function(){return!0})),Object(U.a)(W,x,(function(){return!1})),Object(U.a)(W,C,(function(){return!1})),W)),X=Object(V.b)({phonebookContacts:H,phonebookFilter:K,loading:Q}),Y=[].concat(Object(D.a)(Object(l.d)({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})),[G.a]),tt=Object(l.a)({reducer:{contacts:X},middleware:Y,devTools:!1});o.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(s.a,{store:tt,children:Object(z.jsx)($,{})})}),document.getElementById("root"))},66:function(t,e,n){t.exports={formBtn:"ContactForm_formBtn__2wwFV"}},68:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__wG-LO"}},69:function(t,e,n){t.exports={ContainerWrapper:"Container_ContainerWrapper__1bRx_"}},86:function(t,e,n){},87:function(t,e,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.216a49fc.chunk.js.map