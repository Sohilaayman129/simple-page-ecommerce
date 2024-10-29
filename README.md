# Ecommerceproducts💙
  
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

I will make a simple ecommerce that displays products to the user and each product has its price,evaluation and category.I can search by name of the product .The project is responsive on all devices.

*Technologies used*: **Angular 17**, Bootstrap,Routing, Fontawesome,Api integration,Scss, pipes ,loading for each product until it comes.
**interceptors** We will handel the error from one place,SweetAlert2 and the **signals**.
 this a big **challenge** to implement the project without Figma and maintain it Response.  


 For more information and the rationale behind this,Visit the [ Website ](https://simpleecommercepage.netlify.app)

![Alt](https://i0.wp.com/www.thestartupfounder.com/wp-content/uploads/2022/04/website-reputation2.jpg?fit=612%2C378&ssl=1)
  
 this is A `Code`
*  *we using* **signals** 
```Typescript

loading:writablesignals<any>=signal(any)

``` 
* writing in *app.component.scss*  to handel selector for **footer**

```Scss
:host{
    display:flex;
    direction:column;
    justify-content:center;
    min-hight:100vh;

}

```
* using **SweetAlert2** to show and handels any error 
```typescript 
         Swal.fire({
          title:'Oops!',
          text: err.error.message ,
          icon: 'error',
          confirmButtonText: 'Okay '
        })

```
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
