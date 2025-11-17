package week12.graphics.image;

import java.awt.BorderLayout;
import java.awt.Dimension;

import javax.swing.JFrame;
import javax.swing.JPanel;

import week12.graphics.cross.RedCrossPanel;

public class PokemonTrainerDemo {
	public static void main(String[] args) {
		// Main Frame
		JFrame frame = new JFrame("Pokemon Trainer");
		frame.setSize(500, 500);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setLocationRelativeTo(null);
		frame.setResizable(false);

		// Panel
		JPanel pokemonTrainerPanel = new PokemonTrainerPanel("src/week12/graphics/image/pokemon_trainer.png");
		pokemonTrainerPanel.setPreferredSize(new Dimension(500, 500));

		// Add components to frame
		frame.add(pokemonTrainerPanel, BorderLayout.CENTER);

		// Show the main frame
		frame.pack();
		frame.setVisible(true);
	}
}
