
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
        console.log(`${doc.id} => ${doc.data().first}`);
        table.innerHTML += 
    `<tr>
        <td>${doc.data().User.email}</td>
        <td>${doc.data().User.login}</td>
        <td>${doc.data().User.logout}</td>
        <td>${doc.data().User.totalTime}</td>
        <td>${doc.data().User.available}</td>
        <td>${doc.data().User.lunch}</td>
        <td>${doc.data().User.break}</td>
        <td>${doc.data().User.project}</td>
      </tr>`
    });
  });
}

function clear () {
  console.log('clear');
  document.getElementById('table').innerHTML = ' ';
}
      
  