1. npm install redis
2. запустить докер
3. напсить 'docker run -d -p 6379:6379 redis'
4. запустить 'node файл.js'

```
// записать
await client.set('name', 'Matvey');

// получить
const value = await client.get('name');
console.log(value);
```