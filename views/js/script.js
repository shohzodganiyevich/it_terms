const form=document.getElementById("login_form")
    form.addEventListener("submit", async(e)=>{
        e.preventDefault()
        const email=document.getElementById("email").value
        const password=document.getElementById("password").value
        try{
            fetch("localhost:3000/api/auth/login", {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({ email, password})
            }).then((res)=>console.log(res))
        }catch(err){
            console.log(err)
        }
    })