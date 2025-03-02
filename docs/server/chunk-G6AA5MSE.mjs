import './polyfills.server.mjs';
import{$a as p,Mb as s,Oa as c,Ob as u,P as d,Ra as a,U as l,Uc as x,V as m,_c as y,pb as b,vb as f,wb as g,xb as r,yb as i,zb as v}from"./chunk-AIV2EVMX.mjs";import"./chunk-X2SEQXRR.mjs";var o=class e{constructor(t){this.httpClient=t}getAllbrands(){return this.httpClient.get(`${y.basUrl}/api/v1/brands`)}static \u0275fac=function(n){return new(n||e)(l(x))};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})};var B=(e,t)=>t._id;function S(e,t){if(e&1&&(r(0,"div",3)(1,"a"),v(2,"img",4),i(),r(3,"div",5)(4,"a")(5,"h5",6),s(6),i()()()()),e&2){let n=t.$implicit;a(2),b("src",n.image,c)("alt",n.slug),a(4),u(" ",n.name," ")}}var C=class e{brandsService=m(o);brandData=[];ngOnInit(){this.getBrands()}getBrands(){this.brandsService.getAllbrands().subscribe({next:t=>{console.log(t),this.brandData=t.data}})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["app-brands"]],decls:6,vars:0,consts:[[1,"my-5"],[1,"text-center","text-green-500","text-3xl","py-7"],[1,"grid","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-10"],[1,"max-w-sm","bg-white","border","border-gray-200","rounded-lg","shadow-sm","dark:bg-gray-800","dark:border-gray-700"],[1,"rounded-t-lg","h-48","w-full","object-contain","border-b",3,"src","alt"],[1,"p-5"],[1,"mb-2","text-2xl","font-bold","text-red-500"]],template:function(n,h){n&1&&(r(0,"section",0)(1,"h1",1),s(2,"All Brands"),i(),r(3,"div",2),f(4,S,7,3,"div",3,B),i()()),n&2&&(a(4),g(h.brandData))},encapsulation:2})};export{C as BrandsComponent};
