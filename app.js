// Change the configurations.  
var config = {
    apiKey: "AIzaSyCHpz4ty7srkDV3AiUDZJLFEOfYGLMpqUM",
    authDomain: "nihal-819a6.firebaseapp.com",
    databaseURL: "https://nihal-819a6.firebaseio.com",
    projectId: "nihal-819a6",
    storageBucket: "nihal-819a6.appspot.com",
    messagingSenderId: "489064704671"
}
    
// Initialize Firebase.
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

new Vue({
    el: "#app",
    firestore() {
        return {
            items: firebase.firestore().collection("portfolioItems")
        }
    },
    data(){
        return {
            currentTab: 1,
            infoActive: false,
            infoAmount: 'More info',
            enter: false,
            exit: false,
            displayLoader: true,
            displayVeil: false,
            currentTab: 0,
            watch: false,
            vidTime: 85,
            fadingEffect: true,
            options: {
                //parent: this,
                afterLoad: this.handleLoad,
                onLeave: this.handleLeave,
                navigation: true,
                navigationPosition: 'right',
                parallax: true,
                lazyLoading: false,
                scrollingSpeed: 750
            },
            item: {
                title: "",
                genre: "",
                summary: "",
                finalFilm: "",
                credits: [
                    {
                        role: "",
                        name: ""
                    }
                ],
                screenGrabs: [
                    ""
                ]
            }
        }
    },
    mounted: function() {

        //----- Loading component and initializing fullpage -----

        var parentObj = this
        //console.log(this.items.length);
        setTimeout(function() {
            console.log("item count: " + parentObj.items.length);
            parentObj.componentsReady();
            parentObj.removeLoader();
        }, 5000)
    },
    methods: {
        componentsReady() {
            this.$refs.fullpage.init()
            this.$refs.fullpage.build()
            console.log('fullpage initialized');
            /*ui.start('#firebaseui-auth-container', {
                signInOptions: [
                  firebase.auth.EmailAuthProvider.PROVIDER_ID
                ],
                // Other config options...
            });*/
        },
        add() {
            console.log('clicked')
            this.$firestore.items.add(this.item).then(()=>{
                this.item.title = "",
                this.item.genre = "",
                this.item.summary = "",
                this.item.finalFilm = "",
                this.item.credits = [
                    {
                        role: "",
                        name: ""
                    }
                ],
                this.item.screenGrabs = [
                    ""
                ]
            })

            //refresh page
            document.location.reload();
        },
        remove(e) {
            console.log(e.screenGrabs);

            //deleting screenGrab directory in storage


            /* ---------- TODO ---------- */


            /*for(let i = 0; i < e.screenGrabs.length; i++) {
                firebase.storage().ref().child(e.imgPaths[i]).delete().then(function() {
                    console.log("Image deleted successfully");
                }).catch(function(error) {
                    console.error("Image not deleted successfully");
                });
            }*/

            //deleting item from database
            this.$firestore.items.doc(e['.key']).delete().then(
                function() {
                    //refresh page
                    document.location.reload();       
                }
            )
        },
        newCredit() {
            this.item.credits.push(
                {
                    role: "",
                    name: ""
                }
            );
        },
        newScreenGrab() {
            //console.log("pushed new screengrab")
        },
        handleUpload(e) {
            console.log("...handling screengrab upload for " + this.item.title);

            var parentObj = this;

            var file = e.target.files[0];

            var imgPath = this.item.title + "/" + file.name;

            //create a storage ref
            var storageRef = firebase.storage().ref(imgPath);

            //upload file
            var task = storageRef.put(file);

            //update progress bar
            task.on('state_changed', 
            
                function progress(snapshot) {
                    //var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                   //uploader.value = percentage;
                },
                function error(err) {
                    
                },
                function complete() {
                    //console.log(storageRef.child(imgPath).getDownloadURL().getResults());

                    task.snapshot.ref.getDownloadURL().then(
                        function(downloadURL) {
                            console.log('File available at: ' + downloadURL)
                            parentObj.item.screenGrabs.push(
                                downloadURL + ""
                            );
                            console.log('screenGrabs' + parentObj.item.screenGrabs);
                        }
                    )

                    //console.log("screenGrabs: " + parentObj.item.screenGrabs);
                }
            
            )

        },
        handleFilmUpload(e) {
            console.log("...handling film upload for " + this.item.title);

            var parentObj = this;

            var file = e.target.files[0];

            var filmPath = this.item.title + "/" + file.name;

            //create a storage ref
            var storageRef = firebase.storage().ref(filmPath);

            //upload file
            var task = storageRef.put(file);

            //update progress bar
            task.on('state_changed', 
            
                function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader.value = percentage;

                    if(percentage == 100) {
                        uploader.style.background = "#66BB6A";
                    }
                },
                function error(err) {
                    
                },
                function complete() {
                    //console.log(storageRef.child(imgPath).getDownloadURL().getResults());

                    task.snapshot.ref.getDownloadURL().then(
                        function(downloadURL) {
                            console.log('File available at: ' + downloadURL)
                            parentObj.item.finalFilm = downloadURL + ""
                        }
                    )

                    console.log("video: " + parentObj.item.screenGrabs);
                }
            )
        },
        removeLoader() {
            console.log("goodbye loader");
            this.displayLoader = false;
        },
        handleLeave(direction) {
            //console.log('left');
            this.displayVeil = true;
            this.infoActive = false;
            this.enter = false;
            this.watch = false;
            //console.log('enter?: ' + this.enter);

            //console.log("direction: " + direction);

            console.log('begin animation');
        },
        handleLoad(destination, direction) {
            //console.log("Emitted 'after load' event");
            this.enter = true;
            //console.log('enter?: ' + this.enter);
            this.displayVeil = false;

            //console.log('end animation');
            //console.log("current section: " + this.items.length);

            this.currentTab = direction.isLast;
        },
        toggleInfo() {
            if(this.infoActive) {
                this.infoActive = false
                this.infoAmount = 'More info'
            }
            else {
                this.infoActive = true
                this.infoAmount = 'Less info'
            }
            //console.log("info active: " + this.infoActive);
        },
        toggleWatch() {
            this.watch = !this.watch;
            //console.log('watch?: ' + this.watch);
            if(this.watch) {
                this.vidTime = 0;
                this.options.navigation = false;
            }
            else {
                this.vidTime = 85;
                this.options.navigation = true;
            }  
            //console.log(this.options);
        },
        sendEmail: (e) => {
            emailjs.sendForm('gmail', 'template_zlljjLwb', e.target, 'user_kTZviK8cM7UnEbWOUl1bX')
              .then((result) => {
                  console.log('SUCCESS!', result.status, result.text);
              }, (error) => {
                  console.log('FAILED...', error);
              });
          }
    }
})