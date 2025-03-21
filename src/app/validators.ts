import { Directive } from "@angular/core";
import { AbstractControl } from "@angular/forms";

export function tcsMail(control:AbstractControl){
    if(control.value.includes('@tcs.com')){
        return null;
    }else{
        return { 'tcsMail':'please use TCS mail only'};
    }
}