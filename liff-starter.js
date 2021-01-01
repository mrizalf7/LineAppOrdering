window.onload = function() {
    const useNodeJS = false;   // if you are not using a node server, set this value to false
    const defaultLiffId = "1655423709-g26plk6x";   // change the default LIFF value if you are not using a node server
 
    // DO NOT CHANGE THIS
    let myLiffId = "";
 
    // if node is used, fetch the environment variable and pass it to the LIFF method
    // otherwise, pass defaultLiffId
    
        myLiffId = defaultLiffId;
        initializeLiff(myLiffId);
    
};  
    

function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            document.getElementById("liffAppContent").classList.add('hidden');
            document.getElementById("liffInitErrorMessage").classList.remove('hidden');
        });
}
function initializeApp() {
    
    if(liff.isInClient()){                          // logged in via line browser
    document.getElementById("loggedin").classList.remove("hidden");
    document.getElementById("link").classList.remove("hidden");
    getProfile();
    registerButtonHandlers();
    
    }
    else if (!liff.isInClient()&&liff.isLoggedIn() ){   //logged in via external browser
    document.getElementById("loggedin").classList.remove("hidden");
    document.getElementById("logout").classList.remove("hidden");
    getProfile();
    } 
    else{  //logged out via external browser
    document.getElementById("notloggedin").classList.remove("hidden");
       
    } 
}

function registerButtonHandlers() {
    document.getElementById('link').addEventListener('click', function() {
        liff.openWindow({
            url: 'https://appordering.herokuapp.com/', // Isi dengan Endpoint URL aplikasi web Anda
            external: true
        });
    });
}                                     
  

function getProfile(){

    liff.getProfile()
.then(profile => {
 const name = profile.displayName;
  const photoprofile = profile.pictureUrl;
  document.getElementById("photo").src = photoprofile;
  document.getElementById("profileName").innerText=name;
  window.name;
  
})
.catch((err) => {
  console.log('error', err);
});
}

document.getElementById('login').addEventListener('click', function() {
    if (!liff.isLoggedIn()) {
        liff.login();
    }
});

document.getElementById("logout").addEventListener('click', function() {
    if (liff.isLoggedIn()) {
        liff.logout();
        window.location.reload();
    }
});
document.getElementById("bayar").addEventListener('click',function() {
    totma=$("#totma").html();
    totmi=$("#totmi").html();
    total=$("#total").html();
    nama=$("#profileName").html();
   
    pesan=
    `Hai ${nama}

    Terimakasih telah memesan 
    makanan di Skuy 
    berikut adalah review 
    pesanannya:

    *${totma} Makanan
    *${totmi} Minuman
    
    Pesanan kakak bertotal
    dengan harga Rp.${total} akan 
    segera diproses dan akan 
    diberitahu jika sudah bisa 
    diambil.`;
    if(!liff.isInClient()){
        alert("Anda harus login lewat line browser untuk memesan")
    }

    else{
    
        liff.sendMessages([
            {
            'type': 'text',
            'text': `${pesan}`
            },
            {
            'type':'sticker',
            "packageId": '11537',
            "stickerId": '52002735'
            }
        ]).then(function() {
            window.alert("Pesanan dikirim!");
        }).catch(function(error) {
            window.alert("Error processing : " + error);
        })
    }
    
});


