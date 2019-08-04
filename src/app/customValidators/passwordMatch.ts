import { FormGroup, FormControl } from '@angular/forms';

export function passwordMatch(controlName: string, matchingControlName: string) {
    return (formGroup:FormGroup) =>{
        const pwd = formGroup.controls[controlName]
        const confirmPwd = formGroup.controls[matchingControlName]
        if(pwd.value !== confirmPwd.value){
            confirmPwd.setErrors({'notMatch' : true});
        }
    }
}

// export function passwordValidation(){
//     // at least one number, one lowercase and one uppercase letter & at least six characters
//    return(control:FormControl)=>{
//     const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
//     // test the value of the control against the regexp supplied
//     const valid = regExp.test(control.value);

//     // if true, return no error (no error), else return error passed in the second parameter
//     return valid ? null : control.setErrors({'pwdValidation':true});
    
//    }
    

// }