"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[592],{5376:(P,d,i)=>{i.d(d,{i:()=>L});var e=i(8274),v=i(4843);let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-footer"]],decls:7,vars:0,consts:[[1,"footer-container"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div"),e._uU(2," dkeshridev@gmail.com "),e.qZA(),e.TgZ(3,"div"),e._uU(4,"Copyright \xa9 Store 2022."),e.qZA(),e.TgZ(5,"div"),e._uU(6,"Version 1.0.0"),e.qZA()())},styles:[".footer-container[_ngcontent-%COMP%]{background-color:var(--secondaryColor);display:flex;flex-direction:row;justify-content:space-around;align-items:center;width:100%;height:var(--footerHeight)}"]}),t})();var s=i(4799),m=i(801),f=i(5980),u=i(4463),b=i(2285),M=i(3071),C=i(615),x=i(8271),w=i(1327);let S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-logo"]],decls:3,vars:0,consts:[[1,"container"],[1,"h1"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Kirana Store"),e.qZA()())},styles:[".container[_ngcontent-%COMP%]{background-color:#fff;color:#000;width:200px;height:var(--navBarHeight);align-items:center;justify-content:space-around;cursor:pointer;display:flex;flex-direction:column;border-left:10px solid var(--LogoBorderColor);border-right:10px solid var(--LogoBorderColor)}.h1[_ngcontent-%COMP%]{font-family:serif;text-shadow:0px 2px 10px rgb(71 69 69)}.span_subtitle[_ngcontent-%COMP%]{font-family:ui-serif;text-shadow:0px 2px 10px rgb(71 69 69)}"]}),t})();const g=function(){return{width:"150px",textAlign:"center"}};let y=(()=>{class t{constructor(n,o,r,l){this.authenticationService=n,this.translateService=o,this.localstoraceService=r,this.userService=l,this.faCoffee=m.SvR,this.isEnLang=!0,this.autoDisplay=!1,this.baseZIndex=10,this.items=[],this.userMenu=[],this.languageMenu=[],this.isSuperAdmin=!0}ngOnInit(){this.userService.isSuperAdmin().subscribe(n=>{this.isSuperAdmin=n,this.initMenuSubsctiption=this.translateService.get("title").subscribe(o=>{this.languageMenu=this.buildLanguageMenu(),this.userMenu=this.buildUserProfileMenu(),this.items=this.buildNavigationMenu()}),this.languageSubscription=this.translateService.onLangChange.subscribe(o=>{this.languageMenu=this.buildLanguageMenu(),this.userMenu=this.buildUserProfileMenu(),this.items=this.buildNavigationMenu()})})}ngOnDestroy(){this.languageSubscription&&this.languageSubscription.unsubscribe(),this.initMenuSubsctiption&&this.initMenuSubsctiption.unsubscribe()}onLogout(){this.authenticationService.logout()}onLanguageMenuItemClick(n){this.translateService.use(n),this.localstoraceService.set(s.$x.LANG_KEY,n)}buildLanguageMenu(){return[{label:this.translateService.instant("languageLabel"),items:[{label:this.translateService.instant("Menu.Lang.English"),icon:"pi pi-fw pi-language",command:()=>{this.onLanguageMenuItemClick("en-US")}},{label:this.translateService.instant("Menu.Lang.Hindi"),icon:"pi pi-fw pi-language",command:()=>{this.onLanguageMenuItemClick("hi-IN")}}]}]}buildUserProfileMenu(){return[{label:"dkeshri",items:[{label:this.translateService.instant("Menu.User.Profile"),icon:"pi pi-fw pi-user-edit",routerLink:"views/profile"},{label:this.translateService.instant("Menu.User.Logout"),icon:"pi pi-fw pi-sign-out",routerLink:"../auth/login",command:()=>{this.onLogout()}}]}]}buildNavigationMenu(){let n=[];return n=this.isSuperAdmin?this.buildAdminNavMenu():this.buildUserNavMenu(),n}buildUserNavMenu(){return[{id:"home",label:this.translateService.instant("Menu.Nav.Home"),icon:"pi pi-fw pi-home",routerLink:"views/home"},{label:this.translateService.instant("Menu.Nav.Orders"),icon:"pi pi-fw pi-shopping-cart",items:[{label:this.translateService.instant("Menu.Nav.Order"),icon:"pi pi-fw pi-cart-plus",routerLink:"views/orders/order"},{label:this.translateService.instant("Menu.Nav.Orders"),icon:"pi pi-fw pi-bars",routerLink:"views/orders"}]},{label:this.translateService.instant("Menu.Nav.Customers"),icon:"pi pi-fw pi-user",items:[{label:this.translateService.instant("Menu.Nav.Customers"),icon:"pi pi-fw pi-bars",routerLink:"views/customers"},{label:this.translateService.instant("Menu.Nav.Add_Customer"),icon:"pi pi-fw pi-plus",routerLink:"views/customers/"+s.cQ.ADD},{label:this.translateService.instant("Menu.Nav.Delete"),icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:this.translateService.instant("Menu.Nav.Products"),icon:"pi pi-fw pi-box",items:[{label:this.translateService.instant("Menu.Nav.Products"),icon:"pi pi-fw pi-bars",routerLink:"views/products"},{label:this.translateService.instant("Menu.Nav.Add_Product"),icon:"pi pi-fw pi-plus",routerLink:"views/products/"+s.cQ.ADD},{label:this.translateService.instant("Menu.Nav.Units"),icon:"pi pi-fw pi-box",routerLink:"views/units"},{label:this.translateService.instant("Menu.Nav.Add_Unit"),icon:"pi pi-fw pi-box",routerLink:"views/units/"+s.cQ.ADD}]},{label:this.translateService.instant("Menu.Nav.Payments"),icon:"pi pi-fw pi-dollar ",routerLink:"views/payments"}]}buildAdminNavMenu(){return[{id:"home",label:this.translateService.instant("Menu.Nav.Home"),icon:"pi pi-fw pi-home",routerLink:"views/home"},{label:this.translateService.instant("Menu.Nav.Shops"),icon:"pi pi-fw pi-shopping-cart",items:[{label:this.translateService.instant("Menu.Nav.Shops"),icon:"pi pi-fw pi-bars",routerLink:"views/shops"},{label:this.translateService.instant("Menu.Nav.Add_Shop"),icon:"pi pi-fw pi-plus",routerLink:"views/shops/"+s.cQ.ADD}]},{label:this.translateService.instant("Menu.Nav.Users"),icon:"pi pi-fw pi-shopping-cart",items:[{label:this.translateService.instant("Menu.Nav.Users"),icon:"pi pi-fw pi-bars",routerLink:"views/users"},{label:this.translateService.instant("Menu.Nav.Add_User"),icon:"pi pi-fw pi-plus",routerLink:"views/users/"+s.cQ.ADD}]}]}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(f.$),e.Y36(u.sK),e.Y36(b.n),e.Y36(M.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-header"]],decls:17,vars:15,consts:[[1,"logo-container"],[1,"nav-logo",2,"color","black"],[1,"menu-container"],[3,"autoDisplay","model"],[1,"user-detail-container"],[1,"language",2,"cursor","pointer",3,"click"],["appendTo","body","styleClass","pop-menu",3,"popup","model"],["languageMenuPop",""],[1,"pi","pi-fw","pi-language"],[2,"margin-left","5px"],["userMenuPop",""],["icon","pi pi-user","shape","circle",1,"avatar",3,"click"]],template:function(n,o){if(1&n){const r=e.EpF();e.TgZ(0,"nav")(1,"div",0)(2,"div",1),e._UZ(3,"app-logo"),e.qZA()(),e.TgZ(4,"div",2),e._UZ(5,"p-menubar",3),e.qZA(),e.TgZ(6,"div",4)(7,"div",5),e.NdJ("click",function(c){e.CHM(r);const p=e.MAs(9);return e.KtG(p.toggle(c))}),e._UZ(8,"p-menu",6,7)(10,"i",8),e.TgZ(11,"span",9),e._uU(12),e.ALo(13,"translate"),e.qZA()(),e._UZ(14,"p-menu",6,10),e.TgZ(16,"p-avatar",11),e.NdJ("click",function(c){e.CHM(r);const p=e.MAs(15);return e.KtG(p.toggle(c))}),e.qZA()()()}2&n&&(e.xp6(5),e.Q6J("autoDisplay",o.autoDisplay)("model",o.items),e.xp6(3),e.Akn(e.DdM(13,g)),e.Q6J("popup",!0)("model",o.languageMenu),e.xp6(4),e.Oqu(e.lcZ(13,11,"language")),e.xp6(2),e.Akn(e.DdM(14,g)),e.Q6J("popup",!0)("model",o.userMenu))},dependencies:[C.nm,x.q,w.v2,S,u.X$],styles:["li[_ngcontent-%COMP%]{list-style:none}nav[_ngcontent-%COMP%]{background-color:#fff;height:var(--navBarHeight);display:flex;justify-content:space-between;align-items:center;padding:0 4%;z-index:1000;position:sticky;top:0;box-shadow:0 0 10px #b3bbce}.hamburger[_ngcontent-%COMP%]{cursor:pointer;display:none}.avatar[_ngcontent-%COMP%]{cursor:pointer;margin-left:20px}.avatar[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.line[_ngcontent-%COMP%]{width:2rem;height:4px;background-color:var(--LogoBorderColor);margin:.25rem 0;border-radius:3px}.logo-container[_ngcontent-%COMP%]{display:flex;flex:.15;align-items:center}.menu-container[_ngcontent-%COMP%]{display:flex;flex:.6;justify-content:space-evenly;align-items:center}.user-detail-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex:.15;justify-content:center}.logo_img[_ngcontent-%COMP%]{height:100%;margin-left:10px;object-fit:cover;overflow:hidden}.hamburger[_ngcontent-%COMP%]:hover{transform:scale(1.2);transition:all .3s ease-in-out}.language[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:8px}.language[_ngcontent-%COMP%]:hover{border:1px solid #b3bbce;border-radius:8px}@media screen and (max-width:1232px){nav[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.logo-container[_ngcontent-%COMP%]{display:none}}@media screen and (max-width:768px){nav[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.nav-logo[_ngcontent-%COMP%]{display:none}.hamburger[_ngcontent-%COMP%]{display:block}}@media screen and (max-width:400px){nav[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.nav-logo[_ngcontent-%COMP%]{display:none}.hamburger[_ngcontent-%COMP%]{display:block}}@media screen and (max-width: 960px){.menu-container[_ngcontent-%COMP%]{justify-content:flex-start;padding-left:20px}}"]}),t})(),L=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-base-layout"]],decls:6,vars:0,consts:[["id","main"],[1,"mainContentSection"],[1,"footer",2,"color","white"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-header"),e.TgZ(2,"div",1),e._UZ(3,"router-outlet"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"app-footer"),e.qZA()())},dependencies:[v.lC,h,y],styles:[".mainContentSection[_ngcontent-%COMP%]{position:relative;padding:20px;height:calc(100vh - var(--navBarHeight) - var(--footerHeight));background-color:#fbf9f9;scroll-behavior:smooth;overflow-y:scroll}"]}),t})()}}]);