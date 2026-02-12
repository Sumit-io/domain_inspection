// JScript File

//-- Modal Popup ---
var FormatedAmount;
function pageWidth() {
  return window.innerWidth != null
    ? window.innerWidth
    : document.documentElement && document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : document.body != null
        ? document.body.clientWidth
        : null;
}
function pageHeight() {
  return window.innerHeight != null
    ? window.innerHeight
    : document.documentElement && document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : document.body != null
        ? document.body.clientHeight
        : null;
}
function posLeft() {
  return typeof window.pageXOffset != "undefined"
    ? window.pageXOffset
    : document.documentElement && document.documentElement.scrollLeft
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft
        ? document.body.scrollLeft
        : 0;
}
function posTop() {
  return typeof window.pageYOffset != "undefined"
    ? window.pageYOffset
    : document.documentElement && document.documentElement.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop
        ? document.body.scrollTop
        : 0;
}
function $(x) {
  return document.getElementById(x);
}
function scrollFix() {
  var obol = $("ol");
  obol.style.top = posTop() + "px";
  obol.style.left = posLeft() + "px";
}
function sizeFix() {
  var obol = $("ol");
  obol.style.height = pageHeight() + "px";
  obol.style.width = pageWidth() + "px";
}
function kp(e) {
  ky = e ? e.which : event.keyCode;
  if (ky == 88 || ky == 120) hm();
  return false;
}
function inf(h) {
  tag = document.getElementsByTagName("select");
  for (i = tag.length - 1; i >= 0; i--) tag[i].style.visibility = h;
  tag = document.getElementsByTagName("iframe");
  for (i = tag.length - 1; i >= 0; i--) tag[i].style.visibility = h;
  tag = document.getElementsByTagName("object");
  for (i = tag.length - 1; i >= 0; i--) tag[i].style.visibility = h;
}
function sm(obl, wd, ht) {
  if (wd < 300) wd = 300;
  if (ht < 100) ht = 100;
  initmb();
  var h = "hidden";
  var b = "block";
  var p = "px";
  var obol = $("ol");
  var obbxd = $("mbd");

  obbxd.innerHTML = obl;

  obol.style.height = pageHeight() + p;
  obol.style.width = pageWidth() + p;
  obol.style.top = posTop() + p;
  obol.style.left = posLeft() + p;
  obol.style.display = b;

  var obbx = $("mbox");

  obbx.style.display = b;

  var tp = (pageHeight() - ht) / 2 - 50;
  var lt = posLeft() + (pageWidth() - wd) / 2;

  obbx.style.top = (tp < 0 ? 0 : tp) + p;
  obbx.style.left = (lt < 0 ? 0 : lt) + p;
  obbx.style.width = wd + p;
  inf(h);
  return false;
}
function hm() {
  var v = "visible";
  var n = "none";
  $("ol").style.display = n;
  $("mbox").style.display = n;
  inf(v);
  document.onkeypress = "";
}
function initmb() {
  var ab = "absolute";
  var n = "none";
  var obody = document.getElementsByTagName("body")[0];
  var frag = document.createDocumentFragment();
  var obol = document.createElement("div");
  obol.setAttribute("id", "ol");
  obol.style.display = n;
  obol.style.position = ab;
  obol.style.top = 0;
  obol.style.left = 0;
  obol.style.zIndex = 998;
  obol.style.width = "100%";
  frag.appendChild(obol);
  var obbx = document.createElement("div");
  obbx.setAttribute("id", "mbox");
  obbx.style.display = n;
  obbx.style.position = ab;
  obbx.style.zIndex = 999;
  var obl = document.createElement("span");
  obbx.appendChild(obl);
  var obbxd = document.createElement("div");
  obbxd.setAttribute("id", "mbd");
  obl.appendChild(obbxd);
  frag.insertBefore(obbx, obol.nextSibling);
  obody.insertBefore(frag, obody.firstChild);
  window.onscroll = scrollFix;
  window.onresize = sizeFix;
}

///--- Till Here -----

