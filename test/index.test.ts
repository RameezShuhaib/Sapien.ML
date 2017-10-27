import { suite, test, slow, timeout } from "mocha-typescript";
import * as assert from "assert";

import { Dense } from "../src/core/layers";
import { Tensor } from "../src/core/types";

// import { hello } from '../src/index';
@suite class Test{
    @test testHello(){
        // hello()
    }
    @test testDenseLayer() {
        let layer1: Dense = new Dense();
        let inputX: Tensor = new Tensor();

        it('feedForward must always return a tensor', () => {
            assert.equal(typeof layer1.feedForward(inputX), Tensor);
        })
    }
}