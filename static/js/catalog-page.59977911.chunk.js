"use strict";(self.webpackChunktest_task_campers=self.webpackChunktest_task_campers||[]).push([[858],{4153:(e,s,a)=>{a.r(s),a.d(s,{default:()=>L});var t=a(2791),c=a(5700);const r="AdvertsList_adertsListWrapper__3X9T4";var n=a(8351),l=a(9732),i=a(4420),o=a(5291),d=a(684),h=a(9236),m=a(6860),x=a(4695),g=a(184);const j=()=>{const e=(0,i.I0)(),s=(0,i.v9)(o.Br),a=(0,i.v9)(o.fx),c=(0,i.v9)(o.Vc),j=(0,i.v9)(o.e2);(0,t.useEffect)((()=>{0===j&&e((0,d.M)()),s.length<4*a&&s.length<j&&e((0,d.N)(a))}),[e,a,s.length,j]);return(0,g.jsxs)("div",{className:r,children:[c||0!==s.length?(0,g.jsx)(m.Z,{data:s}):(0,g.jsx)(x.Z,{text:"Sorry, we don't have campers for you",customStyle:"messageText"}),c&&(0,g.jsx)(l.Z,{}),s.length<j&&0!==s.length&&(0,g.jsx)(n.Z,{text:"Load more",className:"loadMoreButton",onClick:()=>{e((0,h.Y)(a+1))}})]})};var u=a(4691),_=a(5294);const p="Geolocation_locationWrapper__ryLOD",v=()=>{const[e,s]=(0,t.useState)(""),[a,c]=(0,t.useState)("");(0,t.useEffect)((()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition((e=>r(e.coords.latitude,e.coords.longitude))):alert("Geolocation is not available in your browser.")}),[]);const r=async(e,a)=>{try{const t=await async function(e,s){const{data:a}=await(0,_.Z)("https://nominatim.openstreetmap.org/reverse?format=json&lat=".concat(e,"&lon=").concat(s));return a}(e,a);if(!t)return;s(t.address.city),c(t.address.country)}catch(t){console.log("Something went wrong: ".concat(t.message))}};return(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)(u.Z,{}),e&&a?(0,g.jsxs)("span",{children:[e,", ",a]}):(0,g.jsx)("span",{children:"Geolocation is blocked"})]})},f="Filter_filterSection__N5x2R",N="Filter_wrapper__9Ksqy",b="Filter_filterText__QGy-k",y="Filter_location__3ujAf",w="Filter_filterTextWithMargin__DXMUG",F="Filter_filterHeadline__WQ2RP",k="Filter_lastWrapper__B-dS3";const C=a.p+"static/media/AC-big.3fa8d876573e81d0e423faf46aa4efed.svg";var S=a(4400);const A={badge:"FilterBadge_badge__5RS3G"},V=e=>{let{badgeKey:s,badgeValue:a,camper:t=!1}=e;const c="AC"===s;return(0,g.jsxs)(g.Fragment,{children:[c&&(0,g.jsxs)("button",{className:A.badge,children:[(0,g.jsx)("img",{className:A.image,src:C,alt:"AC-icon"}),(0,g.jsx)("p",{children:a})]}),!c&&(0,g.jsxs)("button",{className:A.badge,children:[(0,g.jsx)("svg",{className:A.icon,width:t?40:32,height:t?28:32,children:(0,g.jsx)("use",{href:"".concat(S.Z,"#").concat(s,"-big")})}),(0,g.jsx)("p",{className:A.stringValue,children:a})]})]})},Z="FilterBadgeList_list__avjGU",G=e=>{let{data:s,camper:a}=e;return(0,g.jsx)("ul",{className:Z,children:Object.entries(s).map(((e,s)=>{let[t,c]=e;return(0,g.jsx)(V,{badgeKey:t,badgeValue:c,camper:a},s)}))})},B=()=>(0,g.jsxs)("div",{className:f,children:[(0,g.jsxs)("div",{className:N,children:[(0,g.jsx)("p",{className:b,children:"Location"}),(0,g.jsx)("div",{className:y,children:(0,g.jsx)(v,{})})]}),(0,g.jsxs)("div",{className:N,children:[(0,g.jsx)("p",{className:"".concat(b," ").concat(w),children:"Filters"}),(0,g.jsx)("h3",{className:F,children:"Vehicle equipment"}),(0,g.jsx)(G,{data:{AC:"AC",transmission:"Automatic",kitchen:"Kitchen",TV:"TV",shower:"Shower/WC"}})]}),(0,g.jsxs)("div",{className:k,children:[(0,g.jsx)("h3",{className:F,children:"Vehicle type"}),(0,g.jsx)(G,{data:{van:"Van",fully:"Fully Integrated",alcove:"Alcove"},camper:!0})]}),(0,g.jsx)(n.Z,{text:"Search",className:"searchButton"})]}),L=()=>(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(B,{}),(0,g.jsx)(j,{})]})}}]);
//# sourceMappingURL=catalog-page.59977911.chunk.js.map