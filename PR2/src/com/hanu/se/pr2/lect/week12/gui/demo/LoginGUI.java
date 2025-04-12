package com.hanu.se.pr2.lect.week12.gui.demo;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class LoginGUI implements ActionListener {
	private static JLabel titleLabel;
	private static JLabel usernameLabel;
	private static JLabel passwordLabel;
	private static JLabel message;
	private static JTextField usernameTF;
	private static JPasswordField passwordTF;
	private static JButton loginBtn;

	public static void main(String[] args) {
		JFrame mainFrame = new JFrame("Login Form");
		mainFrame.setSize(350, 230);
		mainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		mainFrame.setLocationRelativeTo(null);
		mainFrame.setResizable(false);
		// create panel
		JPanel panel = new JPanel();
		panel.setLayout(null);
		// create components
		titleLabel = new JLabel("Simple Login Form");
		titleLabel.setBounds(10, 10, 320, 35);
		titleLabel.setHorizontalAlignment(JLabel.CENTER);
		titleLabel.setFont(new Font("Arial", Font.BOLD, 20));

		usernameLabel = new JLabel("Username");
		usernameLabel.setBounds(10, 60, 80, 25);
		usernameTF = new JTextField(20);
		usernameTF.setBounds(100, 60, 165, 25);

		passwordLabel = new JLabel("Password");
		passwordLabel.setBounds(10, 90, 80, 25);
		passwordTF = new JPasswordField();
		passwordTF.setBounds(100, 90, 165, 25);

		loginBtn = new JButton("Login");
		loginBtn.setBounds(135, 130, 80, 25);
		loginBtn.addActionListener(new LoginGUI());

		message = new JLabel("");
		message.setBounds(10, 160, 320, 25);
		// add all components to panel
		panel.add(titleLabel);
		panel.add(usernameLabel);
		panel.add(usernameTF);
		panel.add(passwordLabel);
		panel.add(passwordTF);
		panel.add(loginBtn);
		panel.add(message);
		// add panel to frame
		mainFrame.add(panel);
		// visualize the frame
		mainFrame.setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		String username = usernameTF.getText();
		String password = String.valueOf(passwordTF.getPassword());
		// simulate SQL queries to find the account from DB
		if (username.equals("Admin") && password.equals("Admin@1234")) {
			message.setForeground(Color.GREEN);
			message.setText("Login Successfully!");
		} else {
			message.setForeground(Color.RED);
			message.setText("Login Failed. Please try again!");
		}

	}

}
