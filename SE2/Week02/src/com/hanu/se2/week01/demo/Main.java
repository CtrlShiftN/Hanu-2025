package com.hanu.se2.week01.demo;

import java.sql.*;

public class Main {

	public static void main(String[] args) {
		try {
			Connection conn = (new DBConnect()).getConnection();
			Statement stm = conn.createStatement();
			String query = "SELECT * FROM book";
			ResultSet rs = stm.executeQuery(query);
			while (rs.next()) {
				System.out.println("Book ID: " + rs.getString(1));
				System.out.println("Book Title: " + rs.getString(2));
				System.out.println("Book Author: " + rs.getString(3));
				System.out.println("Book Price: " + rs.getString(4));
				System.out.println("-------------------------------");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
