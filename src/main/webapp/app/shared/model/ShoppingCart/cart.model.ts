import { ICartProductRelation } from 'app/shared/model/ShoppingCart/cart-product-relation.model';
import { IProduct } from 'app/shared/model/ShoppingCart/product.model';
import { ICoupon } from 'app/shared/model/ShoppingCart/coupon.model';

export interface ICart {
  id?: number;
  costPerDelivery?: number;
  costPerProduct?: number;
  cartProductRelations?: ICartProductRelation[];
  products?: IProduct[];
  coupon?: ICoupon;
}

export class Cart implements ICart {
  constructor(
    public id?: number,
    public costPerDelivery?: number,
    public costPerProduct?: number,
    public cartProductRelations?: ICartProductRelation[],
    public products?: IProduct[],
    public coupon?: ICoupon
  ) {}
}
