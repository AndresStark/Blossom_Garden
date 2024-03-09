module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors:{
          'pink':"#DCAEAE",
          'dark-pink':"#DBB2A5",
          'green':"#A6BCAD",
          'dark-green':"#65746A",
          'blue':"#2E4756"
        },
        backgroundImage:{
          'banner':"url('/src/assets/img/banner.png')"
        },
        fontFamily:{
          'title':'Fuggles',
          // 'body':'Raleway',
          'body':'Cardo',
        },
        spacing:{
          '5%': '5%',
          '10%': '10%',
        },
        screens:{
          'lg':'1024px',
          'md':'768px',
          'sm':'520px'
        }
      },
      
    },
    plugins: [],
  }