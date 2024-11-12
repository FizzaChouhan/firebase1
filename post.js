import{db,collection, addDoc ,setDoc,doc, getDocs,deleteDoc,updateDoc}from"./firebase.js"
let postTitle = document.getElementById("postTitle")
let content = document.getElementById("postContent")

let post = document.getElementById("post")
post.addEventListener("click",async()=>{
    let postTitle = document.getElementById("postTitle")
let content = document.getElementById("postContent")

    try {
        
        //  inputs:inputs.value,
        //  text:text.value
        
        await setDoc(doc(db, "posts", "uid"), {
           postTitle:postTitle.value,
           content:content.value,
          
        });
        
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
        let docss=`${doc.id} => ${doc.data()}`
        console.log(docss)
          
        });
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
    
})

let delpost= document.getElementById("delpost")
delpost.addEventListener("click",async()=>{
  try {
    const docRef = await deleteDoc(doc(db, "posts", "uid"));
    console.log("Document deleted with ID: ", docRef.id);
    } catch (e) {
      console.error("Error deleting document: ", e);
      }
      })


    
let updpost = document.getElementById("updpost");

updpost.addEventListener("click", async () => {
  
  const userRef = doc(db, "posts", "uid"); 

  try {
    await updateDoc(userRef, {
      postTitle: prompt("Update title") ,
      content: prompt("Update content") 
    });
    console.log("Data updated successfully"); 
  } catch (e) {
    console.error("Error updating data:", e); 
  }
});
