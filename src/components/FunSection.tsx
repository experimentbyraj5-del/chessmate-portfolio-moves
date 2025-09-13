import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Simple chess game state
const initialGameBoard = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'],
  ['♟','♟','♟','♟','♟','♟','♟','♟'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['♙','♙','♙','♙','♙','♙','♙','♙'],
  ['♖','♘','♗','♕','♔','♗','♘','♖']
];

export const FunSection = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [selectedSquare, setSelectedSquare] = useState<{row: number, col: number} | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [gameActive, setGameActive] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setGameActive(false);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameActive, timeLeft]);

  const handleSquareClick = (row: number, col: number) => {
    const piece = gameBoard[row][col];
    
    if (!selectedSquare) {
      // Selecting a piece (only white pieces for user)
      if (piece && ['♙','♖','♘','♗','♕','♔'].includes(piece)) {
        setSelectedSquare({ row, col });
      }
    } else {
      // Making a move
      const newBoard = [...gameBoard];
      const selectedPiece = newBoard[selectedSquare.row][selectedSquare.col];
      
      // Check if it's a pawn move to start the timer
      if (selectedPiece === '♙' && !gameStarted) {
        setGameStarted(true);
        setGameActive(true);
      }
      
      // Move piece
      newBoard[row][col] = selectedPiece;
      newBoard[selectedSquare.row][selectedSquare.col] = '';
      setGameBoard(newBoard);
      setSelectedSquare(null);

      // Simple bot response (random move after 1 second)
      if (gameActive) {
        setTimeout(() => {
          makeBotMove(newBoard);
        }, 1000);
      }
    }
  };

  const makeBotMove = (currentBoard: string[][]) => {
    // Find all black pieces
    const blackPieces: {row: number, col: number}[] = [];
    currentBoard.forEach((row, rowIndex) => {
      row.forEach((piece, colIndex) => {
        if (piece && ['♟','♜','♞','♝','♛','♚'].includes(piece)) {
          blackPieces.push({ row: rowIndex, col: colIndex });
        }
      });
    });

    if (blackPieces.length === 0) return;

    // Make a random move
    const randomPiece = blackPieces[Math.floor(Math.random() * blackPieces.length)];
    const possibleMoves: {row: number, col: number}[] = [];
    
    // Simple move generation (just forward for pawns, random for others)
    if (currentBoard[randomPiece.row][randomPiece.col] === '♟' && randomPiece.row < 7) {
      possibleMoves.push({ row: randomPiece.row + 1, col: randomPiece.col });
    } else {
      // Random adjacent squares for other pieces
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const newRow = randomPiece.row + dr;
          const newCol = randomPiece.col + dc;
          if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            possibleMoves.push({ row: newRow, col: newCol });
          }
        }
      }
    }

    if (possibleMoves.length > 0) {
      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      const newBoard = [...currentBoard];
      newBoard[randomMove.row][randomMove.col] = newBoard[randomPiece.row][randomPiece.col];
      newBoard[randomPiece.row][randomPiece.col] = '';
      setGameBoard(newBoard);
    }
  };

  const resetGame = () => {
    setGameBoard(initialGameBoard);
    setSelectedSquare(null);
    setGameStarted(false);
    setGameActive(false);
    setTimeLeft(180);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isLightSquare = (row: number, col: number) => (row + col) % 2 === 0;
  const isSelected = (row: number, col: number) => 
    selectedSquare?.row === row && selectedSquare?.col === col;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Fun Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If feel booored then let me take you to the board. Use your skills against me.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <CardContent>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold mb-2">
                  vs Priyanshu Battle Bot
                </h3>
                <p className="text-muted-foreground mb-4">Elo ~1500</p>
                
                {gameActive && (
                  <div className="text-xl font-mono font-bold text-accent">
                    Time: {formatTime(timeLeft)}
                  </div>
                )}
                
                {!gameStarted && (
                  <p className="text-sm text-muted-foreground">
                    Move any pawn to start the 3-minute game timer
                  </p>
                )}
              </div>

              <div className="grid grid-cols-8 gap-0 border-4 border-chess-border rounded-xl overflow-hidden mb-6 max-w-lg mx-auto shadow-chess">
                {gameBoard.map((row, rowIndex) =>
                  row.map((piece, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`
                        w-16 h-16 flex items-center justify-center text-2xl cursor-pointer
                        transition-all duration-200 relative
                        ${isLightSquare(rowIndex, colIndex) ? 'bg-chess-light' : 'bg-chess-dark'}
                        ${isSelected(rowIndex, colIndex) ? 'ring-4 ring-accent ring-inset' : ''}
                        hover:brightness-110
                      `}
                      onClick={() => handleSquareClick(rowIndex, colIndex)}
                    >
                      <span className="chess-piece drop-shadow-lg text-shadow-chess select-none">
                        {piece}
                      </span>
                      {isSelected(rowIndex, colIndex) && (
                        <div className="absolute inset-0 bg-accent/30 rounded-sm" />
                      )}
                    </div>
                  ))
                )}
              </div>

              <div className="text-center">
                <Button 
                  onClick={resetGame}
                  variant="outline"
                  className="mb-2"
                >
                  Reset Game
                </Button>
                
                {timeLeft === 0 && gameStarted && (
                  <p className="text-muted-foreground">
                    Time's up! Good game!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};