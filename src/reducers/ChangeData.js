

 export const initialState = [];

 export const ChangeData = (state = initialState , action)=>{
    const product = action.payload;
    
    switch(action.type){
        case 'ADDPRODUCT':
            // check for eixst 
            const exist = state.find((x)=>{
                return x.id === product.id;
            })
   
            if(exist){
                 state.map((x)=>{
                    return x.id === product.id ? {...x,qty: x.qty+1} : x
                })
            }else{
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            }

    
            break;
        case 'DELETPRODUCT' :
            const exist1 = state.find((x)=> x.id === product.id);
            if(exist1.qty === 1){
                return state.filter((x)=> x.id !== exist1.id)
            }else{
                return state.map((x)=>{
                    return x.id === product.id ? {...x,qty : x.qty-1} : x
                })
            }
            break;
        case 'LIKE':
          const exist2 = state.find((x)=>{
                  return x.id === product.id;
          })
          if(exist2){
                return  state.map((x)=>{
                return x.id ===product.id ? {...x,isLike:true} : {...x,isLike:false};
               });
                
               
          }else{
            return state.map((x)=>{
                return x.id===product.id ? {...x,isLike:false} : x
            })
          }
          
          default:
            return state;
        break; 
       
    }

 }