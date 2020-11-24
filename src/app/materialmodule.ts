import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



const MATERIAL = [MatListModule, MatDividerModule,MatInputModule,MatFormFieldModule,MatButtonModule];


@NgModule({
    imports: [MATERIAL],
    exports: [MATERIAL]
})

export class MaterialModule { }