// import { double } from './math.js';

// console.log(double(5));

import { v4 as uuidv4 } from 'uuid';

const random = uuidv4();
console.log('random:', random);

// async function main() {
//   const { v4: uuidv4 } = await import('uuid');
//   const random = uuidv4();
//   console.log('random:', random);
// }

// main().catch(console.error);

// To check the Node.js version compatibility of a package, you can use the following command in your terminal:
// npm view <package>@<version> engines.node