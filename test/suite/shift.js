/* test rig */ var t = 1, tmax = 10
function ok (a, d) { console.log(a ? 'ok ' + (t++) + ' -' : 'not ok ' + (t++) + ' -', d); }
console.log(t + '..' + tmax);
ok(process.versions.colony, 'running in colony')

ok((1 << 0) == 1, "1 << 0");
ok((1 << 8) == 256, "1 << 8");
ok((1 << 40) == 256, "1 << 256");
ok((256 >>> 8) == 1, "256 >>> 8");
ok((-256 >>> 8) == 16777215, "-256 >>> 8");
ok((256 >> 8) == 1, "256 >> 8");
ok((-256 >> 8) == -1, "-256 >> 8");
ok((0x87654321 << 12) == 0x54321000, "0x87654321 << 12")
ok((0x87654321 >>> 12) == 0x00087654, "0x87654321 >>> 12")
ok(((0x87654321 >> 12) >>> 0) == 0xfff87654, "0x87654321 >> 12")
console.log('#', ((0x87654321 >> 12) >>> 0));

ok((-256 >>> 0) == 0xffffff00, "-256 >>> 0");
console.log('#', (-256 >>> 0), '==', 0xffffff00);