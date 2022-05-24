import { configureStore} from '@reduxjs/toolkit';

const reducer = (state={ unapplyedmaxvalue: 0, diceList: []}, action)=>{
    switch (action.type){
      
      case "add new dice":{
        let diceNumber = state.diceList.length;
        let maxdice=Math.trunc(document.body.clientWidth/180)*Math.trunc((document.body.clientHeight-75)/180)-1;
        let newState=JSON.parse(JSON.stringify(state));
          if (diceNumber<maxdice)  newState = {...newState, diceList: [...newState.diceList, action.payload]}
        return newState;
      };  
      case "delete dice":{
        let newState=JSON.parse(JSON.stringify(state));
        newState.diceList.splice(newState.diceList.findIndex(item=>item.id===action.payload.id),1);    //payload= id of deleted dice
        return newState;
      };
  
      case "Reroll all":{
        let newState=JSON.parse(JSON.stringify(state));
       for (var i=0;i<newState.diceList.length;i++){
        newState.diceList[i].value=1+Math.round(Math.random()*(newState.diceList[i].maxvalue-1));
       }
       return newState;
      };

      case "Reroll one":{
        let newState=JSON.parse(JSON.stringify(state));
        let index=newState.diceList.findIndex(item=>item.id===action.payload.id);
        newState.diceList[index].value=1+Math.round(Math.random()*(newState.diceList[index].maxvalue-1));
        return newState;
      };    
  
      case "save Unapplyed Setting":{
        let newState=JSON.parse(JSON.stringify(state)); 
        return {...newState, unapplyedmaxvalue: action.payload.unapplyedmaxvalue};
      };  
      
      case "set max value":{
        let newState=JSON.parse(JSON.stringify(state));
        newState.diceList[(newState.diceList.findIndex(item=>item.id===action.payload.id))].maxvalue=newState.unapplyedmaxvalue;
        return newState;
      }; 

      case "Clear table":    return {...state, diceList: []};
  
      
  
      default: return state;
    } ;
  };
  
  export const addNewDiceAction = ()=>{return {type: "add new dice", payload: {id: Date.now(), value: 1+Math.round(Math.random()*5), maxvalue: 6}}};
  
  export const store = configureStore({ reducer: reducer});
  