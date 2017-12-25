# crypto-benchmarks
Benchmarks for various crypto packages

## Getting started

Install with [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)

    > npm install crypto-benchmarks
    > npm run start
    
## Results


### test\pbkdf2\fixtures\i1000.json
| package | speed | stats |
| ------- | ----- | ----- |
| forge | 330 ops/sec | ±0.36% (81 runs sampled) |
| jsrsasign | 1.31 ops/sec | ±4.16% (8 runs sampled) |
| node | 332 ops/sec | ±0.49% (78 runs sampled) |
| pbkdf2 | 330 ops/sec | ±0.56% (80 runs sampled) |

### test\pkcs8-import\fixtures\des3.json
| package | speed | stats |
| ------- | ----- | ----- |
| forge | 11.83 ops/sec | ±4.19% (33 runs sampled) |
| jsrsasign | 0.12 ops/sec | ±11.00% (5 runs sampled) |


## License
The [MIT license](./LICENSE).

Copyright © 2017 Richard Schneider [(makaretu@gmail.com)](mailto:makaretu@gmail.com?subject=crypto-benchmarks)

