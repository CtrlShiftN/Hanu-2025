package com.hanu.se.pr2.lect.week11.generic.demo;

import java.io.Serializable;

public class ProductDAO extends DAO {

	@Override
	@SuppressWarnings("unchecked")
	public void update(Object entity) {
		java.util.List<Product> productList = this.dataList;
		for (int i = 0; i < productList.size(); i++) {
			Product existingProduct = productList.get(i);
			if (existingProduct.getName().equals(((Product) entity).getName())) {
				dataList.set(i, entity);
				break;
			}
		}
	}

	@Override
	public Product find(Serializable id) {
		for (Object product : this.dataList) {
			if (((Product) product).getName().equals(id)) {
				return (Product) product;
			}
		}
		return null;
	}

}
