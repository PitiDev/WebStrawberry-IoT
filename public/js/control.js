
  var parameters_string = location.hash.substring(1).split(':');
	var appid,appkey,appsecret;

    if (parameters_string.length==3) {
		appid = parameters_string[0];
		appkey = parameters_string[1];
		appsecret = parameters_string[2];
	}else{
		console.log('appid or auth invalid<br>http://'+window.location.host+window.location.pathname+'#APPID:KEY:SECRET');
	}

	const APPKEY = "qoRirhYkslTXbdI";
    const APPSECRET = "9ZMCHFs4YGTYUHhbTZ3zzYxCe";
    const APPID = "LaoSmartfarm";
    const ALIAS = "Plug";

	var microgear = Microgear.create({
		gearkey: APPKEY,
		gearsecret: APPSECRET
	});


    // SetUp Relay 1
	function switchPress(){
		if(document.getElementById("relay1").className == "relay1 active"){
			microgear.chat("pieplug","OFF1");
		}else if(document.getElementById("relay1").className == "relay1"){
			microgear.chat("pieplug","ON1");
		}
	}
	// SetUp message Relay 1
	microgear.on('message', function(topic,data) {
		if(data=="ON1"){
			document.getElementById("relay1").className = "relay1 active";
		}else if(data=="OFF1"){
			document.getElementById("relay1").className = "relay1";
		}
	});

	microgear.on('connected', function() {
		microgear.setname('controllerplug');
		document.getElementById("relay1").className = "relay1 active";
		document.getElementById("relay1").style.display = "block";
	});

	// SetUp Relay 2 ===============================================================
	function switchPressTwo(){
		if(document.getElementById("relay2").className == "relay2 active"){
			microgear.chat("pieplug","OFF2");
		}else if(document.getElementById("relay2").className == "relay2"){
			microgear.chat("pieplug","ON2");
		}
	}

	// SetUp message Relay 2
	microgear.on('message', function(topic,data) {
		if(data=="ON2"){
			document.getElementById("relay2").className = "relay2 active";
		}else if(data=="OFF2"){
			document.getElementById("relay2").className = "relay2";
		}
	});

	microgear.on('connected', function() {
		microgear.setname('controllerplug');
		document.getElementById("relay2").className = "relay2 active";
		document.getElementById("relay2").style.display = "block";
	});

	// SetUp Relay 3 ===============================================================
	function switchPressThree(){
		if(document.getElementById("relay3").className == "relay3 active"){
			microgear.chat("pieplug","OFF3");
		}else if(document.getElementById("relay3").className == "relay3"){
			microgear.chat("pieplug","ON3");
		}
	}

	// SetUp message Relay 3
	microgear.on('message', function(topic,data) {
		if(data=="ON3"){
			document.getElementById("relay3").className = "relay3 active";
		}else if(data=="OFF3"){
			document.getElementById("relay3").className = "relay3";
		}
	});

	microgear.on('connected', function() {
		microgear.setname('controllerplug');
		document.getElementById("relay3").className = "relay3 active";
		document.getElementById("relay3").style.display = "block";
	});
	//End Relay 3

	// SetUp Relay 4 ===============================================================
	function switchPressFour(){
		if(document.getElementById("relay4").className == "relay4 active"){
			microgear.chat("pieplug","OFF4");
		}else if(document.getElementById("relay4").className == "relay4"){
			microgear.chat("pieplug","ON4");
		}
	}

	// SetUp message Relay 4
	microgear.on('message', function(topic,data) {
		if(data=="ON4"){
			document.getElementById("relay4").className = "relay4 active";
		}else if(data=="OFF4"){
			document.getElementById("relay4").className = "relay4";
		}
	});

	microgear.on('connected', function() {
		microgear.setname('controllerplug');
		document.getElementById("relay4").className = "relay4 active";
		document.getElementById("relay4").style.display = "block";
	});


	microgear.resettoken();
	microgear.connect(APPID);


//Status Control ==================================================================================
 function relay1_on() {
   document.getElementById("status1").innerHTML = "ເປີດ";
 }
 function relay1_off() {
   document.getElementById("status1").innerHTML = "ປິດ";
 }
 	//Status Control
 function relay2_on() {
   document.getElementById("status2").innerHTML = "ເປີດ";
 }
 function relay2_off() {
   document.getElementById("status2").innerHTML = "ປິດ";
 }
 	//Status Control
 function relay3_on() {
   document.getElementById("status3").innerHTML = "ເປີດ";
 }
 function relay3_off() {
   document.getElementById("status3").innerHTML = "ປິດ";
 }
 	//Status Control
 function relay4_on() {
   document.getElementById("status4").innerHTML = "ເປີດ";
 }
 function relay4_off() {
   document.getElementById("status4").innerHTML = "ປິດ";
 }
