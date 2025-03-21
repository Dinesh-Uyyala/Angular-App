# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.





Directives
==========

DIrectives are used to alter DOM 


1) Structural Directives:
    *ngFor, *ngIf

2) Attribute Directives
    ngStyle, ngClass


Pipes | Filters
===============

Alter the Data Format

uppercase
lowercase
date
date :'yyyy-MM-dd'







All possible API calls

1) all              get                 get(URL)
2) specific         get                 get(URL/id)
3) filtering        get                 get(URL?filter=term)
4) sorting          get                 get(URL?sortBy=column& order=asc/desc)
5) pagination       get                 get(URL?limit=limit&page=page)

6) create           post                post(URL,data)
7) update           put                 put(URL/id,data)
8) delete           delete              delete(URL/id)




Validations
===========

ts:
===
age = new FormControl('',[validators.required,validators.min(18),validators.max(100)]);

HTML:
=====
<div *ngIf="Controls?.touched && Controls?.invalid">
        <p *ngIf="Controls?.errors?.['required']">XXXXXXX</p>
        <p *ngIf="Controls?.errors?.['min']">XXXXXXX</p>
        <p *ngIf="Controls?.errors?.['max']">XXXXXXX</p>
    </div>

Controls:
=========

1) FormGroup :  userForm.get('age')
2) Nested FormGroup :  userForm.address.get('pin')
3) FormArray: cardsFormArray.controls[i]?.get('cvv')