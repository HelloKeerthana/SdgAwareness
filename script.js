const imageUrls = [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sustainable_Development_Goal_1.png/200px-Sustainable_Development_Goal_1.png?20180106214026", link: "sdg1.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Sustainable_Development_Goal_2.png/200px-Sustainable_Development_Goal_2.png?20180106213933", link: "sdg2.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sustainable_Development_Goal_3.png/200px-Sustainable_Development_Goal_3.png?20180106213914", link: "sdg3.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Sustainable_Development_Goal_4.png/200px-Sustainable_Development_Goal_4.png?20180106213857", link: "sdg4.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sustainable_Development_Goal_5.png/200px-Sustainable_Development_Goal_5.png?20180106213842", link: "sdg5.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sustainable_Development_Goal_6.png/900px-Sustainable_Development_Goal_6.png?20180106213729", link: "sdg6.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sustainable_Development_Goal_7.png/200px-Sustainable_Development_Goal_7.png?20180106213712", link: "sdg7.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sustainable_Development_Goal_8.png/200px-Sustainable_Development_Goal_8.png?20180106213606", link: "sdg8.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sustainable_Development_Goal_9.png/200px-Sustainable_Development_Goal_9.png?20180106213548", link: "sdg9.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sustainable_Development_Goal_10.png/200px-Sustainable_Development_Goal_10.png?20180106213114", link: "sdg10.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Sustainable_Development_Goal_11.png/200px-Sustainable_Development_Goal_11.png?20180106213038", link: "sdg11.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sustainable_Development_Goal_12.png/200px-Sustainable_Development_Goal_12.png?20180106213018", link: "sdg12.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sustainable_Development_Goal_13.png/200px-Sustainable_Development_Goal_13.png?20180106212953", link: "sdg13.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Sustainable_Development_Goal_14.png/200px-Sustainable_Development_Goal_14.png?20180106212933", link: "sdg14.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sustainable_Development_Goal_15.png/200px-Sustainable_Development_Goal_15.png?20180106212905", link: "sdg15.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sustainable_Development_Goal_16.png/200px-Sustainable_Development_Goal_16.png?20180106212820", link: "sdg16.html" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sustainable_Development_Goal_17.png/900px-Sustainable_Development_Goal_17.png?20180106212721", link: "sdg17.html" }
];


        const imageContainer = document.getElementById('imageContainer');

        imageUrls.forEach(item => {
            const a = document.createElement('a');
            a.href = item.link;
            a.target = "_blank";

            const img = document.createElement('img');
            img.src = item.url;
            img.alt = "SDG Image";
            img.classList.add("shadow-sm");

            a.appendChild(img);
            imageContainer.appendChild(a);
        });