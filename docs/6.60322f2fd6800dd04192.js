(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{HhTX:function(e,t,n){"use strict";n.r(t),n.d(t,"ResumeModule",function(){return h});var i=n("ofXK"),o=n("tyNb"),r=n("fXoL"),l=n("TwVa");const a=function(e,t){return{info:e,success:t}};function s(e,t){if(1&e&&(r.Fb(0,"li",2),r.Db(1,"div",3),r.Fb(2,"div",4),r.Fb(3,"div",5),r.Fb(4,"h4",6),r.Tb(5),r.Eb(),r.Fb(6,"span",7),r.Tb(7),r.Eb(),r.Eb(),r.Fb(8,"div",8),r.Fb(9,"p"),r.Tb(10),r.Eb(),r.Fb(11,"small",7),r.Tb(12),r.Eb(),r.Eb(),r.Eb(),r.Eb()),2&e){const e=t.$implicit,n=t.index;r.tb(1),r.Mb("ngClass",r.Ob(5,a,n%2,!(n%2))),r.tb(4),r.Ub(e.title),r.tb(2),r.Ub(e.place),r.tb(3),r.Ub(e.description),r.tb(2),r.Ub(e.time)}}let c=(()=>{class e{constructor(){this.colors=["primary","success","warning","danger","info"]}ngOnInit(){this.items&&this.items.length>0?this.timelineItems=this.items[0]instanceof l.b?this.generateTimelineFromEducation(this.items):this.generateTimelineFromExpirience(this.items):this.items=[]}generateTimelineFromEducation(e){const t=new Array;return e.forEach(e=>{t.push({title:e.title,description:e.description,place:e.school,time:e.period,color:""})}),t}generateTimelineFromExpirience(e){const t=new Array;return e.forEach(e=>{t.push({description:e.description,place:e.company,time:e.period,title:e.title,color:""})}),t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.wb({type:e,selectors:[["app-timeline"]],inputs:{items:"items"},decls:2,vars:1,consts:[[1,"timeline"],["class","timeline-inverted",4,"ngFor","ngForOf"],[1,"timeline-inverted"],[1,"timeline-badge",3,"ngClass"],[1,"timeline-panel"],[1,"timeline-heading"],[1,"timeline-title"],[1,"text-muted"],[1,"timeline-body"]],template:function(e,t){1&e&&(r.Fb(0,"ul",0),r.Sb(1,s,13,8,"li",1),r.Eb()),2&e&&(r.tb(1),r.Mb("ngForOf",t.timelineItems))},directives:[i.i,i.h],styles:['.timeline[_ngcontent-%COMP%]{list-style:none;padding:20px 0;position:relative}.timeline[_ngcontent-%COMP%]:before{top:0;bottom:0;position:absolute;content:" ";width:3px;background-color:#eee;margin-left:-1.5px}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin-bottom:20px;position:relative}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:after, .timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:" ";display:table}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:after{clear:both}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]{width:80%;left:30px;border:1px solid #d4d4d4;border-radius:2px;padding:20px;position:relative;box-shadow:0 1px 6px rgba(0,0,0,.175)}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:before{position:absolute;top:26px;right:-15px;display:inline-block;border-color:transparent #ccc;border-style:solid;border-width:15px 0 15px 15px;content:" "}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:after{position:absolute;top:27px;right:-14px;display:inline-block;border-color:transparent #fff;border-style:solid;border-width:14px 0 14px 14px;content:" "}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-badge[_ngcontent-%COMP%]{color:#fff;width:40px;height:40px;line-height:40px;font-size:1.4em;text-align:center;position:absolute;top:20px;left:0;margin-left:-25px;background-color:#999;z-index:100;border-top-right-radius:50%;border-top-left-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%}.timeline[_ngcontent-%COMP%] > li.timeline-inverted[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:before{border-left-width:0;border-right-width:15px;left:-15px;right:auto}.timeline[_ngcontent-%COMP%] > li.timeline-inverted[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:14px;left:-14px;right:auto}.timeline-badge.primary[_ngcontent-%COMP%]{background-color:#2e6da4!important}.timeline-badge.success[_ngcontent-%COMP%]{background-color:#3f903f!important}.timeline-badge.warning[_ngcontent-%COMP%]{background-color:#f0ad4e!important}.timeline-badge.danger[_ngcontent-%COMP%]{background-color:#d9534f!important}.timeline-badge.info[_ngcontent-%COMP%]{background-color:#5bc0de!important}.timeline-title[_ngcontent-%COMP%]{margin-top:0;color:inherit}.timeline-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-bottom:0}.timeline-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{margin-top:5px}.timeline-body[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{margin-bottom:0}@media (max-width:767px){ul.timeline[_ngcontent-%COMP%]:before{left:40px}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]{width:calc(100% - 90px);width:-webkit-calc(100% - 90px);float:right}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:before{border-left-width:0;border-right-width:15px;left:-15px;right:auto}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:14px;left:-14px;right:auto}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-badge[_ngcontent-%COMP%]{left:15px;margin-left:0;top:16px}}']}),e})(),b=(()=>{class e{constructor(){}ngOnInit(){this.items=this.generateItems()}generateItems(){const e=new Array;return e.push({description:"The technical world, hardware, and computer fundamentals as principles of networks and programming were my first approach to being a software developer.",title:"Tecnico en Informatica",period:"",school:"CBTa #147"},{description:"With more advanced subjects in software development, methodologies, and server learning, being a software developer would be my career.",title:"Ingeniero en Sistemas Computacionales",period:"",school:"Instituto Tecnologico de Delicias."},{description:"Self-taught and faithful believer that learning depends on oneself.",title:"Self Learning",period:"",school:""}),e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.wb({type:e,selectors:[["app-education"]],decls:1,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&r.Db(0,"app-timeline",0),2&e&&r.Mb("items",t.items)},directives:[c],styles:[""]}),e})(),d=(()=>{class e{constructor(){}ngOnInit(){this.items=this.generateItems()}generateItems(){const e=new Array;return e.push({title:"Software Developer",company:"Syseti",description:"Creating custom solutions for clients and support to legacy applications using .NET and Microsoft SQL Server.",period:"Oct 2012 - Jan 2013"},{title:"Full Stack Developer",company:"Servicios de Programaci\xf3n de Chihuahua",description:" Software developer creating custom solutions and responsable for ane-invoicing application. Always working onscrum teams. Responsible for creating and posting software patches andalerts to the customer web site.Coordinate the packaging and delivery of new software to manufacturing.",period:"Feb 2013 - Dec 2016"},{title:".Net Developer and Angular Developer",company:"Gamma Partners",description:"Improve and maintenance of legacy applications using .NET and Angular, always orientated to create and support custom solutions",period:"Jan 2017 - May 2019"},{title:"Lead Software Engineer",company:"PK",description:"Designed, supported, and improved a multi-user application hosted in AzureCloud using Angular, NodeJs + SailsJs, and PostgreSQL.",period:"May 2019"}),e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.wb({type:e,selectors:[["app-job-expirience"]],decls:1,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&r.Db(0,"app-timeline",0),2&e&&r.Mb("items",t.items)},directives:[c],styles:[""]}),e})();function p(e,t){if(1&e&&(r.Fb(0,"div"),r.Fb(1,"p",8),r.Tb(2),r.Eb(),r.Fb(3,"div",9),r.Db(4,"div",10),r.Eb(),r.Eb()),2&e){const e=t.$implicit;r.tb(2),r.Ub(e.name),r.tb(2),r.Mb("ngClass","w-"+e.level)("aria-valuenow",e.level)}}function m(e,t){if(1&e&&(r.Fb(0,"div"),r.Fb(1,"p",8),r.Tb(2),r.Eb(),r.Fb(3,"div",9),r.Db(4,"div",10),r.Eb(),r.Eb()),2&e){const e=t.$implicit;r.tb(2),r.Ub(e.name),r.tb(2),r.Mb("ngClass","w-"+e.level)("aria-valuenow",e.level)}}function g(e,t){if(1&e&&(r.Fb(0,"div"),r.Fb(1,"p",8),r.Tb(2),r.Eb(),r.Fb(3,"div",9),r.Db(4,"div",10),r.Eb(),r.Eb()),2&e){const e=t.$implicit;r.tb(2),r.Ub(e.name),r.tb(2),r.Mb("ngClass","w-"+e.level)("aria-valuenow",e.level)}}let u=(()=>{class e{constructor(){this.webSkills=[{name:"Angular",level:75},{name:"NodeJs",level:50},{name:"ReactJs",level:25},{name:"HTML",level:75},{name:"CSS",level:75}],this.netSkills=[{name:"C#",level:50},{name:"Entity Framework",level:50},{name:"Asp.NET",level:25},{name:"WPF",level:50}],this.dbSkills=[{name:"Microsoft SQL Server",level:50},{name:"PostgreSQL",level:75},{name:"MySql",level:25}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.wb({type:e,selectors:[["app-skills"]],decls:26,vars:3,consts:[[1,"row"],[1,"col-md-12"],[1,"col-md-4"],[1,"card","h-100"],[1,"card-header","border-0","bg-white"],[1,"card-title","text-center"],[1,"card-body"],[4,"ngFor","ngForOf"],[1,"m-0"],[1,"progress"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",3,"ngClass","aria-valuenow"]],template:function(e,t){1&e&&(r.Fb(0,"div",0),r.Fb(1,"div",1),r.Fb(2,"h4"),r.Tb(3,"Skills"),r.Eb(),r.Eb(),r.Eb(),r.Fb(4,"div",0),r.Fb(5,"div",2),r.Fb(6,"div",3),r.Fb(7,"div",4),r.Fb(8,"h6",5),r.Tb(9,"Web"),r.Eb(),r.Eb(),r.Fb(10,"div",6),r.Sb(11,p,5,3,"div",7),r.Eb(),r.Eb(),r.Eb(),r.Fb(12,"div",2),r.Fb(13,"div",3),r.Fb(14,"div",4),r.Fb(15,"h6",5),r.Tb(16,".NET"),r.Eb(),r.Eb(),r.Fb(17,"div",6),r.Sb(18,m,5,3,"div",7),r.Eb(),r.Eb(),r.Eb(),r.Fb(19,"div",2),r.Fb(20,"div",3),r.Fb(21,"div",4),r.Fb(22,"h6",5),r.Tb(23,"Databases"),r.Eb(),r.Eb(),r.Fb(24,"div",6),r.Sb(25,g,5,3,"div",7),r.Eb(),r.Eb(),r.Eb(),r.Eb()),2&e&&(r.tb(11),r.Mb("ngForOf",t.webSkills),r.tb(7),r.Mb("ngForOf",t.netSkills),r.tb(7),r.Mb("ngForOf",t.dbSkills))},directives:[i.i,i.h],styles:[""]}),e})();const f=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.wb({type:e,selectors:[["app-resume"]],decls:18,vars:0,consts:[[1,"container-fluid","banner"],[1,"row"],[1,"col-12"],[1,"container"],[1,"row","mt-5"],[1,"col-md-6"],[1,"col-md-12"]],template:function(e,t){1&e&&(r.Fb(0,"div",0),r.Fb(1,"div",1),r.Fb(2,"div",2),r.Fb(3,"h1"),r.Tb(4,"Resume"),r.Eb(),r.Eb(),r.Eb(),r.Eb(),r.Fb(5,"div",3),r.Fb(6,"div",4),r.Fb(7,"div",5),r.Fb(8,"h4"),r.Tb(9,"Education"),r.Eb(),r.Db(10,"app-education"),r.Eb(),r.Fb(11,"div",5),r.Fb(12,"h4"),r.Tb(13,"Expirience"),r.Eb(),r.Db(14,"app-job-expirience"),r.Eb(),r.Eb(),r.Fb(15,"div",4),r.Fb(16,"div",6),r.Db(17,"app-skills"),r.Eb(),r.Eb(),r.Eb())},directives:[b,d,u],styles:[""]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=r.Ab({type:e}),e.\u0275inj=r.zb({factory:function(t){return new(t||e)},imports:[[o.c.forChild(f)],o.c]}),e})(),h=(()=>{class e{}return e.\u0275mod=r.Ab({type:e}),e.\u0275inj=r.zb({factory:function(t){return new(t||e)},imports:[[i.b,v]]}),e})()}}]);