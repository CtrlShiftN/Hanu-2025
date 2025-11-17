package week12.graphics.blank;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;

import javax.swing.JFrame;
import javax.swing.JPanel;

public class BlankWindow {
	public static void main(String[] args) {
		// Main Frame
		JFrame frame = new JFrame("JFrame demo");
		frame.setSize(500, 500);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setLocationRelativeTo(null);
		

		// Panel
		JPanel blankPanel = new BlankPanel();
		blankPanel.setPreferredSize(new Dimension(480, 360));
		blankPanel.setForeground(Color.RED);
		
		// Add components to frame
		frame.add(blankPanel, BorderLayout.CENTER);
		
		// Show the main frame
		frame.pack();
		frame.setVisible(true);
	}
}
