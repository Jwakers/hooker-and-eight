!function(e){var t={};function a(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=321)}({321:function(e,t,a){"use strict";a.r(t);new class{constructor(e=!1){this.gallery=document.querySelector(".gallery"),this.modal={root:document.querySelector(".modal"),content:document.querySelector(".modal__con"),img:document.querySelector(".modal__con__img")},this.modalUI={left:this.modal.root.querySelector(".modal__control--left"),right:this.modal.root.querySelector(".modal__control--right"),close:this.modal.root.querySelector(".modal__close")},this.elements=void 0,this.imageArray=e,this.currentIndex=0,this.init()}setImage(e){const t=e.getAttribute("data-modal"),a=e.getAttribute("data-alt");this.modal.img.setAttribute("src",t),this.modal.img.setAttribute("alt",a),this.showLoading(),this.modal.img.onload=()=>{this.hideLoading(),this.setMaxImageHeight(this.modal.img)},this.modal.img.onerror=()=>this.hideLoading()}unsetImage(){this.modal.img.setAttribute("src","")}openModal(e){const t=e.currentTarget;this.setImage(t);const a=t.getAttribute("data-index");this.currentIndex=a,requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.modal.root.classList.add("modal--active")})})}closeModal(){this.modal.root.classList.remove("modal--active");const e=()=>{this.unsetImage(),this.modal.root.removeEventListener("transitionend",e)};this.modal.root.addEventListener("transitionend",e)}renderGalleryMarkup(){const e="https://res.cloudinary.com/drgquplia/image/upload/",t={small:"c_fill,g_center,h_220,w_220/",large:"w_900"},a="/v1615569548/hooker-and-eight/gallery/";let i="";this.imageArray.forEach((o,n)=>{const r=this.getImageAlt(o);console.log(r);const s=`\n            <div class="gallery__box" data-modal="${e}${t.large}${a}${o}" data-index="${n}" data-alt="${r}">\n                <figure>\n                    <img class="gallery__img" alt="${r}" src="${e}${t.small}${a}${o}" />\n                </figure>\n            </div>`;i+=s}),console.log(i),this.gallery.innerHTML=i}getImageAlt(e){return e.split("-").join(" ")}handleLeft(){this.currentIndex>0?this.currentIndex--:this.currentIndex=this.maxIndex;const e=this.getImageByIndex(this.currentIndex);this.setImage(e)}handleRight(){this.currentIndex<this.maxIndex?this.currentIndex++:this.currentIndex=0;const e=this.getImageByIndex(this.currentIndex);this.setImage(e)}getImageByIndex(e){return this.gallery.querySelector(`[data-index="${e}"`)}showLoading(){this.modal.root.classList.add("modal--loading")}hideLoading(){this.modal.root.classList.remove("modal--loading")}setMaxImageHeight(e){e.style.maxHeight=null;const t=this.modal.content.offsetHeight;e.style.maxHeight=t+"px"}init(){this.renderGalleryMarkup(),this.elements=document.querySelectorAll(".gallery__box"),this.elements.forEach(e=>{e.addEventListener("click",this.openModal.bind(this))}),this.maxIndex=this.elements.length-1,this.modalUI.left.addEventListener("click",this.handleLeft.bind(this)),this.modalUI.right.addEventListener("click",this.handleRight.bind(this)),this.modalUI.close.addEventListener("click",this.closeModal.bind(this))}}(["happy-patrons-at hooker-and-eight.jpg","dan-prepping-pizza.jpg","sprinkling-cheese.jpg","steve-on-the-pizza-peel.jpg","pizza-ready-for-the-oven.jpg","pizza-on-pizza-peel.jpg","two-takeaway-pizzas.jpg","calzone-on-plate.jpg","meaty-pizza.jpg","pizza-transferring-to-plate.jpg","steve-prepping-calzone.jpg","adam-enjoying-cleaning.jpg","happy-dan.jpg","fully-loaded-calzone-ready-to-fold.jpg","hooker-and-eight-front-window.jpg","hooker-and-eight-front-at-night.jpg","prepping-mushroom-pizza.jpg","pizza-wheel-cutting.jpg","finishing-with-balsamic-glaze.jpg","hooker-and-eight-owners-and-staff.jpg","this-is-normal.jpg","hooker-and-eight-mirror.jpg","steve-weighing-dough.jpg","rugby-shirt-decoration.jpg","dan-getting-started-on-a-pizza.jpg","dan-showcasing-handmade-doughs.jpg","shaping-the-dough.jpg","vegetable-ingredients.jpg","hooker-and-eight-restaurant-interior.jpg","single-meaty-pizza-for-takeaway.jpg","large-margarita-pizza.jpg","three-pizzas-for-takeaway.jpg","two-pizzas-for-takeaway.jpg","pizzas-in-takeaway-boxes.jpg","meats-and-vegetable-pizza.jpg","meaty-pizzas-for-takeaway.jpg","ready-for-tomato-base.jpg"])}});
//# sourceMappingURL=gallery.bundle.js.map?v=c3907c3ff23dcb077531