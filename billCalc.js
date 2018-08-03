var bill = {
	billVals: [124, 48, 268, 180, 42],
	tip: [],
	finalVal: [],
	calcBill: function(){
		for (var i = 0; i < this.billVals.length; i++){
			if (this.billVals[i] < 50 && this.billVals[i] > 0){
				this.tip[i] = this.billVals[i] / 20;
				this.finalVal[i] = this.billVals[i] + (this.billVals[i] / 20);
			}
			 else if (this.billVals[i] >= 50 && this.billVals[i] < 200){
				this.tip[i] = this.billVals[i] / 15;
				this.finalVal[i] = this.billVals[i] + (this.billVals[i] / 15);
			}
			else{
				this.tip[i] = this.billVals[i] / 10;
				this.finalVal[i] = this.billVals[i] + (this.billVals[i] / 10);
			}
		}
	}
};

bill.calcBill();
console.log(bill.tip);