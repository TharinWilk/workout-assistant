(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(t,e,n){"use strict";var o=n(33),r=n(30),l=n.n(r),c=n(441),d=n(248),v=n(218),m=n(103),f=n(442),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("navbar"),t._v(" "),n("v-main",[n("h1",{staticClass:"text-h1 font-weight-bold text-center"},[t._v("\n      404\n    ")]),t._v(" "),n("v-card",{staticClass:"d-flex justify-center",attrs:{elevation:"0"}},[n("v-card-title",[t._v("Oops! Page not found")])],1),t._v(" "),n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0","max-width":"800px"}},[n("v-card-text",{staticClass:"px-10 text-center"},[t._v("\n        The page you were looking for doesn't exist. Please try retyping the address or click the link below to return to the home page.\n      ")])],1),t._v(" "),n("nuxt-link",{staticClass:"d-flex justify-center text-decoration-none",attrs:{to:"/"}},[n("v-btn",[t._v("Back to Home")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:c.a,VBtn:d.a,VCard:v.a,VCardText:m.c,VCardTitle:m.d,VMain:f.a})},295:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{user:null,drawerIsOpen:!1,loginOpen:!1}},computed:{userName:function(){return this.user?this.user:"Guest"}},methods:{logoutUser:function(){this.$store.dispatch("logoutUser")}}},r=n(33),l=n(30),c=n.n(l),d=n(454),v=n(447),m=n(448),f=n(248),k=n(220),_=n(433),h=n(453),x=n(449),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{"hide-on-scroll":"",app:"",flat:"","clipped-left":"",height:"56px"}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawerIsOpen=!t.drawerIsOpen}}}),t._v(" "),n("v-app-bar-title",{staticClass:"d-none d-sm-flex text-no-wrap"},[n("span",{staticClass:"text-no-wrap"},[t._v("Workout Assistant")])]),t._v(" "),n("v-spacer"),t._v(" "),t.user?t._e():n("div",[this.$store.state.username?t._e():n("v-menu",{attrs:{"close-on-content-click":t.loginOpen,"max-width":"400px","nudge-bottom":"46px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{elevation:"0"}},"v-btn",r,!1),o),[t._v("\n            Login\n          ")])]}}],null,!1,3090531725)},[t._v(" "),n("v-list",[n("login-popup")],1)],1),t._v(" "),this.$store.state.username?t._e():n("v-menu",{attrs:{"close-on-content-click":t.loginOpen,"max-width":"400px","nudge-bottom":"46px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{elevation:"0"}},"v-btn",r,!1),o),[t._v("\n            Sign-Up\n          ")])]}}],null,!1,2141944501)},[t._v(" "),n("v-list",[n("sign-up-popup")],1)],1)],1),t._v(" "),this.$store.state.username?n("div",{staticClass:"pr-4"},[n("span",[t._v("Welcome "+t._s(this.$store.state.username))])]):t._e(),t._v(" "),this.$store.state.username?n("v-btn",{on:{click:t.logoutUser}},[t._v("\n      Logout\n    ")]):t._e()],1),t._v(" "),n("v-navigation-drawer",{staticClass:"mt14",attrs:{clipped:"",app:"","hide-overlay":""},model:{value:t.drawerIsOpen,callback:function(e){t.drawerIsOpen=e},expression:"drawerIsOpen"}},[n("navigation-drawer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{LoginPopup:n(426).default,SignUpPopup:n(427).default,NavigationDrawer:n(428).default}),c()(component,{VAppBar:d.a,VAppBarNavIcon:v.a,VAppBarTitle:m.a,VBtn:f.a,VList:k.a,VMenu:_.a,VNavigationDrawer:h.a,VSpacer:x.a})},296:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{links:[{icon:"mdi-home",text:"Home",route:"/"},{icon:"mdi-weight-lifter",text:"Generate Workout",route:"/generate-workout"},{icon:"mdi-dumbbell",text:"Exercise Guide",route:"/exercise-guide"}]}}},r=n(33),l=n(30),c=n.n(l),d=n(248),v=n(443),m=n(450),f=n(219),k=n(446),_=n(451),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"grey lighten-3",attrs:{padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(link){return n("v-tooltip",{key:link.text,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"grey lighten-3 ma-2",attrs:{fab:"",elevation:"0",router:"",to:link.route}},o),[n("v-icon",[t._v(t._s(link.icon))])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(link.text))])])})),t._v(" "),n("v-col",{staticClass:"py-4 text-center",attrs:{cols:"12"}},[t._v("\n      "+t._s((new Date).getFullYear())+"\n    ")])],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:v.a,VFooter:m.a,VIcon:f.a,VRow:k.a,VTooltip:_.a})},302:function(t,e,n){"use strict";var o=n(33),r=n(30),l=n.n(r),c=n(441),d=n(442),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("main-navbar"),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("footer-component")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{MainNavbar:n(295).default,FooterComponent:n(296).default}),l()(component,{VApp:c.a,VMain:d.a})},303:function(t,e,n){"use strict";var o=n(33),r=n(30),l=n.n(r),c=n(441),d=n(442),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("main-navbar"),t._v(" "),n("exercise-nav"),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("footer-component")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{MainNavbar:n(295).default,ExerciseNav:n(429).default,FooterComponent:n(296).default}),l()(component,{VApp:c.a,VMain:d.a})},309:function(t,e,n){n(310),t.exports=n(311)},425:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"actions",(function(){return l})),n.d(e,"getters",(function(){return c}));n(31),n(46),n(153),n(4),n(9);var o=function(){return{exercise:null,favorites:[2],additionalFilters:["Upper Body","Lower Body","Core","Push","Pull","Calithetics","Treadmill","Stationary Bike","Bike","Dumbbells","Barbells","Kettlebells","Weight Machines","Cable Machine","Full Rack","Half Rack","Agility Ladder","Stability Ball","Pool","Eliptical","Arc Trainer","Stair Machine","Ladder Machine","Rowing Machine","Arm Cycle"],workoutFilters:{type:null,fitness:null,intensity:null,goal:null},workout:{active:!1,agility:null,balance:null,cardio:null,mobility:null,power:null,resistance:null},savedWorkouts:[],username:null}},r={addWorkout:function(t,e){t.savedWorkouts.push(e)},changeExercise:function(t,e){t.exercise=e},changefavorites:function(t,e){t.favorites=e},changeWorkoutTypes:function(t,e){t.workoutFilters.type=e},changeWorkoutFitnessLevel:function(t,e){t.workoutFilters.fitness=e},changeWorkoutIntensity:function(t,e){t.workoutFilters.intensity=e},changeWorkoutGoal:function(t,e){t.workoutFilters.goal=e},changeWorkoutAdditionalFilters:function(t,e){if(t.additionalFilters.includes(e)){var n=t.additionalFilters.indexOf(e);n>-1&&t.additionalFilters.splice(n,1)}else t.additionalFilters.push(e)},changeWorkoutPlan:function(t,e){t.workout.active=!0,e.forEach((function(n){n.tags.includes("Agility")&&(t.workout.agility=e),n.tags.includes("Balance")&&(t.workout.balance=e),n.tags.includes("Cardio")&&(t.workout.cardio=e),n.tags.includes("Mobility")&&(t.workout.mobility=e),(n.tags.includes("Resistance")||n.tags.includes("Power"))&&(t.workout.resistance=e)}))},changeUser:function(t,e){t.username=e},logout:function(t){t.username=null},resetWorkoutPlan:function(t){t.workout.active=!1,t.workout.agility=null,t.workout.balance=null,t.workout.cardio=null,t.workout.mobility=null,t.workout.power=null,t.workout.resistance=null}},l={addNewWorkout:function(t,e){t.commit("addWorkout",e)},changeUsername:function(t,e){t.commit("changeUser",e)},logoutUser:function(t){t.commit("logout")},selectedExercise:function(t,e){t.commit("changeExercise",e)},selectedWorkoutTypes:function(t,e){t.commit("changeWorkoutTypes",e)},selectedWorkoutFitnessLevel:function(t,e){t.commit("changeWorkoutFitnessLevel",e)},selectedWorkoutIntensity:function(t,e){t.commit("changeWorkoutIntensity",e)},selectedWorkoutGoal:function(t,e){t.commit("changeWorkoutGoal",e)},selectedWorkoutAdditionalFilters:function(t,e){t.commit("changeWorkoutAdditionalFilters",e)},clearWorkout:function(t){t.commit("resetWorkoutPlan")},updateFavorites:function(t,e){t.commit("changefavorites",e)},updateWorkoutPlan:function(t,e){t.commit("changeWorkoutPlan",e)}},c={activeWorkout:function(t){return t.workout.active},additionalFilters:function(t){return t.additionalFilters},agility:function(t){return t.workout.agility},balance:function(t){return t.workout.balance},cardio:function(t){return t.workout.cardio},favorites:function(t){return t.favorites},intensity:function(t){return t.workoutFilters.intensity},mobility:function(t){return t.workout.mobility},power:function(t){return t.workout.power},resistance:function(t){return t.workout.resistance},savedWorkouts:function(t){return t.savedWorkouts}}},426:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{email:"",password:""}},methods:{changeUsername:function(){this.$store.dispatch("changeUsername",this.email)}}},r=n(33),l=n(30),c=n.n(l),d=n(248),v=n(218),m=n(443),f=n(444),k=n(445),_=n(446),h=n(434),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-form",[n("v-card",{attrs:{"min-width":"320px",flat:""}},[n("v-row",[n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-text-field",{attrs:{placeholder:"E-mail",autofocus:"",dense:"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-text-field",{attrs:{placeholder:"Password",dense:"",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),n("v-row",{attrs:{justify:"space-around",align:"center","align-content":"center"}},[n("v-btn",{attrs:{small:""},on:{click:t.changeUsername}},[t._v("\n          Submit\n        ")]),t._v(" "),n("a",{staticClass:"text-decoration-none",attrs:{href:"#"}},[t._v("Forgot Password")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:m.a,VContainer:f.a,VForm:k.a,VRow:_.a,VTextField:h.a})},427:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{firstName:"",lastName:"",email:"",password:""}},methods:{changeUsername:function(){this.$store.dispatch("changeUsername",this.email)}}},r=n(33),l=n(30),c=n.n(l),d=n(248),v=n(218),m=n(443),f=n(444),k=n(445),_=n(446),h=n(434),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-form",[n("v-card",{attrs:{"min-width":"320px",flat:""}},[n("v-row",[n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"First name",autofocus:"",dense:"",required:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),t._v(" "),n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Last name",dense:"",required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),t._v(" "),n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"E-mail",dense:"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Passowrd",dense:"",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),n("v-row",{attrs:{justify:"space-around",align:"center","align-content":"center"}},[n("v-btn",{attrs:{small:""},on:{click:t.changeUsername}},[t._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCol:m.a,VContainer:f.a,VForm:k.a,VRow:_.a,VTextField:h.a})},428:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{accountLinks:[{icon:"mdi-home",text:"Home",route:"/"},{icon:"mdi-view-dashboard",text:"My Workouts",route:"/account-pages/my-workouts"},{icon:"mdi-heart",text:"Favorited Exercises",route:"/account-pages/favorited-exercises"}],pageLinks:[{icon:"mdi-weight-lifter",text:"Generate Workout",route:"/generate-workout"},{icon:"mdi-dumbbell",text:"Exercise Guide",route:"/exercise-guide"}]}},computed:{userName:function(){return this.$store.state.username?this.$store.state.username:"Guest"}}},r=n(33),l=n(30),c=n.n(l),d=n(219),v=n(220),m=n(221),f=n(147),k=n(222),_=n(57),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[n("v-list-group",{attrs:{value:!0,"prepend-icon":"mdi-account-circle"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",{attrs:{"v-model":t.userName}},[t._v("\n        "+t._s(t.userName)+"\n      ")])]},proxy:!0}])},[t._v(" "),t._l(t.accountLinks,(function(link){return n("v-list-item",{key:link.route,attrs:{router:"",to:link.route}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(link.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n          "+t._s(link.text)+"\n        ")])],1)],1)}))],2),t._v(" "),t._l(t.pageLinks,(function(link){return n("v-list-item",{key:link.route,attrs:{router:"",to:link.route}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(link.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(link.text))])],1)],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a,VList:v.a,VListGroup:m.a,VListItem:f.a,VListItemAction:k.a,VListItemContent:_.a,VListItemTitle:_.c})},429:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{categories:[{name:"Cardio",route:"/exercise-guide/cardio-exercises"},{name:"Resistance",route:"/exercise-guide/resistance-exercises"},{name:"Mobility",route:"/exercise-guide/mobility-exercises"},{name:"Agility",route:"/exercise-guide/agility-exercises"},{name:"Balance",route:"/exercise-guide/balance-exercises"},{name:"Power",route:"/exercise-guide/power-exercises"}]}}},r=n(33),l=n(30),c=n.n(l),d=n(248),v=n(220),m=n(147),f=n(57),k=n(61),_=n(452),h=n(455),x=n(78),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-toolbar",{staticClass:"mt-13 d-flex justify-center",attrs:{dense:""}},[n("v-sheet",{staticClass:"d-block d-sm-none",attrs:{"max-width":"100vw"}},[n("v-slide-group",{attrs:{"show-arrows":""}},t._l(t.categories,(function(link){return n("v-slide-item",{key:link.route},[n("v-btn",{attrs:{text:"",router:"",to:link.route}},[t._v("\n            "+t._s(link.name)+"\n          ")])],1)})),1)],1),t._v(" "),n("v-list",{staticClass:"d-none d-sm-flex pa-0",attrs:{"min-height":"48px"}},t._l(t.categories,(function(link){return n("v-list-item",{key:link.route,attrs:{router:"",to:link.route}},[n("v-list-item-title",[t._v("\n          "+t._s(link.name)+"\n        ")])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VList:v.a,VListItem:m.a,VListItemTitle:f.c,VSheet:k.a,VSlideGroup:_.a,VSlideItem:h.a,VToolbar:x.a})}},[[309,31,4,32]]]);