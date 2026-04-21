import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'lib-input-error',
  imports: [],
  templateUrl: './input-error.html',
  styleUrl: './input-error.css',
})
export class InputError {
@Input() control:AbstractControl | null= null;
@Input() backendError:string='';
@Input() fieldName:string='';
// Error Method
getError():string{
  // Front end errors
  if(this.control?.invalid && (this.control?.touched || this.control?.dirty)){
    if(this.control.errors?.['required'])
      return `${this.fieldName} is required` ;

    if(this.control.errors?.['email'])
      return 'Invalid Email Format';

    if(this.control.errors?.['minlength'])
      return `${this.fieldName} must be at least ${this.control.errors['minlength'].requiredLength} characters`;
  
    
  }
  if(this.control?.root?.errors?.['mismatch'] && (this.control?.touched || this.control?.dirty) &&   this.fieldName.toLowerCase().includes('confirm')){
      return 'Passwords do not match';

    }
  // Back end errors
  if(this.backendError)
    return this.backendError;


  return '';

}
}
