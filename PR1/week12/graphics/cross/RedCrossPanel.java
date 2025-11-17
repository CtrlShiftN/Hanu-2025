package week12.graphics.cross;

import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JPanel;

public class RedCrossPanel extends JPanel {
	@Override
	public void paintComponent(Graphics g) {
		g.setColor(Color.RED);
		g.fillOval(0, 0, 450, 450);
		g.setColor(Color.WHITE);
		g.fillRect(175, 75, 100, 100);
		g.fillRect(175, 175, 100, 100);
		g.fillRect(175, 275, 100, 100);
		g.fillRect(75, 175, 100, 100);
		g.fillRect(275, 175, 100, 100);
	}
}
