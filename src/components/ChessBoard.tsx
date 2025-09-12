import { useState } from "react";
import { Button } from "@/components/ui/button";

// Chess pieces in Unicode
const pieces = {
  white: {
    king: '♔',
    queen: '♕', 
    rook: '♖',
    bishop: '♗',
    knight: '♘',
    pawn: '♙'
  },
  black: {
    king: '♚',
    queen: '♛',
    rook: '♜', 
    bishop: '♝',
    knight: '♞',
    pawn: '♟'
  }
};

// Initial chess board setup
const initialBoard = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'],
  ['♟','♟','♟','♟','♟','♟','♟','♟'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['♙','♙','♙','♙','♙','♙','♙','♙'],
  ['♖','♘','♗','♕','♔','♗','♘','♖']
];

interface ChessBoardProps {
  onMove: () => void;
}

export const ChessBoard = ({ onMove }: ChessBoardProps) => {
  const [board] = useState(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState<{row: number, col: number} | null>(null);

  const handleSquareClick = (row: number, col: number) => {
    if (board[row][col] && !selectedSquare) {
      setSelectedSquare({ row, col });
    } else if (selectedSquare) {
      // Simple move validation - allow any move for demo
      setSelectedSquare(null);
      // Trigger entrance animation after a brief delay
      setTimeout(() => {
        onMove();
      }, 500);
    }
  };

  const isLightSquare = (row: number, col: number) => (row + col) % 2 === 0;
  const isSelected = (row: number, col: number) => 
    selectedSquare?.row === row && selectedSquare?.col === col;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-chess text-white p-8">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          Welcome, my pleasure to have you here.
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          Make your move.
        </p>
      </div>

      <div className="grid grid-cols-8 gap-0 border-4 border-accent shadow-piece rounded-lg overflow-hidden">
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`
                chess-square cursor-pointer relative
                ${isLightSquare(rowIndex, colIndex) ? 'light' : 'dark'}
                ${isSelected(rowIndex, colIndex) ? 'ring-4 ring-accent' : ''}
              `}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            >
              <span className="chess-piece text-3xl">
                {piece}
              </span>
              {isSelected(rowIndex, colIndex) && (
                <div className="absolute inset-0 bg-accent/30 animate-pulse" />
              )}
            </div>
          ))
        )}
      </div>

      <div className="mt-8 text-center animate-fade-in">
        <p className="text-lg opacity-75">
          Click any piece, then click where you'd like to move it
        </p>
      </div>
    </div>
  );
};