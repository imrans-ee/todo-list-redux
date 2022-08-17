export const addTodo =(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data,
        }
    }
}

export const deleteItem =(id)=>{
    return{
        type:"DELETE_TODO",
        id
    }
}

// login

export const login =(userName,password)=>{
  
    console.log(userName,password)
    if(userName==="imran" && password==123){
    
    return{
        
        type:"SIGN_IN",
        payload:{
            userName:userName,
            password:password,
        }
    }
}

}
