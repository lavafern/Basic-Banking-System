class bank {
    constructor() {
        this.saldo = 0
        this.saldoOutput = document.getElementById("saldooutput")
        this.saldoOutput.textContent = this.saldo
    }
    isNumeric = (n,time) => {
        return new Promise((resolve,reject) => {
            if (/^[0-9]+$/.test(n)) {
                setTimeout(() => {resolve()},time)
            }else {
                reject(new Error("tolong masukan angka"))
            }
        })
    }

    async deposit(amount = () => prompt('Masukan jumlah saldo yang ingin anda tambahkan : ')) {
        try{
            let nominal = amount()
            if (nominal) {
            await this.isNumeric(nominal,1000)
            this.saldo += Number(nominal)
            this.saldoOutput.textContent = this.saldo
        } else {
            throw new Error("Belum memasukan angka!")
        }
        } catch (err){
            console.log(err);
        }
    }

    async withdraw(amount = () => prompt('Masukan jumlah saldo yang ingin anda ambil : '), isnumeric = (n) => /^[0-9]+$/.test(n)) {
        try{
            let nominal = amount()
            if (nominal) {
                if (nominal>this.saldo) {
                    throw new Error("Saldo anda tidak cukup! ")
                }
                await this.isNumeric(nominal,1000)
                this.saldo -= Number(nominal)
                this.saldoOutput.textContent = this.saldo
            } else {
                throw new Error("Belum memasukan angka!")
        }
        } catch (err){
            console.log(err);
        }
    }

}

bank1 = new bank()


depoButton.addEventListener("click", async function() {
    bank1.deposit();
});
wdButton.addEventListener("click", async function() {
    bank1.withdraw();
}); 


