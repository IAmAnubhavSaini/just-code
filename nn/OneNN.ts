const LOOKUP_SIZE: number = 4096;
const sigmoidMin: number = -15.0;
const sigmoidMax: number = 15.0;
const LOOOKUP = Array<number>(LOOKUP_SIZE);

/**
 * OneNN class represents a neural network with one hidden layer and one output neuron.
 */
class OneNN {

    inputCount: number;
    outputCount: number;
    hiddenLayerCount: number;
    hiddenCount: number;
    activationHiddenFn: (x: number) => number;
    activationOutputFn: (x: number) => number;
    totalWeights: number;
    totalNeurons: number;
    weights: number[];
    output : number[];
    deltas: number[];
    constructor() {
        this.inputCount = 0;
        this.outputCount = 0;
        this.hiddenLayerCount = 0;
        this.hiddenCount = 0;
        this.activationHiddenFn = (x: number) => x;
        this.activationOutputFn = (x: number) => x;
        this.totalWeights = 0;
        this.totalNeurons = 0;
        this.weights = [];
        this.output = [];
        this.deltas = [];
    }

    public train(data: number[][]): void {}
    public predict(data: number[]): number { return 0; }

    hiddenIndirect(x: number): number {
        return this.activationHiddenFn(x);
    }

    outputIndirect(x: number): number {
        return this.activationOutputFn(x);
    }

    /**
     * sigmoid
     * @param x {number} Input value
     * @returns {number} The result of applying the sigmoid function to the input value.
     */
    sigmoid(x: number): number {
        if (x < -45) {
            return 0;
        }
        if (x > 45) {
            return 1;
        }
        return 1 / (1 + Math.exp(-x));
    }

    /**
     * Sigmoid lookup table
     *
     */
    initSigmoidLookup(): void {
        const step = (sigmoidMax - sigmoidMin) / LOOKUP_SIZE;
        for (let i = 0; i < LOOKUP_SIZE; i++) {
            LOOOKUP[i] = this.sigmoid(sigmoidMin + step * i);
        }
    }
}


