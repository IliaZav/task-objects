/*
  Обновление объекта человека в зависимости от пола
*/
export function personUpdate(data) {
  const updated = { ...data };
  if (updated.gender === 'female') {
    delete updated.age;
  } else if (updated.gender === 'male' && !('income' in updated)) {
    updated.income = 100000;
  }
  return updated;
}

/*
  Сбор и сортировка уникальных ключей из трёх объектов
*/
export function objectFieldsList(obj1, obj2, obj3) {
  const keys = new Set([
    ...Object.keys(obj1),
    ...Object.keys(obj2),
    ...Object.keys(obj3)
  ]);
  return Array.from(keys).sort();
}

/*
  Глубокое клонирование объекта с добавлением id
*/
export function objectClone(obj, count) {
  const clones = [];
  for (let i = 0; i < count; i++) {
    // Глубокое копирование
    const clone = JSON.parse(JSON.stringify(obj));
    clone.id = i; // id начинается с 0
    clones.push(clone);
  }
  return clones;
}