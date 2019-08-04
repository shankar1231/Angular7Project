import { FormControl } from "@angular/forms";

export function onlyTextValidators(){
    return(control:FormControl)=>{
        const regexp = /^[a-zA-Z]$/;
        console.log('outside of If')
        if(!regexp.test(control.value)){
            console.log('in If')
            control.setErrors({'onlyText' : true})
        }
    }
}

