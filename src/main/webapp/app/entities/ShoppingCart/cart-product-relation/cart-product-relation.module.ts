import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShoppingCartSharedModule } from 'app/shared';
import {
  CartProductRelationComponent,
  CartProductRelationDetailComponent,
  CartProductRelationUpdateComponent,
  CartProductRelationDeletePopupComponent,
  CartProductRelationDeleteDialogComponent,
  cartProductRelationRoute,
  cartProductRelationPopupRoute
} from './';

const ENTITY_STATES = [...cartProductRelationRoute, ...cartProductRelationPopupRoute];

@NgModule({
  imports: [ShoppingCartSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CartProductRelationComponent,
    CartProductRelationDetailComponent,
    CartProductRelationUpdateComponent,
    CartProductRelationDeleteDialogComponent,
    CartProductRelationDeletePopupComponent
  ],
  entryComponents: [
    CartProductRelationComponent,
    CartProductRelationUpdateComponent,
    CartProductRelationDeleteDialogComponent,
    CartProductRelationDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShoppingCartCartProductRelationModule {}
