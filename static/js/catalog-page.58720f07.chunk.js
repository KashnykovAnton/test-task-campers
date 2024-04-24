"use strict";(self.webpackChunktest_task_campers=self.webpackChunktest_task_campers||[]).push([[858],{4153:(e,s,t)=>{t.r(s),t.d(s,{default:()=>T});var a=t(2791),c=t(5700);const n="AdvertsList_adertsListWrapper__3X9T4";var r=t(8351),i=t(9732),l=t(4420),o=t(5291),d=t(684),h=t(9236),m=t(6860),g=t(4695),x=t(184);const j=()=>{const e=(0,l.I0)(),s=(0,l.v9)(o.Br),t=(0,l.v9)(o.fx),c=(0,l.v9)(o.Vc),j=(0,l.v9)(o.Bt);console.log("filteredAdverts: ",j);const u=(0,l.v9)(o.e2);(0,a.useEffect)((()=>{0===u&&e((0,d.M)()),s.length<4*t&&s.length<u&&e((0,d.N)(t))}),[e,t,s.length,u]);return(0,x.jsxs)("div",{className:n,children:[c||0!==j.length?(0,x.jsx)(m.Z,{data:j}):(0,x.jsx)(g.Z,{text:"Sorry, we don't have campers for you",customStyle:"messageText"}),c&&(0,x.jsx)(i.Z,{}),j.length<u&&0!==j.length&&(0,x.jsx)(r.Z,{text:"Load more",className:"loadMoreButton",onClick:()=>{e((0,h.Y)(t+1))}})]})};var u=t(4691),_=t(5294);const v="Geolocation_locationWrapper__ryLOD",p=()=>{const[e,s]=(0,a.useState)(""),[t,c]=(0,a.useState)("");(0,a.useEffect)((()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition((e=>n(e.coords.latitude,e.coords.longitude))):alert("Geolocation is not available in your browser.")}),[]);const n=async(e,t)=>{try{const a=await async function(e,s){const{data:t}=await(0,_.Z)("https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(e,"&lon=").concat(s));return t}(e,t);if(!a)return;s(a.address.city),c(a.address.country)}catch(a){console.log("Something went wrong: ".concat(a.message))}};return(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)(u.Z,{}),e&&t?(0,x.jsxs)("span",{children:[e,", ",t]}):(0,x.jsx)("span",{children:"Geolocation is blocked"})]})},f="Filter_filterSection__N5x2R",N="Filter_wrapper__9Ksqy",y="Filter_filterText__QGy-k",b="Filter_location__3ujAf",w="Filter_filterTextWithMargin__DXMUG",C="Filter_filterHeadline__WQ2RP",F="Filter_lastWrapper__B-dS3";const k=t.p+"static/media/AC-big.3fa8d876573e81d0e423faf46aa4efed.svg";var A=t(4400);const Z={badge:"FilterBadge_badge__5RS3G",active:"FilterBadge_active__ZDERL"};var S=t(3056);const L=e=>{let{badgeKey:s,badgeValue:t,camper:a=!1}=e;const c="AC"===s,n=(0,l.I0)(),r=(0,l.v9)(o.Zj),i=e=>{if("transmission"!==e&&"engine"!==e)n((0,S.Hl)(e));else{const s=t.toLowerCase();n((0,S.i1)({filterName:e,value:s}))}},d=e=>Array.isArray(r[e])?r[e].includes(t.toLowerCase()):r[e];return(0,x.jsxs)(x.Fragment,{children:[c&&(0,x.jsxs)("button",{className:"".concat(Z.badge," ").concat(d(s)?Z.active:""),onClick:()=>i(s),children:[(0,x.jsx)("img",{className:Z.image,src:k,alt:"AC-icon"}),(0,x.jsx)("p",{children:t})]}),!c&&(0,x.jsxs)("button",{className:"".concat(Z.badge," ").concat(d(s)?Z.active:""),onClick:()=>i(s),children:[(0,x.jsx)("svg",{className:Z.icon,width:a?40:32,height:a?28:32,children:(0,x.jsx)("use",{href:"".concat(A.Z,"#").concat(s,"-big")})}),(0,x.jsx)("p",{className:Z.stringValue,children:t})]})]})},V="FilterBadgeList_list__avjGU",B=e=>{let{data:s,camper:t}=e;return(0,x.jsx)("ul",{className:V,children:Object.entries(s).map(((e,s)=>{let[a,c]=e;return(0,x.jsx)(L,{badgeKey:a,badgeValue:c,camper:t},s)}))})},G=()=>(0,x.jsxs)("div",{className:f,children:[(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("p",{className:y,children:"Location"}),(0,x.jsx)("div",{className:b,children:(0,x.jsx)(p,{})})]}),(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("p",{className:"".concat(y," ").concat(w),children:"Filters"}),(0,x.jsx)("h3",{className:C,children:"Vehicle equipment"}),(0,x.jsx)(B,{data:{AC:"AC",transmission:"Automatic",engine:"Petrol",kitchen:"Kitchen",TV:"TV",shower:"Shower/WC"}})]}),(0,x.jsxs)("div",{className:F,children:[(0,x.jsx)("h3",{className:C,children:"Vehicle type"}),(0,x.jsx)(B,{data:{van:"Van",fully:"Fully Integrated",alcove:"Alcove"},camper:!0})]}),(0,x.jsx)(r.Z,{text:"Search",className:"searchButton"})]}),T=()=>(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(G,{}),(0,x.jsx)(j,{})]})}}]);
//# sourceMappingURL=catalog-page.58720f07.chunk.js.map