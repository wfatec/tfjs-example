// import * as tf from '@tensorflow/tfjs';
const tf = require('@tensorflow/tfjs');

// Load the binding:
require('@tensorflow/tfjs-node'); 


var a = 0;
var obj = {
    a: 2,
    foo: function() {
        function test() {
            console.log(this.a);
        }
        test();
    }
}
obj.foo(); 

var a = 0;

function foo() {
    console.log('foo', this)

function test() {
    console.log(this.a);
}
    return test;
};
var obj = {
    a: 2,
    foo: foo
}
obj.foo()(); 
