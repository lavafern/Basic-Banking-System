let saldo = 0;



function tambahSaldo(saldoku) {
    let saldoDimasukan = prompt('Masukan saldo yang ingin anda tambahkan')
    saldoku += Number(saldoDimasukan)
    alert(`Saldo anda sekarang rp.${saldoku}`)

    return saldoku
}

function kurangiSaldo(saldoku) {
    let saldoDikurangi = prompt('Masukan saldo yang ingin anda kurangi')
    if (saldoDikurangi > saldoku) {
        alert(`Saldo anda tidak cukup!`)
        alert(`Saldo anda sekarang rp.${saldoku}`)
        return saldoku
    }
    saldoku -= Number(saldoDikurangi)
    alert(`Saldo anda sekarang rp.${saldoku}`)

    return saldoku
}

alert(`Saldo anda sekarang rp.${saldo}`)

saldo = tambahSaldo(saldo)
saldo = kurangiSaldo(saldo)

