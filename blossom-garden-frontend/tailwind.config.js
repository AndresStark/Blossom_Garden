module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors:{
          pink:"#DBB2A5",
          green:"#A6BCAD",
          blue:"#0B1115"
        },
        backgroundImage:{
          'banner':"url('/src/assets/img/banner.png')"
        },
        spacing:{
          '5%': '5%',
          '10%': '10%',          
        }
      },
      
    },
    plugins: [],
  }