var linkArray = new Array();
function disablelinks() {
  var objLink = document.links;
  for (var i = 0; i < objLink.length; i++) {
    if (objLink[i].id.split("hlThemeButton").length > 1) {
      //this just allows me to skip some/
    } else {
      linkArray[i] = objLink[i].href.toString();
      objLink[i].disabled = true;
      objLink[i].onclick = new Function("return false;");
    }
  }
}
function enablelinks() {
  var objLink = document.links;
  for (var i = 0; i < objLink.length; i++) {
    if (objLink[i].id.split("hlThemeButton").length > 1) {
      //this just allows me to skip some/
    } else {
      objLink[i].disabled = false;
      objLink[i].href = linkArray[i];
      objLink[i].onclick = linkArray[i];
    }
  }
}

function trim(stringToTrim) {
  return stringToTrim.replace(/^\s+|\s+$/g, "");
}
function ltrim(stringToTrim) {
  return stringToTrim.replace(/^\s+/, "");
}
function rtrim(stringToTrim) {
  return stringToTrim.replace(/\s+$/, "");
}

function city() {
  var cities = new Array("Bangalore", "Mysore", "Mangalore");
  return cities;
}
function state() {
  var states = new Array();
  states[0] = "";
  return states;
}
var Postappend;
function formatCurrency(num) {
  ret = ProcessingService.FormatCurrency(num, FormatOnComplete);

  return FormatedAmount;
  //num = num.toString().replace(/\$|\,/g,'');
  //if(isNaN(num))
  //num = "0";
  //sign = (num == (num = Math.abs(num)));
  //num = Math.floor(num*100+0.50000000001);
  //cents = num%100;
  //num = Math.floor(num/100).toString();
  //if(cents<10)
  //cents = "0" + cents;
  //for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
  //num = num.substring(0,num.length-(4*i+3))+
  //num.substring(num.length-(4*i+3));
  //result=(((sign)?'':'-') + num + '.' + cents);
  //if(Currency!="" && Postappend!="")
  //{
  //  if(Postappend=="true")
  //result=result+" "+Currency;
  //  else
  //  result=Currency+" "+result;
  //}
  //else
  //result="Rs. "+result;
  //return result;
  //}
}
function FormatOnComplete(ret) {
  FormatedAmount = ret;
  return FormatedAmount;
}

