"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[460],{5223:(E,T,l)=>{l.d(T,{u:()=>I});var d=l(4799),t=l(4006),e=l(8274),x=l(2218),g=l(805),C=l(4843),m=l(6895),h=l(4859),D=l(1740),s=l(1989),v=l(4463);function w(r,b){1&r&&(e.TgZ(0,"small",14),e._uU(1,"Name can not be blank"),e.qZA())}function U(r,b){if(1&r){const a=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(a);const f=e.oxw();return e.KtG(f.onSave())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}if(2&r){const a=e.oxw();e.Q6J("disabled",a.unitForm.invalid),e.xp6(1),e.Oqu(e.lcZ(2,2,"Common.Save"))}}function M(r,b){if(1&r){const a=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(a);const f=e.oxw();return e.KtG(f.onUpdate())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}if(2&r){const a=e.oxw();e.Q6J("disabled",a.unitForm.invalid),e.xp6(1),e.Oqu(e.lcZ(2,2,"Common.Update"))}}function A(r,b){if(1&r){const a=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(a);const f=e.oxw();return e.KtG(f.onDelete())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}if(2&r){const a=e.oxw();e.Q6J("disabled",a.unitForm.invalid),e.xp6(1),e.Oqu(e.lcZ(2,2,"Common.Delete"))}}let I=(()=>{class r{constructor(a,p,f,O){this.formBuilder=a,this.unitService=p,this.messageService=f,this.route=O,this.unitId="",this.showUpdatebtn=!1,this.showDeletebtn=!1}ngOnInit(){this.route.params.subscribe(a=>{this.unitId=a.unitId,this.unitForm=this.formBuilder.group({name:["",[t.kI.required]],shortName:[""],isActive:[!0]}),this.unitId&&this.unitId!=d.cQ.ADD?(this.showUpdatebtn=!0,this.showDeletebtn=!0,this.getUnitDetail(this.unitId)):(this.showDeletebtn=!1,this.showUpdatebtn=!1)})}getUnitDetail(a){this.unitService.getUnit(a).subscribe(p=>{this.setFormOnGetUnit(p)})}setFormOnGetUnit(a){this.unitForm.controls.name.setValue(a.name),this.unitForm.controls.shortName.setValue(a.shortName),this.unitForm.controls.isActive.setValue(a.isActive)}get unitName(){return this.unitForm.get("name")}onSave(){let a={};a.name=this.unitForm.controls.name.value,a.shortName=this.unitForm.controls.shortName.value,a.isActive=this.unitForm.controls.isActive.value,a.userId=1,this.unitService.createUnit(a).subscribe(p=>{this.messageService.add({severity:"success",summary:"Unit Created Successfully",detail:p.name,life:3e3})})}onUpdate(){}onDelete(){}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(t.qu),e.Y36(x._),e.Y36(g.ez),e.Y36(C.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-create-unit"]],decls:22,vars:6,consts:[[3,"formGroup"],[1,"unitDetails"],[1,"row"],[1,"p-field"],["for","name"],["formControlName","name","id","unitName","type","text","pInputText","",1,"p-inputtext-sm"],["style","color:red",4,"ngIf"],["for","shortName"],["formControlName","shortName","id","shortName","type","text","pInputText","",1,"p-inputtext-sm"],["for","binary"],["inputId","binary","formControlName","isActive",3,"binary"],[1,"action-container"],["class","btn","mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["class","btn","mat-raised-button","","color","warn",3,"disabled","click",4,"ngIf"],[2,"color","red"],["mat-raised-button","","color","primary",1,"btn",3,"disabled","click"],["mat-raised-button","","color","warn",1,"btn",3,"disabled","click"]],template:function(a,p){1&a&&(e.TgZ(0,"form",0)(1,"div",1)(2,"h2"),e._uU(3,"Unit Details"),e.qZA(),e.TgZ(4,"div",2)(5,"div",3)(6,"label",4),e._uU(7,"Unit Name"),e.qZA(),e._UZ(8,"input",5),e.YNc(9,w,2,0,"small",6),e.qZA(),e.TgZ(10,"div",3)(11,"label",7),e._uU(12,"Short Name"),e.qZA(),e._UZ(13,"input",8),e.qZA(),e.TgZ(14,"div",3)(15,"label",9),e._uU(16,"Active"),e.qZA(),e._UZ(17,"p-checkbox",10),e.qZA()()(),e.TgZ(18,"div",11),e.YNc(19,U,3,4,"button",12),e.YNc(20,M,3,4,"button",12),e.YNc(21,A,3,4,"button",13),e.qZA()()),2&a&&(e.Q6J("formGroup",p.unitForm),e.xp6(9),e.Q6J("ngIf",(null==p.unitName.errors?null:p.unitName.errors.required)&&(p.unitName.touched||p.unitName.dirty)),e.xp6(8),e.Q6J("binary",!0),e.xp6(2),e.Q6J("ngIf",!p.showUpdatebtn),e.xp6(1),e.Q6J("ngIf",p.showUpdatebtn),e.xp6(1),e.Q6J("ngIf",p.showDeletebtn))},dependencies:[m.O5,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,h.lW,D.o,s.XZ,v.X$]}),r})()},2218:(E,T,l)=>{l.d(T,{_:()=>x});var d=l(4004),t=l(8274),e=l(6931);let x=(()=>{class g{constructor(m){this.apiService=m}getUnits(){return this.apiService.get("units")}getUnit(m){return this.apiService.get("units/"+m)}getUnitOptions(){return this.getUnits().pipe((0,d.U)(m=>{let h;return h=m.map(D=>{let s={};return s.value=D.id.toString(),s.label=D.shortName,s}),h}))}createUnit(m){return this.apiService.post("Units",m)}}return g.\u0275fac=function(m){return new(m||g)(t.LFG(e.s))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},2613:(E,T,l)=>{l.d(T,{Q:()=>W});var d=l(9951),t=l(8274),e=l(6895),x=l(4006),g=l(4843),C=l(1740),m=l(5593),h=l(805),D=l(5702),s=l(3087);function v(o,_){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"span",7),t._UZ(2,"i",8),t.TgZ(3,"input",9,10),t.NdJ("input",function(){t.CHM(n);const c=t.MAs(4);t.oxw();const u=t.MAs(3);return t.KtG(u.filterGlobal(c.value,"contains"))}),t.qZA()()()}}function w(o,_){if(1&o&&t._UZ(0,"p-sortIcon",17),2&o){const n=t.oxw().$implicit;t.Q6J("field",n.field)}}function U(o,_){if(1&o&&t._UZ(0,"p-columnFilter",18),2&o){const n=t.oxw().$implicit;t.Q6J("field",n.field)}}function M(o,_){if(1&o&&(t.TgZ(0,"th",14)(1,"div",11)(2,"div"),t._uU(3),t.qZA(),t.YNc(4,w,1,1,"p-sortIcon",15),t.YNc(5,U,1,1,"p-columnFilter",16),t.qZA()()),2&o){const n=_.$implicit;t.Q6J("pSortableColumnDisabled",!n.sortable)("pSortableColumn",n.field),t.xp6(3),t.hij(" ",n.header," "),t.xp6(1),t.Q6J("ngIf",n.sortable),t.xp6(1),t.Q6J("ngIf",n.filtrable)}}function A(o,_){1&o&&(t.TgZ(0,"th")(1,"div",11),t._uU(2," Action "),t.qZA()())}function I(o,_){if(1&o&&(t.TgZ(0,"tr")(1,"th")(2,"div",11)(3,"div"),t._uU(4," SNo. "),t.qZA()()(),t.YNc(5,M,6,5,"th",12),t.YNc(6,A,3,0,"ng-template",13),t.qZA()),2&o){const n=_.$implicit,i=t.oxw();t.xp6(5),t.Q6J("ngForOf",n),t.xp6(1),t.Q6J("ngIf",i.isEditable)}}function r(o,_){if(1&o&&(t.TgZ(0,"a",25),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit,i=t.oxw().$implicit;t.s9C("routerLink",i[n.field]),t.xp6(1),t.Oqu(i[n.field])}}function b(o,_){if(1&o){const n=t.EpF();t.TgZ(0,"input",28),t.NdJ("ngModelChange",function(c){t.CHM(n);const u=t.oxw(2).$implicit,Z=t.oxw().$implicit;return t.KtG(Z[u.field]=c)}),t.qZA()}if(2&o){const n=t.oxw(2).$implicit,i=t.oxw().$implicit;t.Q6J("ngModel",i[n.field])}}function a(o,_){if(1&o&&t._uU(0),2&o){const n=t.oxw(2).$implicit,i=t.oxw().$implicit;t.hij(" ",i[n.field]," ")}}function p(o,_){1&o&&(t.TgZ(0,"p-cellEditor"),t.YNc(1,b,1,1,"ng-template",26),t.YNc(2,a,1,1,"ng-template",27),t.qZA())}const f=function(){return{width:"150px"}};function O(o,_){if(1&o){const n=t.EpF();t.TgZ(0,"p-dropdown",29),t.NdJ("ngModelChange",function(c){t.CHM(n);const u=t.oxw(2).$implicit,Z=t.oxw().$implicit;return t.KtG(Z[u.field]=c)}),t.qZA()}if(2&o){const n=t.oxw(2).$implicit,i=t.oxw().$implicit;t.Akn(t.DdM(4,f)),t.Q6J("options",n.options)("ngModel",i[n.field])}}function N(o,_){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.label)}}function P(o,_){if(1&o&&(t.ynx(0),t.YNc(1,N,2,1,"label",21),t.BQk()),2&o){const n=_.$implicit,i=t.oxw(3).$implicit,c=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.value===c[i.field])}}function R(o,_){if(1&o&&t.YNc(0,P,2,1,"ng-container",20),2&o){const n=t.oxw(2).$implicit;t.Q6J("ngForOf",n.options)}}function F(o,_){1&o&&(t.TgZ(0,"p-cellEditor"),t.YNc(1,O,1,5,"ng-template",26),t.YNc(2,R,1,1,"ng-template",27),t.qZA())}function S(o,_){if(1&o&&t._uU(0),2&o){const n=t.oxw().$implicit,i=t.oxw().$implicit;t.hij(" ",i[n.field]," ")}}function J(o,_){if(1&o&&(t.TgZ(0,"td")(1,"div",22),t.YNc(2,r,2,2,"ng-template",23),t.YNc(3,p,3,0,"ng-template",23),t.YNc(4,F,3,0,"ng-template",23),t.YNc(5,S,1,1,"ng-template",24),t.qZA()()),2&o){const n=_.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngSwitch",n.type),t.xp6(1),t.Q6J("ngSwitchCase",i.ColumnType.Link),t.xp6(1),t.Q6J("ngSwitchCase",i.ColumnType.EditBox),t.xp6(1),t.Q6J("ngSwitchCase",i.ColumnType.DropDown)}}function y(o,_){if(1&o){const n=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2).$implicit,u=t.oxw();return t.KtG(u.onRowEditInit(c))}),t.qZA()}}function B(o,_){if(1&o){const n=t.EpF();t.TgZ(0,"button",34),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2).$implicit,u=t.oxw();return t.KtG(u.onRowEditSave(c))}),t.qZA()}}function L(o,_){if(1&o){const n=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2).$implicit,u=t.oxw();return t.KtG(u.onRowEditCancel(c))}),t.qZA()}}function Q(o,_){if(1&o&&(t.TgZ(0,"td")(1,"div",11),t.YNc(2,y,1,0,"button",30),t.YNc(3,B,1,0,"button",31),t.YNc(4,L,1,0,"button",32),t.qZA()()),2&o){const n=t.oxw().editing;t.xp6(2),t.Q6J("ngIf",!n),t.xp6(1),t.Q6J("ngIf",n),t.xp6(1),t.Q6J("ngIf",n)}}function K(o,_){if(1&o&&(t.TgZ(0,"tr",19)(1,"td")(2,"div",11)(3,"b"),t._uU(4),t.qZA()()(),t.YNc(5,J,6,4,"td",20),t.YNc(6,Q,5,3,"td",21),t.qZA()),2&o){const n=_.$implicit,i=_.columns,c=_.rowIndex,u=t.oxw();t.Q6J("pEditableRow",n),t.xp6(4),t.Oqu(c+1),t.xp6(1),t.Q6J("ngForOf",i),t.xp6(1),t.Q6J("ngIf",u.isEditable)}}const Y=function(){return{"min-width":"50rem"}},$=function(){return[10,25,50]};let W=(()=>{class o{constructor(){this.columns=[],this.value=[],this.isEditable=!1,this.RowEditSave=new t.vpe,this.ColumnType=d.Q,this.globalFilterFields=[],this.clonedValue={}}ngOnInit(){this.globalFilterFields=this.columns.map(n=>n.field)}onRowEditInit(n){this.clonedValue[n[this.columns[0].field]]={...n}}onRowEditSave(n){if(this.isValidRow()){let i={row:n};delete this.clonedValue[n[this.columns[0].field]],this.RowEditSave.emit(i)}else alert("Invalid data")}onRowEditCancel(n){let i=this.clonedValue[n[this.columns[0].field]];for(const c in i)i.hasOwnProperty(c)&&(n[c]=i[c]);delete this.clonedValue[n[this.columns[0].field]]}isValidRow(){return!0}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-data-table"]],inputs:{columns:"columns",value:"value",isEditable:"isEditable"},outputs:{RowEditSave:"RowEditSave"},decls:7,vars:12,consts:[[1,"mat-elevation-z1"],[1,"table"],["responsiveLayout","scroll","styleClass","p-datatable-sm p-datatable-striped","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","editMode","row",3,"sortField","dataKey","columns","value","tableStyle","paginator","rows","showCurrentPageReport","rowsPerPageOptions","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",1,"p-inputtext-sm",3,"input"],["inputValue",""],[1,"center"],[3,"pSortableColumnDisabled","pSortableColumn",4,"ngFor","ngForOf"],[3,"ngIf"],[3,"pSortableColumnDisabled","pSortableColumn"],[3,"field",4,"ngIf"],["type","text","display","menu",3,"field",4,"ngIf"],[3,"field"],["type","text","display","menu",3,"field"],[3,"pEditableRow"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"center",3,"ngSwitch"],[3,"ngSwitchCase"],["ngSwitchDefault",""],[3,"routerLink"],["pTemplate","input"],["pTemplate","output"],["pInputText","","type","text",1,"p-inputtext-sm",2,"text-align","center",3,"ngModel","ngModelChange"],["appendTo","body",3,"options","ngModel","ngModelChange"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil","class","p-button-rounded p-button-text",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check","class","p-button-rounded \n                                            p-button-text \n                                            p-button-success mr-2",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times","class","p-button-rounded \n                                            p-button-text \n                                            p-button-danger",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check",1,"p-button-rounded","p-button-text","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times",1,"p-button-rounded","p-button-text","p-button-danger",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p-table",2,3),t.YNc(4,v,5,0,"ng-template",4),t.YNc(5,I,7,2,"ng-template",5),t.YNc(6,K,7,4,"ng-template",6),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("sortField",i.columns[0].field)("dataKey",i.columns[0].field)("columns",i.columns)("value",i.value)("tableStyle",t.DdM(10,Y))("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(11,$))("globalFilterFields",i.globalFilterFields))},dependencies:[e.sg,e.O5,e.RF,e.n9,e.ED,x.Fj,x.JJ,x.On,g.yS,C.o,m.Hq,h.jx,D.Lt,s.iA,s.lQ,s.YL,s.fz,s.D$,s.Pv,s.U1,s.wT,s.xl],styles:[".table[_ngcontent-%COMP%]{margin:25px 0}.center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),o})()},9951:(E,T,l)=>{l.d(T,{Q:()=>d});var d=(()=>{return(t=d||(d={}))[t.SeqNum=0]="SeqNum",t[t.EditBox=1]="EditBox",t[t.DropDown=2]="DropDown",t[t.CheckBox=3]="CheckBox",t[t.Radio=4]="Radio",t[t.Link=5]="Link",t[t.Barcode=6]="Barcode",d;var t})()}}]);