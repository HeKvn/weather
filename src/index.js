var app = new Vue({
    el:"#app",
    data:{
        city:'',
        weather:[]
    },
    methods:{
        searchWeather:function(){
            const that = this
            // console.log('天气查询')
            // console.log(this.city)

            //--------------(url传参)
            // axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            // .then(function(respone){
            //     // console.log(respone.data.data.forecast)
            //     that.weather = respone.data.data.forecast
            // })
            // .catch(function(err){
            //     console.log(err)
            // })
            
            //-------------(params传参)
            axios.get('http://wthrcdn.etouch.cn/weather_mini',{
                params:{
                    city:that.city
                }
            })
            .then(function(respone){
                // console.log(respone.data.data.forecast)
                that.weather = respone.data.data.forecast
            })
            .catch(function(err){
                console.log(err)
            })
        },
        changeCity:function(city){
            this.city = city
            this.searchWeather()
        }
    }
})