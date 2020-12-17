// offline data
db.enablePersistence()
  .catch(err => {
      if(err.code == 'failed-precondition'){
          //probably multiple tabs open at once
          console.log('persistence failed');
      }else if(err.code == 'unimplemented'){
          // lack of browser support
          console.log('persistence is not availble');
      }
  });

// real-time listener
let counter = 0;
db.collection('forniture').onSnapshot((snapshot) => {
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        //console.log(change, change.doc.data());
        if(change.type === 'added'){
            // add the document data to the web page
            renderProduct(change.doc.data(), change.doc.id);
            counter++;
            if(counter === snapshot.docChanges().length){
                controlView(snapshot.docChanges().length);
            }
        }
    });
});