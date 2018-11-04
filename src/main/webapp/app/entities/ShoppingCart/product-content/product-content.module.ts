import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShoppingCartSharedModule } from 'app/shared';
import {
  ProductContentComponent,
  ProductContentDetailComponent,
  ProductContentUpdateComponent,
  ProductContentDeletePopupComponent,
  ProductContentDeleteDialogComponent,
  productContentRoute,
  productContentPopupRoute
} from './';

const ENTITY_STATES = [...productContentRoute, ...productContentPopupRoute];

@NgModule({
  imports: [ShoppingCartSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProductContentComponent,
    ProductContentDetailComponent,
    ProductContentUpdateComponent,
    ProductContentDeleteDialogComponent,
    ProductContentDeletePopupComponent
  ],
  entryComponents: [
    ProductContentComponent,
    ProductContentUpdateComponent,
    ProductContentDeleteDialogComponent,
    ProductContentDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShoppingCartProductContentModule {}
