(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ee7e12e"],{6093:function(t,e,a){},"60ac":function(t,e,a){"use strict";var i=a("6093"),l=a.n(i);l.a},"9cca":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card"},[a("el-col",{attrs:{span:24}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"流水号"}},[a("el-input",{attrs:{clearable:"",placeholder:"根据流水号查询"},model:{value:t.formInline.value1,callback:function(e){t.$set(t.formInline,"value1",e)},expression:"formInline.value1"}})],1),a("el-form-item",{attrs:{label:"设备编号"}},[a("el-input",{attrs:{clearable:"",placeholder:"根据设备编号查询"},model:{value:t.formInline.value2,callback:function(e){t.$set(t.formInline,"value2",e)},expression:"formInline.value2"}})],1),a("el-form-item",{attrs:{label:"日期选择"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.formInline.value3,callback:function(e){t.$set(t.formInline,"value3",e)},expression:"formInline.value3"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.openVisible5}},[t._v("下载对账单")])],1)],1)],1),a("el-col",{staticStyle:{"margin-top":"10px"},attrs:{span:24}},[a("el-table",{attrs:{data:t.tableData,border:"",onselectstart:"return false"}},[a("el-table-column",{attrs:{width:"200",prop:"BusinessNo",label:"流水号",align:"center"}}),a("el-table-column",{attrs:{width:"130",prop:"BusinessNo",label:"设备编号",align:"center"}}),a("el-table-column",{attrs:{width:"200",prop:"BusinessNo",label:"照片类型",align:"center"}}),a("el-table-column",{attrs:{width:"130",prop:"BusinessNo",label:"订单金额",align:"center"}}),a("el-table-column",{attrs:{width:"80",label:"缴费状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("i",{class:"已缴费"===t.row.phoneCost?"el-icon-success":"el-icon-error"})]}}])}),a("el-table-column",{attrs:{prop:"ExamineTime",label:"订单日期",align:"center"}})],1),a("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"",layout:"prev, pager, next ,sizes",total:200},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)],1),a("el-dialog",{attrs:{title:"移入黑名单",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",[t._v("姓名："+t._s(t.SeeClickData.name))]),a("div",[t._v("证件类型："+t._s(t.SeeClickData.type))]),a("div",[t._v("证件号码："+t._s(t.SeeClickData.idcard))]),a("el-form",[a("el-form-item",{attrs:{label:"拉黑原因:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 认")])],1)],1),a("el-dialog",{attrs:{width:"40%",title:"下载筛选",visible:t.dialogVisible5},on:{"update:visible":function(e){t.dialogVisible5=e}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"日期选择"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.downLoad.value,callback:function(e){t.$set(t.downLoad,"value",e)},expression:"downLoad.value"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible5=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible5=!1}}},[t._v("下 载")])],1)],1),a("el-dialog",{attrs:{title:"体检详情",visible:t.dialogVisible2,center:"",fullscreen:!0},on:{"update:visible":function(e){t.dialogVisible2=e}}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{staticClass:"boxTopTitle"},[t._v("人员信息")]),a("ul",{staticClass:"topBoxs"},[a("li",{staticClass:"boxss",on:{click:t.openVisible3}},[a("div",[a("img",{attrs:{src:t.SeeClickData.ExamineIMG,alt:"图片加载失败"}})]),a("p",{staticClass:"demonstrations"},[t._v("体检拍照")])]),a("li",{staticClass:"boxss",on:{click:t.openVisible3}},[a("div",[a("img",{attrs:{src:t.SeeClickData.IDCardIMG,alt:"图片加载失败"}})]),a("p",{staticClass:"demonstrations"},[t._v("身份证照片")])])]),a("div",{staticClass:"textItem"}),a("div",{staticClass:"textItem"},[a("div",[t._v("办理业务类型：")]),a("div",[t._v(t._s(t.SeeClickData.BusinessType))])]),a("div",{staticClass:"textItem"},[a("div",[t._v("流水号：")]),a("div",[t._v(t._s(t.SeeClickData.BusinessNo))])]),a("div",{staticClass:"textItem"},[a("div",[t._v("车型：")]),a("div",{staticClass:"textCar"},[t._v(t._s(t.SeeClickData.CarType))])]),a("div",{staticClass:"textItem"},[a("div",[t._v("姓名：")]),a("div",[t._v(t._s(t.SeeClickData.IDCardName))])]),a("div",{staticClass:"textItem"},[a("div",[t._v("性别：")]),a("div",[t._v(t._s(t.SeeClickData.IDCardSex))])]),a("div",{staticClass:"textItem"},[a("div",[t._v("证件类型：")]),a("div",[t._v(t._s(t.SeeClickData.CardType))])]),a("div",{staticClass:"textItem"},[a("div",[t._v("证件号码：")]),a("div",[t._v(t._s(t.SeeClickData.IDCardNo))])]),a("div",{staticClass:"textItem"},[a("div",[t._v("联系地址：")]),a("div",[t._v(t._s(t.SeeClickData.IDCardAddress))])]),a("div",{staticClass:"textItem"},[a("div",[t._v("联系电话：")]),t.SeeClickData.PhoneNo&&"1"!=t.ROLEID?a("div",[t._v(t._s(t._f("msgPhone")(t.SeeClickData.PhoneNo)))]):t._e(),t.SeeClickData.PhoneNo&&"1"==t.ROLEID?a("div",[t._v(t._s(t.SeeClickData.PhoneNo))]):t._e()]),a("div",{class:"审核通过"==t.SeeClickData.carState?"textBot":"textBot1"},[t._v(t._s(t.SeeClickData.carState))])])],1),a("el-col",{attrs:{span:16}},[a("el-card",[a("div",{staticClass:"boxTopTitle"},[t._v("体检项目")]),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("p",{staticClass:"pictureText"},[t._v("躯干和颈部")]),a("div",{staticClass:"picture",on:{click:function(e){return t.openVisible4(0)}}},[a("img",{attrs:{src:t.SeeClickData.QGIMG,alt:"图片加载失败"}})])]),a("el-col",{attrs:{span:6}},[a("p",{staticClass:"pictureText"},[t._v("视力左")]),a("div",{staticClass:"picture",on:{click:function(e){return t.openVisible4(1)}}},[a("img",{attrs:{src:t.SeeClickData.SLZIMG,alt:"图片加载失败"}})])]),a("el-col",{attrs:{span:6}},[a("p",{staticClass:"pictureText"},[t._v("视力右")]),a("div",{staticClass:"picture",on:{click:function(e){return t.openVisible4(2)}}},[a("img",{attrs:{src:t.SeeClickData.SLYIMG,alt:"图片加载失败"}})])]),a("el-col",{attrs:{span:6}},[a("p",{staticClass:"pictureText"},[t._v("辨色力")]),a("div",{staticClass:"picture",on:{click:function(e){return t.openVisible4(3)}}},[a("img",{attrs:{src:t.SeeClickData.BSLIMG,alt:"图片加载失败"}})])])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("p",{staticClass:"pictureText"},[t._v("听力")]),a("div",{staticClass:"picture",on:{click:function(e){return t.openVisible4(4)}}},[a("img",{attrs:{src:t.SeeClickData.TLIMG,alt:"图片加载失败"}})])]),a("el-col",{attrs:{span:6}},[a("p",{staticClass:"pictureText"},[t._v("上肢（左）")]),a("div",{staticClass:"picture",on:{click:function(e){return t.openVisible4(8)}}},[a("img",{attrs:{src:t.SeeClickData.SZZIMG,alt:"图片加载失败"}})])]),a("el-col",{attrs:{span:6}},[a("p",{staticClass:"pictureText"},[t._v("上肢（右）")]),a("div",{staticClass:"picture",on:{click:function(e){return t.openVisible4(9)}}},[a("img",{attrs:{src:t.SeeClickData.SZYIMG,alt:"图片加载失败"}})])]),a("el-col",{attrs:{span:6}},[a("p",{staticClass:"pictureText"},[t._v("身高")]),a("div",{staticClass:"picture",on:{click:function(e){return t.openVisible4(6)}}},[a("img",{attrs:{src:t.SeeClickData.SGIMG,alt:"图片加载失败"}})])])],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("p",{staticClass:"pictureText"},[t._v("腿部")]),a("div",{staticClass:"picture",on:{click:function(e){return t.openVisible4(7)}}},[a("img",{attrs:{src:t.SeeClickData.XZIMG,alt:"图片加载失败"}})])])],1)],1)],1)],1),a("el-dialog",{attrs:{width:"30%",title:"照片详情",visible:t.dialogVisible3,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisible3=e}}},[a("el-carousel",{attrs:{"indicator-position":"none",autoplay:!1}},[a("el-carousel-item",[a("img",{staticClass:"openImage2",attrs:{src:t.SeeClickData.tjPhoto,alt:"图片加载失败",title:"体检拍照"}})]),a("el-carousel-item",[a("img",{staticClass:"openImage2",attrs:{src:t.SeeClickData.idPhoto,alt:"图片加载失败",title:"身份证照片"}})])],1)],1),a("el-dialog",{attrs:{title:"照片详情",visible:t.dialogVisible4,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisible4=e}}},[a("el-carousel",{attrs:{"indicator-position":"none",autoplay:!1}},[a("el-carousel-item",[a("img",{staticClass:"openImage",attrs:{src:t.SeeClickData.QGIMG,alt:"图片加载失败",title:"颈部"}})]),a("el-carousel-item",[a("img",{staticClass:"openImage",attrs:{src:t.SeeClickData.SLZIMG,alt:"图片加载失败",title:"视力左"}})]),a("el-carousel-item",[a("img",{staticClass:"openImage",attrs:{src:t.SeeClickData.SLYIMG,alt:"图片加载失败",title:"视力右"}})]),a("el-carousel-item",[a("img",{staticClass:"openImage",attrs:{src:t.SeeClickData.BSLIMG,alt:"图片加载失败",title:"辨色力"}})]),a("el-carousel-item",[a("img",{staticClass:"openImage",attrs:{src:t.SeeClickData.TLIMG,alt:"图片加载失败",title:"听力"}})]),a("el-carousel-item",[a("img",{staticClass:"openImage",attrs:{src:t.SeeClickData.SZZIMG,alt:"图片加载失败",title:"上肢左"}})]),a("el-carousel-item",[a("img",{staticClass:"openImage",attrs:{src:t.SeeClickData.SZYIMG,alt:"图片加载失败",title:"上肢右"}})]),a("el-carousel-item",[a("img",{staticClass:"openImage",attrs:{src:t.SeeClickData.SGIMG,alt:"图片加载失败",title:"身高"}})]),a("el-carousel-item",[a("img",{staticClass:"openImage",attrs:{src:t.SeeClickData.XZIMG,alt:"图片加载失败",title:"腿部"}})])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible2=!1}}},[t._v("确 认")])],1)],1)],1)},l=[],s=(a("bc3a"),{data:function(){return{ROLEID:"",SeeClickData:"",reason:"",formInline:{value1:"",value2:"",value3:""},downLoad:{value:""},dialogVisible:!1,dialogVisible2:!1,dialogVisible3:!1,dialogVisible4:!1,dialogVisible5:!1,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]}}},methods:{openVisible:function(t,e){this.SeeClickData=e,this.dialogVisible=!0},openVisible2:function(t,e){this.SeeClickData=e,this.dialogVisible2=!0},openVisible3:function(t,e){this.dialogVisible3=!0},openVisible4:function(t){this.dialogVisible4=!0,this.bannerIndex=t},openVisible5:function(){this.dialogVisible5=!0},SeeClick:function(t,e){this.SeeClickData=e,console.log(this.SeeClickData)},printContent:function(){this.$print(this.$refs.print)},handleSelectionChange:function(t){this.multipleSelection=t,console.log(this.multipleSelection)},onSubmit:function(){console.log("submit!")},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},exportExcel:function(){var t=this;Promise.resolve().then(function(){var e=a("39a0"),i=e.export_json_to_excel,l=["设备编号","审核通过","审核失败","总数"],s=["Machine","Completed","NotCompleted","Total"],o=t.chartData.rows,n=t.formatJson(s,o);i(l,n,"体检人数统计")}.bind(null,a)).catch(a.oe)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}},mounted:function(){this.ROLEID=sessionStorage.getItem("ROLEID")},watch:{formInline:{handler:function(t,e){console.log(t),console.log(e)},deep:!0}}}),o=s,n=(a("60ac"),a("2877")),c=Object(n["a"])(o,i,l,!1,null,"4eb79d25",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-1ee7e12e.f9c4c965.js.map