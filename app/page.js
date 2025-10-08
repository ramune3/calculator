'use client';

// Reactライブラリから`useState`という道具をもってくる
import { useState } from 'react';

// デフォルトエクスポート（外の世界に公開する）で、Calculatorという関数を作る
export default function Calculator() {
  // 画面に表示される値を管理する状態（最初は「0」）
  const [display, setDisplay] = useState('0');

  // ボタンをクリックされたときに、その数字を画面に追加する関数
  const handleNumber = (num) => {
    // 画面が「0」だったら、その「0」を消して新しい数字を表示
    if (display === '0') {
      setDisplay(String(num));
    } else {
      // そうじゃなかったら、今の数字に追加する
      setDisplay(display + String(num));
    }
  };

  // 演算子（+、−、×、÷）がクリックされたときの関数
  const handleOperator = (operator) => {
    // 演算子を追加する（例：「5+」と表示される）
    setDisplay(display + operator);
  };

  // =ボタンを押したときに、計算結果を出す関数
  const handleEquals = () => {
    try {
      // displayの中身を計算して結果を出す
      // evalは文字列を計算式として実行する関数
      const result = eval(display);
      // 計算結果を画面に表示する
      setDisplay(String(result));
    } catch (e) {
      // もし計算がうまくいかなかったら「エラー」と表示
      setDisplay('エラー');
    }
  };

  // Cボタンを押したときに、画面をリセットする関数
  const handleClear = () => {
    // 画面を「0」に戻す
    setDisplay('0');
  };

  // バックスペースボタンを押して、最後の1文字を消す関数
  const handleBackspace = () => {
    // displayの最後の1文字を削除する
    const newDisplay = display.slice(0, -1);
    // もし何もなくなったら「0」を表示する
    setDisplay(newDisplay === '' ? '0' : newDisplay);
  };

  return (
    // 画面全体の背景と中央配置
    <div className="min-h-screen bg-blue-900 flex items-center justify-center">
      {/* 電卓の枠（白い背景、角を丸く） */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        
        {/* 電卓の画面（黒い背景、白い文字） */}
        <div className="bg-black text-white text-right text-5xl p-4 rounded mb-4 overflow-hidden">
          {display}
        </div>

        {/* ボタンを4列のグリッド配置にする */}
        <div className="grid grid-cols-4 gap-2">
          
          {/* 1行目：C、バックスペース、÷ボタン */}
          <button
            onClick={handleClear}
            className="bg-red-500 text-white text-xl font-bold p-4 rounded hover:bg-red-600"
          >
            C
          </button>
          <button
            onClick={handleBackspace}
            className="bg-red-500 text-white text-xl font-bold p-4 rounded hover:bg-red-600"
          >
            ←
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="col-span-2 bg-orange-500 text-white text-xl font-bold p-4 rounded hover:bg-orange-600"
          >
            ÷
          </button>

          {/* 2行目：7、8、9、× */}
          <button
            onClick={() => handleNumber(7)}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            7
          </button>
          <button
            onClick={() => handleNumber(8)}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            8
          </button>
          <button
            onClick={() => handleNumber(9)}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            9
          </button>
          <button
            onClick={() => handleOperator('*')}
            className="bg-orange-500 text-white text-xl font-bold p-4 rounded hover:bg-orange-600"
          >
            ×
          </button>

          {/* 3行目：4、5、6、− */}
          <button
            onClick={() => handleNumber(4)}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            4
          </button>
          <button
            onClick={() => handleNumber(5)}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            5
          </button>
          <button
            onClick={() => handleNumber(6)}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            6
          </button>
          <button
            onClick={() => handleOperator('-')}
            className="bg-orange-500 text-white text-xl font-bold p-4 rounded hover:bg-orange-600"
          >
            −
          </button>

          {/* 4行目：1、2、3、+ */}
          <button
            onClick={() => handleNumber(1)}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            1
          </button>
          <button
            onClick={() => handleNumber(2)}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            2
          </button>
          <button
            onClick={() => handleNumber(3)}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            3
          </button>
          <button
            onClick={() => handleOperator('+')}
            className="bg-orange-500 text-white text-xl font-bold p-4 rounded hover:bg-orange-600"
          >
            +
          </button>

          {/* 5行目：0（2列分）、小数点、=ボタン */}
          <button
            onClick={() => handleNumber(0)}
            className="col-span-2 bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            0
          </button>
          <button
            onClick={() => handleNumber('.')}
            className="bg-gray-300 text-black text-xl font-bold p-4 rounded hover:bg-gray-400"
          >
            .
          </button>
          <button
            onClick={handleEquals}
            className="bg-green-500 text-white text-xl font-bold p-4 rounded hover:bg-green-600"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
