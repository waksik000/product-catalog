import test from 'node:test';
import assert from 'node:assert/strict';
import * as C from '../src/catalog.js';

test('step1', () => {
  const base = {
    p1001: {
      id: 'p1001',
      name: 'Laptop',
      price: 150000,
      stock: 4,
      category: { main: 'Electronics', sub: 'Computers' },
    },
  };

  const baseSnapshot = JSON.parse(JSON.stringify(base));

  const newProduct = { id: 'p1002', name: 'Phone', price: 70000, stock: 10, category: { main: 'Electronics', sub: 'Phones' } };
  const c2 = C.addProduct(base, newProduct);
  assert.equal(C.hasProduct(c2, 'p1002'), true);
  assert.equal(C.hasProduct(base, 'p1002'), false);
  assert.deepEqual(base, baseSnapshot, 'original catalog must not be mutated by addProduct');
});

test('step2', () => {
  const base = {
    p1001: {
      id: 'p1001',
      name: 'Laptop',
      price: 150000,
      stock: 4,
      category: { main: 'Electronics', sub: 'Computers' },
    },
  };

  const newProduct = { id: 'p1002', name: 'Phone', price: 70000, stock: 10, category: { main: 'Electronics', sub: 'Phones' } };
  const c2 = C.addProduct(base, newProduct);
  const c3 = C.updateProduct(c2, 'p1002', { price: 65000, category: { sub: 'Smartphones' } });
  const p = C.getProduct(c3, 'p1002');
  assert.equal(p.price, 65000);
  assert.equal(p.category.sub, 'Smartphones');
  assert.equal(p.category.main, 'Electronics');

  const listed = C.listProducts(c3);
  assert.equal(Array.isArray(listed), true);
  assert.equal(listed.length, Object.keys(c3).length);

  const copy = C.getProduct(c3, 'p1002');
  copy.name = 'HACK';
  assert.notEqual(C.getProduct(c3, 'p1002').name, 'HACK');

  const c4 = C.removeProduct(c3, 'p1001');
  assert.equal(C.hasProduct(c4, 'p1001'), false);
  assert.equal(C.hasProduct(c3, 'p1001'), true);
});

test('step3', () => {
  const catalog = {
    p1001: { id: 'p1001', name: 'Laptop', price: 150000, stock: 4, category: { main: 'Electronics', sub: 'Computers' } },
    p1002: { id: 'p1002', name: 'Phone', price: 70000, stock: 10, category: { main: 'Electronics', sub: 'Phones' } },
    p2001: { id: 'p2001', name: 'Chair', price: 5000, stock: 20, category: { main: 'Furniture', sub: 'Chairs' } },
  };

  const electronics = C.filterByCategory(catalog, 'Electronics');
  assert.equal(Array.isArray(electronics), true);
  assert.equal(electronics.length, 2);

  const found = C.searchByName(catalog, 'lap');
  assert.equal(found.length, 1);
  assert.equal(found[0].id, 'p1001');

  const asc = C.sortByPrice(catalog, 'asc');
  assert.equal(asc[0].price <= asc[1].price, true);
  const desc = C.sortByPrice(catalog, 'desc');
  assert.equal(desc[0].price >= desc[1].price, true);
});

test('step4', () => {
  const catalog = {
    p1001: { id: 'p1001', name: 'Laptop', price: 150000, stock: 4, category: { main: 'Electronics', sub: 'Computers' } },
    p1002: { id: 'p1002', name: 'Phone', price: 70000, stock: 10, category: { main: 'Electronics', sub: 'Phones' } },
    p2001: { id: 'p2001', name: 'Chair', price: 5000, stock: 20, category: { main: 'Furniture', sub: 'Chairs' } },
  };

  const grouped = C.groupByMainCategory(catalog);
  assert.ok(grouped.Electronics && grouped.Furniture);
  assert.equal(grouped.Electronics.length, 2);

  const a = { p1: { id: 'p1', name: 'A' }, p2: { id: 'p2', name: 'A2' } };
  const b = { p2: { id: 'p2', name: 'B2' }, p3: { id: 'p3', name: 'B3' } };
  const merged = C.mergeCatalogs(a, b);
  assert.equal(merged.p2.name, 'B2');

  const cloned = C.cloneCatalog(catalog);
  cloned.p1001.name = 'X';
  assert.notEqual(catalog.p1001.name, 'X');
});

test('step5', () => {
  const catalog = {
    p1001: { id: 'p1001', name: 'Laptop', price: 150000, stock: 4, category: { main: 'Electronics', sub: 'Computers' } },
    p1002: { id: 'p1002', name: 'Phone', price: 70000, stock: 10, category: { main: 'Electronics', sub: 'Phones' } },
    p2001: { id: 'p2001', name: 'Chair', price: 5000, stock: 20, category: { main: 'Furniture', sub: 'Chairs' } },
  };

  const gid = C.generateId(catalog);
  assert.match(gid, /^p\d{4}$/);
});
