import './polyfills.server.mjs';
import{a as h}from"./chunk-U6LCQOCF.mjs";import"./chunk-QZLY374Y.mjs";import{$a as m,Fb as l,Lc as f,Mb as i,Ob as d,Ra as a,V as s,Yb as p,_b as c,fb as x,tb as g,vb as y,wb as u,xb as t,yb as r}from"./chunk-AIV2EVMX.mjs";import"./chunk-X2SEQXRR.mjs";var S=(n,o)=>o._id;function _(n,o){if(n&1&&(t(0,"tr",6)(1,"th",8),i(2),r(),t(3,"td",9),i(4),r(),t(5,"td",9),i(6),r(),t(7,"td",9),i(8),p(9,"currency"),r()()),n&2){let e=l().$implicit;a(2),d(" ",e.id," "),a(2),d(" ",e.isPaid," "),a(2),d(" ",e.paymentMethodType," "),a(2),d(" ",c(9,4,e.totalOrderPrice,"GBP")," ")}}function C(n,o){if(n&1&&(t(0,"tr",7)(1,"th",8),i(2),r(),t(3,"td",9),i(4),r(),t(5,"td",9),i(6),r(),t(7,"td",9),i(8),p(9,"currency"),r()()),n&2){let e=l().$implicit;a(2),d(" ",e.id," "),a(2),d(" ",e.isPaid," "),a(2),d(" ",e.paymentMethodType," "),a(2),d(" ",c(9,4,e.totalOrderPrice,"GBP")," ")}}function E(n,o){if(n&1&&x(0,_,10,7,"tr",6)(1,C,10,7,"tr",7),n&2){let e=o.$implicit;g(e.paymentMethodType=="card"?0:1)}}var v=class n{orderData=[];ordersService=s(h);ngOnInit(){this.ordersService.userData(),console.log(this.ordersService.userId.id),this.getOrderdata()}getOrderdata(){this.ordersService.getUserOrders(this.ordersService.userId.id).subscribe({next:o=>{this.orderData=o,console.log(this.orderData)},error:o=>{console.log(o),console.log("errrr")}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["app-allorders"]],decls:18,vars:0,consts:[[1,"my-8"],[1,"capitalize","text-2xl","text-green-500","text-center","pb-4"],[1,"relative","overflow-x-auto"],[1,"w-full","text-sm","text-left","rtl:text-right","text-gray-500","dark:text-gray-400"],[1,"text-xs","text-gray-700","uppercase","bg-gray-50","dark:bg-gray-700","dark:text-gray-400"],["scope","col",1,"px-6","py-3"],[1,"bg-red-200","border-b","dark:bg-gray-800","dark:border-gray-700","border-gray-400"],[1,"bg-white","border-b","dark:bg-gray-800","dark:border-gray-700","border-gray-400"],["scope","row",1,"px-6","py-4","font-medium","text-gray-900","whitespace-nowrap","dark:text-white"],[1,"px-6","py-4"]],template:function(e,b){e&1&&(t(0,"section",0)(1,"h1",1),i(2," all order details "),r(),t(3,"div",2)(4,"table",3)(5,"thead",4)(6,"tr")(7,"th",5),i(8," Product id "),r(),t(9,"th",5),i(10," Product isPaid "),r(),t(11,"th",5),i(12," Product paymentMethodType "),r(),t(13,"th",5),i(14," Product totalOrderPrice "),r()()(),t(15,"tbody"),y(16,E,2,1,null,null,S),r()()()()),e&2&&(a(16),u(b.orderData))},dependencies:[f],encapsulation:2})};export{v as AllordersComponent};