function selectItem(ctlName, selectvalue) {
  if (selectvalue != "") {
    var selected = 0;
    for (i = 0; i < document.getElementById(ctlName).options.length; i++) {
      if (document.getElementById(ctlName).options[i].value == selectvalue) {
        selected = i;
      }
    }
    document.getElementById(ctlName).selectedIndex = selected;
  }
}
var CanEnterCardNumber;
var CardNumberSwipe;
var CardNumberX;
var CardNumberEnter;
var CardNumber;
var CanProceed;
var CanProceedAfterParentValidation;
var TransactionName;
var IsDuplicateTrans;
var RedirectLocation;
var IsFromRichClient;
var ParentCardNumberSwipe;
var ParentCardNumberX;
var ParentCardNumberEnter;
var ParentCardNumber;
var ReceiptViewingProcess;
var AuthInfoSession;
var TermInfoSession;
var InternalCardNumber;
var tblInternalCardNumber;
var CanGetInternalCardNumber;
var OldCardNumber;
var IsOriginalInternalCardNumber;
function ValidateCardSwipeValues() {
  CanProceed = true;
  // Check Whether Card Swipe Mode or Text entry mode or Both or get internal card number
  //added by divya 10/07/2009
  //if CanGetInternalCardNumber is true then swipe card will not be enabled.
  if (CanGetInternalCardNumber != null) {
    if (CanGetInternalCardNumber.value != "") {
      if (trim(CanGetInternalCardNumber.value) == "true") {
        if (trim(InternalCardNumber.value) == "") {
          showMsg(
            "Please Click on Get Internal Card Number Button.",
            "Ok",
            "Get Internal Card Number",
            null,
          );
          CanProceed = false;
        } else CardNumber = InternalCardNumber.value; //In card reissue for original card number
      }
    } else if (
      trim(CanEnterCardNumber.value) == "both"
    ) // if Card swipe & Enter mode
    {
      if (trim(CardNumberSwipe.value) == "") // Card is not swiped/Entered
      {
        showMsg(
          "Please Click on Swipe Card Button or Enter the Card Number.",
          "Ok",
          "Card Swipe or Enter",
          null,
        );
        CanProceed = false;
      } else {
        CardNumber = CardNumberSwipe.value; // Card is swiped. Get the value
      }
    } else if (CanEnterCardNumber.value == "false") // if Card swipe mode
    {
      if (trim(CardNumberSwipe.value) == "") // Card is not swiped
      {
        showMsg("Please click on swipe card button.", "Ok", "Card Swipe", null);
        CanProceed = false;
      } else {
        CardNumber = CardNumberSwipe.value; // Card is swiped. Get the value
      }
    } else // Card Entry Mode
    {
      if (trim(CardNumberEnter.value) == "") // Card Number not entered
      {
        CanProceed = false; // Cannot Proceed, since Card number is not entered
      } else {
        CardNumber = CardNumberEnter.value; // Card number entered. Get the value
      }
    }
  } else if (
    trim(CanEnterCardNumber.value) == "both"
  ) // if Card swipe & Enter mode
  {
    if (trim(CardNumberSwipe.value) == "") // Card is not swiped/Entered
    {
      showMsg(
        "Please Click on Swipe Card Button or Enter the Card Number.",
        "Ok",
        "Card Swipe or Enter",
        null,
      );
      CanProceed = false;
    } else {
      CardNumber = CardNumberSwipe.value; // Card is swiped. Get the value
    }
  } else if (CanEnterCardNumber.value == "false") // if Card swipe mode
  {
    if (trim(CardNumberSwipe.value) == "") // Card is not swiped
    {
      showMsg("Please click on swipe card button.", "Ok", "Card Swipe", null);
      CanProceed = false;
    } else {
      CardNumber = CardNumberSwipe.value; // Card is swiped. Get the value
    }
  } else // Card Entry Mode
  {
    if (trim(CardNumberEnter.value) == "") // Card Number not entered
    {
      CanProceed = false; // Cannot Proceed, since Card number is not entered
    } else {
      CardNumber = CardNumberEnter.value; // Card number entered. Get the value
    }
  }
}

function ValidateParentCardSwipeValues() {
  this.CanProceedAfterParentValidation = true;
  //Manager can Enter and swipe card...Added by srinivas.p on 20th March 08.
  if (CanEnterCardNumber.value == "both") // if Card swipe & Enter mode
  {
    if (trim(ParentCardNumberSwipe.value) == "") // Card is not swiped/Entered
    {
      showMsg(
        "Please click on swipe card button or Enter the Parent Card Number.",
        "Ok",
        "Card Swipe or Enter",
        null,
      );
      CanProceedAfterParentValidation = false;
    } else {
      ParentCardNumber = ParentCardNumberSwipe.value; // Card is swiped. Get the value
    }
  } else if (CanEnterCardNumber.value == "false") {
    if (trim(ParentCardNumberSwipe.value) == "") {
      showMsg(
        "Please click on swipe card button for Parent Card Number.",
        "Ok",
        "Card Swipe",
        null,
      );
      CanProceedAfterParentValidation = false;
    } else {
      ParentCardNumber = ParentCardNumberSwipe.value;
    }
  } else {
    if (ParentCardNumberEnter.value == "") {
      CanProceedAfterParentValidation = false;
    } else {
      ParentCardNumber = ParentCardNumberEnter.value;
    }
  }
}

function readReciept() {
  ReceiptViewingProcess.style.display = "";
  ProcessingService.ReadReciept(IsDuplicateTrans, OnRecieptReaded);
}

