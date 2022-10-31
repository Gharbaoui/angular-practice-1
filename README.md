# AngularPractice1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

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
## Notes
<ul>
    <li> <strong> template:</strong> is a form of html that tells angular how to render </li>
    <li>
        <div>
            <strong> View:</strong>
            a template and component made up a view
        </div>
        <img src="https://angular.io/generated/images/guide/architecture/component-tree.png" />
    </li>
    <li>
        <div>
            <strong> data biding:</strong> 
            it links template with componet and it support two-way data binding
        </div>
        <img src="https://angular.io/generated/images/guide/architecture/databinding.png" />
        <div>
            <strong> Examples: </strong>
            <ul> 
                <li>
                    <i> [player]="michel jordan"</i>
                    passes the value michel jordan from the parent to a child property player of child compoent
                </li>
                <li>
                    <div>
                        <i> [(ngModel)]="hero.name"</i>
                        this is two-way data binding usually you will find it in forms
                        you could think of it that it uses property binding form comp to template
                        and event from template to comp
                    </div>
                    <img src="https://angular.io/generated/images/guide/architecture/component-databinding.png"/>
                </li>
                <li>
                    <div>
                        <b>
                            angular teamplates are daynmic when angular renders them 
                            it maniplut the dom according to the instructions given by 
                            the directives
                        </b>
                        directive is a class with a @Directive() decorator
                    </div>
                </li>
                <li>
                    <div>
                        change the appearance of behavior of dom and angular components with attribute directies
                    </div>
                    <div>
                        <b syle="display: block;"> this is how to make directive </b>
                        <ul>
                            <li> to create directive using cli <i> ng generate directive directive-name </i> </li>
                        </ul>
                    </div>
                    <div>
                        structural directives for example ngIf they are usually prefix with star like *ngIf
                        this is shorthand that angular transforms from [tag] *ngIf="hero" class="name">{{hero.name}} [/tag] to
                        [ng-template [ngIf]="hero"]
                        [tag] class="name"> {{hero.name}}[/tag]
                        [/ng-template]
                    </div>
                </li>
            </ul>
        </div>
    </li>

</ul>
