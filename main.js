window.addEventListener("DOMContentLoaded" , () => {
    const form = renderElement("form")
    const handleSub = (event) =>{

        event.preventDefault()
        let array = [1,2 ,3, 4, 5,6,7,8,9,0, "a", "b" , "c" , "d" , "e" , "f" ,"g" , "h" ,"i",
        1,2 ,3, 4, 5,6,7,8,9,0, "a", "b" , "c" , "d" , "e" , "f" ,"g" , "h" ,"i"]
        for(let i = 0 ; i<array.length ; i++){
            let result = ''
            result+= array[parseInt(Math.random() * i)]
        }
        const data = new FormData(event.terget)
        const user = {
             id: uuid.v4(),
            name: data.get("name"),
            username : data.get("username")
        }
        console.log(result);
        let natija = [{token} , {user}]
        window.localStorage.setItem("user_shop" , JSON.stringify(natija))
        JSON.parse(natija)
    }
    form.addEventListener("submit" , handleSub)
})