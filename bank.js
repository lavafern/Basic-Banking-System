class bank {
    constructor() {
        this.saldo = 0
        this.saldoOutput = document.getElementById("saldooutput")
        this.saldoOutput.textContent = this.saldo
    }

    time(second) {
        return new Promise((resolve,reject) => {
            if (typeof(second) === 'number') {
                setTimeout(() =>{
                    resolve()
                },second)
            } else {
                reject(new Error('second parameter is not number!'))
            }
        })
    }

    async deposit(amount = () => prompt('Masukan jumlah saldo yang ingin anda tambahkan : '), isnumeric = (n) => /^[0-9]+$/.test(n)) {
        
        let nominal = amount()
        console.log(nominal)
        await this.time(1000)
        if (isnumeric(nominal)) {
        this.saldo += Number(nominal)
        this.saldoOutput.textContent = this.saldo
        } else {
            throw new Error("masukan yang  benarww")
        }
    }

    async withdraw(amount = () => prompt('Masukan jumlah saldo yang ingin anda ambil : '), isnumeric = (n) => /^[0-9]+$/.test(n)) {

        let nominal = amount()
        console.log(nominal)
        await this.time(1000)
        if (isnumeric(nominal)) {
        this.saldo -= Number(nominal)
        this.saldoOutput.textContent = this.saldo
        } else {
            throw new Error("masukan yang  benarww")
        }
    }

}

bank1 = new bank()



try{
depoButton.addEventListener("click", function() {
    bank1.deposit();
});
wdButton.addEventListener("click", function() {
    bank1.withdraw();
});
}
catch (error){
    console.log(error);
}

