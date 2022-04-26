
async function makeAPICall(URL) {

    try {

        let res = await fetch(URL);

        let data = await res.json();
        return data;

    } catch (error) {
        console.log(error);
    }


}

function appendPicture(data, parent) {

    data.forEach((element) => {

        var div = document.createElement("div");

        let image = document.createElement("img");
        image.src = element.urls.small;

        let p = document.createElement("p");
        p.innerHTML = element.user.name;

        div.append(image, p);

        parent.append(div)

    });
}

export { makeAPICall , appendPicture}