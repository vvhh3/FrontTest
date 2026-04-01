# Основная разница между .toBe и .toEqual

 ```
 в Jest заключается в способе сравнения данных: .toBe использует строгое равенство (===, ссылочное равенство для объектов), а .toEqual — глубокое сравнение, проверяя эквивалентность содержимого объектов и массивов
 ```

 ```
в package.json в script написать: <"test": "jest"> 
запускать с помощью npm run test
 ```


Если React + Vite:
```
npm install --save-dev vitest jsdom @testing-library/react
```

# Тестирование alert, confirm, prompt
```
React-компонент может вызывать alert("Что-то").

Проблема: в тестах браузера этих функций нет, или они мешают тестам.

Решение: использовать spy через vi.spyOn:

test("кликаем и вызываем alert", () => {
  const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

  render(<MyComponent />);
  fireEvent.click(screen.getByText("Показать alert"));

  expect(alertMock).toHaveBeenCalledWith("Привет!");
  alertMock.mockRestore(); // важно вернуть оригинал
});
```


# Тестирование таймеров (setTimeout / setInterval) в Vitest:

```
vi.useFakeTimers();

render(<TimerComponent />);
fireEvent.click(screen.getByText("Старт таймера"));

vi.advanceTimersByTime(1000); // продвинуть таймер на 1 секунду

expect(screen.getByText("Прошло 1 сек")).toBeInTheDocument();

vi.useRealTimers(); // вернуть реальный таймер
```


# Основная структура теста
```
import { describe, it, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from '../MyComponent';

// describe группирует тесты
describe('MyComponent', () => {

  // beforeEach — выполняется перед каждым тестом
  beforeEach(() => {
    // например, очистка DOM
    vi.restoreAllMocks(); 
  });

  // afterEach — выполняется после каждого теста
  afterEach(() => {
    // очистка, если нужно
  });

  // тесты можно писать через it() или test()
  it('рендерит кнопку', () => {
    render(<MyComponent />);
    expect(screen.getByText('Нажми меня')).toBeInTheDocument();
  });

  test('клик по кнопке вызывает alert', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<MyComponent />);
    fireEvent.click(screen.getByText('Нажми меня'));

    expect(alertMock).toHaveBeenCalledWith('Привет!');
    alertMock.mockRestore();
  });

});
```
# Пояснения:
```
describe() — группировка тестов (как папка/тема).

it() / test() — отдельный тест.

beforeEach / afterEach — подготовка и очистка перед/после теста.

vi.spyOn — шпион для функций, например alert.

render() — отрисовка компонента в виртуальном DOM.

screen.getByText() / getByRole / queryBy* — методы поиска элементов.

fireEvent.click() — симуляция клика, fireEvent.change() — изменение input.

expect(...).toBeInTheDocument() — проверка, что элемент есть в DOM.
```


# Тестирование инпутов и форм
```
test('можно ввести текст в input', () => {
  render(<MyComponent />);
  const input = screen.getByPlaceholderText('Введите имя');

  fireEvent.change(input, { target: { value: 'Иван' } });
  expect(input.value).toBe('Иван');
});
fireEvent.change(element, { target: { value } }) — имитируем ввод текста.
expect(element.value).toBe(...) — проверяем текущее значение.
```