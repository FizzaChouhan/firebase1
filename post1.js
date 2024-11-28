import {
    db,
    collection,
    setDoc,
    doc,
    deleteDoc,
    updateDoc,
    getAuth,
    auth,
    onSnapshot,
  } from "./firebase.js";
  
  let postTitle = document.getElementById("postTitle");
  let content = document.getElementById("postContent");
  
  const auth = getAuth();
  const user = auth.currentUser;
  
  // Event listener for creating a post
  let post = document.getElementById("post");
  post.addEventListener("click", async () => {
    try {
      Swal.fire({
        title: "Please wait...",
        text: "Posting your data...",
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
      });
  
      if (user) {
        const uid = user.uid;
        let savedata = {
          postTitle: postTitle.value,
          content: content.value,
          uid: uid,
          time: new Date(),
        };
  
        await setDoc(doc(db, "posts", uid), savedata);
  
        Swal.close();
        Swal.fire("Success", "Post created successfully!", "success");
      } else {
        Swal.fire("Error", "User not authenticated.", "error");
      }
    } catch (e) {
      Swal.close();
      Swal.fire("Error", "Failed to create post: " + e.message, "error");
    }
  });
  
  // Real-time listener for posts collection
  function listenToPosts() {
    const postsContainer = document.getElementById("postDisplay");
    postsContainer.innerHTML = ""; // Clear previous content
  
    const postsRef = collection(db, "posts");
  
    onSnapshot(postsRef, (snapshot) => {
      postsContainer.innerHTML = ""; // Clear the UI on every update
      snapshot.forEach((doc) => {
        const postData = doc.data();
  
        // Create a dynamic post element
        let postElement = document.createElement("div");
        postElement.classList = "bg-white shadow-lg rounded-lg p-6 mb-4";
  
        postElement.innerHTML = `
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">${postData.postTitle}</h2>
          <p class="text-gray-700 mb-4">${postData.content}</p>
          <span class="text-gray-500 text-sm">Post ID: ${doc.id}</span>
          <button class="delete-btn bg-red-500 text-white p-2 rounded mt-3" data-id="${doc.id}">Delete</button>
          <button class="update-btn bg-green-500 text-white p-2 rounded mt-3" data-id="${doc.id}">Update</button>
        `;
  
        postsContainer.appendChild(postElement);
      });
  
      // Attach event listeners to dynamically generated buttons
      attachDeleteListeners();
      attachUpdateListeners();
    });
  }
  
  // Function to attach delete functionality to dynamically created delete buttons
  function attachDeleteListeners() {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        const docId = e.target.getAttribute("data-id");
  
        Swal.fire({
          title: "Are you sure?",
          text: "This will permanently delete the post.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await deleteDoc(doc(db, "posts", docId));
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
            } catch (e) {
              Swal.fire("Error", "Failed to delete post: " + e.message, "error");
            }
          }
        });
      });
    });
  }
  
  // Function to attach update functionality to dynamically created update buttons
  function attachUpdateListeners() {
    const updateButtons = document.querySelectorAll(".update-btn");
    updateButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const docId = e.target.getAttribute("data-id");
  
        Swal.fire({
          title: "Update Post",
          html: `
            <input id="new-title" class="swal2-input" placeholder="New Title">
            <textarea id="new-content" class="swal2-textarea" placeholder="New Content"></textarea>
          `,
          showCancelButton: true,
          confirmButtonText: "Update",
          preConfirm: () => {
            const newTitle = document.getElementById("new-title").value;
            const newContent = document.getElementById("new-content").value;
            if (!newTitle || !newContent) {
              Swal.showValidationMessage("Please enter both title and content");
            }
            return { updTitle: newTitle, updcontent: newContent };
          },
        }).then(async (result) => {
          if (result.isConfirmed) {
            const { updTitle, updcontent } = result.value;
            try {
              await updateDoc(doc(db, "posts", docId), {
                postTitle: updTitle,
                content: updcontent,
              });
              Swal.fire("Success", "Post updated successfully!", "success");
            } catch (e) {
              Swal.fire("Error", "Failed to update post: " + e.message, "error");
            }
          }
        });
      });
    });
  }
  
  // Start listening to real-time updates
  listenToPosts();
  