/****************************************************/
window.vagonsList = [];
//var urlAjax = "http://" + window.location.host + "/vagper-1/";
//var urlImg  = "http://" + window.location.host + "/vagper-1/img/";
var urlAjax = "http://" + window.location.host + "/";
var urlImg  = "http://" + window.location.host + "/img/";
/****************************************************/
function addNewInvoiceF(){
   var mod_cont = document.getElementById("contentForm");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("modalForm");
   var textAlert = "<span class='close_modal_window' onclick='closeModalForm()'>×</span>";
   textAlert = textAlert + "<table align='center' cellpadding='0' cellspacing='0' class='tbl_form'>";
   textAlert = textAlert + "<tr><td colspan='2' class='day_td33'>Новый счет на оплату</td></tr>";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class='day_td3f'>Наименование</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"fullName\" name=\"fullName\" value=\"\" style=\"inline-size:120px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td class='day_td3f'>Телефон</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"phoneNumber\" name=\"phoneNumber\" value=\"\" style=\"inline-size:70px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td class='day_td3f'>Email</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"email\" name=\"email\" value=\"\" style=\"inline-size:70px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td class='day_td3f'>Сервис</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"serviceName\" name=\"serviceName\" value=\"\" style=\"inline-size:80px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td class='day_td3f'>Сумма</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"totalSum\" name=\"totalSum\" value=\"\" style=\"inline-size:50px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td class='day_td3f'>Срок действия</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"validityPeriod\" name=\"validityPeriod\" value=\"\" style=\"inline-size:50px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\" style=\"padding-block-start:20px;\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"submitAddNewInvoiceF()\">Сохранить</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeModalForm()\">Отмена</span>";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block";
}
/****************************************************/
function submitAddNewInvoiceF(){

    var newInvoice = [];
	newInvoice[0] = document.getElementById('fullName').value;
	newInvoice[1] = document.getElementById('phoneNumber').value;
	newInvoice[2] = document.getElementById('email').value;
	newInvoice[3] = document.getElementById('serviceName').value;
	newInvoice[4] = document.getElementById('totalSum').value;
	newInvoice[5] = document.getElementById('validityPeriod').value;
   //---------------------------------------
   var urlA = new URL(urlAjax + "save-new-invoice");  	   
   var urlRedir = new URL(urlAjax + "main");  	   
   //---------------------------------------
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { new_invoice:newInvoice },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
        closeModalForm();
		//alert( response["status"] );
        window.location.replace(urlRedir);		
	 }
   });
}
/****************************************************/
function closeModalForm(){
   var mod_cont = document.getElementById("contentForm");
   var modal = document.getElementById("modalForm");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
}
/****************************************************/















