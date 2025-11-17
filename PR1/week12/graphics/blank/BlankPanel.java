package week12.graphics.blank;

import java.awt.Color;
import java.awt.Graphics;

import javax.swing.JPanel;

public class BlankPanel extends JPanel {
	@Override
	public void paintComponent(Graphics g) {
		g.setColor(Color.RED);
		g.fillRect(0, 0, 480, 360);
	}
}