function OnRecieptReaded(arg) {
  ReceiptViewingProcess.style.display = "none";
  if (arg[2]) {
    if (arg[0] == false) {
      showMsg(arg[1], "Print", TransactionName, "PrintWindow()");
    } else {
      showConfirm(
        arg[1],
        "Print",
        "Cancel",
        TransactionName,
        "PrintWindow()",
        "redirectAfterPrinting()",
      );
    }
  } else {
    showMsg("Could not read the receipt.", "Ok", TransactionName, null);
  }
}

function PrintWindow() {
  if (IsFromRichClient == "False") {
    if (navigator.appName == "Microsoft Internet Explorer") {
      var PrintCommand = '<OBJECT ID="PrintCommandObject" WIDTH=0 HEIGHT=0 ';
      PrintCommand +=
        'CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';
      document.body.insertAdjacentHTML("beforeEnd", PrintCommand);
      PrintCommandObject.ExecWB(6, -1);
      PrintCommandObject.outerHTML = "";
    } else {
      window.print();
    }

    window.setTimeout(
      'showConfirm("Was the printing successful?","Yes","No",TransactionName,"redirectAfterPrinting()","reprint()");',
      500,
    );
  } else {
    window.location = RedirectLocation + "?Print=Y";
  }
}
function ConfirmReprint() {
  window.setTimeout(
    'showConfirm("Was the printing successful?","Yes","No",TransactionName,"redirectAfterPrinting()","reprint()");',
    500,
  );
}
function reprint() {
  showConfirm(
    "Do you want to re-print?",
    "Yes",
    "No",
    TransactionName,
    "PrintWindow()",
    "redirectAfterPrinting()",
  );
}
function redirectAfterPrinting() {
  window.location = RedirectLocation;
}
var DataRead;
var TrackData;
var CardType;
var vbtnSubmit;
var vKPTime;
var ParentDataRead;
var ParentTrackData;
var ParentCardType;
var vParentKPTime;

function ManageCardSwipe() {
  if (DataRead.value == "false") {
    if (CardNumberX.value != "") {
      hm("messagecontent");
      var ret = ProcessingService.ReadCardNumberAndValidateTrackData(
        CardNumberX.value,
        OnCardReadComplete,
        OnTimeOut,
        OnError,
      );
      TrackData.value = CardNumberX.value;
    } else {
      showMsg("Card Format is incorrect", "Ok", "Card Swipe", null);
      DataRead.value = "false";
      TrackData.value = "";
    }
  }
}
function ManageParentCardSwipe() {
  if (ParentDataRead.value == "false") {
    if (ParentCardNumberX.value != "") {
      hm("messagecontent");
      var ret = ProcessingService.ReadCardNumberAndValidateTrackData(
        ParentCardNumberX.value,
        OnParentCardReadComplete,
        OnTimeOut,
        OnError,
      );
      ParentTrackData.value = ParentCardNumberX.value;
    } else {
      showMsg("Primary Card Format is incorrect", "Ok", "Card Swipe", null);
      ParentDataRead.value = "false";
      ParentTrackData.value = "";
    }
  }
}
function OnCardReadComplete(CardInfo) {
  if (
    CardInfo[0] == true &&
    CardInfo[2] == true &&
    CardInfo[1] != "" &&
    CardInfo[3] == true
  ) {
    CardNumberSwipe.value = CardInfo[1];

    if (CardType == "L" && TransactionName == "Card Redeem")
      CardSwipe.value = CardInfo[1];
    DataRead.value = "true";
    //vbtnSubmit.focus();
    if (CardNumberUnique == "True") {
      ret = ProcessingService.ValidateCardAndGetInitialLoadValues(
        CardInfo[1],
        CardType,
        OnInitialLoadValues,
        OnTimeOut,
        OnError,
      );
    }
  } else if (CardInfo[2] == false) {
    CardNumberX.value = "";
    showMsg(
      "Could not read the Card.Please try again.",
      "Ok",
      "Card Swipe",
      null,
    );
    DataRead.value = "false";
    TrackData.value = "";
  } else if (CardInfo[0] == false) {
    CardNumberX.value = "";
    showMsg("Card Format is incorrect", "Ok", "Card Swipe", null);
    DataRead.value = "false";
    TrackData.value = "";
  } else if (CardInfo[3] == false) {
    CardNumberX.value = "";
    showMsg("Card Validation Failed", "OK", "Card Swipe", null);
    DataRead.value = "false";
    TrackData.value = "";
  }
}
function OnParentCardReadComplete(CardInfo) {
  if (
    CardInfo[0] == true &&
    CardInfo[2] == true &&
    CardInfo[1] != "" &&
    CardInfo[3] == true
  ) {
    ParentCardNumberSwipe.value = CardInfo[1];
    DataRead.value = "true";
    //vbtnSubmit.focus();
  } else if (CardInfo[2] == false) {
    ParentCardNumberX.value = "";
    showMsg(
      "Could not read the Card.Please try again.",
      "Ok",
      "Card Swipe",
      null,
    );
    DataRead.value = "false";
    TrackData.value = "";
  } else if (CardInfo[0] == false) {
    ParentCardNumberX.value = "";
    showMsg("Card Format is incorrect", "Ok", "Card Swipe", null);
    DataRead.value = "false";
    TrackData.value = "";
  } else if (CardInfo[3] == false) {
    ParentCardNumberX.value = "";
    showMsg("Card Validation Failed", "OK", "Card Swipe", null);
    DataRead.value = "false";
    TrackData.value = "";
  }
}

