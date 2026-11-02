// Run: node --experimental-strip-types src/lib/highlight.check.ts
import assert from 'node:assert/strict';
import { highlight } from './highlight.ts';

assert.equal(highlight('a < b'), 'a &lt; b');
assert.ok(highlight('if (x) return;').includes('<b class="k">if</b>'));
assert.ok(highlight('Foo(1)').includes('<b class="f">Foo</b>'));
assert.ok(highlight('// note').includes('<b class="c">// note</b>'));
console.log('highlight ok');
