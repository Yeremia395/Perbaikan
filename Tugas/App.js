Vue.component('showform', {
    template : '#show-form',
    data(){
        return {
            data : { nama_pemilik: '',
                     alamat: '',
                     type_mobil: '',
                     nama_mobil: '',
                     warna_mobil: '',
                     plat_mobil: '',
                     cc_mobil: '',
                     tahun_pembuatan: ''
                    }
        }
    },
    methods: {
        simpan : function () {
            this.$emit('send-data', this.data);
            this.data.nama_pemilik  = "";
            this.data.alamat        = "";
            this.data.type_mobil   = "";
            this.data.nama_mobil    = "";
            this.data.warna_mobil   = "";
            this.data.plat_mobil   = "";
            this.data.cc_mobil     = "";
            this.data.tahun_pembuatan   = "";
        }
    }
})

Vue.component('showdata', {
    template : '#show-data',
    props    : ['data']
})

var app = new Vue({
    el      : '#app',
    data    : {
        stnk : {}
    },

    methods : {
        getData : function (value) {
            this.stnk = {
                nama_pemilik : value.nama_pemilik,
                alamat       : value.alamat,
                merek_motor  : value.type_mobil,
                nama_motor   : value.nama_mobil,
                warna_motor  : value.warna_mobil,
                nomor_plat   : value.plat_mobil,
                cc_motor     : value.cc_mobil,
                bahan_bakar  : value.tahun_pembuatan
            }
        }
    }
})