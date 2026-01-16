import * as C from './catalog.js';

// Демонстрационный скрипт: показывает работу функций каталога.
// `main.js` отдаётся студенту готовым — он только запускает и изучает вывод.

const catalog = {
  p1001: {
    id: 'p1001',
    name: 'Laptop',
    price: 150000,
    stock: 4,
    category: { main: 'Electronics', sub: 'Computers' },
  },
};

// Показываем копию начального каталога (чтобы убедиться, что clone работает)
console.log('Initial catalog:', C.cloneCatalog(catalog));

// Добавляем новый товар — addProduct возвращает новый каталог, оригинал не меняется
const newProduct = { id: 'p1002', name: 'Phone', price: 70000, stock: 10, category: { main: 'Electronics', sub: 'Phones' } };
const c2 = C.addProduct(catalog, newProduct);
console.log('After addProduct (catalog unchanged):', catalog);
console.log('New catalog contains p1002:', C.hasProduct(c2, 'p1002'));

// Обновляем товар: updateProduct возвращает новый каталог с изменённым товаром
const c3 = C.updateProduct(c2, 'p1002', { price: 65000, category: { sub: 'Smartphones' } });
console.log('Updated product p1002:', C.getProduct(c3, 'p1002'));

// Список товаров — удобный для вывода формат (массив)
const listed = C.listProducts(c3);
console.log('listProducts:', listed);

// Поиск по имени (регистронезависимо)
const searched = C.searchByName(c3, 'lap');
console.log('searchByName("lap"):', searched);

// Сортировка и группировка
console.log('sortByPrice asc:', C.sortByPrice(c3, 'asc'));
console.log('groupByMainCategory:', C.groupByMainCategory(c3));

// Удаление товара — возвращает новый каталог
const c4 = C.removeProduct(c3, 'p1001');
console.log('After remove p1001 hasProduct:', C.hasProduct(c4, 'p1001'));

// Генерация нового id по текущему каталогу
console.log('generateId for current catalog:', C.generateId(c4));
