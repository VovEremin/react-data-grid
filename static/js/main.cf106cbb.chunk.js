(this["webpackJsonpcustom-cell-editor"]=this["webpackJsonpcustom-cell-editor"]||[]).push([[0],{114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),d=(t(87),t(12)),i=(t(63),t(163)),s=t(152),o=t(71),u=t(162),j=t(52),m=t(159),b=t(160),h=t(161),g=t(166),f=t(148),O=t(116),y=t(4);function C(e){var a=e.darkState,t=e.handleThemeChange;return Object(y.jsx)(g.a,{p:3,children:Object(y.jsxs)(f.a,{fullWidth:!0,variant:"text","aria-label":"text primary button group",children:[Object(y.jsx)(O.a,{variant:a?"text":"contained",onClick:function(){a&&t()},children:"Light"}),Object(y.jsx)(O.a,{onClick:function(){a||t()},variant:a?"contained":"text",children:"Dark"})]})})}var v=t(150),x=t(151),S=t(153),I=t(154);function p(e){var a=e.darkState,t=e.handleThemeChange;return Object(y.jsx)(v.a,{position:"fixed",children:Object(y.jsx)(x.a,{children:Object(y.jsx)(s.a,{maxWidth:"md",children:Object(y.jsxs)(S.a,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(y.jsx)(I.a,{variant:"h6",children:"React Data Grid: Cell Editors"}),Object(y.jsx)(C,{darkState:a,handleThemeChange:t})]})})})})}var E=t(117),_=t(167),k=t(157),w=t(169),M=t(164),R=t(170),G=t(158),A=t(58),F=t(23),U=(t(110),t(111),t(112),t(113),function(e){var a="Male"===e.value?"male.png":"female.png",t="https://www.ag-grid.com/example-assets/genders/".concat(a);return Object(y.jsxs)("span",{children:[Object(y.jsx)("img",{alt:t,src:t}),e.value]})}),N=8,D=46,P=Object(n.forwardRef)((function(e,a){var t=function(){var a,t=!0;return e.keyPress===N||e.keyPress===D?a="":e.charPress?(a=e.charPress,t=!1):(a=e.value,113===e.keyPress&&(t=!1)),{value:a,highlightAllOnFocus:t}}(),r=Object(n.useState)(t.value),l=Object(d.a)(r,2),c=l[0],i=l[1],s=Object(n.useState)(t.highlightAllOnFocus),o=Object(d.a)(s,2),u=o[0],j=o[1],m=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=m.current;if(e.focus(),u)e.select(),j(!1);else{var a=e.value?e.value.length:0;a>0&&e.setSelectionRange(a,a)}}),[u]);var b=e.charPress&&"1234567890".indexOf(e.charPress)<0,h=function(e){return"undefined"===typeof(e=e||window.event).which?e.keyCode:e.which},g=function(e){(function(e){return[37,39].indexOf(e.keyCode)>-1})(e)||function(e){return[D,N].indexOf(e.keyCode)>-1}(e)?e.stopPropagation():function(e){var a=h(e);return 13===a||9===a}(e)||function(e){var a=h(e);return t=e.key?e.key:String.fromCharCode(a),!!/\d/.test(t);var t}(e)||e.preventDefault&&e.preventDefault()};return Object(n.useImperativeHandle)(a,(function(){return{getValue:function(){return c},isCancelBeforeStart:function(){return b},isCancelAfterEnd:function(){return c>1e6}}})),Object(y.jsx)("input",{ref:m,value:c,onChange:function(e){return i(e.target.value)},onKeyDown:function(e){return g(e)},style:{width:"100%"}})})),W=[{first_name:"Bob",last_name:"Harrison",gender:"Male",address:"1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",country:{name:"Ireland",code:"IE"}},{first_name:"Mary",last_name:"Wilson",gender:"Female",age:11,address:"3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",country:{name:"Ireland",code:"IE"}},{first_name:"Sadiq",last_name:"Khan",gender:"Male",age:12,address:"3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",country:{name:"Ireland",code:"IE"}},{first_name:"Jerry",last_name:"Mane",gender:"Male",age:12,address:"2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",country:{name:"Ireland",code:"IE"}},{first_name:"Bob",last_name:"Harrison",gender:"Male",address:"1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",country:{name:"Ireland",code:"IE"}},{first_name:"Mary",last_name:"Wilson",gender:"Female",age:11,address:"3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",country:{name:"Ireland",code:"IE"}},{first_name:"Sadiq",last_name:"Khan",gender:"Male",age:12,address:"3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",country:{name:"Ireland",code:"IE"}},{first_name:"Jerry",last_name:"Mane",gender:"Male",age:12,address:"2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",country:{name:"Ireland",code:"IE"}},{first_name:"Bob",last_name:"Harrison",gender:"Male",address:"1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",country:{name:"Ireland",code:"IE"}},{first_name:"Mary",last_name:"Wilson",gender:"Female",age:11,address:"3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",country:{name:"Ireland",code:"IE"}},{first_name:"Sadiq",last_name:"Khan",gender:"Male",age:12,address:"3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",country:{name:"Ireland",code:"IE"}},{first_name:"Jerry",last_name:"Mane",gender:"Male",age:12,address:"2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",country:{name:"Ireland",code:"IE"}},{first_name:"Bob",last_name:"Harrison",gender:"Male",address:"1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",country:{name:"Ireland",code:"IE"}},{first_name:"Mary",last_name:"Wilson",gender:"Female",age:11,address:"3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",country:{name:"Ireland",code:"IE"}},{first_name:"Sadiq",last_name:"Khan",gender:"Male",age:12,address:"3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",country:{name:"Ireland",code:"IE"}},{first_name:"Jerry",last_name:"Mane",gender:"Male",age:12,address:"2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",country:{name:"Ireland",code:"IE"}}],H=[{name:"Ireland",code:"IE"},{name:"UK",code:"UK"},{name:"France",code:"FR"}];function T(e){var a=e.darkState,t=e.person,r=Object(n.useState)(null),l=Object(d.a)(r,2),c=(l[0],l[1]),i=Object(n.useState)(null),s=Object(d.a)(i,2),o=(s[0],s[1]),u=Object(n.useState)(W),j=Object(d.a)(u,2),m=j[0],b=j[1],h=Object(n.useState)(H),g=Object(d.a)(h,2),f=g[0],O=g[1];Object(n.useEffect)((function(){b([t].concat(Object(A.a)(m))),O([].concat(Object(A.a)(f),[t.country]))}),[t]);return Object(y.jsx)("div",{style:{width:"70vw",height:"50vh"},children:Object(y.jsx)("div",{id:"myGrid",style:{height:"100%",width:"100%"},className:"ag-theme-alpine".concat(a?"-dark":""),children:Object(y.jsxs)(F.AgGridReact,{rowSelection:"multiple",rowData:m,defaultColDef:{editable:!0,sortable:!0,flex:1,minWidth:100,filter:!0,resizable:!0},frameworkComponents:{genderCellRenderer:U,numericCellEditor:P},onGridReady:function(e){c(e.api),o(e.columnApi)},children:[Object(y.jsx)(F.AgGridColumn,{field:"first_name",headerName:"First Name",width:120,editable:!0}),Object(y.jsx)(F.AgGridColumn,{field:"last_name",headerName:"Last Name",width:120,editable:!0}),Object(y.jsx)(F.AgGridColumn,{field:"gender",width:100,editable:!0,cellRenderer:"genderCellRenderer",cellEditor:"agRichSelectCellEditor",cellEditorParams:{cellRenderer:"genderCellRenderer",values:["Male","Female"]}}),Object(y.jsx)(F.AgGridColumn,{field:"age",width:80,editable:!0,cellEditor:"numericCellEditor"}),Object(y.jsx)(F.AgGridColumn,{field:"country",width:110,cellEditor:"agRichSelectCellEditor",cellRenderer:J,keyCreator:function(e){return e.name},cellEditorParams:{cellRenderer:J,values:f},editable:!0}),Object(y.jsx)(F.AgGridColumn,{field:"address",editable:!0,cellEditor:"agLargeTextCellEditor",cellEditorParams:{maxLength:"300",cols:"50",rows:"6"}})]})})})}var J=function(e){return e.value.name};function K(e){var a=e.darkState,t=Object(n.useState)(""),r=Object(d.a)(t,2),l=r[0],c=r[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),o=s[0],u=s[1],j=Object(n.useState)(""),m=Object(d.a)(j,2),b=m[0],h=m[1],f=Object(n.useState)(""),C=Object(d.a)(f,2),v=C[0],x=C[1],I=Object(n.useState)(""),p=Object(d.a)(I,2),A=p[0],F=p[1],U=Object(n.useState)(""),N=Object(d.a)(U,2),D=N[0],P=N[1],W=Object(n.useState)(""),H=Object(d.a)(W,2),J=H[0],K=H[1],B=Object(n.useState)({first_name:"Mary",last_name:"Wilson",gender:"Female",age:13,address:"3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",country:{name:"Ireland",code:"IE"}}),L=Object(d.a)(B,2),X=L[0],q=L[1],z=Object(n.useCallback)((function(){q({first_name:l,last_name:o,gender:b,age:v,address:J,country:{name:A,code:D}}),c(""),u(""),h(""),x(""),F(""),P(""),K("")}),[l,o,b,v,J,A,D]);return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(E.a,{elevation:12,children:Object(y.jsx)(g.a,{mt:12,p:3,children:Object(y.jsxs)(S.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(y.jsxs)(g.a,{width:"90%",p:3,children:[Object(y.jsxs)(S.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(_.a,{value:l,onChange:function(e){c(e.target.value)},id:"firstName",label:"First Name",variant:"standard"}),Object(y.jsx)(_.a,{value:o,onChange:function(e){u(e.target.value)},id:"lastName",label:"Last Name",variant:"standard"}),Object(y.jsx)(g.a,{width:200,children:Object(y.jsxs)(k.a,{fullWidth:!0,children:[Object(y.jsx)(w.a,{id:"gender-label",children:"Gender"}),Object(y.jsxs)(M.a,{labelId:"gender-label",id:"gender",value:b,label:"Gender",onChange:function(e){h(e.target.value)},children:[Object(y.jsx)(R.a,{value:"Male",children:"Male"}),Object(y.jsx)(R.a,{value:"Female",children:"Female"}),Object(y.jsx)(R.a,{value:""})]})]})}),Object(y.jsx)(_.a,{value:v,onChange:function(e){x(e.target.value)},id:"age",label:"Age",variant:"standard"})]}),Object(y.jsxs)(S.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"baseline",children:[Object(y.jsx)(_.a,{value:A,onChange:function(e){F(e.target.value)},id:"country",label:"Country",variant:"standard"}),Object(y.jsx)(_.a,{value:D,onChange:function(e){P(e.target.value)},id:"countryCode",label:"Country Code",variant:"standard"}),Object(y.jsx)(_.a,{value:J,onChange:function(e){K(e.target.value)},id:"address",label:"Address",variant:"standard"}),Object(y.jsx)(g.a,{width:200,children:Object(y.jsx)(O.a,{fullWidth:!0,variant:"outlined",startIcon:Object(y.jsx)(G.a,{}),onClick:z,children:"Add person"})})]})]}),Object(y.jsx)(T,{person:X,darkState:a})]})})})})}function B(){var e=JSON.parse(localStorage.getItem("theme")),a=null!==e&&e,t=Object(n.useState)(a),r=Object(d.a)(t,2),l=r[0],c=r[1],g=l?"dark":"light",f=l?j.a[500]:m.a[500],O=l?b.a[900]:h.a[500],C=Object(o.a)({palette:{type:g,primary:{main:f},secondary:{main:O}}});return Object(y.jsxs)(u.a,{theme:C,children:[Object(y.jsx)(i.a,{}),Object(y.jsxs)(s.a,{children:[Object(y.jsx)(p,{darkState:l,handleThemeChange:function(){JSON.stringify(localStorage.setItem("theme",!l)),c(!l)}}),Object(y.jsx)(K,{darkState:l})]})]})}c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(B,{})}),document.getElementById("root"))},63:function(e,a,t){},87:function(e,a,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.cf106cbb.chunk.js.map