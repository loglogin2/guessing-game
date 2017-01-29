class GuessingGame {
    constructor() {
        this._min = 0;
        this._max = 0;
        this.current = 0;
    }

    setRange(min, max) {
        this._min = min;
        this._max = max;
        return this;
    }

    guess() {
        this.current = Math.ceil( ( this._min + this._max ) / 2 );
        return this.current;
    }


    lower() {
        this._max = this.current;
        return this._max;
    }

    greater() {
        this._min = this.current;
        return this._min;
    }
}

module.exports = GuessingGame;