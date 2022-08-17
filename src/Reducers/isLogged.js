//

// const user = {
//     userName : "imran",
//     password:123,
//     value:true
// }


//

// const loggedReducer = (state = user,action)=>{

//     switch(action.type){
//         case "SIGN_IN":
//             if(user.userName==="imran" && user.password){
//                 return  !state

//             }
            
//         default: 
//             return state
//     }

// }

// export default loggedReducer;



const loggedReducer = (state = true,action)=>{

    switch(action.type){
        case "SIGN_IN":
            return  !state
            
        default: 
            return state
    }

}

export default loggedReducer;