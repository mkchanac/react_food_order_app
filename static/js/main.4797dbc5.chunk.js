(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2qVdk",total:"Cart_total__1R6e8",actions:"Cart_actions__2sMbW","button--alt":"Cart_button--alt__1BnlS",button:"Cart_button__27bMW"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1_1Sj",summary:"CartItem_summary__JVc1w",price:"CartItem_price__qRiai",amount:"CartItem_amount__gkBNc",actions:"CartItem_actions__8tfKe"}},,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3D3KO",icon:"HeaderCartButton_icon__2GYC5",badge:"HeaderCartButton_badge__B3IOQ",bump:"HeaderCartButton_bump__3xkeS"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__1q_32",description:"MealItem_description__3AQ01",price:"MealItem_price__BLrUr"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1vYfl",modal:"Modal_modal__3r6mb","slide-down":"Modal_slide-down__1KUo9"}},,function(e,t,n){e.exports={header:"Header_header__3JB7K","main-image":"Header_main-image__Qejvg"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__2uNkD"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__SNMR7","meals-appear":"AvailableMeals_meals-appear__2SfcA"}},function(e,t,n){e.exports={card:"Card_card__2olgl"}},function(e,t,n){e.exports={form:"MealItemForm_form__2TR7R"}},function(e,t,n){e.exports={input:"Input_input__1qcN-"}},,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),i=(n(25),n(3)),r=n(1),s=n.n(r),o=n(6),l=n.p+"static/media/meals.2971f633.jpg",m=n(15),d=n.n(m),u=n(9),j=n.n(u),b=n(0),O=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},x=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),p=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(x),o=s.items,l=s.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(b.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(b.jsx)("span",{className:j.a.icon,children:Object(b.jsx)(O,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:j.a.badge,children:l})]})},h=function(e){return Object(b.jsxs)(o.Fragment,{children:[Object(b.jsxs)("header",{className:d.a.header,children:[Object(b.jsx)("h1",{children:"ReactMeals"}),Object(b.jsx)(p,{onClick:e.onShowCart})]}),Object(b.jsx)("div",{className:d.a["main-image"],children:Object(b.jsx)("img",{src:l,alt:"A table full of delicious food!"})})]})},_=n(17),f=n.n(_),v=function(){return Object(b.jsxs)("section",{className:f.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},C=n(18),g=n.n(C),N=n(19),A=n.n(N),y=function(e){return Object(b.jsx)("div",{className:A.a.card,children:e.children})},I=n(11),M=n(12),k=n.n(M),w=n(20),B=n.n(w),S=n(2),R=n(21),H=n.n(R),F=s.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:H.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(S.a)({ref:t},e.input))]})})),D=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(b.jsxs)("form",{className:B.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(b.jsx)(F,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add"}),!a&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},E=function(e){var t=Object(I.useContext)(x),n="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:k.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:k.a.description,children:e.description}),Object(b.jsx)("div",{className:k.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(D,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],q=function(){var e=T.map((function(e){return Object(b.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:g.a.meals,children:Object(b.jsx)(y,{children:Object(b.jsx)("ul",{children:e})})})},V=function(){return Object(b.jsxs)(o.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsx)(q,{})]})},z=n(4),J=n.n(z),K=n(13),P=n.n(K),Y=function(e){return Object(b.jsx)("div",{className:P.a.backdrop,onClick:e.onClose})},Q=function(e){return Object(b.jsx)("div",{className:P.a.modal,children:Object(b.jsx)("div",{className:P.a.content,children:e.children})})},$=document.getElementById("overlays"),G=function(e){return Object(b.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(b.jsx)(Y,{onClose:e.onClose}),$),c.a.createPortal(Object(b.jsx)(Q,{children:e.children}),$)]})},U=n(5),W=n.n(U),L=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:W.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:W.a.summary,children:[Object(b.jsx)("span",{className:W.a.price,children:t}),Object(b.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:W.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=function(e){var t=Object(I.useContext)(x),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(S.a)(Object(S.a)({},e),{},{amount:1}))},r=Object(b.jsx)("ul",{className:J.a["cart-items"],children:t.items.map((function(e){return Object(b.jsx)(L,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(b.jsxs)(G,{onClose:e.onClose,children:[r,Object(b.jsxs)("div",{className:J.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:n})]}),Object(b.jsxs)("div",{className:J.a.actions,children:[Object(b.jsx)("button",{className:J.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(b.jsx)("button",{className:J.a.button,children:"Order"})]})]})},Z=n(16),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a,c=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[i];return r?(n=Object(S.a)(Object(S.a)({},r),{},{amount:r.amount+t.item.amount}),(a=Object(Z.a)(e.items))[i]=n):a=e.items.concat(t.item),{items:a,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(S.a)(Object(S.a)({},l),{},{amount:l.amount-1});(s=Object(Z.a)(e.items))[o]=d}return{items:s,totalAmount:m}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(b.jsx)(x.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(ne,{children:[n&&Object(b.jsx)(X,{onClose:function(){a(!1)}}),Object(b.jsx)(h,{onShowCart:function(){a(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(V,{})})]})};c.a.render(Object(b.jsx)(ae,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.4797dbc5.chunk.js.map