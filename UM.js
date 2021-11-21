 window.addEventListener("load",function(){
   for(var i = new Date().getFullYear(); i > 1900; i--){
      var op = document.createElement("option");
      op.value = i;
      op.innerHTML = i; 
      document.getElementById("Dateofbirthyear").appendChild(op);
    }
    for(var i2 = 0; i2 <= 31; i2++){
      var op2 = document.createElement("option");
      if(i2 == 0){
      op2.value = "Select date";
      op2.innerHTML = "Select date";
      } else {
        op2.value = i2;
        op2.innerHTML = i2;
      }
      document.getElementById("Dateofbirthday").appendChild(op2);
    }
    var montharray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    for(var i = 0; i < 12; i++){
      var op3 = document.createElement("option");
      op3.value = montharray[i];
      op3.innerHTML = montharray[i];
      document.getElementById("Dateofbirthmonth").appendChild(op3)
    }
 })
 var openFile = function(event) {
    var input = event.target;
       
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      var type = input.files[0].type.split("/")
      if(type[0] == "image"){
      output.src = dataURL;
      var date = {
        "profileicon":dataURL
      }
      firebase.database().ref("users").child(c.s_k).update(date);
      } else {
        alert("is it not an image")
      }
      
     
    };
    reader.readAsDataURL(input.files[0]);
  };
  function selectprofileicon(){
    document.getElementById("fileselector").click()
  
  }
  function openprofile(){
    document.getElementById("Un-Meet").style.display = "none";
    document.getElementById("MyProfile").style.display = "block";
  }
  function closemyprofile(){
    document.getElementById("Un-Meet").style.display = "block";
    document.getElementById("MyProfile").style.display = "none";
  }
  function sendmessage(event){
    var e = event.target;
    var replace = document.getElementById(e.getAttribute("data-inputid")).value.replace("<","...");
  var content = "You have a new Messeage from " + event.target.getAttribute("data-to");
  
  var object = {
    "From":user,
    "To":"Tarun",
    "message":replace
  }
  if(document.getElementById(e.getAttribute("data-inputid")).value !== ""){
 firebase.database().ref("Messages").push().set({
     "From":user,
    "To":event.target.getAttribute("data-to"),
    "message":replace,
    "Time":document.getElementById("time").value,
    "type":"message",
    "status":"pending"
  })
  firebase.database().ref("notification").push().set({
    "From":user,
    "To":event.target.getAttribute("data-to"),
    "content":content,
    "Time":document.getElementById("time").value,
    "notificationprofile":"https://i.postimg.cc/QHzSpq2C/users.png",
    "type":"messagenotification",
    "status":"pending"
  })
  } else {
    alert("empty messages can't send")
  }
  setTimeout(function() {
    document.getElementById(e.getAttribute("data-inputid")).value = ""
    document.getElementById(e.getAttribute("data-micid")).style.display = "block";
    document.getElementById(e.getAttribute("data-inputid")).focus()
    e.style.display = "none";
  }, 100);
  document.querySelector(`.${event.target.getAttribute("data-to")}`).scrollBy(0,100000000);
  console.log(object)
  }
  function delet(event){
  event.target.innerHTML = event.target.getAttribute("data-id");
  }
  setInterval(function(){
     var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var date = now.getDate();
    
    
    var getday = now.getDay();
    var dayarray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var day = dayarray[getday];
    
    var getmonth = now.getMonth();
    var montharray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var month = montharray[getmonth];
    if(minutes >= 9){
    var time = hours + ":" + minutes + " " + day + " " + date + " " + month;
    } else if(minutes <= 10){
      var time = hours + ":" + "0" + minutes + " " + day + " " + date + " " + month;
    }
    document.getElementById("time").value = time;
  })
  function changetomicortelegram(event){
    var e = event.target;
    if(event.target.value == ""){
      document.getElementById(e.getAttribute("data-micid")).style.display = "block";
      document.getElementById(e.getAttribute("data-telegramid")).style.display = "none";
    }
    else if(event.target.value !== ""){
      document.getElementById(e.getAttribute("data-micid")).style.display = "none";
      document.getElementById(e.getAttribute("data-telegramid")).style.display = "block";
    }
  }
  function simplesending(){
    var messages = document.createElement("div");
    var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
   timediv.innerHTML = "<span>"+document.getElementById("time").value+"</span>"
    
    messages.innerHTML = document.querySelector(".area").value;
    
    messages.setAttribute("data-id","This Message was Deleted");
    messages.setAttribute("ondblclick","delet(event)")
  messages.setAttribute("style","max-width: 300px;background: #F7FCF6;	padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:white;	position:relative;	left:10%;	background:rgb(49,121,255);")
  document.getElementById("messagebox").appendChild(messages)
  messages.appendChild(timediv)
  document.getElementById("messagebox").scrollBy(0,100)
  }
  function onmic(event){
    var ec = event.target.getAttribute("class");
    if(ec == "bi bi-mic"){
      event.target.setAttribute("class","bi bi-check2")
      startrecord(event.target.getAttribute("data-to"), event.target.getAttribute("data-type"));
    } else {
      event.target.setAttribute("class","bi bi-mic")
      stoprecord();
      //ocument.getElementById('stop-record').click()
      
    }
  }
  var chunks = [];
  var recorder;
      function startrecord(to, type){
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = function(e){
          chunks.push(e.data)
          if(recorder.state == "inactive"){
            var blob = new Blob(chunks, { type: "audio/webm" });
            var url = URL.createObjectURL(blob);
            var reader = new FileReader();
reader.addEventListener("load", function(){
              
            //  document.getElementById("audio").src = reader.result;
              /*var au = document.createElement("audio");
              au.src = reader.result;
              au.controls = "controls";
              au.setAttribute("style","margin:20px 0px; float:right;")
              console.log(reader.result)
              document.getElementById("messagebox").appendChild(au)*/
              if(type !== "group"){
              firebase.database().ref("Messages").push().set({
     "From":user,
    "To":to,
    "message":reader.result,
    "Time":document.getElementById("time").value,
    "type":"audio",
    "status":"pending"
  })
              } else {
                firebase.database().ref("Groupmessages").push().set({
    "From":user,
    "message":reader.result,
    "To":to,
    "Time":document.getElementById("time").value,
    "type":"audio"
  })
              }
            
 // document.getElementById("messagebox").scrollBy(0,100000000);
            },false);
            reader.readAsDataURL(blob);
          }
        }
        recorder.start(1000);
      })
      }
      function stoprecord(){
        recorder.stop();
      }
      function sendfile(event){
        var m = document.getElementById("drop-down-menu");
        
        if(event.target.getAttribute("data-type") == "singlemessage"){
        document.getElementById("uploadimagebutton").setAttribute("data-to",event.target.getAttribute("data-to"));
        document.getElementById("uploadimagebutton").setAttribute("data-type","singlemessage");
        
        document.getElementById("uploadvideobutton").setAttribute("data-to",event.target.getAttribute("data-to"));
        document.getElementById("uploadvideobutton").setAttribute("data-type","singlemessage");
        } else {
          document.getElementById("uploadimagebutton").setAttribute("data-to",event.target.getAttribute("data-to"));
          document.getElementById("uploadimagebutton").setAttribute("data-type","groupmessage");
        document.getElementById("uploadvideobutton").setAttribute("data-to",event.target.getAttribute("data-to"));
        document.getElementById("uploadvideobutton").setAttribute("data-type","groupmessage");
        }
        
        if(m.style.display == "none"){
          m.style.display = "block"
        } else {
          m.style.display = "none"
        }
      }
      var sendimage = function(event) {
    var input = event.target;
    
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('uploadimage');
      output.src = dataURL;
      
      document.getElementById("uploadimagepage").style.display = "block";
    //  localStorage.setItem("pe",dataURL);
    };
    reader.readAsDataURL(input.files[0]);
  };
  function uploadimage(event){
    if(event.target.getAttribute("data-type") == "singlemessage"){
             firebase.database().ref("Messages").push().set({
     "From":user,
    "To":event.target.getAttribute("data-to"),
    "message":document.getElementById("uploadimage").src,
    "Time":document.getElementById("time").value,
    "type":"image",
    "status":'pending'
  })
    } else {
     // alert(event.target.getAttribute("data-type"))
     firebase.database().ref("Groupmessages").push().set({
    "From":user,
    "message":document.getElementById("uploadimage").src,
    "To":event.target.getAttribute("data-to"),
    "Time":document.getElementById("time").value,
    "type":"image"
  })
    }
      document.getElementById("uploadimagepage").style.display = "none";
  }
  function displayemojibox(event){
    var box = document.getElementById("emoji-box");
    inputid = event.target.getAttribute("data-inputid");
    micid = event.target.getAttribute("data-micid");
    telegramid = event.target.getAttribute("data-telegramid");
    if(box.style.display == "none"){
      box.style.display = "grid"
    } else {
      box.style.display = "none"
    }
  }
  var sendvideo = function(event) {
    var input = event.target;
    
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('uploadvideo');
      output.src = dataURL;
      document.getElementById("uploadvideopage").style.display = "block";
    //  localStorage.setItem("pe",dataURL);
    };
    reader.readAsDataURL(input.files[0]);
  }
  function uploadvideo(event){
    if(event.target.getAttribute("data-type") == "singlemessage"){
    firebase.database().ref("Messages").push().set({
     "From":user,
    "To":event.target.getAttribute("data-to"),
    "message":document.getElementById("uploadvideo").src,
    "Time":document.getElementById("time").value,
    "type":"video",
    "status":"pending"
  })
    } else {
      //alert(event.target.getAttribute("data-type"))
      firebase.database().ref("Groupmessages").push().set({
    "From":user,
    "message":document.getElementById("uploadvideo").src,
    "To":event.target.getAttribute("data-to"),
    "Time":document.getElementById("time").value,
    "type":"video"
  })
    }
  document.getElementById("uploadvideopage").style.display = "none";
  document.getElementById("uploadvideo").src = "";
  }
  // My data idea
  function displayblockornone(event){
    document.getElementById("drop-down-menu").style.display = "none";
    document.getElementById(event.target.getAttribute("data-block")).style.display = "block";
    document.getElementById(event.target.getAttribute("data-none")).style.display = "none";
    if(event.target.getAttribute("data-for") == "updatestatus"){
      for(var i = 0; i < pending_snapkeys.length; i++){
        console.log(pending_snapkeys[i])
        firebase.database().ref("Messages").child(pending_snapkeys[i]).update({
          "status":"Seen"
        });
      }
    }
    else if(event.target.getAttribute("data-for") == "checked-false"){
      var checkbox = document.querySelectorAll(".inputcheckboxforgroup");
      checkbox.forEach(checkbox => {
        checkbox.checked = false;
      })
      document.getElementById("newgroupmembersname").innerHTML = "";
      document.querySelector(".createnewgroupbutton").setAttribute("data-updatesnapkey","");
    } else if(event.target.getAttribute("data-for") == "uns"){
for(var y = 0; y < nsnsk.length; y++){
      console.log(nsnsk[y])
        var date = {
        "status":"seen"
        }
  firebase.database().ref("notification").child(nsnsk[y]).update(date);
      
    }
    }
  }
  function openmenu(){
        if(document.querySelector(".dropdown-content").style.display == "block"){
    document.querySelector(".dropdown-content").style.display = "none";
    } else {
      document.querySelector(".dropdown-content").style.display = "block";
    }
  }
