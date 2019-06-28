
  const appid = "LaoSmartfarm";
  const appkey = "qoRirhYkslTXbdI";
  const appsecret = "9ZMCHFs4YGTYUHhbTZ3zzYxCe";

  var microgear = Microgear.create({
        key: appkey,
        secret: appsecret,
        alias : "dht1"
  });

  var microgear = Microgear.create({
        key: appkey,
        secret: appsecret,
        alias : "dht2"
  });

//ESP 8266 =================================================
  microgear.on('message',function(topic,msg) {
    var split_msg = msg.split(",");
    console.log(msg);

    if(typeof(split_msg[3])=='undefined' || split_msg[3] == 'esp8266'){
        document.getElementById("device").innerHTML = split_msg[3].toUpperCase();
        temp.refresh(split_msg[0]);
        humid.refresh(split_msg[1]);
        light.refresh(Math.ceil(split_msg[2]));
    }
  });

//DHT1 =====================================================
  microgear.on('connected', function() {
    microgear.subscribe("/dht1");
    document.getElementById("dht1").innerHTML = "ປີດ";
  });

  microgear.on('disconnected', function() {
    document.getElementById("dht1").innerHTML = "<b color=#dc3545>ເປີດ</b>";
  });

//DHT2  ====================================================
  microgear.on('connected', function() {
    microgear.subscribe("/dht2");
    document.getElementById("dht2").innerHTML = "ປີດ";
  });

  microgear.on('disconnected', function() {
    document.getElementById("dht2").innerHTML = "ເປີດ";
  });

  microgear.connect(appid);
