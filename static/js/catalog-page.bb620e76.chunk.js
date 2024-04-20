"use strict";(self.webpackChunktest_task_campers=self.webpackChunktest_task_campers||[]).push([[858],{5700:(e,t,s)=>{s.d(t,{Z:()=>r});const a="Container_container__VVOCq";var n=s(184);const r=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:a,children:t})}},8474:(e,t,s)=>{s.r(t),s.d(t,{default:()=>He});var a=s(2791),n=s(5700),r=s(5294);r.Z.defaults.baseURL="https://661e586198427bbbef0446b7.mockapi.io/api/";var i=s(2564);var l=s(9732),c=s(4164);const o=s.p+"static/media/icons-sprite.89630a5bb3f94720ff9ed862f7ac93aa.svg",d="Modal_backdrop__xTnIT",m="Modal_closeBtn__mlOa4",_="Modal_modal__DJDMv",h="Modal_headerContentWrapper__OULh-",u="Modal_ratingWrapper__x3ZN5",x="Modal_mainContentWrapper__J2XrQ",j="Headline_name__sUn9P";var p=s(184);const v=e=>{let{headline:t}=e;return(0,p.jsx)("h2",{className:j,children:t})},g="IconStar_iconWrapper__6sBp6",f="IconStar_notFilledIcon__W0guI",N=e=>{let{filled:t=!0}=e;return(0,p.jsx)("span",{className:g,children:(0,p.jsx)("svg",{className:t?"":f,width:"16",height:"16",children:(0,p.jsx)("use",{href:"".concat(o,"#star")})})})},y="IconPin_iconWrapper__+889o",C=e=>{let{size:t}=e;return(0,p.jsx)("span",{className:y,children:(0,p.jsx)("svg",{width:"small"===t?16:18,height:"small"===t?16:20,children:(0,p.jsx)("use",{href:"".concat(o,"#").concat("small"===t?"map-pin-small":"map-pin")})})})},b="Location_locationWrapper__tCyS2",w=e=>{let{location:t,size:s}=e;const a=t.split(", ").reverse().join(", ");return(0,p.jsxs)("div",{className:b,children:[(0,p.jsx)(C,{size:s}),(0,p.jsx)("span",{children:a})]})},S="Rating_info__bC3d9",k="Rating_ratingText__Kvs-t",F=e=>{let{reviews:t,location:s}=e;return(0,p.jsxs)("div",{className:S,children:[(0,p.jsx)(N,{}),(0,p.jsxs)("span",{className:k,children:[(()=>{const e=t.reduce(((e,t)=>e+t.reviewer_rating),0);return Math.floor(e/t.length*10)/10})(),"(",t.length," Reviews)"]}),(0,p.jsx)(w,{location:s,size:"small"})]})},A="Price_price__9Dzxz",B=e=>{let{price:t}=e;return(0,p.jsxs)("p",{className:A,children:["\u20ac",t.toFixed(2)]})},M="ModalInfoSection_buttonsWrapper__cTWNE",L="ModalInfoSection_button__HfVmV",W="ModalInfoSection_active__jTKoZ",T="ModalInfoSection_content__rQlAr",I="FeaturesComponent_featuresSection__o7nEz",D="FeaturesComponent_detailsHeadline__LhMru",V="FeaturesComponent_detailsList__BEZY1",Z="FeaturesComponent_detailsStroke__Av6m2",R="FeaturesComponent_detailsName__QYZpv",K="FeatureBadgeList_list__xF9ec",O="FeatureBadgeList_featuresList__fgQkr";const q=s.p+"static/media/AC.a62c3eda070a42c785e7a4ae57fd7308.svg",z="FeatureBadge_stringValue__horFM",E="FeatureBadge_badge__ogSlP",Q="FeatureBadge_icon__Zdf3v",U="FeatureBadge_image__c-mtA",H=e=>{let{badgeKey:t,badgeValue:s}=e;const a="string"===typeof s,n="AC"===t&&s>0,r="number"===typeof s&&s>0&&"AC"!==t;return(0,p.jsxs)(p.Fragment,{children:[a&&(0,p.jsxs)("div",{className:E,children:[(0,p.jsx)("svg",{className:Q,width:"20",height:"20",children:(0,p.jsx)("use",{href:"".concat(o,"#").concat(t)})}),(0,p.jsx)("p",{className:z,children:s})]}),n&&(0,p.jsxs)("div",{className:E,children:[(0,p.jsx)("img",{className:U,src:q,alt:"AC-icon"}),(0,p.jsxs)("p",{children:[s," ",t]})]}),r&&(0,p.jsxs)("div",{className:E,children:[(0,p.jsx)("svg",{className:Q,width:"20",height:"20",children:(0,p.jsx)("use",{href:"".concat(o,"#").concat(t)})}),(0,p.jsxs)("p",{children:[s," ",(i=t,"airConditioner"===i?"air conditioner":i)]})]})]});var i},P=e=>{let{data:t,features:s=!1}=e;return(0,p.jsx)("ul",{className:"".concat(K," ").concat(s?O:""),children:Object.entries(t).map(((e,t)=>{let[s,a]=e;return(0,p.jsx)(H,{badgeKey:s,badgeValue:a},t)}))})},G=e=>{let{data:t}=e;const{form:s,length:a,width:n,height:r,tank:i,consumption:l}=t,c={form:s,length:a,width:n,height:r,tank:i,consumption:l},o=Object.entries(c),d=(e,t)=>t!==o.length-1?e.replace(/(\d)([a-zA-Z])/g,"$1 $2"):e,m={adults:t.adults,transmission:t.transmission,AC:t.details.AC,engine:t.engine,kitchen:t.details.kitchen,beds:t.details.beds,airConditioner:t.details.airConditioner,CD:t.details.CD,radio:t.details.radio,hob:t.details.hob};return(0,p.jsxs)("div",{className:I,children:[(0,p.jsx)("div",{children:(0,p.jsx)(P,{data:m,features:"true"})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{className:D,children:"Vehicle details"}),(0,p.jsx)("ul",{className:V,children:o.map(((e,t)=>{let[s,a]=e;return(0,p.jsxs)("li",{className:Z,children:[(0,p.jsx)("p",{className:R,children:s}),(0,p.jsx)("p",{className:0===t?R:"",children:d(a,t)})]},Math.floor(100*Math.random()))}))})]})]})},Y="ReviewsComponent_reviewsSection__Ftum9",X="ReviewsComponent_reviewWrapper__LY1Ca",J="ReviewsComponent_headerWrapper__f+Wv9",$="ReviewsComponent_avatar__48Kn5",ee="ReviewsComponent_name__r6Ytz",te="IconStarList_wrapper__A1zTK",se=e=>{let{rating:t}=e;const s=[...Array.from({length:t},(()=>!0)),...Array.from({length:5-t},(()=>!1))];return(0,p.jsx)("ul",{className:te,children:s.map(((e,t)=>(0,p.jsx)(N,{filled:e},t)))})},ae={mainStyle:"TextComponent_mainStyle__Zhdij",fullDescription:"TextComponent_fullDescription__VDVyY",shortDescription:"TextComponent_shortDescription__0AOFx",formText:"TextComponent_formText__cpgKc"},ne=e=>{let{text:t,customStyle:s=""}=e;return(0,p.jsx)("div",{className:"".concat(ae.mainStyle," ").concat(ae[s]),children:t})},re=e=>{let{reviews:t}=e;return(0,p.jsx)("div",{className:Y,children:t.map((e=>(0,p.jsxs)("div",{className:X,children:[(0,p.jsxs)("div",{className:J,children:[(0,p.jsx)("div",{className:$,children:e.reviewer_name[0]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{className:ee,children:e.reviewer_name}),(0,p.jsx)(se,{rating:e.reviewer_rating})]})]}),(0,p.jsx)(ne,{text:e.comment})]},Math.floor(100*Math.random()))))})},ie="FormComponent_form__uqI5C",le="FormComponent_title__LHSp-",ce={button:"ButtonMain_button__rEion",formButton:"ButtonMain_formButton__hIyg5",loadMoreButton:"ButtonMain_loadMoreButton__NpxQy",searchButton:"ButtonMain_searchButton__fgoqQ"},oe=e=>{let{text:t,actionType:s="button",className:a}=e;return(0,p.jsx)("button",{type:s,className:"".concat(ce.button," ").concat(ce[a]),children:t})};var de=s(9513),me=s.n(de);s(8639);const _e=e=>{let{setDate:t,date:s}=e;return(0,p.jsx)(me(),{selected:s,onChange:e=>t(e),dateFormat:"MM/dd/yyyy",placeholderText:"Booking date",enableTabLoop:!1,closeOnScroll:!0,calendarStartDay:1,useWeekdaysShort:!0,customInput:(0,p.jsxs)("div",{className:"date-input-wrapper",children:[(0,p.jsx)("input",{type:"text",value:s?s.toLocaleDateString():"",onChange:e=>t(e),required:!0,placeholder:"Booking date"}),(0,p.jsx)("button",{type:"button",children:(0,p.jsx)("svg",{className:"date-input-icon",width:"20",height:"20",children:(0,p.jsx)("use",{href:"".concat(o,"#calendar")})})})]})})},he=()=>{const[e,t]=(0,a.useState)(""),[s,n]=(0,a.useState)(""),[r,i]=(0,a.useState)(""),[l,c]=(0,a.useState)(""),o=e=>{const{name:s,value:a}=e.target;switch(s){case"name":return t(a);case"email":return n(a);case"bookingDate":return i(a);case"comment":return c(a);default:return}};return(0,p.jsxs)("div",{className:ie,children:[(0,p.jsx)("h3",{className:le,children:"Book your campervan now"}),(0,p.jsx)(ne,{text:"Stay connected! We are always ready to help you.",customStyle:"formText"}),(0,p.jsxs)("form",{onSubmit:a=>{a.preventDefault(),e&&s&&r?(alert("Form submitted successfully!"),console.log("Name:",e),console.log("Email:",s),console.log("Booking date:",r),console.log("Comment:",l),t(""),n(""),i(""),c("")):alert("Please fill in all required fields.")},children:[(0,p.jsx)("input",{type:"text",name:"name",value:e,onChange:o,required:!0,placeholder:"Name"}),(0,p.jsx)("input",{type:"email",name:"email",value:s,onChange:o,required:!0,placeholder:"Email"}),(0,p.jsx)(_e,{setDate:i,date:r}),(0,p.jsx)("textarea",{name:"comment",value:l,onChange:o,placeholder:"Comment"}),(0,p.jsx)(oe,{text:"Send",actionType:"submit",className:"formButton"})]})]})},ue=e=>{let{data:t}=e;const[s,n]=(0,a.useState)("features"),r=e=>{n(e)};return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:M,children:[(0,p.jsx)("button",{className:"".concat(L," ").concat("features"===s?W:""),onClick:()=>r("features"),children:"Features"}),(0,p.jsx)("button",{className:"".concat(L," ").concat("reviews"===s?W:""),onClick:()=>r("reviews"),children:"Reviews"})]}),(0,p.jsxs)("div",{className:T,children:["features"===s?(0,p.jsx)(G,{data:t}):(0,p.jsx)(re,{reviews:t.reviews}),(0,p.jsx)(he,{})]})]})},xe="GalleryList_list__+UJLn",je="GalleryItem_image__Im4oQ",pe=e=>{let{link:t,name:s}=e;return(0,p.jsx)("img",{className:je,src:t,alt:s})},ve=e=>{let{gallery:t,name:s}=e;return(0,p.jsx)("ul",{className:xe,children:t.map((e=>(0,p.jsx)(pe,{link:e,name:s},Math.floor(100*Math.random()))))})},ge=document.querySelector("#modal-root"),fe=e=>{let{onClose:t,data:s}=e;(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.code&&t()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[t]);return(0,c.createPortal)((0,p.jsx)("div",{className:d,onClick:e=>{e.target===e.currentTarget&&t()},children:(0,p.jsxs)("div",{className:_,children:[(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)(v,{headline:s.name}),(0,p.jsx)("div",{className:m,onClick:()=>{t()},children:(0,p.jsx)("svg",{width:"32",height:"32",children:(0,p.jsx)("use",{href:"".concat(o,"#close")})})}),(0,p.jsx)("div",{className:u,children:(0,p.jsx)(F,{reviews:s.reviews,location:s.location})}),(0,p.jsx)(B,{price:s.price})]}),(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)(ve,{gallery:s.gallery,name:s.name}),(0,p.jsx)(ne,{text:s.description,customStyle:"fullDescription"}),(0,p.jsx)(ue,{data:s})]})]})}),ge)},Ne="AdvertsHeader_header__cIq28",ye="AdvertsHeader_priceWrapper__ZZiW0",Ce="FavoriteButton_button__O8uhU",be=()=>(0,p.jsx)("button",{type:"button",className:Ce,children:(0,p.jsx)("svg",{width:"24",height:"24",children:(0,p.jsx)("use",{href:"".concat(o,"#heart")})})}),we=e=>{let{name:t,price:s,reviews:a,location:n}=e;return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:Ne,children:[(0,p.jsx)(v,{headline:t}),(0,p.jsxs)("div",{className:ye,children:[(0,p.jsx)(B,{price:s}),(0,p.jsx)(be,{})]})]}),(0,p.jsx)(F,{reviews:a,location:n})]})},Se="AdvertsItem_listWrapper__mn-yU",ke="AdvertsItem_listItem__ZfyWW",Fe="AdvertsItem_modalOpen__yW-LY",Ae="AdvertsItem_infoWrapper__XfTzb",Be=e=>{let{data:t}=e;const[s,n]=(0,a.useState)(!1),r=()=>{n((e=>!e)),s?document.body.classList.remove(Fe):document.body.classList.add(Fe)},i={adults:t.adults,transmission:t.transmission,engine:t.engine,kitchen:t.details.kitchen,beds:t.details.beds,AC:t.details.AC};return(0,p.jsxs)("div",{className:Se,children:[(0,p.jsxs)("li",{className:ke,children:[(0,p.jsx)(pe,{link:t.gallery[0],name:t.name}),(0,p.jsxs)("div",{className:Ae,children:[(0,p.jsx)(we,{name:t.name,price:t.price,reviews:t.reviews,location:t.location}),(0,p.jsx)(ne,{text:t.description,customStyle:"shortDescription"}),(0,p.jsx)(P,{data:i}),(0,p.jsx)("div",{onClick:()=>{r()},children:(0,p.jsx)(oe,{text:"Show more"})})]})]}),s&&(0,p.jsx)(fe,{onClose:r,data:t})]})},Me="AdvertsList_adertsListWrapper__3X9T4",Le="AdvertsList_list__vknfo",We=e=>{let{adverts:t}=e;return(0,p.jsxs)("div",{className:Me,children:[(0,p.jsx)("ul",{className:Le,children:t.map((e=>(0,p.jsx)(Be,{data:e},e._id)))}),(0,p.jsx)(oe,{text:"Load more",className:"loadMoreButton"})]})},Te="Filter_filterSection__N5x2R",Ie="Filter_wrapper__9Ksqy",De="Filter_filterText__QGy-k",Ve="Filter_location__3ujAf",Ze="Filter_filterTextWithMargin__DXMUG",Re="Filter_filterHeadline__WQ2RP",Ke="Filter_lastWrapper__B-dS3";const Oe=s.p+"static/media/AC-big.3fa8d876573e81d0e423faf46aa4efed.svg",qe={badge:"FilterBadge_badge__5RS3G"},ze=e=>{let{badgeKey:t,badgeValue:s,camper:a=!1}=e;const n="AC"===t;return(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsxs)("div",{className:qe.badge,children:[(0,p.jsx)("img",{className:qe.image,src:Oe,alt:"AC-icon"}),(0,p.jsx)("p",{children:s})]}),!n&&(0,p.jsxs)("div",{className:qe.badge,children:[(0,p.jsx)("svg",{className:qe.icon,width:a?40:32,height:a?28:32,children:(0,p.jsx)("use",{href:"".concat(o,"#").concat(t,"-big")})}),(0,p.jsx)("p",{className:qe.stringValue,children:s})]})]})},Ee="FilterBadgeList_list__avjGU",Qe=e=>{let{data:t,camper:s}=e;return(0,p.jsx)("ul",{className:Ee,children:Object.entries(t).map(((e,t)=>{let[a,n]=e;return(0,p.jsx)(ze,{badgeKey:a,badgeValue:n,camper:s},t)}))})},Ue=()=>(0,p.jsxs)("div",{className:Te,children:[(0,p.jsxs)("div",{className:Ie,children:[(0,p.jsx)("p",{className:De,children:"Location"}),(0,p.jsx)("div",{className:Ve,children:(0,p.jsx)(w,{location:"Ukraine, Kiev"})})]}),(0,p.jsxs)("div",{className:Ie,children:[(0,p.jsx)("p",{className:"".concat(De," ").concat(Ze),children:"Filters"}),(0,p.jsx)("h3",{className:Re,children:"Vehicle equipment"}),(0,p.jsx)(Qe,{data:{AC:"AC",transmission:"Automatic",kitchen:"Kitchen",TV:"TV",shower:"Shower/WC"}})]}),(0,p.jsxs)("div",{className:Ke,children:[(0,p.jsx)("h3",{className:Re,children:"Vehicle type"}),(0,p.jsx)(Qe,{data:{van:"Van",fully:"Fully Integrated",alcove:"Alcove"},camper:!0})]}),(0,p.jsx)(oe,{text:"Search",className:"searchButton"})]}),He=()=>{const[e,t]=(0,a.useState)([]),[s,c]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{(async()=>{try{c(!0);const e=await async function(){const{data:e}=await(0,r.Z)("adverts");return e}();if(!e)return;t(e)}catch(s){e="Something went wrong: ".concat(s.message),i.Am.error(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"})}finally{c(!1)}var e})()}),[]),(0,p.jsxs)(n.Z,{children:[(0,p.jsx)(Ue,{}),(0,p.jsx)(We,{adverts:e}),s&&(0,p.jsx)(l.Z,{})]})}}}]);
//# sourceMappingURL=catalog-page.bb620e76.chunk.js.map