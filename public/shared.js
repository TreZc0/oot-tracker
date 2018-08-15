
var uid = undefined;
var roomid = location.pathname.replace(/\/$/, "").split("/").pop().toLowerCase();
var password = "";
var passwordURL = "";
if (roomid.includes("?")) {
    password = roomid.split("?")[1];
    roomid = roomid.split("?").pop();
}
var authAttempted = false;

var rootRef = {};

function destroyFirebase() {
    rootRef.set({});
}

function init(callback) {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log(user);
        uid = user.uid;
        rootRef = firebase.database().ref('games/' + roomid);
        if (password != "")
            rootRef.set({passwordURL: password.split("=")[1]});
        callback();
    } else {
        console.log("Auth state not logged in");
        if(authAttempted) return;
        authAttempted = true;
        firebase.auth().signInAnonymously().catch(function(error) {
            console.log(error);
        });
    }});
}