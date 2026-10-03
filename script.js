const categoryData = {

    card1: {
        image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQEVjk7wFYlP7g/articleshare-shrink_800/articleshare-shrink_800/0/1711419403213?e=2147483647&v=beta&t=WXcam2-l-oLVBGIgFCHYB2G8gjbFuCtrpj7QT5ChdfE",
        title: "Loungewear",
        offer: "30–60% OFF",
        button: "Shop Now",
        alt: "Loungewear"
    },

    card2: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAXcYTRvTJWClX1M32-CSwhomIIXHtmak018YtwvcxA7JADW42mT0TGw&s=10",
        title: "Western Wear",
        offer: "40–70% OFF",
        button: "Shop Now",
        alt: "Western Wear"
    },

    card3: {
        image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/2/22/970703b9-bc15-49dd-b557-e6a27c0a4ac81613986993319-BBF_SIS_01.jpg",
        title: "Ethnic Wear",
        offer: "30–60% OFF",
        button: "Shop Now",
        alt: "Ethnic Wear"
    },

    card4: {
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/6e64b567944767.5b4c4820540bf.jpg",
        title: "Loungewear",
        offer: "30–60% OFF",
        button: "Shop Now",
        alt: "Loungewear"
    },

    card5: {
        image: "https://i.pinimg.com/736x/33/81/c9/3381c91a9ee925021a74563e787d9aa0.jpg",
        title: "Western Wear",
        offer: "40–70% OFF",
        button: "Shop Now",
        alt: "Western Wear"
    },

    card6: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4oD9BU4G01VU_iYHoTGKVtOEPx9lG-jBZk1JcP8AoK03Rr_kiVPpPyE&s=10",
        title: "Ethnic Wear",
        offer: "30–60% OFF",
        button: "Shop Now",
        alt: "Ethnic Wear"
    },

    // nextline

    card7: {
        image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQEVjk7wFYlP7g/articleshare-shrink_800/articleshare-shrink_800/0/1711419403213?e=2147483647&v=beta&t=WXcam2-l-oLVBGIgFCHYB2G8gjbFuCtrpj7QT5ChdfE",
        title: "Loungewear",
        offer: "30–60% OFF",
        button: "Shop Now",
        alt: "Loungewear"
    },

    card8: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAXcYTRvTJWClX1M32-CSwhomIIXHtmak018YtwvcxA7JADW42mT0TGw&s=10",
        title: "Western Wear",
        offer: "40–70% OFF",
        button: "Shop Now",
        alt: "Western Wear"
    },

    card9: {
        image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/2/22/970703b9-bc15-49dd-b557-e6a27c0a4ac81613986993319-BBF_SIS_01.jpg",
        title: "Ethnic Wear",
        offer: "30–60% OFF",
        button: "Shop Now",
        alt: "Ethnic Wear"
    },

    card10: {
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/6e64b567944767.5b4c4820540bf.jpg",
        title: "Loungewear",
        offer: "30–60% OFF",
        button: "Shop Now",
        alt: "Loungewear"
    },

    card11: {
        image: "https://i.pinimg.com/736x/33/81/c9/3381c91a9ee925021a74563e787d9aa0.jpg",
        title: "Western Wear",
        offer: "40–70% OFF",
        button: "Shop Now",
        alt: "Western Wear"
    },

    card12: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4oD9BU4G01VU_iYHoTGKVtOEPx9lG-jBZk1JcP8AoK03Rr_kiVPpPyE&s=10",
        title: "Ethnic Wear",
        offer: "30–60% OFF",
        button: "Shop Now",
        alt: "Ethnic Wear"
    }

};


const categoryContainer = document.getElementById("categoryContainer");

for (const key in categoryData) {

    const card = categoryData[key];

    categoryContainer.innerHTML += `
    
        <div class="fashion-card">

            <div class="fashion-image">

                <img
                    src="${card.image}"
                    alt="${card.alt}"
                >

            </div>


            <div class="fashion-content">

                <h3>${card.title}</h3>

                <h2>${card.offer}</h2>

                <p>${card.button}</p>

            </div>

        </div>

    `;
}