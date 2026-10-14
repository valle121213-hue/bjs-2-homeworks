function compareArrays(arr1, arr2) {
// Если длины массивов разные, они не одинаковые
if (arr1.length !== arr2.length) {
return false;
}

// Проверяем каждый элемент первого массива
// с элементом второго массива на том же индексе
return arr1.every((element, index) => element === arr2[index]);
}


function getUsersNamesInAgeRange(users, gender) {
// Оставляем пользователей только нужного пола
const filteredUsers = users.filter(user => user.gender === gender);

// Получаем массив возрастов
const ages = filteredUsers.map(user => user.age);

// Складываем все возрасты
const sum = ages.reduce((total, age) => total + age, 0);

// Если подходящих пользователей нет, возвращаем 0
if (ages.length === 0) {
return 0;
}

// Вычисляем средний возраст
return sum / ages.length;
}
