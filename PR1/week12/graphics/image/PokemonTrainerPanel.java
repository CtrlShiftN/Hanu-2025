package week12.graphics.image;

import java.awt.Graphics;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;

import javax.imageio.ImageIO;
import javax.swing.JPanel;

public class PokemonTrainerPanel extends JPanel {
	private BufferedImage image;

	public PokemonTrainerPanel(String imagePath) {
		try {
			File f = new File(imagePath);
			this.image = ImageIO.read(f);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	@Override
	public void paintComponent(Graphics g) {
		g.drawImage(this.image, this.getWidth() / 3, this.getHeight() / 5, this);
	}
}
