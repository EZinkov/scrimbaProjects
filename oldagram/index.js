const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const mainEl = document.getElementById("container-element")
let userLikes = false

function displayData() {
    for (let i = 0; i < posts.length; i++) {
        mainEl.innerHTML += `
        <section class="post">
            <div class="sub-header">
                <img class="user-avatar" src="${posts[i].avatar}" alt="">
                <div class="user-info">
                    <span class="user-name">${posts[i].name}</span>
                    <span class="user-location">${posts[i].location}</span>
                </div>
            </div>
            <div>
                <img class="post-img" src="${posts[i].post}" alt="">
            </div>
            <div class="interactive-panel">
                <img class="icon" src="/images/icon-heart.png" alt="">
                <img class="icon" src="/images/icon-comment.png" alt="">
                <img class="icon" src="/images/icon-dm.png" alt="">
            </div>
            <div class="post-info">
                <p class="likes">${posts[i].likes} likes</p>
                <p><span class="login">${posts[i].username}</span> just took a few mushrooms lol</p>
            </div>
        </section>`
    }
}

displayData()