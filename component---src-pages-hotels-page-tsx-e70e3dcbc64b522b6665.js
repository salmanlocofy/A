"use strict";(self.webpackChunkfflight_gatsby=self.webpackChunkfflight_gatsby||[]).push([[670],{2308:function(e,t,l){var a=l(6540);t.A=e=>{let{className:t="",onClose:l}=e;return a.createElement("div",{className:`relative rounded-lg bg-color w-[900px] flex flex-col items-start justify-start p-5 box-border max-w-full max-h-full overflow-auto sm:p-2.5 sm:box-border ${t}`},a.createElement("iframe",{className:"self-stretch relative h-[560px] sm:h-[50.625vw!important]",src:"https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1",frameBorder:"0",allowFullScreen:!0}))}},3882:function(e,t,l){var a=l(6540),r=l(961);const s=e=>{let{children:t,containerId:l="portals"}=e;if("undefined"!=typeof window){let e=document.getElementById(l);return e||(e=document.createElement("div"),e.setAttribute("id",l),document.body.appendChild(e)),(0,r.createPortal)(t,e)}return a.createElement("div",null)};t.A=e=>{let{children:t,overlayColor:l,placement:r="Centered",onOutsideClick:o,zIndex:n=100,left:c=0,right:i=0,top:m=0,bottom:x=0,relativeLayerRef:p}=e;const d=(0,a.useRef)(null),{0:f,1:u}=(0,a.useState)({opacity:0}),b=(0,a.useMemo)((()=>{const e={};if(e.zIndex=n,l&&(e.backgroundColor=l),null==p||!p.current)switch(r){case"Centered":e.alignItems="center",e.justifyContent="center";break;case"Top left":e.alignItems="flex-start";break;case"Top center":e.alignItems="center";break;case"Top right":e.alignItems="flex-end";break;case"Bottom left":e.alignItems="flex-start",e.justifyContent="flex-end";break;case"Bottom center":e.alignItems="center",e.justifyContent="flex-end";break;case"Bottom right":e.alignItems="flex-end",e.justifyContent="flex-end"}return e.opacity=1,e}),[r,l,n,null==p?void 0:p.current]),v=(0,a.useCallback)((()=>{var e,t;const l=null==p||null===(e=p.current)||void 0===e?void 0:e.getBoundingClientRect(),a=null==d||null===(t=d.current)||void 0===t?void 0:t.getBoundingClientRect(),s={opacity:1};if(l&&a){const{x:e,y:t,width:o,height:n}=l,{width:p,height:d}=a;switch(s.position="absolute",r){case"Top left":s.top=t-d-m,s.left=e+c;break;case"Top right":s.top=t-d-m,s.left=e+o-p-i;break;case"Bottom left":s.top=t+n+x,s.left=e+c;break;case"Bottom right":s.top=t+n+x,s.left=e+o-p-i}u(s)}else s.maxWidth="90%",s.maxHeight="90%",u(s)}),[c,i,m,x,r,null==p?void 0:p.current,null==d?void 0:d.current]);(0,a.useEffect)((()=>(v(),window.addEventListener("resize",v),window.addEventListener("scroll",v,!0),()=>{window.removeEventListener("resize",v),window.removeEventListener("scroll",v,!0)})),[v]);const g=(0,a.useCallback)((e=>{o&&e.target.classList.contains("portalPopupOverlay")&&o(),e.stopPropagation()}),[o]);return a.createElement(s,null,a.createElement("div",{className:"flex flex-col fixed inset-0 portalPopupOverlay",style:b,onClick:g},a.createElement("div",{ref:d,style:f},t)))}},1448:function(e,t,l){l.r(t);var a=l(6540),r=l(5944),s=l(2308),o=l(3882),n=l(8007);t.default=()=>{const{0:e,1:t}=(0,a.useState)(!1),l=(0,a.useCallback)((()=>{t(!0)}),[]),c=(0,a.useCallback)((()=>{t(!1)}),[]),i=(0,a.useCallback)((()=>{(0,n.oo)("/")}),[]),m=(0,a.useCallback)((()=>{(0,n.oo)("/results-page")}),[]);return a.createElement(a.Fragment,null,a.createElement("div",{className:"relative bg-color w-full overflow-hidden flex flex-col items-start justify-start text-left text-lg text-color font-font"},a.createElement("header",{className:"self-stretch bg-color h-[77px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-font lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"},a.createElement("div",{className:"flex flex-row items-center justify-between"},a.createElement("div",{className:"relative w-[174px] h-[33px] overflow-hidden shrink-0 cursor-pointer",onClick:i},a.createElement("div",{className:"absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%]"},a.createElement("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer",alt:"",src:"/webscreen.svg",onClick:i}))),a.createElement("div",{className:"flex flex-row items-center justify-end gap-[36px] sm:flex"},a.createElement("div",{className:"flex flex-row items-center justify-end gap-[30px] md:hidden"},a.createElement("div",{className:"relative cursor-pointer",onClick:i},"Explore"),a.createElement("div",{className:"relative cursor-pointer",onClick:m},"Search"),a.createElement("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-font text-cornflowerblue-200 text-left inline-block"},"Hotels"),a.createElement("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-font text-darkslategray-200 text-left inline-block"},"Offers")),a.createElement("div",{className:"flex flex-row items-center justify-center gap-[12px]"},a.createElement("img",{className:"relative w-6 h-6 overflow-hidden shrink-0 hidden md:flex",alt:"",src:"/notification.svg"}),a.createElement("img",{className:"relative w-6 h-6 overflow-hidden shrink-0",alt:"",src:"/notification1.svg"}),a.createElement("img",{className:"rounded-19xl w-9 h-9 object-cover",alt:"",src:"/top_avatar@2x.png"}))))),a.createElement("div",{className:"self-stretch flex flex-col items-start justify-start text-23xl font-baloo-bhai"},a.createElement("div",{className:"self-stretch relative [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] h-[193px] lg:py-[21px] lg:pr-10 lg:pl-[41px] lg:box-border md:py-[21px] md:px-6 md:box-border"},a.createElement("img",{className:"absolute h-[calc(100%_-_0.4px)] w-full top-[0.4px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover",alt:"",src:"/banner-background1@2x.png"}),a.createElement("div",{className:"absolute top-[50px] left-[0px] w-[1440px] flex flex-col items-start justify-start py-0 px-20 box-border gap-[8px] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"},a.createElement("div",{className:"relative tracking-[0.02em] leading-[48px] inline-block w-[1280px] sm:text-13xl"},"Stays in Los Angeles"),a.createElement("div",{className:"flex flex-row items-start justify-start gap-[8px] text-center text-base font-font"},a.createElement("div",{className:"rounded-8xl bg-color flex flex-row items-center justify-center py-[11px] px-[21px] text-cornflowerblue-200 border-[1px] border-solid border-color"},a.createElement("div",{className:"relative tracking-[0.04em] capitalize font-medium sm:text-sm"},"Recommended")),a.createElement("div",{className:"rounded-8xl flex flex-row items-center justify-center py-[11px] px-[21px] border-[1px] border-solid border-color"},a.createElement("div",{className:"relative tracking-[0.04em] capitalize font-medium sm:text-sm"},"Price")),a.createElement("div",{className:"rounded-8xl flex flex-row items-center justify-center py-[11px] px-[21px] border-[1px] border-solid border-color"},a.createElement("div",{className:"relative tracking-[0.04em] capitalize font-medium sm:text-sm"},"Rating")))))),a.createElement("div",{className:"self-stretch flex flex-col items-start justify-start py-[50px] px-20 gap-[20px] text-darkslategray-300 lg:p-10 lg:box-border md:py-[30px] md:px-6 md:box-border"},a.createElement("div",{className:"self-stretch flex flex-row items-start justify-start"},a.createElement("div",{className:"flex-1 relative tracking-[0.04em] uppercase font-medium"},"200+ results"),a.createElement("div",{className:"relative w-[86px] h-6 text-base"},a.createElement("img",{className:"absolute top-[0px] left-[62px] w-6 h-6 overflow-hidden",alt:"",src:"/filters.svg"}),a.createElement("div",{className:"absolute top-[2.5px] left-[0px] tracking-[0.04em]"},"Filters"))),a.createElement("div",{className:"self-stretch flex flex-row items-start justify-start gap-[23px] text-base text-gray-100"},a.createElement("div",{className:"w-[561.9px] flex flex-col items-start justify-start gap-[12px] md:w-[100%!important] sm:gap-[20px]"},a.createElement("div",{className:"self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] sm:flex-col"},a.createElement("img",{className:"relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:!rounded-[10px]",alt:"",src:"/unsplashs6ch7n3eoqy@2x.png"}),a.createElement("div",{className:"flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:w-full sm:p-[15px] sm:box-border"},a.createElement("div",{className:"self-stretch flex flex-row items-start justify-start"},a.createElement("div",{className:"flex flex-col items-start justify-start gap-[6px]"},a.createElement("div",{className:"relative tracking-[0.02em] inline-block w-[146.9px]"},"1 king bed standard"),a.createElement("b",{className:"relative text-3xl tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[232.9px]"},"Holiday Inn Expre..."),a.createElement("div",{className:"relative w-[173.9px] h-[19px] text-cornflowerblue-200"},a.createElement("div",{className:"absolute top-[0px] left-[55.97px] tracking-[0.04em] inline-block w-[117.9px]"},"(1,136 reviews)"),a.createElement("div",{className:"absolute top-[0px] left-[0px] w-[46px] h-[19px] text-darkslategray-300"},a.createElement("div",{className:"absolute top-[0px] left-[21.99px] tracking-[0.04em] font-medium inline-block w-6"},"4.7"),a.createElement("img",{className:"absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector7.svg"})))),a.createElement("img",{className:"relative w-6 h-6 overflow-hidden shrink-0",alt:"",src:"/video4.svg"})),a.createElement("div",{className:"relative w-[164.5px] h-[83.6px] text-3xl text-darkslategray-300"},a.createElement("div",{className:"absolute top-[0px] left-[0px] w-28 h-[26px]"},a.createElement("b",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] capitalize"},"$S 286"),a.createElement("div",{className:"absolute top-[8px] left-[73px] text-sm tracking-[0.02em]"},"/night")),a.createElement("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]"},a.createElement("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200"}),a.createElement("div",{className:"absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-font text-color text-center"},"View Details"))))),a.createElement("div",{className:"self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] text-darkslategray-300 sm:flex-col"},a.createElement("img",{className:"relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:!rounded-[10px]",alt:"",src:"/unsplashs6ch7n3eoqy1@2x.png"}),a.createElement("div",{className:"flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:p-[15px] sm:box-border"},a.createElement("div",{className:"self-stretch flex flex-row items-start justify-start"},a.createElement("div",{className:"flex-1 relative h-[76px]"},a.createElement("b",{className:"absolute top-[25px] left-[0px] text-3xl tracking-[0.04em] capitalize inline-block w-[273.9px]"},"Freehand Los Angeles"),a.createElement("div",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-100 inline-block w-[172.8px]"},"Bed in Quad"),a.createElement("div",{className:"absolute top-[57px] left-[0px] w-[202.8px] h-[19px] text-cornflowerblue-200"},a.createElement("div",{className:"absolute top-[0px] left-[64.07px] tracking-[0.04em] inline-block w-[138.7px]"},"(1,941 reviews)"),a.createElement("div",{className:"absolute top-[0px] left-[0px] w-[54.1px] h-[19px] text-darkslategray-300"},a.createElement("div",{className:"absolute top-[0px] left-[25.86px] tracking-[0.04em] font-medium inline-block w-[28.2px]"},"4.2"),a.createElement("img",{className:"absolute h-[84.21%] w-[34.75%] top-[0%] right-[65.25%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector8.svg"}))))),a.createElement("div",{className:"relative w-[164.5px] h-[83.6px] text-3xl"},a.createElement("div",{className:"absolute top-[0px] left-[0px] w-28 h-[26px]"},a.createElement("b",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] capitalize"},"$S 198"),a.createElement("div",{className:"absolute top-[8px] left-[73px] text-sm tracking-[0.02em]"},"/night")),a.createElement("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]"},a.createElement("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200"}),a.createElement("div",{className:"absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-font text-color text-center"},"View Details"))))),a.createElement("div",{className:"self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] text-darkslategray-300 sm:flex-col"},a.createElement("img",{className:"relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:!rounded-[10px]",alt:"",src:"/unsplashs6ch7n3eoqy2@2x.png"}),a.createElement("div",{className:"flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:p-[15px] sm:box-border"},a.createElement("div",{className:"self-stretch flex flex-row items-start justify-start"},a.createElement("div",{className:"flex-1 relative h-[76px]"},a.createElement("b",{className:"absolute top-[25px] left-[0px] text-3xl tracking-[0.04em] capitalize inline-block w-[273.9px]"},"The Westin Bonavent..."),a.createElement("div",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-100 inline-block w-[172.8px]"},"1 King, City view"),a.createElement("div",{className:"absolute top-[57px] left-[0px] w-[202.8px] h-[19px] text-cornflowerblue-200"},a.createElement("div",{className:"absolute top-[0px] left-[64.07px] tracking-[0.04em] inline-block w-[138.7px]"},"(1,002 reviews)"),a.createElement("div",{className:"absolute top-[0px] left-[0px] w-[54.1px] h-[19px] text-darkslategray-300"},a.createElement("div",{className:"absolute top-[0px] left-[25.86px] tracking-[0.04em] font-medium inline-block w-[28.2px]"},"4.1"),a.createElement("img",{className:"absolute h-[84.21%] w-[34.75%] top-[0%] right-[65.25%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector9.svg"}))))),a.createElement("div",{className:"relative w-[164.5px] h-[83.6px] text-3xl"},a.createElement("div",{className:"absolute top-[0px] left-[0px] w-28 h-[26px]"},a.createElement("b",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] capitalize"},"$S 289"),a.createElement("div",{className:"absolute top-[8px] left-[73px] text-sm tracking-[0.02em]"},"/night")),a.createElement("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]"},a.createElement("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200"}),a.createElement("div",{className:"absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-font text-color text-center"},"View Details"))))),a.createElement("div",{className:"self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] sm:flex-col"},a.createElement("img",{className:"relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:!rounded-[10px]",alt:"",src:"/unsplashs6ch7n3eoqy3@2x.png"}),a.createElement("div",{className:"flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:w-full sm:p-[15px] sm:box-border"},a.createElement("div",{className:"self-stretch flex flex-row items-start justify-start"},a.createElement("div",{className:"flex flex-col items-start justify-start gap-[6px]"},a.createElement("div",{className:"relative tracking-[0.02em] inline-block w-[146.9px]"},"Deluxe King"),a.createElement("b",{className:"relative text-3xl tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[232.9px]"},"The Ritz-Carlton, L..."),a.createElement("div",{className:"relative w-[173.9px] h-[19px] text-cornflowerblue-200"},a.createElement("div",{className:"absolute top-[0px] left-[55.97px] tracking-[0.04em] inline-block w-[117.9px]"},"(1,136 reviews)"),a.createElement("div",{className:"absolute top-[0px] left-[0px] w-[46px] h-[19px] text-darkslategray-300"},a.createElement("div",{className:"absolute top-[0px] left-[21.99px] tracking-[0.04em] font-medium inline-block w-6"},"4.7"),a.createElement("img",{className:"absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector10.svg"})))),a.createElement("img",{className:"relative w-6 h-6 overflow-hidden shrink-0 cursor-pointer",alt:"",src:"/video5.svg",onClick:l})),a.createElement("div",{className:"relative w-[164.5px] h-[83.6px] text-3xl text-darkslategray-300"},a.createElement("div",{className:"absolute top-[0px] left-[0px] w-28 h-[26px]"},a.createElement("b",{className:"absolute top-[0px] left-[0px] tracking-[0.02em] capitalize"},"$S 286"),a.createElement("div",{className:"absolute top-[8px] left-[73px] text-sm tracking-[0.02em]"},"/night")),a.createElement("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]"},a.createElement("div",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200"}),a.createElement("div",{className:"absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-font text-color text-center"},"View Details"))))),a.createElement("iframe",{className:"[border:none] self-stretch relative h-[600px] hidden md:flex md:max-w-[1000px]",src:"https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik"})),a.createElement("iframe",{className:"[border:none] self-stretch flex-1 relative md:hidden",src:"https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik"}))),a.createElement("div",{className:"self-stretch flex flex-col items-start justify-start text-center text-cornflowerblue-300"},a.createElement("div",{className:"self-stretch relative bg-aliceblue h-[529px] overflow-hidden shrink-0"},a.createElement("img",{className:"absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover",alt:"",src:"/newsletter-section-background1@2x.png"}),a.createElement("div",{className:"[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col items-center justify-start p-5 box-border gap-[30px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full"},a.createElement("div",{className:"self-stretch flex flex-col items-center justify-start gap-[7px]"},a.createElement("b",{className:"self-stretch relative tracking-[0.04em] uppercase"},"subscribe to our newsletter"),a.createElement("b",{className:"self-stretch relative text-11xl text-darkslategray-100"},"Get weekly updates")),a.createElement("div",{className:"self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-color flex flex-col items-start justify-start py-7 px-[30px] gap-[17px] text-left text-slategray border-[1px] border-solid border-whitesmoke"},a.createElement("div",{className:"self-stretch flex flex-col items-start justify-start"},a.createElement("div",{className:"self-stretch relative leading-[34px]"},"Fill in your details to join the party!")),a.createElement("div",{className:"self-stretch flex flex-col items-start justify-start gap-[10px]"},a.createElement("div",{className:"self-stretch flex flex-col items-start justify-start"},a.createElement(r.A,{className:"[border:none] bg-[transparent] self-stretch font-font text-base text-gray-200",color:"primary",label:"Your name",size:"medium",variant:"outlined",type:"text",sx:{"& .MuiInputBase-root":{height:"56px"}}})),a.createElement("div",{className:"self-stretch flex flex-col items-start justify-start"},a.createElement(r.A,{className:"[border:none] bg-[transparent] self-stretch font-font text-base text-gray-200",color:"primary",label:"Email address",size:"medium",variant:"outlined",type:"text",sx:{"& .MuiInputBase-root":{height:"56px"}}}))),a.createElement("button",{className:"cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-orange-200"},a.createElement("div",{className:"overflow-hidden flex flex-col items-start justify-start py-2 px-[22px]"},a.createElement("div",{className:"relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-font text-color text-left"},"submit")))))),a.createElement("footer",{className:"self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row items-start justify-start py-[33px] px-[84px] gap-[44px] text-left text-lg text-color font-font lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border"},a.createElement("div",{className:"flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] md:flex-[unset] md:self-stretch"},a.createElement("img",{className:"relative w-[174px] h-[33px] overflow-hidden shrink-0",alt:"",src:"/logo2.svg"}),a.createElement("div",{className:"self-stretch relative leading-[27px]"},"Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop."),a.createElement("img",{className:"relative w-[130px] h-[30px]",alt:"",src:"/social-icons2.svg"})),a.createElement("div",{className:"relative box-border w-px h-[157.9px] border-r-[1px] border-solid border-gray-500 md:hidden"}),a.createElement("div",{className:"flex-1 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col"},a.createElement("div",{className:"relative w-[197.3px] h-[159.8px] sm:!mb-[40px]"},a.createElement("div",{className:"absolute top-[47.76px] left-[0px] inline-block w-[135.7px]"},"About Us"),a.createElement("div",{className:"absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.7px]"},"Company"),a.createElement("div",{className:"absolute top-[78.76px] left-[0px] inline-block w-[84.3px]"},"News"),a.createElement("div",{className:"absolute top-[109.76px] left-[0px] inline-block w-[115.1px]"},"Careers"),a.createElement("div",{className:"absolute top-[140.76px] left-[0px] inline-block w-[197.3px]"},"How we work")),a.createElement("div",{className:"relative w-[197.3px] h-[159.8px] sm:!mb-[40px]"},a.createElement("div",{className:"absolute top-[47.76px] left-[0px] inline-block w-[109.6px]"},"Account"),a.createElement("div",{className:"absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.6px]"},"Support"),a.createElement("div",{className:"absolute top-[78.76px] left-[0px] inline-block w-[197.3px]"},"Support Center"),a.createElement("div",{className:"absolute top-[109.76px] left-[0px] inline-block w-[53px]"},"FAQ"),a.createElement("div",{className:"absolute top-[140.76px] left-[0px] inline-block w-[164.4px]"},"Accessibility")),a.createElement("div",{className:"relative w-[197.3px] h-[159.8px]"},a.createElement("div",{className:"absolute top-[47.76px] left-[0px] inline-block w-[172.9px]"},"Covid Advisory"),a.createElement("div",{className:"absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.7px]"},"More"),a.createElement("div",{className:"absolute top-[78.76px] left-[0px] inline-block w-[135.4px]"},"Airline Fees"),a.createElement("div",{className:"absolute top-[109.76px] left-[0px] inline-block w-[50.6px]"},"Tips"),a.createElement("div",{className:"absolute top-[140.76px] left-[0px] inline-block w-[197.3px]"},"Quarantine Rules")))))),e&&a.createElement(o.A,{overlayColor:"rgba(0, 0, 0, 0.3)",placement:"Centered",onOutsideClick:c},a.createElement(s.A,{onClose:c})))}}}]);
//# sourceMappingURL=component---src-pages-hotels-page-tsx-e70e3dcbc64b522b6665.js.map