import { sayHello } from '../utils/utils.js';

function greatUser() {
  const name = sayHello();
  console.log(`Hello, ${name}!`);
}

export default greatUser;
