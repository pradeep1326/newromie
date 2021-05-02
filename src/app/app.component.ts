import { Component,  OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  changeTitle(){
    this.title = 'Click to change title';
  }

  // // Angular life cycle hooks

  // ngOnChanges(): void {
  //   // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   // Add '${implements OnChanges}' to the class.
  //   console.log('this is ng OnChanges');

  // }

  // ngOnInit(): void {
  //   this.title = 'new title';
  //   console.log('this is ngOnInit');
  // }

  // ngDoCheck(): void {
  //   // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   // Add 'implements DoCheck' to the class.

  // }

  // ngAfterContentInit(): void {
  //   // Called after ngOnInit when the component's or directive's content has been initialized.
  //   // Add 'implements AfterContentInit' to the class.
  //   console.log('this is ngAfterContentInit');
  // }

  // ngAfterContentChecked(): void {
  //   // Called after every check of the component's or directive's content.
  //   // Add 'implements AfterContentChecked' to the class.
  //   console.log('this is ngAfterContentChecked');

  // }

  // ngAfterViewInit(): void {
  //   // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   // Add 'implements AfterViewInit' to the class.
  //   console.log(' this is ngAfterViewInit');

  // }

  // ngAfterViewChecked(): void {
  //   // Called after every check of the component's view. Applies to components only.
  //   // Add 'implements AfterViewChecked' to the class.
  //   console.log('this is ngAfterViewChecked');

  // }

  // ngOnDestroy(): void {
  //   // Called once, before the instance is destroyed.
  //   // Add 'implements OnDestroy' to the class.
  //   console.log('this is ngOnDestroy');
  // }



}
