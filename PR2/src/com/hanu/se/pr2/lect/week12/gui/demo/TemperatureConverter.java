package com.hanu.se.pr2.lect.week12.gui.demo;

import java.awt.Color;
import java.awt.event.*;
import javax.swing.*;

public class TemperatureConverter implements ActionListener {
	private static JLabel celsiusLabel;
	private static JLabel resultLabel;
	private static JTextField celsiusField;
	private static JButton convertBtn;

	public static void main(String[] args) {
		JFrame mainFrame = new JFrame("Temperature Converter");
		mainFrame.setSize(300, 170);
		mainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		mainFrame.setLocationRelativeTo(null);
		mainFrame.setResizable(false);
		// create panel
		JPanel panel = new JPanel();
		panel.setLayout(null);

		celsiusLabel = new JLabel("Enter Celsius:");
		celsiusLabel.setBounds(20, 20, 100, 25);

		celsiusField = new JTextField();
		celsiusField.setBounds(130, 20, 120, 25);

		convertBtn = new JButton("Convert");
		convertBtn.setBounds(90, 60, 100, 30);
		convertBtn.addActionListener(new TemperatureConverter());

		resultLabel = new JLabel("");
		resultLabel.setBounds(20, 100, 250, 25);

		panel.add(celsiusLabel);
		panel.add(celsiusField);
		panel.add(convertBtn);
		panel.add(resultLabel);

		mainFrame.add(panel);
		mainFrame.setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		try {
			double celsius = Double.parseDouble(celsiusField.getText());
			double fahrenheit = celsius * 9 / 5 + 32;
			resultLabel.setText("Fahrenheit: " + fahrenheit);
		} catch (Exception ex) {
			resultLabel.setForeground(Color.RED);
			resultLabel.setText("Invalid input: " + ex.getMessage());
		}
	}
}
