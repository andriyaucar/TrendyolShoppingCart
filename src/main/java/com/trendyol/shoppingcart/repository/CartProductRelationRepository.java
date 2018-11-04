package com.trendyol.shoppingcart.repository;

import com.trendyol.shoppingcart.domain.CartProductRelation;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the CartProductRelation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CartProductRelationRepository extends JpaRepository<CartProductRelation, Long> {

}
