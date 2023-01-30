"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[698],{698:(x,s,r)=>{r.r(s),r.d(s,{ProductsModule:()=>O});var m=r(6895),t=r(8274),d=r(4006),f=r(4859),u=r(1740),v=r(4247),g=r(5702),P=r(585);let b=(()=>{class o{constructor(e){this.formBuilder=e,this.unitOptions=[],this.secUnitOptions=[]}ngOnInit(){let e=new Date;this.unitOptions=[{value:"-1",label:"Select Unit"},{value:"ol",label:"Oil"},{value:"rc",label:"Rice"},{value:"ck",label:"Cake"},{value:"sr",label:"Sugar"},{value:"ml",label:"Milk"}],this.secUnitOptions=[{value:"-1",label:"Select Sec Unit"},{value:"ol",label:"Oil"},{value:"rc",label:"Rice"},{value:"ck",label:"Cake"},{value:"sr",label:"Sugar"},{value:"ml",label:"Milk"}],this.productFormGroup=this.formBuilder.group({barcode:["45643154212"],name:["Parivar"],costPrice:["2.5"],sellPrice:["5"],expireOn:[e],unit:["-1"],secUnit:["-1"]})}OnSubmit(){console.log(this.productFormGroup.value)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-product"]],decls:54,vars:4,consts:[[1,"container"],[3,"formGroup"],[1,"productDetails"],[1,"row"],[1,"p-field"],["for","barcode"],["formControlName","barcode","id","barcode","type","text","pInputText","",1,"p-inputtext-sm"],[2,"color","red"],["for","productName"],["formControlName","name","id","productName","type","text","pInputText","",1,"p-inputtext-sm"],["for","costPrice"],["formControlName","costPrice","id","costPrice","type","text","pInputText","",1,"p-inputtext-sm"],["for","sellPrice"],["formControlName","sellPrice","id","sellPrice","type","text","pInputText","",1,"p-inputtext-sm"],[1,"calender-field"],["for","expireOn"],["formControlName","expireOn","id","expireOn","appendTo","body","dateFormat","dd/mm/yy",1,"p-inputtext-sm",3,"showIcon"],["for","unit"],["formControlName","unit","appendTo","body",3,"options"],["for","secUnit"],["formControlName","secUnit","appendTo","body",1,"p-dropdown-sm",3,"options"],[1,"productUnit"],["for","createUnit"],["id","createUnit","mat-raised-button","","color","primary",1,"btn",3,"click"],[1,"action-container"],["mat-raised-button","","color","primary",1,"btn",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Add Product"),t.qZA(),t.TgZ(3,"p-card")(4,"form",1)(5,"div",2)(6,"h2"),t._uU(7,"Product Details"),t.qZA(),t.TgZ(8,"div",3)(9,"div",4)(10,"label",5),t._uU(11,"Product Barcode"),t.qZA(),t._UZ(12,"input",6),t.TgZ(13,"small",7),t._uU(14,"Barcode can not be blank"),t.qZA()(),t.TgZ(15,"div",4)(16,"label",8),t._uU(17,"Product Name"),t.qZA(),t._UZ(18,"input",9),t.qZA(),t.TgZ(19,"div",4)(20,"label",10),t._uU(21,"Cost Price"),t.qZA(),t._UZ(22,"input",11),t.qZA(),t.TgZ(23,"div",4)(24,"label",12),t._uU(25,"Sell Price"),t.qZA(),t._UZ(26,"input",13),t.qZA(),t.TgZ(27,"div",14)(28,"label",15),t._uU(29,"Product Expire On"),t.qZA(),t._UZ(30,"p-calendar",16),t.qZA(),t.TgZ(31,"div",4)(32,"label",17),t._uU(33,"Unit"),t.qZA(),t._UZ(34,"p-dropdown",18),t.qZA(),t.TgZ(35,"div",4)(36,"label",19),t._uU(37,"Secondary Unit"),t.qZA(),t._UZ(38,"p-dropdown",20),t.qZA()()(),t.TgZ(39,"div",21)(40,"h2"),t._uU(41,"Create Unit"),t.qZA(),t.TgZ(42,"div",3)(43,"div",4)(44,"label",22),t._uU(45,"Action(Add/Delete)"),t.qZA(),t.TgZ(46,"button",23),t.NdJ("click",function(){return n.OnSubmit()}),t._uU(47,"Create Unit"),t.qZA(),t.TgZ(48,"small"),t._uU(49,"Note: If Unit is not Please add !"),t.qZA()(),t._UZ(50,"div"),t.qZA()(),t.TgZ(51,"div",24)(52,"button",25),t.NdJ("click",function(){return n.OnSubmit()}),t._uU(53,"Save Product"),t.qZA()()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",n.productFormGroup),t.xp6(26),t.Q6J("showIcon",!0),t.xp6(4),t.Q6J("options",n.unitOptions),t.xp6(4),t.Q6J("options",n.secUnitOptions))},dependencies:[d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,f.lW,u.o,v.Z,g.Lt,P.f],styles:[".productDetails[_ngcontent-%COMP%], .productUnit[_ngcontent-%COMP%]{padding:10px 0}.action-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;margin-top:.5rem}.calender-field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:block}.calender-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px}"]}),o})();var a=r(3529),h=r(6931);let p=(()=>{class o{constructor(e){this.apiService=e}getProducts(){return this.apiService.get("Products")}getProduct(e){return this.apiService.get("Products/"+e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(h.s))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),C=(()=>{class o{constructor(e,n){this.route=e,this.productService=n}ngOnInit(){this.route.paramMap.subscribe(e=>{e.has("productId")&&(this.productId=e.get("productId")?e.get("productId"):"",this.productService.getProduct(this.productId).subscribe(n=>{console.log(n)}))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.gz),t.Y36(p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:2,vars:1,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e&&(t.xp6(1),t.hij("product-details works! ",n.productId,""))}}),o})();var Z=r(801),U=r(9951),T=r(2613);const y=[{path:"",children:[{path:"",component:(()=>{class o{constructor(e){this.productService=e,this.barcode="",this.isEditable=!1,this.faCoffee=Z.SvR,this.cities=[],this.selectedCityCode="LDN",this.products=[],this.cols=[],this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.selectedCityCode="RM"}ngOnInit(){this.cols=[{field:"id",header:"Product Code",sortable:!0,filtrable:!0,type:U.Q.Link},{field:"barcode",header:"Barcode",sortable:!0,filtrable:!0},{field:"name",header:"Name",sortable:!1,filtrable:!0},{field:"unitId",header:"Unit",sortable:!1,filtrable:!0},{field:"costPrice",header:"Cost Price",sortable:!1,filtrable:!0},{field:"expireOn",header:"Expire",sortable:!1,filtrable:!0}],this.productService.getProducts().subscribe(e=>{this.products=e,console.log(this.products)})}onEnterPress(e){console.log(this.barcode)}onRowEditInit(e){console.log(e)}onRowEditSave(e){console.log(e)}onRowEditCancel(e){console.log(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:6,vars:4,consts:[[1,"content"],[2,"width","220px"],["id","barcodeInput","autofocus","","type","text","pInputText","","placeholder","Product Bar Code",1,"p-inputtext-sm",3,"ngModel","keydown.enter","ngModelChange"],[3,"columns","value","isEditable","RowEditSave"]],template:function(e,n){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Products"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"input",2),t.NdJ("keydown.enter",function(l){return n.onEnterPress(l)})("ngModelChange",function(l){return n.barcode=l}),t.qZA()(),t.TgZ(5,"app-data-table",3),t.NdJ("RowEditSave",function(l){return n.onRowEditSave(l)}),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngModel",n.barcode),t.xp6(1),t.Q6J("columns",n.cols)("value",n.products)("isEditable",n.isEditable))},dependencies:[T.Q,d.Fj,d.JJ,d.On,u.o]}),o})()},{path:"add",component:b},{path:":productId",component:C}]}];let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.Bz.forChild(y),a.Bz]}),o})();var S=r(7664);let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,A,S.m]}),o})()}}]);