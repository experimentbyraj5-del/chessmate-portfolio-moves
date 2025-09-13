import { useState, useEffect } from "react";

// Chess piece types
type ChessPiece = '♜' | '♞' | '♝' | '♛' | '♚' | '♝' | '♞' | '♜' | 
                  '♟' | '♙' | '♖' | '♘' | '♗' | '♕' | '♔' | '';

type Position = { row: number; col: number };

// Initial chess board setup
const initialBoard: ChessPiece[][] = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'],
  ['♟','♟','♟','♟','♟','♟','♟','♟'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['♙','♙','♙','♙','♙','♙','♙','♙'],
  ['♖','♘','♗','♕','♔','♗','♘','♖']
];

const isWhitePiece = (piece: ChessPiece): boolean => {
  return ['♙','♖','♘','♗','♕','♔'].includes(piece);
};

const isBlackPiece = (piece: ChessPiece): boolean => {
  return ['♟','♜','♞','♝','♛','♚'].includes(piece);
};

const getValidMoves = (board: ChessPiece[][], from: Position): Position[] => {
  const piece = board[from.row][from.col];
  const moves: Position[] = [];

  if (!piece) return moves;

  const isWhite = isWhitePiece(piece);
  
  switch (piece) {
    case '♙': // White pawn
      // Move forward one square
      if (from.row > 0 && board[from.row - 1][from.col] === '') {
        moves.push({ row: from.row - 1, col: from.col });
        // Move forward two squares from starting position
        if (from.row === 6 && board[from.row - 2][from.col] === '') {
          moves.push({ row: from.row - 2, col: from.col });
        }
      }
      // Capture diagonally
      if (from.row > 0 && from.col > 0 && isBlackPiece(board[from.row - 1][from.col - 1])) {
        moves.push({ row: from.row - 1, col: from.col - 1 });
      }
      if (from.row > 0 && from.col < 7 && isBlackPiece(board[from.row - 1][from.col + 1])) {
        moves.push({ row: from.row - 1, col: from.col + 1 });
      }
      break;

    case '♟': // Black pawn
      // Move forward one square
      if (from.row < 7 && board[from.row + 1][from.col] === '') {
        moves.push({ row: from.row + 1, col: from.col });
        // Move forward two squares from starting position
        if (from.row === 1 && board[from.row + 2][from.col] === '') {
          moves.push({ row: from.row + 2, col: from.col });
        }
      }
      // Capture diagonally
      if (from.row < 7 && from.col > 0 && isWhitePiece(board[from.row + 1][from.col - 1])) {
        moves.push({ row: from.row + 1, col: from.col - 1 });
      }
      if (from.row < 7 && from.col < 7 && isWhitePiece(board[from.row + 1][from.col + 1])) {
        moves.push({ row: from.row + 1, col: from.col + 1 });
      }
      break;

    case '♖': case '♜': // Rook
      // Horizontal and vertical moves
      const rookDirections = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      for (const [dr, dc] of rookDirections) {
        for (let i = 1; i < 8; i++) {
          const newRow = from.row + dr * i;
          const newCol = from.col + dc * i;
          if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) break;
          
          const targetPiece = board[newRow][newCol];
          if (targetPiece === '') {
            moves.push({ row: newRow, col: newCol });
          } else {
            if ((isWhite && isBlackPiece(targetPiece)) || (!isWhite && isWhitePiece(targetPiece))) {
              moves.push({ row: newRow, col: newCol });
            }
            break;
          }
        }
      }
      break;

    case '♗': case '♝': // Bishop
      // Diagonal moves
      const bishopDirections = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
      for (const [dr, dc] of bishopDirections) {
        for (let i = 1; i < 8; i++) {
          const newRow = from.row + dr * i;
          const newCol = from.col + dc * i;
          if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) break;
          
          const targetPiece = board[newRow][newCol];
          if (targetPiece === '') {
            moves.push({ row: newRow, col: newCol });
          } else {
            if ((isWhite && isBlackPiece(targetPiece)) || (!isWhite && isWhitePiece(targetPiece))) {
              moves.push({ row: newRow, col: newCol });
            }
            break;
          }
        }
      }
      break;

    case '♕': case '♛': // Queen
      // Combination of rook and bishop moves
      const queenDirections = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
      for (const [dr, dc] of queenDirections) {
        for (let i = 1; i < 8; i++) {
          const newRow = from.row + dr * i;
          const newCol = from.col + dc * i;
          if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) break;
          
          const targetPiece = board[newRow][newCol];
          if (targetPiece === '') {
            moves.push({ row: newRow, col: newCol });
          } else {
            if ((isWhite && isBlackPiece(targetPiece)) || (!isWhite && isWhitePiece(targetPiece))) {
              moves.push({ row: newRow, col: newCol });
            }
            break;
          }
        }
      }
      break;

    case '♔': case '♚': // King
      // One square in any direction
      const kingDirections = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
      for (const [dr, dc] of kingDirections) {
        const newRow = from.row + dr;
        const newCol = from.col + dc;
        if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7) {
          const targetPiece = board[newRow][newCol];
          if (targetPiece === '' || (isWhite && isBlackPiece(targetPiece)) || (!isWhite && isWhitePiece(targetPiece))) {
            moves.push({ row: newRow, col: newCol });
          }
        }
      }
      break;

    case '♘': case '♞': // Knight
      // L-shaped moves
      const knightMoves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
      for (const [dr, dc] of knightMoves) {
        const newRow = from.row + dr;
        const newCol = from.col + dc;
        if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7) {
          const targetPiece = board[newRow][newCol];
          if (targetPiece === '' || (isWhite && isBlackPiece(targetPiece)) || (!isWhite && isWhitePiece(targetPiece))) {
            moves.push({ row: newRow, col: newCol });
          }
        }
      }
      break;
  }

  return moves;
};

