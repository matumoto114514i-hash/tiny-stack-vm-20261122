f=require('fs');
eval(''+require('zlib').brotliDecompressSync(f.readFileSync('/bot/z')))