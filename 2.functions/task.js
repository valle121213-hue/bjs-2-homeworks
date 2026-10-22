
"use strict";

// Задача 1
function getArrayParams(...arr) {
  // Если чисел нет, возвращаем нулевые значения
  if (arr.length === 0) {
    return {
      min: 0,
      max: 0,
      avg: 0,
    };
  }

  // Начальные значения
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  // Перебираем все числа массива
  for (let i = 0; i < arr.length; i++) {
    // Ищем минимальное число
    if (arr[i] < min) {
      min = arr[i];
    }

    // Ищем максимальное число
    if (arr[i] > max) {
      max = arr[i];
    }

    // Складываем числа
    sum = sum + arr[i];
  }

  // Вычисляем среднее и округляем до двух знаков
  let avg = Number((sum / arr.length).toFixed(2));

  // Возвращаем объект
  return {
    min: min,
    max: max,
    avg: avg,
  };
}


// Задача 2. Насадка суммирования
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

// Насадка: разница максимума и минимума
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max - min;
}

// Насадка: разница сумм чётных и нечётных чисел
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

// Насадка: среднее значение чётных чисел
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }

  // Если чётных чисел нет, делить на ноль нельзя
  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}



// Задача 3
function makeWork(arrOfArr, func) {
  // Если массивов нет, возвращаем ноль
  if (arrOfArr.length === 0) {
    return 0;
  }

  // Начальное значение максимального результата
  let maxWorkerResult = -Infinity;

  // Перебираем массивы с числами
  for (let i = 0; i < arrOfArr.length; i++) {
    // Передаём числа текущего массива в функцию-насадку
    const workerResult = func(...arrOfArr[i]);

    // Проверяем, больше ли результат предыдущего максимума
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  // Возвращаем максимальный результат
  return maxWorkerResult;
}
