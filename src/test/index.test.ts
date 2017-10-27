import { suite, test, slow, timeout } from "mocha-typescript";
import * as assert from "assert" ;
import { Dense } from 'sapien/core/layers'; 
import { Tensor } from 'sapien/core/types';
// import { hello } from '../src/index';
@suite class Test{
    @test testHello(){
        var d = new Dense()
        console.log("created Dense layer ")
        d.feedForward(new Tensor())
        console.log("feeding Dense layer")    
        let layer1: Dense = new Dense();
        let inputX: Tensor = new Tensor();

        it('feedForward must always return a tensor', () => {
            assert.equal(typeof layer1.feedForward(inputX), Tensor);
        })    
    }
}