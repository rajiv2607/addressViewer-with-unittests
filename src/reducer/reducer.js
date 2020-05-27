import * as ActionConstants from "../action/ActionsConstants";


export const initialState =  {  items :   [
    { customerId:1, name:"Christina" , age : 28 , gender : "Female", address : ['711-2880 Nulla St.Mankato Mississippi 96522(257) 563-7401', "P.O. Box 283 8562 Fusce Rd.Frederick Nebraska 20620"]},
    { customerId:2, name:"Manuele" , age : 48 , gender : "Male", address : ["Patna"]},
    { customerId:3, name:"Cisco remon" , age : 38 , gender : "Male", address : ["606-3727 Ullamcorper. StreetRoseville NH 11523"]},
    { customerId:4, name:"Alan berry" , age : 98 , gender : "Male", address : ["Theodore LoweAp #867-859 Sit Rd.Azusa New York 39531","511-5762 At Rd.Chelsea MI 67708"]},
    { customerId:5, name:"Kumar" , age : 18 , gender : "Male", address : []}

    ],

    address : [],
    showDialogue: false
}

export const reducer = function(state = initialState, action)  {
    switch(action.type) {
        case ActionConstants.SHOW_DATA : {
           if(action.id) { 
         state.address = state.items.find((data) => {
            return data.customerId == action.id
          }).address
           }
        return {
        ...state
        }  
        }

        case ActionConstants.SHOW_DIALOGUE: {
          state.showDialogue = action.value
          return {
              ...state  
          }
        }
    }
    return state
}