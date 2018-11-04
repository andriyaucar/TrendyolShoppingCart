package com.trendyol.shoppingcart.repository;

import com.trendyol.shoppingcart.domain.Coupon;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Coupon entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CouponRepository extends JpaRepository<Coupon, Long> {

}
