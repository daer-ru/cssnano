import test from 'ava';
import processCSS from './_processCSS';

test(
    'ie 5.5-7 important hack',
    processCSS,
    'h1 { color: red !ie }',
    'h1 { }',
    {target: 'ie6', unaffected: 'ie8'}
);
