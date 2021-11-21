
var username = [];
var email = [];
var dob = [];
var password = [];
var followers = [];
var following = [];
var profileicon = [];
var snapkey = [];
var left;
var inputid;
var telegramid;
var micid;
//var audioleft;
window.addEventListener("load",function(){
  left = window.innerWidth - 220;
  if(c.s_k == undefined || c.s_k == ""){
  /*  document.getElementById("Loginpage").style.display = "block";
    document.getElementById("Un-Meet").style.display = "none";*/
  }
 // alert(left)
})
/*
"username": username,
       "email": email,
       "dob": dob,
       "password": password,
       "Followers": 0,
       "Following": 0,
        "profileicon": profileicon
*/
    function none(){
      return "#";
    }
    function singup(event){
      var d = document.getElementById("dateofbirth");
      var birthday = document.getElementById("Dateofbirthday");
      var birthyear = document.getElementById("Dateofbirthyear");
      var birthmonth = document.getElementById("Dateofbirthmonth");
      var Email = document.getElementById("Email");
      
      if(d.style.display == "block" && birthday.value !== "Select Day" && birthyear.value !== "Select Year"){
       //console.log(birthday.value + "-" + birthmonth.value + "-" + birthyear.value)
        document.getElementById("Email").style.display = "block";
        document.getElementById("Titleofdateofbirth").style.display = "none";
        document.getElementById("Dateofbirthyear").style.display = "none";
        document.getElementById("Dateofbirthday").style.display = "none";
        document.getElementById("Dateofbirthmonth").style.display = "none";
        document.getElementById("age").style.display = "none";
      } if(Email.style.display == "block" && Email.value !== ""){
       
       document.getElementById("newpassword").style.display = "block";
       document.getElementById("Email").style.display = "none";
       document.getElementById("button2").style.display = "block";
       document.getElementById("singupbutton").style.display = "none";
      }
     
      var e = event.target;
      
    var name1value = document.querySelector(".Name1").value;

    if(name1value !== ""){
      document.querySelector(".Name1").style.display = "none";
      
      document.querySelector("#dateofbirth").style.display = "block";
    //  e.innerHTML = "Confirm";
    } else {
      alert("please fill out the filed")
    }
    
    
    
    
  
    }
    
    
    
    
    
    
    
    
    
    function findage2(){
      var datevalue = document.getElementById("Dateofbirthday").value;
      var evalue = document.getElementById("Dateofbirthyear").value;
      var year = new Date().getFullYear();
      if(evalue !== "Select Year"){
        var age = year - evalue;
        var newdate = new Date();
        
        document.getElementById("age").innerHTML = age + " " + "years old";
      } else {
            document.getElementById("age").innerHTML = "";
      }
      
    }
    
    
    
    
    
    
  
    
    //Sending Email
    var Body = Math.floor(Math.random() * 10000) + 1000;

     function sendmail(){
    
			var name = $('#Name').val();
			var email = $('#Email').val();
			var subject = $('#Subject').val();
      var message = $('#Message').val();

			// var body = $('#body').val();

			//console.log(name, phone, email, message);

			Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
				To: email,
				From: "harshaerraboina@gmail.com",
				Subject: "New message on contact from Un-Meet",
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					console.log("email sended")
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
						
					}

				}
			);



		}
		
		
		/////////Add data
		function adddata(){
     var firstname = document.querySelector(".Name1").value;

     var username = firstname.replace(" ","-");
     var email = document.getElementById("Email").value;
     var Dateofbirthday = document.getElementById("Dateofbirthday").value;
     var Dateofbirthmonth = document.getElementById("Dateofbirthmonth").value;
     var Dateofbirthyear = document.getElementById("Dateofbirthyear").value;
     var dob = Dateofbirthday + "-" + Dateofbirthmonth + "-" + Dateofbirthyear;
     var password = document.getElementById("newpassword").value;
     var profileicon = "https://i.postimg.cc/JDQhHHXX/default-user-icon-5.png";
     var data = {

       "username": username,
       "email": email,
       "dob": dob,
       "password": password,
       "Followers": 0,
       "Following": 0,
        "profileicon": profileicon
     }
     document.getElementById("Singuppage").style.display = "none";
     firebase.database().ref("users").push().set({

       "username": username,
       "email": email,
       "dob": dob,
       "password": password,
       "Followers": 0,
       "Following": 0,
        "profileicon": profileicon,
        "joined":document.getElementById("time").value
     
     })
     console.log(data)
   }
   var user = "Sourabh";
   var myicon;
   var myemail;
   var c = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({
    ...accumulator,
    [key.trim()]: decodeURIComponent(value)
  }), {});
   
   
   firebase.database().ref("users").on("child_added", function(snap){
     username.push(snap.val().username);
     email.push(snap.val().email)
     dob.push(snap.val().dob)
     password.push(snap.val().password)
     followers.push(snap.val().Followers)
     following.push(snap.val().Following)
     profileicon.push(snap.val().profileicon)
     snapkey.push(snap.key)
     console.log("database added")
    if(c.s_k == snap.key){
      document.getElementById("output").src = snap.val().profileicon;
      document.getElementById("myname").innerHTML = snap.val().username;
  //user = snap.val().username;
  myicon = snap.val().profileicon;
  myemail = snap.val().email;
  /*https://i.postimg.cc/y3CkWfz7/UNMEET-free-file.png*/
   /* document.getElementById("Followingp").innerHTML = "Following<br>"+snap.val().Following;
    document.getElementById("Followersp").innerHTML = "Followers<br>"+snap.val().Followers;*/
    }
    // var prop = document.createElement("p");
     
     /*
     "username": username,
       "email": email,
       "dob": dob,
       "password": password,
       "Followers": 0,
       "Following": 0,
        "profileicon": profileicon
     */
     if(snap.val().username !== user){
     document.getElementById("selectpeoplefornewgroup").innerHTML += `  <div style="width:345px; height:100px; border-bottom:1px solid silver; margin:auto;">
    <div style="width:100; height:100; background:; display:flex; align-items:center; justify-content:center;"><img style="width:50px; clip-path:circle();" src="${snap.val().profileicon}"></div><p style="position:relative; top:-75; left:100;">${snap.val().username}</p>
    <input class="inputcheckboxforgroup" id="${snap.val().username}groupmemberscheckbox" type="checkbox" onclick="addtogroup(event);" data-name="${snap.val().username}" data-email="${snap.val().email}" style="float:right; position:relative; top:-110;">
  </div>`
     }
    /* prop.innerHTML = "<button onclick='dm(this);' data-id='" + snap.key + "'>" + snap.key + "</button>";
     //alert("database added");
     console.log("database added")
 
     document.getElementById("Singuppage").appendChild(prop);*/
     if(c.s_k !== snap.key){
     document.getElementById("addfollowings").innerHTML += `<div data-id="followmebox">
  <div data-id="followimgbox"><img src="${snap.val().profileicon}" style="width:50px; clip-path:circle();"></div>     ${snap.val().username}<br>
        ${snap.val().joined}
        <button onclick="follow(event);" data-following="${snap.val().username}" data-useremail="${snap.val().email}" data-userprofileicon="${snap.val().profileicon}" data-followingkey="" data-id="followmebutton" id="${snap.val().username}followmebutton">Follow</button>
</div>`



document.getElementById("usersprofile").innerHTML += `<div data-id="profilebox">
  <div data-id="usernamebox">
        <p  style="font-size:20; font-family:Comfortaa,cursive;">${snap.val().username}</p>
  </div>
  <div data-id="userprofileiconbox">
    <img src="${snap.val().profileicon}" data-id="userprofileicon">
  </div>
  <br>
  <br>
  <center>
  <button data-id="userfollowbutton">Follow</button>
  <button data-id="usermessagebutton">Message</button>
  </center>
  <div data-id="followersandfollowinglist">
 <div data-id="followersandfollowinglistdiv1">Following<br>${snap.val().Following}</div><div data-id="followersandfollowinglistdiv2">Followers<br>${snap.val().Followers}</div>
  </div>
  <center>
  </center>
</div>`
}

     var values = document.querySelector(".Name1").value;
     if(snap.val().username == values){
       document.cookie = "s_k=" + snap.key + "; expires=Fri, 19 Feb 2275 12:00:00 UTC;";
       console.log(c.username)
       //Fri Feb 19 2275 14:13:20 GMT+0530 (India Standard Time)
     }
   })
   firebase.database().ref("following").on("child_added", function(snap){
     if(snap.val().following == user){
    document.getElementById(`${snap.val().To}followmebutton`).innerHTML = "Following";
     document.getElementById(`${snap.val().To}followmebutton`).style.background = "white";
     document.getElementById(`${snap.val().To}followmebutton`).style.border = "1px solid #077bff";
     document.getElementById(`${snap.val().To}followmebutton`).style.color = "#077bff"
     document.getElementById(`${snap.val().To}followmebutton`).style.left = "40";
     document.getElementById(`${snap.val().To}followmebutton`).setAttribute("data-followingkey",snap.key);
     }
     console.log("following added")
    if(snap.val().To == user || snap.val().following == user){
       if(snap.val().To !== user){
          for(var x = 0; x < username.length; x++){
            if(snap.val().To == username[x]){
     document.querySelector(".messagemebox").innerHTML += `<div class="messagefull" id="${snap.val().To}mb"><div id="Chat">
  <div id="namebox">
    <font size="5">
       <i class="bi bi-arrow-left" onclick="displayblockornone(event);" data-block="Messages" data-none="${snap.val().To}mb"></i>
      <img src="${profileicon[x]}">
      <code id="friendsname" style="font-family:Sans-Serif;">${snap.val().To}</code>
    </font>
  <font size="6">
    <i class="bi bi-card-image" style="position:fixed; top:8; left:90%;" onclick="sendfile(event);" data-type="singlemessage" data-to="${snap.val().To}"></i>


  </font>
  
  </div>
</div>
  <div data-id="messagebox" class="${snap.val().To}">
    
  </div>
  <div id="messagearea">
<textarea class="area" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" id="${snap.key}input" oninput="changetomicortelegram(event);" placeholder="Messeges....."></textarea>
<font size="6">
<i class="bi bi-emoji-smile" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" data-inputid="${snap.key}input" id="emoji-smile" onclick="displayemojibox(event);"></i> 
<i class="bi bi-mic" onclick="onmic(event);"id="${snap.key}mic" data-to="${snap.val().To}" data-id="mic"></i>
<i class="bi bi-telegram" data-micid="${snap.key}mic" data-type="singlemessage" data-email="${snap.val().followingemail}" data-inputid="${snap.key}input" data-toprofileicon="${profileicon[x]}" data-to="${snap.val().To}" data-id="telegram" onclick="sendmessage(event);" id="${snap.key}telegram"></i>
</font>
</div></div>`;
document.getElementById("messagecomingbox").innerHTML += `<div data-id="messagecomingbox" onclick="displayblockornone(event);" data-for="updatestatus" data-none="Messages" data-block="${snap.val().To}mb">
  <div data-id="messagecomingimagebox">
<img src="${profileicon[x]}" alt="${snap.val().To}" data-id="messagecomingimage">
  </div><font size="4" style="position:relative; font-family:Sans-Serif;">${snap.val().To}</font>
</div>`
}
}
} else {
  for(var y = 0; y < username.length; y++){
    if(snap.val().following == username[y]){
  document.querySelector(".messagemebox").innerHTML += `<div class="messagefull" id="${snap.val().following}mb"><div id="Chat">
  <div id="namebox">
    <font size="5">
       <i class="bi bi-arrow-left" onclick="displayblockornone(event);" data-block="Messages" data-none="${snap.val().following}mb"></i>
      <img src="${profileicon[y]}">
      <code id="friendsname" style="font-family:Sans-Serif;">${snap.val().following}</code>
    </font>
  <font size="6">
    <i class="bi bi-card-image" style="position:fixed; top:8; left:90%;" onclick="sendfile(event);" data-type="singlemessage" data-to="${snap.val().following}"></i>


  </font>
  
  </div>
</div>
  <div data-id="messagebox" class="${snap.val().following}">
    
  </div>
  <div id="messagearea">
<textarea class="area" id="${snap.key}input" oninput="changetomicortelegram(event);" placeholder="Messeges....." data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram"></textarea>
<font size="6">
<i class="bi bi-emoji-smile" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" data-inputid="${snap.key}input" id="emoji-smile" onclick="displayemojibox(event);"></i> 
<i class="bi bi-mic" data-to="${snap.val().following}" data-inputid="${snap.key}input" onclick="onmic(event);"id="${snap.key}mic" data-email="${snap.val().myemail}" data-id="mic"></i>
<i class="bi bi-telegram" data-micid="${snap.key}mic" data-type="singlemessage" data-id="telegram" data-inputid="${snap.key}input" data-toprofileicon="${profileicon[y]}" data-to="${snap.val().following}" onclick="sendmessage(event);" id="${snap.key}telegram"></i>
</font>
</div></div>`;
document.getElementById("messagecomingbox").innerHTML += `<div data-id="messagecomingbox" onclick="displayblockornone(event);" data-for="updatestatus" data-block="${snap.val().following}mb" data-none="Messages">
  <div data-id="messagecomingimagebox">
<img src="${profileicon[y]}" alt="${snap.val().following}" data-id="messagecomingimage">
  </div><font size="4" style="position:relative; font-family:Sans-Serif;">${snap.val().following}</font>
</div>`
}
}
}
    }
  })// -|
  
  firebase.database().ref("Newchat").on("child_added", function(snap){
    console.log(`${snap.val().name} wanted ${snap.val().chatwanted} Newchat ${snap.key}`)
   if(snap.val().name == user){
     for(var z = 0; z < username.length; z++){
       if(snap.val().chatwanted == username[z]){
     document.querySelector(".messagemebox").innerHTML += `<div class="messagefull" id="${snap.val().chatwanted}mb"><div id="Chat">
  <div id="namebox">
    <font size="5">
       <i class="bi bi-arrow-left" onclick="displayblockornone(event);" data-block="Messages" data-none="${snap.val().chatwanted}mb"></i>
      <img src="${profileicon[z]}">
      <code id="friendsname" style="font-family:Sans-Serif;">${snap.val().chatwanted}</code>
    </font>
  <font size="6">
    <i class="bi bi-card-image" style="position:fixed; top:8; left:90%;" onclick="sendfile(event);" data-type="singlemessage" data-to="${snap.val().chatwanted}"></i>


  </font>
  
  </div>
</div>
  <div data-id="messagebox" class="${snap.val().chatwanted}">
    
  </div>
  <div id="messagearea">
<textarea class="area" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" id="${snap.key}input" oninput="changetomicortelegram(event);" placeholder="Messeges....."></textarea>
<font size="6">
<i class="bi bi-emoji-smile" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" data-inputid="${snap.key}input" id="emoji-smile" onclick="displayemojibox(event);"></i> 
<i class="bi bi-mic" onclick="onmic(event);"id="${snap.key}mic" data-to="${snap.val().chatwanted}" data-id="mic"></i>
<i class="bi bi-telegram" data-micid="${snap.key}mic" data-type="singlemessage" data-inputid="${snap.key}input" data-toprofileicon="${profileicon[z]}" data-to="${snap.val().chatwanted}" data-id="telegram" onclick="sendmessage(event);" id="${snap.key}telegram"></i>
</font>
</div></div>`;
  document.getElementById("messagecomingbox").innerHTML += `<div data-id="messagecomingbox" onclick="displayblockornone(event);" data-for="updatestatus" data-block="${snap.val().chatwanted}mb" data-none="Messages">
  <div data-id="messagecomingimagebox">
<img src="${profileicon[z]}" alt="${snap.val().chatwanted}" data-id="messagecomingimage">
  </div><font size="4" style="position:relative; font-family:Sans-Serif;">${snap.val().chatwanted}</font>
</div>`



} 
} 
} 

else if(snap.val().chatwanted == user){
  for(var y = 0; y < username.length; y++){
    if(snap.val().name == username[y]){
  
  document.querySelector(".messagemebox").innerHTML += `<div class="messagefull" id="${snap.val().name}mb"><div id="Chat">
  <div id="namebox">
    <font size="5">
       <i class="bi bi-arrow-left" onclick="displayblockornone(event);" data-block="Messages" data-none="${snap.val().name}mb"></i>
      <img src="${profileicon[y]}">
      <code id="friendsname" style="font-family:Sans-Serif;">${snap.val().name}</code>
    </font>
  <font size="6">
    <i class="bi bi-card-image" style="position:fixed; top:8; left:90%;" onclick="sendfile(event);" data-to="${snap.val().name}"></i>


  </font>
  
  </div>
</div>
  <div data-id="messagebox" class="${snap.val().name}">
    
  </div>
  <div id="messagearea">
<textarea class="area" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" id="${snap.key}input" oninput="changetomicortelegram(event);" placeholder="Messeges....."></textarea>
<font size="6">
<i class="bi bi-emoji-smile" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" data-inputid="${snap.key}input" id="emoji-smile" onclick="displayemojibox(event);"></i> 
<i class="bi bi-mic" onclick="onmic(event);"id="${snap.key}mic" data-to="${snap.val().name}" data-id="mic"></i>
<i class="bi bi-telegram" data-micid="${snap.key}mic" data-type="singlemessage" data-inputid="${snap.key}input" data-toprofileicon="${profileicon[y]}" data-to="${snap.val().name}" data-id="telegram" onclick="sendmessage(event);" id="${snap.key}telegram"></i>
</font>
</div></div>`;
  document.getElementById("messagecomingbox").innerHTML += `<div data-id="messagecomingbox" onclick="displayblockornone(event);" data-for="updatestatus" data-block="${snap.val().name}mb" data-none="Messages">
  <div data-id="messagecomingimagebox">
<img src="${profileicon[y]}" alt="${snap.val().name}" data-id="messagecomingimage">
  </div><font size="4" style="position:relative; font-family:Sans-Serif;">${snap.val().name}</font>
</div>`



}
}
}
})
  
  
  
   function dm(self){
  var mid = self.getAttribute("data-id");
  firebase.database().ref("users").child(mid).remove();
  
}
firebase.database().ref("Messages").on("child_removed", function(snap){
  alert()
})
window.onload = function(){
  if(c.s_k !== undefined || c.s_k !== ""){
//  document.getElementById("Singuppage").style.display = "none"
  }
    
  }
  function sp(){
    
    var e = document.getElementById("i").getAttribute("class");
    var ev = document.getElementById("i");
    if(e == "bi bi-eye-slash"){
      ev.setAttribute("class","bi bi-eye");
      document.querySelector(".loginpasswordinput").type = "text";
    } else {
       ev.setAttribute("class","bi bi-eye-slash");
       document.querySelector(".loginpasswordinput").type = "password";
    }
   // console.log(e)
  }
  function displaysinguppage(event){
    document.getElementById("Loginpage").style.display = "none";
    document.getElementById("Singuppage").style.display = "block";
    event.target.style.display = "none";
  } 
  function displaylogipage(event){
      document.getElementById("Loginpage").style.display = "block";
    document.getElementById("Singuppage").style.display = "none";
    
    document.querySelector(".newacountbutton").style.display = "block";
  }
  function checkifusernameisalreadytaken(event){
    for(var i = 0; i < username.length; i++){
      if(event.target.value == username[i]){
        event.target.style.borderColor = "red";
        document.getElementById("singupbutton").style.display = "none";
      } else {
        event.target.style.borderColor = "dodgerblue";
        document.getElementById("singupbutton").style.display = "block";
      }
    }
  }
  var pending_snapkeys = [];
  var messagesnotificationcount = 0;
  firebase.database().ref("Messages").on("child_added", function(snap){
    if(snap.val().type == "message"){
      if(snap.val().From == user){
        document.querySelector(".messagesoptionsmenu").innerHTML += ` <div data-id="options">
  <div data-id="dropdown-content" id="${snap.key}options">
<p style="position:relative; left:60;"><i class="bi bi-x" onclick="displaynone(event);" data-none="${snap.key}options" ></i></p>
    <p style="color:red;">Block</p>
    <p>Mark</p>
    <p data-snapkey="${snap.key}" onclick="deletemessage(event);">Delete</p>
  </div>
</div>`;
  /*      var li = document.createElement('li');
        li.setAttribute("style","position:relative; left:80%;")
        li.innerHTML = snap.val().message;
        document.querySelector(`.${snap.val().To}`).appendChild(li)*/
        
        var messages = document.createElement("div");
    var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
  //  var replace = document.querySelector(".messageinput").value.replace("<","...")
    messages.innerHTML = snap.val().message;
    
    if(snap.val().message !== "This message was deleted by publisher"){
    messages.setAttribute("ondblclick","displayblock(event)");
    messages.setAttribute("data-block",`${snap.key}options`);
    }
    messages.setAttribute("id",snap.key);
    
  messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:white;	position:relative;	left:${left};	background:rgb(49,121,255); overflow:scroll;-webkit-user-select:none;
    -moz-user-select:none;
    -o-user-select:none;
    -user-select:none;`)
  var i5 = setInterval(function(){
document.querySelector(`.${snap.val().To}`).scrollBy(0,1000)
  },1)
  setTimeout(function(){
    clearInterval(i5)
  },1000)
  
  document.querySelector(`.${snap.val().To}`.replace(" ",".")).appendChild(messages)
  messages.appendChild(timediv)
      } else if(snap.val().To == user){
        if(snap.val().status == "pending"){
          pending_snapkeys.push(snap.key)
          messagesnotificationcount++;
          document.getElementById("notificationcountformessages").innerHTML = messagesnotificationcount;
        }
    /*    var li = document.createElement('li');
        li.setAttribute("style","position:relative; left:0;")
        li.innerHTML = snap.val().message;
        document.querySelector(`.${snap.val().From}`).appendChild(li)*/
        var messages = document.createElement("div");
messages.innerHTML = snap.val().message;
messages.setAttribute("style","max-width: 200px; ;	padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative; background:lightgreen; overflow:scroll;")
//messages.style.background = "white";
var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
var is = setInterval(function(){
document.querySelector(`.${snap.val().From}`).scrollBy(0,10000)
  },1)
  setTimeout(function(){
    clearInterval(is)
  },1000)
document.querySelector(`.${snap.val().From}`.replace(" ",".")).appendChild(messages)
messages.appendChild(timediv)
      }
    } else if(snap.val().type == "audio"){
      if(snap.val().From == user){
      var au = window.innerWidth - 300;
    var audiodiv = document.createElement("div");
    
    
    audiodiv.setAttribute("style",`width:300px; height:50px;  margin:20px 0px; position:relative; left:${au};`);
    var audio = document.createElement("audio");
    audio.src = snap.val().message;
     document.querySelector(".messagesoptionsmenu").innerHTML += ` <div data-id="options">
  <div data-id="dropdown-content" id="${snap.key}options">
<p style="position:relative; left:60;"><i class="bi bi-x" onclick="displaynone(event);" data-none="${snap.key}options" ></i></p>
    <p style="color:red;">Block</p>
    <p>Mark</p>
    <p data-snapkey="${snap.key}" onclick="deletemessage(event);">Delete</p>
  </div>
</div>`;
audio.setAttribute("data-block",`${snap.key}options`)
    audio.setAttribute("onmouseover","displayblock(event);")
    audio.setAttribute("id",snap.key)
    audio.controls = "controls"
    document.querySelector(`.${snap.val().To}`.replace(" ",".")).appendChild(audiodiv);
    audiodiv.appendChild(audio)
    } else if(snap.val().To == user){
      if(snap.val().status == "pending"){
          pending_snapkeys.push(snap.key)
          messagesnotificationcount++;
          document.getElementById("notificationcountformessages").innerHTML = messagesnotificationcount;
        }
      // = window.innerWidth - 325;
    var audiodiv = document.createElement("div");
    
    var p = document.createElement("p");
    p.innerHTML = snap.val().Time;
    p.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px; font-family:Sans-Serif; position:relative; z-index:10; left:-2; top:-10;")
    
    audiodiv.setAttribute("style",`width:300px; height:50px;  margin:20px 0px; position:relative;`);
    var audio = document.createElement("audio");
    audio.src = snap.val().message;
    audio.controls = "controls"
    document.querySelector(`.${snap.val().From}`.replace(" ",".")).appendChild(audiodiv);
    audiodiv.appendChild(audio)
    audiodiv.appendChild(p)
    }
    }
    else if(snap.val().type == "image"){
      if(snap.val().From == user){
        var messages = document.createElement("div");
        if(snap.val().message !== "This message was deleted by publisher"){
          document.querySelector(".messagesoptionsmenu").innerHTML += ` <div data-id="options">
  <div data-id="dropdown-content" id="${snap.key}options">
<p style="position:relative; left:60;"><i class="bi bi-x" onclick="displaynone(event);" data-none="${snap.key}options" ></i></p>
    <p style="color:red;">Block</p>
    <p>Mark</p>
    <p data-snapkey="${snap.key}" onclick="deletemessage(event);">Delete</p>
  </div>
</div>`;
messages.innerHTML = `<img ondblclick="displayblock(event);" data-block="${snap.key}options" src="${snap.val().message}" style="width:179px; clip-path:inset();">`;
messages.setAttribute("id",snap.key)
} else {
  messages.innerHTML = `This message was deleted by publisher`;
}
//1 = window.innerWidth - 220;
messages.setAttribute("style",`max-width: 180px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:white;	position:relative; left:${left}; background:rgb(49,121,255); overflow:scroll;`)
var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
    if(snap.val().message !== "This message was deleted by publisher"){
    timediv.innerHTML = snap.val().Time
    } else {
      timediv.innerHTML = "";
    }
document.querySelector(`.${snap.val().To}`.replace(" ",".")).appendChild(messages)
messages.appendChild(timediv)
      } else if(snap.val().To == user){
                var messages = document.createElement("div");
  if(snap.val().message !== "This message was deleted by publisher"){
messages.innerHTML = `<img src="${snap.val().message}" style="width:199px; clip-path:inset();">`;
messages.setAttribute("style",`max-width: 200px; ;	padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative;  background:whitesmoke; overflow:scroll;`)
} else {
  messages.innerHTML = "This message was deleted by publisher"
  messages.setAttribute("style",`max-width: 200px; ;	padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative;  background:lightgreen; overflow:scroll;`)
}
// = window.innerWidth - 221;

var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px;")
    if(snap.val().message !== "This message was deleted by publisher"){
    timediv.innerHTML = snap.val().Time
    } else {
      timediv.innerHTML = ""
    }
document.querySelector(`.${snap.val().From}`.replace(" ",".")).appendChild(messages)
messages.appendChild(timediv)
      }
    }
    
    else if(snap.val().type == "video"){
       if(snap.val().From == user){
         document.querySelector(".messagesoptionsmenu").innerHTML += ` <div data-id="options">
  <div data-id="dropdown-content" id="${snap.key}options">
<p style="position:relative; left:60;"><i class="bi bi-x" onclick="displaynone(event);" data-none="${snap.key}options" ></i></p>
    <p style="color:red;">Block</p>
    <p>Mark</p>
    <p data-snapkey="${snap.key}" onclick="deletemessage(event);">Delete</p>
  </div>
</div>`;
/*
audio.setAttribute("data-block",`${snap.key}options`)
    audio.setAttribute("onmouseover","displayblock(event);")
    audio.setAttribute("id",snap.key)
      */  var messages = document.createElement("div");
messages.innerHTML = `<video controls src="${snap.val().message}" id="${snap.key}" style="width:199px; height:199px;">`;
messages.setAttribute("data-block",`${snap.key}options`)
messages.setAttribute("onmouseover","displayblock(event);")
// = window.innerWidth - 221;
messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative; left:${left}; background:rgb(49,121,255); overflow:scroll;`)
var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
    var i5 = setInterval(function(){
document.querySelector(`.${snap.val().To}`).scrollBy(0,1000)
  },1)
  setTimeout(function(){
    clearInterval(i5)
  },1000)
document.querySelector(`.${snap.val().To}`).appendChild(messages)
messages.appendChild(timediv)
      } else if(snap.val().To == user){
        var messages = document.createElement("div");
messages.innerHTML = `<video controls src="${snap.val().message}" style="width:199px; height:199px;">`;
// = window.innerWidth - 221;
messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative;  background:white; overflow:scroll;`)
var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
var i5 = setInterval(function(){
document.querySelector(`.${snap.val().From}`).scrollBy(0,1000)
  },1)
  setTimeout(function(){
    clearInterval(i5)
  },1000)
document.querySelector(`.${snap.val().From}`).appendChild(messages)
messages.appendChild(timediv)
      }
    }
  
  })
  
  firebase.database().ref("Messages").on("child_changed", function(snap){
    document.getElementById("menubutton").setAttribute("onclick","openmenu();")
    if(snap.val().type == "message"){
    document.getElementById(snap.key).innerHTML = snap.val().message;
    } else if(snap.val().type == "audio"){
      document.getElementById(snap.key).src = "";
    } else if(snap.val().type == "image"){
      document.getElementById(snap.key).innerHTML = "This message was deleted by publisher"
    } else if(snap.val().type == "video"){
      document.getElementById(snap.key).src = "";
    }
  })
  
  
  
  
  
  
 /*firebase.database().ref("Messages").on("child_added", function(snap){
  var i = setInterval(function(){
     document.getElementById("messagebox").scrollBy(0,1000000);
   })
   setTimeout(function() {
     clearInterval(i)
   }, 10);
    console.log(snap.val())
    if(snap.val().type == "message"){
    if(snap.val().From == user){
      var messages = document.createElement("div");
    var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
  //  var replace = document.querySelector(".messageinput").value.replace("<","...")
    messages.innerHTML = snap.val().message;
    messages.setAttribute("data-id","This Message was Deleted");
    messages.setAttribute("ondblclick","delet(event)")
    // = window.innerWidth - 221;
  messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:white;	position:relative;	left:${left};	background:rgb(49,121,255); overflow:scroll;`)
  document.getElementById("messagebox").appendChild(messages)
  messages.appendChild(timediv)
    } else if(snap.val().To == user){
var messages = document.createElement("div");
messages.innerHTML = snap.val().message;
messages.setAttribute("style","max-width: 200px; ;	padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative; background:whitesmoke; overflow:scroll;")
//messages.style.background = "white";
var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
document.getElementById("messagebox").appendChild(messages)
messages.appendChild(timediv)
  console.log(snap.val().message)
    }
    
    }
    else if(snap.val().type == "audio"){
      if(snap.val().From == user){
      // = window.innerWidth - 300;
    var audiodiv = document.createElement("div");
    
    
    audiodiv.setAttribute("style",`width:300px; height:50px;  margin:20px 0px; position:relative; left:${left};`);
    var audio = document.createElement("audio");
    audio.src = snap.val().message;
    audio.controls = "controls"
    document.getElementById("messagebox").appendChild(audiodiv);
    audiodiv.appendChild(audio)
    } else if(snap.val().To == user){
      // = window.innerWidth - 325;
    var audiodiv = document.createElement("div");
    
    
    audiodiv.setAttribute("style",`width:300px; height:50px;  margin:20px 0px; position:relative;`);
    var audio = document.createElement("audio");
    audio.src = snap.val().message;
    audio.controls = "controls"
    document.getElementById("messagebox").appendChild(audiodiv);
    audiodiv.appendChild(audio)
    }
    }
    else if(snap.val().type == "image"){
      if(snap.val().From == user){
        var messages = document.createElement("div");
messages.innerHTML = `<img src="${snap.val().message}" style="width:199px; clip-path:inset();">`;
// = window.innerWidth - 221;
messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative; left:${left}; background:rgb(49,121,255); overflow:scroll;`)
var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
document.getElementById("messagebox").appendChild(messages)
document.getElementById("messagebox").appendChild(messages);
messages.appendChild(timediv)
      } else if(snap.val().To == user){
                var messages = document.createElement("div");
messages.innerHTML = `<img src="${snap.val().message}" style="width:199px; clip-path:inset();">`;
// = window.innerWidth - 221;
messages.setAttribute("style",`max-width: 200px; ;	padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative;  background:white; overflow:scroll;`)
var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
document.getElementById("messagebox").appendChild(messages)
document.getElementById("messagebox").appendChild(messages);
messages.appendChild(timediv)
      }
    }
    else if(snap.val().type == "video"){
      if(snap.val().From == user){
        var messages = document.createElement("div");
messages.innerHTML = `<video controls src="${snap.val().message}" style="width:199px; height:199px;">`;
// = window.innerWidth - 221;
messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative; left:${left}; background:rgb(49,121,255); overflow:scroll;`)
var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
document.getElementById("messagebox").appendChild(messages)
document.getElementById("messagebox").appendChild(messages);
messages.appendChild(timediv)
      } else if(snap.val().To == user){
        var messages = document.createElement("div");
messages.innerHTML = `<video controls src="${snap.val().message}" style="width:199px; height:199px;">`;
// = window.innerWidth - 221;
messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative;  background:white; overflow:scroll;`)
var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
document.getElementById("messagebox").appendChild(messages)
document.getElementById("messagebox").appendChild(messages);
messages.appendChild(timediv)
      }
    }
    console.log(snap.key)
  }) 
  */
  /*
  var count = 0;
  firebase.database().ref("Messages").on("child_added", function(snap){
    console.log(snap.val())
    if(snap.val().type == "message"){
      if(snap.val().From == user){
      if(document.getElementById(snap.val().To) == null){
        document.getElementById("messagecomingbox").innerHTML += ` <div data-id="namebox">
    <font size="5">

      <img src="https://i.postimg.cc/y3CkWfz7/UNMEET-free-file.png" data-id="nameboximg">
      <code data-id="friendsname" style="font-family:Sans-Serif; position:relative; top:-20;">Tarun</code>
    </font>
    </div>`
}
      } else if(snap.val().To == user){
        if(snap.val().status == "pending"){
        count++;
        document.getElementById("notificationcountformessages").innerHTML = count;
        }
      }
    }
  })
  */
  
  
  function clickinputfile(event){
    if(event.target.getAttribute("data-for") == "checktodeleteorchange" && event.target.src !== "https://i.postimg.cc/QHzSpq2C/users.png"){
      document.getElementById(event.target.getAttribute("data-optionsid")).style.display = "block";
    } else {
      document.getElementById(event.target.getAttribute("data-click")).click()
    }
  }
  window.onload = function(){
    for(var i = 128512; i <= 128591; i++){
      var emoji = document.createElement("div");
      emoji.setAttribute("style","display:flex; align-items:center; justify-content:center;")
      emoji.setAttribute("onclick","applyemoji(event)");
      document.getElementById("emoji-box").appendChild(emoji);
      emoji.innerHTML = `&#${i};`
    }
  }
  
  
  
  function applyemoji(event){
    document.getElementById(inputid).value += event.target.innerHTML;
    document.getElementById(telegramid).style.display = "block";
    document.getElementById(micid).style.display = "none";
  }
  function follow(event){
    var e = event.target;
    var total = user+ " following " + e.getAttribute("data-following");
    console.log(total)
    if(event.target.getAttribute("data-followingkey") == ""){
   firebase.database().ref("following").push().set({
      "total":total,
      "following":user,
      "To":e.getAttribute("data-following"),
      "followingemail":e.getAttribute("data-useremail"),
      "myemail":myemail,
      "followingprofileicon":e.getAttribute("data-userprofileicon"),
      "myicon":myicon
  })
    } else {
      if(window.confirm("Unfollow "+e.getAttribute("data-following")+"\n press ok to unfollow")){
        alert("Unfollowed "+e.getAttribute("data-following"))
        firebase.database().ref("following").child(e.getAttribute("data-followingkey")).remove();
        e.setAttribute("data-followingkey","")
        e.style.color = "white";
        e.style.background = "#077bff";
      //  e.style.border = "1px solid";
        e.style.left = "50";
        e.innerHTML = "Follow"
      }
    }
  console.log(event.target.style.color)
  }
  /*
    document.getElementById(`${snap.val().To}followmebutton`).innerHTML = "Following";
     document.getElementById(`${snap.val().To}followmebutton`).style.background = "white";
     document.getElementById(`${snap.val().To}followmebutton`).style.border = "1px solid #077bff";
     document.getElementById(`${snap.val().To}followmebutton`).style.color = "#077bff"
     document.getElementById(`${snap.val().To}followmebutton`).style.left = "40";
     document.getElementById(`${snap.val().To}followmebutton`).setAttribute("data-followingkey",snap.key);
  */
  firebase.database().ref("Newgroup").on("child_added", function(snap){
    var groupmembers = snap.val().members.split("|");
    console.log(groupmembers)
    for(var i = 0; i < groupmembers.length; i++){
      if(user == groupmembers[i]){
    document.getElementById("messagecomingbox").innerHTML += `<div id="${snap.val().groupname}mm" data-id="messagecomingbox" onclick="displayblockornone(event);" data-block="${snap.val().groupname}mb" data-none="Messages">
  <div data-id="messagecomingimagebox">
<img src="${snap.val().groupicon}" id="${snap.key}groupiconimageformessagecomingbox" alt="${snap.val().groupname}" data-id="messagecomingimage">
  </div><font size="4" style="position:relative; font-family:Sans-Serif;">${snap.val().groupname}</font>
</div>`
document.querySelector(".messagemebox").innerHTML += `<div class="messagefull" id="${snap.val().groupname}mb"><div id="Chat">
  <div id="namebox">
    <font size="5">
       <i class="bi bi-arrow-left" onclick="displayblockornone(event);" data-block="Messages" data-none="${snap.val().groupname}mb"></i>
      <img id="${snap.key}groupiconimageformessagemebox" src="${snap.val().groupicon}">
      <code id="${snap.key}groupnamecode" style="font-family:Sans-Serif;">${snap.val().groupname}</code>
    </font>
  <font size="6">
    <i class="bi bi-card-image" style="position:fixed; top:8; left:90%;" onclick="sendfile(event);" data-type="groupmessage" data-to="${snap.val().groupname}"></i>
    <i class="bi bi-info-circle" onclick="displayblockornone(event);" data-block="${snap.key}groupinfobox" data-none="${snap.val().groupname}mb" style="position:fixed; top:8; left:75%;"></i>

  </font>
  
  </div>
</div>
  <div data-id="messagebox" class="${snap.val().groupname}mb">
    
  </div>
  <div id="messagearea">
<textarea class="area" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" id="${snap.key}input" oninput="changetomicortelegram(event);" placeholder="Messeges....."></textarea>
<font size="6">
<i class="bi bi-emoji-smile" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" data-inputid="${snap.key}input" id="emoji-smile" onclick="displayemojibox(event);"></i> 
<i class="bi bi-mic" onclick="onmic(event);"id="${snap.key}mic" data-type="group" data-to="${snap.val().groupname}" data-id="mic"></i>
<i class="bi bi-telegram" data-to="${snap.val().groupname}" data-inputid="${snap.key}input" data-type="groupmessage" data-id="telegram" onclick="sendgroupmessage(event);" id="${snap.key}telegram"></i>
</font>
</div></div>`;
if(snap.val().groupadmin == user){
document.querySelector(".groupinfos").innerHTML += `<div data-class="groupinfobox" id="${snap.key}groupinfobox">
<div data-class="groupiconboxofgroupinfo">
    <font size="6">
    <i onclick="displayblockornone(event);" data-none="${snap.key}groupinfobox" data-block="${snap.val().groupname}mb" data-class="arrowofgroupinfo" class="bi bi-arrow-left"></i>
        <i onclick="addparticpentsforgroup(event);" data-groupinfoid="${snap.key}groupinfobox" data-groupmembers="${snap.val().members}" data-snapkey="${snap.key}" class="bi bi-person-plus" data-class="addparticpentsofgroupinfo"></i>
    </font>
      
  <img id="${snap.key}groupiconforgroupinfo" data-class="groupiconimageofgroupinfo" src="${snap.val().groupicon}" onclick="clickinputfile(event);" data-click="${snap.key}inputfile" data-optionsid="${snap.key}options" data-for="checktodeleteorchange">
  <input data-snapkey="${snap.key}" id="${snap.key}inputfile" onchange="changegroupicon(event);" data-imgid="${snap.key}groupiconforgroupinfo" type="file" style="display:none;">
</div>
<div data-class="groupnamebox">
<font size="6" id="${snap.key}groupnamefont">${snap.val().groupname}</font>
</div>
<div data-class="groupmemberstitle"><b>Group members</b></div>
<div id="${snap.key}groupmembersforgroupinfo" data-class="groupmembersforgroupinfo">
</div>
<br>
<div data-class="exitgroupbutton">Exit Group</div>
<br>
<div onclick="deletegroup(event);" data-snapkey="${snap.key}" data-groupinfoid="${snap.key}groupinfobox" data-groupname="${snap.val().groupname}" data-class="deletegroupbutton">Delete Group</div>
</div>`;
} else {
  document.querySelector(".groupinfos").innerHTML += `<div data-class="groupinfobox" id="${snap.key}groupinfobox">
<div data-class="groupiconboxofgroupinfo">
    <font size="6">
    <i onclick="displayblockornone(event);" data-none="${snap.key}groupinfobox" data-block="${snap.val().groupname}mb" data-class="arrowofgroupinfo" class="bi bi-arrow-left"></i>
    </font>
      
  <img id="${snap.key}groupiconforgroupinfo" data-class="groupiconimageofgroupinfo" src="${snap.val().groupicon}">
</div>
<div data-class="groupnamebox">
<font size="6" id="${snap.key}groupnamefont">${snap.val().groupname}</font>
</div>
<div data-class="groupmemberstitle"><b>Group members</b></div>
<div id="${snap.key}groupmembersforgroupinfo" data-class="groupmembersforgroupinfo">
</div>
<br>
<div data-class="exitgroupbutton">Exit Group</div>
<br>
</div>`;
}
 document.querySelector(".messagesoptionsmenu").innerHTML += ` <div data-id="options">
  <div data-id="dropdown-content" id="${snap.key}options">
<p style="position:relative; left:60;"><i class="bi bi-x" onclick="displaynone(event);" data-none="${snap.key}options" ></i></p>
<p onclick="removegroupicon(event);" data-snapkey="${snap.key}">Remove</p>
<p onclick="clickinputfile(event);" data-click="${snap.key}inputfile">Change</p>
  </div>
</div>`;
}
}
for(var x = 0; x < groupmembers.length; x++){
  if(groupmembers[x] == user){
    for(y = 0; y < groupmembers.length; y++){
      if(snap.val().groupadmin == user){
      document.getElementById(`${snap.key}groupmembersforgroupinfo`).innerHTML += `<div data-class="groupmembersdiv" class="${snap.key}" onclick="removemembers(event);" id="${groupmembers[y]}groupinfomember${snap.key}" data-snapkey="${snap.key}" data-groupmembers="${snap.val().members}" data-id="messagecomingbox">${groupmembers[y]}</div>`
      } 
      else {
        document.getElementById(`${snap.key}groupmembersforgroupinfo`).innerHTML += `<div data-class="groupmembersdiv" id="${groupmembers[y]}groupinfomember${snap.key}" data-id="messagecomingbox">${groupmembers[y]}</div>`
      }
    }
  }
} 
var groupadmininterval = setInterval(() => {
  document.getElementById(`${snap.val().groupadmin}groupinfomember${snap.key}`).innerHTML += `<i class="fas fa-crown"></i>`
  document.getElementById(`${snap.val().groupadmin}groupinfomember${snap.key}`).removeAttribute("onclick");
  /*document.querySelectorAll(`${snap.val().groupadmin}groupinfomember${snap.key}`).forEach(gmd => {
    gmd.innerHTML += `<i class="fas fa-crown"></i>`
    gmd.removeAttribute("onclick");
  })*/
  clearInterval(groupadmininterval)
})
console.log(snap.key + " snapkey for " + snap.val().groupname)
  })
  function sendgroupmessage(event){
  var to = event.target.getAttribute("data-to");

 firebase.database().ref("Groupmessages").push().set({
    "From":user,
    "message":document.getElementById(event.target.getAttribute("data-inputid")).value,
    "To":to,
    "Time":document.getElementById("time").value,
    "type":"message"
  })
  document.querySelector(`.${event.target.getAttribute("data-to")}mb`).scrollBy(0,1000000)
}
firebase.database().ref("Groupmessages").on("child_added", function(snap){
  if(snap.val().type == "message"){
  if(snap.val().From == user){
    document.querySelector(".messagesoptionsmenu").innerHTML += ` <div data-id="options">
  <div data-id="dropdown-content" id="${snap.key}options">
<p style="position:relative; left:60;"><i class="bi bi-x" onclick="displaynone(event);" data-none="${snap.key}options" ></i></p>
    <p style="color:red;">Exit</p>
    <p>Mark</p>
    <p data-type="Groupmessages" data-snapkey="${snap.key}" onclick="deletemessage(event);">Delete</p>
  </div>
</div>`;
   var messages = document.createElement("div");
    var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().Time
 messages.setAttribute("ondblclick","displayblock(event);")
 messages.setAttribute("data-block",`${snap.key}options`)
 messages.setAttribute("id",snap.key)
  //  var replace = document.querySelector(".messageinput").value.replace("<","...")
    messages.innerHTML = snap.val().message;
  messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:white;	position:relative; left:${left};	background:rgb(49,121,255); overflow:scroll;`)
  messages.appendChild(timediv)
 // console.log(`.${snap.val().To}mb`.replace(" ","."))
 if(document.querySelector(`.${snap.val().To}mb`.replace(" ",".")) !== null){
document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).appendChild(messages);
var gms = setInterval(function(){
document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).scrollBy(0,10000)
  },1)
  setTimeout(function(){
    clearInterval(gms)
  },1000)
 }
} else {
  var messages = document.createElement("div");
    var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px;")
    timediv.innerHTML = snap.val().From .toLowerCase() + " " + snap.val().Time;
  //  var replace = document.querySelector(".messageinput").value.replace("<","...")
    messages.innerHTML = snap.val().message;
    messages.setAttribute("data-id","This Message was Deleted");
    messages.setAttribute("ondblclick","delet(event)")
    
  messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative;	background:lightgreen; overflow:scroll;`)
  messages.appendChild(timediv)
 // console.log(`.${snap.val().To}mb`.replace(" ","."))
 if(document.querySelector(`.${snap.val().To}mb`.replace(" ",".")) !== null){
document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).appendChild(messages);
var gms2 = setInterval(function(){
document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).scrollBy(0,10000)
  },1)
  setTimeout(function(){
    clearInterval(gms2)
  },1000)
 }
}
} else if(snap.val().type == "audio"){
  if(snap.val().From == user){
    document.querySelector(".messagesoptionsmenu").innerHTML += ` <div data-id="options">
  <div data-id="dropdown-content" id="${snap.key}options">
<p style="position:relative; left:60;"><i class="bi bi-x" onclick="displaynone(event);" data-none="${snap.key}options" ></i></p>
    <p style="color:red;">Exit</p>
    <p>Mark</p>
    <p data-type="Groupmessages" data-snapkey="${snap.key}" onclick="deletemessage(event);">Delete</p>
  </div>
</div>`;
     var au = window.innerWidth - 300;
    var audiodiv = document.createElement("div");
    audiodiv.setAttribute("style",`width:300px; height:50px;  margin:20px 0px; position:relative; left:${au};`);
    var audio = document.createElement("audio");
 audio.setAttribute("onmouseover","displayblock(event);")
 audio.setAttribute("data-block",`${snap.key}options`)
 audio.setAttribute("id",snap.key)
    audio.src = snap.val().message;
    audio.setAttribute("id",snap.key)
    audio.controls = "controls"
    if(document.querySelector(`.${snap.val().To}mb`.replace(" ",".")) !== null){
    document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).appendChild(audiodiv);
    audiodiv.appendChild(audio)
    }
  } else {
    var au = window.innerWidth - 300;
    var audiodiv = document.createElement("div");
    
    
    var p = document.createElement("p");
    p.innerHTML = snap.val().From.toLowerCase() + " " + snap.val().Time;
    p.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px; font-family:Sans-Serif; position:relative; left:-2;")
    
    
    audiodiv.setAttribute("style",`width:300px; height:70px;   margin:20px 0px; position:relative;`);
    var audio = document.createElement("audio");
    audio.src = snap.val().message;
    audio.setAttribute("id",snap.key)
    audio.controls = "controls"
    if(document.querySelector(`.${snap.val().To}mb`.replace(" ",".")) !== null){
    document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).appendChild(audiodiv);
    audiodiv.appendChild(audio)
    audiodiv.appendChild(p)
    }
  }
} else if(snap.val().type == "image"){
  //console.log(snap.val().To + "Groupmessages")
  if(snap.val().From == user){
    document.querySelector(".messagesoptionsmenu").innerHTML += ` <div data-id="options">
  <div data-id="dropdown-content" id="${snap.key}options">
<p style="position:relative; left:60;"><i class="bi bi-x" onclick="displaynone(event);" data-none="${snap.key}options" ></i></p>
    <p style="color:red;">Exit</p>
    <p>Mark</p>
    <p data-type="Groupmessages" data-snapkey="${snap.key}" onclick="deletemessage(event);">Delete</p>
  </div>
</div>`;
    var messages = document.createElement("div");
    var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
    if(snap.val().message !== "This message was deleted by publisher"){
    timediv.innerHTML = snap.val().Time
  //  var replace = document.querySelector(".messageinput").value.replace("<","...")
    messages.innerHTML = `<img ondblclick="displayblock(event);" data-block="${snap.key}options" src="${snap.val().message}" style="width:179px; clip-path:inset();">`;
    } else {
      timediv.innerHTML = "";
  //  var replace = document.querySelector(".messageinput").value.replace("<","...")
    messages.innerHTML = "This message was deleted by publisher"
    }
    messages.setAttribute("id",snap.key)
    
  messages.setAttribute("style",`max-width: 180px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:white;	position:relative; left:${left};	background:rgb(49,121,255); overflow:scroll;`)
  messages.appendChild(timediv)
 // console.log(`.${snap.val().To}mb`.replace(" ","."))
 if(document.querySelector(`.${snap.val().To}mb`.replace(" ",".")) !== null){
document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).appendChild(messages);
}
  } else {
        var messages = document.createElement("div");
    var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px;")
  //  var replace = document.querySelector(".messageinput").value.replace("<","...")
  if(snap.val().message !== "This message was deleted by publisher"){
    timediv.innerHTML = snap.val().From.toLowerCase() + " " + snap.val().Time;
    messages.innerHTML = `<img src="${snap.val().message}" style="width:199px; clip-path:inset();">`;
  } else {
    timediv.innerHTML = snap.val().From.toLowerCase() + " " + snap.val().Time;
    messages.innerHTML = `This message was deleted by publisher`;
  }
  messages.setAttribute("id",snap.key)
    
    
  messages.setAttribute("style",`max-width: 200px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative;	background:whitesmoke; overflow:scroll;`)
  messages.appendChild(timediv)
 // console.log(`.${snap.val().To}mb`.replace(" ","."))
 if(document.querySelector(`.${snap.val().To}mb`.replace(" ",".")) !== null){
document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).appendChild(messages);
}
  }
} else if(snap.val().type == "video"){
  //console.log(snap.val().To + "gms video" + snap.key)
  if(snap.val().From == user){
    document.querySelector(".messagesoptionsmenu").innerHTML += ` <div data-id="options">
  <div data-id="dropdown-content" id="${snap.key}options">
<p style="position:relative; left:60;"><i class="bi bi-x" onclick="displaynone(event);" data-none="${snap.key}options" ></i></p>
    <p style="color:red;">Exit</p>
    <p>Mark</p>
    <p data-type="Groupmessages" data-snapkey="${snap.key}" onclick="deletemessage(event);">Delete</p>
  </div>
</div>`;
    var messages = document.createElement("div");
    var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: white;font-size: 12px;font-weight: 700px;")
  //  var replace = document.querySelector(".messageinput").value.replace("<","...")
  if(snap.val().message !== "This message was deleted by publisher"){
    timediv.innerHTML = snap.val().Time
    messages.innerHTML = `<video controls src="${snap.val().message}" style="width:179px; height:179px;"></video>`;
    messages.setAttribute("onmouseover","displayblock(event);")
    messages.setAttribute("data-block",`${snap.key}options`)
  } else {
    timediv.innerHTML = snap.val().Time
    messages.innerHTML = `This message was deleted by publisher`;
  }
  messages.setAttribute("id",snap.key)
  messages.setAttribute("style",`max-width: 180px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:white;	position:relative; left:${left};	background:rgb(49,121,255); overflow:scroll;`)
  messages.appendChild(timediv)
 // console.log(`.${snap.val().To}mb`.replace(" ","."))
 if(document.querySelector(`.${snap.val().To}mb`.replace(" ",".")) !== null){
document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).appendChild(messages);
}
  } else {
    var messages = document.createElement("div");
    var timediv = document.createElement("div");
    timediv.setAttribute("style","float: right;	color: black;font-size: 12px;font-weight: 700px;")
  //  var replace = document.querySelector(".messageinput").value.replace("<","...")
  if(snap.val().message !== "This message was deleted by publisher"){
    timediv.innerHTML = snap.val().From.toLowerCase() + " " + snap.val().Time
    messages.innerHTML = `<video controls src="${snap.val().message}" style="width:179px; height:179px;"></video>`;
  } else {
    timediv.innerHTML = snap.val().From.toLowerCase() + " " + snap.val().Time
    messages.innerHTML = `This message was deleted by publisher`;
  }
  messages.setAttribute("id",snap.key)
    
  messages.setAttribute("style",`max-width: 180px; padding: 10px;	border-radius: 10px;	margin: 20px 0px;	cursor: pointer;	word-break: break-all; font-family:Sans-Serif;	font-size: 18px;	color:black;	position:relative; background:whitesmoke; overflow:scroll;`)
  messages.appendChild(timediv)
 // console.log(`.${snap.val().To}mb`.replace(" ","."))
 if(document.querySelector(`.${snap.val().To}mb`.replace(" ",".")) !== null){
document.querySelector(`.${snap.val().To}mb`.replace(" ",".")).appendChild(messages);
}
  }
}

})
var nsnsk = [];
firebase.database().ref("notification").on("child_added", function(snap){
 // console.log(snap.val())
 
  if(snap.val().To == user){
   //only 5 times
   
   nsnsk.push(snap.key)
    document.getElementById("notificationboxfronotifications").innerHTML += `<div data-id="notificationbox" id="${snap.key}">
      <div data-id="imageboxofnotificationbox">
        <img src="${snap.val().notificationprofile}">
      </div>
      <span data-id="nameoffromuserofnotification">You have a new message from ${snap.val().From}</span>
      <div data-id="timefornotification">${snap.val().Time}</div>
      <div data-id="wrongmarkfornotification"><font size="4"><i class="bi bi-x" onclick="removenotification(event);" data-snapkey="${snap.key}"></i></font></div>
    </div>`
    var is = document.getElementById("indicator").innerHTML;
   document.getElementById("indicator").innerHTML = parseInt(is) + 1;
  
  }
  
  })
