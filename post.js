import{db,collection, addDoc ,setDoc,doc, getDocs,deleteDoc,updateDoc,getAuth, serverTimestamp}from"./firebase.js"
let postTitle = document.getElementById("postTitle")
let content = document.getElementById("postContent")



let post = document.getElementById("post")
post.addEventListener("click",async()=>{
    let postTitle = document.getElementById("postTitle")
let content = document.getElementById("postContent")

    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        const uid = user.uid;
        let savedata={
          postTitle:postTitle.value,
          content:content.value, 
          uid:uid,
          time:  new Date()
        }
      
        console.log(savedata);
        
        
        
          await setDoc(doc(db, "posts", uid), {
            postTitle:postTitle.value,
            content:content.value, 
            uid:uid,
            time:  new Date()
          });
      
        //  inputs:inputs.value,
        //  text:text.value
        
        console.log("Document written with ID: ", uid);
          
        }else {
          console.error("User not authenticated");
      }
        
       
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
      document.getElementById("displayTitle").innerText = postTitle.value;
      document.getElementById("displayContent").innerText = content.value;
      document.getElementById("postForm").classList.add("hidden");
      document.getElementById("postDisplay").classList.remove("hidden");

  //location.href="showpost.js" 
})

let getpost = document.getElementById("allpost")

getpost.addEventListener("click",async()=>{
    try {
        // const docRef = await addDoc(collection(db, "posts"), {
        //  inputs:inputs.value,
        //  text:text.value
        
        const querySnapshot = await getDocs(collection(db, "posts"));
        let postsContainer=document.getElementById("postsContainer")
postsContainer.innerHTML = "";
        querySnapshot.forEach((doc) => {
        let docss=`${doc.id} => ${doc.data()}`
        let postData = doc.data();
        let postElement = document.createElement("div")
        postElement.classList = "bg-white shadow-lg rounded-lg p-6 mb-4";

        postElement.innerHTML= `<h2 class="text-2xl font-semibold text-gray-800 mb-2">${postData.postTitle}</h2>
        <p class="text-gray-700 mb-4">${postData.content}</p>
        <span class="text-gray-500 text-sm">Post ID: ${doc.id}</span>
    `;
        postsContainer.appendChild(postElement)
        
        });
     
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
     
})

let delpost= document.getElementById("delpost")
delpost.addEventListener("click",async()=>{
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      await deleteDoc(doc(db, "posts", uid));
      console.log("Document deleted for user with ID:", uid);
    } else {
      console.log("No user is signed in.");
    }
  } catch (e) {
    console.error("Error deleting document:", e);
  }
});

    
let updpost = document.getElementById("updpost");

updpost.addEventListener("click", async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
  
  const userRef = doc(db, "posts", uid); 

  try {
  
    await updateDoc(userRef, {
      postTitle: prompt("Update title") ,
      content: prompt("Update content") 
    });
    console.log("Data updated successfully"); 
  } catch (e) {
    console.error("Error updating data:", e); 
  }
  } else {
    console.log("No user is signed in.");
    }

});
