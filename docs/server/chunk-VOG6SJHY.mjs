import './polyfills.server.mjs';
import{a as P,b as k,c as A}from"./chunk-AZOPGO3S.mjs";import{a as O}from"./chunk-GMNO6ZVF.mjs";import{l as E,m as F}from"./chunk-SQCRCTUK.mjs";import{i as w}from"./chunk-TRQRIWUV.mjs";import{$a as b,Cb as h,Eb as I,Fb as m,Mb as r,Oa as S,Ob as l,Ra as n,Tb as T,V as p,Xa as y,ba as C,ca as D,fb as d,pb as u,tb as v,ub as x,vb as f,wb as g,xb as o,yb as a,zb as c}from"./chunk-AIV2EVMX.mjs";import"./chunk-X2SEQXRR.mjs";var M=()=>[1,2,3,4,5];function N(e,i){if(e&1&&c(0,"img",15),e&2){let t=m().$implicit;u("src",t,S)}}function V(e,i){e&1&&d(0,N,1,1,"ng-template",6)}function j(e,i){e&1&&(o(0,"span",11),c(1,"i",16),a())}function z(e,i){e&1&&(o(0,"span",11),c(1,"i",17),a())}function B(e,i){if(e&1){let t=h();o(0,"section",0)(1,"h1",1),r(2,"product details"),a(),o(3,"div",2)(4,"div",3)(5,"h5",4),r(6),a(),o(7,"owl-carousel-o",5),f(8,V,1,0,null,6,x),a()(),o(10,"div",7)(11,"h2",8),r(12),a(),o(13,"p",9),r(14),a(),o(15,"div",10)(16,"span"),r(17),a(),o(18,"div"),f(19,j,2,0,"span",11,x),d(21,z,2,0,"span",11),r(22),a()(),o(23,"button",12),I("click",function(){C(t);let _=m();return D(_.addProductToCart(_.productData._id))}),o(24,"span",13),r(25," Add to cart"),a(),c(26,"i",14),a()()()()}if(e&2){let t=m();n(6),l(" ",t.productData.category.name," "),n(),u("options",t.customOptions),n(),g(t.productData.images),n(4),l(" ",t.productData.title," "),n(2),l(" ",t.productData.description," "),n(3),l(" ",t.productData.price," EGP "),n(2),g(T(7,M).slice(0,t.productData.ratingsAverage)),n(2),v(t.productData.ratingsAverage%1!==0?21:-1),n(),l(" ",t.productData.ratingsAverage," ")}}var R=class e{constructor(i){this.activatedRoute=i}productData=null;productService=p(O);cartService=p(E);toastrService=p(F);ngOnInit(){this.getProduct()}getProduct(){this.activatedRoute.paramMap.subscribe({next:i=>{console.log(i.get("id"));let t=i.get("id");this.productService.getSpacificProduct(t).subscribe({next:({data:s})=>{this.productData=s,console.log(this.productData)}})}})}addProductToCart(i){this.cartService.addToCart(i).subscribe({next:t=>{console.log(t),t.status==="success"&&(this.toastrService.success(t.message,"Add To Cart"),this.cartService.cartNumber.next(t.numOfCartItems),console.log(this.cartService.cartNumber.getValue()))},error:t=>{console.log(t)}})}customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:1e3,navText:["next.....","prev...."],responsive:{0:{items:1},400:{items:1},740:{items:1},940:{items:1}},nav:!0};static \u0275fac=function(t){return new(t||e)(y(w))};static \u0275cmp=b({type:e,selectors:[["app-details"]],decls:1,vars:1,consts:[[1,"my-5"],[1,"capitalize","text-2xl","text-green-700","font-medium","text-center","mt-5"],[1,"grid","grid-cols-12","gap-10","items-center"],[1,"col-span-3"],[1,"text-xl","font-mono","text-rose-400","text-center"],[3,"options"],["carouselSlide",""],[1,"col-span-9"],[1,"text-xl","font-bold","py-5"],[1,"text-md","text-gray-900/50"],[1,"flex","justify-between","items-center","py-6"],[1,""],[1,"animate-bounce","mb-1","bg-red-600","text-white","border","rounded","py-1","w-2/3","mx-auto","block","md:w-[80%]","hover:bg-yellow-400","transition-all","duration-300","group",3,"click"],[1,"group-hover:hidden","transition-all","duration-500"],[1,"fa-solid","fa-cart-plus","group-hover:text-black"],["alt","image",1,"w-full",3,"src"],[1,"fas","fa-star","text-yellow-400"],[1,"fas","fa-star-half-stroke","text-yellow-400"]],template:function(t,s){t&1&&d(0,B,27,8,"section",0),t&2&&v(s.productData!==null?0:-1)},dependencies:[A,k,P],encapsulation:2})};export{R as DetailsComponent};
