package com.hanu.se.pr2.lect.week11.generic.demo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public abstract class DAO<Entity> {
	protected java.util.List<Entity> dataList = new ArrayList<>();

	public void add(Entity entity) {
		dataList.add(entity);
	}

	public void remove(Entity entity) {
		dataList.remove(entity);
	}

	public List<Entity> getList() {
		return dataList;
	}

	public abstract void update(Entity entity);

	public abstract Entity find(Serializable id);
}