export const ChessGame = () => {
  const [board, setBoard] = useState<ChessPiece[][]>(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState<Position | null>(null);
  const [validMoves, setValidMoves] = useState<Position[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [gameActive, setGameActive] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSquareClick = (row: number, col: number) => {
    if (!gameActive && timeLeft === 0) return;

    const clickedPiece = board[row][col];

    if (selectedSquare) {
      // Check if this is a valid move
      const isValidMove = validMoves.some(move => move.row === row && move.col === col);
      
      if (isValidMove) {
        // Make the move
        const newBoard = board.map(r => [...r]);
        const piece = newBoard[selectedSquare.row][selectedSquare.col];
        
        // Start timer on first pawn move
        if (piece === '♙' && !gameStarted) {
          setGameStarted(true);
          setGameActive(true);
        }
        
        newBoard[row][col] = piece;
        newBoard[selectedSquare.row][selectedSquare.col] = '';
        
        setBoard(newBoard);
        setSelectedSquare(null);
        setValidMoves([]);

        // Bot makes a move after 1 second
        if (gameActive || (piece === '♙' && !gameStarted)) {
          setTimeout(() => makeBotMove(newBoard), 1000);
        }
      } else if (isWhitePiece(clickedPiece)) {
        // Select a different white piece
        setSelectedSquare({ row, col });
        setValidMoves(getValidMoves(board, { row, col }));
      } else {
        // Deselect
        setSelectedSquare(null);
        setValidMoves([]);
      }
    } else {
      // Select a white piece
      if (isWhitePiece(clickedPiece)) {
        setSelectedSquare({ row, col });
        setValidMoves(getValidMoves(board, { row, col }));
      }
    }
  };

  const makeBotMove = (currentBoard: ChessPiece[][]) => {
    // Find all black pieces and their valid moves
    const allMoves: { from: Position; to: Position }[] = [];
    
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = currentBoard[row][col];
        if (isBlackPiece(piece)) {
          const moves = getValidMoves(currentBoard, { row, col });
          moves.forEach(move => {
            allMoves.push({ from: { row, col }, to: move });
          });
        }
      }
    }

    if (allMoves.length > 0) {
      // Pick a random valid move
      const randomMove = allMoves[Math.floor(Math.random() * allMoves.length)];
      const newBoard = currentBoard.map(r => [...r]);
      
      newBoard[randomMove.to.row][randomMove.to.col] = newBoard[randomMove.from.row][randomMove.from.col];
      newBoard[randomMove.from.row][randomMove.from.col] = '';
      
      setBoard(newBoard);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setSelectedSquare(null);
    setValidMoves([]);
    setGameStarted(false);
    setGameActive(false);
    setTimeLeft(180);
  };

  const isLightSquare = (row: number, col: number) => (row + col) % 2 === 0;
  const isSelected = (row: number, col: number) => 
    selectedSquare?.row === row && selectedSquare?.col === col;
  const isValidMove = (row: number, col: number) =>
    validMoves.some(move => move.row === row && move.col === col);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold mb-2">
          vs Priyanshu Battle Bot
        </h3>
        
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
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`
                w-16 h-16 flex items-center justify-center text-2xl cursor-pointer
                transition-all duration-200 relative
                ${isLightSquare(rowIndex, colIndex) ? 'bg-chess-light' : 'bg-chess-dark'}
                ${isSelected(rowIndex, colIndex) ? 'ring-4 ring-accent ring-inset' : ''}
                ${isValidMove(rowIndex, colIndex) ? 'ring-2 ring-green-400 ring-inset' : ''}
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
              {isValidMove(rowIndex, colIndex) && (
                <div className="absolute inset-0 bg-green-400/20 rounded-sm" />
              )}
            </div>
          ))
        )}
      </div>

      <div className="text-center">
        <button 
          onClick={resetGame}
          className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
        >
          Reset Game
        </button>
        
        {timeLeft === 0 && gameStarted && (
          <p className="text-muted-foreground mt-2">
            Time's up! Good game!
          </p>
        )}
      </div>
    </div>
  );
};