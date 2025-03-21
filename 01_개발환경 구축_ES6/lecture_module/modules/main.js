// import {name, age, greet} from './01_named_export.js'

// console.log(name);
// console.log(age);
// console.log(greet());

//
// import { name as userName, age as UserAge } from "./01_named_export.js";

// console.log(userName);
// console.log(UserAge);

// 전부 가져오기기
// import * as utils from "./01_named_export.js";

// console.log(utils.name);
// console.log(utils.age);
// console.log(utils.greet());

// import addfunction from './02_default_export'

// console.log(addfunction(4, 5));

import { name, age, greet } from "./03_exports.js";
console.log(name);
console.log(age);
console.log(greet());
