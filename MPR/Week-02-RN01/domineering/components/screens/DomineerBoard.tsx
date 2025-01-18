import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const BOARD_SIZE = 5; // Change this value for a larger board
// TODO: change board size from m x m => m x n
// TODO: change cell size (responsive with device width and height)

type Player = 'H' | 'V';

type Cell = {
  occupiedBy: Player | null;
};

const initializeBoard = (): Cell[][] => {
  return Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => ({ occupiedBy: null }))
  );
};

const DomineeringGame = () => {
  const [board, setBoard] = useState<Cell[][]>(initializeBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('H');

  const handleCellPress = (row: number, col: number) => {
    if (currentPlayer === 'H') {
      // Check if a horizontal move is possible
      if (
        col + 1 < BOARD_SIZE &&
        !board[row][col].occupiedBy &&
        !board[row][col + 1].occupiedBy
      ) {
        const newBoard = [...board];
        newBoard[row][col].occupiedBy = 'H';
        newBoard[row][col + 1].occupiedBy = 'H';
        setBoard(newBoard);
        setCurrentPlayer('V');
      } else {
        Alert.alert('Invalid move', 'Try a different position.');
      }
    } else {
      // Check if a vertical move is possible
      if (
        row + 1 < BOARD_SIZE &&
        !board[row][col].occupiedBy &&
        !board[row + 1][col].occupiedBy
      ) {
        const newBoard = [...board];
        newBoard[row][col].occupiedBy = 'V';
        newBoard[row + 1][col].occupiedBy = 'V';
        setBoard(newBoard);
        setCurrentPlayer('H');
      } else {
        Alert.alert('Invalid move', 'Try a different position.');
      }
    }

    checkGameOver();
  };

  const checkGameOver = () => {
    let horizontalMoves = false;
    let verticalMoves = false;

    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (
          col + 1 < BOARD_SIZE &&
          !board[row][col].occupiedBy &&
          !board[row][col + 1].occupiedBy
        ) {
          horizontalMoves = true;
        }
        if (
          row + 1 < BOARD_SIZE &&
          !board[row][col].occupiedBy &&
          !board[row + 1][col].occupiedBy
        ) {
          verticalMoves = true;
        }
      }
    }

    if (!horizontalMoves && currentPlayer === 'H') {
      Alert.alert('Game Over', 'Vertical player wins!');
    } else if (!verticalMoves && currentPlayer === 'V') {
      Alert.alert('Game Over', 'Horizontal player wins!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.turnText}>{`Player ${currentPlayer}'s turn`}</Text>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <TouchableOpacity
              key={colIndex}
              style={[
                styles.cell,
                cell.occupiedBy === 'H'
                  ? styles.horizontalCell
                  : cell.occupiedBy === 'V'
                  ? styles.verticalCell
                  : null,
              ]}
              onPress={() => handleCellPress(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  turnText: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 50,
    height: 50,
    margin: 2,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalCell: {
    backgroundColor: '#ff6666',
  },
  verticalCell: {
    backgroundColor: '#6666ff',
  },
});

export default DomineeringGame;
