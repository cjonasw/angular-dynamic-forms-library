# angular-dynamic-forms-library
Currently does not work, publishing for demonstration purposes.

Build fails on:
```
ng build myProject
```


error message:

```
charlies-mbp:dynamic-form charliewalter$ ng build myLibrary
Building Angular Package                                                                              s.js:7:71
Building entry point 'my-library'
Compiling TypeScript sources through ngc                                                              source-files.js:3:12
BUILD ERROR                                                                                           lib/ngc/compile-sourprojects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(8,33): : Property 'type' does not exist on type 'QuestionBase<any>'.                                                 v5/entry-point/ts/coprojects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(11,15): : Property 'options' does not exist on type 'QuestionBase<any>'.
projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(4,42): : Propermpile-ngc.transform.ty 'type' does not exist on type 'QuestionBase<any>'.

Error: projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(8,33): : Property 'type' does not exist on type 'QuestionBase<any>'.
projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(11,15): : Property 'options' does not exist on type 'QuestionBase<any>'.
projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(4,42): : Property 'type' does not exist on type 'QuestionBase<any>'.

    at Object.<anonymous> (/Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ngc/compile-source-files.js:40:68)
    at Generator.next (<anonymous>)
    at /Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ngc/compile-source-files.js:7:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ngc/compile-source-files.js:3:12)
    at Object.compileSourceFiles (/Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ngc/compile-source-files.js:17:12)
    at Object.<anonymous> (/Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ng-v5/entry-point/ts/compile-ngc.transform.js:31:32)
    at Generator.next (<anonymous>)
    at /Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ng-v5/entry-point/ts/compile-ngc.transform.js:7:71
    at new Promise (<anonymous>)

projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(8,33): : Property 'type' does not exist on type 'QuestionBase<any>'.
projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(11,15): : Property 'options' does not exist on type 'QuestionBase<any>'.
projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(4,42): : Property 'type' does not exist on type 'QuestionBase<any>'.

Error: projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(8,33): : Property 'type' does not exist on type 'QuestionBase<any>'.
projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(11,15): : Property 'options' does not exist on type 'QuestionBase<any>'.
projects/my-library/src/lib/dynamic-form-question/dynamic-form-question.component.html(4,42): : Property 'type' does not exist on type 'QuestionBase<any>'.

    at Object.<anonymous> (/Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ngc/compile-source-files.js:40:68)
    at Generator.next (<anonymous>)
    at /Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ngc/compile-source-files.js:7:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ngc/compile-source-files.js:3:12)
    at Object.compileSourceFiles (/Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ngc/compile-source-files.js:17:12)
    at Object.<anonymous> (/Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ng-v5/entry-point/ts/compile-ngc.transform.js:31:32)
    at Generator.next (<anonymous>)
    at /Users/charliewalter/Downloads/dynamic-form/node_modules/ng-packagr/lib/ng-v5/entry-point/ts/compile-ngc.transform.js:7:71
    at new Promise (<anonymous>)```
