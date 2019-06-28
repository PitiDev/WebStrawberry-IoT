	const appid = "LaoSmartfarm";
	const appkey = "qoRirhYkslTXbdI";
	const appsecret = "9ZMCHFs4YGTYUHhbTZ3zzYxCe";

	var microgear = Microgear.create({
        key: appkey,
        secret: appsecret,
        alias : "dht2"
	});

	microgear.on('message',function(topic,msg) {
		var split_msg = msg.split(",");
		console.log(msg);

		if(typeof(split_msg[3])=='undefined' || split_msg[3] == 'esp8266'){
				document.getElementById("name").innerHTML = split_msg[3].toUpperCase();
				temp.refresh(split_msg[0]);
				humid.refresh(split_msg[1]);
				light.refresh(Math.ceil(split_msg[2]));
		}
	});

	microgear.on('connected', function() {
		microgear.subscribe("/dht2");
		document.getElementById("data").innerHTML = "<h5>ສະຖານະ:<FONT color=#00BB00>ONLINE</FONT></h5>";
	});

	microgear.on('disconnected', function() {
		document.getElementById("data").innerHTML = "<h5>ສະຖານະ:<FONT color=#00BB00>OFFLINE</FONT></h5>";
	});

	microgear.connect(appid);

	// Design  =======================================================================================

	var temp,humid,light;

	window.onload = function(){
		temp = new JustGage({
			id: "temp",
			value: 0.0,
			decimals: 2,
			min: 0.0,
			max: 100.0,
			title: "",
			label: "C",
			showMinMax: false,
			levelColors: ["#76FF03","#C6FF00","#F57C00"]
		});

		humid = new JustGage({
			id: "humid",
			value: 0.0,
			decimals: 2,
			min: 0.0,
			max: 100.0,
			title: "",
			label: "%",
			levelColors: ["#1E88E5","#1565C0","#00897B"]
		});

		light = new JustGage({
			id: "light",
			value: 0.0,
			// decimals: 2,
			min: 0,
			max: 1500,
			title: "",
			label: "%",
			levelColors: ["#00fff6","#ff00fc","#1200ff"]
		});

	};
