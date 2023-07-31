class Person {


    constructor(name, age, country) {

        this.name = name;
        this.age = age;
        this.country = country;

    }

    getPersonDetails = () => {
        console.log("Name    : ", this.name);
        console.log("Age     : ", this.age);
        console.log("Country : ", this.country);
    }

}


const productList = {
    products: [
        {
            title: "A Carpet",
            imageUrl: "https://images.unsplash.com/photo-1564444247765-a377a8bfd0b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            price: 89.99,
            description: "A new Carpet built by Levinston"
        },
        {
            title: "A Luxuary Pillow",
            imageUrl: "https://plus.unsplash.com/premium_photo-1686167985756-547e99e364e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGlsbG93fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            price: 200.99,
            description: "Levinston High Class Pillow"
        }
    ],
    render() {
        const renderHook = document.getElementById("app");
        const prodList = document.createElement("ol");
        prodList.className = "product-list";
        this.products.forEach((item, index) => {
            const prodEle = document.createElement("li");
            prodEle.className = "product-item"
            prodEle.innerHTML = `
            <div>  
                 <img src="${item.imageUrl}" alt="">
                 <div class="product-item_content">
                        <h2>${item.title}</h2>
                        <h3>${item.price}</h3>
                        <p>${item.description}</p>
                </div>
             </div>
            `

            prodList.append(prodEle);
        })
        renderHook.append(prodList)

    }


}

productList.render()
// const sahan = new Person("SAHAN", 26, "ENGLAND")
// sahan.getPersonDetails();