function addVag(vagTmp) {
   var nVag = "";	
   var npp = getNewNpp();
   if ( vagTmp === "0" ){
      nVag = document.getElementById("vagon").value;	
   } else {
      nVag = vagTmp;	
   }
   var dblVag = notDoubleVagon(nVag);
   if ( dblVag !== "" ){
	   showAlert( dblVag, "" );
   } else {
	   var nVagHtml = "";
	   var table = document.getElementById("add_vag_tbl");
	   let vagon_obj = {}; 
	   //---------------------------------------
       var urlA = new URL(urlAjax + "add_vag");  	   
       var urlI = new URL(urlImg + "del_vag.jpg");  	   
	   //---------------------------------------
	   $.ajax({
		 url: urlA,
		 type: 'post',
		 data: { num_vag:nVag },
		 dataType: 'json',
		 success:function(response){
            if ( response["rod"] === "" ){
				showAlert( "Неверный номер вагона!", "" );
			} else {
				//-----------------------------------       
                if ( document.getElementById("add_vag_tbl").style.display == "none" ){
			        document.getElementById("add_vag_tbl").style.display = "block";
				}				
				var imageDell = new Image(12,12);
                imageDell.src = urlI;   
				//-----------------------------------       
                var row = table.insertRow(-1); // We are adding at the end
                var c1 = row.insertCell(0);
                var c2 = row.insertCell(1);
                var c3 = row.insertCell(2);
                var c4 = row.insertCell(3);
                var c5 = row.insertCell(4);
                //var c6 = row.insertCell(5);
                var c7 = row.insertCell(5);
                c7.id = "c"+nVag;
                row.id = "r"+nVag;
                c1.innerText = nVag;
                c2.innerText = response["uch_rod_capt"];
                c3.innerText = response["tip"];
                c4.innerText = response["osn"];
                c5.innerText = response["sob"];
                //c6.innerText = npp;
                var box = document.getElementById("c"+nVag);
				box.innerHTML = "<a href=\"javascript:void(0)\" onclick=\"dellVag('"+nVag+"')\"><img src=\""+urlI+"\" width=\"12\" border=\"0\"></a>";
				//-----------------------------------         
				vagon_obj.numVag = nVag;
				vagon_obj.rod = response["rod"];
				vagon_obj.uch_rod = response["uch_rod"];
				vagon_obj.tip = response["tip"];
				vagon_obj.sob = response["sob"];
				vagon_obj.prz_sob = response["prz_sob"];
				vagon_obj.osn = response["osn"];
				vagon_obj.npp = npp;
				window.vagonsList.push(vagon_obj);
				//-----------------------------------         
				document.getElementById('vagon').value = "";
				document.getElementById('vagon').focus();
				document.getElementById('vagon').select();
			}
		 },
		 error:function(){
            if ( vagTmp === "" ){
				showAlert( "Номер вагона не может быть пустым!", "" );
			} else {			 
				showAlert( "Ошибка!", "" );
			}
		 }
	   });
	   //---------------------------------------
   }
}
/****************************************************/
function addVagUpd(arrVags) {
    //alert( JSON.stringify(arrVags) );
    var divGroupVags = document.getElementById("groupVags");
    var listNumVags = "";
    var nVagHtml = "";
    let vagon_obj = {}; 
    let arrVagDet = [];
	for ( let key in arrVags ){
        arrVagDet = arrVags[key].split('&');
		if ( arrVagDet.length == 8 ){
			//-----------------------------------
			vagon_obj.numVag = arrVagDet[0];
			vagon_obj.rod = arrVagDet[2];
			vagon_obj.uch_rod = arrVagDet[3];
			vagon_obj.tip = arrVagDet[4];
			vagon_obj.sob = arrVagDet[5];
			vagon_obj.prz_sob = arrVagDet[6];
			vagon_obj.osn = arrVagDet[7];
			window.vagonsList.push(vagon_obj);
			vagon_obj = {};
			//-----------------------------------
			nVagHtml = "<span id=\"spn" + arrVagDet[0] + "\" class=\"vags-spn\">" + arrVagDet[0] + "&nbsp;<img src=\"../img/del_vag.jpg\" width=\"15\" border=\"0\" class=\"img-del-vag\" onclick=\"dellVag('" + arrVagDet[0] + "')\"/></span>";		
			listNumVags = listNumVags + nVagHtml;
		}
	}
    //alert( JSON.stringify(window.vagonsList) );
	divGroupVags.innerHTML = listNumVags;
	document.getElementById('vagon').value = "";
	document.getElementById('vagon').focus();
	document.getElementById('vagon').select();
}
/****************************************************/
function addVagUpdForm(vagTmp,listId) {
   var nVag = "";	
   //alert( JSON.stringify(window.vagonsList) );
   var npp = getNewNpp();
   if ( vagTmp === "0" ){
      nVag = document.getElementById("vagon").value;	
   } else {
      nVag = vagTmp;	
   }
   var dblVag = notDoubleVagon(nVag);
   if ( dblVag !== "" ){
	   showAlertUpd( dblVag, "contentListsE", "modalListsE" );
   } else {
	   var nVagHtml = "";
	   var table = document.getElementById("add_vag_tbl");
	   let vagon_obj = {}; 
	   //---------------------------------------
       var urlA = new URL(urlAjax + "add_vag");  	   
       var urlI = new URL(urlImg + "del_vag.jpg");  	   
	   //---------------------------------------
	   $.ajax({
		 url: urlA,
		 type: 'post',
		 data: { num_vag:nVag },
		 dataType: 'json',
		 success:function(response){
            if ( response["rod"] === "" ){
				showAlertUpd( "Неверный номер вагона!", "contentListsE", "modalListsE" );
			} else {
				//-----------------------------------       
                if ( document.getElementById("add_vag_tbl").style.display == "none" ){
			        document.getElementById("add_vag_tbl").style.display = "block";
				}				
				var imageDell = new Image(12,12);
                imageDell.src = urlI;   
				//-----------------------------------       
                var row = table.insertRow(-1); // We are adding at the end
                var c1 = row.insertCell(0);
                c1.setAttribute('class','add-vag-td3');
                c1.setAttribute('style','font-weight:bold;');
                var c2 = row.insertCell(1);
                c2.setAttribute('class','add-vag-td3');
                var c3 = row.insertCell(2);
                c3.setAttribute('class','add-vag-td3');
                var c4 = row.insertCell(3);
                c4.setAttribute('class','add-vag-td3');
                var c5 = row.insertCell(4);
                c5.setAttribute('class','add-vag-td3');
                //var c6 = row.insertCell(5);
                //c6.setAttribute('class','add-vag-td3');
                var c7 = row.insertCell(5);
                row.id = "r"+nVag;
                c7.id = "c"+nVag;
                c1.innerText = nVag;
                c2.innerText = response["uch_rod_capt"];
                c3.innerText = response["tip"];
                c4.innerText = response["osn"];
                c5.innerText = response["sob"];
                //c6.innerText = npp;
                var box = document.getElementById("c"+nVag);
				box.innerHTML = "<a href=\"javascript:void(0)\" onclick=\"dellVagUpd('"+nVag+"')\"><img src=\""+urlI+"\" width=\"12\" border=\"0\"></a>";
				//-----------------------------------         
				vagon_obj.numVag = nVag;
				vagon_obj.rod = response["rod"];
				vagon_obj.uch_rod = response["uch_rod"];
				vagon_obj.tip = response["tip"];
				vagon_obj.sob = response["sob"];
				vagon_obj.prz_sob = response["prz_sob"];
				vagon_obj.osn = response["osn"];
				vagon_obj.npp = npp;
				window.vagonsList.push(vagon_obj);
				//-----------------------------------         
				var hiddTmp = nVag+"&"+response["rod"]+"&"+response["uch_rod"]+"&"+response["tip"]+"&";
				hiddTmp = hiddTmp + response["sob"]+"&"+response["prz_sob"]+"&"+response["osn"]+"&"+npp;
                var newField = document.createElement('input');
                newField.setAttribute('type','hidden');
                newField.setAttribute('name','vags[]');
                newField.setAttribute('id','inp'+nVag);
                newField.setAttribute('value',hiddTmp);
                document.getElementById('list_form_upd').appendChild(newField);
				//-----------------------------------         
				document.getElementById('vagon').value = "";
				document.getElementById('vagon').focus();
				document.getElementById('vagon').select();
			}
		 },
		 error:function(){
            if ( vagTmp === "" ){
				showAlertUpd( "Номер вагона не может быть пустым!", "contentListsE", "modalListsE" );
			} else {			 
				showAlertUpd( "Ошибка!", "contentListsE", "modalListsE" );
			}
		 }
	   });
	   //---------------------------------------
   }
}
/****************************************************/
function saveList(){
    //---------------------------------------
    var urlA1 = new URL(urlAjax + "save_new_list");  	   
    var urlA2 = new URL(urlAjax + "save_upd_list");  	   
    var redirAdminMain = new URL(urlAjax + "admin-main");  	   
    var redirUserMain = new URL(urlAjax + "user-main");  	   
	var stan = document.getElementById('stan').value;
	var action = document.getElementById('action').value;
	var otd = "0";
	var tmpVag = "";
	var ip1 = "";
	var ip2 = "";
	var ip3 = "";
    //---------------------------------------
	if ( action === "save-upd-list" || action === "save-upd-list666" ){// если сохранение изменений переписного листа, то window.vagonsList формируется заново
		var form = document.getElementById("list_form_upd");
		var inputs = form.getElementsByTagName("input");
		let vagon_obj = {}; 
		var vagArr = [];
		var len = 0;
		window.vagonsList = [];
		for( let i = 0, len = inputs.length; i < len; i++ ){
		   if( inputs[i].type === "hidden" && inputs[i].name === "vags[]" ){
			  vagArr = inputs[i].value.split("&"); 
			  vagon_obj = {};
			  vagon_obj.numVag = vagArr[0];
			  vagon_obj.rod = vagArr[1];
			  vagon_obj.uch_rod = vagArr[2];
			  vagon_obj.tip = vagArr[3];
			  vagon_obj.sob = vagArr[4];
			  vagon_obj.prz_sob = vagArr[5];
			  vagon_obj.osn = vagArr[6];
			  vagon_obj.npp = vagArr[7];
			  window.vagonsList.push(vagon_obj);
		   }
		}
	}
    //---------------------------------------
	var newVags = [];
	for ( let key in window.vagonsList ){
		tmpVag = "";
		tmpVag = tmpVag+window.vagonsList[key].numVag+"&"+window.vagonsList[key].rod+"&"+window.vagonsList[key].tip+"&"+window.vagonsList[key].osn+"&"; 
		tmpVag = tmpVag+window.vagonsList[key].uch_rod+"&"+window.vagonsList[key].sob+"&"+window.vagonsList[key].prz_sob+"&"+window.vagonsList[key].npp; 
		newVags[key] = tmpVag;
	}
	//-------------------------------------
	if ( parseInt(stan) >= 718000 ){ otd = "1"; }
	if ( String(document.getElementById('vpoezd').value) === "1" ){
		ip1 = String(document.getElementById('ind_poezd1').value);
		ip2 = String(document.getElementById('ind_poezd2').value);
		ip3 = String(document.getElementById('ind_poezd3').value);
	}
	var newList = [];
	newList[0] = "59";
	newList[1] = "70";
	newList[2] = otd;
	newList[3] = String(stan);
	newList[4] = String(document.getElementById('spisok').value);
	newList[5] = String(document.getElementById('vpoezd').value);
	newList[6] = String(document.getElementById('mesto').value);
	newList[7] = String(document.getElementById('datper').value);
	newList[8] = String(document.getElementById('list_id').value);
	newList[9]  = ip1;
	newList[10] = ip2;
	newList[11] = ip3;
	//-------------------------------------
	if ( action === "save-new-list" ){
		$.ajax({
		  url: urlA1,
		  type: 'post',
		  data: { arrList:newList, arrVags:newVags },
		  dataType: 'json',
		  success:function(response){
			 if ( response["status"] === "ok" ){ 
				showAlert( "Переписной лист успешно сохранен...", redirAdminMain );
			 }
		  },
		  error:function(){ 
			showAlert( "Ошибка!", "" );
		  }
		});
	}
	//-------------------------------------
	if ( action === "save-new-list666" ){
		$.ajax({
		  url: urlA1,
		  type: 'post',
		  data: { arrList:newList, arrVags:newVags },
		  dataType: 'json',
		  success:function(response){
			 if ( response["status"] === "ok" ){ 
				showAlert( "Переписной лист успешно сохранен...", redirUserMain );
			 }
		  },
		  error:function(){ 
			showAlert( "Ошибка!", "" );
		  }
		});
	}
	//-------------------------------------
	if ( action === "save-new-stan-list" ){
		$.ajax({
		  url: urlA1,
		  type: 'post',
		  data: { arrList:newList, arrVags:newVags },
		  dataType: 'json',
		  success:function(response){
			 if ( response["status"] === "ok" ){ 
				showAlert( "Переписной лист успешно сохранен...", redirUserMain );
			 }
		  },
		  error:function(){ 
			showAlert( "Ошибка!", "" );
		  }
		});
	}
	//-------------------------------------
	if ( action === "save-upd-list" ){
		$.ajax({
		  url: urlA2,
		  type: 'post',
		  data: { arrList:newList, arrVags:newVags },
		  dataType: 'json',
		  success:function(response){
			 if ( response["status"] === "ok" ){ 
				showAlert3( "Переписной лист успешно сохранен...", stan );
			 }
		  },
		  error:function(){ 
			showAlert( "Ошибка!", "" );
		  }
		});
	}
	//-------------------------------------
	if ( action === "save-upd-list666" ){
		$.ajax({
		  url: urlA2,
		  type: 'post',
		  data: { arrList:newList, arrVags:newVags },
		  dataType: 'json',
		  async:false,
		  success:function(response){
			 if ( response["status"] === "ok" ){ 
				showAlert( "Переписной лист успешно сохранен...", redirUserMain );
			 }
		  },
		  error:function(){ 
			showAlert( "Ошибка!", "" );
		  }
		});
	}
	//-------------------------------------
}
/****************************************************/
function dellList(idList){
    closeAlertD();
    //---------------------------------------
    var urlA = new URL(urlAjax + "delete_list");  	   
    var urlRedir = new URL(urlAjax + "admin-main");  	   
    //---------------------------------------
	$.ajax({
	  url: urlA,
	  type: 'post',
	  data: { idList:idList },
	  dataType: 'json',
	  success:function(response){
		 if ( response["status"] === "ok" ){ 
			showAlert( "Переписной лист был удален...", urlRedir );
		 }
	  },
	  error:function(){ 
		showAlert( "Ошибка!", "" );
	  }
	});
}
/****************************************************/
function dellArhiv(idArhiv){
    closeAlertD2();
    var urlA = new URL(urlAjax + "delete_arhiv");  	   
	$.ajax({
	  url: urlA,
	  type: 'post',
	  data: { idArhiv:idArhiv },
	  dataType: 'json',
	  success:function(response){
		 if ( response["status"] === "ok" ){ 
			showAlertArh( "Архив переписи был удален...");
		 }
	  },
	  error:function(){ 
		showAlert( "Ошибка!", "" );
	  }
	});
}
/****************************************************/
function dellList2(idList,kodStan){
    closeAlertD2();
    var urlA = new URL(urlAjax + "delete_list");  	   
	$.ajax({
	  url: urlA,
	  type: 'post',
	  data: { idList:idList },
	  dataType: 'json',
	  success:function(response){
		 if ( response["status"] === "ok" ){ 
			showAlertDl( "Переписной лист был удален...",kodStan);
		 }
	  },
	  error:function(){ 
		showAlert( "Ошибка!", "" );
	  }
	});
}
/****************************************************/
function dellUser(idUser){
    closeAlertD();
    //---------------------------------------
    var urlA = new URL(urlAjax + "delete_user");  	   
    var urlRedir = new URL(urlAjax + "admin-main/vagper-users");  	   
    //---------------------------------------
	$.ajax({
	  url: urlA,
	  type: 'post',
	  data: { idUser:idUser },
	  dataType: 'json',
	  success:function(response){
		 if ( response["status"] === "ok" ){ 
			showAlert( "Пользователь был удален...", urlRedir );
		 }
	  },
	  error:function(){ 
		showAlert( "Ошибка!", "" );
	  }
	});
}
/****************************************************/
function dellStanList(idList){
    closeAlertD();
    //---------------------------------------
    var urlA = new URL(urlAjax + "delete_list");  	   
    var urlRedir = new URL(urlAjax + "user-main");  	   
    //---------------------------------------
	$.ajax({
	  url: urlA,
	  type: 'post',
	  data: { idList:idList },
	  dataType: 'json',
	  success:function(response){
		 if ( response["status"] === "ok" ){ 
			showAlert( "Переписной лист был удален...", urlRedir );
		 }
	  },
	  error:function(){ 
		showAlert( "Ошибка!", "" );
	  }
	});
}
/****************************************************/
function dellVag(nVag) {
    var vagSpan = document.getElementById("r"+nVag);
    vagSpan.parentNode.removeChild(vagSpan);	
    var tmpVag = "";	
    for ( let key in window.vagonsList ){
	   tmpVag = window.vagonsList[key].numVag;
       if ( nVag === tmpVag ){
	      window.vagonsList.splice(key, 1);
	   }
	}
	resetNpp();
	//------------------------
	if ( window.vagonsList.length == 0 ){
		document.getElementById("add_vag_tbl").style.display = "none";
	}
	//------------------------
	//alert( JSON.stringify(window.vagonsList) );
}
/****************************************************/
function dellVagUpd(nVag) {
    var form = document.getElementById("list_form_upd");
    var inputs = form.getElementsByTagName("input");
    let vagon_obj = {}; 
    var vagArr = [];
	var len = 0;
    //--------------------          
    var vagSpan = document.getElementById("r"+nVag);
    vagSpan.parentNode.removeChild(vagSpan);	
    //--------------------          
    window.vagonsList = [];
    for( let i = 0, len = inputs.length; i < len; i++ ){
       if( inputs[i].type === "hidden" && inputs[i].name === "vags[]" ){
		  vagArr = inputs[i].value.split("&"); 
		  if ( nVag !== vagArr[0] ){
			  vagon_obj = {};
			  vagon_obj.numVag = vagArr[0];
			  vagon_obj.rod = vagArr[1];
			  vagon_obj.uch_rod = vagArr[2];
			  vagon_obj.tip = vagArr[3];
			  vagon_obj.sob = vagArr[4];
			  vagon_obj.prz_sob = vagArr[5];
			  vagon_obj.osn = vagArr[6];
			  vagon_obj.npp = vagArr[7];
			  window.vagonsList.push(vagon_obj);
		  }
       }
    }
	resetNpp();
	//------------------------
	if ( window.vagonsList.length == 0 ){
		document.getElementById("add_vag_tbl").style.display = "none";
	}
	//------------------------
    document.getElementById("inp"+nVag).remove();
	//alert( "window.vagonsList: " + JSON.stringify(window.vagonsList) );
}
/****************************************************/
function notDoubleVagon(nVag) {
	var ret = "";
    var tmpVag = "";	
    var urlA = new URL(urlAjax + "check_double_vag");  	   
    for ( let key in window.vagonsList ){
	   tmpVag = window.vagonsList[key].numVag;
       if ( nVag === tmpVag ){
	      ret = "Вагон уже есть в этом списке!";
	   }
	}
	//------------------------------------------
    if ( ret === "" ){
	   $.ajax({
		 url: urlA,
		 type: 'post',
		 data: { num_vag:nVag },
		 dataType: 'json',
		 async: false,
		 success:function(response){
			if ( response["status"] === "double" ){
			   //alert( JSON.stringify(response) );
			   ret = "Вагон уже есть в списке станции " + response["stan"] + "  номер списка: " + response["spisok"];
			}
		 },
		 error:function(){
			ret = "Ошибка соединения с базой";
		 }
	   });
	}
	//------------------------------------------
    return ret;
}
/****************************************************/
function getNewNpp() {
	var ret = 0;
    for ( let key in window.vagonsList ){
	   ret = parseInt(window.vagonsList[key].npp);
	}
    ret = ret + 1;
    return ret;
}
/****************************************************/
function resetNpp() {
	var i = 1;
    for ( let key in window.vagonsList ){
	   window.vagonsList[key].npp = i;
	   i = i + 1;
	}
}
/****************************************************/
function showAlert( msgAlert, locReplace ){
   document.getElementById("contentLists").style.zIndex = "10";   
   document.getElementById("modalLists").style.zIndex = "10";   
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertF('" + locReplace + "')\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">" + msgAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertF('" + locReplace + "')\">Ok</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function showAlertUpd( msgAlert, contId, modalId ){
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertUpd('" + contId + "','" + modalId + "')\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">" + msgAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertUpd('" + contId + "','" + modalId + "')\">Ok</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function showAlert2( msgAlert ){
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlert2()\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">" + msgAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlert2()\">Ok</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function showAlert3( msgAlert, stan ){
   closeModalE();
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertUpd666('" + stan + "')\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">" + msgAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertUpd666('" + stan + "')\">Ok</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function showAlertDl( msgAlert, kodStan ){
   document.getElementById("contentLists").style.zIndex = "10";   
   document.getElementById("modalLists").style.zIndex = "10";   
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertDl('" + kodStan + "')\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">" + msgAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertDl('" + kodStan + "')\">Ok</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function showAlertArh( msgAlert ){
   document.getElementById("contentLists").style.zIndex = "10";   
   document.getElementById("modalLists").style.zIndex = "10";   
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertArh()\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">" + msgAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertArh()\">Ok</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function ascDeleteList(idList){
   document.getElementById("contentLists").style.zIndex = "10";   
   document.getElementById("modalLists").style.zIndex = "10";   
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertD()\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">Удалить переписной лист?</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"dellList('" + idList + "')\">Удалить</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertD()\">Отмена</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function ascDeleteList2(idList,kodStan){
   document.getElementById("contentLists").style.zIndex = "10";   
   document.getElementById("modalLists").style.zIndex = "10";   
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertD2()\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">Удалить переписной лист?</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"dellList2('" + idList + "','" + kodStan + "')\">Удалить</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertD2()\">Отмена</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function ascDeleteUser(idUser, nameUser){
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertD()\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">Удалить пользователя <b>" + nameUser + "</b> ?</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"dellUser('" + idUser + "')\">Удалить</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertD()\">Отмена</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function ascDeleteStanList(idList){
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertD()\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">Удалить переписной лист?</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"dellStanList('" + idList + "')\">Удалить</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertD()\">Отмена</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function ascDeleteArhive(idArhiv){
   document.getElementById("contentLists").style.zIndex = "10";   
   document.getElementById("modalLists").style.zIndex = "10";   
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class=\"close_modal_window\" onclick=\"closeAlertD()\">×</span>";  
   textAlert = textAlert + "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tbl_form\">";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class=\"alert_msg\">Удалить этот архив переписи?</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"dellArhiv('" + idArhiv + "')\">Удалить</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeAlertD2()\">Отмена</span>&nbsp;&nbsp;";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block"; 
}
/****************************************************/
function closeAlertF(locReplace){
   document.getElementById("contentLists").style.zIndex = "333";   
   document.getElementById("modalLists").style.zIndex = "100";   
   var mod_cont = document.getElementById("contentAlert");
   var modal = document.getElementById("alertMsg");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
   if ( locReplace === "" ){
	   document.getElementById('vagon').focus();
	   document.getElementById('vagon').select();
   } else {
       window.location.replace(locReplace);		
   }
}
/****************************************************/
function closeAlertUpd(contId, modalId){
   var mod_cont = document.getElementById("contentAlert");
   var modal = document.getElementById("alertMsg");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
   document.getElementById('vagon').focus();
   document.getElementById('vagon').select();
}
/****************************************************/
function closeAlertUpd666(kodStan){
   var mod_cont = document.getElementById("contentAlert");
   var modal = document.getElementById("alertMsg");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
   showStanInfo(kodStan);
}
/****************************************************/
function closeAlertD(){
   var mod_cont = document.getElementById("contentAlert");
   var modal = document.getElementById("alertMsg");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
}
/****************************************************/
function closeAlertD2(){
   var mod_cont = document.getElementById("contentAlert");
   var modal = document.getElementById("alertMsg");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
   document.getElementById("contentLists").style.zIndex = "333";   
   document.getElementById("modalLists").style.zIndex = "100";   
}
/****************************************************/
function closeAlert2(){
   var mod_cont = document.getElementById("contentAlert");
   var modal = document.getElementById("alertMsg");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
}
/****************************************************/
function closeAlertArh(){
   document.getElementById("contentLists").style.zIndex = "333";   
   document.getElementById("modalLists").style.zIndex = "100";   
   var mod_cont = document.getElementById("contentAlert");
   var modal = document.getElementById("alertMsg");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
   //----------------------------
   showArhivInfo();
}
/****************************************************/
function openNewUserFrm(){
   var mod_cont = document.getElementById("contentF");
   mod_cont.style.width = "300px";
   var modal = document.getElementById("modalF");
   var textAlert = "<span class='close_modal_window' onclick='closeModalF()'>×</span>";
   textAlert = textAlert + "<table align='center' cellpadding='0' cellspacing='0' class='tbl_form'>";
   textAlert = textAlert + "<tr><td colspan='2' class='day_td3'>Регистрация нового пользователя</td></tr>";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class='day_td2f'>Логин</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"loginF\" name=\"loginF\" value=\"\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td class='day_td2f'>Пароль</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"password\" id=\"pswF\" name=\"pswF\" value=\"\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"submitAdmLogForm()\">Войти</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeModalF()\">Отмена</span>";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block";
}
/****************************************************/
function openModalLA(){
   var mod_cont = document.getElementById("contentF");
   mod_cont.style.width = "300px";
   var modal = document.getElementById("modalF");
   var textAlert = "<span class='close_modal_window' onclick='closeModalF()'>×</span>";
   textAlert = textAlert + "<table align='center' cellpadding='0' cellspacing='0' class='tbl_form'>";
   textAlert = textAlert + "<tr><td colspan='2' class='day_td3'>Авторизация</td></tr>";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class='day_td2f'>Логин</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"loginF\" name=\"loginF\" value=\"\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td class='day_td2f'>Пароль</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"password\" id=\"pswF\" name=\"pswF\" value=\"\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"submitAdmLogForm()\">Войти</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeModalF()\">Отмена</span>";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block";
}
/****************************************************/
function openModalLU(){
   var mod_cont = document.getElementById("contentF");
   mod_cont.style.width = "300px";
   var modal = document.getElementById("modalF");
   var textAlert = "<span class='close_modal_window' onclick='closeModalF()'>×</span>";
   textAlert = textAlert + "<table align='center' cellpadding='0' cellspacing='0' class='tbl_form'>";
   textAlert = textAlert + "<tr><td colspan='2' class='day_td3'>Авторизация</td></tr>";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class='day_td2f'>Логин</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"loginF\" name=\"loginF\" value=\"\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td class='day_td2f'>Пароль</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"password\" id=\"pswF\" name=\"pswF\" value=\"\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"submitUsrLogForm()\">Войти</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeModalF()\">Отмена</span>";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block";
}
/****************************************************/
function showStanInfo(kodStan){
   var mod_cont = document.getElementById("contentLists");
   mod_cont.style.width = "850px";
   var modal = document.getElementById("modalLists");
   var textAlert = "<span class='close_modal_window' onclick='closeModalL()'>×</span>";
   var urlA = new URL(urlAjax + "stan-info");  	   
   //---------------------------------------
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { kod_stan:kodStan },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        textAlert = textAlert + response["html"];
        mod_cont.innerHTML = textAlert;
        modal.style.display = "block";
	 }
   });
   //---------------------------------------
}
/****************************************************/
function showArhivInfo(){
   var mod_cont = document.getElementById("contentLists");
   mod_cont.style.width = "450px";
   var modal = document.getElementById("modalLists");
   var textAlert = "<span class='close_modal_window' onclick='closeModalL()'>×</span>";
   var urlA = new URL(urlAjax + "arhiv-info");  	   
   //---------------------------------------
   $.ajax({
	 url: urlA,
	 type: 'post',
	 //data: { kod_stan:kodStan },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        textAlert = textAlert + response["html"];
        mod_cont.innerHTML = textAlert;
        modal.style.display = "block";
	 }
   });
   //---------------------------------------
}
/****************************************************/
function showArhives(){
   var mod_cont = document.getElementById("contentLists");
   mod_cont.style.width = "850px";
   var modal = document.getElementById("modalLists");
   var textAlert = "<span class='close_modal_window' onclick='closeModalL()'>×</span>";
   var urlA = new URL(urlAjax + "arhives-info");  	   
   //---------------------------------------
   $.ajax({
	 url: urlA,
	 type: 'post',
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        textAlert = textAlert + response["html"];
        mod_cont.innerHTML = textAlert;
        modal.style.display = "block";
	 }
   });
   //---------------------------------------
}
/****************************************************/
function showSeekF(){
   var mod_cont = document.getElementById("contentSeek");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("modalSeek");
   var textAlert = "<span class='close_modal_window' onclick='closeModalSeek()'>×</span>";
   textAlert = textAlert + "<table align='center' cellpadding='0' cellspacing='0' class='tbl_form'>";
   textAlert = textAlert + "<tr><td colspan='2' class='day_td33'>Поиск</td></tr>";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class='day_td3f'>Номер списка</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"FindSpisok\" name=\"FindSpisok\" value=\"\" maxlength=\"6\" style=\"inline-size:60px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class='day_td3f'>Номер вагона</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"FindVagon\" name=\"FindVagon\" value=\"\" maxlength=\"8\"  style=\"inline-size:70px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\" style=\"padding-block-start:20px;\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"showSeekResult()\">Найти</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeModalSeek()\">Отмена</span>";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block";
}
/****************************************************/
function showSeekF666(kodStan){
   var mod_cont = document.getElementById("contentSeek");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("modalSeek");
   var textAlert = "<span class='close_modal_window' onclick='closeModalSeek()'>×</span>";
   textAlert = textAlert + "<table align='center' cellpadding='0' cellspacing='0' class='tbl_form'>";
   textAlert = textAlert + "<tr><td colspan='2' class='day_td33'>Поиск</td></tr>";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class='day_td3f'>Номер вагона</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"FindVagon\" name=\"FindVagon\" value=\"\" maxlength=\"8\"  style=\"inline-size:70px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\" style=\"padding-block-start:20px;\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"showSeekResult666('" + kodStan + "')\">Найти</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeModalSeek()\">Отмена</span>";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block";
}
/****************************************************/
function showInsertListF(){
   var mod_cont = document.getElementById("contentLists");
   mod_cont.style.width = "600px";
   var modal = document.getElementById("modalLists");
   var textAlert = "<span class='close_modal_window' onclick='closeModalL()'>×</span>";
   var urlA = new URL(urlAjax + "insert-form");  	   
   //---------------------------------------
   $.ajax({
	 url: urlA,
	 type: 'post',
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        textAlert = textAlert + response["html"];
        mod_cont.innerHTML = textAlert;
        modal.style.display = "block";
	    //--------------------------
	    var input = document.getElementById("vagon");
	    input.addEventListener("keypress", function(event) {
		  if (event.key === "Enter") {
			event.preventDefault();
			document.getElementById("vagAdd").click();
		  }
	    });
	    //--------------------------
		if ( window.vagonsList.length == 0 ){
			document.getElementById("add_vag_tbl").style.display = "none";
		}
		//------------------------
	 }
   });
   //---------------------------------------
}
/****************************************************/
function showInsertListF666(kodStan){
   var mod_cont = document.getElementById("contentLists");
   mod_cont.style.width = "600px";
   var modal = document.getElementById("modalLists");
   var textAlert = "<span class='close_modal_window' onclick='closeModalL666()'>×</span>";
   var urlA = new URL(urlAjax + "insert-form666");  	   
   //---------------------------------------
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { stan:kodStan },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        textAlert = textAlert + response["html"];
        mod_cont.innerHTML = textAlert;
        modal.style.display = "block";
	    //--------------------------
	    var input = document.getElementById("vagon");
	    input.addEventListener("keypress", function(event) {
		  if (event.key === "Enter") {
			event.preventDefault();
			document.getElementById("vagAdd").click();
		  }
	    });
		//------------------------
		if ( window.vagonsList.length == 0 ){
			document.getElementById("add_vag_tbl").style.display = "none";
		}
		//------------------------
	 }
   });
   //---------------------------------------
}
/****************************************************/
function showUpdateListF(listId){
   var mod_cont = document.getElementById("contentListsE");
   mod_cont.style.width = "600px";
   var modal = document.getElementById("modalListsE");
   var textAlert = "<span class='close_modal_window' onclick='closeModalE()'>×</span>";
   var urlA = new URL(urlAjax + "update-form");  	   
   var urlA2 = new URL(urlAjax + "get-vags-in-list"); 
   let vagon_obj = {};
   var arrVag = [];    
   var d = 0;   
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { id_list:listId },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        textAlert = textAlert + response["html"];
        //----------------------------
		$.ajax({
		 url: urlA2,
		 type: 'post',
		 data: { id_list:listId },
		 dataType: 'json',
		 async:false,
		 success:function(response2){
		   if ( response2["status"] === "ok" ){	 
			   //alert( JSON.stringify(response2) );
               window.vagonsList = [];
			   for ( d = 0; typeof response2["resJson"][d] !== 'undefined'; d++ ){
				  arrVag = response2["resJson"][d].split('&');
				  vagon_obj = {};
				  vagon_obj.numVag = arrVag[0];
				  vagon_obj.rod = arrVag[1];
				  vagon_obj.uch_rod = arrVag[2];
				  vagon_obj.tip = arrVag[3];
				  vagon_obj.sob = arrVag[4];
				  vagon_obj.prz_sob = arrVag[5];
				  vagon_obj.osn = arrVag[6];
				  vagon_obj.npp = arrVag[7];
				  window.vagonsList.push(vagon_obj);
			   }
			   //alert( JSON.stringify(window.vagonsList) );
		   } else {
				showAlertUpd( "Ошибка передачи данных о вагонах в списке!", "contentListsE", "modalListsE" );
		   }
		 }
		});
        //----------------------------
        mod_cont.innerHTML = textAlert;
        modal.style.display = "block";
	    //--------------------------
	    var input = document.getElementById("vagon");
	    input.addEventListener("keypress", function(event) {
		  if (event.key === "Enter") {
			event.preventDefault();
			document.getElementById("vagAdd").click();
		  }
	    });
	    //--------------------------
	 }
   });
}
/****************************************************/
function showSeekResult(){
   var nVag = document.getElementById("FindVagon").value;	
   var nSpisok = document.getElementById("FindSpisok").value;
   if ( nSpisok != "" ){   
	   var mod_cont = document.getElementById("contentListsE");
	   mod_cont.style.width = "600px";
	   var modal = document.getElementById("modalListsE");
	   var textAlert = "<span class='close_modal_window' onclick='closeModalE()'>×</span>";
	   var urlA = new URL(urlAjax + "update-form-seek-list");  	   
	   var urlA2 = new URL(urlAjax + "get-vags-in-list"); 
	   let vagon_obj = {};
	   var arrVag = [];    
	   var d = 0;   
	   var listId = "";
	   $.ajax({
		 url: urlA,
		 type: 'post',
		 data: { num_spisok:nSpisok },
		 dataType: 'json',
		 success:function(response){
			textAlert = textAlert + response["html"];
			listId = response["list_id"];
			//----------------------------
			$.ajax({
			 url: urlA2,
			 type: 'post',
			 data: { id_list:listId },
			 dataType: 'json',
			 async:false,
			 success:function(response2){
			   if ( response2["status"] === "ok" ){	 
				   for ( d = 0; typeof response2["resJson"][d] !== 'undefined'; d++ ){
					  arrVag = response2["resJson"][d].split('&');
					  vagon_obj = {};
					  vagon_obj.numVag = arrVag[0];
					  vagon_obj.rod = arrVag[1];
					  vagon_obj.uch_rod = arrVag[2];
					  vagon_obj.tip = arrVag[3];
					  vagon_obj.sob = arrVag[4];
					  vagon_obj.prz_sob = arrVag[5];
					  vagon_obj.osn = arrVag[6];
					  vagon_obj.npp = arrVag[7];
					  window.vagonsList.push(vagon_obj);
				   }
			   } else {
					showAlertUpd( "Ошибка передачи данных о вагонах в списке!", "contentListsE", "modalListsE" );
			   }
			 }
			});
			//----------------------------
			mod_cont.innerHTML = textAlert;
			modal.style.display = "block";
			//--------------------------
		 }
	   });
   } else {
     if ( nVag != "" ){   
	   var mod_cont = document.getElementById("contentListsE");
	   mod_cont.style.width = "600px";
	   var modal = document.getElementById("modalListsE");
	   var textAlert = "<span class='close_modal_window' onclick='closeModalE()'>×</span>";
	   var urlA = new URL(urlAjax + "update-form-seek-vagon");  	   
	   var urlA2 = new URL(urlAjax + "get-vags-in-list"); 
	   let vagon_obj = {};
	   var arrVag = [];    
	   var d = 0;   
	   var listId = "";
	   $.ajax({
		 url: urlA,
		 type: 'post',
		 data: { num_vag:nVag },
		 dataType: 'json',
		 success:function(response){
			textAlert = textAlert + response["html"];
			listId = response["list_id"];
			//----------------------------
			$.ajax({
			 url: urlA2,
			 type: 'post',
			 data: { id_list:listId },
			 dataType: 'json',
			 async:false,
			 success:function(response2){
			   if ( response2["status"] === "ok" ){	 
				   for ( d = 0; typeof response2["resJson"][d] !== 'undefined'; d++ ){
					  arrVag = response2["resJson"][d].split('&');
					  vagon_obj = {};
					  vagon_obj.numVag = arrVag[0];
					  vagon_obj.rod = arrVag[1];
					  vagon_obj.uch_rod = arrVag[2];
					  vagon_obj.tip = arrVag[3];
					  vagon_obj.sob = arrVag[4];
					  vagon_obj.prz_sob = arrVag[5];
					  vagon_obj.osn = arrVag[6];
					  vagon_obj.npp = arrVag[7];
					  window.vagonsList.push(vagon_obj);
				   }
			   } else {
					showAlertUpd( "Ошибка передачи данных о вагонах в списке!", "contentListsE", "modalListsE" );
			   }
			 }
			});
			//----------------------------
			mod_cont.innerHTML = textAlert;
			modal.style.display = "block";
			//--------------------------
		 }
	   });
     }	   
   }
}
/****************************************************/
function moveToArh(){
   var note = document.getElementById("note").value;
   var clearDb = "no";
   var textAlert = "<span class='close_modal_window' onclick='closeModalE1()'>×</span>";
   var urlA = new URL(urlAjax + "move-to-arhiv");  	   
   var dwnld = document.getElementById("contentDwnld");
   var urlI = new URL(urlImg + "dwnld.gif");  	   
   if ( document.getElementById("dlt_db").checked ){ clearDb = "yes"; }
   //alert(clearDb);
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { note:note, clear_db:clearDb },
	 dataType: 'json',
	 async:true,
     beforeSend: function() {
		 dwnld.innerHTML = "";
		 dwnld.innerHTML = "<img src=\""+urlI+"\" width=\"35\" border=\"0\">";
	 },
     complete: function() {
		 textAlert = textAlert + "<h3>";
		 textAlert = textAlert + "БД переписи успешно скопирована в архив...";
		 if ( clearDb === "yes" ){
		    textAlert = textAlert + "<br/>Текущая БД очищена";
		 }
		 textAlert = textAlert + "</h3>";
		 dwnld.innerHTML = textAlert;
	 }
	});
}
/****************************************************/
function showSeekResult666(kodStan){
   var nVag = document.getElementById("FindVagon").value;	
   var mod_cont = document.getElementById("contentListsE");
   mod_cont.style.width = "600px";
   var modal = document.getElementById("modalListsE");
   var textAlert = "<span class='close_modal_window' onclick='closeModalE()'>×</span>";
   var urlA = new URL(urlAjax + "update-form-seek666");  	   
   var urlA2 = new URL(urlAjax + "get-vags-in-list"); 
   let vagon_obj = {};
   var arrVag = [];    
   var d = 0;   
   var listId = "";
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { num_vag:nVag, kod_stan:kodStan },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        textAlert = textAlert + response["html"];
		listId = response["list_id"];
        //----------------------------
		$.ajax({
		 url: urlA2,
		 type: 'post',
		 data: { id_list:listId },
		 dataType: 'json',
		 async:false,
		 success:function(response2){
		   if ( response2["status"] === "ok" ){	 
			   //alert( JSON.stringify(response2) );
			   for ( d = 0; typeof response2["resJson"][d] !== 'undefined'; d++ ){
				  arrVag = response2["resJson"][d].split('&');
				  vagon_obj = {};
				  vagon_obj.numVag = arrVag[0];
				  vagon_obj.rod = arrVag[1];
				  vagon_obj.uch_rod = arrVag[2];
				  vagon_obj.tip = arrVag[3];
				  vagon_obj.sob = arrVag[4];
				  vagon_obj.prz_sob = arrVag[5];
				  vagon_obj.osn = arrVag[6];
				  vagon_obj.npp = arrVag[7];
				  window.vagonsList.push(vagon_obj);
			   }
			   //alert( JSON.stringify(window.vagonsList) );
		   } else {
				showAlertUpd( "Ошибка передачи данных о вагонах в списке!", "contentListsE", "modalListsE" );
		   }
		 }
		});
        //----------------------------
        mod_cont.innerHTML = textAlert;
        modal.style.display = "block";
	    //--------------------------
	    var input = document.getElementById("vagon");
		if ( input != null ){
			input.addEventListener("keypress", function(event) {
			  if (event.key === "Enter") {
				event.preventDefault();
				document.getElementById("vagAdd").click();
			  }
			});
		}
	    //--------------------------
	 }
   });
}
/****************************************************/
function showUpdateListF666(listId){
   var mod_cont = document.getElementById("contentListsE");
   mod_cont.style.width = "600px";
   var modal = document.getElementById("modalListsE");
   var textAlert = "<span class='close_modal_window' onclick='closeModalE()'>×</span>";
   var urlA = new URL(urlAjax + "update-form666");  	   
   var urlA2 = new URL(urlAjax + "get-vags-in-list"); 
   let vagon_obj = {};
   var arrVag = [];    
   var d = 0;   
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { id_list:listId },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        textAlert = textAlert + response["html"];
        //----------------------------
		$.ajax({
		 url: urlA2,
		 type: 'post',
		 data: { id_list:listId },
		 dataType: 'json',
		 async:false,
		 success:function(response2){
		   if ( response2["status"] === "ok" ){	 
			   //alert( JSON.stringify(response2) );
               window.vagonsList = [];
			   for ( d = 0; typeof response2["resJson"][d] !== 'undefined'; d++ ){
				  arrVag = response2["resJson"][d].split('&');
				  vagon_obj = {};
				  vagon_obj.numVag = arrVag[0];
				  vagon_obj.rod = arrVag[1];
				  vagon_obj.uch_rod = arrVag[2];
				  vagon_obj.tip = arrVag[3];
				  vagon_obj.sob = arrVag[4];
				  vagon_obj.prz_sob = arrVag[5];
				  vagon_obj.osn = arrVag[6];
				  vagon_obj.npp = arrVag[7];
				  window.vagonsList.push(vagon_obj);
			   }
			   //alert( JSON.stringify(window.vagonsList) );
		   } else {
				showAlertUpd( "Ошибка передачи данных о вагонах в списке!", "contentListsE", "modalListsE" );
		   }
		 }
		});
        //----------------------------
        mod_cont.innerHTML = textAlert;
        modal.style.display = "block";
	    //--------------------------
	    var input = document.getElementById("vagon");
	    input.addEventListener("keypress", function(event) {
		  if (event.key === "Enter") {
			event.preventDefault();
			document.getElementById("vagAdd").click();
		  }
	    });
	    //--------------------------
	 }
   });
}
/****************************************************/
function showListVags(listId){
   var modal = document.getElementById("trList"+listId);
   var mod_cont = document.getElementById("tdList"+listId);
   var textAlert = "";
   var urlA = new URL(urlAjax + "list-vagons");  	   
   //---------------------------------------
   if ( mod_cont.innerHTML === "&nbsp;" ){
	   $.ajax({
		 url: urlA,
		 type: 'post',
		 data: { id_list:listId },
		 dataType: 'json',
		 success:function(response){
			//alert( JSON.stringify(response) );
			//alert( response["status"] );
	        modal.style.display = "table-row";
			textAlert = textAlert + response["html"];
			mod_cont.innerHTML = textAlert;
		 }
	   });
   } else {
	   mod_cont.innerHTML = "&nbsp;";
	   modal.style.display = "none";
   }
   //---------------------------------------
}
/****************************************************/
function showArhivOptions(listId){
   var modal = document.getElementById("trList"+listId);
   var mod_cont = document.getElementById("tdList"+listId);
   var textAlert = "";
   var urlA = new URL(urlAjax + "ponom-itg-arhiv\\" + listId);  	   
   var urlA2 = new URL(urlAjax + "svod-itg-arhiv\\" + listId);  	   
   //---------------------------------------
   if ( mod_cont.innerHTML === "&nbsp;" ){
	   modal.style.display = "table-row";
	   textAlert = textAlert + "<a class=\"lnk2m\" href=\"" + urlA + "\" target=\"_blank\">Пономерной учет в EXCEL</a>&nbsp;&nbsp;";
	   textAlert = textAlert + "<a class=\"lnk2m\" href=\"" + urlA2 + "\" target=\"_blank\">Сводные итоги в EXCEL</a>&nbsp;&nbsp;";
	   mod_cont.innerHTML = textAlert;
   } else {
	   mod_cont.innerHTML = "&nbsp;";
	   modal.style.display = "none";
   }
   //---------------------------------------
}
/****************************************************/
function showListVags666(listId){
   var modal = document.getElementById("trList"+listId);
   var mod_cont = document.getElementById("tdList"+listId);
   var textAlert = "";
   var urlA = new URL(urlAjax + "list-vagons666");  	   
   //---------------------------------------
   if ( mod_cont.innerHTML === "&nbsp;" ){
	   $.ajax({
		 url: urlA,
		 type: 'post',
		 data: { id_list:listId },
		 dataType: 'json',
		 success:function(response){
			//alert( JSON.stringify(response) );
			//alert( response["status"] );
	        modal.style.display = "table-row";
			textAlert = textAlert + response["html"];
			mod_cont.innerHTML = textAlert;
		 }
	   });
   } else {
	   mod_cont.innerHTML = "&nbsp;";
	   modal.style.display = "none";
   }
   //---------------------------------------
}
/****************************************************/
function openModalNewUser(idUser){
   var mod_cont = document.getElementById("contentF");
   mod_cont.style.width = "300px";
   var modal = document.getElementById("modalF");
   var formUsr = document.getElementById("modalF");
   var textAlert = "";
   var arrStanList = []; 
   var arrStanOpt = []; 
   var urlA = new URL(urlAjax + "get_user_options");  	   
   $.ajax({
     url: urlA,
     type: 'post',
     data: { id_user:idUser },
     dataType: 'json',
     success:function(response){
	    if ( response["status"] === "ok" ){ 
		   textAlert = "<span class='close_modal_window' onclick='closeModalF()'>×</span>";
		   textAlert = textAlert + "<table align='center' cellpadding='0' cellspacing='0' class='tbl_form'>";
		   textAlert = textAlert + "<tr><td colspan='2' class='day_td3'>Новый пользователь</td></tr>";
		   textAlert = textAlert + "<tr>";
		   textAlert = textAlert + "<td class='day_td2f'>Логин</td>";
		   textAlert = textAlert + "<td class='day_td22'>";
		   textAlert = textAlert + "<input type=\"text\" id=\"loginFusr\" name=\"loginFusr\" value=\"" + response["txt_login"] + "\">";
		   textAlert = textAlert + "</td>";
		   textAlert = textAlert + "</tr><tr>";
		   textAlert = textAlert + "<td class='day_td2f'>Пароль</td>";
		   textAlert = textAlert + "<td class='day_td22'>";
		   textAlert = textAlert + "<input type=\"password\" id=\"pswFusr\" name=\"pswFusr\" value=\"" + response["txt_psw"] + "\">";
		   textAlert = textAlert + "</td>";
		   textAlert = textAlert + "</tr><tr>";
		   textAlert = textAlert + "<td class='day_td2f'>Станция</td>";
		   textAlert = textAlert + "<td class='day_td22'>";
		   textAlert = textAlert + "<select id=\"stanUsr\" name=\"stanUsr\">";
		   arrStanList = response["txt_opt"].split("&");
           for (let i = 0; i < arrStanList.length; i++) {
			   textAlert = textAlert + arrStanList[i];
           }
		   textAlert = textAlert + "</select>";
		   textAlert = textAlert + "</td>";
		   textAlert = textAlert + "</tr><tr>";
		   textAlert = textAlert + "<td colspan=\"2\">";
		   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"submitUserForm11()\">Сохранить</span>&nbsp;&nbsp;";
		   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeModalF()\">Отмена</span>";
		   textAlert = textAlert + "</td>";
		   textAlert = textAlert + "</tr>";
		   textAlert = textAlert + "</table>";
		   textAlert = textAlert + "<input type=\"hidden\" id=\"idUser\" name=\"idUser\" value=\"" + idUser + "\">";
		   mod_cont.innerHTML = textAlert;
		   modal.style.display = "block";
	    }
     },
     error:function(){ 
	   showAlert( "Ошибка!", "" );
     }
   });

}
/****************************************************/
function submitAdmLogForm(){
   var newUsr = document.getElementById('loginF').value;
   var newPsw = document.getElementById('pswF').value;
   //---------------------------------------
   var urlA = new URL(urlAjax + "adm-login");  	   
   var urlRedir = new URL(urlAjax + "admin-main");  	   
   //---------------------------------------
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { user_name:newUsr, user_psw:newPsw },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
        closeModalF();
		//alert( response["status"] );
        window.location.replace(urlRedir);		
	 }
   });
}
/****************************************************/
function submitUsrLogForm(){
   var newUsr = document.getElementById('loginF').value;
   var newPsw = document.getElementById('pswF').value;
   //---------------------------------------
   var urlA = new URL(urlAjax + "usr-login");  	   
   var urlRedir = new URL(urlAjax + "user-main");  	   
   //---------------------------------------
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { user_name:newUsr, user_psw:newPsw },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
        closeModalF();
		//alert( response["status"] );
        window.location.replace(urlRedir);		
	 }
   });
}
/****************************************************/
function submitRegAdmForm(){
   var newUsr = document.getElementById('loginFadm').value;	
   var newPsw = document.getElementById('pswFadm').value;	
   var newAdmRole = document.getElementById('role_adm').value;	
   var urlA = new URL(urlAjax + "adm-registration");  	   
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { user_name:newUsr, user_psw:newPsw, adm_role:newAdmRole },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
		showAlert2( "Администратор <b>" + newUsr + "</b> зарегестрирован..." );
	 }
   });
}
/****************************************************/
function submitRegUserForm(){
   var newUsr = document.getElementById('loginFusr').value;	
   var newPsw = document.getElementById('pswFusr').value;	
   var usrStan = document.getElementById('stanUsr').value;
   var urlA = new URL(urlAjax + "usr-registration");  	   
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { user_name:newUsr, user_psw:newPsw, user_stan:usrStan },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
		showAlert2( "Пользователь <b>" + newUsr + "</b> зарегестрирован..." );
	 }
   });
}
/****************************************************/
function submitUserForm11(){
   var mod_cont = document.getElementById("contentF");
   var modal = document.getElementById("modalF");
   var newUsr = document.getElementById('loginFusr').value;	
   var newPsw = document.getElementById('pswFusr').value;	
   var usrStan = document.getElementById('stanUsr').value;
   var url = new URL(urlAjax + "usr-registration");  	   
   var urlRedir = new URL(urlAjax + "admin-main/vagper-users");  	   
   if (document.getElementById('idUser').value !== "0"){
       url = new URL(urlAjax + "usr-update");  	   
   }
   $.ajax({
	 url: url,
	 type: 'post',
	 data: { user_id:document.getElementById('idUser').value,user_name:newUsr, user_psw:newPsw, user_stan:usrStan },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        if (document.getElementById('idUser').value !== "0"){
		    showAlert( "Данные пользователя <b>" + newUsr + "</b> обновлены...", urlRedir );
		} else {
		    showAlert( "Пользователь <b>" + newUsr + "</b> зарегестрирован...", urlRedir );
		}
        mod_cont.innerHTML = "";
        modal.style.display = "none";
	 }
   });
}
/****************************************************/
function closeModalF(){
   var mod_cont = document.getElementById("contentF");
   var modal = document.getElementById("modalF");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
}
/****************************************************/
function closeModalL(){
   var mod_cont = document.getElementById("contentLists");
   var modal = document.getElementById("modalLists");
   var redirAdminMain = new URL(urlAjax + "admin-main");  	   
   mod_cont.innerHTML = "";
   modal.style.display = "none";
   window.location.replace(redirAdminMain);		
}
/****************************************************/
function closeModalSeek(){
   var mod_cont = document.getElementById("contentSeek");
   var modal = document.getElementById("modalSeek");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
}
/****************************************************/
function closeModalL666(){
   var mod_cont = document.getElementById("contentLists");
   var modal = document.getElementById("modalLists");
   var redirUserMain = new URL(urlAjax + "user-main");  	   
   mod_cont.innerHTML = "";
   modal.style.display = "none";
   window.location.replace(redirUserMain);		
}
/****************************************************/
function closeModalE(){
   var mod_cont = document.getElementById("contentListsE");
   var modal = document.getElementById("modalListsE");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
}
/****************************************************/
function closeModalE1(){
   var mod_cont = document.getElementById("contentDwnld");
   var modal = document.getElementById("modalDwnld");
   mod_cont.innerHTML = "";
   modal.style.display = "none";
}
/****************************************************/
function userUpd(prm){
   var url = new URL(urlAjax + "users-upd");  	 
   var param_name = "users-upd";   
   $.ajax({
	 url: url,
	 type: 'post',
	 data: { param_value:prm },
	 dataType: 'json',
	 success:function(response){
	    if ( response["status"] === "ok" ){ 
			showAlert( "Доступ к изменению переписных листов станционными пользователями изменен...", "" );
		}
	 }
   });
}
/****************************************************/
function ascClearDB(){
   var mod_cont = document.getElementById("contentAlert");
   mod_cont.style.width = "500px";
   var modal = document.getElementById("alertMsg");
   var textAlert = "<span class='close_modal_window' onclick='closeAlertD()'>×</span>";
   var urlA = new URL(urlAjax + "asc-clear-db");  	   
   //---------------------------------------
   $.ajax({
	 url: urlA,
	 type: 'post',
	 data: { kod_stan:kodStan },
	 dataType: 'json',
	 success:function(response){
		//alert( JSON.stringify(response) );
		//alert( response["status"] );
        textAlert = textAlert + response["html"];
        mod_cont.innerHTML = textAlert;
        modal.style.display = "block";
	 }
   });
   //---------------------------------------
}
/****************************************************/
function checkForIndexPoezd(idTr){
   var vpoezdVal = document.getElementById(idTr).value;
   if ( vpoezdVal == "1" ){
	   document.getElementById('ind_p_tr').style.display = "table-row";
   } else {
	   document.getElementById('ind_p_tr').style.display = "none";
   }
}
/****************************************************/
function showMoveToArh(){
   var mod_cont = document.getElementById("contentDwnld");
   mod_cont.style.width = "400px";
   var modal = document.getElementById("modalDwnld");
   var textAlert = "<span class='close_modal_window' onclick='closeModalE1()'>×</span>";
   textAlert = textAlert + "<table align='center' cellpadding='0' cellspacing='0' class='tbl_form3'>";
   textAlert = textAlert + "<tr><td colspan='2' class='day_td33'>Перенос базы переписи в архив</td></tr>";
   textAlert = textAlert + "<tr>";
   textAlert = textAlert + "<td class='day_td33f'>Примечание к архиву</td>";
   textAlert = textAlert + "<td class='day_td22'>";
   textAlert = textAlert + "<input type=\"text\" id=\"note\" name=\"note\" value=\"\" maxlength=\"50\"  style=\"inline-size:150px;\">";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td class='day_td23' colspan='2'>";
   textAlert = textAlert + "<div><input type=\"checkbox\" id=\"dlt_db\" name=\"dlt_db\" /><label for=\"dlt_db\">Очистить текущую БД</label></div>";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr><tr>";
   textAlert = textAlert + "<td colspan=\"2\" style=\"padding-block-start:20px;\">";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"moveToArh()\">Перенести</span>&nbsp;&nbsp;";
   textAlert = textAlert + "<span class=\"sbmt\" onclick=\"closeModalE1()\">Отмена</span>";
   textAlert = textAlert + "</td>";
   textAlert = textAlert + "</tr>";
   textAlert = textAlert + "</table>";
   mod_cont.innerHTML = textAlert;
   modal.style.display = "block";
}
/****************************************************/
