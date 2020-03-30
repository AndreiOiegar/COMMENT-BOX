const comments = [{
    id: Math.floor(Math.random() * 100),
    name: 'email2@yahoo.com',
    msg: 'ce faci2?'
} ]


const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const coomentList = document.querySelector('#commentList');
btn.addEventListener('click', function() {
   
   const uniqueID = Math.floor(Math.random() * 100);

    comments.push({
        id: uniqueID,
        name: 'email1@gmail.com',
        msg: input.value
    });
    var node = createCommentNode({
        id: uniqueID,
        name: 'email1@gmail.com',
        msg: input.value
    });
    document.body.appendChild(node)
})


displayComments(comments, document.body)


function createCommentNode(comment) {
    const containerBox = document.createElement('div');
    containerBox.id = "list-comments";

    const userData = document.createElement('div');
    userData.id = "user";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete_button";
    deleteBtn.innerText = "Delete";
    
    
    deleteBtn.setAttribute("id", "comm-"+ comment.id )
    // deleteBtn.setAttribute("onclick", "myCommDelete()")
    console.log(comment.id)
    

    deleteBtn.addEventListener('click', function(event){
        event.preventDefault();

        console.log(event.target.getAttribute("id"))
        containerBox.remove()

    })
    

    const img = document.createElement("img");
    img.src = "https://www.w3schools.com/howto/img_avatar.png";


    const title = addTitle(comment.name);
    const p = addParagraph(comment.msg);

    // containerBox.appendChild(image);
    containerBox.appendChild(userData)
    userData.appendChild(img);
    userData.appendChild(title);
    containerBox.appendChild(p);
    containerBox.appendChild(deleteBtn);


    return containerBox;
}

function addParagraph(text) {
    const newP = document.createElement("p");
    newP.innerText = text;
    return newP;
}

function addTitle(title) {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    return h1;
}

function displayComments(comments, containerNode) {
    


    // parcurgere commentarii
    for (let idx = 0; idx < comments.length; idx++) {
        const comment = comments[idx];
        // creeaza prezentarea comentariului in DOM
        const commentNode = createCommentNode(comment);
        // punem in dom comentariul
        containerNode.appendChild(commentNode);
    }
}
