# Product Catalog

### Цель

Реализовать набор чистых функций для работы с каталогом товаров, представленного как объект `{ id: productObject }`. Функции не мутируют входной `catalog`, возвращают новые объекты/значения.

---

## Структура проекта

```
project/
  src/
   catalog.js           # экспорт набора функций или отдельные файлы
  package.json
  README.md
```

---

### Задачи

1. `addProduct`

- Сигнатура: `addProduct(catalog, product)`
- Описание: если `product.id` отсутствует в `catalog`, вернуть новый каталог с добавленным товаром; иначе вернуть исходный.

2. `removeProduct`

- Сигнатура: `removeProduct(catalog, productId)`
- Описание: вернуть новый каталог без ключа `productId`.

3. `updateProduct`

- Сигнатура: `updateProduct(catalog, productId, updates)` 
- Описание: вернуть новый каталог с обновлёнными полями товара (использовать spread для копирования/обновления).

4. `hasProduct`

- Сигнатура: `hasProduct(catalog, productId)`
- Описание: вернуть `true|false`.

5. `getProduct`

- Сигнатура: `getProduct(catalog, productId)`
- Описание: вернуть копию объекта товара или `null`.

6. `listProducts`

- Сигнатура: `listProducts(catalog)`
- Описание: вернуть массив копий товаров; использовать `for...in` для обхода.

7. `filterByCategory`

- Сигнатура: `filterByCategory(catalog, categoryName)`
- Описание: вернуть массив товаров, где `category.main === categoryName`.

8. `mergeCatalogs`

- Сигнатура: `mergeCatalogs(c1, c2)`
- Описание: вернуть новый каталог; при совпадении id данные из `c2` имеют приоритет.

9. `cloneCatalog`

- Сигнатура: `cloneCatalog(catalog)`
- Описание: вернуть глубокую копию каталога (вложенные объекты скопированы).

10. `searchByName`

- Сигнатура: `searchByName(catalog, query)`
- Описание: найти товары по части названия без учёта регистра; вернуть массив копий.

---

### Дополнительно

- `sortByPrice(catalog, direction)` — вернуть массив товаров, отсортированных по цене (`'asc'|'desc'`).
- `groupByMainCategory(catalog)` — вернуть объект, группирующий товары по `category.main`.
- `generateId(catalog)` — функция генерации уникального id (например `pXXXX`).

---

### Технические требования

- Все функции — чистые; не мутируют входной `catalog`.
- Использовать `const`/`let` и стрелочные функции.
- Не использовать сторонние библиотеки и `Map`/`Set`.
- Добавить примеры использования в `README.md`.