function createnewchat(){
  var chatwanted = document.getElementById("newmessagesto").value;
  for(var i = 0;  i < username.length; i++){
    if(document.getElementById("newmessagesto").value == username[i]){
      if(document.getElementById(`${chatwanted}mb`) == null){
  firebase.database().ref("Newchat").push().set({
      "name":user,
      "chatwanted":chatwanted,
      "myicon":myicon,
      "chatwantedicon":profileicon[i],
      "time":document.getElementById("time").value
  })
      } else {
        document.getElementById("Newchat").style.display = "none";
        document.getElementById(`${chatwanted}mb`).style.display = "block";
        alert("The chat you wanted is already in your chat list")
      }
}
  }
}
function addtogroup(event){
  //alert(event.target.getAttribute("data-name"))
  if(event.target.checked == true){
    document.getElementById("newgroupmembersname").innerHTML += event.target.getAttribute("data-name") + "|"
    document.getElementById("newgroupmembersemail").innerHTML += event.target.getAttribute("data-email") + "|"
  } else {
   var remove = document.getElementById("newgroupmembersname").innerHTML.replace(event.target.getAttribute("data-name")+"|","");
   var emailremove = document.getElementById("newgroupmembersemail").innerHTML.replace(event.target.getAttribute("data-email")+"|","");
    document.getElementById("newgroupmembersname").innerHTML = remove;
    document.getElementById("newgroupmembersemail").innerHTML = emailremove;
 //   console.log(document.getElementById("newgroupmembersname").innerHTML.split("|"))
  }
}
function createnewgroup(event){
  
 /* var object = {
    "groupname":groupname,
    "members":document.getElementById("newgroupmembersname").innerHTML+user+"|",
    "time":document.getElementById("time").value,
    "groupadmin":user
  }*/
  if(event.target.getAttribute("data-updatesnapkey") == ""){
    var groupname = window.prompt("Enter Name of group").replace(" ","-");
  firebase.database().ref("Newgroup").push().set({
      "groupname":groupname,
    "members":document.getElementById("newgroupmembersname").innerHTML+user+"|",
   // "membersemail":document.getElementById("newgroupmembersemail").innerHTML+myemail+"|",
    "time":document.getElementById("time").value,
    "groupadmin":user,
    "groupicon":"https://i.postimg.cc/QHzSpq2C/users.png"
  })
  } else {
    var date = {
        "members":document.getElementById("newgroupmembersname").innerHTML+user+"|"
  }
  firebase.database().ref("Newgroup").child(event.target.getAttribute("data-updatesnapkey")).update(date);
  }
  //console.log(object)
}
function displayblock(event){
  document.getElementById(event.target.getAttribute("data-block")).style.display = "block";
}
function displaynone(event){
  document.getElementById(event.target.getAttribute("data-none")).style.display = "none";
  console.log(document.getElementById(event.target.getAttribute("data-none")))
}
function deletemessage(event){
  var snapkey = event.target.getAttribute("data-snapkey");
  var date = {
    "message":"This message was deleted by publisher",
    "Time":""
  }
  if(window.confirm("Are you sure you want to delete message")){
    if(event.target.getAttribute("data-type") !== "Groupmessages"){
  firebase.database().ref("Messages").child(snapkey).update(date);
    } else {
      firebase.database().ref("Groupmessages").child(snapkey).update(date);
    }
event.target.removeAttribute("ondblclick")
  }
}
function updategroupname(event){
  var newgroupname = window.prompt("Enter new name for group").replace(" ","-");
  var date = {
    "groupname":newgroupname
  }
  firebase.database().ref("Newgroup").child(event.target.getAttribute("data-snapkey")).update(date)
}
function addparticpentsforgroup(event){
  var groupmembers = event.target.getAttribute("data-groupmembers").split("|");
  for(var i = 0; i < groupmembers.length; i++){
      console.log(groupmembers[i])
    if(groupmembers[i] !== user && groupmembers[i] !== ""){
  document.getElementById("newgroupmembersname").innerHTML = event.target.getAttribute("data-groupmembers").replace(user+"|","");
   document.getElementById(`${groupmembers[i]}groupmemberscheckbox`).checked = true;
   document.querySelector(".createnewgroupbutton").setAttribute("data-updatesnapkey",event.target.getAttribute("data-snapkey"))
    }
  } 
  document.getElementById(event.target.getAttribute("data-groupinfoid")).style.display = "none";
  document.getElementById("Newgroup").style.display = "block";
}
var changegroupicon = function(event) {
    var input = event.target;
       
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      var type = input.files[0].type.split("/")
      if(type[0] == "image"){
        document.getElementById(event.target.getAttribute("data-imgid")).src = dataURL;
      var date = {
        "groupicon":dataURL
      }
      firebase.database().ref("Newgroup").child(event.target.getAttribute("data-snapkey")).update(date);
      } else {
        alert("is it not an image")
      }
      
     
    };
    reader.readAsDataURL(input.files[0]);
  };
  function removegroupicon(event){
    var date = {
      "groupicon":"https://i.postimg.cc/QHzSpq2C/users.png"
    }
    firebase.database().ref("Newgroup").child(event.target.getAttribute("data-snapkey")).update(date);
  }
  function removenotification(event){
    firebase.database().ref("notification").child(event.target.getAttribute("data-snapkey")).remove();
  }
  function removemembers(event){
    var e = event.target;
    var removemembername = event.target.innerHTML;
    var remove = event.target.getAttribute("data-groupmembers").replace(removemembername+"|","")
    document.getElementById("removeorkeepasadmindiv").style.display = "block";
    document.getElementById("removeorkeepasadmindiv1p").setAttribute("data-snapkey",e.getAttribute("data-snapkey"))
    document.getElementById("removeorkeepasadmindiv1p").setAttribute("data-groupmembers",e.getAttribute("data-groupmembers"))
    document.getElementById("removeorkeepasadmindiv1p").setAttribute("data-removemember",e.innerHTML)
    document.getElementById("removeorkeepasadmindiv1p").setAttribute("data-removeid",e.getAttribute("id"))
    document.getElementById("removeorkeepasadmindiv1p").innerHTML = "Remove "+e.innerHTML;
    //<div onclick="removemembers(event);" id="${groupmembers[y]}groupinfomember${snap.key}" data-snapkey="${snap.key}" data-groupmembers="${snap.val().members}" data-id="messagecomingbox">${groupmembers[y]}</div>
  }
  function removemembers2(event){
    var removefrom = event.target.getAttribute("data-groupmembers");
    var remove = removefrom.replace(event.target.getAttribute("data-removemember")+"|","")
    if(window.confirm("Are you sure to remove " + event.target.getAttribute("data-removemember"))){
    document.getElementById(event.target.getAttribute("data-removeid")).style.display  = "none";
    var date = {
      "members":remove
    }
    firebase.database().ref("Newgroup").child(event.target.getAttribute("data-snapkey")).update(date);
  }
  }
  function deletegroup(event){
    if(window.confirm("Are you sure to delete group "+event.target.getAttribute("data-groupname"))){
    firebase.database().ref("Newgroup").child(event.target.getAttribute("data-snapkey")).remove();
    }
  }
  function updatestatus(event){
    document.getElementById("Un-Meet").style.display = "none"
    document.getElementById("notification").style.display = "block";
    for(var i = 0; i < nsnsk.length; i++){
      alert(nsnsk[i])
    }
  }
  /*const dbRef = firebase.database().ref();
dbRef.child("messages").child("-Mk_NYFnXn8twSYLb8xV").get().then((snap) => {
  console.log(snap.val())
  //alert(snap.val().sender + ":" + snap.val().message)
}).catch((error) => {
  console.error(error);
});*/