function seeduration(event){
  var duration = Math.floor(event.target.duration);
  if(duration >= 20){
    document.getElementById("uploadvideobutton").style.display = "none";
  }
}
//Newchatadded







/*
 document.querySelector(".messagemebox").innerHTML += `<div class="messagefull" id="${snap.val().To}mb"><div id="Chat">
  <div id="namebox">
    <font size="5">
       <i class="bi bi-arrow-left" onclick="displayblockornone(event);" data-block="Messages" data-none="${snap.val().To}mb"></i>
      <img src="${snap.val().followingprofileicon}">
      <code id="friendsname" style="font-family:Sans-Serif;">${snap.val().To}</code>
    </font>
  <font size="6">
    <i class="bi bi-card-image" style="position:fixed; top:8; left:90%;" onclick="sendfile(event);" data-to="${snap.val().To}"></i>


  </font>
  
  </div>
</div>
  <div data-id="messagebox" class="${snap.val().To}">
    
  </div>
  <div id="messagearea">
<textarea class="area" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" id="${snap.key}input" oninput="changetomicortelegram(event);" placeholder="Messeges....."></textarea>
<font size="6">
<i class="bi bi-emoji-smile" data-micid="${snap.key}mic" data-telegramid="${snap.key}telegram" data-inputid="${snap.key}input" id="emoji-smile" onclick="displayemojibox(event);"></i> 
<i class="bi bi-mic" onclick="onmic(event);"id="${snap.key}mic" data-to="${snap.val().To}" data-id="mic"></i>
<i class="bi bi-telegram" data-micid="${snap.key}mic" data-type="singlemessage" data-email="${snap.val().followingemail}" data-inputid="${snap.key}input" data-to="${snap.val().To}" data-id="telegram" onclick="sendmessage(event);" id="${snap.key}telegram"></i>
</font>
</div></div>`;








*/
firebase.database().ref("Groupmessages").on("child_changed", function(snap){
    
    if(snap.val().type == "message"){
    document.getElementById(snap.key).innerHTML = snap.val().message;
    } else if(snap.val().type == "audio"){
      document.getElementById(snap.key).src = "";
    } else if(snap.val().type == "image"){
      document.getElementById(snap.key).innerHTML = "This message was deleted by publisher"
    } else if(snap.val().type == "video"){
      document.getElementById(snap.key).innerHTML = "This message was deleted by publisher";
    }
  })
  firebase.database().ref("Newgroup").on("child_changed", function(snap){
    var members = snap.val().members.split("|");
   // alert(snap.val().members)
    document.querySelectorAll(`.${snap.key}`).forEach(divs => {
      divs.setAttribute("data-groupmembers",snap.val().members)
    })
      for(var m = 0; m < members.length; m++){
        if(user == members[m]){
          document.getElementById(`${snap.key}groupiconimageformessagecomingbox`).src = snap.val().groupicon;
    document.getElementById(`${snap.key}groupiconimageformessagemebox`).src = snap.val().groupicon;
    document.getElementById(`${snap.key}groupiconforgroupinfo`).src = snap.val().groupicon;
        }
      }
    

  })
  firebase.database().ref("notification").on("child_removed", function(snap){
  document.getElementById(snap.key).style.display = "none";
})
firebase.database().ref("Newgroup").on("child_removed", function(snap){
  document.getElementById(`${snap.val().groupname}mm`).style.display = "none";
  document.getElementById(`${snap.key}groupinfobox`).style.display = "none";
  document.getElementById("Messages").style.display = "block";
})