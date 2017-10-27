import { suite, test, slow, timeout } from "mocha-typescript";
import { Dense } from 'core/layers'; 
import { Tensor } from 'core/types'
// import { hello } from '../src/index';
@suite class Test{
    @test testHello(){
        var d = new Dense()
        console.log("created Dense layer ")
        d.feedForward(new Tensor())
        console.log("feeding Dense layer")        
    }
}