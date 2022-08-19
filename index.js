const saturdayFun = (param)=> {
    if (param=== `bathe my dog`){
        return `This Saturday, I want to ${param}!`
    }
    return `This Saturday, I want to roller-skate!`
}

const mondayWork =(param)=>{
    if (param=== `work from home`){
        return `This Monday, I will ${param}.`
    }
    return `This Monday, I will go to the office.`
}

function wrapAdjective (closers) {
    return function(param = `a hard worker`) {
        return `You are ${closers}${param}${closers}!`
    }
}