function ManageKeyPress(event) {
  if (event.keyCode == 13) {
    ForceClick();
  }
  today = new Date();
  if (
    vKPTime.value != "" &&
    CardNumberX.value != "" &&
    today.getTime() - vKPTime.value > 300
  ) {
    if (
      event.keyCode != 13 &&
      event.keyCode != 9 &&
      event.keyCode != 17 &&
      event.keyCode != 18
    )
      return false;
  }
  e = today.getTime();
  if (CardNumberSwipe.value == "") {
    DataRead.value = "false";
  }
}

function ManageParentKeyPress(event) {
  if (event.keyCode == 13) {
    ForceClickParent();
  }
  today = new Date();
  if (
    vParentKPTime.value != "" &&
    ParentCardNumberX.value != "" &&
    today.getTime() - vParentKPTime.value > 300
  ) {
    if (
      event.keyCode != 13 &&
      event.keyCode != 9 &&
      event.keyCode != 17 &&
      event.keyCode != 18
    )
      return false;
  }
  e = today.getTime();
  if (ParentCardNumberSwipe.value == "") {
    ParentDataRead.value = "false";
  }
}
//Added by Senthilraja on 28th April 2009 for checking Session, when clicking Swip Card button.
function btnSwipeCard_onclick() {
  var resp = ProcessingService.CheckSession(CheckSessionComplete);
}
function CheckSessionComplete(resp) {
  if (resp == true) {
    showMsg("Please swipe the card now.", "Ok", "Swipe Card", null);
    DataRead.value = "false";
    CardNumberX.value = "";
    CardNumberSwipe.value = "";
    CardNumberX.style.display = "";
    TrackData.value = "";
    CardNumberX.focus();
  } else {
    window.location = "SessionTimeOut.aspx";
  }
}
//Added by Senthilraja on 28th April 2009 for checking Session, when clicking Swip Card button.
function btnSwipeParentCard_onclick() {
  var resp = ProcessingService.CheckSession(CheckSessionOnComplete);
}
function CheckSessionOnComplete(resp) {
  if (resp == true) {
    showMsg("Please swipe the Primary Card now.", "Ok", "Swipe Card", null);
    ParentDataRead.value = "false";
    ParentCardNumberX.value = "";
    ParentCardNumberSwipe.value = "";
    ParentCardNumberX.style.display = "";
    ParentTrackData.value = "";
    ParentCardNumberX.focus();
  } else {
    window.location = "SessionTimeOut.aspx";
  }
}

function ReadMessage(message) {
  var resMsg = message
    .split("[Break]")
    .join("<br />")
    .split("[LINE]")
    .join("<hr />")
    .split("[")
    .join("<")
    .split("]")
    .join(">");

  return resMsg;
}
