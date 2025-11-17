package week12.graphics.cross;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;

import javax.swing.JFrame;
import javax.swing.JPanel;

import week12.graphics.blank.BlankPanel;

public class RedCrossDemo {

	public static void main(String[] args) {
		// Main Frame
		JFrame frame = new JFrame("Red Cross");
		frame.setSize(500, 500);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setLocationRelativeTo(null);
		frame.setResizable(false);

		// Panel
		JPanel crossPanel = new RedCrossPanel();
		crossPanel.setPreferredSize(new Dimension(450, 450));

		// Add components to frame
		frame.add(crossPanel, BorderLayout.CENTER);

		// Show the main frame
		frame.pack();
		frame.setVisible(true);

	}

}
