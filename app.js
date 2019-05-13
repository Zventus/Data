
  // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBuaCPUz5s3Iw_hIdhyMG9GmHczwSBefY8",
  authDomain: "zventus-6cbba.firebaseapp.com",
  databaseURL: "https://zventus-6cbba.firebaseio.com",
  projectId: "zventus-6cbba",
  storageBucket: "zventus-6cbba.appspot.com",
  messagingSenderId: "68550919770"
};
firebase.initializeApp(config);

    var date = new Date();
    var options  = { month: 'short', day: '2-digit', weekday: 'short'};
    var options2 = { hour: 'numeric', minute: 'numeric'};
    var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
    var db = firebase.firestore();
// ***************************************************************************************//

function table () {
    console.log('table');
    var query = document.getElementById('test').value;
    var table = document.getElementById('table');
//    var user = firebase.auth().currentUser;
//    var email = user.email; 
  db.collection(query).get().then((querySnapshot) => {
      table.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Total.Available}`);
        table.innerHTML += 
    `<tr>
        <td>${doc.id}</td>
        <td>${doc.data().Total.Available}</td>
        <td>${doc.data().Total.Break}</td>
        
      </tr>`
    });
  });
}

function clear () {
  console.log('clear');
  document.getElementById('table').innerHTML = ' ';
}
      
  