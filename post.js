import{db,collection, addDoc ,setDoc,doc, getDocs}from"./firebase.js"
let postTitle = document.getElementById("postTitle")
let content = document.getElementById("postContent")

let post = document.getElementById("post")
post.addEventListener("click",async()=>{
    let postTitle = document.getElementById("postTitle")
let content = document.getElementById("postContent")

    try {
        // const docRef = await addDoc(collection(db, "posts"), {
        //  inputs:inputs.value,
        //  text:text.value
        
        await setDoc(doc(db, "posts", "uid"), {
           postTitle:postTitle.value,
           content:content.value,
          
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    

    
})

let getpost = document.getElementById("allpost")

getpost.addEventListener("click",async()=>{
    try {
        // const docRef = await addDoc(collection(db, "posts"), {
        //  inputs:inputs.value,
        //  text:text.value
        
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          
        });
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
    
})