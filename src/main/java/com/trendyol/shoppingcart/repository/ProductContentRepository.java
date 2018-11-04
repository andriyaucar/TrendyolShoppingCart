package com.trendyol.shoppingcart.repository;

import com.trendyol.shoppingcart.domain.ProductContent;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ProductContent entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductContentRepository extends JpaRepository<ProductContent, Long> {

}
